window.__require = (function t(e, n, o) {
    function r(a, c) {
        if (!n[a]) {
            if (!e[a]) {
                var s = a.split("/");
                if (((s = s[s.length - 1]), !e[s])) {
                    var l = "function" == typeof __require && __require;
                    if (!c && l) return l(s, !0);
                    if (i) return i(s, !0);
                    throw new Error("Cannot find module '" + a + "'");
                }
                a = s;
            }
            var u = (n[a] = {
                exports: {},
            });
            e[a][0].call(
                u.exports,
                function (t) {
                    return r(e[a][1][t] || t);
                },
                u,
                u.exports,
                t,
                e,
                n,
                o
            );
        }
        return n[a].exports;
    }
    for (var i = "function" == typeof __require && __require, a = 0; a < o.length; a++) r(o[a]);
    return r;
})(
    {
        AddressDefine: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "8dfd5D7JD5D6J4XwhPdhcly", "AddressDefine"),
                    Object.defineProperty(n, "__esModule", {
                        value: !0,
                    }),
                    (n.PrefabAddressDefine = void 0);
                var o = (function () {
                    function t() {}
                    return (
                        (t.floatTipItem = {
                            bundlePath: "prefab",
                            resPath: "item/floatTipItem",
                        }),
                        (t.levelUpDifficulty = {
                            bundlePath: "prefab",
                            resPath: "item/levelUpDifficulty",
                        }),
                        (t.waitWindow = {
                            bundlePath: "prefab",
                            resPath: "window/waitWindow",
                        }),
                        (t.settingWindow = {
                            bundlePath: "prefab",
                            resPath: "window/settingWindow",
                        }),
                        (t.winWindow = {
                            bundlePath: "prefab",
                            resPath: "window/winWindow",
                        }),
                        (t.loseWindow = {
                            bundlePath: "prefab",
                            resPath: "window/loseWindow",
                        }),
                        (t.businessCardWindow = {
                            bundlePath: "prefab",
                            resPath: "window/businessCardWindow",
                        }),
                        (t.locationWindow = {
                            bundlePath: "prefab",
                            resPath: "window/locationWindow",
                        }),
                        (t.moreWindow = {
                            bundlePath: "prefab",
                            resPath: "window/moreWindow",
                        }),
                        (t.signinWindow = {
                            bundlePath: "prefab",
                            resPath: "window/signinWindow",
                        }),
                        (t.skinWindow = {
                            bundlePath: "prefab",
                            resPath: "window/skinWindow",
                        }),
                        (t.enterAwardWindow = {
                            bundlePath: "prefab",
                            resPath: "window/enterAwardWindow",
                        }),
                        (t.playerHpWindow = {
                            bundlePath: "prefab",
                            resPath: "window/playerHpWindow",
                        }),
                        (t.palWindow = {
                            bundlePath: "prefab",
                            resPath: "window/palWindow",
                        }),
                        (t.shareWindow = {
                            bundlePath: "prefab",
                            resPath: "window/shareWindow",
                        }),
                        (t.setLevelWindow = {
                            bundlePath: "prefab",
                            resPath: "window/setLevelWindow",
                        }),
                        t
                    );
                })();
                (n.PrefabAddressDefine = o), cc._RF.pop();
            },
            {},
        ],
        Analytics: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "e01abJ/E+BOaY2lsgOlsydJ", "Analytics"),
                    Object.defineProperty(n, "__esModule", {
                        value: !0,
                    }),
                    (n.Analytics = void 0);
                var o = t("./Platform"),
                    r = (function () {
                        function t() {}
                        return (
                            (t.uploadAppStart = function () {
                                o.Platform.current.uploadReportAnalytics("app_start", {
                                    app_start_count: 1,
                                });
                            }),
                            (t.uploadStartLoading = function () {
                                o.Platform.current.uploadReportAnalytics("start_loading", {
                                    start_loading_count: 1,
                                });
                            }),
                            (t.uploadFinishLoading = function () {
                                o.Platform.current.uploadReportAnalytics("finish_loading", {
                                    finish_loading_count: 1,
                                });
                            }),
                            (t.uploadEnterHome = function () {
                                o.Platform.current.uploadReportAnalytics("enter_home", {
                                    enter_home_count: 1,
                                });
                            }),
                            (t.uploadClickStartGame = function () {
                                o.Platform.current.uploadReportAnalytics("click_startgame", {
                                    click_startgame_count: 1,
                                });
                            }),
                            (t.uploadAdClickTotal = function () {
                                o.Platform.current.uploadReportAnalytics("ad_click_total", {
                                    ad_click_total_count: 1,
                                });
                            }),
                            (t.uploadAdSucceTotal = function () {
                                o.Platform.current.uploadReportAnalytics("ad_succe_total", {
                                    ad_succe_total_count: 1,
                                });
                            }),
                            (t.uploadEnterLvX = function (t, e) {
                                o.Platform.current.uploadReportAnalytics("enter_lv_x", {
                                    enter_lv_x_count: t + "_" + e,
                                });
                            }),
                            (t.uploadAdycClickLvX = function (t, e) {
                                o.Platform.current.uploadReportAnalytics("ad_yc_click_lvx", {
                                    ad_yc_click_lvx_count: t + "_" + e + "_yc",
                                });
                            }),
                            (t.uploadAdycSucceLvX = function (t, e) {
                                o.Platform.current.uploadReportAnalytics("ad_yc_succe_lvx", {
                                    ad_yc_succe_lvx_count: t + "_" + e + "_yc",
                                });
                            }),
                            (t.uploadAdchClickLvX = function (t, e) {
                                o.Platform.current.uploadReportAnalytics("ad_ch_click_lvx", {
                                    ad_ch_click_lvx_count: t + "_" + e + "_ch",
                                });
                            }),
                            (t.uploadAdchSucceLvX = function (t, e) {
                                o.Platform.current.uploadReportAnalytics("ad_ch_succe_lvx", {
                                    ad_ch_succe_lvx_count: t + "_" + e + "_ch",
                                });
                            }),
                            (t.uploadAdxpClickLvX = function (t, e) {
                                o.Platform.current.uploadReportAnalytics("ad_xp_click_lvx", {
                                    ad_xp_click_lvx_count: t + "_" + e + "_xp",
                                });
                            }),
                            (t.uploadAdxpSucceLvX = function (t, e) {
                                o.Platform.current.uploadReportAnalytics("ad_xp_succe_lvx", {
                                    ad_xp_succe_lvx_count: t + "_" + e + "_xp",
                                });
                            }),
                            (t.uploadAdkgClickLvX = function (t, e) {
                                o.Platform.current.uploadReportAnalytics("ad_kg_click_lvx", {
                                    ad_kg_click_lvx_count: t + "_" + e + "_kg",
                                });
                            }),
                            (t.uploadAdkgSucceLvX = function (t, e) {
                                o.Platform.current.uploadReportAnalytics("ad_kg_succe_lvx", {
                                    ad_kg_succe_lvx_count: t + "_" + e + "_kg",
                                });
                            }),
                            (t.uploadAdfhClickLvX = function (t, e) {
                                o.Platform.current.uploadReportAnalytics("ad_fh_click_lvx", {
                                    ad_fh_click_lvx_count: t + "_" + e + "_fh",
                                });
                            }),
                            (t.uploadAdfhSucceLvX = function (t, e) {
                                o.Platform.current.uploadReportAnalytics("ad_fh_succe_lvx", {
                                    ad_fh_succe_lvx_count: t + "_" + e + "_fh",
                                });
                            }),
                            (t.uploadSignClick = function () {
                                o.Platform.current.uploadReportAnalytics("sign_click", {
                                    sign_click_count: 1,
                                });
                            }),
                            (t.uploadSignNum = function (t) {
                                o.Platform.current.uploadReportAnalytics("sign_num", {
                                    sign_num_count: t,
                                });
                            }),
                            (t.uploadSignDoubleClick = function (t) {
                                o.Platform.current.uploadReportAnalytics("sign_double_click", {
                                    sign_double_click_count: t,
                                });
                            }),
                            (t.uploadSignDoubleSucce = function (t) {
                                o.Platform.current.uploadReportAnalytics("sign_double_succe", {
                                    sign_double_succe_count: t,
                                });
                            }),
                            (t.uploadShopClick = function () {
                                o.Platform.current.uploadReportAnalytics("shop_click", {
                                    shop_click_count: 1,
                                });
                            }),
                            (t.uploadShopItemIdClick = function (t) {
                                o.Platform.current.uploadReportAnalytics("shop_item_id_click", {
                                    shop_item_id_click_count: t,
                                });
                            }),
                            (t.uploadShopItemIdSucce = function (t) {
                                o.Platform.current.uploadReportAnalytics("shop_item_id_succe", {
                                    shop_item_id_succe_count: t,
                                });
                            }),
                            (t.uploadShopItemIdAdClick = function (t) {
                                o.Platform.current.uploadReportAnalytics("shop_item_id_ad_click", {
                                    shop_item_id_ad_click_count: t,
                                });
                            }),
                            (t.uploadShopItemIdAdSucce = function (t) {
                                o.Platform.current.uploadReportAnalytics("shop_item_id_ad_succe", {
                                    shop_item_id_ad_succe_count: t,
                                });
                            }),
                            (t.uploadStartClick = function () {
                                o.Platform.current.uploadReportAnalytics("start_click", {
                                    start_click_count: 1,
                                });
                            }),
                            (t.uploadYsAccepOrDeclinetClick = function (t) {
                                t
                                    ? o.Platform.current.uploadReportAnalytics("ys_accept", {
                                          ys_accept_count: 1,
                                      })
                                    : o.Platform.current.uploadReportAnalytics("ys_decline", {
                                          ys_decline_count: 1,
                                      });
                            }),
                            (t.uploadComboSucceX = function (t, e, n) {
                                o.Platform.current.uploadReportAnalytics("combo_cucce_x", {
                                    combo_cucce_x_count: t + "_" + e + "_" + n,
                                });
                            }),
                            (t.uploadTargetAccomplishX = function (t, e, n) {
                                o.Platform.current.uploadReportAnalytics("target_accomplish_x", {
                                    target_accomplish_x_count: t + "_" + e + "_" + n,
                                });
                            }),
                            (t.uploadClickPause = function () {
                                o.Platform.current.uploadReportAnalytics("click_pause", {
                                    click_pause_count: 1,
                                });
                            }),
                            (t.uploadClickPauseGoBack = function () {
                                o.Platform.current.uploadReportAnalytics("click_pause_go_back", {
                                    click_pause_go_back_count: 1,
                                });
                            }),
                            (t.uploadClickPauseContinue = function () {
                                o.Platform.current.uploadReportAnalytics("click_pause_continue", {
                                    click_pause_continue_count: 1,
                                });
                            }),
                            (t.uploadClickPauseAgain = function () {
                                o.Platform.current.uploadReportAnalytics("click_pause_again", {
                                    click_pause_again_count: 1,
                                });
                            }),
                            (t.uploadAdChuiziClickLvX = function (t, e) {
                                o.Platform.current.uploadReportAnalytics("ad_chuizi_click_lvx", {
                                    ad_chuizi_click_lvx_count: t + "_" + e + "_cz",
                                });
                            }),
                            (t.uploadAdChuiziSucceLvX = function (t, e) {
                                o.Platform.current.uploadReportAnalytics("ad_chuizi_succe_lvx", {
                                    ad_chuizi_succe_lvx_count: t + "_" + e + "_cz",
                                });
                            }),
                            (t.uploadLvXResidueIceCount = function (t, e, n) {
                                o.Platform.current.uploadReportAnalytics("residue_ice_lvx", {
                                    residue_ice_lvx_count: "ice_" + t + "_" + e + "_" + n,
                                });
                            }),
                            (t.uploadLvXResidueMistCount = function (t, e, n) {
                                o.Platform.current.uploadReportAnalytics("residue_mist_lvx", {
                                    residue_mist_lvx_count: "mist_" + t + "_" + e + "_" + n,
                                });
                            }),
                            (t.uploadLvXResidueHinderPropCount = function (t, e, n, r) {
                                o.Platform.current.uploadReportAnalytics("residue_hinder_prop_lvx", {
                                    residue_hinder_prop_lvx_count: t + "_" + e + "_" + n + "_" + r,
                                });
                            }),
                            (t.uploadComboTipsCount = function () {
                                o.Platform.current.uploadReportAnalytics("combo_tips", {
                                    combo_tips_count: 1,
                                });
                            }),
                            (t.uploadPropTipsCount = function (t, e) {
                                o.Platform.current.uploadReportAnalytics("prop_tips", {
                                    prop_tips_count: "prop_" + t + "_" + e,
                                });
                            }),
                            (t.uploadOneLevelGainPrompCount = function (t, e) {
                                o.Platform.current.uploadReportAnalytics("one_level_gain_promp", {
                                    one_level_gain_promp_count: t + "_" + e,
                                });
                            }),
                            t
                        );
                    })();
                (n.Analytics = r), cc._RF.pop();
            },
            {
                "./Platform": "Platform",
            },
        ],
        AnimationNode: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "18bffHRpyROl5RBtHnisrpG", "AnimationNode");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.AnimationNode = void 0);
                var a = cc._decorator,
                    c = a.ccclass,
                    s = a.property,
                    l = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (
                                (e.nodes = []),
                                (e._index = 0),
                                (e._isPause = !1),
                                (e._tick = 0),
                                (e._interval = 0),
                                (e._isLoop = !1),
                                e
                            );
                        }
                        return (
                            r(e, t),
                            (e.prototype.play = function (t, e) {
                                void 0 === e && (e = !0),
                                    (this._index = 0),
                                    (this._interval = t / this.nodes.length),
                                    (this._isLoop = e),
                                    (this.pause = !1),
                                    this.switch(this._index);
                            }),
                            Object.defineProperty(e.prototype, "pause", {
                                get: function () {
                                    return this._isPause;
                                },
                                set: function (t) {
                                    this._isPause = t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (e.prototype.stop = function () {
                                this.nodes.forEach(function (t) {
                                    t.active = !1;
                                }),
                                    (this.nodes[0].active = !0),
                                    (this.pause = !0);
                            }),
                            (e.prototype.update = function (t) {
                                this.pause ||
                                    ((this._tick += t),
                                    this._tick > this._interval && ((this._tick -= this._interval), this.next()));
                            }),
                            (e.prototype.next = function () {
                                if (!(this.nodes.length <= 0))
                                    if ((this._index++, !this._isLoop && this._index > this.nodes.length)) this.pause = !0;
                                    else {
                                        var t = this._index % this.nodes.length;
                                        this.switch(t);
                                    }
                            }),
                            (e.prototype.switch = function (t) {
                                this.nodes.forEach(function (e, n) {
                                    e.active = t == n;
                                });
                            }),
                            (e.prototype.reset = function () {
                                this.nodes.forEach(function (t) {
                                    t.active = !1;
                                }),
                                    (this.pause = !0);
                            }),
                            i([s([cc.Node])], e.prototype, "nodes", void 0),
                            i([c], e)
                        );
                    })(cc.Component);
                (n.AnimationNode = l), cc._RF.pop();
            },
            {},
        ],
        App: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "2a53boaJLhNoLpzAmvJyBdD", "App"),
                    Object.defineProperty(n, "__esModule", {
                        value: !0,
                    }),
                    (n.app = void 0);
                var o = t("../GD/tools/GDUtils"),
                    r = t("./Consts"),
                    i = t("./domain/UserData"),
                    a = t("./PlayerHp"),
                    c = (function () {
                        function t() {
                            switch (((this.fhAd = ""), (this.propAd = ""), (this.getAd = ""), cc.sys.platform)) {
                                case cc.sys.BYTEDANCE_GAME:
                                    (this.fhAd = r.fhAd), (this.propAd = r.propAd), (this.getAd = r.getAd);
                                    break;
                                case cc.sys.WECHAT_GAME:
                                    (this.fhAd = r.wxFhAd), (this.propAd = r.wxPropAd), (this.getAd = r.WxGetAd);
                            }
                        }
                        return (
                            (t.prototype.checkVideoReport = function () {
                                cc.sys.isBrowser;
                            }),
                            (t.prototype.setCurGameLevel = function (t, e) {
                                i.UserData.instance.setCurLevel(t, e);
                            }),
                            (t.prototype.getCurGameLevel = function (t) {
                                return i.UserData.instance.getCurLevel(t);
                            }),
                            (t.prototype.subtractHp = function () {
                                var t = i.UserData.instance.playerHp;
                                if (!t.infinity || !o.GDUtils.isToDay(t.time)) {
                                    if (a.playerHp.hp < 1) return !1;
                                    a.playerHp.subtractHp(1);
                                }
                                return !0;
                            }),
                            t
                        );
                    })();
                (n.app = new c()), cc._RF.pop();
            },
            {
                "../GD/tools/GDUtils": "GDUtils",
                "./Consts": "Consts",
                "./PlayerHp": "PlayerHp",
                "./domain/UserData": "UserData",
            },
        ],
        AudioInfoDefine: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "e4aa6MrALFNL5xh1v8oSb1a", "AudioInfoDefine"),
                    Object.defineProperty(n, "__esModule", {
                        value: !0,
                    }),
                    (n.AudioInfoDefine = void 0);
                var o = (function () {
                    function t() {}
                    return (
                        (t.mainBGM = {
                            clipOrRes: {
                                bundlePath: "audio",
                                resPath: "bgm",
                            },
                            zoomVolume: 1,
                        }),
                        (t.click = {
                            clipOrRes: {
                                bundlePath: "audio",
                                resPath: "click",
                            },
                            zoomVolume: 1,
                        }),
                        (t.win = {
                            clipOrRes: {
                                bundlePath: "audio",
                                resPath: "win",
                            },
                            zoomVolume: 1,
                        }),
                        (t.lose = {
                            clipOrRes: {
                                bundlePath: "audio",
                                resPath: "lose",
                            },
                            zoomVolume: 1,
                        }),
                        t
                    );
                })();
                (n.AudioInfoDefine = o), cc._RF.pop();
            },
            {},
        ],
        Bounding: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "e2228PxYUlNXarlCBNAZwr4", "Bounding");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.Bounding = void 0);
                var a = cc._decorator,
                    c = a.ccclass,
                    s = a.property,
                    l = a.executeInEditMode,
                    u = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (
                                (e.hitCount = 1), (e.id = 0), (e.mark = null), (e.isDebug = !1), (e._hit = 0), (e.onHit = null), e
                            );
                        }
                        return (
                            r(e, t),
                            (e.prototype.start = function () {
                                this.reset();
                            }),
                            (e.prototype.debug = function () {}),
                            (e.prototype.onEnable = function () {
                                this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
                            }),
                            (e.prototype.onDisable = function () {
                                this.node.off(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
                            }),
                            (e.prototype.update = function () {
                                this.isDebug && this.debug();
                            }),
                            (e.prototype.touchEnd = function (t) {
                                var e,
                                    n = this.checkHit(t);
                                console.log(n),
                                    n &&
                                        (this._hit++,
                                        this._hit == this.hitCount &&
                                            (null === (e = this.onHit) || void 0 === e || e.call(this, this.id),
                                            this.mark && (this.mark.active = !0)));
                            }),
                            (e.prototype.reset = function () {
                                this.mark && (this.mark.active = !1), (this._hit = 0);
                            }),
                            i([s], e.prototype, "hitCount", void 0),
                            i([s], e.prototype, "id", void 0),
                            i([s(cc.Node)], e.prototype, "mark", void 0),
                            i([s], e.prototype, "isDebug", void 0),
                            i([c, l], e)
                        );
                    })(cc.Component);
                (n.Bounding = u), cc._RF.pop();
            },
            {},
        ],
        BusinessCardWindow: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "5f266p4NfRDIr0ly1kmlPfp", "BusinessCardWindow");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        },
                    a =
                        (this && this.__awaiter) ||
                        function (t, e, n, o) {
                            return new (n || (n = Promise))(function (r, i) {
                                function a(t) {
                                    try {
                                        s(o.next(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function c(t) {
                                    try {
                                        s(o.throw(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function s(t) {
                                    var e;
                                    t.done
                                        ? r(t.value)
                                        : ((e = t.value),
                                          e instanceof n
                                              ? e
                                              : new n(function (t) {
                                                    t(e);
                                                })).then(a, c);
                                }
                                s((o = o.apply(t, e || [])).next());
                            });
                        },
                    c =
                        (this && this.__generator) ||
                        function (t, e) {
                            var n,
                                o,
                                r,
                                i,
                                a = {
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
                                    return s([t, e]);
                                };
                            }
                            function s(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a; )
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
                                                    a.label++,
                                                    {
                                                        value: i[1],
                                                        done: !1,
                                                    }
                                                );
                                            case 5:
                                                a.label++, (o = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = a.ops.pop()), a.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(r = (r = a.trys).length > 0 && r[r.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                    a.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && a.label < r[1]) {
                                                    (a.label = r[1]), (r = i);
                                                    break;
                                                }
                                                if (r && a.label < r[2]) {
                                                    (a.label = r[2]), a.ops.push(i);
                                                    break;
                                                }
                                                r[2] && a.ops.pop(), a.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, a);
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
                });
                var s = t("../../GD/manage/GDWindowMgr"),
                    l = t("../../GD/tools/GDRequest"),
                    u = t("../../GD/ui/GDButton"),
                    p = t("../../platform/Platform"),
                    f = t("../com/FloatTipItem"),
                    h = t("../core/Core"),
                    d = t("../define/AddressDefine"),
                    y = t("../define/GameEventDefine"),
                    v = t("../domain/UserData"),
                    _ = cc._decorator,
                    g = _.ccclass,
                    m = _.property,
                    b = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (
                                (e.closeBtn = null),
                                (e.head = null),
                                (e.nickNameLbl = null),
                                (e.levelTotelLbl = null),
                                (e.birthdayLbl = null),
                                (e.gpsLbl = null),
                                (e.gpsBtn = null),
                                (e.closeGpsBtn = null),
                                (e.openGpsBtn = null),
                                (e.levelTodayLbl = null),
                                (e.wtgTips = null),
                                (e.levelTryLbl = null),
                                (e.win = null),
                                (e.lose = null),
                                (e.getUserInfoBtn = null),
                                e
                            );
                        }
                        return (
                            r(e, t),
                            (e.prototype.start = function () {
                                this.closeBtn.addClickListener(this.closeWindow, this),
                                    this.gpsBtn.addClickListener(this.showLocationWindow, this),
                                    this.closeGpsBtn.addClickListener(this.closeLocation, this),
                                    this.openGpsBtn.addClickListener(this.openLocation, this),
                                    this.updateGpsBtnState(),
                                    y.gameEvent.on(y.GameEventDefine.refreshHallRankEvent, this.setGpsLabel, this);
                            }),
                            (e.prototype.onDestroy = function () {
                                y.gameEvent.off(y.GameEventDefine.refreshHallRankEvent, this.setGpsLabel);
                            }),
                            (e.prototype.closeWindow = function () {
                                p.Platform.current.hideUserInfoButton(), this.close();
                            }),
                            (e.prototype.onOpen = function () {
                                this.showInfo(),
                                    this.getUserInfo(),
                                    this.getLocation(),
                                    this.createWxUserInfoButton(),
                                    (this.node.active = !0);
                            }),
                            (e.prototype.createWxUserInfoButton = function () {
                                var t = this;
                                cc.sys.platform == cc.sys.WECHAT_GAME
                                    ? v.UserData.instance.userInfo ||
                                      ((this.getUserInfoBtn.active = !0),
                                      p.Platform.current.createUserInfoButton(this.getUserInfoBtn, function () {
                                          cc.isValid(t.node) && (null == t || t.getUserInfo(), (t.getUserInfoBtn.active = !1));
                                      }))
                                    : (this.getUserInfoBtn.active = !1);
                            }),
                            (e.prototype.getUserInfo = function () {
                                return a(this, void 0, void 0, function () {
                                    var t;
                                    return c(this, function (e) {
                                        switch (e.label) {
                                            case 0:
                                                return (t = v.UserData.instance.userInfo)
                                                    ? [3, 3]
                                                    : [4, p.Platform.current.authorize(p.Scope.userInfo)];
                                            case 1:
                                                return e.sent()
                                                    ? [4, p.Platform.current.getUserInfo()]
                                                    : (console.log("\u7528\u6237\u672a\u6388\u6743"), [2]);
                                            case 2:
                                                (t = e.sent()),
                                                    console.log("userInfoData", t),
                                                    t && v.UserData.instance.saveUserInfo(t),
                                                    (e.label = 3);
                                            case 3:
                                                if (!t) return [2];
                                                this.nickNameLbl.string = null == t ? void 0 : t.nickName;
                                                try {
                                                    switch (cc.sys.platform) {
                                                        case cc.sys.BYTEDANCE_GAME:
                                                        case cc.sys.WECHAT_GAME:
                                                            h.core.utilUser.setSpriteFrame(this.head, t.avatarUrl);
                                                    }
                                                } catch (n) {
                                                    console.log("\u52a0\u8f7d\u5934\u50cf\u9519\u8bef");
                                                }
                                                return [2];
                                        }
                                    });
                                });
                            }),
                            (e.prototype.getLocation = function () {
                                return a(this, void 0, void 0, function () {
                                    var t, e, n;
                                    return c(this, function (o) {
                                        switch (o.label) {
                                            case 0:
                                                return (t = v.UserData.instance.team) && "" != t
                                                    ? [3, 4]
                                                    : (e = v.UserData.instance.location)
                                                    ? [3, 4]
                                                    : [4, p.Platform.current.authorize(p.Scope.userLocation)];
                                            case 1:
                                                return o.sent()
                                                    ? [4, p.Platform.current.getLocation()]
                                                    : (console.log("\u7528\u6237\u6388\u6743\u5931\u8d25"), [2]);
                                            case 2:
                                                return (e = o.sent())
                                                    ? (v.UserData.instance.saveLocation(e),
                                                      [4, l.GDRequest.getLocation(e.longitude, e.latitude)])
                                                    : [3, 4];
                                            case 3:
                                                (n = o.sent()) && (v.UserData.instance.updateTeam(n.province), (t = n.province)),
                                                    (o.label = 4);
                                            case 4:
                                                return this.setGpsLabel(t), [2];
                                        }
                                    });
                                });
                            }),
                            (e.prototype.setGpsLabel = function (t) {
                                var e = v.UserData.instance.isOpenLocation;
                                this.gpsLbl.string = t && e ? t || "\u672a\u77e5" : "\u672a\u5f00\u542f\u5b9a\u4f4d";
                            }),
                            (e.prototype.showInfo = function () {
                                var t = "",
                                    e = v.UserData.instance,
                                    n = e.firstTime;
                                if (n > 0) {
                                    var o = new Date(n);
                                    t =
                                        "\u4e8e" +
                                        o.getFullYear() +
                                        "\u5e74" +
                                        o.getMonth() +
                                        "\u6708" +
                                        o.getDate() +
                                        "\u65e5\u8bde\u751f";
                                }
                                (this.birthdayLbl.string = t), (this.levelTotelLbl.string = "" + e.levelTotel);
                                var r = e.dayData,
                                    i = 0;
                                r.forEach(function (t) {
                                    t.count && i++;
                                }),
                                    (this.win.active = i > 0),
                                    i
                                        ? ((this.levelTodayLbl.node.parent.active = !0),
                                          (this.wtgTips.active = !1),
                                          (this.levelTodayLbl.string = "" + i))
                                        : ((this.levelTodayLbl.node.parent.active = !1), (this.wtgTips.active = !0)),
                                    (this.levelTryLbl.string = "" + (null == r ? void 0 : r.length));
                            }),
                            (e.prototype.showLocationWindow = function () {
                                s.GDWindowMgr.instance.openWindow(d.PrefabAddressDefine.locationWindow);
                            }),
                            (e.prototype.openLocation = function () {
                                v.UserData.instance.updateOpenLocation(1),
                                    this.updateGpsBtnState(),
                                    this.setGpsLabel(v.UserData.instance.team),
                                    y.gameEvent.emit(y.GameEventDefine.refreshHallRankEvent, v.UserData.instance.team),
                                    f.FloatTipItem.show("\u5b9a\u4f4d\u529f\u80fd\u5df2\u5f00\u542f", 2);
                            }),
                            (e.prototype.closeLocation = function () {
                                v.UserData.instance.updateOpenLocation(0),
                                    this.updateGpsBtnState(),
                                    this.setGpsLabel(v.UserData.instance.team),
                                    y.gameEvent.emit(y.GameEventDefine.refreshHallRankEvent, v.UserData.instance.team),
                                    f.FloatTipItem.show("\u5b9a\u4f4d\u529f\u80fd\u5df2\u5173\u95ed", 2);
                            }),
                            (e.prototype.updateGpsBtnState = function () {
                                var t = v.UserData.instance.isOpenLocation;
                                (this.closeGpsBtn.node.active = 1 == t),
                                    (this.openGpsBtn.node.active = 0 == t),
                                    this.getLocation(),
                                    y.gameEvent.emit(y.GameEventDefine.refreshHallRankEvent);
                            }),
                            i([m(u.GDButton)], e.prototype, "closeBtn", void 0),
                            i(
                                [
                                    m({
                                        type: cc.Sprite,
                                        tooltip: "\u5934\u50cf",
                                    }),
                                ],
                                e.prototype,
                                "head",
                                void 0
                            ),
                            i(
                                [
                                    m({
                                        type: cc.Label,
                                        tooltip: "\u6635\u79f0",
                                    }),
                                ],
                                e.prototype,
                                "nickNameLbl",
                                void 0
                            ),
                            i(
                                [
                                    m({
                                        type: cc.Label,
                                        tooltip: "\u603b\u901a\u5173\u6b21\u6570",
                                    }),
                                ],
                                e.prototype,
                                "levelTotelLbl",
                                void 0
                            ),
                            i(
                                [
                                    m({
                                        type: cc.Label,
                                        tooltip: "\u8bde\u751f",
                                    }),
                                ],
                                e.prototype,
                                "birthdayLbl",
                                void 0
                            ),
                            i(
                                [
                                    m({
                                        type: cc.Label,
                                        tooltip: "\u5b9a\u4f4d",
                                    }),
                                ],
                                e.prototype,
                                "gpsLbl",
                                void 0
                            ),
                            i(
                                [
                                    m({
                                        type: u.GDButton,
                                        tooltip: "\u5b9a\u4f4d\u6309\u94ae",
                                    }),
                                ],
                                e.prototype,
                                "gpsBtn",
                                void 0
                            ),
                            i(
                                [
                                    m({
                                        type: u.GDButton,
                                        tooltip: "\u5173\u95ed\u5b9a\u4f4d\u6309\u94ae",
                                    }),
                                ],
                                e.prototype,
                                "closeGpsBtn",
                                void 0
                            ),
                            i(
                                [
                                    m({
                                        type: u.GDButton,
                                        tooltip: "\u6253\u5f00\u5b9a\u4f4d\u6309\u94ae",
                                    }),
                                ],
                                e.prototype,
                                "openGpsBtn",
                                void 0
                            ),
                            i(
                                [
                                    m({
                                        type: cc.Label,
                                        tooltip: "\u4eca\u65e5\u901a\u5173\u6b21\u6570",
                                    }),
                                ],
                                e.prototype,
                                "levelTodayLbl",
                                void 0
                            ),
                            i(
                                [
                                    m({
                                        type: cc.Node,
                                        tooltip: "\u672a\u901a\u5173\u63d0\u793a",
                                    }),
                                ],
                                e.prototype,
                                "wtgTips",
                                void 0
                            ),
                            i(
                                [
                                    m({
                                        type: cc.Label,
                                        tooltip: "\u4eca\u65e5\u5c1d\u8bd5\u6b21\u6570",
                                    }),
                                ],
                                e.prototype,
                                "levelTryLbl",
                                void 0
                            ),
                            i(
                                [
                                    m({
                                        type: cc.Node,
                                        tooltip: "\u901a\u5173img",
                                    }),
                                ],
                                e.prototype,
                                "win",
                                void 0
                            ),
                            i(
                                [
                                    m({
                                        type: cc.Node,
                                        tooltip: "\u672a\u901a\u5173img",
                                    }),
                                ],
                                e.prototype,
                                "lose",
                                void 0
                            ),
                            i(
                                [
                                    m({
                                        type: cc.Node,
                                        tooltip: "\u83b7\u53d6\u7528\u6237\u5934\u50cf\u6309\u94ae",
                                    }),
                                ],
                                e.prototype,
                                "getUserInfoBtn",
                                void 0
                            ),
                            i([g], e)
                        );
                    })(s.GDWindow);
                (n.default = b), cc._RF.pop();
            },
            {
                "../../GD/manage/GDWindowMgr": "GDWindowMgr",
                "../../GD/tools/GDRequest": "GDRequest",
                "../../GD/ui/GDButton": "GDButton",
                "../../platform/Platform": "Platform",
                "../com/FloatTipItem": "FloatTipItem",
                "../core/Core": "Core",
                "../define/AddressDefine": "AddressDefine",
                "../define/GameEventDefine": "GameEventDefine",
                "../domain/UserData": "UserData",
            },
        ],
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
                                a = i.getBachther(),
                                c = [],
                                s = [];
                            Object.defineProperty(i.prototype, "_opacity", {
                                value: function (t) {
                                    a.parentOpacityDirty++,
                                        t.__levelRender && c[t.__itemIndex] && (c[t.__itemIndex].parentOpacityDirty = 1),
                                        this._next._func(t),
                                        (t._renderFlag &= ~n),
                                        t.__levelRender &&
                                            c[t.__itemIndex] &&
                                            t.__lastChildren &&
                                            (c[t.__itemIndex].parentOpacityDirty = 0),
                                        a.parentOpacityDirty--;
                                },
                            }),
                                Object.defineProperty(i.prototype, "_worldTransform", {
                                    value: function (t) {
                                        a.worldMatDirty++,
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
                                            a.worldMatDirty--;
                                    },
                                });
                            var l = function (t, e, n) {
                                    s[e] || (s[e] = []),
                                        s[e].push(t),
                                        e++,
                                        (t.__renderLv = e),
                                        (t.__levelRender = !0),
                                        (t.__itemIndex = n);
                                    for (var o = t.children, r = 0; r < o.length; ++r) {
                                        var i = o[r];
                                        s[e] || (s[e] = []), (e = l(i, e, n));
                                    }
                                    return e;
                                },
                                u = function (t) {
                                    var n = t.children,
                                        o = t.opacity / 255;
                                    c = [];
                                    for (var u = 0; u < n.length; ++u)
                                        c.push({
                                            worldMatDirty: 0,
                                            parentOpacityDirty: 0,
                                        }),
                                            l(n[u], 0, u);
                                    for (; s.length > 0; ) {
                                        var p = s.shift();
                                        if (p.length > 0)
                                            for (; p.length > 0; ) {
                                                var f = p.shift();
                                                (f.__lastChildren = 0 == s.length), (f.__levelRender = !0);
                                                var h = f.parent.__opacityInHierarchy;
                                                void 0 === h && (h = o);
                                                var d = h * (f._opacity / 255);
                                                f.__opacityInHierarchy = d;
                                                var y = f._cullingMask,
                                                    v = 0;
                                                c[f.__itemIndex] && (v = c[f.__itemIndex].worldMatDirty || 0);
                                                var _ = 0;
                                                c[f.__itemIndex] && (_ = c[f.__itemIndex].parentOpacityDirty || 0);
                                                var g = (v || a.worldMatDirty ? e : 0) | (_ || a.parentOpacityDirty ? r : 0);
                                                if (((f._renderFlag |= g), f._activeInHierarchy && 0 !== f._opacity)) {
                                                    f._cullingMask = 0 === f.groupIndex ? y : 1 << f.groupIndex;
                                                    var m = f._color._val;
                                                    f._color._fastSetA(f._opacity * d),
                                                        i.flows[f._renderFlag]._func(f),
                                                        (f._color._val = m);
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
                                            s = void 0 !== c ? c : a.parentOpacity;
                                        if (o || t.__levelRender) u(t);
                                        else {
                                            var l = (s *= t._opacity / 255);
                                            t.__opacityInHierarchy = l;
                                            for (
                                                var p = (a.worldMatDirty ? e : 0) | (a.parentOpacityDirty ? r : 0),
                                                    f = t._children,
                                                    h = 0,
                                                    d = f.length;
                                                h < d;
                                                h++
                                            ) {
                                                var y = f[h];
                                                if (
                                                    ((y._renderFlag |= p),
                                                    (y.__opacityInHierarchy = (y._opacity * l) / 255),
                                                    y._activeInHierarchy && 0 !== y._opacity)
                                                ) {
                                                    y._cullingMask = 0 === y.groupIndex ? n : 1 << y.groupIndex;
                                                    var v = y._color._val;
                                                    y._color._fastSetA(y._opacity * l),
                                                        i.flows[y._renderFlag]._func(y),
                                                        (y._color._val = v);
                                                }
                                            }
                                        }
                                        (a.parentOpacity = s), this._next._func(t);
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
        CDWindow: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "bdaadAY/UdG4oFu/Kedhsga", "CDWindow");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        },
                    a =
                        (this && this.__awaiter) ||
                        function (t, e, n, o) {
                            return new (n || (n = Promise))(function (r, i) {
                                function a(t) {
                                    try {
                                        s(o.next(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function c(t) {
                                    try {
                                        s(o.throw(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function s(t) {
                                    var e;
                                    t.done
                                        ? r(t.value)
                                        : ((e = t.value),
                                          e instanceof n
                                              ? e
                                              : new n(function (t) {
                                                    t(e);
                                                })).then(a, c);
                                }
                                s((o = o.apply(t, e || [])).next());
                            });
                        },
                    c =
                        (this && this.__generator) ||
                        function (t, e) {
                            var n,
                                o,
                                r,
                                i,
                                a = {
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
                                    return s([t, e]);
                                };
                            }
                            function s(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a; )
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
                                                    a.label++,
                                                    {
                                                        value: i[1],
                                                        done: !1,
                                                    }
                                                );
                                            case 5:
                                                a.label++, (o = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = a.ops.pop()), a.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(r = (r = a.trys).length > 0 && r[r.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                    a.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && a.label < r[1]) {
                                                    (a.label = r[1]), (r = i);
                                                    break;
                                                }
                                                if (r && a.label < r[2]) {
                                                    (a.label = r[2]), a.ops.push(i);
                                                    break;
                                                }
                                                r[2] && a.ops.pop(), a.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, a);
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
                    (n.CDWindow = void 0);
                var s = t("../../GD/manage/GDWindowMgr"),
                    l = t("../../GD/ui/GDButton"),
                    u = t("../../platform/Platform"),
                    p = t("../App"),
                    f = t("../Consts"),
                    h = t("../com/FloatTipItem"),
                    d = t("./WaitWindow"),
                    y = cc._decorator,
                    v = y.ccclass,
                    _ = y.property,
                    g = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (e.addTimeBtn = null), (e.cancelBtn = null), (e.descLbl = null), e;
                        }
                        return (
                            r(e, t),
                            (e.prototype.start = function () {
                                this.addTimeBtn.addClickListener(this.clickAddTimeBtn, this),
                                    this.cancelBtn.addClickListener(this.clickCancel, this);
                            }),
                            (e.prototype.setDesc = function (t) {
                                this.descLbl.string = t;
                            }),
                            (e.prototype.setTime = function (t) {
                                this.descLbl.string =
                                    "<color=#000000>\u770b\u89c6\u9891\u53ef\u589e\u52a0</c><color=#ff>" +
                                    t +
                                    "</color><color=#000000>\u65f6\u95f4</color>";
                            }),
                            (e.prototype.clickCancel = function () {
                                var t;
                                null === (t = this.listener) || void 0 === t || t.cancel(this);
                            }),
                            (e.prototype.clickAddTimeBtn = function () {
                                var t;
                                return a(this, void 0, void 0, function () {
                                    var e;
                                    return c(this, function (n) {
                                        switch (n.label) {
                                            case 0:
                                                return d.WaitWindow.open(), [4, u.Platform.current.showRewardedVideoAd(f.cdAd)];
                                            case 1:
                                                return (
                                                    (e = n.sent()),
                                                    d.WaitWindow.close(),
                                                    e.isEnded
                                                        ? null === (t = this.listener) || void 0 === t || t.succeed(this)
                                                        : h.FloatTipItem.show(
                                                              "\u89c2\u770b\u5b8c\u89c6\u9891\u83b7\u5f97\u52a0\u65f6"
                                                          ),
                                                    p.app.checkVideoReport(e.isEnded),
                                                    [2]
                                                );
                                        }
                                    });
                                });
                            }),
                            i([_(l.GDButton)], e.prototype, "addTimeBtn", void 0),
                            i([_(l.GDButton)], e.prototype, "cancelBtn", void 0),
                            i([_(cc.RichText)], e.prototype, "descLbl", void 0),
                            i([v], e)
                        );
                    })(s.GDWindow);
                (n.CDWindow = g), cc._RF.pop();
            },
            {
                "../../GD/manage/GDWindowMgr": "GDWindowMgr",
                "../../GD/ui/GDButton": "GDButton",
                "../../platform/Platform": "Platform",
                "../App": "App",
                "../Consts": "Consts",
                "../com/FloatTipItem": "FloatTipItem",
                "./WaitWindow": "WaitWindow",
            },
        ],
        CircleBounding: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "e6a25nuheNDyJkP9Nr14AMf", "CircleBounding");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                });
                var a = t("../../../../GD/tools/GDCCUtils"),
                    c = t("../../../../GD/tools/GDDraw"),
                    s = t("./Bounding"),
                    l = cc._decorator,
                    u = l.ccclass,
                    p = l.property,
                    f = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (e.radius = 0), e;
                        }
                        return (
                            r(e, t),
                            (e.prototype.onLoad = function () {
                                this.node.height = this.node.width = 2 * this.radius;
                            }),
                            Object.defineProperty(e.prototype, "realRadius", {
                                get: function () {
                                    return this.radius * this.node.scale;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (e.prototype.checkHit = function (t) {
                                var e = t.getLocation(),
                                    n = a.GDCCUtils.convertToWorldSpaceAR(this.node);
                                return cc.Vec2.squaredDistance(e, n) <= this.realRadius * this.realRadius;
                            }),
                            (e.prototype.debug = function () {
                                var t = a.GDCCUtils.convertToCanvasSpaceAR(this.node),
                                    e = cc.mat4();
                                this.node.getWorldMatrix(e);
                                var n = new cc.Vec3();
                                e.getScale(n), c.GDDraw.drawCircle(t, this.realRadius * n.x);
                            }),
                            i([p], e.prototype, "radius", void 0),
                            i([u], e)
                        );
                    })(s.Bounding);
                (n.default = f), cc._RF.pop();
            },
            {
                "../../../../GD/tools/GDCCUtils": "GDCCUtils",
                "../../../../GD/tools/GDDraw": "GDDraw",
                "./Bounding": "Bounding",
            },
        ],
        ClickHide: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "33eb3oA6fxP3KbSG2crTEIq", "ClickHide");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                });
                var a = t("../../GD/ui/GDButton"),
                    c = cc._decorator,
                    s = c.property,
                    l = c.ccclass,
                    u = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (e.okBtn = null), (e.callback = null), e;
                        }
                        return (
                            r(e, t),
                            (e.prototype.start = function () {
                                this.okBtn.addClickListener(this.onOkBtn, this);
                            }),
                            (e.prototype.onOkBtn = function () {
                                var t;
                                null === (t = this.callback) || void 0 === t || t.call(this),
                                    (this.node.active = !1),
                                    this.node.removeFromParent();
                            }),
                            i(
                                [
                                    s({
                                        type: a.GDButton,
                                        tooltip: "\u786e\u8ba4\u6309\u94ae",
                                    }),
                                ],
                                e.prototype,
                                "okBtn",
                                void 0
                            ),
                            i([l], e)
                        );
                    })(cc.Component);
                (n.default = u), cc._RF.pop();
            },
            {
                "../../GD/ui/GDButton": "GDButton",
            },
        ],
        Consts: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "64e37K3ESpHPrlNdzTGfWF5", "Consts"),
                    Object.defineProperty(n, "__esModule", {
                        value: !0,
                    }),
                    (n.WxGetAd =
                        n.wxPropAd =
                        n.wxFhAd =
                        n.getAd =
                        n.propAd =
                        n.fhAd =
                        n.cdAd =
                        n.configVer =
                        n.tdtKey =
                        n.locationUrl =
                        n.wxRemoteUrl =
                        n.ttRemoteUrl =
                        n.remoteUrl =
                            void 0),
                    (n.remoteUrl = "https://oss.firefly.51szyly.cn/elsfk/"),
                    (n.ttRemoteUrl = n.remoteUrl + "tt/"),
                    (n.wxRemoteUrl = n.remoteUrl + "wx/"),
                    (n.locationUrl = "https://api.tianditu.gov.cn/geocoder"),
                    (n.tdtKey = "6458eee89d8e190b76d8f12ada1d2b0e"),
                    (n.configVer = "config/1.0.0/"),
                    (n.cdAd = ""),
                    (n.fhAd = "61e7fe8i6d18b1jlpm"),
                    (n.propAd = "158b3nji56k9aj0gib"),
                    (n.getAd = "1jcditbp3dt8jdl931"),
                    (n.wxFhAd = "adunit-b27d009c7d9d9a37"),
                    (n.wxPropAd = "adunit-4b4fa56768542dea"),
                    (n.WxGetAd = "adunit-cab804c04dd8d6f1"),
                    cc._RF.pop();
            },
            {},
        ],
        Core: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "d4733XivuFGS72qkjZz2/SO", "Core"),
                    Object.defineProperty(n, "__esModule", {
                        value: !0,
                    }),
                    (n.core = void 0);
                var o = t("./UtilUser"),
                    r = t("./Vibrate");
                (n.core = new (function () {
                    (this.utilUser = new o.UtilUser()), (this.vibrate = new r.Vibrate());
                })()),
                    cc._RF.pop();
            },
            {
                "./UtilUser": "UtilUser",
                "./Vibrate": "Vibrate",
            },
        ],
        EnterAwardWindow: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "63c5afsG/RNnZO5YdlFm5o4", "EnterAwardWindow");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        },
                    a =
                        (this && this.__awaiter) ||
                        function (t, e, n, o) {
                            return new (n || (n = Promise))(function (r, i) {
                                function a(t) {
                                    try {
                                        s(o.next(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function c(t) {
                                    try {
                                        s(o.throw(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function s(t) {
                                    var e;
                                    t.done
                                        ? r(t.value)
                                        : ((e = t.value),
                                          e instanceof n
                                              ? e
                                              : new n(function (t) {
                                                    t(e);
                                                })).then(a, c);
                                }
                                s((o = o.apply(t, e || [])).next());
                            });
                        },
                    c =
                        (this && this.__generator) ||
                        function (t, e) {
                            var n,
                                o,
                                r,
                                i,
                                a = {
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
                                    return s([t, e]);
                                };
                            }
                            function s(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a; )
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
                                                    a.label++,
                                                    {
                                                        value: i[1],
                                                        done: !1,
                                                    }
                                                );
                                            case 5:
                                                a.label++, (o = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = a.ops.pop()), a.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(r = (r = a.trys).length > 0 && r[r.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                    a.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && a.label < r[1]) {
                                                    (a.label = r[1]), (r = i);
                                                    break;
                                                }
                                                if (r && a.label < r[2]) {
                                                    (a.label = r[2]), a.ops.push(i);
                                                    break;
                                                }
                                                r[2] && a.ops.pop(), a.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, a);
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
                });
                var s = t("../../GD/manage/GDWindowMgr"),
                    l = t("../../GD/ui/GDButton"),
                    u = t("../../platform/Platform"),
                    p = t("../com/FloatTipItem"),
                    f = t("../domain/UserData"),
                    h = cc._decorator,
                    d = h.ccclass,
                    y = h.property,
                    v = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (e.closeBtn = null), (e.blankCloseBtn = null), (e.sidebarBtn = null), (e.okState = null), e;
                        }
                        return (
                            r(e, t),
                            (e.prototype.start = function () {
                                this.closeBtn.addClickListener(this.close, this),
                                    this.blankCloseBtn.addClickListener(this.close, this),
                                    this.sidebarBtn.addClickListener(this.onClickSidebarEnder, this),
                                    this.showEnterAward();
                            }),
                            (e.prototype.onOpen = function () {
                                (this.node.active = !0), this.showEnterAward();
                            }),
                            (e.prototype.showEnterAward = function () {
                                var t = f.UserData.instance.sidebarEnter;
                                (this.okState.active = !!t), (this.sidebarBtn.node.active = !t);
                            }),
                            (e.prototype.onClickSidebarEnder = function () {
                                return a(this, void 0, void 0, function () {
                                    return c(this, function (t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, u.Platform.current.navigateToScene()];
                                            case 1:
                                                return (
                                                    t.sent() &&
                                                        (f.UserData.instance.updateProp(2, 5),
                                                        f.UserData.instance.setSidebarEnter(),
                                                        this.showEnterAward(),
                                                        p.FloatTipItem.show("\u5956\u52b1\u9886\u53d6\u6210\u529f!")),
                                                    [2]
                                                );
                                        }
                                    });
                                });
                            }),
                            i(
                                [
                                    y({
                                        type: l.GDButton,
                                        tooltip: "\u5173\u95ed",
                                    }),
                                ],
                                e.prototype,
                                "closeBtn",
                                void 0
                            ),
                            i([y(l.GDButton)], e.prototype, "blankCloseBtn", void 0),
                            i(
                                [
                                    y({
                                        type: l.GDButton,
                                        tooltip: "\u4fa7\u8fb9\u680f\u8fdb\u5165\u6309\u94ae",
                                    }),
                                ],
                                e.prototype,
                                "sidebarBtn",
                                void 0
                            ),
                            i(
                                [
                                    y({
                                        type: cc.Node,
                                        tooltip: "\u5df2\u83b7\u53d6\u72b6\u6001",
                                    }),
                                ],
                                e.prototype,
                                "okState",
                                void 0
                            ),
                            i([d], e)
                        );
                    })(s.GDWindow);
                (n.default = v), cc._RF.pop();
            },
            {
                "../../GD/manage/GDWindowMgr": "GDWindowMgr",
                "../../GD/ui/GDButton": "GDButton",
                "../../platform/Platform": "Platform",
                "../com/FloatTipItem": "FloatTipItem",
                "../domain/UserData": "UserData",
            },
        ],
        FloatTipItem: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "5eef585BZNCz5ut6xNeKsdg", "FloatTipItem");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.FloatTipItem = void 0);
                var a = t("../../GD/manage/GDAudioMgr"),
                    c = t("../../GD/manage/GDObjectPool"),
                    s = t("../../GD/tools/GDCCUtils"),
                    l = t("../define/AddressDefine"),
                    u = cc._decorator,
                    p = u.ccclass,
                    f = u.property,
                    h = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (e.msgLbl = null), e;
                        }
                        var n;
                        return (
                            r(e, t),
                            (n = e),
                            (e.prototype.onLoad = function () {
                                this._startY = 100;
                            }),
                            (e.prototype.show = function (t, e) {
                                var n = this;
                                void 0 === e && (e = 0.5),
                                    (this.msgLbl.string = t),
                                    (this.node.y = this._startY),
                                    (this.node.opacity = 255),
                                    cc
                                        .tween(this.node)
                                        .to(e, {
                                            y: this._startY + 150,
                                            opacity: 0,
                                        })
                                        .delay(0.5)
                                        .call(function () {
                                            return n.hide();
                                        })
                                        .start();
                            }),
                            (e.prototype.showAudio = function (t, e, n) {
                                var o = this;
                                void 0 === n && (n = 1),
                                    (this.msgLbl.string = t),
                                    (this.node.y = this._startY),
                                    (this.node.opacity = 255),
                                    cc
                                        .tween(this.node)
                                        .to(n, {
                                            y: this._startY + 150,
                                            opacity: 0,
                                        })
                                        .call(function () {
                                            return o.hide();
                                        })
                                        .start(),
                                    a.GDAudioMgr.instance.playOneShot(e);
                            }),
                            (e.prototype.hide = function () {
                                (this.node.opacity = 0), this.node.removeFromParent(), c.GDObjectPoolMgr.recycle(this.node);
                            }),
                            (e.show = function (t, e) {
                                void 0 === e && (e = 1);
                                var o = c.GDObjectPoolMgr.get(l.PrefabAddressDefine.floatTipItem);
                                s.GDCCUtils.addCanvasChild(o);
                                var r = o.getComponent(n);
                                return r.show(t, e), r;
                            }),
                            (e.showAudio = function (t, e, o) {
                                void 0 === o && (o = 1);
                                var r = c.GDObjectPoolMgr.get(l.PrefabAddressDefine.floatTipItem);
                                s.GDCCUtils.addCanvasChild(r);
                                var i = r.getComponent(n);
                                return i.showAudio(t, e, o), i;
                            }),
                            (e.hide = function (t) {
                                t.hide();
                            }),
                            (e.hideAll = function () {
                                c.GDObjectPoolMgr.recycleAll(l.PrefabAddressDefine.floatTipItem);
                            }),
                            i([f(cc.Label)], e.prototype, "msgLbl", void 0),
                            (n = i([p], e))
                        );
                    })(cc.Component);
                (n.FloatTipItem = h), cc._RF.pop();
            },
            {
                "../../GD/manage/GDAudioMgr": "GDAudioMgr",
                "../../GD/manage/GDObjectPool": "GDObjectPool",
                "../../GD/tools/GDCCUtils": "GDCCUtils",
                "../define/AddressDefine": "AddressDefine",
            },
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
                    a = t("./GDTask"),
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
                                    a.GDTaskStatus.SUCCEED
                                );
                            }),
                            e
                        );
                    })(a.GDTask);
                n.GDSetValueTask = c;
                var s = (function (t) {
                    function e(e) {
                        var n = t.call(this, e.desc) || this;
                        return (n.waitTime = 1), (n._tickTime = 0), (n.waitTime = e.waitTime), n;
                    }
                    return (
                        r(e, t),
                        (e.prototype.enter = function () {
                            return (this._tickTime = 0), a.GDTaskStatus.RUNNING;
                        }),
                        (e.prototype.update = function (t) {
                            (this._tickTime += t), this._tickTime >= this.waitTime && (this._status = a.GDTaskStatus.SUCCEED);
                        }),
                        e
                    );
                })(a.GDTask);
                (n.GDWaitTask = s), cc._RF.pop();
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.GDAnimation = void 0);
                var a = cc._decorator,
                    c = a.ccclass,
                    s = a.property,
                    l = a.requireComponent,
                    u = a.menu,
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
                                        a = {
                                            name: i.name,
                                            time: parseFloat(i.time),
                                        },
                                        c = a.time;
                                    (!c || c > 1 || c < o) && (c = (1 - o) / (n - r) + o),
                                        (a.time = c * e.duration),
                                        (o = c),
                                        (e.frames[r] = a);
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
                            i([s(cc.SpriteAtlas)], e.prototype, "atlas", void 0),
                            i([s(cc.JsonAsset)], e.prototype, "json", void 0),
                            (n = i([c, l(cc.Sprite), u("GD/GDAnimation")], e))
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
                                function a(t) {
                                    try {
                                        s(o.next(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function c(t) {
                                    try {
                                        s(o.throw(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function s(t) {
                                    var e;
                                    t.done
                                        ? r(t.value)
                                        : ((e = t.value),
                                          e instanceof n
                                              ? e
                                              : new n(function (t) {
                                                    t(e);
                                                })).then(a, c);
                                }
                                s((o = o.apply(t, e || [])).next());
                            });
                        },
                    r =
                        (this && this.__generator) ||
                        function (t, e) {
                            var n,
                                o,
                                r,
                                i,
                                a = {
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
                                    return s([t, e]);
                                };
                            }
                            function s(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a; )
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
                                                    a.label++,
                                                    {
                                                        value: i[1],
                                                        done: !1,
                                                    }
                                                );
                                            case 5:
                                                a.label++, (o = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = a.ops.pop()), a.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(r = (r = a.trys).length > 0 && r[r.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                    a.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && a.label < r[1]) {
                                                    (a.label = r[1]), (r = i);
                                                    break;
                                                }
                                                if (r && a.label < r[2]) {
                                                    (a.label = r[2]), a.ops.push(i);
                                                    break;
                                                }
                                                r[2] && a.ops.pop(), a.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, a);
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
                                function a(t) {
                                    try {
                                        s(o.next(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function c(t) {
                                    try {
                                        s(o.throw(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function s(t) {
                                    var e;
                                    t.done
                                        ? r(t.value)
                                        : ((e = t.value),
                                          e instanceof n
                                              ? e
                                              : new n(function (t) {
                                                    t(e);
                                                })).then(a, c);
                                }
                                s((o = o.apply(t, e || [])).next());
                            });
                        },
                    r =
                        (this && this.__generator) ||
                        function (t, e) {
                            var n,
                                o,
                                r,
                                i,
                                a = {
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
                                    return s([t, e]);
                                };
                            }
                            function s(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a; )
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
                                                    a.label++,
                                                    {
                                                        value: i[1],
                                                        done: !1,
                                                    }
                                                );
                                            case 5:
                                                a.label++, (o = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = a.ops.pop()), a.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(r = (r = a.trys).length > 0 && r[r.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                    a.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && a.label < r[1]) {
                                                    (a.label = r[1]), (r = i);
                                                    break;
                                                }
                                                if (r && a.label < r[2]) {
                                                    (a.label = r[2]), a.ops.push(i);
                                                    break;
                                                }
                                                r[2] && a.ops.pop(), a.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, a);
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
                    a = t("./GDResMgr"),
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
                                    var a = cc.audioEngine.playMusic(o, e);
                                    return this.setId(o, a), a;
                                }
                            }),
                            (t.prototype.playBGMAsync = function (t, e) {
                                var n;
                                return (
                                    void 0 === e && (e = !0),
                                    o(this, void 0, void 0, function () {
                                        var o, a, c, s;
                                        return r(this, function (r) {
                                            switch (r.label) {
                                                case 0:
                                                    return [4, this.loadClip(t.clipOrRes)];
                                                case 1:
                                                    return (
                                                        (o = r.sent()),
                                                        (a = null !== (n = t.zoomVolume) && void 0 !== n ? n : 1),
                                                        (c = a * this._currentMusicVolume),
                                                        (c = i.GDMath.clamp(c, 0, 1)),
                                                        cc.audioEngine.setMusicVolume(c),
                                                        (s = cc.audioEngine.playMusic(o, e)),
                                                        this.setId(o, s),
                                                        [2, s]
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
                                var a = cc.audioEngine.playEffect(o, e);
                                return this.setId(o, a), a;
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
                                        var o, a, c, s;
                                        return r(this, function (r) {
                                            switch (r.label) {
                                                case 0:
                                                    return [4, this.loadClip(t.clipOrRes)];
                                                case 1:
                                                    return (
                                                        (o = r.sent()),
                                                        (a = null !== (n = t.zoomVolume) && void 0 !== n ? n : 1),
                                                        (c = a * this._currentSoundVolume),
                                                        (c = i.GDMath.clamp(c, 0, 1)),
                                                        cc.audioEngine.setEffectsVolume(c),
                                                        (s = cc.audioEngine.playEffect(o, e)),
                                                        this.setId(o, s),
                                                        [2, s]
                                                    );
                                            }
                                        });
                                    })
                                );
                            }),
                            (t.prototype.setId = function (t, e) {
                                t instanceof cc.AudioClip
                                    ? this._idMap.set(t.nativeUrl, e)
                                    : this._idMap.set(a.GDResMgr.getResAddress(t), e);
                            }),
                            (t.prototype.getId = function (t) {
                                return t instanceof cc.AudioClip
                                    ? this._idMap.get(t.nativeUrl)
                                    : this._idMap.get(a.GDResMgr.getResAddress(t));
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
                                                    (e = a.GDResMgr.getResAddress(t)),
                                                    (n = this._cache.get(e)) ? [2, n] : [4, a.GDResMgr.load(t)]
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
                                var e = a.GDResMgr.getResAddress(t),
                                    n = this._cache.get(e);
                                return n && n.loaded ? n : (n = a.GDResMgr.get(t)) ? (this._cache.set(e, n), n) : void 0;
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.GDButton = void 0);
                var a = t("../manage/GDAudioMgr"),
                    c = cc._decorator,
                    s = c.ccclass,
                    l = c.property,
                    u = c.requireComponent,
                    p = c.menu,
                    f = (function (t) {
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
                                                a.GDAudioMgr.instance.playOneShot({
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
                            i([l], e.prototype, "isNormal", void 0),
                            i([l(cc.AudioClip)], e.prototype, "clickAudio", void 0),
                            i([s, u(cc.Button), p("GD/UI/GDButton")], e)
                        );
                    })(cc.Component);
                (n.GDButton = f), cc._RF.pop();
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
                                var a = this.FindChildNode(t, o[i]);
                                if (a) return a;
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
                                var a = this.FindChildComponent(t, o[i]);
                                if (a) return a;
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
                                    for (var a = 0; a < o; a++)
                                        if (t[i + a] !== e[a]) {
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
                                    var a = e.nextInt(n, n + r - i),
                                        c = t[a];
                                    (t[a] = t[r - i - 1 + n]), (t[r - i - 1 + n] = c);
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
                                    var a = new o.constructor();
                                    for (var c in e) this._deepCopyFields(a, o, c);
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
                                    a = o.sub(n),
                                    c = t.sub(e),
                                    s = t.sub(n);
                                return (
                                    (r.cross(i) >= 0) ^ (r.cross(c) < 0) &&
                                    (r.cross(i) >= 0) ^ (i.cross(c) >= 0) &&
                                    (a.cross(r) > 0) ^ (a.cross(s) >= 0)
                                );
                            }),
                            (t.isInPolygon = function (t, e) {
                                var n,
                                    o,
                                    r,
                                    i,
                                    a = 0,
                                    c = e.length;
                                for (r = e[0], n = 1; n <= c; n++)
                                    (i = e[n % c]),
                                        t.x > Math.min(r.x, i.x) &&
                                            t.x <= Math.max(r.x, i.x) &&
                                            t.y <= Math.max(r.y, i.y) &&
                                            r.x != i.x &&
                                            ((o = ((t.x - r.x) * (i.y - r.y)) / (i.x - r.x) + r.y),
                                            (r.y == i.y || t.y <= o) && a++),
                                        (r = i);
                                return a % 2 != 0;
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
                                for (var i = [], a = 0; t.length > 3; ) {
                                    var c = t[a % t.length],
                                        s = t[(a + 1) % t.length],
                                        l = t[(a + 2) % t.length],
                                        u = (a + 1) % t.length,
                                        p = s.sub(c),
                                        f = l.sub(s);
                                    if (p.cross(f) < 0) a = (a + 1) % t.length;
                                    else {
                                        for (var h = !1, d = 0, y = t; d < y.length; d++)
                                            if ((o = y[d]) != c && o != s && o != l && this.isInTriangle(o, c, s, l)) {
                                                h = !0;
                                                break;
                                            }
                                        h ? (a = (a + 1) % t.length) : (i.push(r(c), r(s), r(l)), t.splice(u, 1));
                                    }
                                }
                                for (var v = 0, _ = t; v < _.length; v++) (o = _[v]), i.push(r(o));
                                return i;
                            }),
                            (t.computeUv = function (t, e, n) {
                                for (var o = [], r = 0, i = t; r < i.length; r++) {
                                    var a = i[r],
                                        c = this.clamp(0, 1, (a.x + e / 2) / e),
                                        s = this.clamp(0, 1, 1 - (a.y + n / 2) / n);
                                    o.push(cc.v2(c, s));
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
                    a = (function (t) {
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
                n.GDSequenceTask = a;
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
                var s = (function (t) {
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
                (n.GDParallelTask = s), cc._RF.pop();
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
                    a = t("../GDBlackboard"),
                    c = t("./GDTask");
                (function (t) {
                    (t[(t[">"] = 0)] = ">"),
                        (t[(t["<"] = 1)] = "<"),
                        (t[(t["=="] = 2)] = "=="),
                        (t[(t[">="] = 3)] = ">="),
                        (t[(t["<="] = 4)] = "<=");
                })((i = n.ComparisonType || (n.ComparisonType = {})));
                var s = (function (t) {
                    function e(e) {
                        var n = t.call(this, e.desc) || this;
                        return (
                            (n.key = e.key), (n.value = e.value), (n.comparisonType = e.comparisonType), (n.bbName = e.bbName), n
                        );
                    }
                    return (
                        r(e, t),
                        (e.prototype.enter = function () {
                            var t = a.GDBlackboardMgr.getBlackboard(this.bbName).getValue(this.key);
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
                (n.GDComparisonTask = s), cc._RF.pop();
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
                    a = (function (t) {
                        function e(e) {
                            var n = t.call(this, e.desc) || this;
                            return (n.children = null), (n.children = e.children), n;
                        }
                        return r(e, t), e;
                    })(i.GDTask);
                n.GDDecoratorTask = a;
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
                })(a);
                n.GDUntilSucceedTask = c;
                var s = (function (t) {
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
                })(a);
                n.GDUntilFailTask = s;
                var l = (function (t) {
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
                })(a);
                (n.GDLoopTask = l), cc._RF.pop();
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
                                a = t.add(r.GDMath.polarToCartesianByRad(o, n));
                            i.moveTo(a.x, a.y);
                            for (var c = cc.Vec2.ZERO, s = 0; s < 64; s++) {
                                o += e;
                                var l = Math.cos(o) * n,
                                    u = Math.sin(o) * n;
                                (c.x = t.x + l), (c.y = t.y + u), i.lineTo(c.x, c.y);
                            }
                            i.lineTo(a.x, a.y),
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
                            var a = n / i,
                                c = e,
                                s = this.getGraphics(),
                                l = t.add(r.GDMath.polarToCartesianByRad(c, o));
                            s.moveTo(l.x, l.y);
                            for (var u = cc.Vec2.ZERO, p = 0; p < i; p++) {
                                c += a;
                                var f = Math.cos(c) * o,
                                    h = Math.sin(c) * o;
                                (u.x = t.x + f), (u.y = t.y + h), s.lineTo(u.x, u.y);
                            }
                            (s.lineWidth = this.lineSize),
                                (s.strokeColor = this.color),
                                (s.lineJoin = cc.Graphics.LineJoin.ROUND),
                                s.stroke(),
                                (s.lineJoin = cc.Graphics.LineJoin.MITER);
                        }),
                        (t.drawCircle = function (t, e, n) {
                            void 0 === n && (n = 64);
                            var o = (2 * Math.PI) / n,
                                i = 0,
                                a = this.getGraphics(),
                                c = t.add(r.GDMath.polarToCartesianByRad(i, e));
                            a.moveTo(c.x, c.y);
                            for (var s = cc.Vec2.ZERO, l = 0; l < n; l++) {
                                i += o;
                                var u = Math.cos(i) * e,
                                    p = Math.sin(i) * e;
                                (s.x = t.x + u), (s.y = t.y + p), a.lineTo(s.x, s.y);
                            }
                            a.lineTo(c.x, c.y),
                                (a.lineWidth = this.lineSize),
                                (a.strokeColor = this.color),
                                (a.lineJoin = cc.Graphics.LineJoin.ROUND),
                                a.stroke(),
                                (a.lineJoin = cc.Graphics.LineJoin.MITER);
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        },
                    a =
                        (this && this.__awaiter) ||
                        function (t, e, n, o) {
                            return new (n || (n = Promise))(function (r, i) {
                                function a(t) {
                                    try {
                                        s(o.next(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function c(t) {
                                    try {
                                        s(o.throw(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function s(t) {
                                    var e;
                                    t.done
                                        ? r(t.value)
                                        : ((e = t.value),
                                          e instanceof n
                                              ? e
                                              : new n(function (t) {
                                                    t(e);
                                                })).then(a, c);
                                }
                                s((o = o.apply(t, e || [])).next());
                            });
                        },
                    c =
                        (this && this.__generator) ||
                        function (t, e) {
                            var n,
                                o,
                                r,
                                i,
                                a = {
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
                                    return s([t, e]);
                                };
                            }
                            function s(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a; )
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
                                                    a.label++,
                                                    {
                                                        value: i[1],
                                                        done: !1,
                                                    }
                                                );
                                            case 5:
                                                a.label++, (o = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = a.ops.pop()), a.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(r = (r = a.trys).length > 0 && r[r.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                    a.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && a.label < r[1]) {
                                                    (a.label = r[1]), (r = i);
                                                    break;
                                                }
                                                if (r && a.label < r[2]) {
                                                    (a.label = r[2]), a.ops.push(i);
                                                    break;
                                                }
                                                r[2] && a.ops.pop(), a.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, a);
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
                var s = t("./GDResMgr"),
                    l = cc._decorator,
                    u = l.ccclass,
                    p = l.property,
                    f = l.menu;
                cc.Node.prototype.GDPool = null;
                var h = (function () {
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
                            var e = s.GDResMgr.getResAddress(t),
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
                            var e = s.GDResMgr.getResAddress(t),
                                n = this._objectPools.get(e);
                            n && n.clear();
                        }),
                        (t.clearAllPool = function () {
                            this._objectPools.forEach(function (t) {
                                t.clear();
                            });
                        }),
                        (t.destroyPool = function (t) {
                            var e = s.GDResMgr.getResAddress(t),
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
                                var n = s.GDResMgr.getResAddress(e),
                                    o = this.getPool(n);
                                o && o.recycle(t);
                            } else {
                                var r = t.GDPool;
                                r && r.recycle(t);
                            }
                        }),
                        (t.recycleAll = function (t) {
                            var e = s.GDResMgr.getResAddress(t),
                                n = this.getPool(e);
                            n && n.recycleAll();
                        }),
                        (t.getPool = function (t) {
                            return this._objectPools.get(t);
                        }),
                        (t.get = function (e) {
                            var n,
                                o = s.GDResMgr.getResAddress(e),
                                r = t.getPool(o);
                            return r && (null === (n = null == r ? void 0 : r.clone) || void 0 === n ? void 0 : n.data)
                                ? r.spawn()
                                : (r = t.newPool(e, 1, 1)).spawn();
                        }),
                        (t.load = function (e) {
                            return a(this, void 0, void 0, function () {
                                var n, o;
                                return c(this, function (r) {
                                    switch (r.label) {
                                        case 0:
                                            return (
                                                (n = s.GDResMgr.getResAddress(e)),
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
                                a(this, void 0, void 0, function () {
                                    var o, r, i, a;
                                    return c(this, function (c) {
                                        switch (c.label) {
                                            case 0:
                                                return [4, s.GDResMgr.load(t)];
                                            case 1:
                                                return (o = c.sent())
                                                    ? ((r = s.GDResMgr.getResAddress(t)),
                                                      (i = new cc.Node(r)),
                                                      (a = i.addComponent(d)).init(e, n, o),
                                                      a.alloc(),
                                                      this.addPool(r, a),
                                                      [2, a])
                                                    : [2, null];
                                        }
                                    });
                                })
                            );
                        }),
                        (t.newPool = function (t, e, n) {
                            void 0 === e && (e = 3), void 0 === n && (n = 2);
                            var o = s.GDResMgr.get(t);
                            if (o) {
                                var r = s.GDResMgr.getResAddress(t),
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
                n.GDObjectPoolMgr = h;
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
                        i([u, f("GD/GDObjectPool")], e)
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
                                var a = n[i],
                                    c = 0 == i ? n[n.length - 1] : n[i - 1],
                                    s = this.lineCrossPoint(a, c, t, e),
                                    l = s[0],
                                    u = s[1];
                                -1 != l && (n.splice(i, -1, u), r.push(i + 1));
                            }
                            return r;
                        }),
                        (t.lineCrossPoint = function (t, e, n, o) {
                            var r,
                                i,
                                a,
                                c,
                                s,
                                l,
                                u = t,
                                p = e,
                                f = n,
                                h = o,
                                d = new cc.Vec2(0, 0);
                            return (
                                (a = this.dblcmp((r = this.ab_cross_ac(u, p, f)), 0)),
                                (c = this.dblcmp((i = this.ab_cross_ac(u, p, h)), 0)),
                                (s = this.dblcmp(this.ab_cross_ac(f, h, u), 0)),
                                (l = this.dblcmp(this.ab_cross_ac(f, h, p), 0)),
                                -2 == (a ^ c) && -2 == (s ^ l)
                                    ? ((d.x = (f.x * i - h.x * r) / (i - r)), (d.y = (f.y * i - h.y * r) / (i - r)), [0, d])
                                    : 0 == a && this.point_on_line(f, u, p) <= 0
                                    ? [1, (d = f)]
                                    : 0 == c && this.point_on_line(h, u, p) <= 0
                                    ? [1, (d = h)]
                                    : 0 == s && this.point_on_line(u, f, h) <= 0
                                    ? [1, (d = u)]
                                    : 0 == l && this.point_on_line(p, f, h) <= 0
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
                            var a = e.x + ((n.x - e.x) / (n.y - e.y)) * (t.y - e.y);
                            return a > t.x ? 0 : a == t.x ? 1 : -1;
                        }),
                        (t.relationPointToPolygon = function (t, e) {
                            for (var n = 0, o = 0; o < e.length; ++o) {
                                if (e[o].equals(t)) return 2;
                                var r = e[o],
                                    i = e[0];
                                o < e.length - 1 && (i = e[o + 1]);
                                var a = this.rayPointToLine(t, r, i);
                                if (1 == a) return 1;
                                0 == a && n++;
                            }
                            return n % 2 == 0 ? -1 : 0;
                        }),
                        (t.lineCutPolygon = function (t, e, n) {
                            for (var o = [], r = [], i = [], a = 0; a < n.length; ++a) {
                                r.push(n[a]);
                                var c = n[a],
                                    s = n[0];
                                a < n.length - 1 && (s = n[a + 1]);
                                var l = this.lineCrossPoint(t, e, c, s);
                                0 == l[0]
                                    ? (i.push(r.length), r.push(l[1]))
                                    : l[0] > 0 && (l[1].equals(c) ? i.push(r.length - 1) : i.push(r.length));
                            }
                            if (i.length > 1) {
                                var u = r[i[0]],
                                    p = r[i[1]],
                                    f = this.relationPointToPolygon(new cc.Vec2((u.x + p.x) / 2, (u.y + p.y) / 2), n),
                                    h = f >= 0;
                                if (!r[i[i.length - 1]]) return console.log("\u88c1\u526a\u9519\u8bef"), o;
                                i.length > 2 &&
                                    u.sub(p).mag() > u.sub(r[i[i.length - 1]]).mag() &&
                                    ((p = r[i[i.length - 1]]),
                                    (h =
                                        (f = this.relationPointToPolygon(new cc.Vec2((u.x + p.x) / 2, (u.y + p.y) / 2), n)) < 0));
                                var d = h,
                                    y = 0,
                                    v = i[y],
                                    _ = [],
                                    g = [],
                                    m = 0;
                                for (_.push(r[v]), h && g.push(r[v]), y++, m++, v++; m < r.length; ) {
                                    v == r.length && (v = 0);
                                    var b = r[v];
                                    y >= 0 && v == i[y]
                                        ? (++y >= i.length && (y = 0),
                                          h ? (g.push(b), o.push(g), (g = [])) : (g = []).push(b),
                                          _.push(b),
                                          (h = !h))
                                        : h
                                        ? g.push(b)
                                        : _.push(b),
                                        v++,
                                        m++;
                                }
                                if (h)
                                    if (!d && g.length > 1) g.push(r[i[0]]), o.push(g);
                                    else for (a = 0; a < g.length; ++a) _.push(g[a]);
                                o.push(_);
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
                cc._RF.push(e, "c7504tCx69JT6FBTnIGpMYY", "GDRequest");
                var o =
                        (this && this.__awaiter) ||
                        function (t, e, n, o) {
                            return new (n || (n = Promise))(function (r, i) {
                                function a(t) {
                                    try {
                                        s(o.next(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function c(t) {
                                    try {
                                        s(o.throw(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function s(t) {
                                    var e;
                                    t.done
                                        ? r(t.value)
                                        : ((e = t.value),
                                          e instanceof n
                                              ? e
                                              : new n(function (t) {
                                                    t(e);
                                                })).then(a, c);
                                }
                                s((o = o.apply(t, e || [])).next());
                            });
                        },
                    r =
                        (this && this.__generator) ||
                        function (t, e) {
                            var n,
                                o,
                                r,
                                i,
                                a = {
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
                                    return s([t, e]);
                                };
                            }
                            function s(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a; )
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
                                                    a.label++,
                                                    {
                                                        value: i[1],
                                                        done: !1,
                                                    }
                                                );
                                            case 5:
                                                a.label++, (o = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = a.ops.pop()), a.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(r = (r = a.trys).length > 0 && r[r.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                    a.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && a.label < r[1]) {
                                                    (a.label = r[1]), (r = i);
                                                    break;
                                                }
                                                if (r && a.label < r[2]) {
                                                    (a.label = r[2]), a.ops.push(i);
                                                    break;
                                                }
                                                r[2] && a.ops.pop(), a.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, a);
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
                    (n.GDRequest = void 0);
                var i = t("../../scripts/Consts"),
                    a = (function () {
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
                                    o.setRequestHeader(
                                        "Access-Control-Allow-Headers",
                                        "x-requested-with,content-type,authorization"
                                    ),
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
                            (t.getLocation = function (t, e) {
                                return o(this, void 0, Promise, function () {
                                    var n = this;
                                    return r(this, function () {
                                        return [
                                            2,
                                            new Promise(function (o) {
                                                var r =
                                                    i.locationUrl +
                                                    "?postStr={'lon':" +
                                                    t +
                                                    ",'lat':" +
                                                    e +
                                                    ",'ver':1}&type=geocode&tk=" +
                                                    i.tdtKey;
                                                n.httpRequest(r, "GET", function (t) {
                                                    t.msg ? o(t.result.addressComponent) : o(null);
                                                });
                                            }),
                                        ];
                                    });
                                });
                            }),
                            t
                        );
                    })();
                (n.GDRequest = a), cc._RF.pop();
            },
            {
                "../../scripts/Consts": "Consts",
            },
        ],
        GDResLoader: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "3c718iH+tJI46I7Fi2pPPCO", "GDResLoader");
                var o =
                        (this && this.__awaiter) ||
                        function (t, e, n, o) {
                            return new (n || (n = Promise))(function (r, i) {
                                function a(t) {
                                    try {
                                        s(o.next(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function c(t) {
                                    try {
                                        s(o.throw(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function s(t) {
                                    var e;
                                    t.done
                                        ? r(t.value)
                                        : ((e = t.value),
                                          e instanceof n
                                              ? e
                                              : new n(function (t) {
                                                    t(e);
                                                })).then(a, c);
                                }
                                s((o = o.apply(t, e || [])).next());
                            });
                        },
                    r =
                        (this && this.__generator) ||
                        function (t, e) {
                            var n,
                                o,
                                r,
                                i,
                                a = {
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
                                    return s([t, e]);
                                };
                            }
                            function s(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a; )
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
                                                    a.label++,
                                                    {
                                                        value: i[1],
                                                        done: !1,
                                                    }
                                                );
                                            case 5:
                                                a.label++, (o = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = a.ops.pop()), a.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(r = (r = a.trys).length > 0 && r[r.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                    a.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && a.label < r[1]) {
                                                    (a.label = r[1]), (r = i);
                                                    break;
                                                }
                                                if (r && a.label < r[2]) {
                                                    (a.label = r[2]), a.ops.push(i);
                                                    break;
                                                }
                                                r[2] && a.ops.pop(), a.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, a);
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
                    a = t("./GDResMgr"),
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
                                            ? a.GDResMgr.releaseBundle(t)
                                            : "resPath" in t
                                            ? a.GDResMgr.release(t)
                                            : a.GDResMgr.releaseBundle(t.bundle);
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
                                                        var a;
                                                        (a =
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
                                                                  })) && t.push(a);
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
                                return a.GDResMgr.loadAll(t, function (t) {
                                    null == e || e(t);
                                });
                            }),
                            (t.prototype.loadResByGDResAddress = function (t, e) {
                                if (t.resPath && t.bundlePath)
                                    return a.GDResMgr.load(t, function (t) {
                                        null == e || e(t);
                                    });
                                null == e || e(1);
                            }),
                            (t.prototype.loadResByGDResDir = function (t, e) {
                                if (t.dir && t.bundle)
                                    return a.GDResMgr.loadDir(t, function (t) {
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
                                function a(t) {
                                    try {
                                        s(o.next(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function c(t) {
                                    try {
                                        s(o.throw(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function s(t) {
                                    var e;
                                    t.done
                                        ? r(t.value)
                                        : ((e = t.value),
                                          e instanceof n
                                              ? e
                                              : new n(function (t) {
                                                    t(e);
                                                })).then(a, c);
                                }
                                s((o = o.apply(t, e || [])).next());
                            });
                        },
                    r =
                        (this && this.__generator) ||
                        function (t, e) {
                            var n,
                                o,
                                r,
                                i,
                                a = {
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
                                    return s([t, e]);
                                };
                            }
                            function s(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a; )
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
                                                    a.label++,
                                                    {
                                                        value: i[1],
                                                        done: !1,
                                                    }
                                                );
                                            case 5:
                                                a.label++, (o = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = a.ops.pop()), a.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(r = (r = a.trys).length > 0 && r[r.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                    a.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && a.label < r[1]) {
                                                    (a.label = r[1]), (r = i);
                                                    break;
                                                }
                                                if (r && a.label < r[2]) {
                                                    (a.label = r[2]), a.ops.push(i);
                                                    break;
                                                }
                                                r[2] && a.ops.pop(), a.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, a);
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
                    a = (function () {
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
                                        a,
                                        c,
                                        s = this;
                                    return r(this, function () {
                                        return (n = t.length) <= 0
                                            ? (null == e || e(1), [2, null])
                                            : ((o = 1 / n),
                                              (a = []),
                                              (c = []),
                                              t.forEach(function (t, n) {
                                                  var r = s.loadAll(t, function (t) {
                                                      (a[n] = t * o), null == e || e(i.GDUtils.sumArray(a));
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
                                        a,
                                        c,
                                        s = this;
                                    return r(this, function () {
                                        return (n = t.length) <= 0
                                            ? (null == e || e(1), [2, null])
                                            : ((o = 1 / n),
                                              (a = []),
                                              (c = []),
                                              t.forEach(function (t, n) {
                                                  var r = s.loadDir(t, function (t) {
                                                      (a[n] = t * o), null == e || e(i.GDUtils.sumArray(a));
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
                                        a,
                                        c,
                                        s = this;
                                    return r(this, function () {
                                        return (n = t.length) <= 0
                                            ? (null == e || e(1), [2, null])
                                            : ((o = 1 / n),
                                              (a = []),
                                              (c = []),
                                              t.forEach(function (t, n) {
                                                  var r = s.load(t, function (t) {
                                                      (a[n] = t * o), null == e || e(i.GDUtils.sumArray(a));
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
                (n.GDResMgr = a), cc._RF.pop();
            },
            {
                "../tools/GDUtils": "GDUtils",
            },
        ],
        GDRoundRectMask: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "99845hNLPxAcIKoQQXI1HzQ", "GDRoundRectMask");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.GDRoundRectMask = void 0);
                var a = cc._decorator.property,
                    c = cc._decorator.ccclass,
                    s = cc._decorator.executeInEditMode,
                    l = cc._decorator.disallowMultiple,
                    u = cc._decorator.requireComponent,
                    p = cc._decorator.menu;
                cc.macro.ENABLE_WEBGL_ANTIALIAS = !0;
                var f = (function (t) {
                    function e() {
                        var e = (null !== t && t.apply(this, arguments)) || this;
                        return (e._radius = 50), (e.mask = null), e;
                    }
                    return (
                        r(e, t),
                        Object.defineProperty(e.prototype, "radius", {
                            get: function () {
                                return this._radius;
                            },
                            set: function (t) {
                                (this._radius = t), this.updateMask(t);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.onEnable = function () {
                            (this.mask = this.getComponent(cc.Mask)), this.updateMask(this.radius);
                        }),
                        (e.prototype.updateMask = function (t) {
                            var e = t >= 0 ? t : 0;
                            e < 1 && (e = Math.min(this.node.width, this.node.height) * e),
                                (this.mask.radius = e),
                                (this.mask.onDraw = this.onDraw.bind(this.mask)),
                                (this.mask._updateGraphics = this._updateGraphics.bind(this.mask)),
                                (this.mask.type = cc.Mask.Type.RECT);
                        }),
                        (e.prototype._updateGraphics = function () {
                            var t = this._graphics;
                            t && this.onDraw(t);
                        }),
                        (e.prototype.onDraw = function (t) {
                            t.clear(!1);
                            var e = this.node,
                                n = e.width,
                                o = e.height,
                                r = -n * e.anchorX,
                                i = -o * e.anchorY;
                            t.roundRect(r, i, n, o, this.radius || 0),
                                cc.game.renderType === cc.game.RENDER_TYPE_CANVAS ? t.stroke() : t.fill();
                        }),
                        i([a()], e.prototype, "_radius", void 0),
                        i(
                            [
                                a({
                                    tooltip:
                                        "\u5706\u89d2\u534a\u5f84:\n0-1\u4e4b\u95f4\u4e3a\u6700\u5c0f\u8fb9\u957f\u6bd4\u4f8b\u503c, \n>1\u4e3a\u5177\u4f53\u50cf\u7d20\u503c",
                                }),
                            ],
                            e.prototype,
                            "radius",
                            null
                        ),
                        i([c(), s(!0), l(!0), u(cc.Mask), p("\u6e32\u67d3\u7ec4\u4ef6/\u5706\u89d2\u906e\u7f69")], e)
                    );
                })(cc.Component);
                (n.GDRoundRectMask = f), cc._RF.pop();
            },
            {},
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.GDSpineEx = void 0);
                var a = t("../collections/GDList"),
                    c = t("../collections/GDQueue"),
                    s = cc._decorator,
                    l = s.ccclass,
                    u = s.menu,
                    p = s.requireComponent,
                    f = (function (t) {
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
                                    var a = this.skeleton.setAnimation(0, r.name, this._loop);
                                    if (a) {
                                        var c = Math.max(
                                                0,
                                                Math.min(null !== (n = t.start) && void 0 !== n ? n : 0, a.animationEnd)
                                            ),
                                            s = Math.max(
                                                0,
                                                Math.min(
                                                    null !== (o = t.end) && void 0 !== o ? o : a.animationEnd,
                                                    a.animationEnd
                                                )
                                            );
                                        (a.animationStart = c), (a.animationEnd = s);
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
                                o || ((o = new a.GDList()), this._eventMap.set(t, o)),
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
                            i([l, p(sp.Skeleton), u("GD/GDSpineEx")], e)
                        );
                    })(cc.Component);
                (n.GDSpineEx = f), cc._RF.pop();
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
                                    var a = o.GDResMgr.get(i);
                                    (n = new r.GDTable(a, e)), this._tableMap.set(t, n);
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
                                    for (var a in n)
                                        n.hasOwnProperty(a) &&
                                            ((r = o.GDUtils.cloneProperty(n[a], new e())), this._keyItemMap.set(r.key(), r));
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
                    a =
                        (this && this.__generator) ||
                        function (t, e) {
                            var n,
                                o,
                                r,
                                i,
                                a = {
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
                                    return s([t, e]);
                                };
                            }
                            function s(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a; )
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
                                                    a.label++,
                                                    {
                                                        value: i[1],
                                                        done: !1,
                                                    }
                                                );
                                            case 5:
                                                a.label++, (o = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = a.ops.pop()), a.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(r = (r = a.trys).length > 0 && r[r.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                    a.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && a.label < r[1]) {
                                                    (a.label = r[1]), (r = i);
                                                    break;
                                                }
                                                if (r && a.label < r[2]) {
                                                    (a.label = r[2]), a.ops.push(i);
                                                    break;
                                                }
                                                r[2] && a.ops.pop(), a.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, a);
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
                            return a(this, function (e) {
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
                var s = (function (t) {
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
                n.GDPayloadTask = s;
                var l = (function (t) {
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
                n.GDProxyTask = l;
                var u = (function (t) {
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
                n.GDPromiseTask = u;
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
                    a = cc.gfx,
                    c = new a.VertexFormat([
                        {
                            name: a.ATTR_POSITION,
                            type: a.ATTR_TYPE_FLOAT32,
                            num: 2,
                        },
                        {
                            name: a.ATTR_UV0,
                            type: a.ATTR_TYPE_FLOAT32,
                            num: 2,
                        },
                        {
                            name: a.ATTR_COLOR,
                            type: a.ATTR_TYPE_UINT8,
                            num: 4,
                            normalize: !0,
                        },
                    ]),
                    s = (function (t) {
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
                                        var o = this.floatsPerVert, r = this.colorOffset, i = t.polygon, a = 0;
                                        a < i.length;
                                        a++
                                    )
                                        n[r + a * o] = e;
                                }
                            }),
                            (e.prototype.updateUVs = function (t) {
                                var e = this.uvOffset,
                                    n = this.floatsPerVert,
                                    o = this._renderData.vDatas[0],
                                    r = [];
                                t.texture && (r = i.GDCommonUtils.computeUv(t.polygon, t.texture.width, t.texture.height));
                                for (var a = t.polygon, c = 0; c < a.length; c++) {
                                    var s = n * c + e;
                                    (o[s] = r[c].x), (o[s + 1] = r[c].y);
                                }
                            }),
                            (e.prototype.updateWorldVertsWebGL = function (t) {
                                var e = this._renderData.vDatas[0],
                                    n = t.node._worldMatrix.m,
                                    o = n[0],
                                    r = n[1],
                                    i = n[4],
                                    a = n[5],
                                    c = n[12],
                                    s = n[13],
                                    l = 1 === o && 0 === r && 0 === i && 1 === a,
                                    u = this.floatsPerVert;
                                if (l)
                                    for (var p = t.polygon, f = 0; f < p.length; f++)
                                        (e[f * u] = p[f].x + c), (e[f * u + 1] = p[f].y + s);
                                else
                                    for (p = t.polygon, f = 0; f < p.length; f++)
                                        (e[f * u] = o * p[f].x + i * p[f].y + c), (e[f * u + 1] = r * p[f].x + a * p[f].y + s);
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
                                    a = i.request(this.verticesCount, this.indicesCount),
                                    c = a.byteOffset >> 2,
                                    s = i._vData;
                                o.length + c > s.length ? s.set(o.subarray(0, s.length - c), c) : s.set(o, c);
                                for (var l = i._iData, u = a.indiceOffset, p = a.vertexOffset, f = 0, h = r.length; f < h; f++)
                                    l[u++] = p + r[f];
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
                (n.default = s), cc._RF.pop();
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                });
                var a,
                    c = t("../tools/GDCommonUtils"),
                    s = t("./GDTextureAssembler");
                cc.renderer.renderEngine,
                    (function (t) {
                        (t[(t.Cut = 0)] = "Cut"), (t[(t.Stretch = 1)] = "Stretch");
                    })(a || (a = {}));
                var l = new cc.Vec2(),
                    u = new cc.Mat4(),
                    p = cc._decorator,
                    f = p.ccclass,
                    h = (p.inspector, p.executeInEditMode),
                    d = (p.mixins, p.property),
                    y = (function (t) {
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
                                (this._assembler = new s.default()).init(this), this._updateColor(), this.setVertsDirty();
                            }),
                            (e.prototype._hitTest = function (t) {
                                var e = this.node,
                                    n = l;
                                return (
                                    e._updateWorldMatrix(),
                                    !!cc.Mat4.invert(u, e._worldMatrix) &&
                                        (cc.Vec2.transformMat4(n, t, u), c.GDCommonUtils.isInPolygon(n, this.polygon))
                                );
                            }),
                            (e.Type = a),
                            i([d(cc.Texture2D)], e.prototype, "_texture", void 0),
                            i([d(cc.Texture2D)], e.prototype, "texture", null),
                            i(
                                [
                                    d({
                                        type: cc.Enum(a),
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
                            i([f, h], e)
                        );
                    })(cc.RenderComponent);
                (n.default = y), cc._RF.pop();
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.GDToggleGroup = void 0);
                var a = cc._decorator,
                    c = a.ccclass,
                    s = a.menu,
                    l = a.property,
                    u = (function (t) {
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
                            i([l], e.prototype, "allowSwitchOff", void 0),
                            i([c, s("GD/UI/GDToggleGroup")], e)
                        );
                    })(cc.Component);
                (n.GDToggleGroup = u), cc._RF.pop();
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.GDToggle = void 0);
                var a = t("./GDToggleGroup"),
                    c = cc._decorator,
                    s = c.ccclass,
                    l = c.property,
                    u = c.menu,
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
                                    t && (this.toggleGroup = t.getComponent(a.GDToggleGroup));
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
                            i([l(cc.Node)], e.prototype, "unSel", void 0),
                            i([l(cc.Node)], e.prototype, "sel", void 0),
                            i([l(a.GDToggleGroup)], e.prototype, "toggleGroup", void 0),
                            i([s, u("GD/UI/GDToggle")], e)
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.GDTypewriter = void 0);
                var a = cc._decorator,
                    c = a.ccclass,
                    s = a.property,
                    l = (function (t) {
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
                            i([s(cc.Label)], e.prototype, "label", void 0),
                            i([s], e.prototype, "interval", void 0),
                            i([s], e.prototype, "tickWords", void 0),
                            i([s], e.prototype, "msg", void 0),
                            i([c], e)
                        );
                    })(cc.Component);
                (n.GDTypewriter = l), cc._RF.pop();
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.GDUIListener = void 0);
                var a = cc._decorator.ccclass,
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
                            (n = i([a], e))
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
                                a = " " + o + ":" + r + ":" + i;
                            return 2 == e && (a = r + ":" + i), a;
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        },
                    a =
                        (this && this.__awaiter) ||
                        function (t, e, n, o) {
                            return new (n || (n = Promise))(function (r, i) {
                                function a(t) {
                                    try {
                                        s(o.next(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function c(t) {
                                    try {
                                        s(o.throw(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function s(t) {
                                    var e;
                                    t.done
                                        ? r(t.value)
                                        : ((e = t.value),
                                          e instanceof n
                                              ? e
                                              : new n(function (t) {
                                                    t(e);
                                                })).then(a, c);
                                }
                                s((o = o.apply(t, e || [])).next());
                            });
                        },
                    c =
                        (this && this.__generator) ||
                        function (t, e) {
                            var n,
                                o,
                                r,
                                i,
                                a = {
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
                                    return s([t, e]);
                                };
                            }
                            function s(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a; )
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
                                                    a.label++,
                                                    {
                                                        value: i[1],
                                                        done: !1,
                                                    }
                                                );
                                            case 5:
                                                a.label++, (o = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = a.ops.pop()), a.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(r = (r = a.trys).length > 0 && r[r.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                    a.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && a.label < r[1]) {
                                                    (a.label = r[1]), (r = i);
                                                    break;
                                                }
                                                if (r && a.label < r[2]) {
                                                    (a.label = r[2]), a.ops.push(i);
                                                    break;
                                                }
                                                r[2] && a.ops.pop(), a.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, a);
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
                var s,
                    l = t("./GDResMgr"),
                    u = cc._decorator,
                    p = u.ccclass,
                    f = u.property;
                (function (t) {
                    (t[(t.BOTTOM = 0)] = "BOTTOM"), (t[(t.MID = 1)] = "MID"), (t[(t.TOP = 2)] = "TOP"), (t[(t.MAX = 3)] = "MAX");
                })((s = n.GDWindowHierarchy || (n.GDWindowHierarchy = {})));
                var h = (function (t) {
                    function e() {
                        var e = (null !== t && t.apply(this, arguments)) || this;
                        return (e.hierarchy = s.MID), (e._isOpen = !1), (e.listener = null), e;
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
                                f({
                                    type: cc.Enum(s),
                                }),
                            ],
                            e.prototype,
                            "hierarchy",
                            void 0
                        ),
                        i([p], e)
                    );
                })(cc.Component);
                n.GDWindow = h;
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
                            for (var t = 0; t < s.MAX; t++) {
                                var e = this.createNode(s[t]);
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
                            var e = l.GDResMgr.getResAddress(t);
                            return this._windowMap.get(e);
                        }),
                        (t.prototype.setWindowCache = function (t, e) {
                            var n = l.GDResMgr.getResAddress(t);
                            this._windowMap.set(n, e);
                        }),
                        (t.prototype.deleteWindowCache = function (t) {
                            var e = l.GDResMgr.getResAddress(t);
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
                                var n = e.getComponent(h);
                                if (n) return n;
                            }
                            return null;
                        }),
                        (t.prototype.loadWindow = function (t) {
                            var e = l.GDResMgr.get(t);
                            if (!e) return null;
                            var n = this.instanceWindow(e);
                            return this.setWindowCache(t, n), this.attachHierarch(n), n;
                        }),
                        (t.prototype.loadWindowAsync = function (t) {
                            return a(this, void 0, void 0, function () {
                                var e, n;
                                return c(this, function (o) {
                                    switch (o.label) {
                                        case 0:
                                            return [4, l.GDResMgr.load(t)];
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
                            return a(this, void 0, void 0, function () {
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
        GameCfg: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "de819fG92dN0awbDgyhOKHA", "GameCfg");
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
                    (n.GameCfg = void 0);
                var i = t("../../GD/GDKV"),
                    a = t("../../GD/GDLocalStorage"),
                    c = function (t) {
                        var e, n, o;
                        (t = null != t ? t : {}),
                            (this.openMusic = null === (e = t.openMusic) || void 0 === e || e),
                            (this.openSound = null === (n = t.openSound) || void 0 === n || n),
                            (this.openVibrate = null === (o = t.openVibrate) || void 0 === o || o);
                    },
                    s = (function (t) {
                        function e() {
                            var e =
                                t.call(this, {
                                    valueChange: function () {
                                        e.save();
                                    },
                                }) || this;
                            return e;
                        }
                        return (
                            r(e, t),
                            Object.defineProperty(e, "instance", {
                                get: function () {
                                    return (
                                        this._instance || ((this._instance = new e()), this._instance.initKV()), this._instance
                                    );
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (e.prototype.initKV = function () {
                                this.kv = new c(this.load());
                            }),
                            (e.prototype.load = function () {
                                return a.GDLocalStorage.load("elsfk_game_cfg");
                            }),
                            (e.prototype.save = function () {
                                a.GDLocalStorage.save("elsfk_game_cfg", this.kv);
                            }),
                            e
                        );
                    })(i.GDKV);
                (n.GameCfg = s), cc._RF.pop();
            },
            {
                "../../GD/GDKV": "GDKV",
                "../../GD/GDLocalStorage": "GDLocalStorage",
            },
        ],
        GameEventDefine: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "72acaiFFltL27o3ogyKIPsm", "GameEventDefine"),
                    Object.defineProperty(n, "__esModule", {
                        value: !0,
                    }),
                    (n.GameEventDefine = n.gameEvent = void 0),
                    (n.gameEvent = new cc.EventTarget()),
                    (function (t) {
                        (t.enterGameEvent = "enter_game_event"),
                            (t.exitGameEvent = "exit_game_event"),
                            (t.skinDressedEvent = "skin_dressed_event"),
                            (t.refreshHallRankEvent = "refresh_hall_rank_event"),
                            (t.uploadTargetCardGlodCountEvent = "upload_target_card_glod_count_event"),
                            (t.PlayerHpUpdateEvent = "player_hp_update_Event"),
                            (t.GameClickBlockEvent = "game_click_block_event");
                    })(n.GameEventDefine || (n.GameEventDefine = {})),
                    cc._RF.pop();
            },
            {},
        ],
        GameHelper: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "a4f2frZKWBC85+rNUj5Kc/n", "GameHelper");
                var o =
                        (this && this.__awaiter) ||
                        function (t, e, n, o) {
                            return new (n || (n = Promise))(function (r, i) {
                                function a(t) {
                                    try {
                                        s(o.next(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function c(t) {
                                    try {
                                        s(o.throw(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function s(t) {
                                    var e;
                                    t.done
                                        ? r(t.value)
                                        : ((e = t.value),
                                          e instanceof n
                                              ? e
                                              : new n(function (t) {
                                                    t(e);
                                                })).then(a, c);
                                }
                                s((o = o.apply(t, e || [])).next());
                            });
                        },
                    r =
                        (this && this.__generator) ||
                        function (t, e) {
                            var n,
                                o,
                                r,
                                i,
                                a = {
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
                                    return s([t, e]);
                                };
                            }
                            function s(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a; )
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
                                                    a.label++,
                                                    {
                                                        value: i[1],
                                                        done: !1,
                                                    }
                                                );
                                            case 5:
                                                a.label++, (o = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = a.ops.pop()), a.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(r = (r = a.trys).length > 0 && r[r.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                    a.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && a.label < r[1]) {
                                                    (a.label = r[1]), (r = i);
                                                    break;
                                                }
                                                if (r && a.label < r[2]) {
                                                    (a.label = r[2]), a.ops.push(i);
                                                    break;
                                                }
                                                r[2] && a.ops.pop(), a.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, a);
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
                    (n.GameHelper = void 0);
                var i = t("../GD/manage/GDAudioMgr"),
                    a = t("../GD/manage/GDResMgr"),
                    c = t("../GD/manage/GDWindowMgr"),
                    s = t("../GD/table/GDTableMgr"),
                    l = t("../platform/Analytics"),
                    u = t("./Consts"),
                    p = t("./define/AudioInfoDefine"),
                    f = t("./define/GameEventDefine"),
                    h = t("./define/TableInfoDefine"),
                    d = t("./table/GameListTableItem"),
                    y = t("./window/WaitWindow"),
                    v = (function () {
                        function t() {}
                        return (
                            (t.setWebCurLevel = function (t) {
                                this._webCurLevel = t;
                            }),
                            (t.getWebCurLevel = function () {
                                return this._webCurLevel;
                            }),
                            Object.defineProperty(t, "GameListTableItems", {
                                get: function () {
                                    return s.GDTableMgr.getTable(h.TableInfoDefine.key, d.GameListTableItem).getItems();
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (t.getGame = function (t) {
                                return this.GameListTableItems.find(function (e) {
                                    return e.id == t;
                                });
                            }),
                            (t.getGameBundleNameOrUrl = function (t) {
                                var e = this.GameListTableItems.find(function (e) {
                                    return e.id == t;
                                });
                                return cc.sys.platform == cc.sys.BYTEDANCE_GAME
                                    ? "" + u.ttRemoteUrl + e.bundleName + "/" + e.ttVer + "/remote/" + e.bundleName
                                    : cc.sys.platform == cc.sys.WECHAT_GAME
                                    ? "" + u.wxRemoteUrl + e.bundleName + "/" + e.wxVer + "/remote/" + e.bundleName
                                    : e.bundleName;
                            }),
                            (t.loadGameRes2 = function (t) {
                                return o(this, void 0, void 0, function () {
                                    var e, n;
                                    return r(this, function (o) {
                                        switch (o.label) {
                                            case 0:
                                                return (e = this.getGameResDir(t)), [4, a.GDResMgr.loadDir(e)];
                                            case 1:
                                                return (n = o.sent()), this._cacheMap.set(t, n), [2];
                                        }
                                    });
                                });
                            }),
                            (t.preloadGameRes = function (e) {
                                return o(this, void 0, void 0, function () {
                                    var n;
                                    return r(this, function (o) {
                                        switch (o.label) {
                                            case 0:
                                                return (n = t.getGameBundleNameOrUrl(e)), [4, a.GDResMgr.preloadAll(n)];
                                            case 1:
                                                return o.sent(), [2];
                                        }
                                    });
                                });
                            }),
                            (t.loadGameRes = function (e) {
                                return o(this, void 0, void 0, function () {
                                    var n, o;
                                    return r(this, function (r) {
                                        switch (r.label) {
                                            case 0:
                                                return (n = t.getGameBundleNameOrUrl(e)), [4, a.GDResMgr.loadAll(n)];
                                            case 1:
                                                return (o = r.sent()), this._cacheMap.set(e, o), [2];
                                        }
                                    });
                                });
                            }),
                            (t.getGameResDir = function (e) {
                                var n = t.getGame(e);
                                return {
                                    bundle: n.address.bundlePath,
                                    dir: n.address.resPath,
                                };
                            }),
                            (t.unloadGameRes = function (t) {
                                var e = this.getGameResDir(t);
                                a.GDResMgr.releaseDir(e);
                            }),
                            (t.getGameListNew = function () {
                                return this.GameListTableItems.filter(function (t) {
                                    return t.new;
                                });
                            }),
                            (t.getGameListHot = function () {
                                return this.GameListTableItems.filter(function (t) {
                                    return t.hot;
                                });
                            }),
                            (t.openGame = function (t) {
                                return o(this, void 0, void 0, function () {
                                    var e,
                                        n = this;
                                    return r(this, function (o) {
                                        switch (o.label) {
                                            case 0:
                                                return (
                                                    l.Analytics.uploadClickStartGame(),
                                                    i.GDAudioMgr.instance.playOneShot(p.AudioInfoDefine.click),
                                                    y.WaitWindow.open(),
                                                    [4, this.loadGameRes(t)]
                                                );
                                            case 1:
                                                return (
                                                    o.sent(),
                                                    y.WaitWindow.close(),
                                                    f.gameEvent.emit(f.GameEventDefine.enterGameEvent),
                                                    (e = this.getGame(t)),
                                                    c.GDWindowMgr.instance.openWindow(e.address, {
                                                        open: function () {},
                                                        close: function () {
                                                            f.gameEvent.emit(f.GameEventDefine.exitGameEvent),
                                                                n.unloadGameRes(t),
                                                                c.GDWindowMgr.instance.destroyWindow(e.address);
                                                        },
                                                    }),
                                                    [2]
                                                );
                                        }
                                    });
                                });
                            }),
                            (t._webCurLevel = 0),
                            (t._cacheMap = new Map()),
                            t
                        );
                    })();
                (n.GameHelper = v), cc._RF.pop();
            },
            {
                "../GD/manage/GDAudioMgr": "GDAudioMgr",
                "../GD/manage/GDResMgr": "GDResMgr",
                "../GD/manage/GDWindowMgr": "GDWindowMgr",
                "../GD/table/GDTableMgr": "GDTableMgr",
                "../platform/Analytics": "Analytics",
                "./Consts": "Consts",
                "./define/AudioInfoDefine": "AudioInfoDefine",
                "./define/GameEventDefine": "GameEventDefine",
                "./define/TableInfoDefine": "TableInfoDefine",
                "./table/GameListTableItem": "GameListTableItem",
                "./window/WaitWindow": "WaitWindow",
            },
        ],
        GameListTableItem: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "dac0ebYrqRMzaMgl8o7cSaE", "GameListTableItem"),
                    Object.defineProperty(n, "__esModule", {
                        value: !0,
                    }),
                    (n.GameListTableItem = void 0);
                var o = (function () {
                    function t() {}
                    return (
                        (t.prototype.key = function () {
                            return this.id;
                        }),
                        t
                    );
                })();
                (n.GameListTableItem = o), cc._RF.pop();
            },
            {},
        ],
        GameTypeDefine: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "ff8d5HET0tMOY8h8fEBAffU", "GameTypeDefine"),
                    Object.defineProperty(n, "__esModule", {
                        value: !0,
                    }),
                    (n.GameIds = void 0),
                    (function (t) {
                        (t[(t.None = 0)] = "None"), (t[(t.GameElsfk = 1)] = "GameElsfk");
                    })(n.GameIds || (n.GameIds = {})),
                    cc._RF.pop();
            },
            {},
        ],
        GameType: [
            function (t, e, n) {
                "use strict";
                var o;
                cc._RF.push(e, "27795fsEs5NMKJu8cKnPCvo", "GameType"),
                    Object.defineProperty(n, "__esModule", {
                        value: !0,
                    }),
                    (n.nameList =
                        n.boxRewardList =
                        n.GamePropType =
                        n.boxRewardType =
                        n.SkinId =
                        n.GouSkin =
                        n.MaoSkin =
                        n.RankListIconPos =
                        n.FakeRankList =
                        n.FakeRankTime =
                        n.LocationList =
                            void 0),
                    (n.LocationList = [
                        "\u672a\u77e5",
                        "\u5317\u4eac",
                        "\u5929\u6d25",
                        "\u4e0a\u6d77",
                        "\u91cd\u5e86",
                        "\u6cb3\u5317",
                        "\u5c71\u897f",
                        "\u5185\u8499\u53e4",
                        "\u8fbd\u5b81",
                        "\u5409\u6797",
                        "\u9ed1\u9f99\u6c5f",
                        "\u6c5f\u82cf",
                        "\u6d59\u6c5f",
                        "\u5b89\u5fbd",
                        "\u798f\u5efa",
                        "\u6c5f\u897f",
                        "\u5c71\u4e1c",
                        "\u6cb3\u5357",
                        "\u6e56\u5317",
                        "\u6e56\u5357",
                        "\u5e7f\u4e1c",
                        "\u5e7f\u897f",
                        "\u6d77\u5357",
                        "\u56db\u5ddd",
                        "\u8d35\u5dde",
                        "\u4e91\u5357",
                        "\u897f\u85cf",
                        "\u9655\u897f",
                        "\u7518\u8083",
                        "\u9752\u6d77",
                        "\u5b81\u590f",
                        "\u65b0\u7586",
                        "\u9999\u6e2f",
                        "\u6fb3\u95e8",
                        "\u53f0\u6e7e",
                    ]),
                    (n.FakeRankTime = [
                        8.17, 11.27, 12.03, 12.84, 12.99, 14.61, 15.81, 21.39, 22.73, 23.46, 24.24, 24.57, 25.97, 26.01, 27.13,
                        27.86, 29.78, 32.01, 33.36, 35.75, 35.93, 35.96, 44.34, 47.84, 49.81, 50.5, 57.71, 63.79, 90.9, 103.89,
                        139.85, 245.68, 346.29, 404, 454.5,
                    ]),
                    (n.FakeRankList = [
                        [
                            20, 17, 11, 16, 12, 23, 5, 13, 25, 18, 19, 27, 14, 24, 15, 6, 21, 8, 4, 1, 31, 3, 7, 28, 10, 9, 2, 22,
                            26, 30, 29, 32, 34, 33, 0,
                        ],
                        [
                            20, 17, 16, 11, 12, 5, 13, 23, 19, 25, 18, 27, 24, 14, 6, 15, 8, 21, 4, 31, 1, 7, 3, 10, 28, 9, 22, 2,
                            30, 26, 29, 32, 34, 33, 0,
                        ],
                        [
                            20, 17, 11, 16, 23, 12, 25, 5, 13, 19, 18, 27, 14, 24, 15, 6, 21, 8, 4, 1, 31, 3, 7, 28, 10, 9, 2, 22,
                            26, 30, 29, 32, 34, 33, 0,
                        ],
                        [
                            20, 17, 11, 16, 12, 23, 5, 13, 18, 25, 27, 19, 24, 14, 6, 15, 8, 21, 4, 31, 1, 7, 3, 10, 28, 9, 22, 2,
                            30, 26, 29, 32, 34, 33, 0,
                        ],
                        [
                            20, 17, 16, 11, 12, 5, 23, 25, 13, 18, 19, 14, 27, 24, 15, 6, 21, 8, 4, 1, 31, 3, 7, 28, 10, 9, 2, 22,
                            26, 30, 29, 32, 34, 33, 0,
                        ],
                        [
                            20, 17, 11, 16, 12, 23, 5, 13, 25, 19, 18, 27, 14, 24, 6, 15, 21, 8, 4, 31, 1, 7, 3, 10, 28, 9, 22, 2,
                            30, 26, 29, 32, 34, 33, 0,
                        ],
                        [
                            20, 17, 11, 16, 12, 23, 5, 25, 18, 13, 19, 27, 24, 14, 6, 15, 21, 8, 4, 1, 31, 3, 7, 28, 10, 9, 2, 22,
                            26, 30, 29, 32, 34, 33, 0,
                        ],
                    ]),
                    (n.RankListIconPos = [
                        [
                            {
                                x: -105,
                                y: 49.627,
                            },
                            {
                                x: -35,
                                y: 49.627,
                            },
                            {
                                x: 35,
                                y: 49.627,
                            },
                            {
                                x: 105,
                                y: 49.627,
                            },
                            {
                                x: -140,
                                y: 10.436,
                            },
                            {
                                x: -70,
                                y: 10.436,
                            },
                            {
                                x: 0,
                                y: 10.436,
                            },
                            {
                                x: 70,
                                y: 10.436,
                            },
                            {
                                x: 140,
                                y: 10.436,
                            },
                            {
                                x: -170,
                                y: -32.254,
                            },
                            {
                                x: -102,
                                y: -32.254,
                            },
                            {
                                x: -34,
                                y: -32.254,
                            },
                            {
                                x: 34,
                                y: -32.254,
                            },
                            {
                                x: 102,
                                y: -32.254,
                            },
                            {
                                x: 170,
                                y: -32.254,
                            },
                            {
                                x: -202.208,
                                y: -82.962,
                            },
                            {
                                x: -136.208,
                                y: -82.962,
                            },
                            {
                                x: -70.208,
                                y: -82.962,
                            },
                            {
                                x: -4.208,
                                y: -82.962,
                            },
                            {
                                x: 61.792,
                                y: -82.962,
                            },
                            {
                                x: 127.792,
                                y: -82.962,
                            },
                            {
                                x: 193.792,
                                y: -82.962,
                            },
                        ],
                        [
                            {
                                x: -70,
                                y: 49.627,
                            },
                            {
                                x: 0,
                                y: 49.627,
                            },
                            {
                                x: 70,
                                y: 49.627,
                            },
                            {
                                x: -105,
                                y: 10.436,
                            },
                            {
                                x: -35,
                                y: 10.436,
                            },
                            {
                                x: 35,
                                y: 10.436,
                            },
                            {
                                x: 105,
                                y: 10.436,
                            },
                            {
                                x: -136,
                                y: -32.254,
                            },
                            {
                                x: -68,
                                y: -32.254,
                            },
                            {
                                x: 0,
                                y: -32.254,
                            },
                            {
                                x: 68,
                                y: -32.254,
                            },
                            {
                                x: 136,
                                y: -32.254,
                            },
                            {
                                x: -169.208,
                                y: -82.962,
                            },
                            {
                                x: -103.208,
                                y: -82.962,
                            },
                            {
                                x: -37.208,
                                y: -82.962,
                            },
                            {
                                x: 28.792,
                                y: -82.962,
                            },
                            {
                                x: 94.792,
                                y: -82.962,
                            },
                            {
                                x: 160.792,
                                y: -82.962,
                            },
                        ],
                        [
                            {
                                x: -35,
                                y: 49.627,
                            },
                            {
                                x: 35,
                                y: 49.627,
                            },
                            {
                                x: -70,
                                y: 10.436,
                            },
                            {
                                x: 0,
                                y: 10.436,
                            },
                            {
                                x: 70,
                                y: 10.436,
                            },
                            {
                                x: -102,
                                y: -32.254,
                            },
                            {
                                x: -34,
                                y: -32.254,
                            },
                            {
                                x: 34,
                                y: -32.254,
                            },
                            {
                                x: 102,
                                y: -32.254,
                            },
                            {
                                x: -136.208,
                                y: -82.962,
                            },
                            {
                                x: -70.208,
                                y: -82.962,
                            },
                            {
                                x: -4.208,
                                y: -82.962,
                            },
                            {
                                x: 61.792,
                                y: -82.962,
                            },
                            {
                                x: 127.792,
                                y: -82.962,
                            },
                        ],
                        [
                            {
                                x: -35,
                                y: 49.627,
                            },
                            {
                                x: 35,
                                y: 49.627,
                            },
                            {
                                x: -35,
                                y: 10.436,
                            },
                            {
                                x: 35,
                                y: 10.436,
                            },
                            {
                                x: -102,
                                y: -32.254,
                            },
                            {
                                x: -34,
                                y: -32.254,
                            },
                            {
                                x: 34,
                                y: -32.254,
                            },
                            {
                                x: 102,
                                y: -32.254,
                            },
                            {
                                x: -103.208,
                                y: -82.962,
                            },
                            {
                                x: -37.208,
                                y: -82.962,
                            },
                            {
                                x: 28.792,
                                y: -82.962,
                            },
                            {
                                x: 94.792,
                                y: -82.962,
                            },
                        ],
                        [
                            {
                                x: 0,
                                y: 49.627,
                            },
                            {
                                x: -35,
                                y: 10.436,
                            },
                            {
                                x: 35,
                                y: 10.436,
                            },
                            {
                                x: -68,
                                y: -32.254,
                            },
                            {
                                x: 0,
                                y: -32.254,
                            },
                            {
                                x: 68,
                                y: -32.254,
                            },
                            {
                                x: -103.208,
                                y: -82.962,
                            },
                            {
                                x: -37.208,
                                y: -82.962,
                            },
                            {
                                x: 28.792,
                                y: -82.962,
                            },
                            {
                                x: 94.792,
                                y: -82.962,
                            },
                        ],
                        [
                            {
                                x: 0,
                                y: 49.627,
                            },
                            {
                                x: -35,
                                y: 10.436,
                            },
                            {
                                x: 35,
                                y: 10.436,
                            },
                            {
                                x: -68,
                                y: -32.254,
                            },
                            {
                                x: 0,
                                y: -32.254,
                            },
                            {
                                x: 68,
                                y: -32.254,
                            },
                            {
                                x: -37.208,
                                y: -82.962,
                            },
                            {
                                x: 28.792,
                                y: -82.962,
                            },
                        ],
                        [
                            {
                                x: -35,
                                y: 10.436,
                            },
                            {
                                x: 35,
                                y: 10.436,
                            },
                            {
                                x: -68,
                                y: -32.254,
                            },
                            {
                                x: 0,
                                y: -32.254,
                            },
                            {
                                x: 68,
                                y: -32.254,
                            },
                            {
                                x: 0,
                                y: -82.962,
                            },
                        ],
                    ]),
                    (n.MaoSkin = [1e3, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010]),
                    (n.GouSkin = [2e3, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010]),
                    (function (t) {
                        (t[(t.mao = 1e3)] = "mao"),
                            (t[(t.mao1 = 1001)] = "mao1"),
                            (t[(t.mao2 = 1002)] = "mao2"),
                            (t[(t.mao3 = 1003)] = "mao3"),
                            (t[(t.mao4 = 1004)] = "mao4"),
                            (t[(t.mao5 = 1005)] = "mao5"),
                            (t[(t.mao6 = 1006)] = "mao6"),
                            (t[(t.mao7 = 1007)] = "mao7"),
                            (t[(t.mao8 = 1008)] = "mao8"),
                            (t[(t.mao9 = 1009)] = "mao9"),
                            (t[(t.mao10 = 1010)] = "mao10"),
                            (t[(t.gou = 2e3)] = "gou"),
                            (t[(t.gou1 = 2001)] = "gou1"),
                            (t[(t.gou2 = 2002)] = "gou2"),
                            (t[(t.gou3 = 2003)] = "gou3"),
                            (t[(t.gou4 = 2004)] = "gou4"),
                            (t[(t.gou5 = 2005)] = "gou5"),
                            (t[(t.gou6 = 2006)] = "gou6"),
                            (t[(t.gou7 = 2007)] = "gou7"),
                            (t[(t.gou8 = 2008)] = "gou8"),
                            (t[(t.gou9 = 2009)] = "gou9"),
                            (t[(t.gou10 = 2010)] = "gou10");
                    })(n.SkinId || (n.SkinId = {})),
                    (function (t) {
                        (t[(t.goid = 1)] = "goid"), (t[(t.skin = 2)] = "skin");
                    })((o = n.boxRewardType || (n.boxRewardType = {}))),
                    (function (t) {
                        (t[(t.None = 0)] = "None"),
                            (t[(t.Recall = 1)] = "Recall"),
                            (t[(t.Change = 2)] = "Change"),
                            (t[(t.Hammer = 3)] = "Hammer"),
                            (t[(t.Refresh = 4)] = "Refresh");
                    })(n.GamePropType || (n.GamePropType = {})),
                    (n.boxRewardList = [
                        {
                            id: 1,
                            name: "\u91d1\u5e01",
                            type: o.goid,
                            rewardId: 0,
                            count: 50,
                            weight: 24,
                        },
                        {
                            id: 2,
                            name: "\u91d1\u5e01",
                            type: o.goid,
                            rewardId: 0,
                            count: 80,
                            weight: 22,
                        },
                        {
                            id: 3,
                            name: "\u91d1\u5e01",
                            type: o.goid,
                            rewardId: 0,
                            count: 100,
                            weight: 16,
                        },
                        {
                            id: 4,
                            name: "\u91d1\u5e01",
                            type: o.goid,
                            rewardId: 0,
                            count: 130,
                            weight: 14,
                        },
                        {
                            id: 5,
                            name: "\u91d1\u5e01",
                            type: o.goid,
                            rewardId: 0,
                            count: 150,
                            weight: 12,
                        },
                        {
                            id: 6,
                            name: "\u91d1\u5e01",
                            type: o.goid,
                            rewardId: 0,
                            count: 180,
                            weight: 8,
                        },
                        {
                            id: 7,
                            name: "\u76ae\u80a4",
                            type: o.skin,
                            rewardId: 1005,
                            count: 1,
                            weight: 1,
                        },
                        {
                            id: 8,
                            name: "\u76ae\u80a4",
                            type: o.skin,
                            rewardId: 2005,
                            count: 1,
                            weight: 1,
                        },
                        {
                            id: 9,
                            name: "\u76ae\u80a4",
                            type: o.skin,
                            rewardId: 1009,
                            count: 1,
                            weight: 1,
                        },
                        {
                            id: 10,
                            name: "\u76ae\u80a4",
                            type: o.skin,
                            rewardId: 2009,
                            count: 1,
                            weight: 1,
                        },
                    ]),
                    (n.nameList = [
                        "\u63d0\u706f\u7167\u6cb3\u5c71",
                        "\u65ad\u6865\u6b8b\u96ea",
                        "\u98ce\u4e2d\u96e8\u8377",
                        "\ufe4f\u6f47\u6f47\u68a6\u6db5",
                        "\u82b1\u843d\u82b1",
                        "\u5927\u53d4\u3002",
                        "\ufe3f\u513f\u65f6\u6700\u50bb\u7684\u4e8b",
                        "\u91d1\u9c7c\u604b\u732b\u7eaa",
                        "\u4f60\u62e5\u6211\u6696",
                        "\u6c92\u4e86\u7075\u9b42\u7684\u81ea\u6211",
                        "\u8be5\u7528\u6237\u5df2\u8bc8\u5c38",
                        "\u6346\u7ed1\u7684\u03a6\u5fc3",
                        "\u7d20\u5e74\u9526\u65f6",
                        "\u8352\u91ce\u4e0d\u76f8\u4fe1\u773c\u6cea",
                        "\u6625\u98ce\u917f\u2014\u9152",
                        "\u56db\u5b63\u957f\u6625",
                        "\u6cea\u82af\u4f24\u75d5",
                        "\u68a6\u60f3\u5947\u8ff9",
                        "\u5168\u5e7c\u513f\u56ed\u6700\u5e05",
                        "\u82e6\u4e2d\u8fd8\u80fd\u4f5c\u4e50",
                        "\u4e00\u8f6c\u8eab\u4e00\u8f88\u5b50",
                        "\u8bf4\u7231\u592a\u70eb\u5634\u8a00\u60c5\u592a\u60b2\u75db",
                        "\u9752\u6885\u753b\u76cf\u5341\u5e74\u5bd2",
                        "\u84dd\u8272\u96e8\u8776",
                        "\u5f85\u537f\u5f52\u6765",
                        "\u60c5\u4e1d\u81ea\u6210\u971c",
                        "\u901d\u7136\u964c",
                        "\u7a7a\u6c14\u7a00\u8584i",
                        "\u9aa8\u5b50\u203b\u91cc\u90fd\u662f\u620f",
                        "\u4e0d\u5982\u7b11\u7740\u653e\u624b",
                        "\u59d0\u4e0d\u662f\u597d\u60f9\u7684",
                        "\u5357\u8475\u601d\u6696",
                        "\u5c06\u519b\u59bb",
                        "\u7a7a\u6c14\u732b\u3043",
                        "\u5b64\u5343\u203b\u7fbd",
                        "\u516d\u5f26\u7eff\u6f2a",
                        "\u4f4e\u8abf*\u914d\u89d2",
                        "\u99ab\u8349\u25a1\u6824\u6dc7\u6dcb",
                        "\u5b64\u72ec\u7684\u50cf\u4e00\u6761\u72d7",
                        "\u957f\u53d1\u7efe\u541b\u5fc3",
                        "\u8bf4\u518d\u591a\u90fd\u662f\u5047\u5927\u7a7a",
                        "\u4e00\u573a\u75f4\u60c5\u4e00\u573a\u68a6",
                        "\u5411\u672a\u6765\u8d1f\u8d23",
                        "\u590f\u81f3\u2606",
                        "\u8382\u856a\u6240\u92b6",
                        "\u7b11\u5bf9\u65f6\u5149",
                        "\u8424\u706b\u866b\u7684\u5149",
                        "\u4e00\u987e\u503e\u57ce",
                        "\u4ee5\u5251\u4e4b\u540d",
                        "\u591c\u788e\u5bd2",
                        "\u5929\u4e0b\u7121\u6575",
                        "\u96e8\u5929\u7684\u5fc3\u7396",
                        "\u5c71\u65e0\u9675",
                        "\u4f59\u60c5\u6de1\u672b",
                        "\u7ec8\u4ee5\u8fdf\u66ae",
                        "\u8840\u67d3\u58a8\u51a2",
                        "\u25b3\u98ce\u96ea\u5439\u6ee1\u5934",
                        "\u683c\u6851\u82b1\u5f88\u7f8e",
                        "\u8d31\u547d\u4e00\u6761",
                        "\u90a3\u5e74\u6a31\u82b1\uff0c\u6389\u843d\u6ee1\u5730",
                        "\u9739\u96f3\u5973\u90ce",
                        "\u534a\u6696\u65f6\u5149-",
                        "\u6491\u4e00\u628a\u7eb8\u4f1e",
                        "\u7a7a\u8c37\u5e7d\u5170",
                        "\u53d1\u6761\u5154\u5b50",
                        "\u82f1\u96c4\u7684\u6b32\u671b",
                        "\u4e0d\u8d1f\u597d\u65f6\u5149",
                        "\u81ea\u82e5\u6e05\u98ce",
                        "\u5982\u4eca\u54e5\u5f88\u7f3a\u7231",
                        "\ufe3f\u8033\u8bed\u751f\u6d3b",
                        "\u9cf3\u5c3e\u9b5a",
                        "\u82b1\u9999\u6d07\u67d3",
                        "\u843d\u5b50\u65e0\u6094",
                        "\u9e22\u7fbd\u6155\u541b\u5e74",
                        "\u85cf\u8d77\u6765\u7684\u60b2\u51c9",
                        "\u2570\u66b4\u8d70\u7684\u5154\u5b50\u256f",
                        "\u6012\u653e\u7684\u68a6\u60f3",
                        "\u521d\u5fc3\u83ab\u8d1f",
                        "\u3123\u7a7a\u5c9b\u65e7\u5fc3",
                        "\u633d\u60c5\u4e1d",
                        "\u6800\u9aa8\u8bcd\u5b64\u6b62\u8f9e",
                        "\u5bf9\u5e05\u7684\u514d\u75ab\u529b",
                        "\u6ca1\u6709\u4ef7\u503c\u7684\u7231\u60c5",
                        "\u65f6\u5149\u4e0d\u987e\u6211",
                        "\ufe4f\u534a\u4e2a\u7075\u9b42",
                        "\u9ea6\u610f\u7d2b\u82cf\u5ddd",
                        "\u25b3\u98de\u5411\u4f60de\u5fc3\u623f",
                        "\u62ff\u53ef\u7231\u6362\u4f60",
                        "\u5fc3\u75bc\u4f60\u4f24\u5f88\u6df1",
                        "\u9806\u552d\u81ea\u562b",
                        "\u5b8c\u7f8e\u60c5\u4eba",
                        "\u80cc\u53db\u5168\u6740\u65e0\u8d66",
                        "\u7626\u9a6c\u67af\u8363\u6b8b\u6708",
                        "\u65f6\u5149\u5077\u8d70\u5f53\u521d",
                        "\u542c\uff0c\u98ce\u7684\u97f3\u97f5",
                        "\u4f18\u4f36",
                        "\u7d2b\u8272%\u6de1\u6de1\u7684\u5fe7\u4f24",
                        "\u3123\u6708\u7259\u5f2f\u5f2f",
                        "\u76f8\u987e\u4f36\u4fdc",
                        "\u6885\u96e8\u9752\u840d",
                        "\u83ab\u7b11\u6843\u82b1\u9189",
                        "\u5b64\u8eab\u6491\u8d77\u4e00\u7247\u5929",
                        "\u4f55\u4ee5\u7b19\u7bab\u9ed8",
                        "\u4eac\u534e\u5026\u5ba2",
                        "\u6e05\u6b4c\u5b64\u6211",
                        "\u6e29\u67d4\u5728\u5de6\u8fb9",
                        "\u5916\u5a46\u5bb6\u7684\u5927\u767d\u9e45",
                        "\u6d41\u665a\u6db5\u76f8\u603c\u6028",
                        "\u4f60\u7f3a\u5e2d\u7684\u5c81\u6708",
                        "\u5e74\u5c11\u604b\u6b4c",
                        "\u7368\u767d\u5f0f\u5206\u624b",
                        "\u7231\u4f60\u7684\u5c0f\u7b28\u86cb",
                        "\u4e13\u6cbb\u5404\u79cd\u4e0d\u670d",
                        "\u6e05\u98ce\u5f52\u5ba2",
                        "\u56de\u61b6\u7d42\u6b87",
                        "\u9526\u5e74\u884d\u751f\u70e6\u6101",
                        "\u604b\u4e00\u62b9\u6696\u9633",
                        "\u98a0\u8986\u98a8\u96f2",
                        "\u8584\u66ae\u77e5\u79cb\u308e",
                        "\u840c\u9762\u3006\u5973\u6c49",
                        "\u4e00\u70b9\u4e00\u6ef4\u56de\u5fc6",
                        "\u6a31\u82b1\u96e8\u68a6",
                        "\u552f\u6709\u594b\u529b",
                        "\u846c\u5728\u5fc3\u91cc",
                        "\u7bf1\u83ca",
                        "\u537f\u4ee5\u541b\u6b4c",
                        "\u6cbb\u6108\u7cfb\u4e61\u9738",
                        "\u884c\u8d70",
                        "\u6253\u4f1e\u7684\u9b5a",
                        "\u3006\u76f8\u7ea6\u7684\u8fc7\u5f80",
                        "\u82b1\u4e1b\u61d2\u56de\u987e",
                        "\u7b11\u5230\u5fc3\u75bc\u7684\u5973\u5b50",
                        "\u82e5\u767d\u9a79\u8fc7\u9699",
                        "\u4e1c\u65b9\u5f67\u537f",
                        "\u65f6\u95f4\u8ba9\u4eba\u5fc3\u5815\u843d",
                        "\u5c3d\u662f\u9057\u61be",
                        "\u9752\u74f7\u5f71",
                        "\u9752\u8863\u9189\u9152\u3050",
                        "\u7efe\u7eb1",
                        "\u70bd\u70ed\u98ce\u96ea",
                        "\u53e4\u58a8\u4ea6\u67d3\u7eb1",
                        "\ufe4f\u9752\u4e1d\u7ef5\u957f",
                        "\u557c\u7ea2\u6cea",
                        "\u4f55\u5fc5\u8981\u6b3a\u9a19",
                        "\u5584\u826f\u7684\u574f\u4eba\u4eba",
                        "\u620f\u5b50\u4e0e\u5993",
                        "\u9189\u5728\u4ed6\u5fc3\u4e2d",
                        "\u505c\u706f\u5411\u6653",
                        "\u53cb\u4eba\u751f\u6d3b",
                        "\u5807\u8272\u5b89\u5e74",
                        "\u5b64\u5355\u203b",
                        "\u59d0\u6839\u672c\u6ca1\u628a\u7231\u60c5\u5f53\u56de\u4e8bi",
                        "\u8471\u90c1\u98ce\u5149",
                        "\u6c5f\u67ab\u601d\u6e3a\u7136",
                        "\u4f60\u4ee5\u4e3a\u4f60\u662f\u8c01",
                        "\u6b7b\u5bc2\u6f20\u7136",
                        "\u7537\u4eba\u4e0d\u4f4e\u5934",
                        "\u62fc\u51d1\u788e\u7684\u5fc3",
                        "\u4e00\u4e2a\u4eba\u7684\u4e16\u754c",
                        "\u9752\u6625\u9690\u85cf\u66f2",
                        "\u90ae\u5dee\u75c5\u4eba",
                        "\u4e91\u906e\u708a\u70df\u5c0f\u6865",
                        "\u6dd1\u5973\u4e0d\u662f\u4fc4\u7684\u8303",
                        "\u590f\u8475",
                        "\u2570\u2547\u83aa\u256e\u535f\u30b8\u914d\u256e",
                        "\u65e7\u697c\u5929\u53f0",
                        "\u539f\u8c05\u6211\u6015\u9ed1",
                        "\u7ea2\u5c18\u4e07\u4e08",
                        "\u5b64\u72ec\u6210\u6027",
                        "\u683c*\u5f0f\u5316",
                        "\u706f\u6613\u706d\u60c5\u6613\u51b7",
                        "\u5929\u6daf\u4e3a\u5ba2",
                        "\u671b\u5929\u8fb9\u661f\u5bbf",
                        "\u5f7c\u5cb8\u8352\u829c\u308e",
                        "\u65e7\u5df7\u7eb8\u4f1e\u65e0\u6545\u4eba",
                        "\u9189\u4e66\u751f",
                        "\u613f\u4f60\u5982\u65e7",
                        "\u65e7\u4eba\u6b7b\u5df7\u70c2\u611f\u60c5\xb0",
                        "\u6d3b\u8272\u751f\u9999",
                        "\u5638\u7399\u56f5\u4ef3\u54cb\u5e9d",
                        "\u5317\u57ce\u7409\u7483\u6708",
                        "\u53ea\u602a\u81ea\u6211\u592a\u50bb",
                        "\u8bd7\u9152\u8d81\u5e74\u5c11",
                        "\u5bc4\u4e0e\u7398\u5a73",
                        "\u60c5\u96be\u8a00",
                        "\u7b1b\u843d\u7bab\u58f0\u767d\u8863\u5f52",
                        "\u5373\u4e0d\u7231\uff0c\u4f55\u5fc5\u5f3a\u6c42",
                        "\u748e\u843d\u5a7c\u747e",
                        "\u8336\u51c9\u9152\u5bd2",
                        "\u3220\u4e2a\u4eba\u2198\u751f\u6d3b\u3086",
                        "\u7518\u4e4b\u5982\u9974",
                        "\u9752\u88c1",
                        "\u4e00\u773c\u4e07\u5e74",
                        "\u67d4\u60c5\u5973\u786c\u6c49",
                        "\u900d\u9065\u65e0\u75d5",
                        "\u9884\u89c1\u4e0d\u4e86\u7684\u672a\u6765",
                        "\u4ea1\u9b42\u590d\u82cfJesus-",
                        "\ufe4f\u8ba9\u5b64\u5355\u900f\u900f\u6c14",
                        "\u7112\u7700\u8362\u5991\u982d\u663b\u8d77\u553b",
                        "\u601d\u60f3\u7684\u4e3b\u89d2",
                        "\u68a6\u4f3c\u256e\u6cea\u968f",
                        "\u8ba4\u9519\u8ba4\u6002\u4e0d\u8ba4\u8f93",
                        "\u70df\u718f\u5986\u4e0b",
                        "\u6570\u7740\u4f60\u7684\u51b7\u6f20",
                        "\u7ea2\u989c\u4e71",
                        "\u6708\u4e0b\u996e\u8336",
                        "\u9752\u6749\u4f9d\u65e7",
                        "\u7b19\u6b4c\u5343\u5e74\u3050",
                        "\u6c5d\u52ff\u79bb",
                        "\u522b\u6ca1\u5fc3\u6ca1\u80ba",
                        "\u8986\u6c34\u96be\u6536",
                        "\u81ea\u6211\u7684\u82f1\u96c4",
                        "\u9752\u7a1a",
                        "\u9621\u9aa8",
                        "\u4f0a\u4eba\u95ee\u5b64\u5f71",
                        "\u8f6f\u561f\u561f",
                        "\u523b\u756b\u75d5\u8de1\u3050",
                        "\u6696\u5149\u6d45\u7b11\u3043",
                        "\u83ca\u51fb\u624b",
                        "\u6211\u5df2\u6eba\u4f60\u5fc3\u6d77",
                        "\u226e\u4e14\u542c\u4e14\u884c",
                        "\u7075\u9b42\u4e4b\u795e",
                        "\u4e00\u4e16\u6d6e\u534e",
                        "\u65e7\u4eba\u4e5d\u4e8b",
                        "\u5e7b\u58a8\u6210\u8bd7",
                        "\u6e05\u53f6\u65e5\u66ae",
                        "\u82b1\u4f3c\u8c34\u6d45",
                        "\u6709\u540d\u4eba\u58eb",
                        "\u226e\u7af9\u7b19\u9526\u745f",
                        "\u9752\u9752\u964c\u4e0a\u6851",
                        "\u679d\u4e0a\u7ef5\u86ee",
                        "\u5343\u5bc2\u7267\u777f\u7b19",
                        "\u5934\u724c\u6d6a\u5f92",
                        "\u4eba\u513f\u4fcf",
                        "\u767d\u5934\u5fc5\u76f8\u4f9d",
                        "\u903c\u5575",
                        "\u7b19\u6b4c\u541b\u72ec\u5e7d",
                        "\u7ed9\u513f\u5b50\u8058\u4e2a\u5988",
                        "\u5c0f\u795e\u7ecf",
                        "\u6c50\u989c\u516e\u68a6",
                        "Poison\u4e36biting",
                        "\u4e0d\u77e5\u5c11\u5e74\u5df2\u6d41\u53bb",
                        "\u53ea\u4e3a\u541b\u56de\u9996",
                        "\u6211\u4e5f\u60f3\u88ab\u62ef\u6551",
                        "\u6c38\u8a00\u4e0d\u8d25",
                        "\u5c0f\u6765\u4efd\u5bc2\u5bde",
                        "\u5047\u9762\u2606\u738b\u5b50",
                        "\u30af\u7f61\u79c2\u541b\u5b53\u30af",
                        "\u3123\u6fc4\u773c\u96f2\u6e6e",
                        "\u503e\u4e36\u4e00\u4e16\u7ea2\u5986\u7684\u7d20\u989c",
                        "\u25b3\u975e\u4e3b\u6d41\u7684\u5e7c\u5e74",
                        "\u5fae\u7b11\u5e94\u5bf9",
                        "\u5143\u5609\u3006\u8349\u8349",
                        "\u8fc7\u5ba2\u4f55\u987b\u5907\u6ce8",
                        "\u4e0d\u5982\u5f52\u53bb",
                        "\u86f0\u4f0f\u534a\u4e16\u60c5",
                        "\u6de1\u6f20\u534a\u4e16\u76db\u5510",
                        "\u66ae\u96e8\u6d54\u8336",
                        "\u770b\u6e05\u4eba\u5fc3",
                        "\u964c\u4e0a\u53f9\u76f8\u601d",
                        "\u6696\u7537\u66a7\u4eba",
                        "\u679d\u4e0a\u7ef5\u86ee",
                        "\u67ab\u96ea~\u8f7b\u9713",
                        "\u51c9\u751f\u521d\u96e8",
                        "\u76f8\u9022\u4e0d\u6613",
                        "\u25b3\u5949\u65e8\u6210\u5a5a",
                        "\u5b88\u4f60\u5982\u521d",
                        "\u4f60\u7684\u5b64\u57ce\u6211\u7684\u8352\u51c9",
                        "\u6696\u5357\u7eff\u503e",
                        "\u98ce\u91cc\u6709\u6545\u4e8b",
                        "\u65e0\u6cd5\u81ea\u62d4\u7684\u8a93\u8a00",
                        "\u90a3\u75db\u4f24\u900f\u4e86\u5fc3",
                        "\u6d41\u82cf\u5982\u753b",
                        "\u65ad\u7075\u7ffc\u83ab\u7b11",
                        "\u5bbf\u547d\u504f\u6267\u7684\u60b2\u4f24",
                        "\u82e6\u6da9\u7684\u68c9\u82b1\u7cd6",
                        "\u6d6a\u5f97\u4e00\u8eab\u91ce\u6c14",
                        "\u505a\u4f60\u7684\u5c0f\u5996\u7cbe",
                        "\u8d81\u65f6\u5149\u8fd8\u5728",
                        "\u8f6c\u8eab\u4e36\u8bf4\u518d\u89c1",
                        "\u5b64\u8eab\u8d70\u6211\u8def",
                        "\u5171\u4eab\u203b\u7537\u53cb",
                        "\u68a6\u91cc\u9501\u989c",
                        "\u559d\u559d\u9152\uff0c\u8df3\u8df3\u821e",
                        "\u51e0\u91cd\u70df\u96e8",
                        "\u72ec\u81ea\u6905\u82b1\u7ea2",
                        "\u6697\u6de1\u7684\u5934\u50cf",
                        "\u5893\u60b2\u6b87",
                        "\u79cb\u5df7\u96e8\u6f47\u6f47",
                        "\u4e00\u62b9\u5fc3\u6ba4",
                        "\u5c81\u6708\u6d41\u6b4c",
                        "\u5343\u89dei",
                        "\u3123\u964c\u4e0a\u5c18\u57c3",
                        "\u63d0\u5200\u6218\u60c5\u573a",
                        "\u226e\u591c\u8046\u79bb\u6b87",
                        "\u8e0f\u6b4c\u800c\u884c",
                        "\u8c08\u573a\u672b\u65e5\u604b\u7231",
                        "\u2014\u2501\u2606\u6c89\u9ed8\u3065",
                        "\u226e\u707c\u5fc3",
                        "\u6495\u6495\u626f\u626f\u788e\u4e86\u4e00\u5730",
                        "\ufe4f\u6d45\u7b11\u76c8\u76c8",
                        "\u611f\u6fc0\u6709\u68a6",
                        "\u964c\u4e88\u503e\u5e74",
                        "\u8d1d\u5170\u840c\u96ea\u3050",
                        "\u7ec6\u96e8\u6a31\u82b1\u843d",
                        "\u4e0d\u8a00\u653e\u4e0b",
                        "\u4e00\u7f15\u9752\u4e1d\u70df",
                        "\u6709\u68a6\u5c31\u8981\u6562\u8ffd",
                        "\u8def\u5c3d\u9690\u9999\u5904",
                        "\u884c\u4e91\u6d41\u6d6a\u3050",
                        "\u6355\u68a6\u2606\u4ed9\u5973",
                        "\u6d45\u6b87\u6401\u7b11",
                        "\u6cea\u4e00\u6ef4\u6ef4\u88ab\u5c01\u9501",
                        "\u4f59\u751f\u6709\u4f60",
                        "\u96ea\u843d\u8bb0\u5fc6",
                        "\u504f\u6267\u4e86\u9752\u4e1d\u98d8\u62c2",
                        "\u62b9\u6389\u4f24\u75d5",
                        "\u6c5f\u57ce",
                        "\u9189\u4f55\u59a8",
                        "\u3123\u534a\u9762\u7ea2\u5986",
                        "\u8f6e\u56de\u3006\u7684\u6298\u78e8",
                        "LOL\u4e36\u79f0\u9738\u5168\u6d6e",
                        "\u843d\u82b1\u4f0a\u4eba",
                        "\u8d77\u6b65\u5411\u524d\u8d70",
                        "\u7d20\u624b\u633d\u8896",
                        "\u4e0d\u4e00\u822c\u7537\u4eba",
                        "\u9759\u9759\u7684\u6d88\u901d",
                        "\u4e5f\u8bb8\u771f\u7684\u7231\u8fc7",
                        "\u604b\u4eba\u672a\u6ee1",
                        "\u3123\u521d\u6674\u591c\u96e8",
                        "\u79bb\u4eba\u4f55\u5fc5\u633d",
                        "\u57ce\u5357\u82b1\u5df2\u5f00",
                        "\u671b\u7740\u2606\u5929\u7a7a",
                        "\u7b11\u8bed\u89e3\u6101\u82e6",
                        "\u75af\u75af\u98a0\u98a0\uff0c\u5c0f\u9752\u5e74",
                        "\u9633\u5149\u8fd8\u6696",
                        "\u5f7c\u5e74\u8c46\u853b\u304d",
                        "\u4f5c\u4e1a\u662f\u7535\u8111\u7684\u5c0f\u4e09",
                        "\u82b1\u5df2\u843d\u3043\u60c5\u5df2\u65ad",
                        "\u503e\u60c5\u5929\u6daf",
                        "\u4e00\u68a6\u7ea2\u5c18",
                        "\u53d1\u5c3e\u7684\u98ce\u3043",
                        "\u53eb\u81ea\u6211\u653e\u624b",
                        "\u5355\u8eab%\u6728\u5076",
                        "\u5fcd\uff0c\u6211\u505a\u5230\u4e86\u3002",
                        "\u6d63\u6b4c",
                        "\u6536\u8d2d\u5bc2\u5bde",
                        "\u5168\u529b\u4ee5\u8d74",
                        "\u256d\u30a1\u2121\u535f\u60f3\u6d05\u50fe\u94e5\u59b3\u3065",
                        "\u6668\u949f\u66ae\u9f13",
                        "\u661f\u8fb0\u5929\u5b87",
                        "\u8c08\u7b11\u98ce\u58f0",
                        "\u5929\u6daf\u5c3d\u5934\u7684\u62fe\u8352\u8005",
                        "\u6df1\u5df7\u308e",
                        "\u8bc1\u660e\u7ed9\u4f60\u770b",
                        "\u60b2\u50b7\u8acb\u6d88\u901d",
                        "\u6563\u9152\u6e05\u98ce",
                        "\u8367\u5149~\u5fae\u51c9",
                        "\u753b\u60c5\u4e3a\u86ca",
                        "\u597dNAME\u4f60\u51b3\u5b9a",
                        "\u5c18\u4e16\u65ad\u5d16\u5916",
                        "\u65e5\u66ae\u6c5f\u5357\u79cb",
                        "Hopeless\uff08\u7edd\u671b\uff09",
                        "\u534a\u6696\u590f\u4f24",
                        "\u96ea\u843d\u516e\u8d4f\u7fe9\u821e",
                        "\u60c5\u8bdd\u6eda\u70eb",
                        "\u4e86\u5bbf\u3003",
                        "\u51e0\u94b1\u6e05\u98ce",
                        "\u8c0e\u8a00\u6e05\u7a7a\u8bb0\u5fc6",
                        "\u6d41\u5e74\u8bb0\u5fc6\u3043",
                        "\ufe4f\u5929\u6daf\u6d6a\u4eba",
                        "\u5fc3\u5728\u54ed\u6ce3",
                        "\u6bb7\u4e5d\u6b4c",
                        "\u58a8\u96e8\u65e0\u75d5",
                        "\u68a7\u6850\u541f\u590f",
                        "\u7cd6\u679c\u3123\u871c\u6843",
                        "-\u8d25\u5bb6\xb0-",
                        "\u6668\u98ce\u97f5\u96e8",
                        "\u6885\u96e8\u9752\u840d",
                        "\u4e66\u5199\u4eba\u751f",
                        "\u98ce\u6708\u4e0d\u7b49\u95f2",
                        "\u226e\u5357\u8f9e",
                        "\u83b3\u9593\u51b2\u6de1\u4e86\u8a93\u8a00",
                        "\u2570\u3064\u6ed2\u842f\u2461\u7b29\u82a3\u904e\u2466\u6c50\u25c6",
                        "\u6843\u82b1\u65e0\u6570",
                        "\u6de1\u84dd\u84dd\u84dd",
                        "\u51cc\u6708",
                        "\u7d20\u989c\u5982\u6c34",
                        "\u65f6\u95f4\u5e76\u975e\u826f\u836f",
                        "\u65e7\u4eba\u65e7\u57ce\u65e7\u68a6",
                        "\u987e\u4e0e\u5357\u6b4c",
                        "\u5171\u5ea6\u65e5\u6708\u661f\u5149",
                        "\u70ae\u7537",
                        "\u7231\u5230\u5fd8\u8bb0\u5c81\u6708",
                        "\u8c22\u5b89\u664b\u79c0\u5f7b",
                        "\u5929\u6613\u8001\uff0c\u6c34\u6613\u5bd2",
                        "\u5c18\u5c01\u5df2\u4e45\u5fc3\u4f24",
                        "\u58a8\u8272\u8a18\u61b6",
                        "\u9003\u4e4b",
                        "\u88ab\u6c34\u6df9\u6b7b\u7684\u9c7c",
                        "\u6625\u82b1\u79cb\u6708",
                        "\u5356\u68a6\u5546\u4eba\u3050",
                        "\u7ee7\u7eed\u6211\u7684\u8f89\u714c",
                        "\u95ed\u773c\u770b\u865a\u4f2a",
                        "\u7231\u60c5\u4fdd\u9c9c\u5242",
                        "\u5fc3\u5df2\u9ebb\u6728\u30f3\u600e\u4f1a\u75db",
                        "\u9633\u6625\u767d\u96ea",
                        "\u8bb0\u5fc6\u7684\u56de\u8fc1",
                        "\u8046\u542c\u98ce\u97f3",
                        "\ufe3f\u8eb2\u535f\u6fc4\u8bb0\u610f",
                        "\u5ae3\u7136\u82e5\u5915",
                        "\u8776\ufe35\u821e\u6a31\u5a72\u843d",
                        "\u4f55\u4eba\u4e00\u7b11",
                        "\u5f62\u540c\u964c\u8def",
                        "\u5f9e\u567a\u3005\u5e75\u53f0",
                        "\u7d2b\u964c\u5f61\u7ea2\u5c18",
                        "\u706c\u72c2\u9172\u6613\u9192",
                        "\u95f2\u61d2\u8bd7\u4eba",
                        "\u4e3a\u8fe9\u72ec\u6218\u5929\u4e0b",
                        "\u5fc3\u75db\u8c01\u80fd\u4e86",
                        "\u871c\u5fc3\u841d\u8389\u9171",
                        "\u66ae\u67d3\u8f7b\u7eb1",
                        "\u9621\u964c",
                        "-\u90a3\u7231\u4eba\u4e0e\u72d7",
                        "\u629a*\u7b5d\u57fa\u5fb7",
                        "\u5b9d#NAME",
                        "\u9060\u822a\u65c5\u9014",
                        "\u5c71\u6709\u6276\u82cf",
                        "\u68a6\u91cc\u5bfb\u82b1\u82b1\u81ea\u843d",
                        "\ufe4f\u6854\u719f\u4e4b\u590f",
                        "\u5fc3\u5982\u67e0\u6aac",
                        "\u5f80\u590d\u968f\u5b89",
                        "\u98ce\u6e05\u6de1\u96c5\u221d",
                        "\u3123\u9694\u4e16\u7ecf\u5e74",
                        "\u70b9\u9897\u8bb8\u613f\u70df",
                        "\u542c\u98ce\u770b\u6708",
                        "\u3123\u5154\u7ed2",
                        "\u5317\u5c9b",
                        "\u6000\u63e3\u5c0f\u7c89\u5154",
                        "\u591c\u304e\u7a92\u606f\u7684\u9ed1\u6697",
                        "\u5386\u65e5\u65f7\u4e45",
                        "\u5c18\u57c3\u5df2\u843d\u5370",
                        "\u5ff5\u4f60\u5357\u7b19\u308e",
                        "\u843d\u82b1\u3079\u503e\u57ce",
                        "\u6211\u662f\u4e00\u53ea\u5c0f\u9e1f",
                        "\ufe4f\u6d45\u5fc6\u65e7\u65f6\u5149",
                        "\u4f20\u5947\u4eba\u7269",
                        "\u91ca\u653e\u6211\u7684\u4e0d\u51e1",
                        "\u7231\u4ed6\u5982\u547d",
                        "\u5496\u5561$\u52a0\u6ee1\u7cd6",
                        "\u575a\u5f3a\u662f\u7537\u4eba\u7684\u4e13\u6709\u540d\u8bcd",
                        "\u5b64\u51a2\u6e05\u98ce",
                        "\u5357\u6728\u79bb\u98ce",
                        "\u68a7\u68a6\u82b1",
                        "\u521d\u51ac\u7684\u2014\u98ce",
                        "\u5dee\u8ddd",
                        "\u6e21\u5384\u7684\u9014",
                        "\u6b8b\u5df7\u7a7a\u68a6",
                        "\u98ce\u542f\u89de",
                        "\u70df\u82b1\u867d\u7f8e\u8f6c\u77ac\u5373\u901d",
                        "\u60b2\u75db\u592a\u5e73\u6d0b\u7684\u90a3\u5934",
                        "\u5c71\u5ddd\u7686\u65e0\u6059",
                        "\u79cb\u53f6\u7eda\u4e3d",
                        "\u8607\u6253\u9905\u4e7e",
                        "\u98de\u5411\u771f\u7406",
                        "\ufe4f\u6355\u68a6\u5c11\u5973",
                        "\u5f00\u542f\u4eba\u751f\u8def",
                        "\u68ee\u747e\u732b",
                        "\u897f\u54f2",
                        "\u6697\u9999\u6d6e\u52a8",
                        "\u5341\u91cc\u7ea2\u5986\u68a6",
                        "\u6b22\u76cf\u5377\u5377\u8309",
                        "\u5ff5\u90a3\u4e9b\u56de\u9996",
                        "\ufe3f\u53d1\u5149\u65f3\u7b80\u8baf",
                        "\u60f9\u5c3d\u98ce\u5c18",
                        "\u504f\u6267\u7684\u50b2",
                        "\u8e72\u8857\u5934\u89e3\u95f7",
                        "\u5be5\u5be5\u7b11\u8138",
                        "\u6703\u98de\u7684\u732b",
                        "\u65e0\u7aef\u5bd2\u7389\u6696\u51ac\u834f",
                        "\u663c\u6b4c\u6cab\u620f\u8a00",
                        "\u5b64\u7368\u7eaa",
                        "\u90a3\u662f\u5b8c\u5168\u7684\u89ba\u609f",
                        "\u4e00\u7b11\u9189\u4eba\u95f4",
                        "\u65e7\u65e5\u60c5\u5982\u9189",
                        "\u96e8\u591c\u5b64\u4e91",
                        "\u77ed\ufe35\u53d1\u60c5\u957f",
                        "\u6211\u53ebmt",
                        "\u6e05\u6545\u5bb8\u51c9",
                        "\u6b8b\u83ba\u4f55\u65f6\u77e5\u4e86\u79cb",
                        "\u65f6\u5149\u7cdf\u8e4b\u4eba\u5fc3",
                        "\u67da\u5b50\u5c0f\u897f",
                        "\u9e7f\u75f4\u2260\u8def\u75f4i",
                        "lxm\u5ce9\u611b\u4f60",
                        "\u62fc\u51d1\u4e0d\u56de\u6628\u65e5",
                        "\u8fc7\u5ba2\u800c\u5df2\u8c01\u4e5f\u4e0d\u662f\u8c01\u7684\u8c01",
                        "\u590f\u97f5\u5a77",
                        "\u5357\u57ce\u96e8\u843d",
                        "\u3123\u6d45\u7b11\u56de\u7738",
                        "\u4ee5\u4e03\u4e3a\u4e66\u309c",
                        "\u9189\u540e\u542c\u98ce\u96e8",
                        "\u865a\u62df\u7684\u627f\u8bfa",
                        "\u5404*\u79cd\u575a\u5f3a",
                        "\ufe4f\u4e71\u82b1\u5c81\u6708",
                        "\u7fe9\u82e5\u60ca\u9e3f",
                        "\u65f6\u5149\u9759\u9759\u7684\u8d70",
                        "\u226e\u96e8\u540e\u67da\u5b50",
                        "\u6700\u957f\u7684\u76f8\u62e5",
                        "\u8001\u8857\u03a6",
                        "\u9752\u9e3e\u8426\u7bf1\u843d",
                        "\u81ea\u5e26\u5149\u8292",
                        "\u901d\u61b6\u6d41\u984f\u3002",
                        "\u522b\u82d1\u6e05\u66f2\u6298",
                        "\u53ef\u7231\u7684\u504f\u6267\u72c2",
                        "\u82b1\u5f71\u4f55\u5904",
                        "\u5982\u6b64\u7684\u6ca1\u5fc3\u6ca1\u80ba",
                        "\u9752\u6800",
                        "\u552f\u4e00\u7684\u552f\u4e00",
                        "\u672a\u6674",
                        "\u6d45\u672b\u5e74\u4ee3",
                        "\u9752\u6625\u604d\u558f\u6d6e\u516e",
                        "\u4f73\u4eba\u6301\u6247\u63a9\u7b11\u989c",
                        "\u6e05\u4ead\u957f\u65e5",
                        "\u6bc0\u6211\u58f9\u751f",
                        "\u505a\u6700\u597d\u7684\u81ea\u6211",
                        "\u966a\u4f60\u95f9",
                        "\u5343\u79cb\u5c81",
                        "\u98a0\ufe35\u6c9b\u6d41\u79bb",
                        "\u5317\u964c",
                        "\u25b3\u98ce\u5439\u8fc7\u65f3\u75d5\u8ff9",
                        "\u6f2b\u6f2b\u5357\u8fdf\u672a",
                        "\u8d8a\u5355\u7eaf\u8d8a\u5feb\u4e50",
                        "\u6211\u604b\u5c0f\u9ec4\u4eba",
                        "\u55e8\u7ffb\u4f60\u7684\u5c0f\u83ca\u82b1",
                        "\u7ea2\u989c\u52ab",
                        "\u732b\u8857\u5c11\u5973\u68a6",
                        "\u9ed8\u5199\u90a3\u4e00\u5207",
                        "\u8ffd\u8d76\u5c71\u8fb9\u7684\u98ce",
                        "\u60c5\u5e7b\u7075\u96ea\u3043",
                        "\u6c60\u669d",
                        "\u5982\u6000\u5c3a\u74a7",
                        "\u65ad\u6865\u6b8b\u6708",
                        "\u62fc\u640f\u3002\u594b\u529b",
                        "\ufe3f\u6d90\u5351\u5fae",
                        "\u633d\u624b\u53d9\u65e7",
                        "\u8584\u8377\u5473\u767d\u886c\u886b",
                        "\u5f7d\ufe35\u982d\u6dfa\u7b11",
                        "\u70df\u5bd2\u2606\u82e5\u96e8",
                        "\u3123\u5b64\u7edd\u75c5\u5973",
                        "\u662f\u68a6\u90fd\u4f1a\u7a7a",
                        "\u6492\u65e6\u4e0b\u7684\u967d\u5149",
                        "\u5929\u5d16\u5b64\u9e70",
                        "\u542c\u8fd9\u4e00\u5b63\u96e8\u843d",
                        "\u8000\u773c\u7684\u60b2\u4f24",
                        "\u602a\u6211\u773c\u778e\u932f\u611b\u6e23\u7537",
                        "\u53eb\u6211\u5f00\u5fc3",
                        "\u8d77\u821e\u5f04\u5f71",
                        "\u3123\u30dd\u8449\x01",
                        "\u843d\u82b1\u65e0\u60c5",
                        "\u83ca\u82b1\u7efd\u653e\u7684\u611f\u89c9",
                        "\u62e2\u4e00\u84d1\u70df\u96e8",
                        "\u665a\u97f3\u9c7c\u8bed\u5a7c",
                        "\u521d\u60c5\u4e0d\u8d1f",
                        "\u65e0\u6094\u5e74\u534e",
                        "Deadly",
                        "\u7537\u4eba\u4e0d\u7d2f\u624d\u662f\u7f6a",
                        "\u7eaf\u7eaf\u7684\u8bb0\u5fc6\u308e",
                        "\u4e09\u53f6\u8349\u3043",
                        "\u5929\u5929",
                        "\u4e00\u4e16\u503e\u57ce\u6cea",
                        "\u6625\u8272\u4e09\u2014\u5206",
                        "\u672b\u4e16\u5c9b\u57df",
                        "\u8fce\u5203\u800c\u89e3",
                        "\u5357\u7b19\u6d45\u68a6\u58a8\u6c50",
                        "\u7ea2\u8c46\u5bc4\u65e0\u537f",
                        "\u671d\u6b4c\u591c\u5f26",
                        "\u79bb\u4eba\u4e0d\u633d",
                        "\u7a57\u610f\u82b1\u841d\u751c",
                        "\u5fc3\u6613\u788e\uff0c\u8bf7\u52ff\u78b0",
                        "\u4e00\u8eab\u7956\u5b97\u5473\u513f",
                        "\u903e\u671f\u5b88\u5019",
                        "\u82b1\u839e\u6773\u841d\u70df",
                        "\u547d\u8fd0\u3006\u7684\u9f7f\u8f6e",
                        "\u95dc\u7cfb\u4e0d\u8b8a",
                        "\u6df1\u5165\u9aa8\u9ad3\u5df2\u4e45",
                        "\u590f\u65e5\u51b0\u7cd6\u96ea\u68a8",
                        "\u5a49\u6b4c\u3006\u5982\u68a6",
                        "\u4f55\u4ee5\u5706\u6625\u79cb",
                        "\u4e45\u9189\u7ed5\u5fc3\u5f26",
                        "\u6c5f\u5c71\u96e8\u98d8\u6447",
                        "\u534a\u76cf\u6d41\u5e74",
                        "\u5e26\u7740\u5154\u5b50\u53bb\u62d4y\xe1",
                        "\u6c89\u6ca6\u9189\u751f\u68a6\u6b7b",
                        "\u8001\u6e29\u9152",
                        "\u503e\u6696\u672a\u989c\xb0",
                        "\u6cea\u67d3\u7d20\u8863",
                        "\u4eba\u751f\u81ea\u7f16\u81ea\u5bfc\u81ea\u6f14",
                        "\u633d\u60c5\u4e1d",
                        "\u5c4b\u6a90\u4e0b\u542c\u96e8",
                        "\u4e00\u6735\u6b7b\u53bb\u7684\u8537\u8587",
                        "\u7a7a\u6c14\u91cc\u7684\u56de\u5fc6",
                        "\u53f6\u9690\u77e5\u5fc3\u9b42",
                        "\u7b49\u4e0d\u5230\u8fe9",
                        "",
                        "\u5fc3\u91cc\u7684\u82e6",
                        "\u7ea4\u4e91\u5f04\u5de7",
                        "\u50b7\u865b\u5047",
                        "\u221a\u5be1\u8a00\u5e38\u5728",
                        "\u624b\u6367\u9633\u5149",
                        "\u51cc\u6668\u4e24\u70b9\u534a",
                        "\u9752\u7a7a\u5982\u7483",
                        "\u7121\u6cd5\u820d\u68c4",
                        "\u8086\u610f\u6d53\u5986\u7738",
                        "\u5357\u67ef\u6545\u4eba",
                        "\u4e00\u76c5\u6d4a\u9152\u9189\u65b9\u4f11",
                        "\u3013\u5fc3\u5728\u55a7\u54d7",
                        "\u4e0d\u60e7\u56f0\u96be",
                        "\u4eba\u4ea6\u5df2\u6b4c",
                        "\u5c71\u8fb9\u7684\u8bd7\u4e0e\u98ce",
                        "\u575a\u5f3ade\u5c0f\u4eba\u7269",
                        "\u6e05\u98ce\u53ef\u76f8\u8bb8",
                        "\u58a8\u67d3\u6a31\u98de",
                        "\u5357\u98ce\u5317\u81f3",
                        "\ufe3f\u8033\u8fb9\u60c5\u8bdd",
                        "\u96e8\u540e\u6709\u5f69\u8679",
                        "\u6c34\u4e2d\u671b\u6708",
                        "\ufe36\u5fd8\u5fe7\u8349\u309e",
                        "\u6e29\u67d4\u5c1d\u5c3d\u4e86\u5417",
                        "\u82b1\u96e8\u9eef",
                        "\u70df\u82b1\u822c\u5bc2\u5bde",
                        "\u90fd\u53eb\u517d\u53d8\u51e1\u4eba",
                        "\u7af9\u9999\u96e8\u5f71",
                        "\u6df1\u60c5\u5fc5\u9152\u4f34",
                        "\u547d\u7531\u6211\u4e0d\u7531\u5929",
                        "\u521d\u590f\u7684\u9633\u5149",
                        "\u6b87\u7483\u6ce3",
                        "\u94ed\u8bb0\uff0c\u8fd9\u6bb5\u6b87",
                        "\u5b89\u5fc3\u7684\u5473\u9053\u3043",
                        "\u5c11\u4e86\u4e00\u4e2a\u4eba",
                        "\u590f\u96e8\u51c9",
                        "\u3123\u788e\u82b1\u77ed\u88d9",
                        "\u6d6a\u5ba2\u3079\u4e4b\u9053",
                        "\u8981\u72ec\u7acb\u4e36\u8981\u575a\u5f3a",
                        "\u5b81\u9759---\u201c\u4f60\u548c\u6211\u201d",
                        "\u620f\u8a00\u4e00\u53e5\u5929\u8352",
                        "\u968f\u6027\u53c8\u6d12\u8131",
                        "\u4eba\u95f4\u3006\u9b54\u738b",
                        "\u5bc2\u5bde\u5e74\u534e\u308e",
                        "\u4e3a\u5f80\u4e8b\u5e72\u676f",
                        "\u5b64\u7368\u5148\u751f\u3043",
                        "\u7661\u5922\u58f9\u2014\u5834",
                        "\u7ed9\u56de\u5fc6\u7acb\u4e00\u5ea7\u7891",
                        "\u6d45\u964c\u516e\u3050",
                        "\u840c\u8033\u5c10\u5973\uff09",
                        "\u5bc4\u5f80\u5149\u660e",
                        "\u67d3\u58a8\u7ed8\u541b\u8863",
                        "\u65e7\u6e2f\u542c\u98ce",
                        "\ufe4c\u7f8e\u5f97\u4e0d\u50cf\u8bdd",
                        "\u63cf\u82b1\u8bd5\u610f\u521d",
                        "\u8ff7\u4f60\u3043",
                        "\u5c9a\u98ce\u6b87",
                        "\u767d\u7eb8\u60c5\u4e66",
                        "\u6e05\u6670\u4f20\u611f",
                        "\u72c2\u7075\u3079\u5728\u4e16",
                        "\u628a\u661f\u661f\u5077\u7ed9\u4f60",
                        "\u5c0f\u4e0d\u6b63\u7ecf\u7537\u4eba",
                        "\u96e8\u821e\u9713\u88f3",
                        "\u671b\u65ad\u5357\u98de\u96c1",
                        "\u5f88\u9177\u4e0d\u64a9\u59b9",
                        "\u552f\u4e00\u7684\u4fe1\u4ef0",
                        "\u751f\u6d3b\u5c41\u98a0\u5c41\u98a0\u7684\u8fc7",
                        "\u8bb0\u5f97\u5584\u826f",
                        "\u56db\u65b9\u60c5\u6df1",
                        "\u590f\u672b\u70df\u96e8",
                        "\u65fa\u4ed4\u2606\u5c0f\u51e4",
                        "\u7b49\u4e0d\u5230\u6709\u4f60\u7684\u660e\u5929",
                        "\u68a6\u96ea\u6a31\u98de",
                        "\u73a9\u7684\u662f\u81ea\u6211",
                        "\u9752\u886b\u6545\u4eba",
                        "\u9ed1\u591c\u6700\u76f8\u4f3c",
                        "\u5782\u67f3\u542b\u70df",
                        "\u9738\u6c14\u5341\u8db3\u5c0f\u4f19",
                        "\u660e\u65e5\u8f89\u714c",
                        "\u3123\u773c\u6cea\u7684\u9519\u89c9",
                        "\u5bd2\u96e8\u591c\u9b45\u51b7",
                        "\u534a\u65e7\u60c5\u6000",
                        "\u2121\u9000\u65e0\u53ef\u9000",
                        "\u5357\u6000\u747e",
                        "\u5357\u98ce\u672a\u8d77",
                        "\u6d41\u5e74\u788e\u5f71",
                        "\u5634\u89d2\u4e0a\u7ff9",
                        "\u7d20\u5e74\u796d\u8bed",
                        "\u8bd7\u9152\u5e74\u534e",
                        "\u70c8\u706b\u5982\u6b4c",
                        "\u4e0d\u8be5\u820d\u4e0d\u5f97",
                        "\u51b7\u773c\u770b\u03a6\u4f60\u88c5",
                        "\u6298\u6708\u716e\u9152",
                        "\u4e0d\u8981\u81ea\u505a\u591a\u60c5",
                        "\u6210\u5168\u4f60\u7684\u81ea\u7531",
                        "\u53ef\u653b\u53ef\u53d7",
                        "\u6151\u4eba\u7684\u697c\u9053\u258dcorrid",
                        "\u9eef\u562b\u5422\u788e\u3043",
                        "\u6c5f\u5357\u6625\u5931\u5fc6\u68a6i",
                        "\u8299\u841d\u69ff\u6708\u7b19",
                        "\u9752\u886b\u6545\u4eba",
                        "\u4e28\u9650\u91cf\u7537\u5973\u706c\u60c5\u961f",
                        "\u9ed1\u591c\u6765\u5f97\u65e0\u58f0",
                        "\u98de\u96ea\u4f3c\u821e\u308e",
                        "\u4e0d\u5931\u672c\u5fc3",
                        "\u4ed9\u5973\u5976\u5976",
                        "\u7b11\u671b\u7ea2\u5c18",
                        "\ufe4f\u58f9\u8eab\u50b2\u9aa8",
                        "\u81ea\u53d6\u7684\u75db",
                        "\u5922\u5728\u522b\u79bb\u65f6",
                        "\u98ce\u971c\u51e0\u8f7d",
                        "\u226e\u7d2b\u8272\u7684\u96e8",
                        "\u5170\u8272\u7684\u6811",
                        "\u6267\u5ff5\u6210\u6b87",
                        "\u226e\u6c90\u5e74\u4e4b\u590f",
                        "\u660e\u5929\u5fc5\u987b\u4f1a\u66f4\u597d",
                        "\u4f55\u8655\u53ef\u53bb",
                        "\u226e\u65e7\u68a6\u5982\u98ce",
                        "\u6e05\u51c0\u2606\u83b2\u82b1\u9999",
                        "\u807d\u59b3\u807d\u8a90~",
                        "\u7d2f\u4e86\u5c31\u6563\u5427",
                        "\u9662\u957f\u653e\u6211\u51fa\u9662",
                        "\u65e7\u65f6\u5149\u5bb9\u989c",
                        "\u8d8a\u957f\u5927\u8d8a\u5b64\u5355",
                        "\u6708\u4f3c\u5f53\u65f6",
                        "\u76f8\u601d\u5982\u6545",
                        "\u6613\u8a00\u3079\u6960\u5c3d",
                        "\u5fd7\u5728\u98de\u7fd4",
                        "\u8494\u5149\u6dfa\u901d",
                        "\u597d\u55ce",
                        "\u6c5f\u5c71\u4e0e\u4f60",
                        "\u6e29\u8f6f\u7709\u773c",
                        "\u4e03\u8857\u602a\u4eba",
                        "\u9694*\u5c71\u9694\u6d77",
                        "\u90a3\u5e74\u521d\u590f",
                        "\u522b\u6253\u6270\u6211\u6ce1\u599e",
                        "\u6de1\u7136\u3005",
                        "\u6d41\u6c34\u5341\u5e74\u9592",
                        "\u6b22\u4e50\u03a6",
                        "\u4e13\u5c5e\u4f60\u7684\u5b88\u62a4",
                        "\u6d6e\u5c9a\u4f3c\u543e\u5fc3",
                        "\u5674\u79c2\u30ce",
                        "\u5b64\u5355\u203b\u89e3\u9152",
                        "\u5f53\u500b\u7956\u5b97",
                        "\u66f2\u672a\u7ec8\u4eba\u5df2\u6563",
                        "\u6bcf\u4e2a\u4eba\u90fd\u662f\u4f60",
                        "\u6298\u6708\u716e\u9152\u3043",
                        "\u68a6\u4e0e\u56de\u5fc6\u63d2\u80a9",
                        "\u9152\u5df7\u9189\u4eba",
                        "\u8bd7\u5e8a\u7af9\u96e8\u51c9",
                        "\u5b64\u6708\u4eca\u5fc3",
                        "\u5807\u5e74\u51ac\u5984",
                        "\ufe4f\u5357\u67ef\u65e0\u75d5",
                        "\u55df\u53f9\u964c\u4e0a",
                        "\u5047\u88c5\u2640\u65e0\u6240\u8c13",
                        "\u8bf4\u597d\u4e86\u4e0d\u89c1\u9762",
                        "\u4e00\u7897\u3079\u996e\u5c3d",
                        "\u6c34\u6f3e\u6708\u5fae\u91ba",
                        "\u4f59\u821f\u4e00\u82a5",
                        "\u4eca\u5915\u4f55\u5915",
                        "\u6cfd\u7554\u4e1c\u7bf1",
                        "\u6d6e*\u534e\u9eef\u6de1\u5931\u8272\u7684\u7f8e",
                        "\u043c\u012b\u98ce\u82e5\u5439",
                        "\u5fd7\u5728\u56db\u65b9",
                        "\u534a\u751f\u98ce\u96ea",
                        "\u4f18\u58f0\u827a\u4eba",
                        "\u590f\u81f3\u3079\u79bb\u522b",
                        "\u66a7\u6627\u522b\u592a\u7528\u5fc3",
                        "\u5922\u96a8\u5fc3\u52a8\u61c2",
                        "\u76f8\u7231\u611a\u7b28",
                        "\u65e0\u6cea\u4eba",
                        "\u611f*\u60c5\u6d01\u7656",
                        "\u5348\u5f8c\u306e\u590f\u5929",
                        "\u4e0d\u4e8c\u60c5",
                        "\u9ebc\u9ebc\u8001\u5a18",
                        "\u68a6\u65ad\u2198\u9621\u964c",
                        "\u732b\u4e5d\u308e",
                        "\u8001\u5df7\u67af\u03a6\u4e95",
                        "\u5047\u5982\u2606\u8fdc\u65b9",
                        "\u6cea\u989c\u846c\u56de\u5fc6",
                        "\u628a\u5fc3\u638f\u7d66\u73ce",
                        "\ufe4f\u5e74\u534e\u679c\u8179",
                        "\u5fcd\u53d7\u4f60\u7684\u574f\u813e\u6c14",
                        "\u8e0c\u8e87\u6ee1\u5fd7",
                        "\u5e7d\u5170\u66ae\u8272",
                        "\u7efb\u5f71\u6d6e\u6c89",
                        "\u5929\u771f\u4ea6\u6c89\u6ca6",
                        "\u3058\u2606ve\u840c\u7231\u706c",
                        "\u6cea\u989c\u846c\u76f8\u601d",
                        "\ufe3f\u6076\u5bcc\u8d35",
                        "\u4e03\u91cd\u4eba\u683c",
                        "\u7b11\u770b\u4eba\u751f",
                        "\u6d6e\u751f\u6c34\u6708\u77ed",
                        "\u65ad\u5ff5\u2606\u5df2\u6b8b",
                        "\u4e91\u6de1\u6708\u77e5",
                        "\u4fd7\u4e16\u51e0\u591a",
                        "\u987e\u6211\u5fc3\u5b89",
                        "\u226e\u6f47\u70df\u66ae\u96e8",
                        "\u226e\u79d2\u6740\u8282\u594f",
                        "\u80e1\u540c\u6696\u7537",
                        "\u826f\u65f6\u666f\u5f52\u6765",
                        "\u9752\u4e1d\u98d8\u9038",
                        "\u628a\u9152\u4f5c\u6e05\u6b22",
                        "\u542b\u6cea\u56de\u5fc6\u4e0d\u5982\u542b\u7b11\u594b\u529b",
                        "\u309d\u4f0a\u4eba\u7ea2\u5986",
                        "\u6311\u706f\u591c\u672a\u592e",
                        "\u5220\u9664\u56de\u5fc6\u5f55",
                        "\u4e00\u4e16\u6e05\u6b22",
                        "\u58a8\u67d3\u76db\u590f",
                        "\u602a\u6211\u203b\u592a\u50bb",
                        "\u4e0d\u4e0b\u3006\u96ea\u7684\u51ac\u5929",
                        "\u6211\u7684\u5fc3\u6ca1\u6709\u6816\u606f\u5730",
                        "\u4e0e\u5b64\u72ec\u4f5c\u4f34",
                        "\u4e0e\u4ed6\u6709\u5173\u308e",
                        "\u5411\u524d\u4e0d\u5f03",
                        "\u6ce1\u6cab\u968f\u98ce\u98d8",
                        "\u5b66\u4f1a\u629b\u5f00\u8fc7\u53bb",
                        "\u68a6\u6bc1\u5343\u767e\u6b21",
                        "\u68a6\u91cc\u60c5\u4f24\u8fc7",
                        "\u5fc3\u4e2d\u7684\u627f\u8bfa",
                        "\u7fbd\u4e4b\u8776\u5e7b",
                        "\u6e05\u58a8\u60b2\u79cb",
                        "\u5bc2\u5bde\u5b83\u966a\u6211\u8fc7\u591c",
                        "\u4f3c\u6c34\u6d41\u5e74\u7a7a\u57ce\u68a6",
                        "\u65e7\u68a6\u5982\u9152",
                        "\u6b8b\u51ac\u9189\u79bb\u6b87",
                        "\u4eba\u95f4\u68a6\u8bdd\u3002",
                        "\u5e74\u5c11\u604b\u6b4c",
                        "\u609f\u7ea2\u5c18\u67f3\u82e5\u70df",
                        "\u65ad\u7ae0\u53d6\u5fc6",
                        "\u6212\u4e0d\u6389\u7684\u601d\u5ff5",
                        "\u5531\u4e00\u534a\u7684\u60c5\u6b4c",
                        "\ufe4f\u9189\u4eba\u5fc3",
                        "\u4f60\u6709\u8ba9\u6211\u591a\u60f3\u5ff5",
                        "\u9621\u964c\u7ea2\u5c18",
                        "\u65e0\u6cd5\u9760\u8fd1\u7684\u4f60",
                        "\u79cb\u661f\u5e55\u98de",
                        "\u51c9\u57ce\u8584\u68a6",
                        "\u901d\u76e1\u65f3\u6d6e\u83ef",
                        "\u83b3\u7ef1\u8317\u4eba",
                        "\ufe4f\u96be\u80fd\u5fc3\u52a8",
                        "\u5e74\u534e\u4f3c\u6d41\u6c34",
                        "\u7edd\u5bf9\u5728\u4e4e\u4f60",
                        "\u534a\u751f\u98ce\u96ea",
                        "\u6c34\u58a8\u9752\u6749",
                        "\u996e\u9e29\u6b62\u6e34",
                        "\u9752\u4e1d\u7efe\u98ce",
                        "\u98ce\u96e8\u6865\u4e0a",
                        "\u8776\u5343\u8431",
                        "\u3086\u8ff7\u9014",
                        "\u6e3a\u82e5\u661f\u8fb0",
                        "\u4e66\u7709\u95f4\u6e05\u98ce",
                        "\u6211\u662f\u826f\u6c11\uff01",
                        "\u9ed1\u8272\u68a6\u9b47",
                        "\u9006\u5149\uff0c\u5954\u8dd1",
                        "\u4e0d\u62bd\u70df\u3044",
                        "\u51c9\u751f\u51c9\u5fc6",
                        "\u914c\u996e\u6f2b\u601d\u6545\u53cb",
                        "\u4e0e\u6211\u5e76\u80a9",
                        "\u5439\u7bab\u671b\u2014\u6c5f\u5357",
                        "\u7d2b\u98ce\u5b58\u68a6\u308e",
                        "\u9189\u8272\u67d3\u7ea2\u989c",
                        "\u5355\u8eab\u5973\u751f",
                        "\u5b89\u7136\u975e\u4ed6\u547d",
                        "\u6c34\u821e",
                        "\u6709\u5473\u662f\u6e05\u6b22",
                        "\u5173\u4e8e\u4f60\u7684\u56de\u5fc6",
                        "\u80cc\u540e\u7684\u4f24",
                        "\u8f6c\u8eab\u6b22\u4e50",
                        "\u5b8c\u7f8e\u6642\u5149\u7d42\u6709\u6642",
                        "\u53e3\u5b9e\u5fc3\u975e",
                        "\u5929\u8fb9\u4e91\u5f69",
                        "\u5012\u7acb\u3005\u6cea\u4e0d\u6d41",
                        "\u6cfc\u58a8\u753b\u9713\u88f3",
                        "\u51b0\u84dd\u6c34\u871c\u6843",
                        "\u4f59\u751f\u4e0d\u5b64\u72ec",
                        "\u5f53\u521d\u3005",
                        "\u590f\u98ce\u3079\u5982\u6b4c",
                        "\u7d2b\u6674\u4e1d\u96e8",
                        "\u79bb\u57ce\u68a6",
                        "\u9189\u4e86\u4eba\u5fc3\u9189\u4e86\u6d77",
                        "\u70c8\u9152\u6e05\u98ce",
                        "\u4e0b\u9aa8\u74f7",
                        "\u534e\u4e3d\u79d2\u53d8\u5973\u795e",
                        "\u7bc8\u60e2\u93bb\u6200",
                        "-\u7eb7\u7eb7\u6270\u6270",
                        "\u60b2\u98ce\u79cb\u753b\u6247",
                        "\u5f88\u53ef\u8010\u7684\u59b9\u5b50",
                        "\u5411\u65e5\u8475\u7684\u5fae\u7b11",
                        "\u666e\u901a\u4e00\u751f",
                        "\u51c9\u8584\u5c11\u5973\u68a6\u4ea1\u6d77",
                        "\u5bde\u7136\u5f3a\u70c8\u6211\u7684\u601d\u5ff5",
                        "\u6708\u591c\u821e\u5c3d\u79bb\u6b87",
                        "\u6e38\u620f\u4eba\u751f",
                        "\u542c\u95fb\u4f59\u751f",
                        "\u84e6\u7136\u56de\u9996",
                        "\u7ec8\u70b9\u4e5f\u662f\u8d77\u70b9",
                        "\u604b\u68a6\u7ea2\u5c18",
                        "\u5b64\u57ce\u51c9\u68a6",
                        "\u226e\u7f31\u7efb\u5149\u7eaa",
                        "\u5e55\u540e\u7eb5\u60c5",
                        "\u5c18\u5c7f\u8291\u8291\u610f",
                        "\u4e0d\u5bd0\u5026\u957f\u66f4",
                        "\u58f0\u8f6f",
                        "\u56de\u4e0d\u53bb\u7684\u5c31\u8fc7\u53bb",
                        "\u4f4e\u5934\u7684\u6e29\u67d4",
                        "\u82b1\u5f00\u65f6\u82b1\u843d",
                        "\u5982\u82b1\u7f8e\u7737",
                        "\u66fe\u5929\u771f\u73b0\u6210\u719f",
                        "\u6b64\u4f24\u4e0d\u5173\u98ce\u4e0e\u6708",
                        "\u2018\u90a3\u4e2a\u8eab\u5f71\u6e10\u6e10\u8fdc\u53bb\u2019",
                        "\u83ab\u540d\u7684\u5fc3\u75db",
                        "\u6e05\u68a6\u4f34\u4ed6",
                        "\u5f71\u5b50\u7684\u6cea",
                        "\u4e0d\u61c2\u70e6\u4eba",
                        "\u671f\u671b\u5e26\u6765\u5931\u671b",
                        "\u7761\u53fd\u53fd",
                        "\u6e05\u7fbd\u58a8\u5b89",
                        "\u5172\u55a8\u2606\u8aac\u8115\u54b9",
                        "\u8840\u67d3\u58a8\u51a2",
                        "\u5893\u60b2\u6b87",
                        "\u4e00\u4e16\u8ff7\u79bb",
                        "\u501a\u5251\u3006\u542c\u98ce",
                        "\u4e71\u4e16\u60c5\u7f18",
                        "\u4e0e\u6e29\u6696\u7ec8\u5e74\u4e0d\u9047",
                        "\u6dda\u843d\u309e\u30b8\u6a4b\u6728",
                        "\u6d45\u51dd\u534a\u590f",
                        "\u70ab\u821e\u59b9\u5b50",
                        "\u82b1\u5149\u4e86\u7684\u52c7\u6c14",
                        "\u5fc3\u4e0d\u9154\u4eba\u4ee5\u9154",
                        "\u7e41\u82b1\u5165\u68a6\u256e",
                        "\u91cd\u65b0\u6253\u91cf",
                        "\u8336\u4e0d\u996e\u76cf",
                        "\u8885\u8885\u6cb3\u8fb9\u67f3",
                        "\u5fc3\u4e0e\u53e3\u4e0d\u5408",
                        "\u58a8\u96e8\u4e91\u70df",
                        "\u6de1\u6de1\u3006\u7eff\u8336\u9999",
                        "\u62b9\u8336\u88d9\u8fb9",
                        "\u5404\u79cd\u575a\u5f3a",
                        "\u5f80\u4e8b\u65e9\u5df2\u770b\u7a7f*",
                        "\u8f6fQ\u7cd6",
                        "\u8981\u5f3a\u7684\u5973\u4eba",
                        "\u5357\u83b2\u695a\u7b80\u3050",
                        "\u6668\u98ce\u97f5\u96e8",
                        "\u987e\u5c7f\u5357\u6b4c",
                        "\u51e0\u5b64\u98ce\u6708",
                        "\u8f7b\u62c2\u4e24\u8896\u98ce\u5c18",
                        "\u98ce\u843d\u5c18\u5f52\u53bb",
                        "\u964c\u4e0a\u67f3\u7d6e\u98de",
                        "\u6c5f\u5357\u7684\u6545\u4e8b\u9152\u9986",
                        "\u534a\u751f\u6bc1\xb0-\u6c89\u6ca6",
                        "\u6307\u528d\u3006\u554f\u5929",
                        "\u6211\u7684\u75c5\u6001\u4f60\u522b\u7ba1",
                        "\u5fc3\u8f6f\u6210\u60a3",
                        "\u6c34\u604b\u3079\u6708",
                        "\u6614\u5e74\u4e0d\u673d",
                        "\u52c9\u4e3a\u5176\u96be",
                        "\u2640\u5f93\u672a\u64c1\u53c8\u4f55\u8ac7\u5928\u53be\u2642",
                        "\u591c\u51c9\u521d\u900f\u964c\u6c50",
                        "\u4ed6\u773c\u5e95\u6c47\u661f\u57ce",
                        "\u4f11\u5b64\u67d3\u6708",
                        "\u6e05\u98ce\u5f52\u5ba2",
                        "\u627f\u8bfa\u4f3c\u96fe\u5982\u98ce",
                        "\u25b3\u83f2\u50ad",
                        "\u6d6e\u751f\u8fdc\u79bb",
                        "\u9752\u4e1d\u7ee3",
                        "\u226e\u7f9e\u6da9\u7cd6\u679c",
                        "\u79cb\u5948\u6afb\u821e",
                        "\u5305\u5bb9\u6211",
                        "\u4e71\u4e16\u60ca\u68a6",
                        "\ufe36\ufe4b\u4e36\u795e\u7ecf\u8d28",
                        "\u6d6a\u6f2b\u4ec5\u5b58\u7684\u5fe7\u4f24",
                        "\u84ec\u52c3\u91ce\u5fc3",
                        "\u5e73\u6de1\uff44\u011b\u5feb\u4e50",
                        "\u6e14\u821f\u5531\u665a",
                        "\u5c0f\u5c0f\u7684\u68a6\u60f3",
                        "\u76db\u590f\u2606\u5982\u82b1",
                        "\u4f59\u751f\u72ec\u81ea\u6d41\u6d6a",
                        "\u9752\u4e1d\u6210\u96ea",
                        "\u9189\u591c\u6b87",
                        "\u743c\u82b1\u661f\u6d77",
                        "\u6d45\u631a\u7eca\u79bb\u516e",
                        "\u788e\u661f\u91c7\u6458\u9986",
                        "\u51b7\u591c\u6c50\u03a6",
                        "\u5200\u5251\u50b2\u5929",
                        "\u9a91\u7740\u5c0f\u732a\u901b\u901b",
                        "\u758f\u661f\u6de1\u6708",
                        "\u542c\u96e8\u8f69",
                        "\u56de\u5fc6\u90fd\u5e26\u7740\u4f24",
                        "\u62fe\u4e0d\u8d77\u7684\u8bb0\u5fc6",
                        "\u62b9\u8336\u9999\u5473\u62b9\u5e03",
                        "\u5e05\u903c\u8005~",
                        "\u4ea1\u533f\u4e00\u7eb8\u9526\u4e66",
                        "\u4ef0\u671b\u8f89\u714c",
                        "\u5bb9\u4e0d\u4e0b\u4efb\u4f55\u4eba",
                        "\u6b7b\u4e8e\u5fc3\u6d77\u846c\u4e8e\u8166\u6d77",
                        "\u7231\u4f3c\u70df\u82b1\u6613\u7834\u788e",
                        "\u6211\u7684\u7231\u5df2\u8fc7\u671f",
                        "\u8001\u65e7\u6a21\u6837",
                        "\u51c9\u98ce\u6155\u69ff\u7bf1",
                        "\u5b64\u6d77\u672a\u84dd",
                        "\u7efe\u5343\u5ff5",
                        "\u4eba\u751f\u767e\u5473",
                        "\u665a\u5531\u661f\u8bed\u58a8",
                        "\u62ff\u5f97\u8d77\uff0c\u653e\u5f97\u4e0b",
                        "\u5de6\u8bed",
                        "\u624b\u63e1\u98ce\u4e91",
                        "\u6e05\u9152\u6696\u98ce",
                        "\u6577\u884d\u5c31\u4e0d\u8981\u8bf4",
                        "\u8d1d\u591a\u82ac\u7684\u60b2\u4f24",
                        "\u82e5\u6c34\u3006\u5fae\u9999",
                        "\u25b3\u53cd\u5dee\u840c\u521d\u604b",
                        "\u6e05\u6668\u7684\u96e8",
                        "\u79bb\u4eba\u4e0d\u633d",
                        "\u5496\u5561$\u7684\u5473\u9053",
                        "\u6b22\u559c\u5c31\u597d",
                        "\u65e5\u5149\u6790\u84dd\u308e",
                        "\u65f6\u5149\u834f\u82d2",
                        "\ufe4f\u6e05\u9038\u4e4b\u98ce",
                        "\u5fc3\u764c\u665a\u671f",
                        "\u2460\u77ac\u9593\u5feb\u4e50",
                        "\u4fdd\u5b58\u5f00\u5fc3",
                        "\u521d\u672b\u6155\u6d41\u5e74",
                        "\u5fe7\u90c1\u7684\u7d2b\u7af9",
                        "\u5ff5\u65e7\u662f\u79cd\u75c5",
                        "\u6267\u624b\u542c\u98ce\u541f",
                        "\u5bc2\u83ab\u6210\u96ea\u3050",
                        "\u4e00\u68a6\u7e41\u534e",
                        "\u9ed1\u7684\u5f7b\u5e95",
                        "\u82b1\u5f00\u4e00\u534a",
                        "\u534a\u751f\u5e74\u534e",
                        "\u3044\u661f\u3065\u9205\u3044",
                        "\u4e0d\u8d25\u7684\u610f\u5fd7",
                        "\u4fe1\u4ef0\u4e4b\u540d",
                        "\u226e\u534a\u4ea9\u65b9\u5858",
                        "\u65f6\u5149\u5439\u8001\u4e86\u5c11\u5e74",
                        "\u4e3a\u4f60\u5931\u53bb\u4e00\u5207*",
                        "\u67e0\u6aac\u521d\u590f",
                        "\u9010\u6d6a\u8ffd\u6708",
                        "\u4f55\u4eba\u4e00\u7b11",
                        "\u542c\u98ce\u5fc6\u96ea",
                        "\u534a\u751f\u8f15\u72c2\u5ba2",
                        "\u65e0\u529b\u633d\u56de",
                        "\u72ec\ufe35\u5f52",
                        "\u5f26\u4e0a\u6625\u96ea",
                        "\u4ea1\u57ce\u5b64\u5f71",
                        "\u6539\u5199\u4e0b\u534a\u751f",
                        "\u542c\u96ea",
                        "\u7ea2\u989c\u9189\u60dc\u541b\u3063",
                        "\u82e6\u7b11\u2606\u846c\u56de\u5fc6",
                        "\u5e7b\u60f3\u4e0e\u671f\u671b",
                        "\u65e0\u77e5",
                        "\u6577\u884d\u5df2\u6210\u50b7",
                        "\u6c34\u6e05\u68a6\u84dd",
                        "\u5c81\u6708\u6b87",
                        "\u72ec\ufe35\u89d2\u620f\u8c01\u80fd\u61c2\u5176\u4e2d\u7684\u7e41\u534e",
                        "\u65e0\u6094\u6211\u5fc3",
                        "\u9752\u6885\u4f50\u9152",
                        "\u95ee\u5019\u5c71\u5ddd",
                        "\u6d45\u590f\u82b1\u5f00\u308e",
                        "\u5ff5\xb7\u897f\u98ce",
                        "\u4f55\u60a3\u306e\u65e0\u8f9e",
                        "\u6854\u6897\u3006\u82b1\u6d77\u6d0b",
                        "\u76db\u590fde\u5bc2\u5bde",
                        "\u5b64\u8005\u4f55\u60e7",
                        "\u5e79*\u5e79\u51c8\u51c8\u65f3\u5fc3",
                        "\u663c\u6b4c\u6b22\u6614\u5e74",
                        "\u5e7d\u7075\u256d\u6218\u58eb",
                        "\u8896\u67d3\u5c18\u9999",
                        "\u600e\u7518\u6c89\u6ca6",
                        "\u5982\u679c\u6ca1\u6709\u5982\u679c",
                        "\u72af\u4e8c\u7684\u5c0f\u75de\u5b50\xb0",
                        "\u91ce\u6027\u4e0d\u53ef\u9a6f\u670d",
                        "\u5357\u6709\u5b64\u5c9b",
                        "\u6e29\u9152\u9189\u4eba",
                        "\u559c\u4f60\u7b11\u989c",
                        "\u5343\u676f\u4e0d\u9189",
                        "\u7d20\u96ea\u7e41\u82b1",
                        "\u5b64\u5176\u4e00\u8eab\u3050",
                        "\u5c11\u5973\u75c5",
                        "\u6765\u8def\u751f\u03a6\u4e91\u70df",
                        "\u6e05\u98ce\u51ac\u534e",
                        "\u7231\u53ea\u662f\u76f8\u4f34",
                        "\u5df4\u9ece\u591c\u96e8",
                        "\u6728\u5076\u3079\u5a03\u5a03",
                        "\u534a\u5b57\u6d45\u7709-",
                        "\u9057\u5fd8\u4e86\u81ea\u6211\u2642",
                        "\u65e7\u65b0\u6b22",
                        "\u8584\u66ae\u6dbc\u5e74",
                        "\u4e0d\u5b89\u5206\u7684\u7537\u4eba",
                        "\u9752\u6625\u7e41\u534e\u4f3c\u9526",
                        "\u5c71\u5ddd\u8d4b",
                        "\u773c\u6dda\u6709\u9ede\u2570\u54b8",
                        "\u5c06\u5993\u5c31\u8ba1",
                        "\u5c81\u6708\u6210\u6ca7\u6d77\u3043",
                        "\u653e\u68c4\u3059\u308b\u306b\u306f",
                        "\u4f4e\ufe35\u8abf\u3005\u7684\u8f49\u8eab",
                        "\u4e3e\u6848\u95e8\u6963",
                        "\u9752\u886b\u8d1f\u96ea",
                        "\u4ece\u6b64\u4e0d\u60b2\u4f24",
                        "\u5317\u964c\u6df1\u5df7",
                        "\u9999\u997d\u997d",
                        "\u4f55\u5fc5\u59d4\u5c48\u6c42\u5168",
                        "\u5fc3\u810f\u5904\u7684\u540d\u79f0$",
                        "\u5176\u5be6\u611b\u8457\u5f7c\u6b64",
                        "\u5c81\u6708\u7684\u543b\u75d5",
                        "\u66fe\u4f55\u65f6",
                        "\u4ebd\u82fc\u52de\u8cc7\u8aaa\u310b\u5334",
                        "\u5fc3\u65e0\u57ce\u5e9c",
                        "\u653e\u7231\u4e00\u6761\u751f\u8def",
                        "\u8003\u8bd5\u662f\u4f1a\u547c\u5438\u7684\u75db",
                        "\u3123\u68a6\u5fc6\u6668\u671b",
                        "\u4e34\u6ce2\u3079\u671b\u6708",
                        "\u4e66\u8fd8\u751f",
                        "\u6f6e\u97f3\u521d\u51c9",
                        "\u8d74\u68a6\u65c5\u4eba",
                        "\u5730\u5e73\u7ebf\u7684\u5fe7\u4f24",
                        "\u7b11\u996e\u5b64\u9e3f",
                        "\u6101\u8776\u672a\u2014\u77e5",
                        "\u9738\u9053\uff0c\u5374\u4e0d\u81ea\u77e5",
                        "\u9152\u5f53\u6b4c",
                        "\u594b\u6597\u8d4e\u9752\u6625",
                        "\u591c\u96e8\u5fae\u6f9c\u308e",
                        "\u597d\u7537\u4eba\u9732\u8138",
                        "\u7231\u4f60\u7684\u732b",
                        "\u51c9\u7b19\u58a8\u67d3\u3045",
                        "\ufe4f\u590f\u672b\u521d\u51c9",
                        "DayDayUp",
                        "\u6c89\u9ed8\u5f0f\u7b49\u8fe9",
                        "\u6d45\u6708\u6d41\u6b4c\u3043",
                        "\u5e7b\u57ce\u4f9d\u604b",
                        "\u50f5\u5c38\u52ff\u8fd1",
                        "\u6267\u7740\u594b\u6597",
                        "\u6c89\u4e16",
                        "\u6267\u5ff5\u4e00\u4e16",
                        "\u6000\u63e3\u68a6\u60f3",
                        "\u96f2\u5377\u96f2\u8212",
                        "\u753b\u60c5\u5165\u989c\u5bb9",
                        "\u4eba\u751f\u82e5\u5982\u521d\u898b",
                        "\u671b\u65ad\u6c5f\u5357\u5cb8",
                        "\u51b7\u5fc3\u5c0f\u59d0\u3050",
                        "\u51b0\u96ea\u82b1\u854a\u3050",
                        "\u5047\u88c5\u6c89\u9ed8",
                        "k\u5973\u795e\u7ecf\u75c5",
                        "\u6696\u5fc3\u5411\u9633",
                        "\u9065\u4e0d\u53ef\u53ca",
                        "\u82cd\u832b\u4e16\u754c\u5404\u81ea\u5b89\u597d",
                        "\u72ec\u7279\u3079\u4e56\u4e56",
                        "\u6b8b\u58a8\u3079\u65ad\u8bd7",
                        "\u8a8d\u771f\u904e\u7684\u90fd\u8f38\u4e86",
                        "\u4f34\u541b\u8df3\u51fa\u7ea2\u5c18\u5916",
                        "\u5fe7\u6db5\u7eeb",
                        "\u82b1\u6298\u4ea6\u65e0\u60c5",
                        "\u6f14\u7ece\u964c\u8def\u79bb\u4f24",
                        "\u7ec6\u8bed\u51dd\u9999",
                        "\u964c\u5e74\u53e4\u57ce",
                        "\u9752\u6625\u597d\u5e74\u534e",
                        "\u7f4c\u7c9f\u5e7b\u6ec5",
                        "\u767d\u52a0\u9ed1",
                        "\u5c18\u4e16\u3079\u65e0\u60c5",
                        "\u507d\u88dd\u4e0b\u771f\u5be6\u7684\u6211",
                        "\u6545\u4e8b\u203b\u6709\u4e86\u5f00\u59cb\u7ec8\u5c31\u8981\u6709\u7ed3\u5c40",
                        "\u8f6c\u8eab\u540e\u7684\u56de\u7738",
                        "\u51e0\u5ea6\u6789\u751f",
                        "\u4e00\u6b21\u5c31\u597d",
                        "\u900d\u9065\u4eba\u4e16\u6b22",
                        "\u82b1\u4e00\u6837\u8273\u7f8e\u7684\u311d\u03bb",
                        "\u6162\u52a8\u4f5c\u7684\u827a\u672f\u5bb6",
                        "\u4e00\u7b11\u5948\u4f55\u3050",
                        "\u6f2b\u6b65\u3006\u7684\u7f8e\u4eba\u9c7c",
                        "\u653e\u58f0\u54ed\u6ce3\u7684\u65f6\u95f4",
                        "\ufe4f\u96e8\u5b63\u60a0\u79bb",
                        "\u5b64\u821f\u6b8b\u6708",
                        "\u6b4c\u7f62\u6e05\u821e\u8bb8",
                        "\u6df1\u5df7\u5c11\u5973",
                        "\u4f55\u5fc5\u8fdc\u65b9",
                        "\u9650\u91cf\u7248_\u4e56\u4e56\u5973",
                        "\u5ba5\u6c90",
                        "\u8f9e\u72c2\u6b4c\u60b2",
                        "\u226e\u67d3\u58a8\u7ed8\u541b\u8863",
                        "\u75db\u662f\u75db\u5feb\u7684\u75db",
                        "\u5a6a\u5ff5\u5ff5",
                    ]),
                    cc._RF.pop();
            },
            {},
        ],
        GameWindow: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "38952m15UZD8pCoSIWQaYD7", "GameWindow");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                });
                var a = t("../../GD/manage/GDAudioMgr"),
                    c = t("../../GD/manage/GDWindowMgr"),
                    s = cc._decorator,
                    l = s.ccclass,
                    u =
                        (s.property,
                        (function (t) {
                            function e() {
                                return (null !== t && t.apply(this, arguments)) || this;
                            }
                            return (
                                r(e, t),
                                (e.prototype.playBGM = function (t) {
                                    var e = a.GDAudioMgr.instance.playBGM(t);
                                    return a.GDAudioMgr.instance.setGroup(e, "game_playBgm"), e;
                                }),
                                (e.prototype.playOneShot = function (t) {
                                    var e = a.GDAudioMgr.instance.playOneShot(t);
                                    return (
                                        a.GDAudioMgr.instance.setGroup(e, "game_playOneShot"),
                                        a.GDAudioMgr.instance.getClipDuration(t.clipOrRes)
                                    );
                                }),
                                (e.prototype.stopBGM = function () {
                                    a.GDAudioMgr.instance.stopGroup("game_playBgm");
                                }),
                                (e.prototype.stopOneShot = function () {
                                    a.GDAudioMgr.instance.stopGroup("game_playOneShot");
                                }),
                                (e.prototype.stopAudioAll = function () {
                                    a.GDAudioMgr.instance.stopGroup("game_playOneShot"),
                                        a.GDAudioMgr.instance.stopGroup("game_playBgm");
                                }),
                                i([l], e)
                            );
                        })(c.GDWindow));
                (n.default = u), cc._RF.pop();
            },
            {
                "../../GD/manage/GDAudioMgr": "GDAudioMgr",
                "../../GD/manage/GDWindowMgr": "GDWindowMgr",
            },
        ],
        GatherItem: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "add15P3rxZBMqxU+Rx4d0LR", "GatherItem");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                });
                var a = t("../../GD/manage/GDResMgr"),
                    c = t("../../GD/ui/GDButton"),
                    s = t("../domain/UserData"),
                    l = cc._decorator,
                    u = l.ccclass,
                    p = l.property,
                    f = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (
                                (e.countLbl = null),
                                (e.skinSprite = null),
                                (e.propSprite = null),
                                (e.getBtn = null),
                                (e.getOk = null),
                                e
                            );
                        }
                        return (
                            r(e, t),
                            (e.prototype.onLoad = function () {
                                this.getBtn.addClickListener(this.onGetProp, this);
                            }),
                            (e.prototype.onGetProp = function () {
                                var t = this.item;
                                s.UserData.instance.updateGather(t.id, t.propId, t.count, t.skinId);
                            }),
                            (e.prototype.showGatherItem = function (t) {
                                var e;
                                if (t) {
                                    this.item = t;
                                    var n = s.UserData.instance.gather,
                                        o = n.ids.find(function (e) {
                                            return e == t.id;
                                        }),
                                        r =
                                            null === (e = n.unlockIds) || void 0 === e
                                                ? void 0
                                                : e.find(function (e) {
                                                      return e == t.id;
                                                  });
                                    this.updateSpState(!!r);
                                    var i = !!o;
                                    (this.countLbl.string = "x" + t.count),
                                        this.loadSpriteFrame("image", "icon/item_icon" + t.propId, this.propSprite),
                                        this.loadSpriteFrame("image", "skin/" + t.skinId, this.skinSprite),
                                        (this.getBtn.node.active = !i),
                                        this.getBtn.setIntractable(!!r),
                                        (this.getOk.active = i);
                                }
                            }),
                            (e.prototype.loadSpriteFrame = function (t, e, n) {
                                var o = a.GDResMgr.get({
                                    bundlePath: t,
                                    resPath: e,
                                });
                                o && (n.spriteFrame = new cc.SpriteFrame(o));
                            }),
                            (e.prototype.updateSpState = function (t) {
                                var e;
                                (e = t
                                    ? cc.Material.getBuiltinMaterial("2d-sprite")
                                    : cc.Material.getBuiltinMaterial("2d-gray-sprite")),
                                    this.node.getComponentsInChildren(cc.Sprite).forEach(function (t) {
                                        t.setMaterial(0, e);
                                    }),
                                    this.node.getComponentsInChildren(cc.Label).forEach(function (t) {
                                        t.setMaterial(0, e);
                                    });
                            }),
                            i(
                                [
                                    p({
                                        type: cc.Label,
                                        tooltip: "\u6570\u91cf",
                                    }),
                                ],
                                e.prototype,
                                "countLbl",
                                void 0
                            ),
                            i(
                                [
                                    p({
                                        type: cc.Sprite,
                                        tooltip: "skin\u56fe",
                                    }),
                                ],
                                e.prototype,
                                "skinSprite",
                                void 0
                            ),
                            i(
                                [
                                    p({
                                        type: cc.Sprite,
                                        tooltip: "\u9053\u5177\u56fe\u7247",
                                    }),
                                ],
                                e.prototype,
                                "propSprite",
                                void 0
                            ),
                            i(
                                [
                                    p({
                                        type: c.GDButton,
                                        tooltip: "\u83b7\u53d6\u6309\u94ae",
                                    }),
                                ],
                                e.prototype,
                                "getBtn",
                                void 0
                            ),
                            i(
                                [
                                    p({
                                        type: cc.Node,
                                        tooltip: "\u5df2\u83b7\u5f97",
                                    }),
                                ],
                                e.prototype,
                                "getOk",
                                void 0
                            ),
                            i([u], e)
                        );
                    })(cc.Component);
                (n.default = f), cc._RF.pop();
            },
            {
                "../../GD/manage/GDResMgr": "GDResMgr",
                "../../GD/ui/GDButton": "GDButton",
                "../domain/UserData": "UserData",
            },
        ],
        GatherTableItem: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "510c60Yt0hBtLXDPkRxgO/Q", "GatherTableItem"),
                    Object.defineProperty(n, "__esModule", {
                        value: !0,
                    }),
                    (n.GatherTableItem = void 0);
                var o = (function () {
                    function t() {}
                    return (
                        (t.prototype.key = function () {
                            return this.id;
                        }),
                        t
                    );
                })();
                (n.GatherTableItem = o), cc._RF.pop();
            },
            {},
        ],
        Gather: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "52589UbyKtB+rR+F9JhR9rS", "Gather");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                });
                var a = t("../GD/table/GDTableMgr"),
                    c = t("../GD/ui/GDUIScrollView/RecycleScroll"),
                    s = t("./define/GameEventDefine"),
                    l = t("./define/TableInfoDefine"),
                    u = t("./items/GatherItem"),
                    p = t("./table/GatherTableItem"),
                    f = cc._decorator,
                    h = f.ccclass,
                    d = f.property,
                    y = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (e.LevelScroll = null), e;
                        }
                        return (
                            r(e, t),
                            (e.prototype.start = function () {
                                (this.LevelScroll.numItems = this.getItems().length),
                                    (this.LevelScroll.onItemRender = this.onItemRender.bind(this)),
                                    (this.LevelScroll.onItemClicked = this.onItemClicked.bind(this)),
                                    s.gameEvent.on(s.GameEventDefine.exitGameEvent, this.exitGameEvent, this);
                            }),
                            (e.prototype.onItemRender = function (t, e) {
                                var n = e.getComponent(u.default),
                                    o = this.getItems();
                                n.showGatherItem(o[t]);
                            }),
                            (e.prototype.onItemClicked = function (t) {
                                cc.log("clicked", t);
                            }),
                            (e.prototype.exitGameEvent = function () {
                                this.LevelScroll.updateAllItems();
                            }),
                            (e.prototype.getItems = function () {
                                return a.GDTableMgr.getTable(l.GatherDefine.key, p.GatherTableItem).getItems();
                            }),
                            i([d(c.default)], e.prototype, "LevelScroll", void 0),
                            i([h], e)
                        );
                    })(cc.Component);
                (n.default = y), cc._RF.pop();
            },
            {
                "../GD/table/GDTableMgr": "GDTableMgr",
                "../GD/ui/GDUIScrollView/RecycleScroll": "RecycleScroll",
                "./define/GameEventDefine": "GameEventDefine",
                "./define/TableInfoDefine": "TableInfoDefine",
                "./items/GatherItem": "GatherItem",
                "./table/GatherTableItem": "GatherTableItem",
            },
        ],
        HallRankItem: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "d8404n6Mg5I3pTB0A87bH9C", "HallRankItem");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                });
                var a = t("../../GD/manage/GDObjectPool"),
                    c = t("../../GD/manage/GDResMgr"),
                    s = t("../GameType"),
                    l = t("./UserRankItem"),
                    u = cc._decorator,
                    p = u.ccclass,
                    f = u.property,
                    h = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (
                                (e.rankBg = null),
                                (e.userItems = null),
                                (e.rankLbl = null),
                                (e.countLbl = null),
                                (e.cityNameLbl = null),
                                e
                            );
                        }
                        return (
                            r(e, t),
                            (e.prototype.onDestroy = function () {
                                a.GDObjectPoolMgr.recycleAll({
                                    bundlePath: "prefab",
                                    resPath: "item/userRankItem",
                                });
                            }),
                            (e.prototype.showItems = function (t, e, n, o, r) {
                                var i = t + 1,
                                    u = i;
                                u > 3 && (u = 4);
                                var p = c.GDResMgr.get({
                                    bundlePath: "image",
                                    resPath: "rank/main_pm_bg" + u,
                                });
                                (this.rankBg.spriteFrame = new cc.SpriteFrame(p)),
                                    (this.rankLbl.string = "\u7b2c" + i + "\u540d"),
                                    (this.countLbl.string = "" + o),
                                    (this.cityNameLbl.string = s.LocationList[e] + "\u961f");
                                var f = ["#c16128", "#4c5dcd", "#9a4e1f", "#007363"];
                                (this.rankLbl.node.getComponent(cc.LabelOutline).color = new cc.Color().fromHEX(f[u - 1])),
                                    (this.countLbl.node.getComponent(cc.LabelOutline).color = new cc.Color().fromHEX(f[u - 1])),
                                    (this.cityNameLbl.node.color = new cc.Color().fromHEX(f[u - 1]));
                                for (var h = this.userItems.children, d = this.calcCircularLayout(), y = 0; y < d.length; y++) {
                                    var v = n && y == d.length - 1,
                                        _ = h[y],
                                        g = d[y];
                                    _ ||
                                        ((_ = a.GDObjectPoolMgr.get({
                                            bundlePath: "prefab",
                                            resPath: "item/userRankItem",
                                        })),
                                        this.userItems.addChild(_)),
                                        (_.active = !0),
                                        _.setPosition(cc.v3(g));
                                    var m = _.getComponent(l.default);
                                    m.showInfo(v, r), m.isMe(v);
                                }
                                for (var b = d.length; b < h.length; b++) (_ = h[b]).active = !1;
                            }),
                            (e.prototype.showUserItem = function () {
                                this.userItems.children.forEach(function (t) {
                                    t.active = !0;
                                });
                            }),
                            (e.prototype.hideUserItem = function () {
                                this.userItems.children.forEach(function (t) {
                                    t.active = !1;
                                });
                            }),
                            (e.prototype.tranRankIndex = function (t) {
                                return t < 4
                                    ? 0
                                    : t > 3 && t < 10
                                    ? 1
                                    : t > 9 && t < 16
                                    ? 2
                                    : t > 15 && t < 21
                                    ? 3
                                    : t > 20 && t < 26
                                    ? 4
                                    : t > 25 && t < 31
                                    ? 5
                                    : t > 30
                                    ? 6
                                    : 0;
                            }),
                            (e.prototype.calcCircularLayout = function () {
                                for (var t = [], e = [6, 12, 18], n = [90, 160, 250], o = 0; o < e.length; o++) {
                                    var r,
                                        i = e[o],
                                        a = n[o],
                                        c = 0;
                                    for (r = c = 0; c < i; r = ++c) {
                                        var s = a * Math.sin((2 * Math.PI * r) / i),
                                            l = a * Math.cos((2 * Math.PI * r) / i);
                                        t.push({
                                            x: s,
                                            y: l,
                                        });
                                    }
                                }
                                return t;
                            }),
                            i(
                                [
                                    f({
                                        type: cc.Sprite,
                                        tooltip: "\u80cc\u666f",
                                    }),
                                ],
                                e.prototype,
                                "rankBg",
                                void 0
                            ),
                            i(
                                [
                                    f({
                                        type: cc.Node,
                                        tooltip: "\u73a9\u5bb6items",
                                    }),
                                ],
                                e.prototype,
                                "userItems",
                                void 0
                            ),
                            i(
                                [
                                    f({
                                        type: cc.Label,
                                        tooltip: "\u6392\u540d",
                                    }),
                                ],
                                e.prototype,
                                "rankLbl",
                                void 0
                            ),
                            i(
                                [
                                    f({
                                        type: cc.Label,
                                        tooltip: "\u6570\u91cf",
                                    }),
                                ],
                                e.prototype,
                                "countLbl",
                                void 0
                            ),
                            i(
                                [
                                    f({
                                        type: cc.Label,
                                        tooltip: "\u57ce\u5e02\u540d\u79f0",
                                    }),
                                ],
                                e.prototype,
                                "cityNameLbl",
                                void 0
                            ),
                            i([p], e)
                        );
                    })(cc.Component);
                (n.default = h), cc._RF.pop();
            },
            {
                "../../GD/manage/GDObjectPool": "GDObjectPool",
                "../../GD/manage/GDResMgr": "GDResMgr",
                "../GameType": "GameType",
                "./UserRankItem": "UserRankItem",
            },
        ],
        Hall: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "551f7Z+zftNCotvG9eT8QNI", "Hall");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        },
                    a =
                        (this && this.__awaiter) ||
                        function (t, e, n, o) {
                            return new (n || (n = Promise))(function (r, i) {
                                function a(t) {
                                    try {
                                        s(o.next(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function c(t) {
                                    try {
                                        s(o.throw(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function s(t) {
                                    var e;
                                    t.done
                                        ? r(t.value)
                                        : ((e = t.value),
                                          e instanceof n
                                              ? e
                                              : new n(function (t) {
                                                    t(e);
                                                })).then(a, c);
                                }
                                s((o = o.apply(t, e || [])).next());
                            });
                        },
                    c =
                        (this && this.__generator) ||
                        function (t, e) {
                            var n,
                                o,
                                r,
                                i,
                                a = {
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
                                    return s([t, e]);
                                };
                            }
                            function s(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a; )
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
                                                    a.label++,
                                                    {
                                                        value: i[1],
                                                        done: !1,
                                                    }
                                                );
                                            case 5:
                                                a.label++, (o = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = a.ops.pop()), a.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(r = (r = a.trys).length > 0 && r[r.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                    a.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && a.label < r[1]) {
                                                    (a.label = r[1]), (r = i);
                                                    break;
                                                }
                                                if (r && a.label < r[2]) {
                                                    (a.label = r[2]), a.ops.push(i);
                                                    break;
                                                }
                                                r[2] && a.ops.pop(), a.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, a);
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
                });
                var s = t("../GD/manage/GDAudioMgr"),
                    l = t("../GD/manage/GDObjectPool"),
                    u = t("../GD/manage/GDResMgr"),
                    p = t("../GD/manage/GDWindowMgr"),
                    f = t("../GD/tools/GDUtils"),
                    h = t("../GD/ui/GDButton"),
                    d = t("../GD/ui/GDUIScrollView/CCCExtend"),
                    y = t("../platform/Analytics"),
                    v = t("../platform/Platform"),
                    _ = t("./App"),
                    g = t("./GameHelper"),
                    m = t("./GameType"),
                    b = t("./PlayerHp"),
                    D = t("./define/AddressDefine"),
                    G = t("./define/AudioInfoDefine"),
                    w = t("./define/GameEventDefine"),
                    P = t("./define/GameTypeDefine"),
                    k = t("./domain/UserData"),
                    R = t("./items/HallRankItem"),
                    O = t("./items/Marquee"),
                    T = t("./items/MeRank"),
                    C = cc._decorator,
                    M = C.ccclass,
                    A = C.property,
                    S = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (
                                (e.settingBtn = null),
                                (e.game2048Btn = null),
                                (e.businessCardBtn = null),
                                (e.addDesktopBtn = null),
                                (e.signinBtn = null),
                                (e.scrollView = null),
                                (e.content = null),
                                (e.meBtn = null),
                                (e.topBtn = null),
                                (e.marqueeMgr = null),
                                (e.meRankMgr = null),
                                (e.setLevelBtn = null),
                                (e.enterAwardBtn = null),
                                (e.palBtn = null),
                                (e.shareBtn = null),
                                (e.pageView = null),
                                (e.toggle1 = null),
                                (e.toggle2 = null),
                                (e.toggle3 = null),
                                (e.isMePos = 0),
                                (e._lastMoveY = 0),
                                e
                            );
                        }
                        return (
                            r(e, t),
                            (e.prototype.onLoad = function () {
                                d.default.init(),
                                    b.playerHp.init(),
                                    w.gameEvent.on(w.GameEventDefine.enterGameEvent, this.enterGameEvent, this),
                                    w.gameEvent.on(w.GameEventDefine.exitGameEvent, this.exitGameEvent, this),
                                    w.gameEvent.on(w.GameEventDefine.refreshHallRankEvent, this.refreshHallRankEvent, this),
                                    this.addLeaveListener(),
                                    this.enterAward(),
                                    this.toggle1.node.on("toggle", this.onAdventureEvent, this),
                                    this.toggle2.node.on("toggle", this.onHallEvent, this),
                                    this.toggle3.node.on("toggle", this.onGaterEvent, this);
                            }),
                            (e.prototype.start = function () {
                                var t = this;
                                this.updatePageIndex(1),
                                    this.playBgm(),
                                    y.Analytics.uploadEnterHome(),
                                    this.register(),
                                    k.UserData.instance.savefirstTime(),
                                    this.showRank(),
                                    this.meBtn.addClickListener(function () {
                                        t.scrollView.scrollToPercentVertical(t.isMePos, 3);
                                    }),
                                    this.topBtn.addClickListener(function () {
                                        t.scrollView.scrollToPercentVertical(1, 0.5);
                                    });
                            }),
                            (e.prototype.onDisable = function () {
                                s.GDAudioMgr.instance.stopAll();
                            }),
                            (e.prototype.onDestroy = function () {
                                b.playerHp.clearHPTimedTask(),
                                    b.playerHp.setLastTime(),
                                    w.gameEvent.off(w.GameEventDefine.enterGameEvent, this.enterGameEvent),
                                    w.gameEvent.off(w.GameEventDefine.exitGameEvent, this.exitGameEvent),
                                    w.gameEvent.off(w.GameEventDefine.refreshHallRankEvent, this.refreshHallRankEvent);
                            }),
                            (e.prototype.onAdventureEvent = function () {
                                this.updatePageIndex(0);
                            }),
                            (e.prototype.onHallEvent = function () {
                                this.updatePageIndex(1);
                            }),
                            (e.prototype.onGaterEvent = function () {
                                this.updatePageIndex(2);
                            }),
                            (e.prototype.onPageEvent = function (t) {
                                var e = t.getCurrentPageIndex();
                                (this.toggle1.isChecked = 0 == e),
                                    (this.toggle2.isChecked = 1 == e),
                                    (this.toggle3.isChecked = 2 == e);
                            }),
                            (e.prototype.enterAward = function () {
                                return a(this, void 0, void 0, function () {
                                    return c(this, function (t) {
                                        switch (t.label) {
                                            case 0:
                                                return (
                                                    (this.enterAwardBtn.node.active = !1),
                                                    cc.sys.platform != cc.sys.BYTEDANCE_GAME
                                                        ? [3, 2]
                                                        : [4, v.Platform.current.checkScene()]
                                                );
                                            case 1:
                                                t.sent() &&
                                                    ((this.enterAwardBtn.node.active = !0),
                                                    this.enterAwardBtn.addClickListener(function () {
                                                        s.GDAudioMgr.instance.playOneShot(G.AudioInfoDefine.click),
                                                            p.GDWindowMgr.instance.openWindow(
                                                                D.PrefabAddressDefine.enterAwardWindow
                                                            );
                                                    })),
                                                    (t.label = 2);
                                            case 2:
                                                return [2];
                                        }
                                    });
                                });
                            }),
                            (e.prototype.enterGameEvent = function () {
                                this.scrollView.node.active = !1;
                            }),
                            (e.prototype.exitGameEvent = function () {
                                this.playBgm(), (this.scrollView.node.active = !0), this.showRank(!0);
                            }),
                            (e.prototype.refreshHallRankEvent = function () {
                                this.showRank(!0);
                            }),
                            (e.prototype.playBgm = function () {
                                s.GDAudioMgr.instance.playBGM(G.AudioInfoDefine.mainBGM);
                            }),
                            (e.prototype.register = function () {
                                this.settingBtn.addClickListener(function () {
                                    s.GDAudioMgr.instance.playOneShot(G.AudioInfoDefine.click),
                                        p.GDWindowMgr.instance.openWindow(D.PrefabAddressDefine.settingWindow);
                                }),
                                    cc.sys.platform == cc.sys.WECHAT_GAME && (this.addDesktopBtn.node.active = !1),
                                    this.addDesktopBtn.addClickListener(function () {
                                        s.GDAudioMgr.instance.playOneShot(G.AudioInfoDefine.click),
                                            v.Platform.current.addShortcut();
                                    }),
                                    this.businessCardBtn.addClickListener(function () {
                                        s.GDAudioMgr.instance.playOneShot(G.AudioInfoDefine.click),
                                            p.GDWindowMgr.instance.openWindow(D.PrefabAddressDefine.businessCardWindow);
                                    }),
                                    this.signinBtn.addClickListener(function () {
                                        y.Analytics.uploadSignClick(),
                                            s.GDAudioMgr.instance.playOneShot(G.AudioInfoDefine.click),
                                            p.GDWindowMgr.instance.openWindow(D.PrefabAddressDefine.signinWindow);
                                    }),
                                    (this.palBtn.node.active = cc.sys.platform == cc.sys.WECHAT_GAME || cc.sys.isBrowser),
                                    this.palBtn.addClickListener(function () {
                                        s.GDAudioMgr.instance.playOneShot(G.AudioInfoDefine.click),
                                            p.GDWindowMgr.instance.openWindow(D.PrefabAddressDefine.palWindow);
                                    }),
                                    this.shareBtn.addClickListener(function () {
                                        s.GDAudioMgr.instance.playOneShot(G.AudioInfoDefine.click),
                                            p.GDWindowMgr.instance.openWindow(D.PrefabAddressDefine.shareWindow);
                                    }),
                                    cc.sys.isBrowser
                                        ? ((this.setLevelBtn.node.active = !0),
                                          this.setLevelBtn.addClickListener(function () {
                                              s.GDAudioMgr.instance.playOneShot(G.AudioInfoDefine.click),
                                                  p.GDWindowMgr.instance.openWindow(D.PrefabAddressDefine.setLevelWindow);
                                          }))
                                        : (this.setLevelBtn.node.active = !1),
                                    this.game2048Btn.addClickListener(this.openGame, this, P.GameIds.GameElsfk);
                            }),
                            (e.prototype.openGame = function (t) {
                                return a(this, void 0, void 0, function () {
                                    return c(this, function (e) {
                                        switch (e.label) {
                                            case 0:
                                                return _.app.subtractHp()
                                                    ? [4, g.GameHelper.openGame(t)]
                                                    : (p.GDWindowMgr.instance.openWindow(D.PrefabAddressDefine.playerHpWindow),
                                                      [2]);
                                            case 1:
                                                return e.sent(), [2];
                                        }
                                    });
                                });
                            }),
                            (e.prototype.onScrollViewEvent = function () {
                                var t = this,
                                    e = this.scrollView.getContentPosition().y;
                                if (!(e - this._lastMoveY < 200 && e - this._lastMoveY > -200)) {
                                    if (((this._lastMoveY = e), this.scrollView.getContentPosition().y > 800))
                                        this.topBtn.node.active = !0;
                                    else
                                        k.UserData.instance.dayData.forEach(function (t) {
                                            t.count;
                                        }),
                                            (this.topBtn.node.active = !1);
                                    this.content.children.forEach(function (e) {
                                        var n = e.position.y + t.content.position.y;
                                        n > 680 || n < -680
                                            ? e.active && (e.getComponent(R.default).hideUserItem(), (e.active = !1))
                                            : n < 650 &&
                                              n > -650 &&
                                              (e.active || (e.getComponent(R.default).showUserItem(), (e.active = !0)));
                                    });
                                }
                            }),
                            (e.prototype.showRank = function (t) {
                                return (
                                    void 0 === t && (t = !1),
                                    a(this, void 0, void 0, function () {
                                        var e,
                                            n,
                                            o,
                                            r,
                                            i,
                                            a,
                                            s,
                                            u,
                                            p,
                                            h,
                                            d,
                                            y,
                                            v,
                                            _,
                                            g,
                                            b,
                                            D = this;
                                        return c(this, function () {
                                            for (
                                                e = f.GDUtils.tranWhatDay() - 1,
                                                    n = m.FakeRankList[e],
                                                    o = this.content.children,
                                                    r = k.UserData.instance.team || "\u672a\u77e5",
                                                    i = k.UserData.instance.isOpenLocation,
                                                    a = 0,
                                                    s = 0,
                                                    k.UserData.instance.dayData.forEach(function (t) {
                                                        t.count && s++;
                                                    }),
                                                    i || (r = "\u672a\u77e5"),
                                                    u = 0;
                                                u < n.length;
                                                u++
                                            )
                                                (p = o[u]),
                                                    (h = n[u]),
                                                    (d = m.LocationList[h]),
                                                    (r = r.replace(/[\u7701,\u5e02]/g, "")),
                                                    (y = d == r),
                                                    p ||
                                                        ((p = l.GDObjectPoolMgr.get({
                                                            bundlePath: "prefab",
                                                            resPath: "item/hallRankItem",
                                                        })),
                                                        this.content.addChild(p)),
                                                    this.calcPosition(u, y, p),
                                                    (v = p.getComponent(R.default)),
                                                    (_ = new Date().setHours(0, 0, 0, 0)),
                                                    (g = new Date().getTime()),
                                                    (b = (g - _) / 1e3 / m.FakeRankTime[u]),
                                                    (b = parseInt(b.toString())),
                                                    (a += b),
                                                    v.showItems(u, h, y && s > 0, b, t),
                                                    y && this.loadMeRank(u);
                                            return (
                                                this.loadMarquee(a),
                                                this.scheduleOnce(function () {
                                                    D.onScrollViewEvent();
                                                }),
                                                [2]
                                            );
                                        });
                                    })
                                );
                            }),
                            (e.prototype.calcPosition = function (t, e, n) {
                                var o = 650 * t + 50 * t + 325;
                                if (((this.content.height = 24500), n.setPosition(0, -o), e)) {
                                    var r = (24500 - (650 * t + 75 * t)) / 24500;
                                    this.isMePos = r;
                                }
                            }),
                            (e.prototype.loadMarquee = function (t) {
                                var e = u.GDResMgr.get({
                                    bundlePath: "prefab",
                                    resPath: "item/marquee",
                                });
                                if (e) {
                                    var n = cc.instantiate(e);
                                    this.marqueeMgr.addChild(n), n.getComponent(O.default).showMarquee(t);
                                }
                            }),
                            (e.prototype.loadMeRank = function (t) {
                                var e = u.GDResMgr.get({
                                    bundlePath: "prefab",
                                    resPath: "item/meRank",
                                });
                                if (e) {
                                    var n = this.meRankMgr.children[0];
                                    n || ((n = cc.instantiate(e)), this.meRankMgr.addChild(n)),
                                        n.getComponent(T.default).showMeRank(t + 1);
                                }
                            }),
                            (e.prototype.addLeaveListener = function () {
                                cc.game.on(cc.game.EVENT_HIDE, this.onPlayerLeave, this),
                                    cc.game.on(cc.game.EVENT_SHOW, this.onPlayerBack, this);
                            }),
                            (e.prototype.onPlayerLeave = function () {}),
                            (e.prototype.onPlayerBack = function () {
                                s.GDAudioMgr.instance.resumeBGM();
                            }),
                            (e.prototype.updatePageIndex = function (t) {
                                this.pageView.setCurrentPageIndex(t);
                            }),
                            i([A(h.GDButton)], e.prototype, "settingBtn", void 0),
                            i([A(h.GDButton)], e.prototype, "game2048Btn", void 0),
                            i([A(h.GDButton)], e.prototype, "businessCardBtn", void 0),
                            i([A(h.GDButton)], e.prototype, "addDesktopBtn", void 0),
                            i([A(h.GDButton)], e.prototype, "signinBtn", void 0),
                            i([A(cc.ScrollView)], e.prototype, "scrollView", void 0),
                            i([A(cc.Node)], e.prototype, "content", void 0),
                            i([A(h.GDButton)], e.prototype, "meBtn", void 0),
                            i([A(h.GDButton)], e.prototype, "topBtn", void 0),
                            i([A(cc.Node)], e.prototype, "marqueeMgr", void 0),
                            i([A(cc.Node)], e.prototype, "meRankMgr", void 0),
                            i([A(h.GDButton)], e.prototype, "setLevelBtn", void 0),
                            i([A(h.GDButton)], e.prototype, "enterAwardBtn", void 0),
                            i([A(h.GDButton)], e.prototype, "palBtn", void 0),
                            i([A(h.GDButton)], e.prototype, "shareBtn", void 0),
                            i([A(cc.PageView)], e.prototype, "pageView", void 0),
                            i([A(cc.Toggle)], e.prototype, "toggle1", void 0),
                            i([A(cc.Toggle)], e.prototype, "toggle2", void 0),
                            i([A(cc.Toggle)], e.prototype, "toggle3", void 0),
                            i([M], e)
                        );
                    })(cc.Component);
                (n.default = S), cc._RF.pop();
            },
            {
                "../GD/manage/GDAudioMgr": "GDAudioMgr",
                "../GD/manage/GDObjectPool": "GDObjectPool",
                "../GD/manage/GDResMgr": "GDResMgr",
                "../GD/manage/GDWindowMgr": "GDWindowMgr",
                "../GD/tools/GDUtils": "GDUtils",
                "../GD/ui/GDButton": "GDButton",
                "../GD/ui/GDUIScrollView/CCCExtend": "CCCExtend",
                "../platform/Analytics": "Analytics",
                "../platform/Platform": "Platform",
                "./App": "App",
                "./GameHelper": "GameHelper",
                "./GameType": "GameType",
                "./PlayerHp": "PlayerHp",
                "./define/AddressDefine": "AddressDefine",
                "./define/AudioInfoDefine": "AudioInfoDefine",
                "./define/GameEventDefine": "GameEventDefine",
                "./define/GameTypeDefine": "GameTypeDefine",
                "./domain/UserData": "UserData",
                "./items/HallRankItem": "HallRankItem",
                "./items/Marquee": "Marquee",
                "./items/MeRank": "MeRank",
            },
        ],
        HpComponent: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "5fed6qk6p5JgYKB3EsEKdL3", "HpComponent");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                });
                var a = t("../../GD/manage/GDAudioMgr"),
                    c = t("../../GD/manage/GDWindowMgr"),
                    s = t("../../GD/tools/GDUtils"),
                    l = t("../../GD/ui/GDButton"),
                    u = t("../define/AddressDefine"),
                    p = t("../define/AudioInfoDefine"),
                    f = t("../define/GameEventDefine"),
                    h = t("../domain/UserData"),
                    d = t("../PlayerHp"),
                    y = cc._decorator,
                    v = y.ccclass,
                    _ = y.property,
                    g = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (e.hpLbl = null), (e.playerHpBtn = null), (e.infinityNode = null), e;
                        }
                        return (
                            r(e, t),
                            (e.prototype.start = function () {
                                f.gameEvent.on(f.GameEventDefine.PlayerHpUpdateEvent, this.onUpdateHpEvent, this),
                                    this.playerHpBtn.addClickListener(function () {
                                        a.GDAudioMgr.instance.playOneShot(p.AudioInfoDefine.click),
                                            c.GDWindowMgr.instance.openWindow(u.PrefabAddressDefine.playerHpWindow);
                                    }),
                                    this.onUpdateHpEvent();
                            }),
                            (e.prototype.onDestroy = function () {
                                f.gameEvent.off(f.GameEventDefine.PlayerHpUpdateEvent, this.onUpdateHpEvent, this);
                            }),
                            (e.prototype.onUpdateHpEvent = function () {
                                var t = h.UserData.instance.playerHp;
                                t.infinity && s.GDUtils.isToDay(t.time)
                                    ? ((this.infinityNode.active = !0), (this.hpLbl.node.active = !1))
                                    : ((this.infinityNode.active = !1), (this.hpLbl.string = d.playerHp.hp + "/5"));
                            }),
                            i([_(cc.Label)], e.prototype, "hpLbl", void 0),
                            i([_(l.GDButton)], e.prototype, "playerHpBtn", void 0),
                            i(
                                [
                                    _({
                                        type: cc.Node,
                                        tooltip: "\u65e0\u7a77\u5927",
                                    }),
                                ],
                                e.prototype,
                                "infinityNode",
                                void 0
                            ),
                            i([v], e)
                        );
                    })(cc.Component);
                (n.default = g), cc._RF.pop();
            },
            {
                "../../GD/manage/GDAudioMgr": "GDAudioMgr",
                "../../GD/manage/GDWindowMgr": "GDWindowMgr",
                "../../GD/tools/GDUtils": "GDUtils",
                "../../GD/ui/GDButton": "GDButton",
                "../PlayerHp": "PlayerHp",
                "../define/AddressDefine": "AddressDefine",
                "../define/AudioInfoDefine": "AudioInfoDefine",
                "../define/GameEventDefine": "GameEventDefine",
                "../domain/UserData": "UserData",
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                });
                var a = cc._decorator,
                    c = a.ccclass,
                    s =
                        (a.property,
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
                (n.default = s), cc._RF.pop();
            },
            {},
        ],
        LevelUpDifficulty: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "f9c01bMz5tBka/BgG7woZqM", "LevelUpDifficulty");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                });
                var a = t("../../GD/manage/GDObjectPool"),
                    c = t("../../GD/tools/GDCCUtils"),
                    s = t("../define/AddressDefine"),
                    l = cc._decorator,
                    u = l.ccclass,
                    p = l.property,
                    f = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (e.tweenNode = null), e;
                        }
                        var n;
                        return (
                            r(e, t),
                            (n = e),
                            (e.prototype.show = function () {
                                var t = this;
                                this.tweenNode.getComponent(cc.Animation).play(),
                                    this.scheduleOnce(function () {
                                        t.hide();
                                    }, 2);
                            }),
                            (e.prototype.hide = function () {
                                a.GDObjectPoolMgr.recycle(this.node);
                            }),
                            (e.show = function () {
                                var t = a.GDObjectPoolMgr.get(s.PrefabAddressDefine.levelUpDifficulty);
                                c.GDCCUtils.addCanvasChild(t);
                                var e = t.getComponent(n);
                                return null == e || e.show(), e;
                            }),
                            (e.hide = function (t) {
                                t.hide();
                            }),
                            (e.hideAll = function () {
                                a.GDObjectPoolMgr.recycleAll(s.PrefabAddressDefine.levelUpDifficulty);
                            }),
                            i([p(cc.Node)], e.prototype, "tweenNode", void 0),
                            (n = i([u], e))
                        );
                    })(cc.Component);
                (n.default = f), cc._RF.pop();
            },
            {
                "../../GD/manage/GDObjectPool": "GDObjectPool",
                "../../GD/tools/GDCCUtils": "GDCCUtils",
                "../define/AddressDefine": "AddressDefine",
            },
        ],
        Load: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "37394DXlm5AYJAvJqVztW7F", "Load");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        },
                    a =
                        (this && this.__awaiter) ||
                        function (t, e, n, o) {
                            return new (n || (n = Promise))(function (r, i) {
                                function a(t) {
                                    try {
                                        s(o.next(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function c(t) {
                                    try {
                                        s(o.throw(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function s(t) {
                                    var e;
                                    t.done
                                        ? r(t.value)
                                        : ((e = t.value),
                                          e instanceof n
                                              ? e
                                              : new n(function (t) {
                                                    t(e);
                                                })).then(a, c);
                                }
                                s((o = o.apply(t, e || [])).next());
                            });
                        },
                    c =
                        (this && this.__generator) ||
                        function (t, e) {
                            var n,
                                o,
                                r,
                                i,
                                a = {
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
                                    return s([t, e]);
                                };
                            }
                            function s(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a; )
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
                                                    a.label++,
                                                    {
                                                        value: i[1],
                                                        done: !1,
                                                    }
                                                );
                                            case 5:
                                                a.label++, (o = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = a.ops.pop()), a.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(r = (r = a.trys).length > 0 && r[r.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                    a.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && a.label < r[1]) {
                                                    (a.label = r[1]), (r = i);
                                                    break;
                                                }
                                                if (r && a.label < r[2]) {
                                                    (a.label = r[2]), a.ops.push(i);
                                                    break;
                                                }
                                                r[2] && a.ops.pop(), a.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, a);
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
                    (n.Load = void 0);
                var s = t("../GD/manage/GDAudioMgr"),
                    l = t("../GD/manage/GDResLoader"),
                    u = t("../GD/table/GDTableMgr"),
                    p = t("../GD/tools/GDMath"),
                    f = t("./domain/GameCfg"),
                    h = t("../GD/ui/GDButton"),
                    d = t("../platform/Analytics"),
                    y = t("../platform/Platform"),
                    v = t("./define/TableInfoDefine"),
                    _ = cc._decorator,
                    g = _.ccclass,
                    m = _.property,
                    b = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (
                                (e.proBar = null),
                                (e.logoTT = null),
                                (e.logoWX = null),
                                (e.startBtn = null),
                                (e.barNode = null),
                                e
                            );
                        }
                        return (
                            r(e, t),
                            (e.prototype.onLoad = function () {
                                this.initLogo(),
                                    d.Analytics.uploadAppStart(),
                                    cc.dynamicAtlasManager && (cc.dynamicAtlasManager.enabled = !1),
                                    this.initGameSetting();
                            }),
                            (e.prototype.initLogo = function () {
                                switch (((this.logoTT.active = !1), (this.logoWX.active = !1), cc.sys.platform)) {
                                    case cc.sys.BYTEDANCE_GAME:
                                        this.logoTT.active = !0;
                                        break;
                                    case cc.sys.WECHAT_GAME:
                                        (this.barNode.active = !1), (this.logoWX.active = !0);
                                        break;
                                    default:
                                        this.logoTT.active = !0;
                                }
                            }),
                            (e.prototype.onDestroy = function () {}),
                            (e.prototype.start = function () {
                                return a(this, void 0, void 0, function () {
                                    return c(this, function (t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, y.Platform.current.login()];
                                            case 1:
                                                switch ((t.sent(), cc.sys.platform)) {
                                                    case cc.sys.WECHAT_GAME:
                                                        return [3, 2];
                                                }
                                                return [3, 4];
                                            case 2:
                                                return [4, this.loadWx()];
                                            case 3:
                                                return t.sent(), [3, 6];
                                            case 4:
                                                return [4, this.goToHall()];
                                            case 5:
                                                return t.sent(), [3, 6];
                                            case 6:
                                                return [2];
                                        }
                                    });
                                });
                            }),
                            (e.prototype.loadWx = function () {
                                return a(this, void 0, void 0, function () {
                                    return c(this, function (t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, y.Platform.current.requirePrivacyAuthorize()];
                                            case 1:
                                                return t.sent(), [4, this.goToHall()];
                                            case 2:
                                                return t.sent(), [2];
                                        }
                                    });
                                });
                            }),
                            (e.prototype.goToHall = function () {
                                return a(this, void 0, void 0, function () {
                                    return c(this, function (t) {
                                        switch (t.label) {
                                            case 0:
                                                return (
                                                    (this.startBtn.node.active = !1),
                                                    (this.barNode.active = !0),
                                                    cc.director.preloadScene("hall"),
                                                    d.Analytics.uploadStartLoading(),
                                                    [4, this.loadRes()]
                                                );
                                            case 1:
                                                return (
                                                    t.sent(),
                                                    d.Analytics.uploadFinishLoading(),
                                                    cc.director.loadScene("hall"),
                                                    [2]
                                                );
                                        }
                                    });
                                });
                            }),
                            (e.prototype.initGameSetting = function () {
                                u.GDTableMgr.registerTable(v.TableInfoDefine.key, v.TableInfoDefine.gameListTable),
                                    u.GDTableMgr.registerTable(v.SignInDefine.key, v.SignInDefine.signInListTable),
                                    u.GDTableMgr.registerTable(v.GatherDefine.key, v.GatherDefine.gatherListTable),
                                    (s.GDAudioMgr.instance.openMusic = f.GameCfg.instance.get("openMusic")),
                                    (s.GDAudioMgr.instance.openSound = f.GameCfg.instance.get("openSound"));
                            }),
                            (e.prototype.loadRes = function () {
                                var t = this;
                                return (
                                    (this.proBar.progress = 0),
                                    l.GDResLoader.singleton.load(
                                        ["audio", "config", "image", "prefab", "spine", "table"],
                                        function (e) {
                                            (e = p.GDMath.clamp(e, 0, 1)), (t.proBar.progress = e);
                                        }
                                    )
                                );
                            }),
                            i([m(cc.ProgressBar)], e.prototype, "proBar", void 0),
                            i([m(cc.Node)], e.prototype, "logoTT", void 0),
                            i([m(cc.Node)], e.prototype, "logoWX", void 0),
                            i([m(h.GDButton)], e.prototype, "startBtn", void 0),
                            i([m(cc.Node)], e.prototype, "barNode", void 0),
                            i([g], e)
                        );
                    })(cc.Component);
                (n.Load = b), cc._RF.pop();
            },
            {
                "../GD/manage/GDAudioMgr": "GDAudioMgr",
                "../GD/manage/GDResLoader": "GDResLoader",
                "../GD/table/GDTableMgr": "GDTableMgr",
                "../GD/tools/GDMath": "GDMath",
                "../GD/ui/GDButton": "GDButton",
                "../platform/Analytics": "Analytics",
                "../platform/Platform": "Platform",
                "./define/TableInfoDefine": "TableInfoDefine",
                "./domain/GameCfg": "GameCfg",
            },
        ],
        LocationWindow: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "24578t3aidHw6W/MD8K9Po5", "LocationWindow");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                });
                var a = t("../../GD/manage/GDObjectPool"),
                    c = t("../../GD/manage/GDWindowMgr"),
                    s = t("../../GD/ui/GDButton"),
                    l = t("../GameType"),
                    u = t("../com/FloatTipItem"),
                    p = t("../define/GameEventDefine"),
                    f = t("../domain/UserData"),
                    h = cc._decorator,
                    d = h.ccclass,
                    y = h.property,
                    v = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (e.closeBtn = null), (e.blankCloseBtn = null), (e.locaMgr = null), (e.script = null), e;
                        }
                        return (
                            r(e, t),
                            (e.prototype.start = function () {
                                this.blankCloseBtn.addClickListener(this.close, this),
                                    this.closeBtn.addClickListener(this.close, this),
                                    this.showLocation();
                            }),
                            (e.prototype.showLocation = function () {
                                var t = this;
                                l.LocationList.forEach(function (e, n) {
                                    if (0 != n) {
                                        var o = a.GDObjectPoolMgr.get({
                                            bundlePath: "prefab",
                                            resPath: "item/locationItem",
                                        });
                                        (o.getComponentInChildren(cc.Label).string = e),
                                            t.locaMgr.addChild(o),
                                            o.getComponent(s.GDButton).addClickListener(function () {
                                                t.hideSelectNode(),
                                                    (o.getComponentInChildren(cc.Sprite).node.active = !0),
                                                    f.UserData.instance.updateTeam(e),
                                                    console.log(e),
                                                    p.gameEvent.emit(p.GameEventDefine.refreshHallRankEvent, e),
                                                    u.FloatTipItem.show("\u5730\u533a\u8bbe\u7f6e\u6210\u529f!", 2);
                                            });
                                    }
                                });
                            }),
                            (e.prototype.hideSelectNode = function () {
                                this.locaMgr.children.forEach(function (t) {
                                    t.getComponentInChildren(cc.Sprite).node.active = !1;
                                });
                            }),
                            i([y(s.GDButton)], e.prototype, "closeBtn", void 0),
                            i([y(s.GDButton)], e.prototype, "blankCloseBtn", void 0),
                            i(
                                [
                                    y({
                                        type: cc.Node,
                                        tooltip: "\u4f4d\u7f6e\u7ba1\u7406\u8282\u70b9",
                                    }),
                                ],
                                e.prototype,
                                "locaMgr",
                                void 0
                            ),
                            i([d], e)
                        );
                    })(c.GDWindow);
                (n.default = v), cc._RF.pop();
            },
            {
                "../../GD/manage/GDObjectPool": "GDObjectPool",
                "../../GD/manage/GDWindowMgr": "GDWindowMgr",
                "../../GD/ui/GDButton": "GDButton",
                "../GameType": "GameType",
                "../com/FloatTipItem": "FloatTipItem",
                "../define/GameEventDefine": "GameEventDefine",
                "../domain/UserData": "UserData",
            },
        ],
        LoseWindow: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "4a7d2Qr09FJwKWJFIbhuBQ1", "LoseWindow");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.LoseWindow = void 0);
                var a = t("../../GD/manage/GDWindowMgr"),
                    c = t("../../GD/table/GDTableMgr"),
                    s = t("../../GD/ui/GDButton"),
                    l = t("../../platform/Platform"),
                    u = t("../App"),
                    p = t("../define/AddressDefine"),
                    f = t("../define/TableInfoDefine"),
                    h = t("../items/GatherItem"),
                    d = t("../items/RankLoseItem"),
                    y = t("../table/GatherTableItem"),
                    v = cc._decorator,
                    _ = v.ccclass,
                    g = v.property,
                    m = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (
                                (e.tryAgainBtn = null),
                                (e.closeBtn = null),
                                (e.backBtn = null),
                                (e.rankItems = null),
                                (e.gatherItem = null),
                                e
                            );
                        }
                        return (
                            r(e, t),
                            (e.prototype.start = function () {
                                this.closeBtn.addClickListener(this.close, this),
                                    this.tryAgainBtn.addClickListener(this.clickTryAgainBtn, this),
                                    this.backBtn.addClickListener(this.close, this);
                            }),
                            (e.prototype.onOpen = function () {
                                (this.node.active = !0), l.Platform.current.getRecordState();
                            }),
                            (e.prototype.clickTryAgainBtn = function () {
                                var t;
                                u.app.subtractHp()
                                    ? (null === (t = this.listener) || void 0 === t || t.tryAgain(this), this.quit())
                                    : a.GDWindowMgr.instance.openWindow(p.PrefabAddressDefine.playerHpWindow);
                            }),
                            (e.prototype.showRank = function (t, e) {
                                console.log("rank=========", e);
                                var n = this.getItems().find(function (e) {
                                    return e.getLevel == t;
                                });
                                n
                                    ? ((this.gatherItem.node.active = !0), this.gatherItem.showGatherItem(n))
                                    : (this.gatherItem.node.active = !1);
                                var o = this.rankItems.getComponentsInChildren(d.default);
                                o.forEach(function (t, n) {
                                    var r = o.length - n;
                                    t.showRankInfo(r, e == r);
                                });
                            }),
                            (e.prototype.getItems = function () {
                                return c.GDTableMgr.getTable(f.GatherDefine.key, y.GatherTableItem).getItems();
                            }),
                            i([g(s.GDButton)], e.prototype, "tryAgainBtn", void 0),
                            i([g(s.GDButton)], e.prototype, "closeBtn", void 0),
                            i([g(s.GDButton)], e.prototype, "backBtn", void 0),
                            i([g(cc.Node)], e.prototype, "rankItems", void 0),
                            i([g(h.default)], e.prototype, "gatherItem", void 0),
                            i([_], e)
                        );
                    })(a.GDWindow);
                (n.LoseWindow = m), cc._RF.pop();
            },
            {
                "../../GD/manage/GDWindowMgr": "GDWindowMgr",
                "../../GD/table/GDTableMgr": "GDTableMgr",
                "../../GD/ui/GDButton": "GDButton",
                "../../platform/Platform": "Platform",
                "../App": "App",
                "../define/AddressDefine": "AddressDefine",
                "../define/TableInfoDefine": "TableInfoDefine",
                "../items/GatherItem": "GatherItem",
                "../items/RankLoseItem": "RankLoseItem",
                "../table/GatherTableItem": "GatherTableItem",
            },
        ],
        Marquee: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "96ce6iARVRPGr3pBbw+jinV", "Marquee");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                });
                var a = cc._decorator,
                    c = a.ccclass,
                    s = a.property,
                    l = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (e.strLbl = null), e;
                        }
                        return (
                            r(e, t),
                            (e.prototype.onLoad = function () {
                                this.marqueeSchedule();
                            }),
                            (e.prototype.onDestroy = function () {
                                this.unschedule(this.runMarquee);
                            }),
                            (e.prototype.showMarquee = function (t) {
                                this.calcMarqueeCount(t);
                            }),
                            (e.prototype.calcMarqueeCount = function (t) {
                                var e = 3 * t,
                                    n = e > 999999 ? "999999+" : e.toString(),
                                    o = t > 999999 ? "999999+" : t.toString();
                                this.strLbl.string =
                                    "<b><color=#ffffff>\u4eca\u65e5 </c><color=#ffffff>" +
                                    n +
                                    "</color><color=#ffffff> \u4eba\u6311\u6218\uff0c\u5171 </c><color=#ffffff>" +
                                    o +
                                    "</color><color=#ffffff> \u4eba\u6311\u6218\u6210\u529f! </c></b>";
                            }),
                            (e.prototype.marqueeSchedule = function () {
                                this.runMarquee(), this.schedule(this.runMarquee, 12);
                            }),
                            (e.prototype.runMarquee = function () {
                                var t = cc.tween(this.strLbl.node),
                                    e = this.strLbl.node.width;
                                t.to(0, {
                                    position: cc.v3(e, 0),
                                }),
                                    t.to(10, {
                                        position: cc.v3(-e, 0),
                                    }),
                                    t.start();
                            }),
                            i([s(cc.RichText)], e.prototype, "strLbl", void 0),
                            i([c], e)
                        );
                    })(cc.Component);
                (n.default = l), cc._RF.pop();
            },
            {},
        ],
        MeRank: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "9cf96TTlD1Oyr5ealcwOGMh", "MeRank");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                });
                var a = cc._decorator,
                    c = a.ccclass,
                    s = a.property,
                    l = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (e.meRankLbl = null), e;
                        }
                        return (
                            r(e, t),
                            (e.prototype.showMeRank = function (t) {
                                this.meRankLbl.string = "\u7b2c " + t + " \u540d";
                            }),
                            i([s(cc.Label)], e.prototype, "meRankLbl", void 0),
                            i([c], e)
                        );
                    })(cc.Component);
                (n.default = l), cc._RF.pop();
            },
            {},
        ],
        MoreItem: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "5b08eqjS69HiJiLBtdbO/WJ", "MoreItem");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        },
                    a =
                        (this && this.__awaiter) ||
                        function (t, e, n, o) {
                            return new (n || (n = Promise))(function (r, i) {
                                function a(t) {
                                    try {
                                        s(o.next(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function c(t) {
                                    try {
                                        s(o.throw(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function s(t) {
                                    var e;
                                    t.done
                                        ? r(t.value)
                                        : ((e = t.value),
                                          e instanceof n
                                              ? e
                                              : new n(function (t) {
                                                    t(e);
                                                })).then(a, c);
                                }
                                s((o = o.apply(t, e || [])).next());
                            });
                        },
                    c =
                        (this && this.__generator) ||
                        function (t, e) {
                            var n,
                                o,
                                r,
                                i,
                                a = {
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
                                    return s([t, e]);
                                };
                            }
                            function s(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a; )
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
                                                    a.label++,
                                                    {
                                                        value: i[1],
                                                        done: !1,
                                                    }
                                                );
                                            case 5:
                                                a.label++, (o = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = a.ops.pop()), a.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(r = (r = a.trys).length > 0 && r[r.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                    a.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && a.label < r[1]) {
                                                    (a.label = r[1]), (r = i);
                                                    break;
                                                }
                                                if (r && a.label < r[2]) {
                                                    (a.label = r[2]), a.ops.push(i);
                                                    break;
                                                }
                                                r[2] && a.ops.pop(), a.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, a);
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
                });
                var s = t("../../GD/ui/GDButton"),
                    l = t("../GameHelper"),
                    u = cc._decorator,
                    p = u.ccclass,
                    f = u.property,
                    h = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (e.gameIcon = null), (e.gameName = null), (e.gameBtn = null), e;
                        }
                        return (
                            r(e, t),
                            (e.prototype.showInfo = function (t) {
                                this.gameBtn.removeClickListener(this.clickGame),
                                    (this.gameName.string = "" + t.title),
                                    this.gameBtn.addClickListener(this.clickGame, this, t);
                            }),
                            (e.prototype.clickGame = function (t) {
                                return a(this, void 0, void 0, function () {
                                    return c(this, function (e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, this.openGame(t)];
                                            case 1:
                                                return e.sent(), [2];
                                        }
                                    });
                                });
                            }),
                            (e.prototype.openGame = function (t) {
                                return a(this, void 0, void 0, function () {
                                    return c(this, function (e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, l.GameHelper.openGame(t.id)];
                                            case 1:
                                                return e.sent(), [2];
                                        }
                                    });
                                });
                            }),
                            i(
                                [
                                    f({
                                        type: cc.Sprite,
                                        tooltip: "\u6e38\u620f\u56fe\u6807",
                                    }),
                                ],
                                e.prototype,
                                "gameIcon",
                                void 0
                            ),
                            i(
                                [
                                    f({
                                        type: cc.Label,
                                        tooltip: "\u6e38\u620f\u540d\u79f0",
                                    }),
                                ],
                                e.prototype,
                                "gameName",
                                void 0
                            ),
                            i(
                                [
                                    f({
                                        type: s.GDButton,
                                        tooltip: "\u6e38\u620f\u6309\u94ae",
                                    }),
                                ],
                                e.prototype,
                                "gameBtn",
                                void 0
                            ),
                            i([p], e)
                        );
                    })(cc.Component);
                (n.default = h), cc._RF.pop();
            },
            {
                "../../GD/ui/GDButton": "GDButton",
                "../GameHelper": "GameHelper",
            },
        ],
        MoveAndScale: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "cba6au+7ytHwp8x6K5qCgfL", "MoveAndScale");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.MoveAndScale = void 0);
                var a = t("../../../GD/manage/GDAudioMgr"),
                    c = t("../../../GD/tools/GDCCUtils"),
                    s = t("../../../GD/tools/GDMath"),
                    l = cc._decorator,
                    u = l.ccclass,
                    p = l.property,
                    f = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (e.viewNode = null), (e.maxScale = 2), (e.touchAudio = null), e;
                        }
                        return (
                            r(e, t),
                            (e.prototype.onLoad = function () {
                                (this._touches = []),
                                    (this._isMove = !1),
                                    (this._tempZeroVec2 = new cc.Vec2(0, 0)),
                                    (this._originalScale = new cc.Vec2(this.node.scaleX, this.node.scaleY)),
                                    (this._originalPos = new cc.Vec2(this.node.x, this.node.y)),
                                    (this._lastScale = this.node.scale);
                            }),
                            (e.prototype.reset = function () {
                                (this.node.x = this._originalPos.x),
                                    (this.node.y = this._originalPos.y),
                                    (this.node.scaleX = this._originalScale.x),
                                    (this.node.scaleY = this._originalScale.y);
                            }),
                            (e.prototype.onEnable = function () {
                                this.on();
                            }),
                            (e.prototype.onDisable = function () {
                                this.off();
                            }),
                            (e.prototype.on = function () {
                                this.viewNode.on(cc.Node.EventType.TOUCH_START, this.touchStart, this),
                                    this.viewNode.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this),
                                    this.viewNode.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this),
                                    this.viewNode.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this),
                                    this.viewNode.on(cc.Node.EventType.MOUSE_WHEEL, this.wheelZoom, this);
                            }),
                            (e.prototype.off = function () {
                                this.viewNode.off(cc.Node.EventType.TOUCH_START, this.touchStart, this),
                                    this.viewNode.off(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this),
                                    this.viewNode.off(cc.Node.EventType.TOUCH_END, this.touchEnd, this),
                                    this.viewNode.off(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this),
                                    this.viewNode.off(cc.Node.EventType.MOUSE_WHEEL, this.wheelZoom, this);
                            }),
                            Object.defineProperty(e.prototype, "minScale", {
                                get: function () {
                                    var t =
                                            (this.viewNode.width * this.viewNode.scaleX) /
                                            (this.node.width * this._originalScale.x),
                                        e =
                                            (this.viewNode.height * this.viewNode.scaleY) /
                                            (this.node.height * this._originalScale.y);
                                    return Math.max(t, e);
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (e.prototype.touchStart = function (t) {
                                var e = this,
                                    n = t.getTouches();
                                (this._isMove = !1),
                                    this._touches.length >= 2
                                        ? (this._isMove = !0)
                                        : n.forEach(function (t) {
                                              e._touches.push(t);
                                          });
                            }),
                            (e.prototype.touchMove = function (t) {
                                var e = t.getDelta();
                                if (1 == this._touches.length) {
                                    if (e.lengthSqr() < 25) return;
                                    (this._isMove = !0), this.handlerMove(t);
                                }
                                2 == this._touches.length && ((this._isMove = !0), this.handlerZoom(t));
                            }),
                            (e.prototype.touchEnd = function (t) {
                                var e = this;
                                this.touchAudio &&
                                    !this._isMove &&
                                    a.GDAudioMgr.instance.playOneShot({
                                        clipOrRes: this.touchAudio,
                                    }),
                                    t.getTouches().forEach(function (t) {
                                        var n = t.getID();
                                        e.removeTouch(n);
                                    });
                            }),
                            (e.prototype.removeTouch = function (t) {
                                var e = this._touches.findIndex(function (e) {
                                    return e.getID() == t;
                                });
                                this._touches.splice(e, 1);
                            }),
                            (e.prototype.wheelZoom = function (t) {
                                var e = 0.001 * t.getScrollY();
                                this.limitScale(e), this.limitMove(this._tempZeroVec2);
                            }),
                            (e.prototype.handlerMove = function (t) {
                                var e = t.getDelta();
                                this.limitMove(e);
                            }),
                            (e.prototype.handlerZoom = function () {
                                var t,
                                    e = this._touches[0],
                                    n = this._touches[1],
                                    o = cc.Vec2.distance(e.getStartLocation(), n.getStartLocation());
                                (t = (cc.Vec2.distance(e.getLocation(), n.getLocation()) - o) * this._lastScale * 0.001),
                                    this.limitScale(t),
                                    this.limitMove(this._tempZeroVec2);
                            }),
                            (e.prototype.limitMove = function (t) {
                                var e = c.GDCCUtils.getWorldAABB(this.node),
                                    n = c.GDCCUtils.getWorldAABB(this.viewNode);
                                e.xMin + t.x > n.xMin && (t.x = n.xMin - e.xMin),
                                    e.xMax + t.x < n.xMax && (t.x = n.xMax - e.xMax),
                                    e.yMin + t.y > n.yMin && (t.y = n.yMin - e.yMin),
                                    e.yMax + t.y < n.yMax && (t.y = n.yMax - e.yMax),
                                    (this.node.x += t.x),
                                    (this.node.y += t.y);
                            }),
                            (e.prototype.limitScale = function (t) {
                                (this._lastScale = this.node.scale),
                                    (this.node.scale = s.GDMath.clamp(this.node.scale + t, this.maxScale, this.minScale));
                            }),
                            i([p(cc.Node)], e.prototype, "viewNode", void 0),
                            i([p], e.prototype, "maxScale", void 0),
                            i([p(cc.AudioClip)], e.prototype, "touchAudio", void 0),
                            i([u], e)
                        );
                    })(cc.Component);
                (n.MoveAndScale = f), cc._RF.pop();
            },
            {
                "../../../GD/manage/GDAudioMgr": "GDAudioMgr",
                "../../../GD/tools/GDCCUtils": "GDCCUtils",
                "../../../GD/tools/GDMath": "GDMath",
            },
        ],
        PalWindow: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "e6dd809wPFFcLsGOQBc2W9w", "PalWindow");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                });
                var a = t("../../GD/manage/GDWindowMgr"),
                    c = t("../../GD/ui/GDButton"),
                    s = t("../../platform/Platform"),
                    l = t("../com/FloatTipItem"),
                    u = t("../domain/UserData"),
                    p = cc._decorator,
                    f = p.ccclass,
                    h = p.property,
                    d = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (e.closeBtn = null), (e.blankCloseBtn = null), (e.joinGame = null), e;
                        }
                        return (
                            r(e, t),
                            (e.prototype.start = function () {
                                this.blankCloseBtn.addClickListener(this.close, this),
                                    this.closeBtn.addClickListener(this.close, this);
                            }),
                            (e.prototype.onOpen = function () {
                                (this.node.active = !0), this.createGameClubButton();
                            }),
                            (e.prototype.onClose = function () {
                                s.Platform.current.hideGameClubButton(),
                                    (this.node.active = !1),
                                    console.log("\u8fdb\u6765\u4e86");
                            }),
                            (e.prototype.createGameClubButton = function () {
                                var t = this.joinGame,
                                    e = cc.size(t.width + 10, t.height + 10),
                                    n = cc.view.getFrameSize(),
                                    o = cc.director.getWinSize(),
                                    r = ((0.5 * o.width + t.x - 0.5 * e.width) / o.width) * n.width,
                                    i = ((0.5 * o.height - t.y - 0.5 * e.height) / o.height) * n.height,
                                    a = (e.width / o.width) * n.width,
                                    c = (e.height / o.height) * n.height;
                                s.Platform.current.createGameClubButton(
                                    {
                                        left: r,
                                        top: i,
                                        width: a,
                                        height: c,
                                    },
                                    function () {
                                        u.UserData.instance.joinGame ||
                                            (l.FloatTipItem.show("\u9886\u53d6\u6210\u529f", 2),
                                            u.UserData.instance.updateProp(4, 2),
                                            u.UserData.instance.setJoinGame(1));
                                    }
                                );
                            }),
                            i(
                                [
                                    h({
                                        type: c.GDButton,
                                        tooltip: "\u5173\u95ed",
                                    }),
                                ],
                                e.prototype,
                                "closeBtn",
                                void 0
                            ),
                            i(
                                [
                                    h({
                                        type: c.GDButton,
                                        tooltip: "\u80cc\u666f\u5173\u95ed",
                                    }),
                                ],
                                e.prototype,
                                "blankCloseBtn",
                                void 0
                            ),
                            i(
                                [
                                    h({
                                        type: cc.Node,
                                        tooltip: "\u52a0\u5708\u6309\u94ae\u8282\u70b9",
                                    }),
                                ],
                                e.prototype,
                                "joinGame",
                                void 0
                            ),
                            i([f], e)
                        );
                    })(a.GDWindow);
                (n.default = d), cc._RF.pop();
            },
            {
                "../../GD/manage/GDWindowMgr": "GDWindowMgr",
                "../../GD/ui/GDButton": "GDButton",
                "../../platform/Platform": "Platform",
                "../com/FloatTipItem": "FloatTipItem",
                "../domain/UserData": "UserData",
            },
        ],
        Platform: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "de747YP6kdNDrUC0gMGRTck", "Platform");
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
                        (this && this.__awaiter) ||
                        function (t, e, n, o) {
                            return new (n || (n = Promise))(function (r, i) {
                                function a(t) {
                                    try {
                                        s(o.next(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function c(t) {
                                    try {
                                        s(o.throw(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function s(t) {
                                    var e;
                                    t.done
                                        ? r(t.value)
                                        : ((e = t.value),
                                          e instanceof n
                                              ? e
                                              : new n(function (t) {
                                                    t(e);
                                                })).then(a, c);
                                }
                                s((o = o.apply(t, e || [])).next());
                            });
                        },
                    a =
                        (this && this.__generator) ||
                        function (t, e) {
                            var n,
                                o,
                                r,
                                i,
                                a = {
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
                                    return s([t, e]);
                                };
                            }
                            function s(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a; )
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
                                                    a.label++,
                                                    {
                                                        value: i[1],
                                                        done: !1,
                                                    }
                                                );
                                            case 5:
                                                a.label++, (o = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = a.ops.pop()), a.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(r = (r = a.trys).length > 0 && r[r.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                    a.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && a.label < r[1]) {
                                                    (a.label = r[1]), (r = i);
                                                    break;
                                                }
                                                if (r && a.label < r[2]) {
                                                    (a.label = r[2]), a.ops.push(i);
                                                    break;
                                                }
                                                r[2] && a.ops.pop(), a.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, a);
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
                    (n.WebPlatform = n.PlatformWX = n.PlatformTT = n.Platform = n.Scope = void 0),
                    t("../GD/manage/GDAudioMgr"),
                    (function (t) {
                        (t[(t.userInfo = 1)] = "userInfo"), (t[(t.userLocation = 2)] = "userLocation");
                    })(n.Scope || (n.Scope = {}));
                var c = (function () {
                    function t() {}
                    return (
                        Object.defineProperty(t, "current", {
                            get: function () {
                                if (!this._current)
                                    switch (cc.sys.platform) {
                                        case cc.sys.BYTEDANCE_GAME:
                                            this._current = new s();
                                            break;
                                        case cc.sys.WECHAT_GAME:
                                            this._current = new l();
                                            break;
                                        default:
                                            this._current = new u();
                                    }
                                return this._current;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t._current = null),
                        t
                    );
                })();
                n.Platform = c;
                var s = (function (t) {
                    function e() {
                        var e = (null !== t && t.apply(this, arguments)) || this;
                        return (
                            (e._gameRecorder = null),
                            (e._startRecordTime = 0),
                            (e._videoPath = ""),
                            (e._isShare = !1),
                            (e._isRecorderVideo = !1),
                            e
                        );
                    }
                    return (
                        r(e, t),
                        (e.prototype.login = function () {
                            return new Promise(function (t) {
                                tt.login({
                                    success: function (e) {
                                        t(e);
                                    },
                                    fail: function (e) {
                                        t(null), console.log("login\u8c03\u7528\u5931\u8d25", e);
                                    },
                                });
                            });
                        }),
                        (e.prototype.authorize = function (t) {
                            return new Promise(function (e) {
                                var n = ["scope.userInfo", "scope.userLocation"][t - 1];
                                tt.getSetting({
                                    success: function (t) {
                                        t.authSetting[n]
                                            ? (console.log("authorize OK", t), e(!0))
                                            : tt.authorize({
                                                  scope: n,
                                                  success: function () {
                                                      e(!0);
                                                  },
                                                  fail: function (t) {
                                                      e(!1), console.log("login\u8c03\u7528\u5931\u8d25", t);
                                                  },
                                              });
                                    },
                                    fail: function (t) {
                                        e(!1), console.log("authorize\u8c03\u7528\u5931\u8d25", t);
                                    },
                                });
                            });
                        }),
                        (e.prototype.createUserInfoButton = function () {}),
                        (e.prototype.hideUserInfoButton = function () {}),
                        (e.prototype.requirePrivacyAuthorize = function () {
                            return new Promise(function (t) {
                                t(!0);
                            });
                        }),
                        (e.prototype.openSetting = function () {
                            tt.openSetting({});
                        }),
                        (e.prototype.getLocation = function () {
                            return new Promise(function (t) {
                                tt.getLocation({
                                    success: function (e) {
                                        t(e);
                                    },
                                    fail: function (e) {
                                        t(null), console.log("getLocation\u8c03\u7528\u5931\u8d25", e);
                                    },
                                });
                            });
                        }),
                        (e.prototype.getUserInfo = function () {
                            var t = this;
                            return new Promise(function (e) {
                                return i(t, void 0, void 0, function () {
                                    return a(this, function () {
                                        return (
                                            tt.getUserInfo({
                                                success: function (t) {
                                                    e(t.userInfo);
                                                },
                                                fail: function () {
                                                    console.log("getUserInfo \u8c03\u7528\u5931\u8d25"), e(null);
                                                },
                                            }),
                                            [2]
                                        );
                                    });
                                });
                            });
                        }),
                        (e.prototype.share = function () {
                            return new Promise(function (t) {
                                tt.shareAppMessage({
                                    success: function () {
                                        t(!0);
                                    },
                                    fail: function () {
                                        t(!1);
                                    },
                                });
                            });
                        }),
                        (e.prototype.addShortcut = function () {
                            tt.addShortcut({});
                        }),
                        (e.prototype.showRewardedVideoAd = function () {
                            return new Promise(function (t) {
                                t({
                                    isEnded: !0,
                                    error: null,
                                });
                            });
                        }),
                        (e.prototype.startRecorderVideo = function (t) {
                            var e = this;
                            this._gameRecorder || (this._gameRecorder = tt.getGameRecorderManager()),
                                (this._timeoutFun = Number(
                                    setTimeout(function () {
                                        e.stopRecorderVideo(), t();
                                    }, 299500)
                                )),
                                (this._isRecorderVideo = !0),
                                (this._startRecordTime = new Date().getTime()),
                                this._gameRecorder.start({
                                    duration: 300,
                                    isMarkOpen: !1,
                                });
                        }),
                        (e.prototype.stopRecorderVideo = function () {
                            return i(this, void 0, Promise, function () {
                                var t = this;
                                return a(this, function () {
                                    return [
                                        2,
                                        new Promise(function (e) {
                                            var n, o;
                                            null === (n = t._gameRecorder) ||
                                                void 0 === n ||
                                                n.onStop(function (n) {
                                                    console.log("\u5f55\u5c4f\u505c\u6b62", n.videoPath),
                                                        n.videoPath &&
                                                            (new Date().getTime() - t._startRecordTime > 3e3
                                                                ? (e(!0), (t._videoPath = n.videoPath))
                                                                : (e(!1), t.showToast("\u5f55\u5c4f\u8fc7\u77ed!")));
                                                }),
                                                t._isRecorderVideo
                                                    ? (t._isRecorderVideo = !1)
                                                    : t._videoPath && "" != t._videoPath && e(!0),
                                                clearTimeout(t._timeoutFun),
                                                null === (o = t._gameRecorder) || void 0 === o || o.stop();
                                        }),
                                    ];
                                });
                            });
                        }),
                        (e.prototype.shareRecordVideo = function () {
                            var t = this;
                            !this._isShare &&
                                this._videoPath &&
                                "" != this._videoPath &&
                                tt.shareAppMessage({
                                    title: "\u4e00\u8d77\u73a9\u5427",
                                    channel: "video",
                                    extra: {
                                        videoopics: [
                                            "#\u4e00\u8d77\u73a9\u5427",
                                            "#\u5feb\u6765\u548c\u6211\u4e00\u8d77\u73a9\u5427!",
                                        ],
                                        hashtag_list: [
                                            "#\u4e00\u8d77\u73a9\u5427",
                                            "#\u5feb\u6765\u548c\u6211\u4e00\u8d77\u73a9\u5427!",
                                        ],
                                        videoPath: this._videoPath,
                                    },
                                    success: function () {
                                        (t._isShare = !1), t.showToast("\u5206\u4eab\u6210\u529f");
                                    },
                                    fail: function () {
                                        (t._isShare = !1), t.showToast("\u5206\u4eab\u5931\u8d25");
                                    },
                                });
                        }),
                        (e.prototype.getRecordState = function () {
                            var t = !1;
                            return this._videoPath && "" != this._videoPath && (t = !0), t || this._isRecorderVideo;
                        }),
                        (e.prototype.showToast = function (t) {
                            tt.showToast({
                                title: t,
                                duration: 2e3,
                            });
                        }),
                        (e.prototype.uploadReportAnalytics = function (t, e) {
                            try {
                                tt.reportAnalytics(t, e);
                            } catch (n) {
                                console.error(t + "\u4e8b\u4ef6\u4e0a\u4f20\u5931\u8d25\uff01");
                            }
                        }),
                        (e.prototype.vibrateShort = function () {
                            tt.vibrateShort({});
                        }),
                        (e.prototype.loadRemoteImage = function (t) {
                            return new Promise(function (e, n) {
                                var o = tt.createImage();
                                (o.src = t),
                                    (o.width = 100),
                                    (o.height = 100),
                                    o.addEventListener("load", function (t) {
                                        console.log("tt load remote image success: ", t);
                                        var n = new cc.Texture2D();
                                        n.initWithElement(o);
                                        var r = new cc.SpriteFrame();
                                        r.setTexture(n), e(r);
                                    }),
                                    o.addEventListener("error", function (t) {
                                        console.log("tt load remote image error: ", t), n(t);
                                    });
                            });
                        }),
                        (e.prototype.setImRankData = function (t) {
                            tt.setImRankData({
                                dataType: t.dataType,
                                value: t.value,
                                priority: t.priority,
                                extra: t.extra,
                                success: function (t) {
                                    console.log("setImRankData success res: " + t);
                                },
                                fail: function (t) {
                                    console.log("setImRankData fail res: " + t.errMsg);
                                },
                            });
                        }),
                        (e.prototype.getImRankData = function () {
                            return new Promise(function (t) {
                                tt.getImRankData({
                                    relationType: "all",
                                    dataType: 0,
                                    rankType: "day",
                                    pageNum: 1,
                                    pageSize: 40,
                                    success: function (e) {
                                        console.log("getImRankData success res: " + e);
                                        var n = {};
                                        (n.items = e.data.items),
                                            (n.self_item = e.data.self_item),
                                            (n.page_num = e.data.page_num),
                                            (n.total_num = e.data.total_num),
                                            (n.self_user_info = e.data.self_user_info),
                                            t(n);
                                    },
                                    fail: function (e) {
                                        t(null), console.log("getImRankData fail res: " + e.errMsg);
                                    },
                                });
                            });
                        }),
                        (e.prototype.checkScene = function () {
                            return new Promise(function (t) {
                                tt.checkScene({
                                    scene: "sidebar",
                                    success: function (e) {
                                        console.log("check scene success: ", e.isExist), t(e.isExist);
                                    },
                                    fail: function (e) {
                                        console.log("check scene fail:", e), t(!1);
                                    },
                                });
                            });
                        }),
                        (e.prototype.navigateToScene = function () {
                            return new Promise(function (t) {
                                tt.navigateToScene({
                                    scene: "sidebar",
                                    success: function () {
                                        console.log("navigate to scene success");
                                    },
                                    fail: function (e) {
                                        console.log("navigate to scene fail: ", e), t(!1);
                                    },
                                }),
                                    tt.onShow(function (e) {
                                        console.log("onshow===", e),
                                            "homepage" == e.launch_from && "sidebar_card" == e.location ? t(!0) : t(!1);
                                    });
                            });
                        }),
                        (e.prototype.createGameClubButton = function () {}),
                        (e.prototype.hideGameClubButton = function () {}),
                        (e.prototype.clear = function () {
                            clearTimeout(this._timeoutFun);
                        }),
                        e
                    );
                })(c);
                n.PlatformTT = s;
                var l = (function (t) {
                    function e() {
                        var e = (null !== t && t.apply(this, arguments)) || this;
                        return (
                            (e._gameRecorder = null),
                            (e._startRecordTime = 0),
                            (e._videoPath = ""),
                            (e._isShare = !1),
                            (e._getUserInfoBtn = null),
                            (e._gameClubButton = null),
                            (e._isRecorderVideo = !1),
                            e
                        );
                    }
                    return (
                        r(e, t),
                        (e.prototype.login = function () {
                            return new Promise(function (t) {
                                wx.login({
                                    success: function (e) {
                                        t(e);
                                    },
                                    fail: function (e) {
                                        t(null), console.log("login\u8c03\u7528\u5931\u8d25", e);
                                    },
                                });
                            });
                        }),
                        (e.prototype.authorize = function (t) {
                            return new Promise(function (e) {
                                var n = "";
                                1 == t
                                    ? (n = "scope.userInfo")
                                    : 2 == t && (n = wx.getFuzzyLocation ? "scope.userFuzzyLocation" : "scope.userLocation"),
                                    wx.getSetting({
                                        success: function (t) {
                                            t.authSetting[n]
                                                ? e(!0)
                                                : wx.authorize({
                                                      scope: n,
                                                      success: function () {
                                                          console.log("authorize OK"), e(!0);
                                                      },
                                                      fail: function (t) {
                                                          e(!1), console.log("authorize\u8c03\u7528\u5931\u8d25", t);
                                                      },
                                                  });
                                        },
                                        fail: function (t) {
                                            e(!1), console.log("authorize\u8c03\u7528\u5931\u8d25", t);
                                        },
                                    });
                            });
                        }),
                        (e.prototype.createUserInfoButton = function (t, e) {
                            var n = this;
                            wx.getSetting({
                                success: function (o) {
                                    var r;
                                    if (!o.authSetting["scope.userInfo"]) {
                                        var i = cc.size(t.width + 10, t.height + 10),
                                            a = cc.view.getFrameSize(),
                                            c = cc.director.getWinSize(),
                                            s = ((0.5 * c.width + t.x - 0.5 * i.width) / c.width) * a.width,
                                            l = ((0.5 * c.height - t.y - 0.5 * i.height) / c.height) * a.height,
                                            u = (i.width / c.width) * a.width,
                                            p = (i.height / c.height) * a.height;
                                        (n._getUserInfoBtn = wx.createUserInfoButton({
                                            type: "text",
                                            text: "",
                                            style: {
                                                left: s,
                                                top: l,
                                                width: u,
                                                height: p,
                                                lineHeight: 40,
                                                backgroundColor: "#00000000",
                                                color: "#ffffff",
                                                textAlign: "center",
                                                fontSize: 16,
                                                borderRadius: 4,
                                            },
                                        })),
                                            n._getUserInfoBtn.onTap(function (t) {
                                                var o, r;
                                                wx.reportEvent("start_click", {
                                                    start_click_count: 1,
                                                }),
                                                    console.log(t),
                                                    t.userInfo &&
                                                        (e(),
                                                        null === (o = n._getUserInfoBtn) || void 0 === o || o.hide(),
                                                        null === (r = n._getUserInfoBtn) || void 0 === r || r.destroy());
                                            }),
                                            null === (r = n._getUserInfoBtn) || void 0 === r || r.show();
                                    }
                                },
                            });
                        }),
                        (e.prototype.hideUserInfoButton = function () {
                            var t, e;
                            null === (t = this._getUserInfoBtn) || void 0 === t || t.hide(),
                                null === (e = this._getUserInfoBtn) || void 0 === e || e.destroy();
                        }),
                        (e.prototype.requirePrivacyAuthorize = function () {
                            return new Promise(function (t) {
                                wx.requirePrivacyAuthorize
                                    ? wx.requirePrivacyAuthorize({
                                          success: function () {
                                              t(!0);
                                          },
                                          fail: function () {
                                              t(!1);
                                          },
                                          complete: function () {},
                                      })
                                    : t(!1);
                            });
                        }),
                        (e.prototype.openSetting = function () {
                            wx.openSetting({});
                        }),
                        (e.prototype.getLocation = function () {
                            return new Promise(function (t) {
                                wx.getFuzzyLocation
                                    ? wx.getFuzzyLocation({
                                          success: function (e) {
                                              console.log("gps===", e), t(e);
                                          },
                                          fail: function (e) {
                                              t(null), console.log("getLocation\u8c03\u7528\u5931\u8d25", e);
                                          },
                                      })
                                    : wx.getLocation({
                                          success: function (e) {
                                              console.log("gps===", e), t(e);
                                          },
                                          fail: function (e) {
                                              t(null), console.log("getLocation\u8c03\u7528\u5931\u8d25", e);
                                          },
                                      });
                            });
                        }),
                        (e.prototype.getUserInfo = function () {
                            var t = this;
                            return new Promise(function (e) {
                                return i(t, void 0, void 0, function () {
                                    return a(this, function () {
                                        return (
                                            wx.getSetting({
                                                success: function (t) {
                                                    t.authSetting["scope.userInfo"]
                                                        ? wx.getUserInfo({
                                                              success: function (t) {
                                                                  e(t.userInfo);
                                                              },
                                                              fail: function () {
                                                                  console.log("getUserInfo \u8c03\u7528\u5931\u8d25"), e(null);
                                                              },
                                                          })
                                                        : e(null);
                                                },
                                                fail: function () {
                                                    console.log("getSetting \u8c03\u7528\u5931\u8d25"), e(null);
                                                },
                                            }),
                                            [2]
                                        );
                                    });
                                });
                            });
                        }),
                        (e.prototype.share = function () {
                            return new Promise(function (t) {
                                wx.shareAppMessage({}),
                                    wx.onShow(function () {
                                        setTimeout(function () {
                                            t(!0);
                                        }, 500);
                                    }),
                                    wx.onHide(function () {});
                            });
                        }),
                        (e.prototype.addShortcut = function () {}),
                        (e.prototype.showRewardedVideoAd = function () {
                            return new Promise(function (t) {
                                t({
                                    isEnded: !0,
                                    error: null,
                                });
                            });
                        }),
                        (e.prototype.startRecorderVideo = function (t) {
                            var e = this;
                            this._gameRecorder || (this._gameRecorder = wx.getGameRecorder()),
                                (this._timeoutFun = Number(
                                    setTimeout(function () {
                                        e.stopRecorderVideo(), t();
                                    }, 299500)
                                )),
                                (this._isRecorderVideo = !0),
                                (this._startRecordTime = new Date().getTime()),
                                this._gameRecorder.start({
                                    duration: 300,
                                });
                        }),
                        (e.prototype.stopRecorderVideo = function () {
                            return i(this, void 0, Promise, function () {
                                var t = this;
                                return a(this, function () {
                                    return [
                                        2,
                                        new Promise(function (e) {
                                            var n;
                                            t._isRecorderVideo
                                                ? (t._isRecorderVideo = !1)
                                                : t._videoPath && "" != t._videoPath && e(!0),
                                                clearTimeout(t._timeoutFun),
                                                null === (n = t._gameRecorder) || void 0 === n || n.stop();
                                        }),
                                    ];
                                });
                            });
                        }),
                        (e.prototype.shareRecordVideo = function () {
                            var t = this;
                            !this._isShare &&
                                this._videoPath &&
                                "" != this._videoPath &&
                                wx.shareAppMessage({
                                    title: "\u4e00\u8d77\u73a9\u5427",
                                    channel: "video",
                                    extra: {
                                        videoopics: [
                                            "#\u4e00\u8d77\u73a9\u5427",
                                            "#\u5feb\u6765\u548c\u6211\u4e00\u8d77\u73a9\u5427!",
                                        ],
                                        hashtag_list: [
                                            "#\u4e00\u8d77\u73a9\u5427",
                                            "#\u5feb\u6765\u548c\u6211\u4e00\u8d77\u73a9\u5427!",
                                        ],
                                        videoPath: this._videoPath,
                                    },
                                    success: function () {
                                        (t._isShare = !1), t.showToast("\u5206\u4eab\u6210\u529f");
                                    },
                                    fail: function () {
                                        (t._isShare = !1), t.showToast("\u5206\u4eab\u5931\u8d25");
                                    },
                                });
                        }),
                        (e.prototype.getRecordState = function () {
                            var t = !1;
                            return this._videoPath && "" != this._videoPath && (t = !0), t || this._isRecorderVideo;
                        }),
                        (e.prototype.showToast = function (t) {
                            wx.showToast({
                                title: t,
                                duration: 1500,
                                success: function () {},
                                fail: function () {},
                            });
                        }),
                        (e.prototype.uploadReportAnalytics = function (t, e) {
                            try {
                                wx.reportEvent(t, e);
                            } catch (n) {
                                console.error(t + "\u4e8b\u4ef6\u4e0a\u4f20\u5931\u8d25\uff01");
                            }
                        }),
                        (e.prototype.vibrateShort = function () {
                            wx.vibrateShort({
                                type: "heavy",
                                success: function () {},
                                fail: function () {},
                            });
                        }),
                        (e.prototype.loadRemoteImage = function (t) {
                            return new Promise(function (e, n) {
                                var o = wx.createImage();
                                (o.src = t),
                                    (o.width = 100),
                                    (o.height = 100),
                                    o.addEventListener("load", function (t) {
                                        console.log("tt load remote image success: ", t);
                                        var n = new cc.Texture2D();
                                        n.initWithElement(o);
                                        var r = new cc.SpriteFrame();
                                        r.setTexture(n), e(r);
                                    }),
                                    o.addEventListener("error", function (t) {
                                        console.log("tt load remote image error: ", t), n(t);
                                    });
                            });
                        }),
                        (e.prototype.setImRankData = function () {}),
                        (e.prototype.getImRankData = function () {
                            return new Promise(function (t) {
                                t(null);
                            });
                        }),
                        (e.prototype.checkScene = function () {
                            return new Promise(function (t) {
                                t(!0);
                            });
                        }),
                        (e.prototype.navigateToScene = function () {
                            return new Promise(function (t) {
                                t(!0);
                            });
                        }),
                        (e.prototype.createGameClubButton = function (t, e) {
                            var n, o;
                            (this._gameClubButton = wx.createGameClubButton({
                                type: "text",
                                icon: "green",
                                text: " ",
                                style: {
                                    left: t.left,
                                    top: t.top,
                                    width: t.width,
                                    height: t.height,
                                },
                            })),
                                null === (n = this._gameClubButton) ||
                                    void 0 === n ||
                                    n.onTap(function (t) {
                                        console.log(t), e();
                                    }),
                                null === (o = this._gameClubButton) || void 0 === o || o.show();
                        }),
                        (e.prototype.hideGameClubButton = function () {
                            var t, e, n;
                            null === (t = this._gameClubButton) || void 0 === t || t.hide(),
                                null === (e = this._gameClubButton) || void 0 === e || e.offTap(),
                                null === (n = this._gameClubButton) || void 0 === n || n.destroy();
                        }),
                        (e.prototype.clear = function () {
                            clearTimeout(this._timeoutFun);
                        }),
                        (e.prototype.compareVersion = function (t, e) {
                            (t = t.split(".")), (e = e.split("."));
                            for (var n = Math.max(t.length, e.length); t.length < n; ) t.push("0");
                            for (; e.length < n; ) e.push("0");
                            for (var o = 0; o < n; o++) {
                                var r = parseInt(t[o]),
                                    i = parseInt(e[o]);
                                if (r > i) return 1;
                                if (r < i) return -1;
                            }
                            return 0;
                        }),
                        e
                    );
                })(c);
                n.PlatformWX = l;
                var u = (function (t) {
                    function e() {
                        return (null !== t && t.apply(this, arguments)) || this;
                    }
                    return (
                        r(e, t),
                        (e.prototype.login = function () {
                            return new Promise(function (t) {
                                t(null);
                            });
                        }),
                        (e.prototype.authorize = function () {
                            return new Promise(function (t) {
                                t(!0);
                            });
                        }),
                        (e.prototype.createUserInfoButton = function () {}),
                        (e.prototype.hideUserInfoButton = function () {}),
                        (e.prototype.requirePrivacyAuthorize = function () {
                            return new Promise(function (t) {
                                t(!0);
                            });
                        }),
                        (e.prototype.openSetting = function () {}),
                        (e.prototype.getUserInfo = function () {
                            return new Promise(function (t) {
                                t(null);
                            });
                        }),
                        (e.prototype.getLocation = function () {
                            return new Promise(function (t) {
                                t(null);
                            });
                        }),
                        (e.prototype.addShortcut = function () {}),
                        (e.prototype.share = function () {
                            return new Promise(function (t) {
                                t(!0);
                            });
                        }),
                        (e.prototype.showRewardedVideoAd = function () {
                            return new Promise(function (t) {
                                t({
                                    isEnded: !0,
                                    error: null,
                                });
                            });
                        }),
                        (e.prototype.startRecorderVideo = function () {}),
                        (e.prototype.stopRecorderVideo = function () {
                            return new Promise(function (t) {
                                t(!0);
                            });
                        }),
                        (e.prototype.shareRecordVideo = function () {}),
                        (e.prototype.getRecordState = function () {
                            return !0;
                        }),
                        (e.prototype.uploadReportAnalytics = function () {}),
                        (e.prototype.vibrateShort = function () {}),
                        (e.prototype.loadRemoteImage = function () {
                            return new Promise(function (t) {
                                t(new cc.SpriteFrame());
                            });
                        }),
                        (e.prototype.setImRankData = function () {}),
                        (e.prototype.getImRankData = function () {
                            return new Promise(function (t) {
                                t(null);
                            });
                        }),
                        (e.prototype.checkScene = function () {
                            return new Promise(function (t) {
                                t(!0);
                            });
                        }),
                        (e.prototype.navigateToScene = function () {
                            return new Promise(function (t) {
                                t(!0);
                            });
                        }),
                        (e.prototype.createGameClubButton = function () {}),
                        (e.prototype.hideGameClubButton = function () {}),
                        (e.prototype.clear = function () {}),
                        e
                    );
                })(c);
                (n.WebPlatform = u), cc._RF.pop();
            },
            {
                "../GD/manage/GDAudioMgr": "GDAudioMgr",
            },
        ],
        PlayerHpWindow: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "08d86eY2gZMfJJcu3cZ0mUn", "PlayerHpWindow");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        },
                    a =
                        (this && this.__awaiter) ||
                        function (t, e, n, o) {
                            return new (n || (n = Promise))(function (r, i) {
                                function a(t) {
                                    try {
                                        s(o.next(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function c(t) {
                                    try {
                                        s(o.throw(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function s(t) {
                                    var e;
                                    t.done
                                        ? r(t.value)
                                        : ((e = t.value),
                                          e instanceof n
                                              ? e
                                              : new n(function (t) {
                                                    t(e);
                                                })).then(a, c);
                                }
                                s((o = o.apply(t, e || [])).next());
                            });
                        },
                    c =
                        (this && this.__generator) ||
                        function (t, e) {
                            var n,
                                o,
                                r,
                                i,
                                a = {
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
                                    return s([t, e]);
                                };
                            }
                            function s(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a; )
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
                                                    a.label++,
                                                    {
                                                        value: i[1],
                                                        done: !1,
                                                    }
                                                );
                                            case 5:
                                                a.label++, (o = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = a.ops.pop()), a.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(r = (r = a.trys).length > 0 && r[r.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                    a.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && a.label < r[1]) {
                                                    (a.label = r[1]), (r = i);
                                                    break;
                                                }
                                                if (r && a.label < r[2]) {
                                                    (a.label = r[2]), a.ops.push(i);
                                                    break;
                                                }
                                                r[2] && a.ops.pop(), a.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, a);
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
                });
                var s = t("../../GD/manage/GDWindowMgr"),
                    l = t("../../GD/tools/GDUtils"),
                    u = t("../../GD/ui/GDButton"),
                    p = t("../../platform/Platform"),
                    f = t("../App"),
                    h = t("../com/FloatTipItem"),
                    d = t("../define/GameEventDefine"),
                    y = t("../domain/UserData"),
                    v = t("../PlayerHp"),
                    _ = cc._decorator,
                    g = _.ccclass,
                    m = _.property,
                    b = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (
                                (e.closeBtn = null),
                                (e.adv1Btn = null),
                                (e.adv3Btn = null),
                                (e.curHpLbl = null),
                                (e.timeLblList = []),
                                (e.advCountLbl = null),
                                (e.advHpCount = 0),
                                e
                            );
                        }
                        return (
                            r(e, t),
                            (e.prototype.start = function () {
                                this.closeBtn.addClickListener(this.close, this),
                                    this.adv1Btn.addClickListener(this.onClickAdvBuyOnce, this),
                                    this.adv3Btn.addClickListener(this.onClickAdvBuy, this);
                            }),
                            (e.prototype.onOpen = function () {
                                (this.advHpCount = 0), this.updateAdvCount(), this.updateCurHp(), (this.node.active = !0);
                            }),
                            (e.prototype.updateAdvCount = function () {
                                this.advCountLbl.string = this.advHpCount + "/3";
                            }),
                            (e.prototype.updateCurHp = function () {
                                this.adv1Btn.setIntractable(v.playerHp.hp < 5);
                                var t = y.UserData.instance.playerHp;
                                t.infinity && l.GDUtils.isToDay(t.time)
                                    ? (this.curHpLbl.node.active = !1)
                                    : (this.curHpLbl.string = v.playerHp.hp + "/5");
                            }),
                            (e.prototype.onClickAdvBuyOnce = function () {
                                return a(this, void 0, void 0, function () {
                                    var t;
                                    return c(this, function (e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, p.Platform.current.showRewardedVideoAd(f.app.getAd)];
                                            case 1:
                                                return (
                                                    (t = e.sent()).isEnded
                                                        ? (v.playerHp.addHp(1),
                                                          this.updateCurHp(),
                                                          h.FloatTipItem.show(
                                                              "\u5df2\u6210\u529f\u83b7\u5f971\u70b9\u4f53\u529b!",
                                                              3
                                                          ))
                                                        : h.FloatTipItem.show("\u89c2\u770b\u5b8c\u89c6\u9891\u83b7\u5f97"),
                                                    f.app.checkVideoReport(t.isEnded),
                                                    [2]
                                                );
                                        }
                                    });
                                });
                            }),
                            (e.prototype.onClickAdvBuy = function () {
                                return a(this, void 0, void 0, function () {
                                    var t;
                                    return c(this, function (e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, p.Platform.current.showRewardedVideoAd(f.app.getAd)];
                                            case 1:
                                                return (
                                                    (t = e.sent()).isEnded
                                                        ? (this.advHpCount++,
                                                          3 == this.advHpCount
                                                              ? (v.playerHp.clearHPTimedTask(),
                                                                y.UserData.instance.setPlayerHp(
                                                                    v.playerHp.hp,
                                                                    1,
                                                                    new Date().getTime()
                                                                ),
                                                                d.gameEvent.emit(d.GameEventDefine.PlayerHpUpdateEvent),
                                                                h.FloatTipItem.show(
                                                                    "\u5df2\u6210\u529f\u83b7\u5f97\u65e0\u9650\u4f53\u529b!",
                                                                    3
                                                                ))
                                                              : h.FloatTipItem.show(
                                                                    "\u5df2\u6210\u529f\u89c2\u770b1\u6b21\u89c6\u9891!",
                                                                    3
                                                                ),
                                                          this.updateCurHp(),
                                                          this.updateAdvCount())
                                                        : h.FloatTipItem.show("\u89c2\u770b\u5b8c\u89c6\u9891\u83b7\u5f97"),
                                                    f.app.checkVideoReport(t.isEnded),
                                                    [2]
                                                );
                                        }
                                    });
                                });
                            }),
                            (e.prototype.update = function () {
                                for (var t = v.playerHp.getTime().replace(":", "").split(""), e = t.length - 1; e > -1; e--) {
                                    var n = this.timeLblList[e],
                                        o = t[e];
                                    n.string = "" + o;
                                }
                            }),
                            i(
                                [
                                    m({
                                        type: u.GDButton,
                                        tooltip: "\u5173\u95ed",
                                    }),
                                ],
                                e.prototype,
                                "closeBtn",
                                void 0
                            ),
                            i(
                                [
                                    m({
                                        type: u.GDButton,
                                        tooltip: "\u5e7f\u544a\u8d2d\u4e701",
                                    }),
                                ],
                                e.prototype,
                                "adv1Btn",
                                void 0
                            ),
                            i(
                                [
                                    m({
                                        type: u.GDButton,
                                        tooltip: "\u5e7f\u544a\u8d2d\u4e703",
                                    }),
                                ],
                                e.prototype,
                                "adv3Btn",
                                void 0
                            ),
                            i(
                                [
                                    m({
                                        type: cc.Label,
                                        tooltip: "\u5f53\u524d\u4f53\u529b\u503c",
                                    }),
                                ],
                                e.prototype,
                                "curHpLbl",
                                void 0
                            ),
                            i(
                                [
                                    m({
                                        type: cc.Label,
                                        tooltip: "\u5012\u8ba1\u65f61",
                                    }),
                                ],
                                e.prototype,
                                "timeLblList",
                                void 0
                            ),
                            i(
                                [
                                    m({
                                        type: cc.Label,
                                        tooltip: "\u5f53\u524d\u5e7f\u544a\u6b21\u6570",
                                    }),
                                ],
                                e.prototype,
                                "advCountLbl",
                                void 0
                            ),
                            i([g], e)
                        );
                    })(s.GDWindow);
                (n.default = b), cc._RF.pop();
            },
            {
                "../../GD/manage/GDWindowMgr": "GDWindowMgr",
                "../../GD/tools/GDUtils": "GDUtils",
                "../../GD/ui/GDButton": "GDButton",
                "../../platform/Platform": "Platform",
                "../App": "App",
                "../PlayerHp": "PlayerHp",
                "../com/FloatTipItem": "FloatTipItem",
                "../define/GameEventDefine": "GameEventDefine",
                "../domain/UserData": "UserData",
            },
        ],
        PlayerHp: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "e99c6jy431O/4zzh1MVds8t", "PlayerHp"),
                    Object.defineProperty(n, "__esModule", {
                        value: !0,
                    }),
                    (n.playerHp = n.PlayerHP = void 0);
                var o = t("../GD/tools/GDUtils"),
                    r = t("./define/GameEventDefine"),
                    i = t("./domain/UserData"),
                    a = 600,
                    c = (function () {
                        function t() {
                            (this._hp = 0), (this._maxHp = 5), (this._time = a), (this.event = new cc.EventTarget());
                        }
                        return (
                            Object.defineProperty(t.prototype, "hp", {
                                get: function () {
                                    return this._hp > this._maxHp ? this._maxHp : this._hp;
                                },
                                set: function (t) {
                                    t > this._maxHp && (t = this._maxHp), (this._hp = t);
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (t.prototype.init = function () {
                                var t = i.UserData.instance.playerHp,
                                    e = o.GDUtils.isToDay(t.time);
                                if (!t.infinity || !e) {
                                    if (t) {
                                        var n = t.hp,
                                            r = new Date().getTime(),
                                            a = t.time;
                                        if (a) {
                                            var c = (r - a) / 1e3;
                                            (n += Math.floor(c / 600)), (this._time = Math.floor(600 - (c % 600)));
                                        }
                                        this.hp = n;
                                    }
                                    this.startHPTimedTask();
                                }
                            }),
                            (t.prototype.addHp = function (t, e) {
                                (this._hp += t),
                                    this._hp >= this._maxHp && ((this._hp = this._maxHp), this.clearHPTimedTask()),
                                    this.setLastTime(e),
                                    r.gameEvent.emit(r.GameEventDefine.PlayerHpUpdateEvent);
                            }),
                            (t.prototype.subtractHp = function (t) {
                                (this._hp -= t),
                                    this._hp < this._maxHp
                                        ? (this.startHPTimedTask(), this.setLastTime(new Date().getTime()))
                                        : this.setLastTime(),
                                    r.gameEvent.emit(r.GameEventDefine.PlayerHpUpdateEvent);
                            }),
                            (t.prototype.startHPTimedTask = function () {
                                var t = this,
                                    e = i.UserData.instance.playerHp;
                                (e.infinity && o.GDUtils.isToDay(e.time)) ||
                                    this._hp >= this._maxHp ||
                                    this._interval ||
                                    (this._interval = Number(
                                        setInterval(function () {
                                            t._time--, t._time < 0 && ((t._time = a), t.addHp(1, new Date().getTime()));
                                        }, 1e3)
                                    ));
                            }),
                            (t.prototype.clearHPTimedTask = function () {
                                clearInterval(this._interval), (this._time = a), (this._interval = 0);
                            }),
                            (t.prototype.getTime = function () {
                                if (this.hp == this._maxHp) return "00:00";
                                var t = Math.floor(this._time / 60),
                                    e = this._time % 60;
                                return String(t).padStart(2, "0") + ":" + String(e).padStart(2, "0");
                            }),
                            (t.prototype.setLastTime = function (t) {
                                var e = i.UserData.instance.playerHp;
                                e.infinity && o.GDUtils.isToDay(e.time)
                                    ? i.UserData.instance.setPlayerHp(this._hp, e.infinity, t)
                                    : i.UserData.instance.setPlayerHp(this._hp, 0, t);
                            }),
                            t
                        );
                    })();
                (n.PlayerHP = c), (n.playerHp = new c()), cc._RF.pop();
            },
            {
                "../GD/tools/GDUtils": "GDUtils",
                "./define/GameEventDefine": "GameEventDefine",
                "./domain/UserData": "UserData",
            },
        ],
        RankLoseItem: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "03e2fOd5XhCI7ddlLTo4fzc", "RankLoseItem");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                });
                var a = t("../../GD/manage/GDResMgr"),
                    c = t("../domain/UserData"),
                    s = cc._decorator,
                    l = s.ccclass,
                    u = s.property,
                    p = [
                        "\u6700\u5f3a\u738b\u8005",
                        "\u5b97\u5e08",
                        "\u5927\u5e08",
                        "\u94bb\u77f3",
                        "\u94c2\u91d1",
                        "\u9ec4\u91d1",
                        "\u767d\u94f6",
                        "\u9752\u94dc",
                        "\u9ed1\u94c1",
                    ],
                    f = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (e.curBg = null), (e.bgSprite = null), (e.rankLbl = null), (e.countLbl = null), e;
                        }
                        return (
                            r(e, t),
                            (e.prototype.showRankInfo = function (t, e) {
                                var n = c.UserData.instance.rankData,
                                    o = "battle_js_lbt1",
                                    r = "";
                                if (
                                    (t == n.lastRank && ((o = "battle_js_lbt2"), (r = "(\u4e0a\u5c40\u6392\u540d)")),
                                    e && ((o = "battle_js_lbt3"), (r = "(\u672c\u5c40\u6392\u540d)")),
                                    (this.rankLbl.string = p[9 - t] + "NO." + (9 - t + 1) + " " + r),
                                    9 != t)
                                ) {
                                    (this.curBg.active = e), console.log("\u6392\u540d==", "" + t, n.rankMap[t]);
                                    var i = n.rankMap[t] || 0;
                                    this.countLbl.string = i + "\u6b21";
                                    var s = a.GDResMgr.get({
                                        bundlePath: "image",
                                        resPath: "window/gameWindow/" + o,
                                    });
                                    s && (this.bgSprite.spriteFrame = new cc.SpriteFrame(s));
                                }
                            }),
                            i(
                                [
                                    u({
                                        type: cc.Node,
                                        tooltip: "\u5f53\u524d\u6bb5\u4f4d\u5e95",
                                    }),
                                ],
                                e.prototype,
                                "curBg",
                                void 0
                            ),
                            i(
                                [
                                    u({
                                        type: cc.Sprite,
                                        tooltip: "\u5e95\u680f",
                                    }),
                                ],
                                e.prototype,
                                "bgSprite",
                                void 0
                            ),
                            i(
                                [
                                    u({
                                        type: cc.Label,
                                        tooltip: "\u6392\u540d",
                                    }),
                                ],
                                e.prototype,
                                "rankLbl",
                                void 0
                            ),
                            i(
                                [
                                    u({
                                        type: cc.Label,
                                        tooltip: "\u6b21\u6570",
                                    }),
                                ],
                                e.prototype,
                                "countLbl",
                                void 0
                            ),
                            i([l], e)
                        );
                    })(cc.Component);
                (n.default = f), cc._RF.pop();
            },
            {
                "../../GD/manage/GDResMgr": "GDResMgr",
                "../domain/UserData": "UserData",
            },
        ],
        RankWindowItem: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "8fe6f76LHpIlrhbY82WCO9D", "RankWindowItem");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                });
                var a = t("../../GD/manage/GDResMgr"),
                    c = t("../GameType"),
                    s = t("../domain/UserData"),
                    l = cc._decorator,
                    u = l.ccclass,
                    p = l.property,
                    f = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (e.rankBgSprite = null), (e.rankLbl = null), (e.nameLbl = null), (e.countLbl = null), e;
                        }
                        return (
                            r(e, t),
                            (e.prototype.showRankItem = function (t, e) {
                                var n = new Date().setHours(0, 0, 0, 0),
                                    o = (new Date().getTime() - n) / 1e3 / c.FakeRankTime[t];
                                o = parseInt(o.toString());
                                var r = t + 1;
                                if (r < 4) {
                                    var i = a.GDResMgr.get({
                                        bundlePath: "image",
                                        resPath: "rankWindow/rank_icon" + r,
                                    });
                                    (this.rankBgSprite.spriteFrame = new cc.SpriteFrame(i)),
                                        (this.rankBgSprite.node.active = !0),
                                        (this.rankLbl.string = "");
                                } else (this.rankBgSprite.node.active = !1), (this.rankLbl.string = "" + r);
                                (this.nameLbl.string = c.LocationList[e]),
                                    (this.countLbl.string = "\u901a\u5173 " + o + " \u4eba");
                            }),
                            (e.prototype.showMe = function () {
                                var t = s.UserData.instance.dayData,
                                    e = 0;
                                t.forEach(function (t) {
                                    t.count && e++;
                                }),
                                    e || (this.rankLbl.string = "\u672a\u4e0a\u699c");
                            }),
                            i(
                                [
                                    p({
                                        type: cc.Sprite,
                                        tooltip: "\u540d\u6b21\u56fe",
                                    }),
                                ],
                                e.prototype,
                                "rankBgSprite",
                                void 0
                            ),
                            i(
                                [
                                    p({
                                        type: cc.Label,
                                        tooltip: "\u540d\u6b21",
                                    }),
                                ],
                                e.prototype,
                                "rankLbl",
                                void 0
                            ),
                            i(
                                [
                                    p({
                                        type: cc.Label,
                                        tooltip: "\u5730\u533a | \u4e2a\u4eba",
                                    }),
                                ],
                                e.prototype,
                                "nameLbl",
                                void 0
                            ),
                            i(
                                [
                                    p({
                                        type: cc.Label,
                                        tooltip: "\u8ba1\u6570",
                                    }),
                                ],
                                e.prototype,
                                "countLbl",
                                void 0
                            ),
                            i([u], e)
                        );
                    })(cc.Component);
                (n.default = f), cc._RF.pop();
            },
            {
                "../../GD/manage/GDResMgr": "GDResMgr",
                "../GameType": "GameType",
                "../domain/UserData": "UserData",
            },
        ],
        RectBounding: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "a6093F/auFA3L8s1hRyGrRQ", "RectBounding");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.RectBounding = void 0);
                var a = t("../../../../GD/tools/GDCCUtils"),
                    c = t("../../../../GD/tools/GDDraw"),
                    s = t("./Bounding"),
                    l = cc._decorator,
                    u = l.ccclass,
                    p =
                        (l.property,
                        (function (t) {
                            function e() {
                                return (null !== t && t.apply(this, arguments)) || this;
                            }
                            return (
                                r(e, t),
                                (e.prototype.checkHit = function () {
                                    return !0;
                                }),
                                (e.prototype.debug = function () {
                                    var t = cc.mat4();
                                    this.node.getWorldMatrix(t);
                                    var e = new cc.Vec3();
                                    t.getScale(e);
                                    var n = a.GDCCUtils.convertToCanvasSpaceAR(this.node),
                                        o = this.node.width * e.x,
                                        r = this.node.height * e.y,
                                        i = new cc.Rect(n.x - 0.5 * o, n.y - 0.5 * r, o, r);
                                    c.GDDraw.drawAABB(i);
                                }),
                                i([u], e)
                            );
                        })(s.Bounding));
                (n.RectBounding = p), cc._RF.pop();
            },
            {
                "../../../../GD/tools/GDCCUtils": "GDCCUtils",
                "../../../../GD/tools/GDDraw": "GDDraw",
                "./Bounding": "Bounding",
            },
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.Direction = void 0);
                var a,
                    c = cc._decorator,
                    s = c.ccclass,
                    l = c.property;
                (function (t) {
                    (t[(t.TOP_TO_BOTTOM = 1)] = "TOP_TO_BOTTOM"), (t[(t.BOTTOM_TO_TOP = 2)] = "BOTTOM_TO_TOP");
                })((a = n.Direction || (n.Direction = {})));
                var u = (function (t) {
                    function e() {
                        var e = (null !== t && t.apply(this, arguments)) || this;
                        return (
                            (e.itemPrefab = null),
                            (e.direction = a.TOP_TO_BOTTOM),
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
                                (t = this.direction == a.TOP_TO_BOTTOM ? t : 1 - t),
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
                                this.direction == a.TOP_TO_BOTTOM && (i = -i);
                                var c = cc.v2((-this._viewW >> 1) + (this._itemW >> 1) + (r >> 1), i),
                                    s = this._viewRow * this._viewCol;
                                cc.log("\u5b9e\u4f8b\u5316\u6570\u91cf:" + s);
                                var l = 0;
                                p(s, function (o) {
                                    if (cc.isValid(n)) {
                                        var r = cc.instantiate(t.itemPrefab);
                                        r.parent = n;
                                        var i = (o % t._viewCol) * t._itemW,
                                            u = Math.floor(o / t._viewCol) * t._itemH + (t.spacing.y >> 1);
                                        t.direction == a.TOP_TO_BOTTOM ? (u = -u) : r.setSiblingIndex(0);
                                        var p = c.add(cc.v2(i, u));
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
                                            ++l == s && (e.enabled = !0);
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
                                        s = this._viewH >> 1,
                                        l = this._itemH >> 1,
                                        u = this._itemsUUIDToIndex[i.uuid],
                                        p = u;
                                    this.direction == a.TOP_TO_BOTTOM
                                        ? n
                                            ? c.y <= -(s + l) && ((i.y += this._viewRow * this._itemH), (p = u - o))
                                            : c.y >= s + l && ((i.y -= this._viewRow * this._itemH), (p = u + o))
                                        : n
                                        ? c.y <= -(s + l) &&
                                          ((i.y += this._viewRow * this._itemH), i.setSiblingIndex(0), (p = u + o))
                                        : c.y >= s + l &&
                                          ((i.y -= this._viewRow * this._itemH), i.setSiblingIndex(1), (p = u - o)),
                                        p != u && this._updateItem(p, i),
                                        (this._itemsUUIDToIndex[i.uuid] = p);
                                }
                        }),
                        i([l(cc.Prefab)], e.prototype, "itemPrefab", void 0),
                        i(
                            [
                                l({
                                    type: cc.Enum(a),
                                }),
                            ],
                            e.prototype,
                            "direction",
                            void 0
                        ),
                        i([l(cc.Vec2)], e.prototype, "spacing", void 0),
                        i([s], e)
                    );
                })(cc.Component);
                function p(t, e, n, o) {
                    void 0 === n && (n = 16), void 0 === o && (o = 0);
                    for (var r = t, i = new Date().getTime(), a = 0; a < r && !(o >= r); ++a) {
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
                (n.default = u),
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
        SettingWindow: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "59429e40WlKzaXgkyWLccjh", "SettingWindow");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.SettingWindow = void 0);
                var a = t("../../GD/manage/GDAudioMgr"),
                    c = t("../../GD/manage/GDWindowMgr"),
                    s = t("../../GD/ui/GDButton"),
                    l = t("../../GD/ui/GDUIListener"),
                    u = t("../../platform/Analytics"),
                    p = t("../App"),
                    f = t("../define/AddressDefine"),
                    h = t("../define/AudioInfoDefine"),
                    d = t("../domain/GameCfg"),
                    y = cc._decorator,
                    v = y.ccclass,
                    _ = y.property,
                    g = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (
                                (e.soundNode = null),
                                (e.soundOpenNode = null),
                                (e.soundCloseNode = null),
                                (e.musicNode = null),
                                (e.musicOpenNode = null),
                                (e.musicCloseNode = null),
                                (e.vibrateNode = null),
                                (e.vibrateOpenNode = null),
                                (e.vibrateCloseNode = null),
                                (e.closeBtn = null),
                                (e.blankCloseBtn = null),
                                (e.continueBtn = null),
                                (e.backBtn = null),
                                (e.againBtn = null),
                                e
                            );
                        }
                        return (
                            r(e, t),
                            (e.prototype.start = function () {
                                var t = this;
                                this.closeBtn.addClickListener(this.clickContinueBtn, this),
                                    this.blankCloseBtn.addClickListener(this.clickContinueBtn, this),
                                    this.continueBtn.addClickListener(this.clickContinueBtn, this),
                                    this.backBtn.addClickListener(this.clickGoBack, this),
                                    this.againBtn.addClickListener(this.clickAgain, this),
                                    l.GDUIListener.get(this.soundNode).addClickListener(function () {
                                        t.switchSound(!a.GDAudioMgr.instance.openSound);
                                    }),
                                    l.GDUIListener.get(this.musicNode).addClickListener(function () {
                                        t.switchMusic(!a.GDAudioMgr.instance.openMusic);
                                    }),
                                    l.GDUIListener.get(this.vibrateNode).addClickListener(function () {
                                        t.switchVibrate(!d.GameCfg.instance.get("openVibrate"));
                                    }),
                                    this.closeBtn.addClickListener(this.close, this);
                            }),
                            (e.prototype.clickAgain = function () {
                                var t;
                                p.app.subtractHp()
                                    ? (u.Analytics.uploadClickPauseAgain(),
                                      null === (t = this.listener) || void 0 === t || t.tryAgain(this))
                                    : c.GDWindowMgr.instance.openWindow(f.PrefabAddressDefine.playerHpWindow);
                            }),
                            (e.prototype.clickGoBack = function () {
                                u.Analytics.uploadClickPauseGoBack(), this.close();
                            }),
                            (e.prototype.clickContinueBtn = function () {
                                u.Analytics.uploadClickPauseContinue(), this.quit();
                            }),
                            (e.prototype.onOpen = function () {
                                var t, e, n;
                                this.setSoundState(d.GameCfg.instance.get("openSound")),
                                    this.setMusicState(d.GameCfg.instance.get("openMusic")),
                                    this.setVibrateState(d.GameCfg.instance.get("openVibrate")),
                                    (this.continueBtn.node.active =
                                        null === (t = this.listener) || void 0 === t ? void 0 : t.isShowBtn),
                                    (this.backBtn.node.active =
                                        null === (e = this.listener) || void 0 === e ? void 0 : e.isShowBtn),
                                    (this.againBtn.node.active =
                                        null === (n = this.listener) || void 0 === n ? void 0 : n.isShowBtn),
                                    (this.node.active = !0);
                            }),
                            (e.prototype.setSoundState = function (t) {
                                (this.soundOpenNode.active = !1),
                                    (this.soundCloseNode.active = !1),
                                    t
                                        ? ((this.soundOpenNode.active = !0), (a.GDAudioMgr.instance.openSound = !0))
                                        : ((this.soundCloseNode.active = !0), (a.GDAudioMgr.instance.openSound = !1));
                            }),
                            (e.prototype.switchSound = function (t) {
                                t && a.GDAudioMgr.instance.playOneShot(h.AudioInfoDefine.click),
                                    this.setSoundState(t),
                                    d.GameCfg.instance.set("openSound", t);
                            }),
                            (e.prototype.setMusicState = function (t) {
                                (this.musicOpenNode.active = !1),
                                    (this.musicCloseNode.active = !1),
                                    t
                                        ? ((this.musicOpenNode.active = !0), (a.GDAudioMgr.instance.openMusic = !0))
                                        : ((this.musicCloseNode.active = !0), (a.GDAudioMgr.instance.openMusic = !1));
                            }),
                            (e.prototype.switchMusic = function (t) {
                                a.GDAudioMgr.instance.playOneShot(h.AudioInfoDefine.click),
                                    this.setMusicState(t),
                                    d.GameCfg.instance.set("openMusic", t);
                            }),
                            (e.prototype.setVibrateState = function (t) {
                                (this.vibrateOpenNode.active = !1),
                                    (this.vibrateCloseNode.active = !1),
                                    t ? (this.vibrateOpenNode.active = !0) : (this.vibrateCloseNode.active = !0);
                            }),
                            (e.prototype.switchVibrate = function (t) {
                                a.GDAudioMgr.instance.playOneShot(h.AudioInfoDefine.click),
                                    this.setVibrateState(t),
                                    d.GameCfg.instance.set("openVibrate", t);
                            }),
                            i([_(cc.Node)], e.prototype, "soundNode", void 0),
                            i([_(cc.Node)], e.prototype, "soundOpenNode", void 0),
                            i([_(cc.Node)], e.prototype, "soundCloseNode", void 0),
                            i([_(cc.Node)], e.prototype, "musicNode", void 0),
                            i([_(cc.Node)], e.prototype, "musicOpenNode", void 0),
                            i([_(cc.Node)], e.prototype, "musicCloseNode", void 0),
                            i([_(cc.Node)], e.prototype, "vibrateNode", void 0),
                            i([_(cc.Node)], e.prototype, "vibrateOpenNode", void 0),
                            i([_(cc.Node)], e.prototype, "vibrateCloseNode", void 0),
                            i([_(s.GDButton)], e.prototype, "closeBtn", void 0),
                            i([_(s.GDButton)], e.prototype, "blankCloseBtn", void 0),
                            i([_(s.GDButton)], e.prototype, "continueBtn", void 0),
                            i([_(s.GDButton)], e.prototype, "backBtn", void 0),
                            i([_(s.GDButton)], e.prototype, "againBtn", void 0),
                            i([v], e)
                        );
                    })(c.GDWindow);
                (n.SettingWindow = g), cc._RF.pop();
            },
            {
                "../../GD/manage/GDAudioMgr": "GDAudioMgr",
                "../../GD/manage/GDWindowMgr": "GDWindowMgr",
                "../../GD/ui/GDButton": "GDButton",
                "../../GD/ui/GDUIListener": "GDUIListener",
                "../../platform/Analytics": "Analytics",
                "../App": "App",
                "../define/AddressDefine": "AddressDefine",
                "../define/AudioInfoDefine": "AudioInfoDefine",
                "../domain/GameCfg": "GameCfg",
            },
        ],
        ShareWindow: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "467a41/49VPc72xpOFJ/EcL", "ShareWindow");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        },
                    a =
                        (this && this.__awaiter) ||
                        function (t, e, n, o) {
                            return new (n || (n = Promise))(function (r, i) {
                                function a(t) {
                                    try {
                                        s(o.next(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function c(t) {
                                    try {
                                        s(o.throw(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function s(t) {
                                    var e;
                                    t.done
                                        ? r(t.value)
                                        : ((e = t.value),
                                          e instanceof n
                                              ? e
                                              : new n(function (t) {
                                                    t(e);
                                                })).then(a, c);
                                }
                                s((o = o.apply(t, e || [])).next());
                            });
                        },
                    c =
                        (this && this.__generator) ||
                        function (t, e) {
                            var n,
                                o,
                                r,
                                i,
                                a = {
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
                                    return s([t, e]);
                                };
                            }
                            function s(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a; )
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
                                                    a.label++,
                                                    {
                                                        value: i[1],
                                                        done: !1,
                                                    }
                                                );
                                            case 5:
                                                a.label++, (o = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = a.ops.pop()), a.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(r = (r = a.trys).length > 0 && r[r.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                    a.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && a.label < r[1]) {
                                                    (a.label = r[1]), (r = i);
                                                    break;
                                                }
                                                if (r && a.label < r[2]) {
                                                    (a.label = r[2]), a.ops.push(i);
                                                    break;
                                                }
                                                r[2] && a.ops.pop(), a.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, a);
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
                });
                var s = t("../../GD/manage/GDWindowMgr"),
                    l = t("../../GD/ui/GDButton"),
                    u = t("../../platform/Platform"),
                    p = t("../com/FloatTipItem"),
                    f = t("../domain/UserData"),
                    h = cc._decorator,
                    d = h.ccclass,
                    y = h.property,
                    v = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (e.closeBtn = null), (e.blankCloseBtn = null), (e.shareBtn = null), (e.bar = null), e;
                        }
                        return (
                            r(e, t),
                            (e.prototype.start = function () {
                                this.blankCloseBtn.addClickListener(this.close, this),
                                    this.closeBtn.addClickListener(this.close, this),
                                    this.shareBtn.addClickListener(this.onClickShare, this);
                            }),
                            (e.prototype.onOpen = function () {
                                this.node.active = !0;
                            }),
                            (e.prototype.onClickShare = function () {
                                return a(this, void 0, void 0, function () {
                                    return c(this, function (t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, u.Platform.current.share()];
                                            case 1:
                                                return (
                                                    t.sent()
                                                        ? ((this.bar.progress = 1),
                                                          f.UserData.instance.updateProp(4, 2),
                                                          f.UserData.instance.setShareCount(1),
                                                          p.FloatTipItem.show("\u83b7\u53d6\u6210\u529f", 2))
                                                        : p.FloatTipItem.show("\u5206\u4eab\u5931\u8d25!", 2),
                                                    [2]
                                                );
                                        }
                                    });
                                });
                            }),
                            i(
                                [
                                    y({
                                        type: l.GDButton,
                                        tooltip: "\u5173\u95ed",
                                    }),
                                ],
                                e.prototype,
                                "closeBtn",
                                void 0
                            ),
                            i(
                                [
                                    y({
                                        type: l.GDButton,
                                        tooltip: "\u80cc\u666f\u5173\u95ed",
                                    }),
                                ],
                                e.prototype,
                                "blankCloseBtn",
                                void 0
                            ),
                            i(
                                [
                                    y({
                                        type: l.GDButton,
                                        tooltip: "\u80cc\u666f\u5173\u95ed",
                                    }),
                                ],
                                e.prototype,
                                "shareBtn",
                                void 0
                            ),
                            i(
                                [
                                    y({
                                        type: cc.ProgressBar,
                                        tooltip: "\u8fdb\u5ea6\u6761",
                                    }),
                                ],
                                e.prototype,
                                "bar",
                                void 0
                            ),
                            i([d], e)
                        );
                    })(s.GDWindow);
                (n.default = v), cc._RF.pop();
            },
            {
                "../../GD/manage/GDWindowMgr": "GDWindowMgr",
                "../../GD/ui/GDButton": "GDButton",
                "../../platform/Platform": "Platform",
                "../com/FloatTipItem": "FloatTipItem",
                "../domain/UserData": "UserData",
            },
        ],
        SignInTableItem: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "ed616SjK6tFB6LVZSJbKaBk", "SignInTableItem"),
                    Object.defineProperty(n, "__esModule", {
                        value: !0,
                    }),
                    (n.SignInTableItem = void 0);
                var o = (function () {
                    function t() {}
                    return (
                        (t.prototype.key = function () {
                            return this.id;
                        }),
                        t
                    );
                })();
                (n.SignInTableItem = o), cc._RF.pop();
            },
            {},
        ],
        SigninItem: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "98909SHuaVHqbwiqHIKnCVR", "SigninItem");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                });
                var a = t("../../GD/manage/GDResMgr"),
                    c = cc._decorator,
                    s = c.ccclass,
                    l = c.property,
                    u = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (
                                (e.bgSprite = null),
                                (e.goldLbl = null),
                                (e.goldSprite = null),
                                (e.skinSprite = null),
                                (e.getState = null),
                                (e.waitGetNode = null),
                                (e.dayLbl = null),
                                (e.bgIndex = 1),
                                e
                            );
                        }
                        return (
                            r(e, t),
                            (e.prototype.showItem = function (t) {
                                if (((this.goldLbl.node.active = t.count > 0), (this.goldLbl.string = "x" + t.count), t.propId)) {
                                    var e = a.GDResMgr.get({
                                        bundlePath: "image",
                                        resPath: "icon/item_icon" + t.propId,
                                    });
                                    this.skinSprite.spriteFrame = new cc.SpriteFrame(e);
                                }
                                (this.skinSprite.node.active = t.propId > 0), (this.goldSprite.node.active = !1);
                            }),
                            (e.prototype.updateState = function (t) {
                                this.getState.active = t;
                            }),
                            (e.prototype.updateWaitGetState = function () {
                                this.waitGetNode.active = !1;
                            }),
                            (e.prototype.updateBgImg = function (t, e) {
                                var n = "qd_dj_bg" + this.bgIndex + "_n";
                                t
                                    ? ((n = "qd_dj_bg" + this.bgIndex + "_s"), (this.dayLbl.string = "\u4eca\u5929"))
                                    : (this.dayLbl.string = "\u7b2c" + e + "\u5929");
                                var o = a.GDResMgr.get({
                                    bundlePath: "image",
                                    resPath: "hallWindow/signin/" + n,
                                });
                                this.bgSprite.spriteFrame = new cc.SpriteFrame(o);
                            }),
                            i(
                                [
                                    l({
                                        type: cc.Sprite,
                                        tooltip: "\u80cc\u666f\u56fe",
                                    }),
                                ],
                                e.prototype,
                                "bgSprite",
                                void 0
                            ),
                            i(
                                [
                                    l({
                                        type: cc.Label,
                                        tooltip: "\u91d1\u5e01\u6570\u91cf",
                                    }),
                                ],
                                e.prototype,
                                "goldLbl",
                                void 0
                            ),
                            i(
                                [
                                    l({
                                        type: cc.Sprite,
                                        tooltip: "\u91d1\u5e01\u56fe",
                                    }),
                                ],
                                e.prototype,
                                "goldSprite",
                                void 0
                            ),
                            i(
                                [
                                    l({
                                        type: cc.Sprite,
                                        tooltip: "\u76ae\u80a4\u56fe",
                                    }),
                                ],
                                e.prototype,
                                "skinSprite",
                                void 0
                            ),
                            i(
                                [
                                    l({
                                        type: cc.Node,
                                        tooltip: "\u83b7\u53d6\u72b6\u6001",
                                    }),
                                ],
                                e.prototype,
                                "getState",
                                void 0
                            ),
                            i(
                                [
                                    l({
                                        type: cc.Node,
                                        tooltip: "\u5f85\u9886\u53d6",
                                    }),
                                ],
                                e.prototype,
                                "waitGetNode",
                                void 0
                            ),
                            i(
                                [
                                    l({
                                        type: cc.Label,
                                        tooltip: "\u7b2c\u51e0\u5929",
                                    }),
                                ],
                                e.prototype,
                                "dayLbl",
                                void 0
                            ),
                            i([l()], e.prototype, "bgIndex", void 0),
                            i([s], e)
                        );
                    })(cc.Component);
                (n.default = u), cc._RF.pop();
            },
            {
                "../../GD/manage/GDResMgr": "GDResMgr",
            },
        ],
        SigninWindow: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "201c8c8gJtDE5AUT7gGA5vQ", "SigninWindow");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        },
                    a =
                        (this && this.__awaiter) ||
                        function (t, e, n, o) {
                            return new (n || (n = Promise))(function (r, i) {
                                function a(t) {
                                    try {
                                        s(o.next(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function c(t) {
                                    try {
                                        s(o.throw(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function s(t) {
                                    var e;
                                    t.done
                                        ? r(t.value)
                                        : ((e = t.value),
                                          e instanceof n
                                              ? e
                                              : new n(function (t) {
                                                    t(e);
                                                })).then(a, c);
                                }
                                s((o = o.apply(t, e || [])).next());
                            });
                        },
                    c =
                        (this && this.__generator) ||
                        function (t, e) {
                            var n,
                                o,
                                r,
                                i,
                                a = {
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
                                    return s([t, e]);
                                };
                            }
                            function s(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a; )
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
                                                    a.label++,
                                                    {
                                                        value: i[1],
                                                        done: !1,
                                                    }
                                                );
                                            case 5:
                                                a.label++, (o = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = a.ops.pop()), a.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(r = (r = a.trys).length > 0 && r[r.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                    a.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && a.label < r[1]) {
                                                    (a.label = r[1]), (r = i);
                                                    break;
                                                }
                                                if (r && a.label < r[2]) {
                                                    (a.label = r[2]), a.ops.push(i);
                                                    break;
                                                }
                                                r[2] && a.ops.pop(), a.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, a);
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
                });
                var s = t("../../GD/manage/GDWindowMgr"),
                    l = t("../../GD/table/GDTableMgr"),
                    u = t("../../GD/tools/GDUtils"),
                    p = t("../../GD/ui/GDButton"),
                    f = t("../../platform/Analytics"),
                    h = t("../../platform/Platform"),
                    d = t("../App"),
                    y = t("../com/FloatTipItem"),
                    v = t("../define/TableInfoDefine"),
                    _ = t("../domain/UserData"),
                    g = t("../items/SigninItem"),
                    m = t("../table/SignInTableItem"),
                    b = t("./WaitWindow"),
                    D = cc._decorator,
                    G = D.ccclass,
                    w = D.property,
                    P = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (
                                (e.closeBtn = null),
                                (e.blankCloseBtn = null),
                                (e.signinItems = []),
                                (e.getBtn = null),
                                (e.doubleBtn = null),
                                (e.goldLbl = null),
                                e
                            );
                        }
                        return (
                            r(e, t),
                            (e.prototype.start = function () {
                                this.showSignin(),
                                    this.closeBtn.addClickListener(this.close, this),
                                    this.blankCloseBtn.addClickListener(this.close, this),
                                    this.getBtn.addClickListener(this.onClickGet, this),
                                    this.doubleBtn.addClickListener(this.onClickDouble, this);
                            }),
                            (e.prototype.showSignin = function () {
                                var t = this,
                                    e = _.UserData.instance;
                                this.goldLbl.string = "" + e.gold;
                                var n = e.signinData;
                                this.getItems(n).forEach(function (e, o) {
                                    var r = t.signinItems[o];
                                    if ((r.showItem(e), n.day > 0)) {
                                        var i = n.day % 7,
                                            a = u.GDUtils.isToDay(n.time);
                                        i
                                            ? (r.updateState(i > o),
                                              r.updateWaitGetState(i == o && !a),
                                              r.updateBgImg(i == o && !a, o + 1))
                                            : a
                                            ? (r.updateState(!0), r.updateWaitGetState(!1))
                                            : (r.updateState(!1), r.updateWaitGetState(i == o), r.updateBgImg(i == o, o + 1));
                                    } else r.updateState(!1), 0 == o ? (r.updateWaitGetState(!0), r.updateBgImg(!0, o + 1)) : r.updateBgImg(!1, o + 1);
                                });
                            }),
                            (e.prototype.getItems = function (t) {
                                var e = l.GDTableMgr.getTable(v.SignInDefine.key, m.SignInTableItem).getItems();
                                return t.day < 7
                                    ? e.slice(0, 7)
                                    : 7 == t.day && u.GDUtils.isToDay(t.time)
                                    ? e.slice(0, 7)
                                    : e.slice(7, 14);
                            }),
                            (e.prototype.onClickGet = function () {
                                var t = _.UserData.instance.signinData;
                                u.GDUtils.isToDay(t.time)
                                    ? y.FloatTipItem.show("\u4eca\u65e5\u5df2\u9886\u53d6", 3)
                                    : this.getAward();
                            }),
                            (e.prototype.onClickDouble = function () {
                                return a(this, void 0, void 0, function () {
                                    var t, e, n, o;
                                    return c(this, function (r) {
                                        switch (r.label) {
                                            case 0:
                                                return (
                                                    (t = _.UserData.instance),
                                                    (e = t.signinData),
                                                    u.GDUtils.isToDay(e.time)
                                                        ? (y.FloatTipItem.show("\u4eca\u65e5\u5df2\u9886\u53d6", 3), [2])
                                                        : ((n = e.day % 7),
                                                          f.Analytics.uploadSignDoubleClick(n + 1),
                                                          f.Analytics.uploadAdClickTotal(),
                                                          b.WaitWindow.open(),
                                                          [4, h.Platform.current.showRewardedVideoAd(d.app.getAd)])
                                                );
                                            case 1:
                                                return (
                                                    (o = r.sent()),
                                                    b.WaitWindow.close(),
                                                    o.isEnded
                                                        ? (this.getAward(2), f.Analytics.uploadAdSucceTotal())
                                                        : y.FloatTipItem.show(
                                                              "\u89c2\u770b\u5b8c\u89c6\u9891\u83b7\u5f97\u52a0\u65f6"
                                                          ),
                                                    d.app.checkVideoReport(o.isEnded),
                                                    [2]
                                                );
                                        }
                                    });
                                });
                            }),
                            (e.prototype.getAward = function (t) {
                                void 0 === t && (t = 1);
                                var e = _.UserData.instance,
                                    n = e.signinData,
                                    o = this.getItems(n)[n.day % 7],
                                    r = o.count * t;
                                e.updateSigninData(o.day), o.propId && e.updateProp(o.propId, r);
                                var i = (o.day - 1) % 7,
                                    a = this.signinItems[i];
                                a.updateState(!0),
                                    a.updateWaitGetState(!1),
                                    (this.goldLbl.string = "" + e.gold),
                                    y.FloatTipItem.show("\u83b7\u53d6\u6210\u529f!", 2),
                                    f.Analytics.uploadSignNum(i + 1),
                                    t > 1 && f.Analytics.uploadSignDoubleSucce(i + 1);
                            }),
                            i(
                                [
                                    w({
                                        type: p.GDButton,
                                        tooltip: "\u5173\u95ed",
                                    }),
                                ],
                                e.prototype,
                                "closeBtn",
                                void 0
                            ),
                            i([w(p.GDButton)], e.prototype, "blankCloseBtn", void 0),
                            i(
                                [
                                    w({
                                        type: g.default,
                                        tooltip: "\u5929\u6570",
                                    }),
                                ],
                                e.prototype,
                                "signinItems",
                                void 0
                            ),
                            i(
                                [
                                    w({
                                        type: p.GDButton,
                                        tooltip: "\u76f4\u63a5\u9886\u53d6",
                                    }),
                                ],
                                e.prototype,
                                "getBtn",
                                void 0
                            ),
                            i(
                                [
                                    w({
                                        type: p.GDButton,
                                        tooltip: "\u53cc\u500d\u9886\u53d6",
                                    }),
                                ],
                                e.prototype,
                                "doubleBtn",
                                void 0
                            ),
                            i(
                                [
                                    w({
                                        type: cc.Label,
                                        tooltip: "\u91d1\u5e01\u6570",
                                    }),
                                ],
                                e.prototype,
                                "goldLbl",
                                void 0
                            ),
                            i([G], e)
                        );
                    })(s.GDWindow);
                (n.default = P), cc._RF.pop();
            },
            {
                "../../GD/manage/GDWindowMgr": "GDWindowMgr",
                "../../GD/table/GDTableMgr": "GDTableMgr",
                "../../GD/tools/GDUtils": "GDUtils",
                "../../GD/ui/GDButton": "GDButton",
                "../../platform/Analytics": "Analytics",
                "../../platform/Platform": "Platform",
                "../App": "App",
                "../com/FloatTipItem": "FloatTipItem",
                "../define/TableInfoDefine": "TableInfoDefine",
                "../domain/UserData": "UserData",
                "../items/SigninItem": "SigninItem",
                "../table/SignInTableItem": "SignInTableItem",
                "./WaitWindow": "WaitWindow",
            },
        ],
        TableInfoDefine: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "bbb13nt9JZHFqIxDgXxuxXc", "TableInfoDefine"),
                    Object.defineProperty(n, "__esModule", {
                        value: !0,
                    }),
                    (n.GatherDefine = n.SignInDefine = n.TableInfoDefine = void 0);
                var o = t("../table/GameListTableItem"),
                    r = t("../table/GatherTableItem"),
                    i = t("../table/SignInTableItem"),
                    a = (function () {
                        function t() {}
                        return (
                            (t.key = "GameListTableItem"),
                            (t.gameListTable = {
                                tableType: o.GameListTableItem,
                                address: {
                                    bundlePath: "table",
                                    resPath: "gameListCfg",
                                },
                            }),
                            t
                        );
                    })();
                n.TableInfoDefine = a;
                var c = (function () {
                    function t() {}
                    return (
                        (t.key = "SignInTableItem"),
                        (t.signInListTable = {
                            tableType: i.SignInTableItem,
                            address: {
                                bundlePath: "table",
                                resPath: "signinListCfg",
                            },
                        }),
                        t
                    );
                })();
                n.SignInDefine = c;
                var s = (function () {
                    function t() {}
                    return (
                        (t.key = "GatherTableItem"),
                        (t.gatherListTable = {
                            tableType: r.GatherTableItem,
                            address: {
                                bundlePath: "table",
                                resPath: "gatherListCfg",
                            },
                        }),
                        t
                    );
                })();
                (n.GatherDefine = s), cc._RF.pop();
            },
            {
                "../table/GameListTableItem": "GameListTableItem",
                "../table/GatherTableItem": "GatherTableItem",
                "../table/SignInTableItem": "SignInTableItem",
            },
        ],
        TweenSet: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "4e709qskO1AuZ/7Qpu6AGGV", "TweenSet"),
                    Object.defineProperty(n, "__esModule", {
                        value: !0,
                    }),
                    (n.TweenTemplate = void 0);
                var o = (function () {
                    function t() {}
                    return (
                        (t.breathe = function (t) {
                            return cc.tween(t).repeatForever(
                                cc
                                    .tween(t)
                                    .to(1, {
                                        scale: 1.1,
                                    })
                                    .to(1, {
                                        scale: 1,
                                    })
                            );
                        }),
                        (t.rocking = function (t) {
                            return cc.tween(t).repeatForever(
                                cc
                                    .tween(t)
                                    .to(1, {
                                        angle: -2.5,
                                    })
                                    .to(1, {
                                        angle: 2.5,
                                    })
                            );
                        }),
                        t
                    );
                })();
                (n.TweenTemplate = o), cc._RF.pop();
            },
            {},
        ],
        UserData: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "d15004EnW9ANIAVFPqLlK2S", "UserData");
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
                    (n.UserData = n.UserModel = void 0);
                var i = t("../../GD/GDKV"),
                    a = t("../../GD/GDLocalStorage"),
                    c = t("../../GD/tools/GDUtils"),
                    s = t("../GameType"),
                    l = function (t) {
                        var e, n, o, r, i, a, c, l, u, p, f, h, d, y, v, _, g, m;
                        (this.userInfo = null),
                            (this.location = null),
                            (this.team = ""),
                            (t = null != t ? t : {}),
                            (this.firstTime = null !== (e = t.firstTime) && void 0 !== e ? e : 0),
                            (this.userInfo = null !== (n = t.userInfo) && void 0 !== n ? n : null),
                            (this.location = null !== (o = t.location) && void 0 !== o ? o : null),
                            (this.openLocation = null !== (r = t.openLocation) && void 0 !== r ? r : 0),
                            (this.levelTotel = null !== (i = t.levelTotel) && void 0 !== i ? i : 0),
                            (this.dayData = null !== (a = t.dayData) && void 0 !== a ? a : []),
                            (this.team = null !== (c = t.team) && void 0 !== c ? c : ""),
                            (this.signinData =
                                null !== (l = t.signinData) && void 0 !== l
                                    ? l
                                    : {
                                          day: 0,
                                          time: 0,
                                      }),
                            (this.skinData =
                                null !== (u = t.skinData) && void 0 !== u
                                    ? u
                                    : {
                                          skinId: s.SkinId.mao,
                                          skinIds: [s.SkinId.mao],
                                      }),
                            (this.gold = null !== (p = t.gold) && void 0 !== p ? p : 0),
                            (this.curGameLevel = null !== (f = t.curGameLevel) && void 0 !== f ? f : {}),
                            (this.sidebarEnter = null !== (h = t.sidebarEnter) && void 0 !== h ? h : 0),
                            (this.playerHp =
                                null !== (d = t.playerHp) && void 0 !== d
                                    ? d
                                    : {
                                          hp: 5,
                                          infinity: 0,
                                          time: 0,
                                      }),
                            (this.gather =
                                null !== (y = t.gather) && void 0 !== y
                                    ? y
                                    : {
                                          ids: [],
                                          unlockIds: [],
                                          skinIds: [],
                                          skinId: 0,
                                          prop1: 0,
                                          prop2: 0,
                                          prop3: 0,
                                          prop4: 0,
                                      }),
                            (this.rankData =
                                null !== (v = t.rankData) && void 0 !== v
                                    ? v
                                    : {
                                          lastRank: 0,
                                          curRank: 0,
                                          rankMap: {},
                                      }),
                            (this.joinGame = null !== (_ = t.joinGame) && void 0 !== _ ? _ : 0),
                            (this.shareCount = null !== (g = t.shareCount) && void 0 !== g ? g : 0);
                        var b = Date.now();
                        (this.lastTime = null !== (m = t.lastTime) && void 0 !== m ? m : b), (this.lastTime = b);
                    };
                n.UserModel = l;
                var u = (function (t) {
                    function e() {
                        var e =
                            t.call(this, {
                                valueChange: function () {
                                    e.save();
                                },
                            }) || this;
                        return e;
                    }
                    return (
                        r(e, t),
                        Object.defineProperty(e, "instance", {
                            get: function () {
                                return this._instance || ((this._instance = new e()), this._instance.initKV()), this._instance;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.initKV = function () {
                            (this.kv = new l(this.load())), this.save();
                        }),
                        (e.prototype.load = function () {
                            return a.GDLocalStorage.load("elsfk_user_data");
                        }),
                        (e.prototype.save = function () {
                            a.GDLocalStorage.save("elsfk_user_data", this.kv);
                        }),
                        (e.prototype.clear = function () {
                            t.prototype.clear.call(this), a.GDLocalStorage.clear("elsfk_user_data");
                        }),
                        Object.defineProperty(e.prototype, "userInfo", {
                            get: function () {
                                return this.get("userInfo");
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.saveUserInfo = function (t) {
                            var e = this.get("userInfo");
                            (e = t), this.set("userInfo", e), this.save();
                        }),
                        Object.defineProperty(e.prototype, "location", {
                            get: function () {
                                return this.get("location");
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.saveLocation = function (t) {
                            var e = this.get("location");
                            (e = t), this.set("location", e), this.save();
                        }),
                        Object.defineProperty(e.prototype, "isOpenLocation", {
                            get: function () {
                                return this.get("openLocation");
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.updateOpenLocation = function (t) {
                            var e = this.get("openLocation");
                            (e = t), this.set("openLocation", e), this.save();
                        }),
                        Object.defineProperty(e.prototype, "levelTotel", {
                            get: function () {
                                return this.get("levelTotel");
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.updateLevelTotel = function (t) {
                            var e = this.get("levelTotel");
                            (e += t), this.set("levelTotel", e), this.save();
                        }),
                        Object.defineProperty(e.prototype, "firstTime", {
                            get: function () {
                                return this.get("firstTime");
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.savefirstTime = function () {
                            var t = this.get("firstTime");
                            t > 0 || ((t = new Date().getTime()), this.set("firstTime", t), this.save());
                        }),
                        Object.defineProperty(e.prototype, "dayData", {
                            get: function () {
                                var t = [],
                                    e = this.get("dayData");
                                return (
                                    null == e ||
                                        e.forEach(function (e) {
                                            c.GDUtils.isToDay(e.time) && t.push(e);
                                        }),
                                    t
                                );
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.updateDayData = function (t) {
                            var e = [],
                                n = this.get("dayData");
                            null == n || n.push(t),
                                null == n ||
                                    n.forEach(function (t) {
                                        c.GDUtils.isToDay(t.time) && e.push(t);
                                    }),
                                this.set("dayData", e),
                                this.save();
                        }),
                        Object.defineProperty(e.prototype, "team", {
                            get: function () {
                                return this.get("team");
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.updateTeam = function (t) {
                            var e = this.get("team");
                            (e = t), this.set("team", e), this.save();
                        }),
                        Object.defineProperty(e.prototype, "signinData", {
                            get: function () {
                                return this.get("signinData");
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.updateSigninData = function (t) {
                            var e = this.get("signinData");
                            (e.time = new Date().getTime()), (e.day = t), this.set("signinData", e), this.save();
                        }),
                        Object.defineProperty(e.prototype, "skin", {
                            get: function () {
                                return this.get("skinData");
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.setSkinId = function (t) {
                            var e = this.get("skinData");
                            (e.skinId = t), this.set("skinData", e), this.save();
                        }),
                        (e.prototype.setSkinIds = function (t) {
                            this.get("skinData").skinIds.push(t), this.save();
                        }),
                        Object.defineProperty(e.prototype, "gold", {
                            get: function () {
                                return this.get("gold");
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.updateGold = function (t) {
                            var e = this.get("gold");
                            (e += t) < 0 && (e = 0), this.set("gold", e), this.save();
                        }),
                        (e.prototype.getCurLevel = function (t) {
                            return this.get("curGameLevel")[t] || 1;
                        }),
                        (e.prototype.setCurLevel = function (t, e) {
                            var n = this.get("curGameLevel");
                            (n[t] = e), this.set("curGameLevel", n), this.save();
                        }),
                        Object.defineProperty(e.prototype, "sidebarEnter", {
                            get: function () {
                                return this.get("sidebarEnter");
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.setSidebarEnter = function () {
                            this.set("sidebarEnter", 1), this.save();
                        }),
                        Object.defineProperty(e.prototype, "playerHp", {
                            get: function () {
                                return this.get("playerHp");
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.setPlayerHp = function (t, e, n) {
                            var o = this.get("playerHp");
                            (o.infinity = e), (o.hp = t), n && (o.time = n), this.set("playerHp", o), this.save();
                        }),
                        Object.defineProperty(e.prototype, "gather", {
                            get: function () {
                                return this.get("gather");
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.updateGather = function (t, e, n, o) {
                            var r = this.get("gather");
                            r.ids.push(t), (r["prop" + e] = n), r.skinIds.push(o), this.set("gather", r), this.save();
                        }),
                        (e.prototype.updateProp = function (t, e) {
                            var n = this.get("gather");
                            (n["prop" + t] += e), this.set("gather", n), this.save();
                        }),
                        (e.prototype.setGatherUnlockIds = function (t) {
                            var e = this.get("gather");
                            e.unlockIds.push(t), this.set("gather", e), this.save();
                        }),
                        Object.defineProperty(e.prototype, "rankData", {
                            get: function () {
                                return this.get("rankData");
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.setRankData = function (t) {
                            var e = this.get("rankData");
                            (e.lastRank = e.curRank),
                                (e.curRank = t),
                                e.rankMap[t] || (e.rankMap[t] = 0),
                                (e.rankMap[t] += 1),
                                this.set("rankData", e),
                                this.save();
                        }),
                        Object.defineProperty(e.prototype, "joinGame", {
                            get: function () {
                                return this.get("joinGame");
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.setJoinGame = function (t) {
                            this.set("joinGame", t), this.save();
                        }),
                        Object.defineProperty(e.prototype, "shareCount", {
                            get: function () {
                                return this.get("shareCount");
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.setShareCount = function (t) {
                            this.set("shareCount", t), this.save();
                        }),
                        (e._instance = null),
                        e
                    );
                })(i.GDKV);
                (n.UserData = u), cc._RF.pop();
            },
            {
                "../../GD/GDKV": "GDKV",
                "../../GD/GDLocalStorage": "GDLocalStorage",
                "../../GD/tools/GDUtils": "GDUtils",
                "../GameType": "GameType",
            },
        ],
        UserRankItem: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "7b01eJGyqVA5ZBMNabtmo3u", "UserRankItem");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                });
                var a = t("../../GD/manage/GDObjectPool"),
                    c = t("../../GD/tools/GDUtils"),
                    s = t("../GameType"),
                    l = t("../define/GameEventDefine"),
                    u = t("../domain/UserData"),
                    p = cc._decorator,
                    f = p.ccclass,
                    h = p.property,
                    d = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (e.skinNode = null), (e.isMeNode = null), e;
                        }
                        return (
                            r(e, t),
                            (e.prototype.onDestroy = function () {
                                a.GDObjectPoolMgr.recycleAll({
                                    bundlePath: "prefab",
                                    resPath: "skin/mao",
                                }),
                                    a.GDObjectPoolMgr.recycleAll({
                                        bundlePath: "prefab",
                                        resPath: "skin/gou",
                                    });
                            }),
                            (e.prototype.showInfo = function (t, e) {
                                var n = c.GDUtils.intRangeRandom(1, 10),
                                    o = "mao",
                                    r = "1000";
                                if (t) {
                                    l.gameEvent.on(l.GameEventDefine.skinDressedEvent, this.onSkinDreessedEvent, this);
                                    var i = u.UserData.instance.skin;
                                    (r = i.skinId.toString()), (o = i.skinId < 2e3 ? "mao" : "gou");
                                } else {
                                    if (e) return;
                                    var p = c.GDUtils.intRangeRandom(0, 10),
                                        f = n > 4 ? s.MaoSkin[p] : s.GouSkin[p];
                                    (o = n > 4 ? "mao" : "gou"), (r = String(f));
                                }
                                this.skinNode.childrenCount > 0 && a.GDObjectPoolMgr.recycle(this.skinNode.children[0]);
                                var h = a.GDObjectPoolMgr.get({
                                    bundlePath: "prefab",
                                    resPath: "skin/" + o,
                                });
                                this.skinNode.addChild(h), h.getComponent(sp.Skeleton).setSkin(r);
                            }),
                            (e.prototype.isMe = function (t) {
                                (this.isMeNode.active = t),
                                    t &&
                                        cc
                                            .tween(this.isMeNode)
                                            .to(1, {
                                                position: cc.v3(0, 130),
                                            })
                                            .to(1, {
                                                position: cc.v3(0, 110),
                                            })
                                            .union()
                                            .repeatForever()
                                            .start();
                            }),
                            (e.prototype.onSkinDreessedEvent = function (t) {
                                var e = t.toString(),
                                    n = t < 2e3 ? "mao" : "gou",
                                    o = this.skinNode.children[0];
                                o.name != n &&
                                    (a.GDObjectPoolMgr.recycle(o),
                                    (o = a.GDObjectPoolMgr.get({
                                        bundlePath: "prefab",
                                        resPath: "skin/" + n,
                                    })),
                                    this.skinNode.addChild(o)),
                                    o.getComponent(sp.Skeleton).setSkin(e);
                            }),
                            i(
                                [
                                    h({
                                        type: cc.Node,
                                        tooltip: "\u732b\u72d7\u56fe",
                                    }),
                                ],
                                e.prototype,
                                "skinNode",
                                void 0
                            ),
                            i(
                                [
                                    h({
                                        type: cc.Node,
                                        tooltip: "\u662f\u5426\u662f\u81ea\u5df1",
                                    }),
                                ],
                                e.prototype,
                                "isMeNode",
                                void 0
                            ),
                            i([f], e)
                        );
                    })(cc.Component);
                (n.default = d), cc._RF.pop();
            },
            {
                "../../GD/manage/GDObjectPool": "GDObjectPool",
                "../../GD/tools/GDUtils": "GDUtils",
                "../GameType": "GameType",
                "../define/GameEventDefine": "GameEventDefine",
                "../domain/UserData": "UserData",
            },
        ],
        UtilUser: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "e80303LhvlPQLBRAhiq1aot", "UtilUser");
                var o =
                        (this && this.__awaiter) ||
                        function (t, e, n, o) {
                            return new (n || (n = Promise))(function (r, i) {
                                function a(t) {
                                    try {
                                        s(o.next(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function c(t) {
                                    try {
                                        s(o.throw(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function s(t) {
                                    var e;
                                    t.done
                                        ? r(t.value)
                                        : ((e = t.value),
                                          e instanceof n
                                              ? e
                                              : new n(function (t) {
                                                    t(e);
                                                })).then(a, c);
                                }
                                s((o = o.apply(t, e || [])).next());
                            });
                        },
                    r =
                        (this && this.__generator) ||
                        function (t, e) {
                            var n,
                                o,
                                r,
                                i,
                                a = {
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
                                    return s([t, e]);
                                };
                            }
                            function s(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a; )
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
                                                    a.label++,
                                                    {
                                                        value: i[1],
                                                        done: !1,
                                                    }
                                                );
                                            case 5:
                                                a.label++, (o = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = a.ops.pop()), a.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(r = (r = a.trys).length > 0 && r[r.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                    a.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && a.label < r[1]) {
                                                    (a.label = r[1]), (r = i);
                                                    break;
                                                }
                                                if (r && a.label < r[2]) {
                                                    (a.label = r[2]), a.ops.push(i);
                                                    break;
                                                }
                                                r[2] && a.ops.pop(), a.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, a);
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
                    (n.UtilUser = void 0);
                var i = t("../../platform/Platform"),
                    a = cc._decorator,
                    c =
                        (a.ccclass,
                        a.property,
                        (function () {
                            function t() {}
                            return (
                                (t.prototype.setSpriteFrame = function (t, e) {
                                    return o(this, void 0, void 0, function () {
                                        var n;
                                        return r(this, function (o) {
                                            switch (o.label) {
                                                case 0:
                                                    return t && e
                                                        ? e instanceof cc.Texture2D
                                                            ? ((t.spriteFrame = new cc.SpriteFrame(e)), [3, 4])
                                                            : [3, 1]
                                                        : [2];
                                                case 1:
                                                    return e instanceof cc.SpriteFrame ? ((t.spriteFrame = e), [3, 4]) : [3, 2];
                                                case 2:
                                                    return "string" != typeof e
                                                        ? [3, 4]
                                                        : [4, i.Platform.current.loadRemoteImage(e)];
                                                case 3:
                                                    (n = o.sent()), (t.spriteFrame = n), (o.label = 4);
                                                case 4:
                                                    return [2];
                                            }
                                        });
                                    });
                                }),
                                t
                            );
                        })());
                (n.UtilUser = c), cc._RF.pop();
            },
            {
                "../../platform/Platform": "Platform",
            },
        ],
        Vibrate: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "89976LYVmNOm7Nv0dklbSp+", "Vibrate");
                var o =
                        (this && this.__awaiter) ||
                        function (t, e, n, o) {
                            return new (n || (n = Promise))(function (r, i) {
                                function a(t) {
                                    try {
                                        s(o.next(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function c(t) {
                                    try {
                                        s(o.throw(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function s(t) {
                                    var e;
                                    t.done
                                        ? r(t.value)
                                        : ((e = t.value),
                                          e instanceof n
                                              ? e
                                              : new n(function (t) {
                                                    t(e);
                                                })).then(a, c);
                                }
                                s((o = o.apply(t, e || [])).next());
                            });
                        },
                    r =
                        (this && this.__generator) ||
                        function (t, e) {
                            var n,
                                o,
                                r,
                                i,
                                a = {
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
                                    return s([t, e]);
                                };
                            }
                            function s(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a; )
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
                                                    a.label++,
                                                    {
                                                        value: i[1],
                                                        done: !1,
                                                    }
                                                );
                                            case 5:
                                                a.label++, (o = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = a.ops.pop()), a.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(r = (r = a.trys).length > 0 && r[r.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                    a.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && a.label < r[1]) {
                                                    (a.label = r[1]), (r = i);
                                                    break;
                                                }
                                                if (r && a.label < r[2]) {
                                                    (a.label = r[2]), a.ops.push(i);
                                                    break;
                                                }
                                                r[2] && a.ops.pop(), a.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, a);
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
                    (n.Vibrate = void 0);
                var i = t("../../platform/Platform"),
                    a = t("../domain/GameCfg"),
                    c = cc._decorator,
                    s =
                        (c.ccclass,
                        c.property,
                        (function () {
                            function t() {}
                            return (
                                (t.prototype.vibrateShort = function () {
                                    return o(this, void 0, void 0, function () {
                                        return r(this, function () {
                                            return (
                                                a.GameCfg.instance.get("openVibrate") && i.Platform.current.vibrateShort(), [2]
                                            );
                                        });
                                    });
                                }),
                                t
                            );
                        })());
                (n.Vibrate = s), cc._RF.pop();
            },
            {
                "../../platform/Platform": "Platform",
                "../domain/GameCfg": "GameCfg",
            },
        ],
        WaitWindow: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "2b62c9i76xMRpFNa4LPaRfD", "WaitWindow");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.WaitWindow = void 0);
                var a = t("../../GD/manage/GDWindowMgr"),
                    c = t("../../GD/ui/GDUIListener"),
                    s = t("../define/AddressDefine"),
                    l = cc._decorator,
                    u = l.ccclass,
                    p = l.property,
                    f = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (e.cancelNode = null), e;
                        }
                        return (
                            r(e, t),
                            (e.prototype.start = function () {
                                c.GDUIListener.get(this.cancelNode).addClickListener(this.close, this);
                            }),
                            (e.prototype.onOpen = function () {
                                (this.node.active = !0), (this.cancelNode.active = !1);
                            }),
                            (e.prototype.onClose = function () {
                                (this.cancelNode.active = !1), (this.node.active = !1), this.unscheduleAllCallbacks();
                            }),
                            (e.prototype.show = function () {
                                var t = this;
                                this.scheduleOnce(function () {
                                    cc.isValid(t.cancelNode) && (t.cancelNode.active = !0);
                                }, 10);
                            }),
                            (e.open = function () {
                                var t = a.GDWindowMgr.instance.openWindow(s.PrefabAddressDefine.waitWindow);
                                null == t || t.show();
                            }),
                            (e.close = function () {
                                a.GDWindowMgr.instance.closeWindow(s.PrefabAddressDefine.waitWindow);
                            }),
                            i([p(cc.Node)], e.prototype, "cancelNode", void 0),
                            i([u], e)
                        );
                    })(a.GDWindow);
                (n.WaitWindow = f), cc._RF.pop();
            },
            {
                "../../GD/manage/GDWindowMgr": "GDWindowMgr",
                "../../GD/ui/GDUIListener": "GDUIListener",
                "../define/AddressDefine": "AddressDefine",
            },
        ],
        WinWindow: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "0aefa2vmRlH9Zm249Y4x5v8", "WinWindow");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        },
                    a =
                        (this && this.__awaiter) ||
                        function (t, e, n, o) {
                            return new (n || (n = Promise))(function (r, i) {
                                function a(t) {
                                    try {
                                        s(o.next(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function c(t) {
                                    try {
                                        s(o.throw(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function s(t) {
                                    var e;
                                    t.done
                                        ? r(t.value)
                                        : ((e = t.value),
                                          e instanceof n
                                              ? e
                                              : new n(function (t) {
                                                    t(e);
                                                })).then(a, c);
                                }
                                s((o = o.apply(t, e || [])).next());
                            });
                        },
                    c =
                        (this && this.__generator) ||
                        function (t, e) {
                            var n,
                                o,
                                r,
                                i,
                                a = {
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
                                    return s([t, e]);
                                };
                            }
                            function s(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a; )
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
                                                    a.label++,
                                                    {
                                                        value: i[1],
                                                        done: !1,
                                                    }
                                                );
                                            case 5:
                                                a.label++, (o = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = a.ops.pop()), a.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(r = (r = a.trys).length > 0 && r[r.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                    a.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && a.label < r[1]) {
                                                    (a.label = r[1]), (r = i);
                                                    break;
                                                }
                                                if (r && a.label < r[2]) {
                                                    (a.label = r[2]), a.ops.push(i);
                                                    break;
                                                }
                                                r[2] && a.ops.pop(), a.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, a);
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
                    (n.WinWindow = void 0);
                var s = t("../../GD/manage/GDWindowMgr"),
                    l = t("../../GD/table/GDTableMgr"),
                    u = t("../../GD/ui/GDButton"),
                    p = t("../../platform/Platform"),
                    f = t("../define/TableInfoDefine"),
                    h = t("../domain/UserData"),
                    d = t("../items/GatherItem"),
                    y = t("../table/GatherTableItem"),
                    v = cc._decorator,
                    _ = v.ccclass,
                    g = v.property,
                    m = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (
                                (e.getAwardBtn = null),
                                (e.closeBtn = null),
                                (e.shareRecordBtn = null),
                                (e.gatherItem = null),
                                (e.tipLbl = null),
                                (e.item = null),
                                e
                            );
                        }
                        return (
                            r(e, t),
                            (e.prototype.onLoad = function () {
                                p.Platform.current.getRecordState(), (this.shareRecordBtn.node.active = !1);
                            }),
                            (e.prototype.start = function () {
                                this.closeBtn.addClickListener(this.close, this),
                                    this.getAwardBtn.addClickListener(this.clickGetAward, this),
                                    this.shareRecordBtn.addClickListener(this.clickShareRecordBtn, this);
                            }),
                            (e.prototype.clickAgain = function () {
                                var t;
                                null === (t = this.listener) || void 0 === t || t.again(this);
                            }),
                            (e.prototype.clickGetAward = function () {
                                if (this.item) {
                                    var t = this.item;
                                    h.UserData.instance.updateGather(t.id, t.propId, t.count, t.skinId);
                                }
                                this.close();
                            }),
                            (e.prototype.showGatherItem = function (t) {
                                var e = this.getItems().find(function (e) {
                                    return e.getLevel == t;
                                });
                                e
                                    ? ((this.gatherItem.node.active = !0),
                                      (this.item = e),
                                      h.UserData.instance.setGatherUnlockIds(e.id),
                                      this.gatherItem.showGatherItem(e))
                                    : (this.gatherItem.node.active = !1);
                                var n = h.UserData.instance.team;
                                this.tipLbl.string = "\u6210\u529f\u8fdb\u5165" + n + "\u5708";
                            }),
                            (e.prototype.getItems = function () {
                                return l.GDTableMgr.getTable(f.GatherDefine.key, y.GatherTableItem).getItems();
                            }),
                            (e.prototype.share = function () {}),
                            (e.prototype.clickShareRecordBtn = function () {
                                return a(this, void 0, void 0, function () {
                                    return c(this, function (t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, p.Platform.current.stopRecorderVideo()];
                                            case 1:
                                                return t.sent() && p.Platform.current.shareRecordVideo(), [2];
                                        }
                                    });
                                });
                            }),
                            i([g(u.GDButton)], e.prototype, "getAwardBtn", void 0),
                            i([g(u.GDButton)], e.prototype, "closeBtn", void 0),
                            i([g(u.GDButton)], e.prototype, "shareRecordBtn", void 0),
                            i([g(d.default)], e.prototype, "gatherItem", void 0),
                            i([g(cc.Label)], e.prototype, "tipLbl", void 0),
                            i([_], e)
                        );
                    })(s.GDWindow);
                (n.WinWindow = m), cc._RF.pop();
            },
            {
                "../../GD/manage/GDWindowMgr": "GDWindowMgr",
                "../../GD/table/GDTableMgr": "GDTableMgr",
                "../../GD/ui/GDButton": "GDButton",
                "../../platform/Platform": "Platform",
                "../define/TableInfoDefine": "TableInfoDefine",
                "../domain/UserData": "UserData",
                "../items/GatherItem": "GatherItem",
                "../table/GatherTableItem": "GatherTableItem",
            },
        ],
        longTouchComponent: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "dd0313dOUtIr50egHgzejPV", "longTouchComponent");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                });
                var a = cc._decorator,
                    c = a.ccclass,
                    s = a.property,
                    l = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (
                                (e.touchInterval = 0.1),
                                (e.enableMultiTouching = !1),
                                (e.longTouchEvents = []),
                                (e._touchCounter = 0),
                                (e._isTouching = !1),
                                e
                            );
                        }
                        return (
                            r(e, t),
                            (e.prototype.onEnable = function () {
                                this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchStart, this),
                                    this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this),
                                    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
                            }),
                            (e.prototype.onDisable = function () {
                                this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchStart, this),
                                    this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this),
                                    this.node.off(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
                            }),
                            (e.prototype._onTouchStart = function (t) {
                                if (!this.enableMultiTouching) {
                                    if (this._isTouching) return;
                                    this.node.getBoundingBoxToWorld().contains(t.getLocation())
                                        ? (this._isTouching = !0)
                                        : (this._isTouching = !1),
                                        this._isTouching &&
                                            (this.publishOneTouch(),
                                            this.schedule(this._touchCounterCallback, this.touchInterval));
                                }
                            }),
                            (e.prototype._onTouchEnd = function () {
                                (this._isTouching = !1), (this._touchCounter = 0), this.unschedule(this._touchCounterCallback);
                            }),
                            (e.prototype._onTouchCancel = function () {
                                (this._isTouching = !1), (this._touchCounter = 0), this.unschedule(this._touchCounterCallback);
                            }),
                            (e.prototype._touchCounterCallback = function () {
                                this._isTouching ? this.publishOneTouch() : this.unschedule(this._touchCounterCallback);
                            }),
                            (e.prototype.publishOneTouch = function () {
                                var t = this;
                                this._isTouching &&
                                    (this._touchCounter++,
                                    this.longTouchEvents.forEach(function (e) {
                                        e.emit([t._touchCounter]);
                                    }));
                            }),
                            i(
                                [
                                    s({
                                        tooltip:
                                            "\u89e6\u6478\u56de\u8c03\u95f4\u9694\uff08\u79d2\uff09\u3002\u5047\u5982\u4e3a0.1\uff0c\u90a3\u4e481\u79d2\u5185\u4f1a\u56de\u8c0310\u6b21 ${longTouchEvents} \u4e8b\u4ef6\u6570\u7ec4",
                                    }),
                                ],
                                e.prototype,
                                "touchInterval",
                                void 0
                            ),
                            i(
                                [
                                    s({
                                        readonly: !0,
                                        tooltip:
                                            "\u662f\u5426\u652f\u6301\u591a\u70b9\u89e6\u63a7\uff08\u5f53\u524d\u8fd8\u4e0d\u652f\u6301\uff09",
                                    }),
                                ],
                                e.prototype,
                                "enableMultiTouching",
                                void 0
                            ),
                            i(
                                [
                                    s({
                                        type: [cc.Component.EventHandler],
                                        tooltip:
                                            "\u56de\u8c03\u4e8b\u4ef6\u6570\u7ec4\uff0c\u6bcf\u95f4\u9694 ${toucheInterval}s \u56de\u8c03\u4e00\u6b21",
                                    }),
                                ],
                                e.prototype,
                                "longTouchEvents",
                                void 0
                            ),
                            i([c], e)
                        );
                    })(cc.Component);
                (n.default = l), cc._RF.pop();
            },
            {},
        ],
        mgposTest: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "749690vPX1OdocR/JRUQf5g", "mgposTest");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                });
                var a = cc._decorator,
                    c = a.ccclass,
                    s =
                        (a.property,
                        (function (t) {
                            function e() {
                                return (null !== t && t.apply(this, arguments)) || this;
                            }
                            return (
                                r(e, t),
                                (e.prototype.start = function () {
                                    var t = [];
                                    this.node.children[1].children.forEach(function (e) {
                                        t.push({
                                            x: e.position.x,
                                            y: e.position.y,
                                        });
                                    }),
                                        console.log("pos == ", t),
                                        console.log("pos == ", JSON.stringify(t));
                                }),
                                i([c], e)
                            );
                        })(cc.Component));
                (n.default = s), cc._RF.pop();
            },
            {},
        ],
        rank: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "fe90dBELYNOJ5hh8eqVrA/p", "rank");
                var o =
                        (this && this.__awaiter) ||
                        function (t, e, n, o) {
                            return new (n || (n = Promise))(function (r, i) {
                                function a(t) {
                                    try {
                                        s(o.next(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function c(t) {
                                    try {
                                        s(o.throw(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function s(t) {
                                    var e;
                                    t.done
                                        ? r(t.value)
                                        : ((e = t.value),
                                          e instanceof n
                                              ? e
                                              : new n(function (t) {
                                                    t(e);
                                                })).then(a, c);
                                }
                                s((o = o.apply(t, e || [])).next());
                            });
                        },
                    r =
                        (this && this.__generator) ||
                        function (t, e) {
                            var n,
                                o,
                                r,
                                i,
                                a = {
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
                                    return s([t, e]);
                                };
                            }
                            function s(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a; )
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
                                                    a.label++,
                                                    {
                                                        value: i[1],
                                                        done: !1,
                                                    }
                                                );
                                            case 5:
                                                a.label++, (o = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = a.ops.pop()), a.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(r = (r = a.trys).length > 0 && r[r.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                    a.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && a.label < r[1]) {
                                                    (a.label = r[1]), (r = i);
                                                    break;
                                                }
                                                if (r && a.label < r[2]) {
                                                    (a.label = r[2]), a.ops.push(i);
                                                    break;
                                                }
                                                r[2] && a.ops.pop(), a.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, a);
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
                    (n.Rank = void 0);
                var i = t("../scripts/domain/UserData"),
                    a = t("./Platform"),
                    c = (function () {
                        function t() {}
                        return (
                            (t.setImRankData = function () {
                                var t = {
                                    dataType: 0,
                                };
                                (t.value = i.UserData.instance.levelTotel.toString()),
                                    (t.priority = 0),
                                    (t.extra = i.UserData.instance.team),
                                    a.Platform.current.setImRankData(t);
                            }),
                            (t.getImRankData = function () {
                                return o(this, void 0, Promise, function () {
                                    return r(this, function (t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, a.Platform.current.getImRankData()];
                                            case 1:
                                                return [2, t.sent()];
                                        }
                                    });
                                });
                            }),
                            t
                        );
                    })();
                (n.Rank = c), cc._RF.pop();
            },
            {
                "../scripts/domain/UserData": "UserData",
                "./Platform": "Platform",
            },
        ],
        setLevelWindow: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "aaefdUNBdpERLbK7ObQ9HvM", "setLevelWindow");
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
                                a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                a = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                });
                var a = t("../../GD/manage/GDWindowMgr"),
                    c = t("../../GD/ui/GDButton"),
                    s = t("../GameHelper"),
                    l = t("../com/FloatTipItem"),
                    u = cc._decorator,
                    p = u.ccclass,
                    f = u.property,
                    h = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (e.closeBtn = null), (e.levelLbl = null), (e.saveBtn = null), (e.cancelBtn = null), e;
                        }
                        return (
                            r(e, t),
                            (e.prototype.start = function () {
                                (this.levelLbl.placeholder = "\u8f93\u5165\u5173\u5361id\uff1a1-100"),
                                    this.closeBtn.addClickListener(this.close, this),
                                    this.saveBtn.addClickListener(this.saveLevel, this),
                                    this.cancelBtn.addClickListener(this.cancelLevel, this);
                            }),
                            (e.prototype.saveLevel = function () {
                                var t = this.levelLbl.string;
                                if (Number(t)) {
                                    console.log(">>>>>>>>", t);
                                    var e = Number(t) || 1;
                                    e < 0 || e > 100
                                        ? l.FloatTipItem.show("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u5173\u5361id:1-100", 2)
                                        : (s.GameHelper.setWebCurLevel(Number(e)),
                                          l.FloatTipItem.show(
                                              "\u8bbe\u7f6e\u6210\u529f,\u5173\u95ed\u7a97\u53e3,\u70b9\u51fb\u5f00\u59cb\u6311\u6218!",
                                              2
                                          ));
                                } else l.FloatTipItem.show("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u5173\u5361id:1-100", 2);
                            }),
                            (e.prototype.cancelLevel = function () {
                                s.GameHelper.setWebCurLevel(0), l.FloatTipItem.show("\u53d6\u6d88\u6210\u529f!", 2);
                            }),
                            i(
                                [
                                    f({
                                        type: c.GDButton,
                                        tooltip: "\u5173\u95ed",
                                    }),
                                ],
                                e.prototype,
                                "closeBtn",
                                void 0
                            ),
                            i(
                                [
                                    f({
                                        type: cc.EditBox,
                                        tooltip: "\u8f93\u5165\u5149\u5361\u6570",
                                    }),
                                ],
                                e.prototype,
                                "levelLbl",
                                void 0
                            ),
                            i(
                                [
                                    f({
                                        type: c.GDButton,
                                        tooltip: "\u4fdd\u5b58",
                                    }),
                                ],
                                e.prototype,
                                "saveBtn",
                                void 0
                            ),
                            i(
                                [
                                    f({
                                        type: c.GDButton,
                                        tooltip: "\u53d6\u6d88",
                                    }),
                                ],
                                e.prototype,
                                "cancelBtn",
                                void 0
                            ),
                            i([p], e)
                        );
                    })(a.GDWindow);
                (n.default = h), cc._RF.pop();
            },
            {
                "../../GD/manage/GDWindowMgr": "GDWindowMgr",
                "../../GD/ui/GDButton": "GDButton",
                "../GameHelper": "GameHelper",
                "../com/FloatTipItem": "FloatTipItem",
            },
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
        "GDRoundRectMask",
        "GDToggle",
        "GDToggleGroup",
        "GDUIListener",
        "CCCExtend",
        "LevelRender",
        "RecycleScroll",
        "Analytics",
        "Platform",
        "rank",
        "App",
        "Consts",
        "GameHelper",
        "GameType",
        "Gather",
        "Hall",
        "Load",
        "PlayerHp",
        "ClickHide",
        "FloatTipItem",
        "LevelUpDifficulty",
        "longTouchComponent",
        "TweenSet",
        "Core",
        "UtilUser",
        "Vibrate",
        "AddressDefine",
        "AudioInfoDefine",
        "GameEventDefine",
        "GameTypeDefine",
        "TableInfoDefine",
        "GameCfg",
        "UserData",
        "GatherItem",
        "HallRankItem",
        "HpComponent",
        "Marquee",
        "MeRank",
        "MoreItem",
        "RankLoseItem",
        "RankWindowItem",
        "SigninItem",
        "UserRankItem",
        "mgposTest",
        "AnimationNode",
        "Bounding",
        "CircleBounding",
        "RectBounding",
        "MoveAndScale",
        "GameListTableItem",
        "GatherTableItem",
        "SignInTableItem",
        "BusinessCardWindow",
        "CDWindow",
        "EnterAwardWindow",
        "GameWindow",
        "LocationWindow",
        "LoseWindow",
        "PalWindow",
        "PlayerHpWindow",
        "SettingWindow",
        "ShareWindow",
        "SigninWindow",
        "WaitWindow",
        "WinWindow",
        "setLevelWindow",
    ]
);
