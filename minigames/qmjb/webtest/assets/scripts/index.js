System.register("chunks:///_virtual/AdaptBang.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Utils.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Widget, UITransform, view, sys, Component, Utils;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Widget = module.Widget;
      UITransform = module.UITransform;
      view = module.view;
      sys = module.sys;
      Component = module.Component;
    }, function (module) {
      Utils = module.Utils;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "daba6WieohHEIdd9BdqEb2F", "AdaptBang", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executionOrder = _decorator.executionOrder;
      var AdaptBang = exports('AdaptBang', (_dec = ccclass('AdaptBang'), _dec2 = executionOrder(-1), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AdaptBang, _Component);
        function AdaptBang() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._originTop = 0;
          return _this;
        }
        var _proto = AdaptBang.prototype;
        _proto.onLoad = function onLoad() {
          var _this$node$getCompone;
          this._originTop = (_this$node$getCompone = this.node.getComponent(Widget)) == null ? void 0 : _this$node$getCompone.top;
          this._updateWidget();
        }
        // protected onEnable(): void {
        //     this._updateWidget();
        //     view.on('window-resize', this._updateWidget, this);
        //     view.on('orientation-change', this._updateWidget, this);
        // }
        // protected onDisable(): void {
        //     view.off('window-resize', this._updateWidget, this);
        //     view.off('orientation-change', this._updateWidget, this);
        // }
        ;

        _proto._updateWidget = function _updateWidget() {
          var widget = this.node.getComponent(Widget);
          var uiTransComp = this.node.getComponent(UITransform);
          if (!widget || !uiTransComp) return;
          var visibleSize = view.getVisibleSize();
          var screenHeight = visibleSize.height;
          var safeArea = sys.getSafeAreaRect();
          var deltaH = screenHeight - safeArea.y - safeArea.height;
          if (sys.os == sys.OS.IOS) ;
          deltaH = Math.max(0, deltaH);
          widget.top = deltaH + this._originTop;
          Utils.updateWidget(this.node);
        };
        return AdaptBang;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AdaptBg.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, view, UITransform, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      view = module.view;
      UITransform = module.UITransform;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "78facZgCvJJyq19Lj4pdooZ", "AdaptBg", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AdaptBg = exports('AdaptBg', (_dec = ccclass('AdaptBg'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AdaptBg, _Component);
        function AdaptBg() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "useScale", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ignoreSmall", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = AdaptBg.prototype;
        _proto.onLoad = function onLoad() {
          view.on("canvas-resize", this._fit, this);
          this._fit();
        };
        _proto.onDestroy = function onDestroy() {
          view.targetOff(this);
        };
        _proto._fit = function _fit() {
          var visibleSize = view.getVisibleSize();
          var size = this.node.getComponent(UITransform).contentSize;
          if (this.useScale) {
            var scale = Math.max(visibleSize.width / size.width, visibleSize.height / size.height);
            if (!this.ignoreSmall || scale > 1) {
              this.node.setScale(scale, scale);
            }
          } else {
            if (!this.ignoreSmall || size.width < visibleSize.width || size.height < visibleSize.height) {
              this.node.getComponent(UITransform).contentSize = visibleSize;
            }
          }
        };
        return AdaptBg;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "useScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ignoreSmall", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AdaptCapsule.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Widget, view, UITransform, v3, sys, screen, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Widget = module.Widget;
      view = module.view;
      UITransform = module.UITransform;
      v3 = module.v3;
      sys = module.sys;
      screen = module.screen;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "6108f61EyhJuZcC/yqutudr", "AdaptCapsule", undefined);
      var property = _decorator.property,
        ccclass = _decorator.ccclass;
      var AdaptCapsule = exports('AdaptCapsule', (_dec = ccclass("AdaptCapsule"), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AdaptCapsule, _Component);
        function AdaptCapsule() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "horizontalAlign", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "verticalAlign", _descriptor2, _assertThisInitialized(_this));
          _this._originRect = void 0;
          return _this;
        }
        var _proto = AdaptCapsule.prototype;
        _proto.onLoad = function onLoad() {
          var widget = this.node.getComponent(Widget);
          if (widget) {
            this._originRect = {
              top: widget.top,
              right: widget.right,
              bottom: widget.bottom,
              left: widget.left
            };
          } else {
            this._originRect = {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            };
          }
        };
        _proto.onEnable = function onEnable() {
          this.updateWidget();
        };
        _proto.updateWidget = function updateWidget() {
          // if (!sys.isMobile) {
          //     return;
          // }
          var ptMenuBounding = this.getMenuBounding();
          if (!ptMenuBounding) {
            return;
          }
          console.log("ttttt", ptMenuBounding, view.getVisibleSize());
          var widget = this.node.getComponent(Widget);
          widget && widget.updateAlignment();
          var nodeBounding = this.node.getComponent(UITransform).getBoundingBoxToWorld();
          var visibleSize = view.getVisibleSize();
          if (this.verticalAlign && ptMenuBounding.bottom > 0) {
            var delta = nodeBounding.y + nodeBounding.height + ptMenuBounding.bottom - visibleSize.height;
            if (delta > 0) {
              // 有遮挡胶囊了
              if (widget != null && widget.isAlignTop) {
                // 有widget的情况 并且有上对齐的  设置top算了
                widget.top = this._originRect.top + delta;
              } else {
                // 否则设置位置  要下移点点
                this.node.position = v3(this.node.position.x, this.node.position.y - delta - 10, this.node.position.z);
              }
            }
          }
          if (this.horizontalAlign && ptMenuBounding.left > 0) {
            var _delta = nodeBounding.x + nodeBounding.width - ptMenuBounding.left;
            if (_delta > 0) {
              if (widget != null && widget.isAlignRight) {
                widget.right = widget.right + _delta;
              } else {
                // 左移
                this.node.position = v3(this.node.position.x - _delta - 10, this.node.position.y, this.node.position.z);
              }
            }
          }
          widget && widget.updateAlignment();
        };
        _proto.getMenuBounding = function getMenuBounding() {
          var rect;
          // rect = {top:0, bottom:133, left:0, right:578};
          if (sys.platform === sys.Platform.WECHAT_GAME) {
            var boungding = wx.getMenuButtonBoundingClientRect();
            var pixelRatio = screen.devicePixelRatio;
            rect = {
              top: boungding.top * pixelRatio / view.getScaleY(),
              right: boungding.right * pixelRatio / view.getScaleX(),
              bottom: boungding.bottom * pixelRatio / view.getScaleY(),
              left: boungding.left * pixelRatio / view.getScaleX()
            };
          }
          return rect;
        };
        return AdaptCapsule;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "horizontalAlign", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "verticalAlign", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AniFrameComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, _decorator, Animation, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Animation = module.Animation;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "1b8c5g79Z9FjJDO+50csoeS", "AniFrameComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AniFrameComp = exports('AniFrameComp', (_dec = ccclass('AniFrameComp'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AniFrameComp, _Component);
        function AniFrameComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.animation = void 0;
          _this.shotCallback = void 0;
          return _this;
        }
        var _proto = AniFrameComp.prototype;
        _proto.onLoad = function onLoad() {
          this.animation = this.node.getComponent(Animation);
          if (!this.animation) {
            this.animation = this.node.addComponent(Animation);
          }
        };
        _proto.checkClipByName = function checkClipByName(name) {
          var _this$animation;
          var clips = (_this$animation = this.animation) == null ? void 0 : _this$animation.clips;
          if (clips) {
            for (var _iterator = _createForOfIteratorHelperLoose(clips), _step; !(_step = _iterator()).done;) {
              var clip = _step.value;
              if ((clip == null ? void 0 : clip.name) == name) {
                return true;
              }
            }
          }
        };
        _proto.play = function play(name) {
          var _this$animation2;
          (_this$animation2 = this.animation) == null || _this$animation2.play(name);
        };
        _proto.clearClips = function clearClips() {
          var _this$animation3;
          var clips = (_this$animation3 = this.animation) == null ? void 0 : _this$animation3.clips;
          for (var _iterator2 = _createForOfIteratorHelperLoose(clips), _step2; !(_step2 = _iterator2()).done;) {
            var _this$animation4;
            var clip = _step2.value;
            (_this$animation4 = this.animation) == null || _this$animation4.removeClip(clip, true);
          }
        };
        _proto.shot = function shot() {
          // 事件帧里面触发的
          this.shotCallback && this.shotCallback();
        };
        return AniFrameComp;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AnnotationComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "d76a0AEVeFDxaPD7I4U/SSS", "AnnotationComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AnnotationComp = exports('AnnotationComp', (_dec = ccclass('AnnotationComp'), _dec2 = property({
        tooltip: '仅仅用于编辑器里填写注释',
        multiline: true,
        editorOnly: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AnnotationComp, _Component);
        function AnnotationComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "annotation", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        return AnnotationComp;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "annotation", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppArgMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Constants.ts', './ArgsParser.ts', './NativeUtil.ts', './ChannelMgr.ts', './LogMgr.ts'], function (exports) {
  var _createClass, _createForOfIteratorHelperLoose, cclegacy, Constants, ArgsParser, NativeUtil, ChannelMgr, LogMgr;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Constants = module.Constants;
    }, function (module) {
      ArgsParser = module.ArgsParser;
    }, function (module) {
      NativeUtil = module.NativeUtil;
    }, function (module) {
      ChannelMgr = module.ChannelMgr;
    }, function (module) {
      LogMgr = module.LogMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "02193Jq/nFP7pNOY9PHAFOe", "AppArgMgr", undefined);
      var AppArgMgr = exports('AppArgMgr', /*#__PURE__*/function () {
        function AppArgMgr() {}
        AppArgMgr.init = function init() {
          if (!this._inited) {
            this._inited = true;
            this.printRunArguments();
            this.clearAppArg();
            if (ChannelMgr.isTikTok()) {
              this.parseAppArgForTikTok();
            } else if (ChannelMgr.isZheYueTK()) {
              this.parseAppArgForZheYueTK();
            }
            this.printAppArg();
          }
        };
        AppArgMgr.reset = function reset() {
          this._inited = false;
          this.clearAppArg();
        };
        AppArgMgr.clearAppArg = function clearAppArg() {
          this._token = "";
          this._lang = "";
        };
        AppArgMgr.printRunArguments = function printRunArguments() {
          var argList = NativeUtil.getRunArguments();
          LogMgr.log("----------print arg list begin");
          for (var _iterator = _createForOfIteratorHelperLoose(argList), _step; !(_step = _iterator()).done;) {
            var v = _step.value;
            LogMgr.log(v);
          }
          LogMgr.log("----------print arg list end");
        };
        AppArgMgr.printAppArg = function printAppArg() {
          LogMgr.log("----------token: " + this._token);
          LogMgr.log("----------lang: " + this._lang);
        };
        AppArgMgr.parseAppArgForTikTok = function parseAppArgForTikTok() {
          // -token=xxxxxxxxxx
          var argList = NativeUtil.getRunArguments();
          var TOKEN_ARG_KEY = "-token=";
          var liveToken = "";
          for (var _iterator2 = _createForOfIteratorHelperLoose(argList), _step2; !(_step2 = _iterator2()).done;) {
            var str = _step2.value;
            var bIdx = str.indexOf(TOKEN_ARG_KEY);
            if (bIdx != -1) {
              var sIdx = bIdx + TOKEN_ARG_KEY.length;
              var eIdx = str.indexOf(" ", sIdx);
              if (eIdx != -1) {
                liveToken = str.substring(sIdx, eIdx);
              } else {
                liveToken = str.substring(sIdx);
              }
              break;
            }
          }
          this._token = liveToken;
        };
        AppArgMgr.parseAppArgForZheYueTK = function parseAppArgForZheYueTK() {
          var _parser$GetArgValue, _parser$GetArgValue2, _dict, _dict$lang;
          // Game.exe -code ********* -lan 0
          // 0 简体中文
          // 1 繁体中文
          // 2 英语
          var argList = NativeUtil.getRunArguments();
          var CODE_ARG_KEY = "-code";
          var LANG_ARG_KEY = "-lan";
          var parser = ArgsParser.Parse(argList);
          var code = (_parser$GetArgValue = parser.GetArgValue(CODE_ARG_KEY)) != null ? _parser$GetArgValue : "";
          var lang = (_parser$GetArgValue2 = parser.GetArgValue(LANG_ARG_KEY)) != null ? _parser$GetArgValue2 : "";
          var dict = (_dict = {}, _dict["0"] = Constants.LANG.CN, _dict["1"] = Constants.LANG.TW, _dict["2"] = Constants.LANG.En, _dict);
          this._token = code;
          this._lang = (_dict$lang = dict[lang]) != null ? _dict$lang : "";
        };
        _createClass(AppArgMgr, null, [{
          key: "token",
          get: function get() {
            this.init();
            return this._token;
          }
        }, {
          key: "lang",
          get: function get() {
            this.init();
            return this._lang;
          }
        }]);
        return AppArgMgr;
      }());
      AppArgMgr._inited = false;
      AppArgMgr._token = "";
      AppArgMgr._lang = "";
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ArgsParser.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, _createForOfIteratorHelperLoose, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "23daeGC8t9GdqNwXr8v4v+F", "ArgsParser", undefined);
      var ArgData = exports('ArgData', /*#__PURE__*/function () {
        function ArgData(args, idx, text) {
          this._args = [];
          this._idx = 0;
          this._text = "";
          this._args = args;
          this._idx = idx;
          this._text = text;
        }
        var _proto = ArgData.prototype;
        _proto.Take = function Take() {
          return this.Next;
        };
        _proto.TakeMulti = function TakeMulti(count) {
          var list = [];
          var parent = this;
          for (var i = 0; i < count; i++) {
            var next = parent.Next;
            if (next == null) break;
            list.push(next);
            parent = next;
          }
          return list;
        };
        _createClass(ArgData, [{
          key: "Text",
          get: function get() {
            return this._text;
          }
        }, {
          key: "Next",
          get: function get() {
            if (this._idx < this._args.length - 1) {
              return this._args[this._idx + 1];
            }
            return null;
          }
        }, {
          key: "Previous",
          get: function get() {
            if (this._idx > 0) {
              return this._args[this._idx - 1];
            }
            return null;
          }
        }]);
        return ArgData;
      }());
      var ArgsParser = exports('ArgsParser', /*#__PURE__*/function () {
        function ArgsParser(args) {
          this._args = [];
          this._args = [];
          if (args != null) {
            for (var i = 0; i < args.length; i++) {
              this._args.push(new ArgData(this._args, i, args[i]));
            }
          }
        }
        ArgsParser.Parse = function Parse(args) {
          return new ArgsParser(args);
        };
        var _proto2 = ArgsParser.prototype;
        _proto2.Has = function Has(argName) {
          for (var _iterator = _createForOfIteratorHelperLoose(this._args), _step; !(_step = _iterator()).done;) {
            var v = _step.value;
            if (v.Text == argName) {
              return true;
            }
          }
          return false;
        };
        _proto2.Get = function Get(argName) {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this._args), _step2; !(_step2 = _iterator2()).done;) {
            var v = _step2.value;
            if (v.Text == argName) {
              return v;
            }
          }
          return null;
        };
        _proto2.GetArgValue = function GetArgValue(argName) {
          var data = this.Get(argName);
          if (data == null) return null;
          var next_data = data.Next;
          if (next_data == null) return null;
          var str = next_data.Text;
          return str.trim();
        };
        return ArgsParser;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ArrayUtil.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ObjectUtil.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, ObjectUtil;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ObjectUtil = module.ObjectUtil;
    }],
    execute: function () {
      cclegacy._RF.push({}, "31aa5C6v6pG35MVpVGKs1Mi", "ArrayUtil", undefined);
      var ArrayUtil = exports('ArrayUtil', {
        sum: function sum(arr) {
          var total = 0;
          for (var i = 0; i < arr.length; i++) {
            if (!isNaN(arr[i])) {
              total += +arr[i];
            }
          }
          return total;
        },
        remove: function remove(arr, item) {
          var index = arr.indexOf(item);
          if (index >= 0) {
            arr.splice(index, 1);
            return true;
          }
          return false;
        },
        removeIdxsByCond: function removeIdxsByCond(array, checkRemove, isAll) {
          if (isAll === void 0) {
            isAll = true;
          }
          var removedList = [];
          for (var i = array.length - 1; i >= 0; i--) {
            var target = array[i];
            if (checkRemove(target)) {
              array.splice(i, 1);
              removedList.push(target);
              if (!isAll) break;
            }
          }
          return removedList;
        },
        removeIdxs: function removeIdxs(array, predicate) {
          var result = [];
          var indexes = [];
          array.forEach(function (item, index) {
            if (predicate(item)) {
              result.push(item);
              indexes.push(index);
            }
          });
          this.basePullAt(array, indexes);
          return result;
        },
        basePullAt: function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0;
          var lastIndex = length - 1;
          var previous;
          while (length--) {
            var index = indexes[length];
            if (length === lastIndex || index !== previous) {
              previous = index;
              Array.prototype.splice.call(array, index, 1);
            }
          }
          return array;
        },
        /**
         * 将数组拆分为任意个 最大数量为n的新数组
         * @author: qiaomingwu
         * @param {any} arr 被拆分数组
         * @param {number} n 拆分的最大数量
         */
        tailor: function tailor(arr, n) {
          var ret = [];
          var tmp = [];
          for (var i = 0; i < arr.length; i++) {
            var good = arr[i];
            tmp.push(good);
            if (tmp.length == n) {
              ret.push(tmp);
              tmp = [];
            }
          }
          if (tmp.length > 0) {
            ret.push(tmp);
          }
          return ret;
        },
        /**
         * 两个数组内容是否相同
         * @author: qiaomingwu
         * @param {any} arr1 数组1
         * @param {any} arr2 数组2
         */
        isSame: function isSame(arr1, arr2) {
          return JSON.stringify(arr1) === JSON.stringify(arr2);
        },
        /**
         * 两个数组内容是否相同
         * @author: qiaomingwu
         * @param {any} arr1 数组1
         * @param {any} arr2 数组2
         */
        isArraySame: function isArraySame(arr1, arr2) {
          if (arr1.length != arr2.length) return false;
          for (var idx = 0; idx < arr1.length; idx++) {
            if (arr1[idx] !== arr2[idx]) {
              return false;
            }
          }
          return true;
        },
        /**
         * 获取重复数组
         * @author: qiaomingwu
         * @param {any} elem 重复元素
         * @param {number} n 次数
         */
        getSameNElem: function getSameNElem(elem, n) {
          var ret = [];
          for (var i = 0; i < n; i++) {
            ret.push(elem);
          }
          return ret;
        },
        /**
         * 查找数组是否包含某元素
         * @author: qiaomingwu
         * @param {T[]} arr 数组
         * @param {function} cb Lambda表达式
         */
        findItemInArr: function findItemInArr(arr, cb) {
          for (var i = 0; i < arr.length; i++) {
            var info = arr[i];
            if (cb(info)) {
              return info;
            }
          }
        },
        findItemIdxInArr: function findItemIdxInArr(arr, cb) {
          for (var i = 0; i < arr.length; i++) {
            var info = arr[i];
            if (cb(info)) {
              return i;
            }
          }
          return -1;
        },
        FirstOrDefault: function FirstOrDefault(arr, selector) {
          for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            if (!selector || selector(item)) {
              return item;
            }
          }
          return undefined;
        },
        sumElem: function sumElem(arr, selector) {
          var num = 0;
          for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            num += selector(item);
          }
          return num;
        },
        count: function count(arr, selector) {
          var num = 0;
          for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            if (!selector || selector(item)) {
              num++;
            }
          }
          return num;
        },
        filterArr: function filterArr(arr, selector) {
          var ret = [];
          for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            if (!selector || selector(item)) {
              ret.push(item);
            }
          }
          return ret;
        },
        // 重复的没有处理 一般结合unique使用
        merge: function merge(target, src) {
          for (var i = 0; i < src.length; i++) {
            target.push(src[i]);
          }
        },
        // 检查二维数组长度
        CheckArrayArray: function CheckArrayArray(item, length_1, length_2) {
          if (!item || item.length === 0) return false;
          if (length_1 < 0 || length_2 < 0) {
            console.error("填了小于0的长度"); //[SKIP_CHARACTER_CHECK]
            return false;
          }
          if (item.length < length_1) {
            console.error("需求参数长度不对啊！小老弟怎么回事啊？"); //[SKIP_CHARACTER_CHECK]
            return false;
          }
          for (var i = 0; i < length_1; i++) {
            if (!item[i]) {
              console.error("数组为空！小老弟怎么回事啊？"); //[SKIP_CHARACTER_CHECK]
              return false;
            }
            if (item[i].length < length_2) {
              console.error("需求参数长度不对啊！小老弟怎么回事啊？"); //[SKIP_CHARACTER_CHECK]
              return false;
            }
          }
          return true;
        },
        /**
         * @description: 数组去重
         * @param {any} array 需要去重的数组
         * @return {void}
         */
        unique: function unique(array) {
          var i = 0;
          while (i < array.length) {
            var val = array[i];
            for (var j = array.length - 1; j > i; j--) {
              if (val === array[j]) {
                array.splice(j, 1);
              }
            }
            ++i;
          }
        },
        fillToLength: function fillToLength(array, newLen, value) {
          newLen = Math.max(0, newLen);
          var len = array.length;
          if (len < newLen) {
            var addLen = newLen - len;
            for (var i = 0; i < addLen; ++i) {
              if (typeof value == "object") {
                array.push(ObjectUtil.deepCopy(value));
              } else {
                array.push(value);
              }
            }
          } else if (len > newLen) {
            array.splice(newLen, len - newLen);
          }
          return array;
        },
        isAllZero: function isAllZero(array) {
          for (var _iterator = _createForOfIteratorHelperLoose(array), _step; !(_step = _iterator()).done;) {
            var v = _step.value;
            if (v != 0) return false;
          }
          return true;
        },
        splitByCount: function splitByCount(arr, count) {
          count = Math.max(1, count);
          var ret = [];
          var tmp = [];
          for (var _iterator2 = _createForOfIteratorHelperLoose(arr), _step2; !(_step2 = _iterator2()).done;) {
            var v = _step2.value;
            tmp.push(v);
            if (tmp.length == count) {
              ret.push(tmp);
              tmp = [];
            }
          }
          if (tmp.length > 0) {
            ret.push(tmp);
          }
          return ret;
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AssetMgrComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LoadMgr.ts', './I18n.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, isValid, Sprite, instantiate, Component, LoadMgr, I18n;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      isValid = module.isValid;
      Sprite = module.Sprite;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      LoadMgr = module.LoadMgr;
    }, function (module) {
      I18n = module.I18n;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "cbd48E/pMNB5YJYVNI+GUWI", "AssetMgrComp", undefined);
      var ccclass = _decorator.ccclass;
      var AssetMgrComp = exports('AssetMgrComp', ccclass(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AssetMgrComp, _Component);
        function AssetMgrComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /** destroy需要被释放的资源 */
          _this._assets = {};
          // 正在加载的预制体路径
          _this._loadingPrefabs = {};
          return _this;
        }
        var _proto = AssetMgrComp.prototype;
        _proto.setSpriteFrame = function setSpriteFrame(node, path, cb, bundleName, isLang) {
          var _this2 = this;
          if (bundleName === void 0) {
            bundleName = "resources";
          }
          if (isLang === void 0) {
            isLang = false;
          }
          if (isLang) {
            var tmpPath = I18n.getSpriteNameForLang(path);
            if (tmpPath != "" && LoadMgr.instance.hasSpriteFrame(tmpPath, bundleName)) {
              path = tmpPath;
            }
          }
          var convertNode = node;
          convertNode.__bindPath__ = path; // 异步回调做对比用
          var tempFunc = function tempFunc(sp) {
            if (isValid(node) && convertNode.__bindPath__.endsWith(sp.name)) {
              var _sprite = node.getComponent(Sprite);
              if (!_sprite) {
                _sprite = node.addComponent(Sprite);
              }
              _sprite.spriteFrame = sp;
              cb && cb(_sprite);
              return true;
            }
            return false;
          };
          if (isValid(this._assets[path])) {
            tempFunc(this._assets[path]);
          } else {
            LoadMgr.instance.loadSpriteFrame(path, function (data) {
              if (data) {
                if (tempFunc(data)) {
                  _this2.addAsset(data, path);
                }
              }
            }, bundleName);
          }
        };
        _proto.setSpriteFrameByPlist = function setSpriteFrameByPlist(node, name, plistName, cb, bundleName, isLang) {
          var _this3 = this;
          if (bundleName === void 0) {
            bundleName = "resources";
          }
          if (isLang === void 0) {
            isLang = false;
          }
          var convertNode = node;
          convertNode.__bindPlistName__ = plistName;
          convertNode.__bindFrameName__ = name;
          var tempFunc = function tempFunc(plist) {
            if (!isValid(node) || !convertNode.__bindPlistName__.endsWith(plist.name)) return false;
            var sprite = node.getComponent(Sprite);
            if (!sprite) {
              sprite = node.addComponent(Sprite);
            }
            var frame = null;
            if (isLang) {
              var lanName = I18n.getSpriteNameForLang(convertNode.__bindFrameName__);
              frame = plist.getSpriteFrame(lanName);
              if (frame == null && lanName != convertNode.__bindFrameName__) {
                frame = plist.getSpriteFrame(convertNode.__bindFrameName__);
              }
            } else {
              frame = plist.getSpriteFrame(convertNode.__bindFrameName__);
            }
            if (!frame) {
              console.warn("AssetMgrComp.setSpriteFrameByPlist " + convertNode.__bindFrameName__ + " not exists in " + convertNode.__bindFrameName__ + ", isLang:" + isLang);
            }
            sprite.spriteFrame = frame;
            cb && cb(sprite);
            return true;
          };
          if (isValid(this._assets[plistName])) {
            var plist = this._assets[plistName];
            tempFunc(plist);
          } else {
            LoadMgr.instance.loadSpritePlist(plistName, function (data) {
              if (data) {
                if (tempFunc(data)) {
                  _this3.addAsset(data, plistName);
                }
              }
            }, bundleName);
          }
        };
        _proto.setPrefab = function setPrefab(path, cb, bundleName, checkComp, failTimes) {
          var _this4 = this;
          if (bundleName === void 0) {
            bundleName = "resources";
          }
          if (checkComp === void 0) {
            checkComp = true;
          }
          if (failTimes === void 0) {
            failTimes = 3;
          }
          var tempFunc = function tempFunc(prefab) {
            if (!isValid(_this4)) return false;
            _this4._loadingPrefabs[path] = false;
            if (isValid(_this4.node)) {
              var _node = instantiate(prefab);
              var _comp = null;
              if (checkComp) {
                _comp = _node.getComponent(prefab.name);
                if (!_comp) {
                  _comp = _node.addComponent(prefab.name);
                }
              }
              cb(_node, _comp);
              return true;
            }
            return false;
          };
          this._loadingPrefabs[path] = true;
          if (isValid(this._assets[path])) {
            tempFunc(this._assets[path]);
          } else {
            LoadMgr.instance.loadPrefab(path, function (data) {
              if (data) {
                if (tempFunc(data)) {
                  _this4.addAsset(data, path);
                }
              } else {
                // 有错误 重新试一次
                if (failTimes > 0) {
                  if (!isValid(_this4)) return;
                  _this4.scheduleOnce(function () {
                    if (!isValid(_this4)) return;
                    _this4.setPrefab(path, cb, bundleName, checkComp, --failTimes);
                  }, 1);
                }
              }
            }, bundleName);
          }
        };
        _proto.checkPrefabLoadedOrLoading = function checkPrefabLoadedOrLoading(path) {
          if (this._loadingPrefabs[path] || this._assets[path]) {
            return true;
          }
          return false;
        };
        _proto.addAsset = function addAsset(asset, name) {
          if (!name) {
            name = asset.name;
          }
          if (this._assets[name] == asset) return;
          if (this._assets[name] && isValid(this._assets[name])) {
            // 相同的就不管了
            if (this._assets[name] != asset) {
              this._assets[name].decRef();
            }
          }
          asset.addRef();
          this._assets[name] = asset;
        };
        _proto.onDestroy = function onDestroy() {
          // 引用计数增加后做释放操作
          for (var _key2 in this._assets) {
            if (isValid(this._assets[_key2])) {
              this._assets[_key2].decRef();
            }
          }
          this._assets = {};
        };
        return AssetMgrComp;
      }(Component)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AssetUtil.ts", ['cc', './AssetMgrComp.ts', './SpineComp.ts', './LoadMgr.ts', './LogMgr.ts', './UIUtils.ts'], function (exports) {
  var cclegacy, isValid, instantiate, AssetMgrComp, SpineComp, LoadMgr, LogMgr, UIUtils;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      isValid = module.isValid;
      instantiate = module.instantiate;
    }, function (module) {
      AssetMgrComp = module.AssetMgrComp;
    }, function (module) {
      SpineComp = module.SpineComp;
    }, function (module) {
      LoadMgr = module.LoadMgr;
    }, function (module) {
      LogMgr = module.LogMgr;
    }, function (module) {
      UIUtils = module.UIUtils;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2f2ackqdxZODJ/H9xW4q8KN", "AssetUtil", undefined);
      var AssetUtil = exports('AssetUtil', /*#__PURE__*/function () {
        function AssetUtil() {}
        AssetUtil.getAtlasNameByFrame = function getAtlasNameByFrame(name) {
          for (var _key in this.AtlasConfig) {
            var config = this.AtlasConfig[_key];
            if (config.includes(name)) {
              return _key;
            }
          }
        }

        // 设置多语言图片
        ;

        AssetUtil.setSpriteFrameForLang = function setSpriteFrameForLang(node, name, assetMgrNode, cb, bundleName) {
          if (bundleName === void 0) {
            bundleName = "resources";
          }
          AssetUtil.setSpriteFrameByAtlas(node, name, assetMgrNode, cb, bundleName, true);
        }

        // 设置atlas的图集资源可以用这个,以后美术命名图集里面的子图就不用一些规则讲究了,只要保证不重复即可
        ;

        AssetUtil.setSpriteFrameByAtlas = function setSpriteFrameByAtlas(node, name, assetMgrNode, cb, bundleName, isLang) {
          if (bundleName === void 0) {
            bundleName = "resources";
          }
          if (isLang === void 0) {
            isLang = false;
          }
          if (name === undefined || name == "") return;
          var atlasName = this.getAtlasNameByFrame(name);
          if (atlasName) {
            this.setSpriteFrameByPlist(node, name, atlasName, assetMgrNode, cb, bundleName, isLang);
          } else {
            this.setSpriteFrameBySingle(node, name, assetMgrNode, cb, bundleName, isLang);
          }
        }

        // 散图方式
        ;

        AssetUtil.setSpriteFrameBySingle = function setSpriteFrameBySingle(node, path, assetMgrNode, cb, bundleName, isLang) {
          if (bundleName === void 0) {
            bundleName = "resources";
          }
          if (isLang === void 0) {
            isLang = false;
          }
          if (!assetMgrNode) {
            assetMgrNode = node;
          }
          var comp = this.checkAssetMgrComp(assetMgrNode);
          comp.setSpriteFrame(node, path, cb, bundleName, isLang);
        }

        // 图集方式
        ;

        AssetUtil.setSpriteFrameByPlist = function setSpriteFrameByPlist(node, path, plistName, assetMgrNode, cb, bundleName, isLang) {
          if (bundleName === void 0) {
            bundleName = "resources";
          }
          if (isLang === void 0) {
            isLang = false;
          }
          if (!assetMgrNode) {
            assetMgrNode = node;
          }
          var comp = this.checkAssetMgrComp(assetMgrNode);
          comp.setSpriteFrameByPlist(node, path, plistName, cb, bundleName, isLang);
        }

        // 多语言动画
        ;

        AssetUtil.loadSpineToNodeForLang = function loadSpineToNodeForLang(node, name, cb, animation, loop, failTimes) {
          if (animation === void 0) {
            animation = "";
          }
          if (loop === void 0) {
            loop = true;
          }
          if (failTimes === void 0) {
            failTimes = 0;
          }
          return this.loadSpineToNode(node, name, cb, animation, loop, failTimes, true);
        }

        /** 
         * 在一个节点上加载spine动画,并且播放animation 
         * 它的引用计数管理放在SpineComp中去,而不是AssetMgrComp中
         * */;
        AssetUtil.loadSpineToNode = function loadSpineToNode(node, name, cb, animation, loop, failTimes, isLang) {
          var _this = this;
          if (animation === void 0) {
            animation = "";
          }
          if (loop === void 0) {
            loop = true;
          }
          if (failTimes === void 0) {
            failTimes = 0;
          }
          if (isLang === void 0) {
            isLang = false;
          }
          var spineComp = node.getComponent(SpineComp);
          if (!spineComp) {
            spineComp = node.addComponent(SpineComp);
          }
          spineComp.loadData(name, function (b, asset) {
            if (b) {
              var _spineComp;
              (_spineComp = spineComp) == null || _spineComp.setAnimation(animation, loop);
              cb && cb(asset);
            } else {
              // 失败了
              if (failTimes > 0) {
                var _spineComp2;
                (_spineComp2 = spineComp) == null || _spineComp2.scheduleOnce(function () {
                  _this.loadSpineToNode(node, name, cb, animation, loop, --failTimes, isLang);
                }, 1);
              }
            }
          }, isLang);
          return spineComp;
        }

        /**
         * 将一个预制体加到parentNode上 并且pareantNode兼顾管理释放
         * @param parentNode 
         * @param path 
         * @param cb 
         * @param bundleName 
         */;
        AssetUtil.addPrefab = function addPrefab(parentNode, path, cb, bundleName, checkComp) {
          if (bundleName === void 0) {
            bundleName = "resources";
          }
          if (checkComp === void 0) {
            checkComp = true;
          }
          var comp = this.checkAssetMgrComp(parentNode);
          comp.setPrefab(path, function (node, comp) {
            node.parent = parentNode;
            cb && cb(node, comp);
          }, bundleName, checkComp);
        }

        // 只能加载一个
        ;

        AssetUtil.addOnlyPrefab = function addOnlyPrefab(parentNode, path, cb, bundleName, checkComp) {
          if (bundleName === void 0) {
            bundleName = "resources";
          }
          if (checkComp === void 0) {
            checkComp = true;
          }
          var comp = this.checkAssetMgrComp(parentNode);
          if (comp.checkPrefabLoadedOrLoading(path)) return;
          comp.setPrefab(path, function (node, comp) {
            if (!isValid(parentNode)) return;
            if (!isValid(parentNode.getChildByName(node.name))) {
              node.parent = parentNode;
              cb && cb(node, comp);
            }
          }, bundleName, checkComp);
        };
        AssetUtil.addPrefabs = function addPrefabs(addPrefabInfos, completeCb, oneComplete) {
          var _this2 = this;
          var index = 0;
          var addFunc = function addFunc() {
            var info = addPrefabInfos[index++];
            if (!info) {
              completeCb();
              return;
            }
            _this2.addPrefab(info.parentNode, info.path, function (node) {
              oneComplete && oneComplete(node);
              addFunc();
            });
          };
          addFunc();
        }

        /**
         * 重复加载同一个预制体
         * @param parentNode 父节点
         * @param path 预制体路劲
         * @param repeat 加载次数
         * @param oneComplete 单个加载完成回调
         * @param completeCb 全部加载完成回调
         */;
        AssetUtil.addRepeatPrefabs = function addRepeatPrefabs(parentNode, path, repeat, oneComplete, completeCb) {
          var _this3 = this;
          var index = 0;
          var addFunc = function addFunc() {
            if (index >= repeat) {
              completeCb && completeCb();
              return;
            }
            _this3.addPrefab(parentNode, path, function (node) {
              oneComplete && oneComplete(node, index);
              index++;
              addFunc();
            });
          };
          addFunc();
        }

        /**
         * 加载预制体,并且加上对应的组件,要求组件名字和预制体名字一致
         * 一般在WinMgr里面用,注意调用者需要负责引用计数管理
         * @param path 
         * @param cb 
         * @param bundleName 
         */;
        AssetUtil.loadPrefab = function loadPrefab(path, cb, bundleName) {
          if (bundleName === void 0) {
            bundleName = "resources";
          }
          UIUtils.recordTimeBegin(path);
          LogMgr.log("AssetUtil.loadPrefab, path: " + path);
          LoadMgr.instance.loadPrefab(path, function (data) {
            if (data) {
              LogMgr.log("AssetUtil.loadPrefab success, path: " + path);
              UIUtils.recordTimeEnd(path);
              var _node = instantiate(data);
              if (!_node.getComponent(data.name)) {
                _node.addComponent(data.name);
              }
              cb(_node, data);
            } else {
              LogMgr.log("AssetUtil.loadPrefab fail, path: " + path);
            }
          }, bundleName);
        }

        //检测节点是否有AssetMgrComp组件，没有则添加
        ;

        AssetUtil.checkAssetMgrComp = function checkAssetMgrComp(node) {
          var comp = node.getComponent(AssetMgrComp);
          if (!comp) {
            comp = node.addComponent(AssetMgrComp);
          }
          return comp;
        };
        return AssetUtil;
      }());
      AssetUtil.AtlasConfig = {};
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioConfig.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3ed56a7E45Af7iXZJQytuDp", "AudioConfig", undefined);
      var AudioConfig = exports('AudioConfig', {
        // 放置的路径
        AudioPath: "audio/sound/",
        BgmPath: "audio/music/",
        // 背景音乐
        MAIN_BGM: "bg_01",
        // 通用的一些音效
        COMMON_EFF: {
          CLICK_BTN: "click_btn"
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './StorageConst.ts', './LoadMgr.ts', './LocalStorage.ts', './AudioConfig.ts'], function (exports) {
  var _createClass, cclegacy, misc, AudioSource, AudioClip, Node, director, StorageConst, LoadMgr, LocalStorage, AudioConfig;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      misc = module.misc;
      AudioSource = module.AudioSource;
      AudioClip = module.AudioClip;
      Node = module.Node;
      director = module.director;
    }, function (module) {
      StorageConst = module.StorageConst;
    }, function (module) {
      LoadMgr = module.LoadMgr;
    }, function (module) {
      LocalStorage = module.LocalStorage;
    }, function (module) {
      AudioConfig = module.AudioConfig;
    }],
    execute: function () {
      cclegacy._RF.push({}, "668ebD0LSdNmY6PbIFAmL8d", "AudioMgr", undefined);
      var DEFAULT_VOLUME = 0.5;
      var AudioMgr = exports('AudioMgr', /*#__PURE__*/function () {
        //0-1

        function AudioMgr() {
          //音频播放组件
          this._musicSources = {};
          this._effSource = void 0;
          this._musicState = true;
          this._soundState = true;
          this._musicVolume = DEFAULT_VOLUME;
          //0-1
          this._soundVolume = DEFAULT_VOLUME;
          var node = new Node();
          node.name = "__AudioManager__";
          this._effSource = node.addComponent(AudioSource);
          var tb = [AudioConfig.MAIN_BGM];
          for (var _i = 0, _tb = tb; _i < _tb.length; _i++) {
            var _key = _tb[_i];
            var _n = new Node();
            _n.name = _key.toString();
            _n.parent = node;
            var s = _n.addComponent(AudioSource);
            this._musicSources[_key] = s;
          }
          var scene = director.getScene();
          if (scene) {
            scene.addChild(node);
            director.addPersistRootNode(node);
          }
        }
        AudioMgr.destroy = function destroy() {
          if (this._instance) {
            this._instance.pauseAll();
            this._instance.stopAll();
            //删除节点
            this._instance._effSource.node.destroy();
            for (var name in this._instance._musicSources) {
              this._instance._musicSources[name].node.destroy();
            }
          }
          this._instance = null;
        };
        var _proto = AudioMgr.prototype;
        _proto.init = function init() {
          this._musicState = this.getOpenState(true);
          this._soundState = this.getOpenState(false);
          this._musicVolume = this.getVolume(true);
          this._soundVolume = this.getVolume(false);
          this.updateMusicVolume();
          this.updateEffectVolume();
        }

        /**
         * 获取音乐或音效状态
         * @param {boolean} isMusic 是否为音乐
         */;
        _proto.getOpenState = function getOpenState(isMusic) {
          if (isMusic === void 0) {
            isMusic = true;
          }
          return LocalStorage.get(isMusic ? StorageConst.GameConst.MUSIC : StorageConst.GameConst.SOUND_EFF, true);
        }

        /**
         * 获取音乐或音效音量
         * @param {boolean} isMusic 是否为音乐
         */;
        _proto.getVolume = function getVolume(isMusic) {
          if (isMusic === void 0) {
            isMusic = true;
          }
          var n = LocalStorage.get(isMusic ? StorageConst.GameConst.VOLUME_MUSIC : StorageConst.GameConst.VOLUME_SOUND_EFF, DEFAULT_VOLUME);
          n = misc.clampf(n, 0, 1);
          return n;
        }

        /**
         * 播放背景音乐
         * @param sound 
         * @param cb 
         */;
        _proto.playMusic = function playMusic() {
          if (!this._musicState) {
            return;
          }
          var musicKey = this.getMusicKey();
          this.pauseAllMusic(musicKey);
          if (musicKey.length == 0) return;
          var audioSource = this._musicSources[musicKey];
          if (!audioSource) return;
          if (audioSource.state == AudioSource.AudioState.PAUSED) {
            audioSource.play();
          } else if (audioSource.state == AudioSource.AudioState.PLAYING) {
            return;
          } else {
            LoadMgr.instance.loadMusic(musicKey, function (clip) {
              audioSource.clip = clip;
              audioSource.loop = true;
              audioSource.play();
            });
          }
        }

        /** 
        *播放音效,支持string和AudioClip两种类型
        */;
        _proto.playOneShot = function playOneShot(sound, cb, volumeScale) {
          var _this = this;
          if (!this._soundState) {
            return;
          }
          if (sound instanceof AudioClip) {
            this._effSource.playOneShot(sound, volumeScale);
            if (cb) {
              cb(sound);
            }
          } else {
            LoadMgr.instance.loadSound(sound, function (clip) {
              _this._effSource.playOneShot(clip, volumeScale);
              if (cb) {
                cb(clip);
              }
            });
          }
        };
        _proto.stopAll = function stopAll() {
          this.stopAllEffect();
          this.stopAllMusic();
        };
        _proto.stopAllEffect = function stopAllEffect() {
          this._effSource.stop();
        };
        _proto.stopAllMusic = function stopAllMusic(ignoreKey) {
          for (var name in this._musicSources) {
            if (ignoreKey === undefined || name != ignoreKey) {
              this._musicSources[name].stop();
            }
          }
        };
        _proto.pauseAll = function pauseAll() {
          this.pauseAllEffect();
          this.pauseAllMusic();
        };
        _proto.pauseAllEffect = function pauseAllEffect() {
          this._effSource.pause();
        };
        _proto.pauseAllMusic = function pauseAllMusic(ignoreKey) {
          for (var name in this._musicSources) {
            if (ignoreKey === undefined || name != ignoreKey) {
              this._musicSources[name].pause();
            }
          }
        }

        /**
         * 设置音乐开启或者关闭
         */;
        _proto.setMusicState = function setMusicState(b) {
          LocalStorage.set(StorageConst.GameConst.MUSIC, b ? 'true' : "false");
          this._musicState = b;
          if (this._musicState) {
            // 判断当前背景音乐的状态
            this.playMusic();
          } else {
            this.pauseAllMusic();
          }
        }

        /**
        * 设置音效开启或者关闭
        */;
        _proto.setEffectState = function setEffectState(b) {
          LocalStorage.set(StorageConst.GameConst.SOUND_EFF, b ? 'true' : "false");
          this._soundState = b;
        }

        /**
         * 设置音乐音量
         */;
        _proto.setMusicVolume = function setMusicVolume(n) {
          n = misc.clampf(n, 0, 1);
          LocalStorage.set(StorageConst.GameConst.VOLUME_MUSIC, n.toFixed(2));
          this._musicVolume = n;
          this.updateMusicVolume();
        }

        /**
         * 设置音效音量
         */;
        _proto.setEffectVolume = function setEffectVolume(n) {
          n = misc.clampf(n, 0, 1);
          LocalStorage.set(StorageConst.GameConst.VOLUME_SOUND_EFF, n.toFixed(2));
          this._soundVolume = n;
          this.updateEffectVolume();
        }

        /**
         * 更新音乐音量
         */;
        _proto.updateMusicVolume = function updateMusicVolume() {
          for (var name in this._musicSources) {
            this._musicSources[name].volume = this._musicVolume;
          }
        }

        /**
         * 更新音效音量
         */;
        _proto.updateEffectVolume = function updateEffectVolume() {
          this._effSource.volume = this._soundVolume;
        };
        _proto.getMusicKey = function getMusicKey() {
          var name = "";
          return name;
        };
        _createClass(AudioMgr, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new AudioMgr();
              this._instance.init();
            }
            return this._instance;
          }
        }]);
        return AudioMgr;
      }());
      AudioMgr._instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AutoRichTextFontSize.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, RichText, Component, Utils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      RichText = module.RichText;
      Component = module.Component;
    }, function (module) {
      Utils = module.Utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "ad4f5UGe/hCTqjJSdluUrGG", "AutoRichTextFontSize", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode,
        requireComponent = _decorator.requireComponent;
      var AutoRichTextFontSize = exports('AutoRichTextFontSize', (_dec = ccclass('AutoRichTextFontSize'), _dec2 = requireComponent(RichText), _dec3 = executeInEditMode(true), _dec4 = property({
        displayName: 'WidthMax',
        visible: true,
        tooltip: '设置最大宽度(0表示不限制)'
      }), _dec5 = property({
        displayName: 'HeightMax',
        visible: true,
        tooltip: '设置最大高度(0表示不限制)'
      }), _dec6 = property({
        displayName: 'FontSizeMax',
        visible: true,
        tooltip: '字体最大size'
      }), _dec7 = property({
        displayName: 'FontSizeMin',
        visible: true,
        tooltip: '字体最小size'
      }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AutoRichTextFontSize, _Component);
        function AutoRichTextFontSize() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_widthMax", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_heightMax", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_fontSizeMax", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_fontSizeMin", _descriptor4, _assertThisInitialized(_this));
          _this._richText = null;
          _this._richStr = "";
          return _this;
        }
        var _proto = AutoRichTextFontSize.prototype;
        _proto.onLoad = function onLoad() {
          this._richText = this.getComponent(RichText);
          if (this._richText) {
            this._richStr = this._richText.string;
          }
          this.autoSetFontSize();
        };
        _proto.update = function update(dt) {
          if (this._richText == null) return;
          var tmpStr = this._richText.string;
          if (this._richStr != tmpStr) {
            this._richStr = tmpStr;
            this.autoSetFontSize();
          }
        };
        _proto.autoSetFontSize = function autoSetFontSize() {
          if (this._richText == null) return;
          if (this._widthMax <= 0 && this._heightMax <= 0) return;
          var count = 10;
          var i = 0;
          do {
            var fontSize = Math.floor(this._fontSizeMax - (this._fontSizeMax - this._fontSizeMin) * (i / count));
            this._richText.fontSize = fontSize;
            this._richText.lineHeight = fontSize + 4;
            var _size = Utils.getContentSize(this.node);
            var isBreak = true;
            if (this._widthMax > 0 && _size.width > this._widthMax || this._heightMax > 0 && _size.height > this._heightMax) {
              isBreak = false;
            }
            if (isBreak) break;
            i++;
          } while (i <= count);
        };
        return AutoRichTextFontSize;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_widthMax", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_heightMax", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_fontSizeMax", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_fontSizeMin", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Base64.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "83af7qaBCpFjKyxlE8haGcK", "Base64", undefined);
      var Base64 = exports('Base64', /*#__PURE__*/function () {
        function Base64() {}
        // public method for encoding
        Base64.encode = function encode(input) {
          var output = '';
          var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
          var i = 0;
          input = this._utf8_encode(input);
          while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = (chr1 & 3) << 4 | chr2 >> 4;
            enc3 = (chr2 & 15) << 2 | chr3 >> 6;
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
              enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
              enc4 = 64;
            }
            output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
          }
          return output;
        }

        // public method for decoding
        ;

        Base64.decode = function decode(input) {
          var output = '';
          var chr1, chr2, chr3;
          var enc1, enc2, enc3, enc4;
          var i = 0;
          input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
          while (i < input.length) {
            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));
            chr1 = enc1 << 2 | enc2 >> 4;
            chr2 = (enc2 & 15) << 4 | enc3 >> 2;
            chr3 = (enc3 & 3) << 6 | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 !== 64) {
              output = output + String.fromCharCode(chr2);
            }
            if (enc4 !== 64) {
              output = output + String.fromCharCode(chr3);
            }
          }
          output = this._utf8_decode(output);
          return output;
        }

        // private method for UTF-8 encoding
        ;

        Base64._utf8_encode = function _utf8_encode(str) {
          str = str.replace(/\r\n/g, '\n');
          var utftext = '';
          for (var n = 0; n < str.length; n++) {
            var c = str.charCodeAt(n);
            if (c < 128) {
              utftext += String.fromCharCode(c);
            } else if (c > 127 && c < 2048) {
              utftext += String.fromCharCode(c >> 6 | 192);
              utftext += String.fromCharCode(c & 63 | 128);
            } else {
              utftext += String.fromCharCode(c >> 12 | 224);
              utftext += String.fromCharCode(c >> 6 & 63 | 128);
              utftext += String.fromCharCode(c & 63 | 128);
            }
          }
          return utftext;
        }

        // private method for UTF-8 decoding
        ;

        Base64._utf8_decode = function _utf8_decode(utftext) {
          var str = '';
          var i = 0;
          var c = 0,
            c2 = 0,
            c3 = 0;
          while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
              str += String.fromCharCode(c);
              i++;
            } else if (c > 191 && c < 224) {
              c2 = utftext.charCodeAt(i + 1);
              str += String.fromCharCode((c & 31) << 6 | c2 & 63);
              i += 2;
            } else {
              c2 = utftext.charCodeAt(i + 1);
              c3 = utftext.charCodeAt(i + 2);
              str += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
              i += 3;
            }
          }
          return str;
        };
        return Base64;
      }());
      // private property
      Base64._keyStr = '';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventListener.ts', './NetMgr.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, EventListener, NetMgr;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EventListener = module.EventListener;
    }, function (module) {
      NetMgr = module.NetMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "95a4f16d5tPWYm3dlRNUIx9", "BaseMgr", undefined);
      var BaseMgr = exports('BaseMgr', /*#__PURE__*/function () {
        function BaseMgr() {
          // 监听网络消息
          this._listeners = [];
          this._destroyed = false;
          //初始化规则：
          // 基类的成员初始化
          // 基类的构造函数初始化
          // 子类的成员初始化
          // 子类的构造函数初始化
          this._initCmds();
          this._registerListeners();
          BaseMgr._mgrs.push(this);
        }
        var _proto = BaseMgr.prototype;
        _proto.init = function init() {}

        // 子类要实现
        ;

        _proto._initCmds = function _initCmds() {};
        _proto._registerListeners = function _registerListeners() {
          for (var _iterator = _createForOfIteratorHelperLoose(this._listeners), _step; !(_step = _iterator()).done;) {
            var listener = _step.value;
            // mgr中的监听都是全局监听,相同协议的监听只能存在一个
            NetMgr.instance.cleanListeners(listener[0]);
            NetMgr.instance.addResponseListener(listener[0], listener[1], this);
          }
        };
        _proto.destroy = function destroy() {
          this._destroyed = true;
          // 移除自定义事件监听
          EventListener.offByTarget(this);
          // 移除网络协议监听
          NetMgr.instance.removeResponseListenerTarget(this);
        };
        BaseMgr.destroyMgrs = function destroyMgrs() {
          BaseMgr._mgrs.forEach(function (mgr) {
            mgr.destroy();
          });
          BaseMgr._mgrs.length = 0;
        };
        return BaseMgr;
      }());
      BaseMgr._mgrs = [];
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventListener.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, EventListener;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EventListener = module.EventListener;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5f55fyHi2lNaZ0kzeIa9v/+", "BaseModel", undefined);
      var BaseModel = exports('BaseModel', /*#__PURE__*/function () {
        function BaseModel() {
          this._listeners = [];
          this.initListeners();
          this._addEventListener();
        }

        // 自定义事件列表，需要子类自己实现
        var _proto = BaseModel.prototype;
        _proto.initListeners = function initListeners() {};
        _proto._addEventListener = function _addEventListener() {
          for (var _iterator = _createForOfIteratorHelperLoose(this._listeners), _step; !(_step = _iterator()).done;) {
            var listener = _step.value;
            EventListener.on(listener);
          }
        };
        _proto.destroy = function destroy() {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this._listeners), _step2; !(_step2 = _iterator2()).done;) {
            var listener = _step2.value;
            EventListener.off(listener);
          }
          this._listeners = [];
        };
        return BaseModel;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BattleCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseMgr.ts', './Command.ts', './LogMgr.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, BaseMgr, MsgId, LogMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseMgr = module.BaseMgr;
    }, function (module) {
      MsgId = module.MsgId;
    }, function (module) {
      LogMgr = module.LogMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e59c0YWe+dFGYbWd5VRXko3", "BattleCtrl", undefined);
      var BattleCtrl = exports('BattleCtrl', /*#__PURE__*/function (_BaseMgr) {
        _inheritsLoose(BattleCtrl, _BaseMgr);
        function BattleCtrl() {
          return _BaseMgr.apply(this, arguments) || this;
        }
        var _proto = BattleCtrl.prototype;
        _proto._initCmds = function _initCmds() {
          this._listeners = [[MsgId.GameStartReply, this._onReplyGameStart]];
        };
        _proto.init = function init() {
          this.reset();
        };
        _proto.reset = function reset() {
          LogMgr.loggreen("battle ctrl reset");
        };
        _proto.onTick = function onTick(dt) {};
        _proto._onReplyGameStart = function _onReplyGameStart(msg) {};
        _createClass(BattleCtrl, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance || this._instance._destroyed) {
              this._instance = new BattleCtrl();
              this._instance.init();
            }
            return this._instance;
          }
        }]);
        return BattleCtrl;
      }(BaseMgr));
      BattleCtrl._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BlankScreen.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './WinMgr.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Node, Component, WinMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      WinMgr = module.WinMgr;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "c2ceaBLR4BHz4grhhAhuEmS", "BlankScreen", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BlankScreen = exports('BlankScreen', (_dec = ccclass('BlankScreen'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BlankScreen, _Component);
        function BlankScreen() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = BlankScreen.prototype;
        _proto.onLoad = function onLoad() {
          this.node.on(Node.EventType.TOUCH_END, function () {
            WinMgr.instance.closeTop(false);
          });
        };
        return BlankScreen;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ChannelMgr.ts", ['cc', './channel_config.ts'], function (exports) {
  var cclegacy, channel_config;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      channel_config = module.channel_config;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fbc12MZi4xCq5U+F2IiqHuC", "ChannelMgr", undefined);
      var ChannelMgr = exports('ChannelMgr', /*#__PURE__*/function () {
        function ChannelMgr() {}
        // 抖音
        ChannelMgr.isTikTok = function isTikTok() {
          return channel_config.channelName == "TikTok";
        }
        // 折跃TK
        ;

        ChannelMgr.isZheYueTK = function isZheYueTK() {
          return channel_config.channelName == "ZheYueTK";
        }
        // 快手小程序
        ;

        ChannelMgr.isKsMiniGame = function isKsMiniGame() {
          return channel_config.channelName == "KsMiniGame";
        }
        // 快手小程序(web测试包)
        ;

        ChannelMgr.isKsMiniGameWebTest = function isKsMiniGameWebTest() {
          return channel_config.channelName == "KsMiniGameWebTest";
        };
        return ChannelMgr;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CheckTopTouch.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Node, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "42e4eZj0bFHQpd1vBUhhlbR", "CheckTopTouch", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CheckTopTouch = exports('CheckTopTouch', (_dec = ccclass('CheckTopTouch'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CheckTopTouch, _Component);
        function CheckTopTouch() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = CheckTopTouch.prototype;
        _proto.onLoad = function onLoad() {
          this._initTouch();
        };
        _proto._initTouch = function _initTouch() {
          var _this = this;
          this.node.off(Node.EventType.TOUCH_START);
          this.node.off(Node.EventType.TOUCH_MOVE);
          this.node.off(Node.EventType.TOUCH_END);
          this.node.off(Node.EventType.TOUCH_CANCEL);
          this.node.on(Node.EventType.TOUCH_START, function (event) {
            _this.onTouchEvent(event, Node.EventType.TOUCH_START);
          });
          this.node.on(Node.EventType.TOUCH_MOVE, function (event) {
            _this.onTouchEvent(event, Node.EventType.TOUCH_MOVE);
          });
          this.node.on(Node.EventType.TOUCH_END, function (event) {
            _this.onTouchEvent(event, Node.EventType.TOUCH_END);
          });
          this.node.on(Node.EventType.TOUCH_CANCEL, function (event) {
            _this.onTouchEvent(event, Node.EventType.TOUCH_CANCEL);
          });
        };
        _proto.onTouchEvent = function onTouchEvent(event, eventType) {
          // 不吞噬触摸
          event.preventSwallow = true;
          event.propagationStopped = !event.preventSwallow;
        };
        _proto.update = function update(dt) {};
        return CheckTopTouch;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ClientEvents.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c01c7RuKL1F269e9b9tPpf+", "ClientEvents", undefined);
      var ClientEvents = exports('ClientEvents', /*#__PURE__*/function (ClientEvents) {
        ClientEvents[ClientEvents["START"] = 100] = "START";
        ClientEvents[ClientEvents["LOGIN_SUCCESS"] = 101] = "LOGIN_SUCCESS";
        ClientEvents[ClientEvents["ENTER_HIDE"] = 102] = "ENTER_HIDE";
        ClientEvents[ClientEvents["ENTER_SHOW"] = 103] = "ENTER_SHOW";
        ClientEvents[ClientEvents["UPDATE_SERVER_TIME"] = 104] = "UPDATE_SERVER_TIME";
        ClientEvents[ClientEvents["NET_ERROR"] = 105] = "NET_ERROR";
        ClientEvents[ClientEvents["NET_WEAK"] = 106] = "NET_WEAK";
        ClientEvents[ClientEvents["NET_CHANGED"] = 107] = "NET_CHANGED";
        ClientEvents[ClientEvents["SOCKET_RECONNECT_START"] = 108] = "SOCKET_RECONNECT_START";
        ClientEvents[ClientEvents["SOCKET_CONNECTED"] = 109] = "SOCKET_CONNECTED";
        ClientEvents[ClientEvents["SOCKET_ONCLOSED"] = 110] = "SOCKET_ONCLOSED";
        ClientEvents[ClientEvents["END"] = 111] = "END";
        return ClientEvents;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ColorUtil.ts", ['cc'], function (exports) {
  var cclegacy, color;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      color = module.color;
    }],
    execute: function () {
      cclegacy._RF.push({}, "48387mGqdVEDZxmrCORnGYa", "ColorUtil", undefined);
      var ColorUtil = exports('ColorUtil', {
        /**
         * 十六进制颜色转Color(包含透明度位)
         * @author: qiaomingwu
         * @param {number} colorHex 十六进制颜色
         */
        GetColorFromUIntHexData: function GetColorFromUIntHexData(colorHex) {
          return color(colorHex >> 24 & 0xFF, colorHex >> 16 & 0xFF, colorHex >> 8 & 0xFF, colorHex & 0xFF);
        },
        /**
         * 十六进制颜色转Color(不包含透明度位)
         * @author: qiaomingwu
         * @param {number} colorHex 十六进制颜色
         * @param {*} alpha 透明度
         */
        GetColorFromIntHexData: function GetColorFromIntHexData(colorHex, alpha) {
          if (alpha === void 0) {
            alpha = -1;
          }
          if (alpha >= 0 && alpha < 255) {
            return color(colorHex >> 16 & 0xFF, colorHex >> 8 & 0xFF, colorHex & 0xFF, alpha);
          } else {
            return color(colorHex >> 16 & 0xFF, colorHex >> 8 & 0xFF, colorHex & 0xFF);
          }
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ComDialogView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './WinBase.ts', './WinMgr.ts', './Utils.ts', './I18n.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Label, HorizontalTextAlignment, WinBase, WIN_MASK_TYPE, WIN_TYPE, AddClick, I18n;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      HorizontalTextAlignment = module.HorizontalTextAlignment;
    }, function (module) {
      WinBase = module.WinBase;
    }, function (module) {
      WIN_MASK_TYPE = module.WIN_MASK_TYPE;
      WIN_TYPE = module.WIN_TYPE;
    }, function (module) {
      AddClick = module.AddClick;
    }, function (module) {
      I18n = module.I18n;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "a7cbbroNQ1IXoSXNEwEE3X3", "ComDialogView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ComDialogView = exports('ComDialogView', (_dec = ccclass('ComDialogView'), _dec(_class = /*#__PURE__*/function (_WinBase) {
        _inheritsLoose(ComDialogView, _WinBase);
        function ComDialogView() {
          var _this;
          _this = _WinBase.call(this) || this;
          _this._isInitNode = false;
          _this._info = {};
          _this._defaultTitle = "";
          _this._defaultNoBtnStr = "";
          _this._defaultOkBtnStr = "";
          //UI
          _this.lb_title = void 0;
          _this.lb_content = void 0;
          _this.btnNodes = void 0;
          _this.btn_ok = void 0;
          _this.btn_no = void 0;
          _this.showType = WIN_TYPE.HIDDEN_POP;
          _this.maskType = WIN_MASK_TYPE.DARK_BLANK_CLOSE;
          _this._listeners = [];
          return _this;
        }
        var _proto = ComDialogView.prototype;
        _proto.onLoad = function onLoad() {
          _WinBase.prototype.onLoad.call(this);
          this._initNode();
          this._initEvent();
        };
        _proto._initNode = function _initNode() {
          if (this._isInitNode) return;
          this._isInitNode = true;
          this._initUI();
        };
        _proto._initUI = function _initUI() {
          this._defaultTitle = "温馨提示";
          this._defaultNoBtnStr = "取消";
          this._defaultOkBtnStr = "确认";
          //
          var rootNode = this.node.getChildByName("root");
          this.lb_title = rootNode.getChildByPath("title/Label");
          this.lb_content = rootNode.getChildByPath("content/content");
          this.btnNodes = rootNode.getChildByName("btns");
          this.btn_ok = this.btnNodes.getChildByName("OkBtn");
          this.btn_no = this.btnNodes.getChildByName("NoBtn");
        };
        _proto._initEvent = function _initEvent() {
          var _this2 = this;
          AddClick(this.btn_ok, function () {
            if (_this2._info.okCallback) {
              _this2._info.okCallback();
            }
            _this2.close();
          });
          AddClick(this.btn_no, function () {
            if (_this2._info.noCallback) {
              _this2._info.noCallback();
            }
            _this2.close();
          });
        };
        _proto.initParam = function initParam(info) {
          if (info) {
            this._info = info;
            if (this._info.isBlankClose === false) {
              this.maskType = WIN_MASK_TYPE.DARK;
            }
          }
          this._initNode();
          this.bindDataToUI();
        };
        _proto.bindDataToUI = function bindDataToUI() {
          if (this._info.title != undefined) {
            this.setTitle(this._info.title);
          } else {
            this.setTitle(this._defaultTitle);
          }
          if (this._info.content != undefined) {
            this.setContent(this._info.content);
          } else {
            this.setContent("");
          }
          this.setButtonInfo();
        };
        _proto.setTitle = function setTitle(name) {
          I18n.setLabelText(this.lb_title, name);
        };
        _proto.setContent = function setContent(content) {
          var _this$_info$horizonta;
          this.lb_content.getComponent(Label).horizontalAlign = (_this$_info$horizonta = this._info.horizontalAlign) != null ? _this$_info$horizonta : HorizontalTextAlignment.CENTER;
          I18n.setLabelText(this.lb_content, content);
        };
        _proto.setButtonInfo = function setButtonInfo() {
          this.btn_no.active = this._info.isShowNo != false;
          if (this._info.noBtnStr != undefined) {
            I18n.setLabelText(this.btn_no.getChildByName("Label"), this._info.noBtnStr);
          } else {
            I18n.setLabelText(this.btn_no.getChildByName("Label"), this._defaultNoBtnStr);
          }
          if (this._info.okBtnStr != undefined) {
            I18n.setLabelText(this.btn_ok.getChildByName("Label"), this._info.okBtnStr);
          } else {
            I18n.setLabelText(this.btn_ok.getChildByName("Label"), this._defaultOkBtnStr);
          }
        };
        _proto.onDestroy = function onDestroy() {
          _WinBase.prototype.onDestroy.call(this);
          if (this._info.closedCallback) {
            this._info.closedCallback();
          }
        };
        return ComDialogView;
      }(WinBase)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Command.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "820e6Pd4wtDqaEVh3G3mxKN", "Command", undefined);
      //本文件由导出程序自动生成，不要修改!
      var MsgId = exports('MsgId', {
        "LoginEnginRequest": 200,
        "LoginEnginReply": 201,
        "HeartRequest": 202,
        "HeartReply": 203,
        "SessionKickout": 106,
        "StopServerReply": 107,
        "GameStartRequest": 1001,
        "GameStartReply": 6001,
        "RankRequest": 1006,
        "RankReply": 6006
      });
      var MsgName = exports('MsgName', {
        "200": "dgame.barrage.engine.proto.LoginInfo",
        "201": "dgame.barrage.engine.proto.ReplyLogin",
        "202": "dgame.barrage.engine.proto.Null",
        "203": "dgame.barrage.engine.proto.LongList",
        "106": "dgame.barrage.engine.proto.Null",
        "107": "dgame.barrage.engine.proto.Null",
        "1001": "com.bear.xxld.lib.proto.GameStartRequest",
        "6001": "com.bear.xxld.lib.proto.GameStartReply",
        "1006": "com.bear.xxld.lib.proto.RankRequest",
        "6006": "com.bear.xxld.lib.proto.RankReply"
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CommonInterface.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2c478h9b1tKPJaO/KIq7LL4", "CommonInterface", undefined); // 对应协议里面的KeyLongVInt KeyIntVInt等类型
      // KeyIntVString
      //KStringVString
      // KStringVInt
      // ListInt
      // KeyIntVLong
      // SyncPlayInfo
      // SyncInfo
      // 道具数据类型{itemId, itemNum}
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ConfigUtils.ts", ['cc', './Csv.ts', './EnumConfig.ts'], function (exports) {
  var cclegacy, Csv, EnumConfig;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Csv = module.Csv;
    }, function (module) {
      EnumConfig = module.EnumConfig;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f3f41OzQ6NNMKWW88l6MjWo", "ConfigUtils", undefined);
      var eShopGoodsType = exports('eShopGoodsType', /*#__PURE__*/function (eShopGoodsType) {
        eShopGoodsType[eShopGoodsType["SUIT"] = 1] = "SUIT";
        eShopGoodsType[eShopGoodsType["ITEM"] = 2] = "ITEM";
        return eShopGoodsType;
      }({})); //道具
      var eShopPurchaseType = exports('eShopPurchaseType', /*#__PURE__*/function (eShopPurchaseType) {
        eShopPurchaseType[eShopPurchaseType["WIN_STREAK"] = 1] = "WIN_STREAK";
        eShopPurchaseType[eShopPurchaseType["MINI_GAME_CURRENCY"] = 2] = "MINI_GAME_CURRENCY";
        return eShopPurchaseType;
      }({})); //小程序货币
      var ConfigUtils = exports('ConfigUtils', /*#__PURE__*/function () {
        function ConfigUtils() {}
        ConfigUtils.initSuitConfigs = function initSuitConfigs() {
          if (!this.sSuitConfigs) {
            this.sSuitConfigs = new Map();
            var configs = Csv.Decoration;
            for (var k in configs) {
              var _v$Suit, _v$SuitName, _v$SuitDes;
              var v = configs[k];
              var _suit = (_v$Suit = v.Suit) != null ? _v$Suit : 0;
              var _suitName = (_v$SuitName = v.SuitName) != null ? _v$SuitName : "";
              var _suitDes = (_v$SuitDes = v.SuitDes) != null ? _v$SuitDes : "";
              var _type = v.Type;
              var tmpConfig = this.sSuitConfigs.get(_suit);
              if (!tmpConfig) {
                tmpConfig = {
                  suitId: _suit,
                  suitName: _suitName,
                  suitDesc: _suitDes
                };
                this.sSuitConfigs.set(_suit, tmpConfig);
              }
              if (tmpConfig) {
                if (_type == EnumConfig.DecorationType.AVATAR_FRAME) {
                  tmpConfig.headFrameConfig = v;
                } else if (_type == EnumConfig.DecorationType.NAMEPLATE) {
                  tmpConfig.nameplateConfig = v;
                }
              }
            }
          }
        };
        ConfigUtils.getSuitConfig = function getSuitConfig(suitId) {
          var _this$sSuitConfigs;
          this.initSuitConfigs();
          return (_this$sSuitConfigs = this.sSuitConfigs) == null ? void 0 : _this$sSuitConfigs.get(suitId);
        };
        ConfigUtils.getBuyGoodsTipString = function getBuyGoodsTipString(shopId) {
          var _shopConfig$Name, _shopConfig$PurchaseT, _shopConfig$BuyPrice;
          var shopConfig = Csv.Shop[shopId];
          if (!shopConfig) return undefined;
          var _name = (_shopConfig$Name = shopConfig.Name) != null ? _shopConfig$Name : "";
          var _purchaseType = (_shopConfig$PurchaseT = shopConfig.PurchaseType) != null ? _shopConfig$PurchaseT : -1;
          var _buyPrice = (_shopConfig$BuyPrice = shopConfig.BuyPrice) != null ? _shopConfig$BuyPrice : 0;
          var priceStr = "";
          if (_purchaseType == eShopPurchaseType.WIN_STREAK) {
            priceStr = _buyPrice + "\u8FDE\u80DC";
          } else if (_purchaseType == eShopPurchaseType.MINI_GAME_CURRENCY) {
            priceStr = _buyPrice + "\u5C0F\u7A0B\u5E8F\u8D27\u5E01";
          } else {
            priceStr = "" + _buyPrice;
          }
          var tipStr = "\u662F\u5426\u786E\u8BA4\u82B1\u8D39" + priceStr + "\uFF0C\u8D2D\u4E70" + _name + "\uFF1F";
          return tipStr;
        };
        ConfigUtils.getDecorationKey = function getDecorationKey(decorationType, decorationId) {
          return decorationType + "_" + decorationId;
        };
        ConfigUtils.initDecoration2ShopConfigs = function initDecoration2ShopConfigs() {
          if (!this.sDecoration2ShopConfigs) {
            this.sDecoration2ShopConfigs = new Map();
            var configs = Csv.Shop;
            for (var k in configs) {
              var _v$Type, _v$GoodsId;
              var v = configs[k];
              var _type = (_v$Type = v.Type) != null ? _v$Type : 0;
              var _goodsId = (_v$GoodsId = v.GoodsId) != null ? _v$GoodsId : 0;
              var _key = this.getDecorationKey(_type, _goodsId);
              this.sDecoration2ShopConfigs.set(_key, v);
            }
          }
        };
        ConfigUtils.getShopConfigByDecoration = function getShopConfigByDecoration(decorationType, decorationId) {
          var _this$sDecoration2Sho;
          this.initDecoration2ShopConfigs();
          var key = this.getDecorationKey(decorationType, decorationId);
          return (_this$sDecoration2Sho = this.sDecoration2ShopConfigs) == null ? void 0 : _this$sDecoration2Sho.get(key);
        };
        ConfigUtils.getDecorationBaseInfo = function getDecorationBaseInfo(decorationType, decorationId) {
          if (decorationType == eShopGoodsType.SUIT) {
            var suitConfig = this.getSuitConfig(decorationId);
            if (suitConfig) {
              var _suitConfig$suitName, _suitConfig$suitDesc;
              var info = {
                decorationName: (_suitConfig$suitName = suitConfig.suitName) != null ? _suitConfig$suitName : "",
                decorationDesc: (_suitConfig$suitDesc = suitConfig.suitDesc) != null ? _suitConfig$suitDesc : ""
              };
              return info;
            }
          } else if (decorationType == eShopGoodsType.ITEM) {
            var itemConfig = Csv.Item[decorationId];
            if (itemConfig) {
              var _itemConfig$Name, _itemConfig$ItemDes;
              var _info = {
                decorationName: (_itemConfig$Name = itemConfig.Name) != null ? _itemConfig$Name : "",
                decorationDesc: (_itemConfig$ItemDes = itemConfig.ItemDes) != null ? _itemConfig$ItemDes : ""
              };
              return _info;
            }
          }
          return undefined;
        };
        return ConfigUtils;
      }());
      ConfigUtils.DEFAULT_IMG_HEAD_FRAME = "it_img_head_chushi";
      ConfigUtils.DEFAULT_IMG_NAMEPLATE = "it_img_MingPai_chushi";
      ConfigUtils.sSuitConfigs = undefined;
      ConfigUtils.sDecoration2ShopConfigs = undefined;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Constants.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('Constants', void 0);
      cclegacy._RF.push({}, "d3fdeVAfhZD3YbF2LJWDAHa", "Constants", undefined);
      var Constants;
      (function (_Constants, _Constants$LANG_FNT) {
        var CUSTOM_BUNDLE_NAME = _Constants.CUSTOM_BUNDLE_NAME = {
          SCRIPTS: "scripts" //代码包
        };

        var INT_TYPE = _Constants.INT_TYPE = {
          /**向下取整*/
          FLOOR: 0,
          /**向上取整*/
          CEIL: 1
        };
        var LANG = _Constants.LANG = {
          CN: "Cn",
          TW: "Zh_tw",
          En: "En"
        };
        var LANG_FNT = _Constants.LANG_FNT = (_Constants$LANG_FNT = {}, _Constants$LANG_FNT[LANG.CN] = "lang/fnt/fnt_cn", _Constants$LANG_FNT[LANG.TW] = "lang/fnt/fnt_tw", _Constants$LANG_FNT[LANG.En] = "lang/fnt/fnt_en", _Constants$LANG_FNT);
        var BasicNodes = _Constants.BasicNodes = {
          Content: "content",
          Top: "top"
        };
        var GameSpeed = _Constants.GameSpeed = 1.2;
        var ServerState = _Constants.ServerState = {
          Test: 0,
          //测试预备
          New: 101,
          //新服
          Normal: 103,
          //正常
          Mainting: 110,
          //维护
          Merged: 111 //被合服了
        };

        var BaseNodeName = _Constants.BaseNodeName = {
          BLANK_SCREEN: "__BLANK_SCREEN__",
          LOCK_SCREEN: "__LOCK_SCREEN__",
          TEST_FUNC_BTN: "__TEST_FUNC_BTN__",
          TRANS_NODE: "__TRANS_NODE__",
          CHECK_TOP_TOUCH: "__CHECK_TOP_TOUCH__"
        };
        var TopNodeZOrder = _Constants.TopNodeZOrder = {
          NOTICE: 100,
          WEAK_NET_TIP: 800,
          GUIDE_EXECUTE: 900,
          WAITTING_VIEW: 998,
          LOCK_SCREEN: 999,
          CHECK_TOP_TOUCH: 1000,
          TEST_FUNC_BTN: 1001
        };
        var ContentNodeZOrder = _Constants.ContentNodeZOrder = {
          MAIN_VIEW: 0
        };
      })(Constants || (Constants = exports('Constants', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Csv.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "34549d9dNlO+KCLQ6BRYno4", "Csv", undefined);
      var Csv = exports('Csv', function Csv() {});
      Csv.Item = {};
      Csv.Shop = {};
      Csv.DefineException = {};
      Csv.Decoration = {};
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CsvLoader.ts", ['cc', './DefineObjectArr.ts'], function (exports) {
  var cclegacy, DefineObjectArr;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      DefineObjectArr = module.DefineObjectArr;
    }],
    execute: function () {
      exports('parse_csv', parse_csv);
      cclegacy._RF.push({}, "62845ffxYFF+aK4LCKmV9fY", "CsvLoader", undefined);
      function parse_csv(source) {
        var rs = [];
        source.split('\n').forEach(function (line) {
          line = line.replace(/\r+$/, '');
          if (line == '') return;
          rs.push(parse_line(line));
        });
        if (rs.length == 0) return {};
        return rs_make_tab(rs);
      }
      function parse_line(line) {
        var res = [];
        var pos = 0;
        var sep = ',';
        while (true) {
          if (pos >= line.length) break;
          var c = line.charAt(pos);
          // 数组类型的 "xx,xx"
          if (c == '"') {
            // 引号开头的忽略后面的分割符 ","            
            var endp = line.indexOf('"', pos + 1);
            if (endp == -1) throw 'quote NOT paired';
            var txt = line.substring(pos + 1, endp);
            pos = endp + 1;
            pos++;
            res.push(txt);
          } else {
            // 找第一个分割符 ","
            var startp = line.indexOf(sep, pos);
            if (startp >= 0) {
              res.push(line.substring(pos, startp));
              pos = startp + 1;
            } else {
              // 没有找到 则取最后一个
              res.push(line.substring(pos));
              break;
            }
          }
        }
        return res;
      }
      function rs_make_tab(rs) {
        var tab = {};
        // make meta
        rs_make_meta(rs);

        // rows
        for (var i = 1; i < rs.length; i++) {
          var row = rs[i];
          var obj = {};
          var _key = row[0];
          // 第一列的Id
          tab[_key] = obj;

          // cols
          for (var j = 0; j < rs.meta.types.length; j++) {
            var col = rs.meta.cols[j];
            var rowVal = row[j];
            var tp = rs.meta.types[j];
            obj[col] = rs_get_val(rowVal, tp);
          }
        }
        return tab;
      }
      function rs_make_meta(rs) {
        if (rs.length < 2) {
          // throw "rs: less than 2 rows";
          console.warn("less than 2 line");
        }
        if (rs[0].length < 1) throw "rs: no columns found";
        var meta = {
          cols: [],
          types: []
        };
        for (var i = 0; i < rs[0].length; i++) {
          var _key2 = rs[0][i];
          var info = parse_name(_key2);
          meta.cols.push(info.name);
          meta.types.push(info.type);
        }
        rs.meta = meta;
        return 1;
      }
      // 解析字段名字 iXX sXX i[XX.....
      function parse_name(key) {
        var tp = key[0];
        var isArr = key[1] == "[";
        var splitIdx = 1;
        if (tp == "e") {
          if (isArr) {
            // 枚举数组下标2表示枚举类型 e[iXX.YY
            tp = key[2];
          } else {
            // eiXX.YY
            tp = key[1];
          }
          splitIdx = key.indexOf('.') + 1;
        } else if (tp == "#") {
          // 对象类型 #XX.YY
          splitIdx = key.indexOf('.') + 1;
        } else if (isArr) {
          // i[XX
          splitIdx = 2;
        }

        //属性前缀	说明
        // s	字符串
        // i	整数
        // f	浮点数
        // j    长整型
        // #	对象
        // e	枚举
        // [	数组
        var tpString = "";
        switch (tp) {
          case 's':
            tpString += "string";
            break;
          case 'i':
          case 'f':
          case 'j':
            tpString += "number";
            break;
          case '#':
            var startIdx = isArr ? 2 : 1;
            tpString += "object" + key.slice(startIdx, key.indexOf('.'));
            break;
          default:
            console.warn("cant find tp:" + tp + ", key = " + key);
            break;
        }
        if (isArr) {
          tpString += '|array';
        }
        var name = key.slice(splitIdx);
        // 首字母大写 和声明文件一致
        name = name[0].toLocaleUpperCase() + name.slice(1);
        return {
          name: name,
          // 字段名字
          type: tpString // 字段类型
        };
      }

      function getNormalVal(v, t) {
        // console.log("www", v, t);  
        switch (t) {
          case "number":
            // 如果配置没有配该字段的值是否返回0 ??
            return Number(v != null ? v : 0);
          case "string":
            return v == null ? void 0 : v.replace(/\\n/g, '\n');
          case "number|array":
            var retArr = [];
            if (v !== "") {
              var arr = v.split(',');
              for (var i = 0; i < arr.length; i++) {
                var val = arr[i];
                retArr.push(Number(val));
              }
            }
            return retArr;
          case "string|array":
            var sArr = [];
            if (v !== "") {
              var _arr = v.split(',');
              for (var _i = 0; _i < _arr.length; _i++) {
                var _val = _arr[_i];
                sArr.push(_val);
              }
            }
            return sArr;
          default:
            console.warn("rs_get_val, invalid val type:" + t);
            return v;
        }
      }
      function rs_get_val(v, t) {
        if (t.startsWith('object')) {
          // objectXX|array
          var isArr = t.endsWith('|array');
          var objName = "";
          if (isArr) {
            var endIdx = t.indexOf('|array');
            objName = t.slice(6, endIdx);
          } else {
            objName = t.slice(6);
          }
          var keys = DefineObjectArr[objName];
          if (!keys) {
            console.error("can't find objName: " + objName + ", t: " + t);
            return "";
          }
          var constructObj = function constructObj(v) {
            var values = v.split(':');
            var obj = {};
            //对象没有配值，显示undefined
            if (!v || values.length == 0) {
              obj = undefined;
            } else {
              for (var index = 0; index < keys.length; index++) {
                var _values$index;
                var val = (_values$index = values[index]) != null ? _values$index : "";
                var info = parse_name(keys[index]);
                obj[info.name] = getNormalVal(val, info.type);
              }
            }
            return obj;
          };
          //对象的数组
          if (isArr) {
            var ret = [];
            if (v) {
              var arrs = v.split(',');
              for (var i = 0; i < arrs.length; i++) {
                var arr = arrs[i];
                ret.push(constructObj(arr));
              }
            }
            return ret;
          } else {
            return constructObj(v);
          }
        } else {
          return getNormalVal(v, t);
        }
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CustomPropertyComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "224cdIncTRMTaz4y/GKyKiy", "CustomPropertyComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CustomPropertyComp = exports('CustomPropertyComp', (_dec = ccclass('CustomPropertyComp'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CustomPropertyComp, _Component);
        function CustomPropertyComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._tag = void 0;
          _this._property = {};
          return _this;
        }
        var _proto = CustomPropertyComp.prototype;
        _proto.getProperty = function getProperty(k) {
          return this._property[k];
        };
        _proto.setProperty = function setProperty(k, v) {
          this._property[k] = v;
        };
        _createClass(CustomPropertyComp, [{
          key: "tag",
          get: function get() {
            return this._tag;
          },
          set: function set(tag) {
            this._tag = tag;
          }
        }]);
        return CustomPropertyComp;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DataConvert.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "48bf6kLa31AnY0aZUSdCAMk", "DataConvert", undefined);
      var DataConvert = exports('DataConvert', /*#__PURE__*/function () {
        function DataConvert() {}
        DataConvert.ListInt2NumberArray = function ListInt2NumberArray(data) {
          var ret = [];
          if (data && data.value && Array.isArray(data.value)) {
            var arr = data.value;
            for (var _iterator = _createForOfIteratorHelperLoose(arr), _step; !(_step = _iterator()).done;) {
              var v = _step.value;
              var n = Number(v);
              ret.push(isNaN(n) ? 0 : n);
            }
          }
          return ret;
        };
        DataConvert.checkStringArray = function checkStringArray(data) {
          var ret = [];
          if (data && Array.isArray(data)) {
            var arr = data;
            for (var _iterator2 = _createForOfIteratorHelperLoose(arr), _step2; !(_step2 = _iterator2()).done;) {
              var v = _step2.value;
              ret.push(String(v));
            }
          }
          return ret;
        };
        DataConvert.RepeatNumber2Numbers = function RepeatNumber2Numbers(data) {
          var ret = [];
          if (data && Array.isArray(data)) {
            var arr = data;
            for (var _iterator3 = _createForOfIteratorHelperLoose(arr), _step3; !(_step3 = _iterator3()).done;) {
              var v = _step3.value;
              var n = Number(v);
              ret.push(isNaN(n) ? 0 : n);
            }
          }
          return ret;
        };
        DataConvert.KeyIntVInt2tKNumNum = function KeyIntVInt2tKNumNum(data) {
          var _data$key, _data$value;
          return {
            key: (_data$key = data == null ? void 0 : data.key) != null ? _data$key : 0,
            value: (_data$value = data == null ? void 0 : data.value) != null ? _data$value : 0
          };
        };
        DataConvert.RepeatedKeyIntVInt2tKNumNums = function RepeatedKeyIntVInt2tKNumNums(data) {
          var ret = [];
          if (Array.isArray(data)) {
            var arr = data;
            for (var _iterator4 = _createForOfIteratorHelperLoose(arr), _step4; !(_step4 = _iterator4()).done;) {
              var kv = _step4.value;
              ret.push(this.KeyIntVInt2tKNumNum(kv));
            }
          }
          return ret;
        };
        DataConvert.RepeatedKeyIntVInt2tDictNumNum = function RepeatedKeyIntVInt2tDictNumNum(data) {
          var ret = {};
          if (Array.isArray(data)) {
            var arr = data;
            for (var _iterator5 = _createForOfIteratorHelperLoose(arr), _step5; !(_step5 = _iterator5()).done;) {
              var kv = _step5.value;
              var _kv = this.KeyIntVInt2tKNumNum(kv);
              ret[_kv.key] = _kv.value;
            }
          }
          return ret;
        };
        DataConvert.cloneDictNumNum = function cloneDictNumNum(dict) {
          var ret = {};
          if (dict) {
            for (var key in dict) {
              var _k = Number(key);
              var _v = dict[key];
              ret[_k] = _v;
            }
          }
          return ret;
        };
        DataConvert.NumberArray2ListInt = function NumberArray2ListInt(nums) {
          var data = {
            value: []
          };
          for (var _iterator6 = _createForOfIteratorHelperLoose(nums), _step6; !(_step6 = _iterator6()).done;) {
            var v = _step6.value;
            data.value.push(v);
          }
          return data;
        };
        return DataConvert;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DateUtil.ts", ['cc', './I18n.ts', './Constants.ts', './StringUtil.ts'], function (exports) {
  var cclegacy, I18n, Constants, StringUtil;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      I18n = module.I18n;
    }, function (module) {
      Constants = module.Constants;
    }, function (module) {
      StringUtil = module.StringUtil;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7e448vtIi9NQL/ZiKO+fzLK", "DateUtil", undefined);
      var DateUtil = exports('DateUtil', {
        format: function format(date, formatStr) {
          var str = formatStr;
          var week = ['日', '一', '二', '三', '四', '五', '六']; //[SKIP_CHARACTER_CHECK]
          str = str.replace(/yyyy|YYYY/, date.getFullYear().toString());
          str = str.replace(/yy|YY/, date.getFullYear() % 100 > 9 ? (date.getFullYear() % 100).toString() : '0' + date.getFullYear() % 100);
          str = str.replace(/MM/, date.getMonth() + 1 > 9 ? (date.getMonth() + 1).toString() : '0' + (date.getMonth() + 1).toString());
          str = str.replace(/M/g, (date.getMonth() + 1).toString());
          str = str.replace(/w|W/g, week[date.getDay()]);
          str = str.replace(/dd|DD/, date.getDate() > 9 ? date.getDate().toString() : '0' + date.getDate());
          str = str.replace(/d|D/g, date.getDate().toString());
          str = str.replace(/hh|HH/, date.getHours() > 9 ? date.getHours().toString() : '0' + date.getHours());
          str = str.replace(/h|H/g, date.getHours().toString());
          str = str.replace(/mm/, date.getMinutes() > 9 ? date.getMinutes().toString() : '0' + date.getMinutes());
          str = str.replace(/m/g, date.getMinutes().toString());
          str = str.replace(/ss|SS/, date.getSeconds() > 9 ? date.getSeconds().toString() : '0' + date.getSeconds());
          str = str.replace(/s|S/g, date.getSeconds().toString());
          return str;
        },
        format2: function format2(date, formatStr) {
          var str = formatStr;
          var week = ['日', '一', '二', '三', '四', '五', '六']; //[SKIP_CHARACTER_CHECK]
          str = str.replace(/yyyy|YYYY/, date.getFullYear().toString());
          str = str.replace(/yy|YY/, date.getFullYear() % 100 > 9 ? (date.getFullYear() % 100).toString() : '0' + date.getFullYear() % 100);
          str = str.replace(/MM/, date.getMonth() + 1 + I18n.t(40));
          str = str.replace(/M/g, date.getMonth() + 1 + I18n.t(40));
          str = str.replace(/w|W/g, week[date.getDay()]);
          str = str.replace(/dd|DD/, date.getDate() + I18n.t(93));
          str = str.replace(/d|D/g, date.getDate() + I18n.t(93));
          str = str.replace(/hh|HH/, date.getHours() > 9 ? date.getHours().toString() : date.getHours().toString());
          str = str.replace(/h|H/g, date.getHours().toString());
          str = str.replace(/mm/, date.getMinutes() > 9 ? date.getMinutes().toString() : date.getMinutes().toString());
          str = str.replace(/m/g, date.getMinutes().toString());
          str = str.replace(/ss|SS/, date.getSeconds() > 9 ? date.getSeconds().toString() : date.getSeconds().toString());
          str = str.replace(/s|S/g, date.getSeconds().toString());
          return str;
        },
        /**   
          * 比较日期差 dtEnd 格式为日期型或者 有效日期格式字符串
          */
        dateDiff: function dateDiff(date, strInterval, dtEnd) {
          var dtStart = date;
          switch (strInterval) {
            case 's':
              return (dtEnd.getTime() - dtStart.getTime()) / 1000;
            case 'n':
              return (dtEnd.getTime() - dtStart.getTime()) / 60000;
            case 'h':
              return (dtEnd.getTime() - dtStart.getTime()) / 3600000;
            case 'd':
              return (dtEnd.getTime() - dtStart.getTime()) / 86400000;
            case 'w':
              return (dtEnd.getTime() - dtStart.getTime()) / (86400000 * 7);
            case 'm':
              return dtEnd.getMonth() + 1 + (dtEnd.getFullYear() - dtStart.getFullYear()) * 12 - (dtStart.getMonth() + 1);
            case 'y':
              return dtEnd.getFullYear() - dtStart.getFullYear();
            default:
              return dtEnd.getTime() - dtStart.getTime();
          }
        },
        /** 
          * 日期转字符串:
          * 格式 YYYY-MM-dd hh:mm:ss
          */
        dateToString: function dateToString(date) {
          var y = date.getFullYear();
          var m = date.getMonth() + 1;
          var d = date.getDate();
          var h = date.getHours();
          var mi = date.getMinutes();
          var s = date.getSeconds();
          var mStr = m < 10 ? "0" + m : m;
          var dStr = d < 10 ? "0" + d : d;
          var hStr = h < 10 ? "0" + h : h;
          var miStr = mi < 10 ? "0" + mi : mi;
          var sStr = s < 10 ? "0" + s : s;
          return y + "-" + mStr + "-" + dStr + " " + hStr + ":" + miStr + ":" + sStr;
        },
        /** 
         * 日期转字符串:
         * 格式 YYYY-MM-dd hh:mm:ss
         */
        dateToString2: function dateToString2(date) {
          var m = date.getMonth() + 1;
          var d = date.getDate();
          var h = date.getHours();
          var mi = date.getMinutes();
          var mStr = m < 10 ? "0" + m : m;
          var dStr = d < 10 ? "0" + d : d;
          var hStr = h < 10 ? "0" + h : h;
          var miStr = mi < 10 ? "0" + mi : mi;
          return mStr + "/" + dStr + " " + hStr + ":" + miStr;
        },
        /**
         * 
         * 字符串转成日期类型
         * 格式 YYYY-MM-dd YYYY:MM:dd:hh:mm:ss
         */
        stringToDate: function stringToDate(dateStr) {
          var myDate = null;
          if (dateStr.indexOf('-') >= 0) {
            var arys = dateStr.split('-');
            var month = parseInt(arys[1]);
            myDate = new Date(parseInt(arys[0]), --month, parseInt(arys[2]));
          } else if (dateStr.indexOf(':') >= 0) {
            var arys = dateStr.split(':');
            var _month = parseInt(arys[1]);
            myDate = new Date(parseInt(arys[0]), --_month, parseInt(arys[2]), parseInt(arys[3]), parseInt(arys[4]), parseInt(arys[5]));
          }
          return myDate;
        },
        /**
         * 
         * 取得当前日期所在月的最大天数
         */
        maxDayOfDate: function maxDayOfDate(myDate) {
          var date1 = new Date(myDate.getFullYear(), myDate.getMonth(), 1);
          var date2 = this.dateAdd(myDate, 'm', 1);
          var result = this.dateDiff(date1, "d", new Date(this.format(date2, 'yyyy-MM-dd')));
          return result;
        },
        /**
         * 日期计算
         */
        dateAdd: function dateAdd(date, strInterval, number) {
          var dtTmp = date;
          switch (strInterval) {
            case 's':
              return new Date(Date.parse(dtTmp.toString()) + 1000 * number);
            case 'n':
              return new Date(Date.parse(dtTmp.toString()) + 60000 * number);
            case 'h':
              return new Date(Date.parse(dtTmp.toString()) + 3600000 * number);
            case 'd':
              return new Date(Date.parse(dtTmp.toString()) + 86400000 * number);
            case 'w':
              return new Date(Date.parse(dtTmp.toString()) + 86400000 * 7 * number);
            case 'q':
              return new Date(dtTmp.getFullYear(), dtTmp.getMonth() + number * 3, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
            case 'm':
              return new Date(dtTmp.getFullYear(), dtTmp.getMonth() + number, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
            case 'y':
              return new Date(dtTmp.getFullYear() + number, dtTmp.getMonth(), dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
            default:
              return new Date(dtTmp);
          }
        },
        /**
         * 比较time1与time2时间相差天数
         * @author: YueHongTing
         * @param {number} time1
         * @param {number} time2
         */
        timeDifferDay: function timeDifferDay(time1, time2) {
          var dayTime = this.getStartSecOfDay(time1) - this.getStartSecOfDay(time2);
          var day = Math.abs(dayTime) / 86400;
          return day;
        },
        /** 
         * 获取当前时间戳秒数
         */
        getUnixTime: function getUnixTime() {
          return Math.floor(new Date().getTime() / 1000);
        },
        /**
         * 获取当日0点时间戳
         * @param {number} second 当前秒数
         * @returns {number} 当日0点秒数
         */
        getStartSecOfDay: function getStartSecOfDay(second) {
          var recoverDate = new Date(second * 1000);
          recoverDate.setHours(0);
          recoverDate.setMinutes(0);
          recoverDate.setSeconds(0);
          return recoverDate.getTime() / 1000;
        },
        /** 
         * 获取当日24点时间戳
         * @param {number} second 当前秒数
         * @returns {number} 次日0点秒数
         */
        getEndSecOfDay: function getEndSecOfDay(second) {
          return this.getStartSecOfDay(second) + 86400;
        },
        /**
         * 获得本周的开始秒数
         * @param {number} second 当前秒数
         * @returns
         */
        getStartSecOfWeek: function getStartSecOfWeek(second) {
          var now = new Date(second * 1000); // 当前日期
          var nowDayOfWeek = now.getDay(); // 今天本周的第几天
          var nowDay = now.getDate(); // 当前日
          var nowMonth = now.getMonth(); // 当前月

          var day = nowDayOfWeek || 7;
          return new Date(now.getFullYear(), nowMonth, nowDay + 1 - day).getTime() / 1000;
        },
        /**
         * 获得本周的结束秒数
         * @param {number} second 当前秒数
         * @returns
         */
        getEndSecOfWeek: function getEndSecOfWeek(second) {
          var now = new Date(second * 1000); // 当前日期
          var nowDayOfWeek = now.getDay(); // 今天本周的第几天
          var nowDay = now.getDate(); // 当前日
          var nowMonth = now.getMonth(); // 当前月

          var day = nowDayOfWeek || 7;
          return new Date(now.getFullYear(), nowMonth, nowDay + 8 - day).getTime() / 1000;
        },
        /**
         * 获得本月的开始秒数
         * @param {number} second 当前秒数
         * @returns
         */
        getStartSecOfMonth: function getStartSecOfMonth(second) {
          var now = new Date(second * 1000); // 当前日期
          var nowMonth = now.getMonth(); // 当前月
          var nowYear = now.getUTCFullYear(); // 当前年
          nowYear += nowYear < 2000 ? 1900 : 0;
          return new Date(nowYear, nowMonth, 1).getTime() / 1000;
        },
        /**
         * 获得本月的结束秒数
         * @param {number} second 当前秒数
         * @returns
         */
        getEndSecOfMonth: function getEndSecOfMonth(second) {
          var now = new Date(second * 1000); // 当前日期
          var nowMonth = now.getMonth(); // 当前月
          var nowYear = now.getUTCFullYear(); // 当前年
          nowYear += nowYear < 2000 ? 1900 : 0;
          return new Date(nowYear, nowMonth + 1, 1).getTime() / 1000;
        },
        /**
         * 判断是否同天
         * @author: qiaomingwu
         * @param {number} ts1 时间1(s)
         * @param {number} ts2 时间2(s)
         */
        isSameDay: function isSameDay(ts1, ts2) {
          return this.getStartSecOfDay(ts1) == this.getStartSecOfDay(ts2);
        },
        /**
         * 判断是否同z周
         * @author: qiaomingwu
         * @param {number} ts1 时间1(s)
         * @param {number} ts2 时间2(s)
         */
        isSameWeek: function isSameWeek(ts1, ts2) {
          return this.getStartSecOfWeek(ts1) == this.getStartSecOfWeek(ts2);
        },
        /** 
         * 格式化时间：00: 00: 00
         */
        getTimeString: function getTimeString(second, formatStr, _long, hideDay) {
          if (_long === void 0) {
            _long = true;
          }
          if (hideDay === void 0) {
            hideDay = false;
          }
          if (second < 0) second = 0;
          var allSecond = second;
          var hour = Math.floor(second / 3600);
          second %= 3600;
          var minute = Math.floor(second / 60);
          second %= 60;
          var timeStr = "";
          var day = Math.floor(hour / 24);
          if (day >= 1 && !hideDay) {
            timeStr += day + I18n.t(67);
            var sec = allSecond % (3600 * 24);
            hour = Math.floor(sec / 3600);
          }
          if (hour !== 0 || _long) {
            if (_long) {
              timeStr += StringUtil.PrefixInteger(hour, 2) + ":";
            } else {
              timeStr += hour + ":";
            }
          }
          if (minute !== 0 || _long) {
            var _str = "";
            if (hour !== 0 || _long) {
              _str = StringUtil.PrefixInteger(minute, 2);
            } else {
              _str = minute.toString();
            }
            timeStr += _str + ":";
          }
          var str = "";
          if (minute !== 0 || _long) {
            str = StringUtil.PrefixInteger(second, 2);
          } else {
            str = second.toString();
          }
          timeStr += str;
          if (formatStr) {
            var tmp = timeStr.split(':');
            timeStr = StringUtil.format(formatStr, tmp[1], tmp[2], tmp[3]);
          }
          return timeStr;
        },
        /**
         * 获取指定时间戳 (12:00:00)
         * @param {number} hour
         * @param {number} time
         */
        getAppointTimeSec: function getAppointTimeSec(time, curTime) {
          var sec = this.getStartSecOfDay(curTime); //当天开始时间
          var hns = time.split(":", 3);
          if (hns[0]) {
            sec += +hns[0] * 3600;
          }
          if (hns[1]) {
            sec += +hns[1] * 60;
          }
          if (hns[2]) {
            sec += +hns[2];
          }
          return sec;
        },
        /**
         * 时间秒转为过去的 分 时 天 等
         * @param {number} ts （秒）
         * @returns {string} 距离的时间描述(刚刚/x分钟/x小时)
         */
        secondsToPassStr: function secondsToPassStr(seconds, more_day) {
          if (more_day === void 0) {
            more_day = 7;
          }
          if (seconds < 0) seconds = 1;
          var isCn = I18n.language == Constants.LANG.CN;
          var isTw = I18n.language == Constants.LANG.TW;
          var str = "";
          if (seconds < 60) {
            str = isCn ? "刚刚" : isTw ? "剛剛" : seconds + "s"; //[SKIP_CHARACTER_CHECK]
          } else if (seconds < 3600) {
            str = Math.floor(seconds / 60) + (isCn ? "分钟前" : isTw ? "分鐘前" : "m"); //[SKIP_CHARACTER_CHECK]
          } else if (seconds < 3600 * 24) {
            str = Math.floor(seconds / 3600) + (isCn ? "小时前" : isTw ? "小時前" : "h"); //[SKIP_CHARACTER_CHECK]
          } else {
            var day = Math.floor(seconds / (3600 * 24));
            if (day > more_day) {
              str = more_day.toString() + (isCn ? "天前" : isTw ? "天前" : "d+"); //[SKIP_CHARACTER_CHECK]
            } else {
              str = day + (isCn ? "天前" : isTw ? "天前" : "d"); //[SKIP_CHARACTER_CHECK]
            }
          }

          return str;
        },
        /**
         * 获取每周的指定日期时间 (w/5 21:00:00)
         * @param week 
         * @param time 
         * @returns 
         */
        getAppointWeekSec: function getAppointWeekSec(week, time) {
          var start = this.getStartSecOfWeek(time); //本周开始时间
          var days = week.split(" ", 2);
          var hns = days[1].split(":", 3);
          var day = days[0].split("/", 2);
          var ret = start;
          if (day[0] == "w") {
            ret += (+day[1] - 1) * 86400 + +hns[0] * 3600 + +hns[1] * 60 + +hns[2];
          }
          return ret;
        },
        /**
         * 获取周几的中文字
         * @author: qiaomingwu
         * @param {number} week
         */
        getWeekCNStr: function getWeekCNStr(week) {
          switch (week) {
            case 0:
              return I18n.t(10027);
            case 1:
              return I18n.t(10021);
            case 2:
              return I18n.t(10022);
            case 3:
              return I18n.t(10023);
            case 4:
              return I18n.t(10024);
            case 5:
              return I18n.t(10025);
            case 6:
              return I18n.t(10026);
            default:
              return "";
          }
        },
        /**
         * 获取从某一时刻到现在经过的时间
         * @param {number} ts 某一时刻（秒）
         * @param {number} nowTs 当前时间（秒）
         * @returns {string} 距离当前的时间描述(x小时x分钟x秒)
         */
        getPassedTime3: function getPassedTime3(ts, nowTs) {
          var delta = nowTs - ts;
          var passedHour = Math.floor(delta / 3600);
          var hourStr = passedHour == 0 ? "" : passedHour + I18n.t(37);
          var restMin = Math.floor(delta % 3600 / 60);
          var minStr = restMin == 0 ? "" : restMin + I18n.t(36);
          var restSc = delta % 60;
          var scStr = restSc == 0 ? "" : restSc + I18n.t(88);
          return hourStr + minStr + scStr;
        },
        toDateTimeMs: function toDateTimeMs(timeMs, format) {
          var date = new Date(timeMs);
          if (!format || format == "") {
            return DateUtil.format(date, "yyyy/MM/dd HH:mm:ss");
          } else {
            return DateUtil.format(date, format);
          }
        },
        // 返回--:--:--格式的字符串
        gethhmmss: function gethhmmss(second) {
          second = Math.floor(second);
          var h = Math.floor(second / 3600);
          var m = Math.floor((second - h * 3600) / 60);
          var s = second - h * 3600 - m * 60;
          var strH = h < 10 ? "0" + String(h) : String(h);
          var strM = m < 10 ? "0" + String(m) : String(m);
          var strS = s < 10 ? "0" + String(s) : String(s);
          return strH + ":" + strM + ":" + strS;
        },
        // 返回--:--格式的字符串
        getmmss: function getmmss(second) {
          second = Math.floor(second);
          var m = Math.floor(second / 60);
          var s = second - m * 60;
          var strM = m < 10 ? "0" + String(m) : String(m);
          var strS = s < 10 ? "0" + String(s) : String(s);
          return strM + ":" + strS;
        },
        /** 时间戳转年月日 注意是秒 */getymd: function getymd(second) {
          second = Math.floor(second);
          var date = new Date(second * 1000);
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          var day = date.getDate();
          return [year, month, day].join("-");
        },
        /**获取UTC时间 */getUTCtime: function getUTCtime(timeMs) {
          var date = new Date();
          // utc时区偏差，分钟
          var timeZone = date.getTimezoneOffset();
          return timeMs + timeZone * 60 * 1000;
        },
        /**x天x小时x分钟 */getDayHourMinute: function getDayHourMinute(second) {
          var isCn = I18n.language == Constants.LANG.CN;
          var isTw = I18n.language == Constants.LANG.TW;
          second = Math.floor(second);
          var DAY_SECOND = 24 * 3600;
          var HOUR_SECOND = 3600;
          var d = Math.floor(second / DAY_SECOND);
          var h = Math.floor((second - d * DAY_SECOND) / HOUR_SECOND);
          var m = Math.floor((second - d * DAY_SECOND - h * HOUR_SECOND) / 60);
          var s = second - d * DAY_SECOND - h * HOUR_SECOND - m * 60;
          var str = "";
          if (d > 0) {
            str = str + (isCn ? d + "\u5929" : isTw ? d + "\u5929" : d + "d ");
          } //[SKIP_CHARACTER_CHECK]
          if (h > 0) {
            str = str + (isCn ? h + "\u5C0F\u65F6" : isTw ? h + "\u5C0F\u6642" : h + "h ");
          } //[SKIP_CHARACTER_CHECK]
          if (m > 0) {
            str = str + (isCn ? m + "\u5206\u949F" : isTw ? m + "\u5206\u9418" : m + "m ");
          } //[SKIP_CHARACTER_CHECK]
          if (d == 0 && h == 0 && m == 0) {
            str = str + (isCn ? s + "\u79D2" : isTw ? s + "\u79D2" : s + "s");
          } //[SKIP_CHARACTER_CHECK]
          return str;
        },
        /**x天x小时x分钟x秒 */getDayHourMinuteSecond: function getDayHourMinuteSecond(second) {
          var isCn = I18n.language == Constants.LANG.CN;
          var isTw = I18n.language == Constants.LANG.TW;
          second = Math.floor(second);
          var DAY_SECOND = 24 * 3600;
          var HOUR_SECOND = 3600;
          var d = Math.floor(second / DAY_SECOND);
          var h = Math.floor((second - d * DAY_SECOND) / HOUR_SECOND);
          var m = Math.floor((second - d * DAY_SECOND - h * HOUR_SECOND) / 60);
          var s = second - d * DAY_SECOND - h * HOUR_SECOND - m * 60;
          var str = "";
          if (d > 0) {
            str = str + (isCn ? d + "\u5929" : isTw ? d + "\u5929" : d + "d ");
          } //[SKIP_CHARACTER_CHECK]
          if (h > 0) {
            str = str + (isCn ? h + "\u5C0F\u65F6" : isTw ? h + "\u5C0F\u6642" : h + "h ");
          } //[SKIP_CHARACTER_CHECK]
          if (m > 0) {
            str = str + (isCn ? m + "\u5206\u949F" : isTw ? m + "\u5206\u9418" : m + "m ");
          } //[SKIP_CHARACTER_CHECK]
          str = str + (isCn ? s + "\u79D2" : isTw ? s + "\u79D2" : s + "s"); //[SKIP_CHARACTER_CHECK]
          return str;
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DefineConstant.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9d757PisP9M/LghFWDhQ7yh", "DefineConstant", undefined);
      var ConstQmjb = {
        KingHp: [0, 8888, 18888, 48888, 88888],
        LikeCoefficient: 40,
        GiftCoefficient: 100,
        CommentCoefficient: 40,
        ViewCampConf: 1005,
        KingGiftConf: 1002,
        LuckSummonBuff: [1001, 1002],
        KillStreakMin: 20,
        KillStreakLimit: [[100, 20], [1000, 100], [50000, 1000], [2147483647, 5000]],
        WinStreakMinKill: 500,
        SplitScoreMinScore: 200,
        WinStreakMinScore: 200,
        BloodthirstyConf: 1001,
        BloodthirstyCoefficient: 10,
        WinStreakCoefficient: [[100, 100], [80, 80], [50, 60], [30, 40], [10, 20], [5, 10], [3, 5]],
        NewWinStreakCoefficient: [[100, 20]],
        GiftKilledScoreCoefficient: 80,
        DurationGear: [0, -1, 1200, 1800, 3600],
        FirstGiftExtraInteract: [0, 3005, 3006, 3001, 3002, 3003, 3004, 3005],
        FirstGiftRandom: [3001, 3002, 3003, 3004],
        FirstGiftCountLimit: 20,
        WinStreakRetentionRatio: 60,
        WinStreakMonthRetentionRatio: 100,
        iWinStreakSplitsRatio: [40, 25, 20, 10, 5],
        SplitsNumber: 5,
        ScorePoolMaxSoldier: [[1001, 100000]],
        LikeSoldierDifficulty: [0, 2, 2, 1, 1],
        KingInvincible: [[5, 1007]],
        TowerHpDifficulty: [0, 50, 70, 90, 100],
        HallOfFame: [[1, 1, 3], [2, 2, 4], [3, 3, 5], [4, 10, 6], [11, 50, 7], [51, 100, 8]],
        CommonSoldier: [1001, 1002],
        LoseSplitScorePool: [[100, 34], [80, 30], [65, 25], [50, 20], [40, 15], [30, 10], [20, 5], [10, 2]],
        MatchIntervalTime: 30000,
        SurrenderStartTime: 2,
        SurrenderIntervalTime: 5,
        SurrenderDailyTimes: 5,
        BlindBoxGuarantee: [[4002, 200], [3005, 280]],
        RankUpBroadcast: 10,
        InteractLikeConf: 2001,
        HiddenMinRank: 100,
        TowerRewardWeight: 30,
        HallOfFameJoinEffect: [[10, 3001]],
        WarmUpConf: [0, 0, 5, 1001, 0],
        WarmUpAllowSoldier: [1001, 1002, 1005, 1006],
        WarmUpStartTime: 30,
        SpecialServicesBoxPerformance: 4002,
        FansInteractId: 3009,
        FollowInteractId: 3001,
        WinStreakBuffId: 1008,
        MonthTopReward: [3004, 3003, 3002],
        JoinAutoLikeDuration: 60,
        GiftAutoLikeDuration: 60,
        AutoLikeCount: 2,
        ShopRefreshCycle: 7
      };
      var ConstResponse = {};
      var DefineConstant = exports('DefineConstant', {
        ConstQmjb: ConstQmjb,
        ConstResponse: ConstResponse
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DefineObjectArr.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5c30fSy8MtFk7ZyHzbMwGgh", "DefineObjectArr", undefined);
      var DefineObjectArr = exports('DefineObjectArr', {
        StrIII: ["sLeft", "sMiddle", "sRight"],
        AttributeInfo: ["eiAttribute.AttrId", "iValue"],
        ResponseCode: ["iId", "sShowLang", "iLevel"],
        PairII: ["iLeft", "iRight"],
        ThreeIII: ["iLeft", "iMiddle", "iRight"],
        Reward: ["eiRewardType.RewardType", "iConfId", "iNum", "iMaxNum", "iWeight"]
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DressUpItemNode.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TimeTypeNode.ts', './GoodsIconNode.ts', './Utils.ts', './ConfigUtils.ts', './I18n.ts', './LogMgr.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, TimeTypeNode, GoodsIconNode, Utils, AddClick, handler, ConfigUtils, I18n, LogMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      TimeTypeNode = module.TimeTypeNode;
    }, function (module) {
      GoodsIconNode = module.GoodsIconNode;
    }, function (module) {
      Utils = module.Utils;
      AddClick = module.AddClick;
      handler = module.handler;
    }, function (module) {
      ConfigUtils = module.ConfigUtils;
    }, function (module) {
      I18n = module.I18n;
    }, function (module) {
      LogMgr = module.LogMgr;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "7014cu9WQVGNqlFU/DG1npe", "DressUpItemNode", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DressUpItemNode = exports('DressUpItemNode', (_dec = ccclass('DressUpItemNode'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DressUpItemNode, _Component);
        function DressUpItemNode() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._isInitNode = false;
          //DATA
          _this.decorationData = void 0;
          //UI
          _this._bg = void 0;
          _this._bg_gray = void 0;
          _this._timeType = void 0;
          _this._goodsIcon = void 0;
          _this._goodsName = void 0;
          _this._goodsDescribe = void 0;
          _this._lock = void 0;
          _this._stateEquipBtn = void 0;
          _this._stateEquipedIcon = void 0;
          _this._stateBuyBtn = void 0;
          _this._stateLockedIcon = void 0;
          _this._clickEquipCallback = void 0;
          _this._clickBuyCallback = void 0;
          return _this;
        }
        var _proto = DressUpItemNode.prototype;
        _proto.onLoad = function onLoad() {
          this._initNode();
          this._initEvent();
        };
        _proto._initNode = function _initNode() {
          if (this._isInitNode) return;
          this._isInitNode = true;
          this._initUI();
        };
        _proto._initUI = function _initUI() {
          var bg = this.node.getChildByName("bg");
          this._bg = bg.getChildByName("bg");
          this._bg_gray = bg.getChildByName("bg_gray");
          this._timeType = Utils.checkChildComponent(this.node, "timeType", TimeTypeNode);
          this._goodsIcon = Utils.checkChildComponent(this.node, "goodsIcon", GoodsIconNode);
          this._goodsName = this.node.getChildByName("goodsName");
          this._goodsDescribe = this.node.getChildByName("goodsDescribe");
          this._lock = this.node.getChildByName("lock");
          var states = this.node.getChildByName("states");
          this._stateEquipBtn = states.getChildByName("equipBtn");
          this._stateEquipedIcon = states.getChildByName("equipedIcon");
          this._stateBuyBtn = states.getChildByName("buyBtn");
          this._stateLockedIcon = states.getChildByName("lockedIcon");
        };
        _proto._initEvent = function _initEvent() {
          AddClick(this._stateEquipBtn, handler(this, this.onClickEquipBtn));
          AddClick(this._stateBuyBtn, handler(this, this.onClickBuyBtn));
        };
        _proto.init = function init(params, data) {
          this.initParam(params);
          this.initWithData(data);
        };
        _proto.initParam = function initParam(params) {
          if (!params) return;
        };
        _proto.initWithData = function initWithData(data) {
          this._initNode();
          this.initData(data);
          this.bindDataToUI();
        };
        _proto.initData = function initData(data) {
          this.decorationData = data == null ? void 0 : data.decorationData;
        };
        _proto.bindDataToUI = function bindDataToUI() {
          var _this$decorationData$, _this$decorationData$2, _decorationInfo$decor, _decorationInfo$decor2;
          if (!this.decorationData) return;
          var _owned = this.decorationData.owned == true;
          var _usable = this.decorationData.usable == true;
          var _convertibility = this.decorationData.convertibility == true;
          var _type = (_this$decorationData$ = this.decorationData.type) != null ? _this$decorationData$ : 0;
          var _id = (_this$decorationData$2 = this.decorationData.id) != null ? _this$decorationData$2 : 0;
          var _shopConfig = ConfigUtils.getShopConfigByDecoration(_type, _id);
          var _decorationInfo = ConfigUtils.getDecorationBaseInfo(_type, _id);
          if (!_decorationInfo) {
            LogMgr.log("decorationInfo null, type: " + _type + ", id: " + _id);
          }
          Utils.setActive(this._bg, _owned);
          Utils.setActive(this._bg_gray, !_owned);
          Utils.setActive(this._lock, !_owned);
          Utils.setGray(this._goodsIcon.node, !_owned);
          if (_shopConfig) {
            var _shopConfig$Validity;
            var _day = (_shopConfig$Validity = _shopConfig.Validity) != null ? _shopConfig$Validity : 0;
            Utils.setActive(this._timeType, true);
            this._timeType.initWithData({
              limitDay: _day
            });
          } else {
            Utils.setActive(this._timeType, false);
          }
          this._goodsIcon.initWithData({
            goodsType: _type,
            goodsId: _id
          });
          I18n.setLabelText(this._goodsName, (_decorationInfo$decor = _decorationInfo == null ? void 0 : _decorationInfo.decorationName) != null ? _decorationInfo$decor : "");
          I18n.setLabelText(this._goodsDescribe, (_decorationInfo$decor2 = _decorationInfo == null ? void 0 : _decorationInfo.decorationDesc) != null ? _decorationInfo$decor2 : "");
          Utils.setActive(this._stateEquipBtn, false);
          Utils.setActive(this._stateEquipedIcon, false);
          Utils.setActive(this._stateBuyBtn, false);
          Utils.setActive(this._stateLockedIcon, false);
          if (_owned) {
            if (_usable) {
              Utils.setActive(this._stateEquipedIcon, true);
            } else {
              Utils.setActive(this._stateEquipBtn, true);
            }
          } else {
            if (_convertibility) {
              Utils.setActive(this._stateBuyBtn, true);
            } else {
              Utils.setActive(this._stateLockedIcon, true);
            }
          }
        };
        _proto.onClickEquipBtn = function onClickEquipBtn() {
          if (!this.decorationData) return;
          this._clickEquipCallback && this._clickEquipCallback(this.decorationData);
        };
        _proto.onClickBuyBtn = function onClickBuyBtn() {
          if (!this.decorationData) return;
          this._clickBuyCallback && this._clickBuyCallback(this.decorationData);
        };
        _proto.setClickEquipCallback = function setClickEquipCallback(func) {
          this._clickEquipCallback = func;
        };
        _proto.setClickBuyCallback = function setClickBuyCallback(func) {
          this._clickBuyCallback = func;
        };
        return DressUpItemNode;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Electron.ts", ['cc', './md5.ts', './channel_config.ts', './UIUtils.ts', './ChannelMgr.ts'], function (exports) {
  var cclegacy, _decorator, Md5, channel_config, UIUtils, ChannelMgr;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      Md5 = module.Md5;
    }, function (module) {
      channel_config = module.channel_config;
    }, function (module) {
      UIUtils = module.UIUtils;
    }, function (module) {
      ChannelMgr = module.ChannelMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c0deewyVRlPuoypklfEstcb", "Electron", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      //electron模块,打包web-mobil后在HTML中定义全局变量electron
      var electron = window.electron;
      var Electron = exports('Electron', /*#__PURE__*/function () {
        function Electron() {}
        Electron.isElectronValid = function isElectronValid() {
          if (ChannelMgr.isKsMiniGame()) return false;
          if (electron === undefined || electron === null) return false;
          if (electron.ipcRenderer === undefined || electron.ipcRenderer === null) return false;
          return true;
        };
        Electron.init = function init() {
          if (!this.isElectronValid()) return;
          if (this.isInited) return;
          this.initCrashReporter();
          this.initIpcEvent();
          this.isInited = true;
        }

        // 初始崩溃提交程序
        ;

        Electron.initCrashReporter = function initCrashReporter() {
          try {
            if (!this.isElectronValid()) return;
            console.log("init crash reporter");
            var crashReporter = electron.crashReporter;
            if (crashReporter === undefined || crashReporter === null) return;
            crashReporter.addExtraParameter("clientVersion", String(channel_config.version));
            console.log("init crash reporter success");
          } catch (ex) {
            console.log(String(ex));
          }
        };
        Electron.initIpcEvent = function initIpcEvent() {
          if (!this.isElectronValid()) return;
          console.log("init ipc event");
          electron.ipcRenderer.removeAllListeners('close-window');
          electron.ipcRenderer.on('close-window', function (event) {
            UIUtils.showConfirmToCloseApp();
          });
        }

        // 移动窗口到中心
        ;

        Electron.center = function center() {
          if (!this.isElectronValid()) return;
          electron.ipcRenderer.send("e_center");
        }

        // 全屏专用函数
        ;

        Electron.fullScreen = function fullScreen() {
          if (!this.isElectronValid()) return;
          electron.ipcRenderer.send("e_fullScreen");
        }

        // 窗口化专用函数
        ;

        Electron.toWindow = function toWindow() {
          if (!this.isElectronValid()) return;
          electron.ipcRenderer.send("e_window");
        }

        // 打开开发者工具
        ;

        Electron.openDevTools = function openDevTools() {
          if (!this.isElectronValid()) return;
          electron.ipcRenderer.send("e_openDevTools");
        }

        // 关闭开发者工具
        ;

        Electron.closeDevTools = function closeDevTools() {
          if (!this.isElectronValid()) return;
          electron.ipcRenderer.send("e_closeDevTools");
        }

        // 设置窗口大小
        ;

        Electron.setSize = function setSize(width, height) {
          if (!this.isElectronValid()) return;
          electron.ipcRenderer.send("e_setSize", width.toString(), height.toString());
        }

        // 当前是否全屏
        ;

        Electron.isFullScreen = function isFullScreen() {
          if (!this.isElectronValid()) return false;
          return electron.ipcRenderer.sendSync("e_isFullScreen");
        }

        // 获取一些信息,返回string
        ;

        Electron.getMassage = function getMassage() {
          if (!this.isElectronValid()) return "";
          return electron.ipcRenderer.sendSync("e_getMassage");
        }

        // 获取启动参数
        ;

        Electron.getArguments = function getArguments() {
          if (!this.isElectronValid()) return [];
          return electron.ipcRenderer.sendSync("e_getArgv");
        }

        // 退出游戏
        ;

        Electron.quit = function quit() {
          if (!this.isElectronValid()) return;
          electron.ipcRenderer.send("e_quit");
        }

        // 关闭APP
        ;

        Electron.closeApp = function closeApp() {
          if (!this.isElectronValid()) return;
          electron.ipcRenderer.send("e_closeApp");
        }

        // Electron模式时,渲染进程使用主进程的LocalStorage,方便主进程使用渲染进程数据
        ;

        Electron.storageGetItem = function storageGetItem(k) {
          if (!this.isElectronValid()) return "";
          return electron.ipcRenderer.sendSync("e_storageGetItem", k);
        };
        Electron.storageSetItem = function storageSetItem(k, v) {
          if (!this.isElectronValid()) return;
          electron.ipcRenderer.send("e_storageSetItem", k, String(v));
        };
        Electron.storageRemoveItem = function storageRemoveItem(k) {
          if (!this.isElectronValid()) return;
          electron.ipcRenderer.send("e_storageRemoveItem", k);
        }

        // 拷贝到剪切板
        ;

        Electron.copyToClipboard = function copyToClipboard(str) {
          if (!this.isElectronValid()) return;
          electron.ipcRenderer.send("e_copyToClipboard", str);
        }

        // 写入错误日志
        ;

        Electron.writeErrorLog = function writeErrorLog(err) {
          if (!this.isElectronValid()) return;
          try {
            if (err === undefined || err === null || err == "") return;
            err = "clientVersion: " + channel_config.version + " \n" + err;
            var _date = new Date();
            var year = _date.getFullYear();
            var mon = _date.getMonth() + 1;
            var date = _date.getDate();
            var h = _date.getHours();
            var m = _date.getMinutes();
            var s = _date.getSeconds();
            var strData = "" + year + mon.toString().padStart(2, '0') + date.toString().padStart(2, '0');
            var strtTime = "" + h.toString().padStart(2, '0') + m.toString().padStart(2, '0') + s.toString().padStart(2, '0');
            var strHash = Md5.hashStr(err);
            var fileName = "" + strData + strtTime + "_" + strHash + ".txt";
            electron.ipcRenderer.send("e_writeErrorLog", fileName, err);
          } catch (e) {
            console.log(String(e));
          }
        }

        // 测试主进程崩溃
        ;

        Electron.testCrashMainProcess = function testCrashMainProcess() {
          if (!this.isElectronValid()) return;
          electron.ipcRenderer.send("e_testCrashMainProcess");
        };
        return Electron;
      }());
      Electron.isInited = false;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EnumConfig.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "281863WYx9I47ohDjQZqMwe", "EnumConfig", undefined);
      var InteractType = /*#__PURE__*/function (InteractType) {
        InteractType[InteractType["COMMENT"] = 1] = "COMMENT";
        InteractType[InteractType["LIKE"] = 2] = "LIKE";
        InteractType[InteractType["GIFT"] = 3] = "GIFT";
        return InteractType;
      }(InteractType || {});
      var Camp = /*#__PURE__*/function (Camp) {
        Camp[Camp["BLUE"] = 1] = "BLUE";
        Camp[Camp["ORANGE"] = 2] = "ORANGE";
        return Camp;
      }(Camp || {});
      var Difficulty = /*#__PURE__*/function (Difficulty) {
        Difficulty[Difficulty["BEGINNER"] = 1] = "BEGINNER";
        Difficulty[Difficulty["JUNIOR"] = 2] = "JUNIOR";
        Difficulty[Difficulty["INTERMEDIATE"] = 3] = "INTERMEDIATE";
        Difficulty[Difficulty["SENIOR"] = 4] = "SENIOR";
        return Difficulty;
      }(Difficulty || {});
      var SoldierType = /*#__PURE__*/function (SoldierType) {
        SoldierType[SoldierType["KING"] = 1] = "KING";
        SoldierType[SoldierType["TOWER"] = 2] = "TOWER";
        SoldierType[SoldierType["SOLDIER"] = 3] = "SOLDIER";
        SoldierType[SoldierType["POWER_UP_SOLDIER"] = 4] = "POWER_UP_SOLDIER";
        SoldierType[SoldierType["DRAGON"] = 5] = "DRAGON";
        SoldierType[SoldierType["POWER_UP_DRAGON"] = 6] = "POWER_UP_DRAGON";
        return SoldierType;
      }(SoldierType || {});
      var Summon = /*#__PURE__*/function (Summon) {
        Summon[Summon["SOLDIER"] = 1] = "SOLDIER";
        Summon[Summon["BUFF"] = 2] = "BUFF";
        Summon[Summon["DRAGON"] = 3] = "DRAGON";
        Summon[Summon["GROUP"] = 4] = "GROUP";
        Summon[Summon["RANDOM"] = 5] = "RANDOM";
        return Summon;
      }(Summon || {});
      var Attribute = /*#__PURE__*/function (Attribute) {
        Attribute[Attribute["ATK"] = 1] = "ATK";
        Attribute[Attribute["DAMAGE_TO_KING"] = 2] = "DAMAGE_TO_KING";
        Attribute[Attribute["HP"] = 3] = "HP";
        Attribute[Attribute["SPEED"] = 4] = "SPEED";
        Attribute[Attribute["KING_SKILL_DAMAGE"] = 5] = "KING_SKILL_DAMAGE";
        Attribute[Attribute["LUCK_SUMMON"] = 6] = "LUCK_SUMMON";
        Attribute[Attribute["DAMAGE_REDUCTION_TO_KING"] = 7] = "DAMAGE_REDUCTION_TO_KING";
        Attribute[Attribute["INVINCIBLE"] = 8] = "INVINCIBLE";
        Attribute[Attribute["AUTO_LIKE"] = 9] = "AUTO_LIKE";
        return Attribute;
      }(Attribute || {});
      var SkillEffectType = /*#__PURE__*/function (SkillEffectType) {
        SkillEffectType[SkillEffectType["CommonEffect"] = 1] = "CommonEffect";
        SkillEffectType[SkillEffectType["BulletEffect"] = 2] = "BulletEffect";
        SkillEffectType[SkillEffectType["ShellEffect"] = 3] = "ShellEffect";
        SkillEffectType[SkillEffectType["LaserEffect"] = 4] = "LaserEffect";
        return SkillEffectType;
      }(SkillEffectType || {});
      var RewardType = /*#__PURE__*/function (RewardType) {
        RewardType[RewardType["SCORE_POOL_PERCENT"] = 1] = "SCORE_POOL_PERCENT";
        RewardType[RewardType["WIN_STREAK"] = 2] = "WIN_STREAK";
        RewardType[RewardType["AVATAR_FRAME"] = 3] = "AVATAR_FRAME";
        RewardType[RewardType["NAMEPLATE"] = 4] = "NAMEPLATE";
        RewardType[RewardType["AVATAR_FRAME_AND_NAMEPLATE"] = 5] = "AVATAR_FRAME_AND_NAMEPLATE";
        RewardType[RewardType["ITEM"] = 6] = "ITEM";
        RewardType[RewardType["BATTLE_FLAG"] = 7] = "BATTLE_FLAG";
        return RewardType;
      }(RewardType || {});
      var RewardObject = /*#__PURE__*/function (RewardObject) {
        RewardObject[RewardObject["CHAMPION"] = 1] = "CHAMPION";
        RewardObject[RewardObject["TOP_TEN"] = 2] = "TOP_TEN";
        return RewardObject;
      }(RewardObject || {});
      var DecorationType = /*#__PURE__*/function (DecorationType) {
        DecorationType[DecorationType["AVATAR_FRAME"] = 1] = "AVATAR_FRAME";
        DecorationType[DecorationType["NAMEPLATE"] = 2] = "NAMEPLATE";
        DecorationType[DecorationType["TITLE"] = 3] = "TITLE";
        DecorationType[DecorationType["ANCHOR_AVATAR_FRAME"] = 4] = "ANCHOR_AVATAR_FRAME";
        DecorationType[DecorationType["ANCHOR_NAMEPLATE"] = 5] = "ANCHOR_NAMEPLATE";
        DecorationType[DecorationType["ANCHOR_TITLE"] = 6] = "ANCHOR_TITLE";
        return DecorationType;
      }(DecorationType || {});
      var InteractFeature = /*#__PURE__*/function (InteractFeature) {
        InteractFeature[InteractFeature["JOIN"] = 1] = "JOIN";
        InteractFeature[InteractFeature["SUMMON"] = 2] = "SUMMON";
        InteractFeature[InteractFeature["VIEW"] = 3] = "VIEW";
        InteractFeature[InteractFeature["HIDDEN"] = 4] = "HIDDEN";
        InteractFeature[InteractFeature["CHANGE_EFFECT"] = 5] = "CHANGE_EFFECT";
        return InteractFeature;
      }(InteractFeature || {});
      var ActivityType = /*#__PURE__*/function (ActivityType) {
        ActivityType[ActivityType["CHRISTMAS"] = 1] = "CHRISTMAS";
        ActivityType[ActivityType["CARNIVAL"] = 2] = "CARNIVAL";
        ActivityType[ActivityType["SUMMER"] = 3] = "SUMMER";
        ActivityType[ActivityType["SUMMER_RANK"] = 4] = "SUMMER_RANK";
        ActivityType[ActivityType["SUMMER_SCORE"] = 5] = "SUMMER_SCORE";
        return ActivityType;
      }(ActivityType || {});
      var ActivityRewardTime = /*#__PURE__*/function (ActivityRewardTime) {
        ActivityRewardTime[ActivityRewardTime["ROUND_OVER"] = 1] = "ROUND_OVER";
        ActivityRewardTime[ActivityRewardTime["EVERY_MORNING"] = 2] = "EVERY_MORNING";
        return ActivityRewardTime;
      }(ActivityRewardTime || {});
      var StructLivePlatformType = /*#__PURE__*/function (StructLivePlatformType) {
        StructLivePlatformType[StructLivePlatformType["TIKTOK"] = 1] = "TIKTOK";
        StructLivePlatformType[StructLivePlatformType["OTHER"] = 2] = "OTHER";
        return StructLivePlatformType;
      }(StructLivePlatformType || {});
      var ItemType = /*#__PURE__*/function (ItemType) {
        ItemType[ItemType["SOLDIER_SKIN"] = 1] = "SOLDIER_SKIN";
        ItemType[ItemType["BUFF_SKIN"] = 2] = "BUFF_SKIN";
        ItemType[ItemType["JOIN_EFFECT"] = 3] = "JOIN_EFFECT";
        return ItemType;
      }(ItemType || {});
      var EnumConfig = exports('EnumConfig', {
        InteractType: InteractType,
        Camp: Camp,
        Difficulty: Difficulty,
        SoldierType: SoldierType,
        Summon: Summon,
        Attribute: Attribute,
        SkillEffectType: SkillEffectType,
        RewardType: RewardType,
        RewardObject: RewardObject,
        DecorationType: DecorationType,
        InteractFeature: InteractFeature,
        ActivityType: ActivityType,
        ActivityRewardTime: ActivityRewardTime,
        StructLivePlatformType: StructLivePlatformType,
        ItemType: ItemType
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventListener.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, _decorator, Component, EventListener;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      EventListener = module.EventListener;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "8330cZ12epPBb7y1TkxJE0K", "EventComp", undefined);
      var ccclass = _decorator.ccclass,
        disallowMultiple = _decorator.disallowMultiple;
      var EventComp = exports('EventComp', ccclass(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EventComp, _Component);
        function EventComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._listeners = [];
          return _this;
        }
        var _proto = EventComp.prototype;
        _proto.onLoad = function onLoad() {
          for (var _iterator = _createForOfIteratorHelperLoose(this._listeners), _step; !(_step = _iterator()).done;) {
            var listener = _step.value;
            EventListener.on(listener);
          }
        };
        _proto.start = function start() {};
        _proto.onDestroy = function onDestroy() {
          this.removeListeners();
        };
        _proto.removeListeners = function removeListeners() {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this._listeners), _step2; !(_step2 = _iterator2()).done;) {
            var listener = _step2.value;
            EventListener.off(listener);
          }
        };
        return EventComp;
      }(Component)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventListener.ts", ['cc'], function (exports) {
  var cclegacy, Node, isValid, Component;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      isValid = module.isValid;
      Component = module.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "68f6fhYFktCqK+hlZYRB+TT", "EventListener", undefined);
      var EventListener = exports('EventListener', /*#__PURE__*/function () {
        function EventListener() {}
        EventListener.on = function on(info) {
          var msgId = info.evtId;
          if (!msgId) return;
          var objHandler = {
            handler: info.handler,
            target: info.target
          };
          var handlerList = this.handlers[msgId];
          if (!handlerList) {
            handlerList = [];
            this.handlers[msgId] = handlerList;
          }

          //不重复监听
          for (var i = 0, len = handlerList.length; i < len; i++) {
            if (handlerList[i].handler == objHandler.handler && handlerList[i].target == objHandler.target) {
              return;
            }
          }
          for (var _i = 0, _len = handlerList.length; _i < _len; _i++) {
            if (!handlerList[_i]) {
              handlerList[_i] = objHandler;
              return;
            }
          }
          handlerList.push(objHandler);
        };
        /**
         * 取消监听某事件
         * @author: qiaomingwu
         * @param {object} info 时间信息
         */
        EventListener.off = function off(info) {
          var handlerList = this.handlers[info.evtId];
          if (!handlerList) {
            return;
          }
          for (var i = 0, len = handlerList.length; i < len; i++) {
            var oldObj = handlerList[i];
            if (oldObj.handler === info.handler && (!info.target || info.target === oldObj.target)) {
              handlerList.splice(i, 1);
              handlerList.length == 0 && delete this.handlers[info.evtId];
              break;
            }
          }
        };
        /**
         * 删除target里面的所有监听事件
         * @param target 
         * @returns 
         */
        EventListener.offByTarget = function offByTarget(target) {
          if (!target) return;
          for (var evtId in this.handlers) {
            var handlerList = this.handlers[evtId];
            for (var i = handlerList.length - 1; i >= 0; --i) {
              if (handlerList[i].target == target) {
                handlerList.splice(i, 1);
              }
            }
            if (handlerList.length == 0) {
              delete this.handlers[evtId];
            }
          }
        }

        /**
         * 强制清除注册事件      仅新手阶段使用，其他地方请使用.off
         * @author: qiaomingwu
         * @param {number} evtId 事件名字
         */;
        EventListener.forceOffEvent = function forceOffEvent(evtId) {
          var handlerList = this.handlers[evtId];
          if (!handlerList) {
            return;
          }
          handlerList.length = 0;
        }

        /**
         * 派发事件
         * @author: qiaomingwu
         * @param {number} evtId 事件名
         * @param {array} args 参数
         */;
        EventListener.dispatchEvent = function dispatchEvent(evtId) {
          var handlerList = this.handlers[evtId];
          if (!handlerList) {
            return;
          }
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key = 1; _key < _len2; _key++) {
            args[_key - 1] = arguments[_key];
          }
          for (var i = 0, len = handlerList.length; i < len; i++) {
            var objHandler = handlerList[i];
            if (objHandler && objHandler.handler) {
              var target = objHandler.target;
              var can_do = true;
              if (target) {
                //若target为Node或Component组件，则需要判断是否将被释放
                if (target instanceof Node && !isValid(target, true) || target instanceof Component && !isValid(target, true)) {
                  can_do = false;
                }
              }
              can_do && objHandler.handler.apply(objHandler.target, args);
            }
          }
        };
        /**
         * 清除所有已注册事件
         * @author: qiaomingwu
         */
        EventListener.clean = function clean() {
          this.handlers = Object.create(null);
        };
        return EventListener;
      }());
      //监听的所有事件,key可为msgids或ClientEvents中的值
      EventListener.handlers = Object.create(null);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishProto.js", ['./cjs-loader.mjs', './minimal.js'], function (exports, module) {
  var loader, __cjsMetaURL$1;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }],
    execute: function () {
      exports('default', void 0);
      var _cjsExports;
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports$1, require, module, __filename, __dirname) {
        var $protobuf = require("../../../../node_modules/protobufjs/minimal");

        // Common aliases
        var $Reader = $protobuf.Reader,
          $Writer = $protobuf.Writer,
          $util = $protobuf.util;

        // Exported root namespace
        var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = $util.global);
        $root.dgame = function () {
          /**
           * Namespace dgame.
           * @exports dgame
           * @namespace
           */
          var dgame = {};
          dgame.barrage = function () {
            /**
             * Namespace barrage.
             * @memberof dgame
             * @namespace
             */
            var barrage = {};
            barrage.engine = function () {
              /**
               * Namespace engine.
               * @memberof dgame.barrage
               * @namespace
               */
              var engine = {};
              engine.proto = function () {
                /**
                 * Namespace proto.
                 * @memberof dgame.barrage.engine
                 * @namespace
                 */
                var proto = {};
                proto.LoginInfo = function () {
                  /**
                   * Properties of a LoginInfo.
                   * @memberof dgame.barrage.engine.proto
                   * @interface ILoginInfo
                   * @property {string} liveToken LoginInfo liveToken
                   * @property {string} rid LoginInfo rid
                   * @property {boolean} reLogin LoginInfo reLogin
                   * @property {string} machine LoginInfo machine
                   * @property {string} livePlatform LoginInfo livePlatform
                   * @property {Array.<number>|undefined} [extraInfo] LoginInfo extraInfo
                   * @property {string} clientVersion LoginInfo clientVersion
                   * @property {string} roomId LoginInfo roomId
                   * @property {string|undefined} [nickname] LoginInfo nickname
                   * @property {string|undefined} [head] LoginInfo head
                   */

                  /**
                   * Constructs a new LoginInfo.
                   * @memberof dgame.barrage.engine.proto
                   * @classdesc Represents a LoginInfo.
                   * @implements ILoginInfo
                   * @constructor
                   * @param {dgame.barrage.engine.proto.ILoginInfo=} [p] Properties to set
                   */
                  function LoginInfo(p) {
                    this.extraInfo = [];
                    if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                  }

                  /**
                   * LoginInfo liveToken.
                   * @member {string} liveToken
                   * @memberof dgame.barrage.engine.proto.LoginInfo
                   * @instance
                   */
                  LoginInfo.prototype.liveToken = "";

                  /**
                   * LoginInfo rid.
                   * @member {string} rid
                   * @memberof dgame.barrage.engine.proto.LoginInfo
                   * @instance
                   */
                  LoginInfo.prototype.rid = "";

                  /**
                   * LoginInfo reLogin.
                   * @member {boolean} reLogin
                   * @memberof dgame.barrage.engine.proto.LoginInfo
                   * @instance
                   */
                  LoginInfo.prototype.reLogin = false;

                  /**
                   * LoginInfo machine.
                   * @member {string} machine
                   * @memberof dgame.barrage.engine.proto.LoginInfo
                   * @instance
                   */
                  LoginInfo.prototype.machine = "";

                  /**
                   * LoginInfo livePlatform.
                   * @member {string} livePlatform
                   * @memberof dgame.barrage.engine.proto.LoginInfo
                   * @instance
                   */
                  LoginInfo.prototype.livePlatform = "";

                  /**
                   * LoginInfo extraInfo.
                   * @member {Array.<number>} extraInfo
                   * @memberof dgame.barrage.engine.proto.LoginInfo
                   * @instance
                   */
                  LoginInfo.prototype.extraInfo = $util.emptyArray;

                  /**
                   * LoginInfo clientVersion.
                   * @member {string} clientVersion
                   * @memberof dgame.barrage.engine.proto.LoginInfo
                   * @instance
                   */
                  LoginInfo.prototype.clientVersion = "";

                  /**
                   * LoginInfo roomId.
                   * @member {string} roomId
                   * @memberof dgame.barrage.engine.proto.LoginInfo
                   * @instance
                   */
                  LoginInfo.prototype.roomId = "";

                  /**
                   * LoginInfo nickname.
                   * @member {string|null|undefined} nickname
                   * @memberof dgame.barrage.engine.proto.LoginInfo
                   * @instance
                   */
                  LoginInfo.prototype.nickname = undefined;

                  /**
                   * LoginInfo head.
                   * @member {string|null|undefined} head
                   * @memberof dgame.barrage.engine.proto.LoginInfo
                   * @instance
                   */
                  LoginInfo.prototype.head = undefined;

                  /**
                   * Creates a new LoginInfo instance using the specified properties.
                   * @function create
                   * @memberof dgame.barrage.engine.proto.LoginInfo
                   * @static
                   * @param {dgame.barrage.engine.proto.ILoginInfo=} [properties] Properties to set
                   * @returns {dgame.barrage.engine.proto.LoginInfo} LoginInfo instance
                   */
                  LoginInfo.create = function create(properties) {
                    return new LoginInfo(properties);
                  };

                  /**
                   * Encodes the specified LoginInfo message. Does not implicitly {@link dgame.barrage.engine.proto.LoginInfo.verify|verify} messages.
                   * @function encode
                   * @memberof dgame.barrage.engine.proto.LoginInfo
                   * @static
                   * @param {dgame.barrage.engine.proto.ILoginInfo} m LoginInfo message or plain object to encode
                   * @param {$protobuf.Writer} [w] Writer to encode to
                   * @returns {$protobuf.Writer} Writer
                   */
                  LoginInfo.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    w.uint32(10).string(m.liveToken);
                    w.uint32(18).string(m.rid);
                    w.uint32(24).bool(m.reLogin);
                    w.uint32(34).string(m.machine);
                    w.uint32(42).string(m.livePlatform);
                    if (m.extraInfo != null && m.extraInfo.length) {
                      for (var i = 0; i < m.extraInfo.length; ++i) w.uint32(48).int32(m.extraInfo[i]);
                    }
                    w.uint32(58).string(m.clientVersion);
                    w.uint32(66).string(m.roomId);
                    if (m.nickname != null && Object.hasOwnProperty.call(m, "nickname")) w.uint32(74).string(m.nickname);
                    if (m.head != null && Object.hasOwnProperty.call(m, "head")) w.uint32(82).string(m.head);
                    return w;
                  };

                  /**
                   * Decodes a LoginInfo message from the specified reader or buffer.
                   * @function decode
                   * @memberof dgame.barrage.engine.proto.LoginInfo
                   * @static
                   * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                   * @param {number} [l] Message length if known beforehand
                   * @returns {dgame.barrage.engine.proto.LoginInfo} LoginInfo
                   * @throws {Error} If the payload is not a reader or valid buffer
                   * @throws {$protobuf.util.ProtocolError} If required fields are missing
                   */
                  LoginInfo.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                      m = new $root.dgame.barrage.engine.proto.LoginInfo();
                    while (r.pos < c) {
                      var t = r.uint32();
                      switch (t >>> 3) {
                        case 1:
                          {
                            m.liveToken = r.string();
                            break;
                          }
                        case 2:
                          {
                            m.rid = r.string();
                            break;
                          }
                        case 3:
                          {
                            m.reLogin = r.bool();
                            break;
                          }
                        case 4:
                          {
                            m.machine = r.string();
                            break;
                          }
                        case 5:
                          {
                            m.livePlatform = r.string();
                            break;
                          }
                        case 6:
                          {
                            if (!(m.extraInfo && m.extraInfo.length)) m.extraInfo = [];
                            if ((t & 7) === 2) {
                              var c2 = r.uint32() + r.pos;
                              while (r.pos < c2) m.extraInfo.push(r.int32());
                            } else m.extraInfo.push(r.int32());
                            break;
                          }
                        case 7:
                          {
                            m.clientVersion = r.string();
                            break;
                          }
                        case 8:
                          {
                            m.roomId = r.string();
                            break;
                          }
                        case 9:
                          {
                            m.nickname = r.string();
                            break;
                          }
                        case 10:
                          {
                            m.head = r.string();
                            break;
                          }
                        default:
                          r.skipType(t & 7);
                          break;
                      }
                    }
                    if (!m.hasOwnProperty("liveToken")) throw $util.ProtocolError("missing required 'liveToken'", {
                      instance: m
                    });
                    if (!m.hasOwnProperty("rid")) throw $util.ProtocolError("missing required 'rid'", {
                      instance: m
                    });
                    if (!m.hasOwnProperty("reLogin")) throw $util.ProtocolError("missing required 'reLogin'", {
                      instance: m
                    });
                    if (!m.hasOwnProperty("machine")) throw $util.ProtocolError("missing required 'machine'", {
                      instance: m
                    });
                    if (!m.hasOwnProperty("livePlatform")) throw $util.ProtocolError("missing required 'livePlatform'", {
                      instance: m
                    });
                    if (!m.hasOwnProperty("clientVersion")) throw $util.ProtocolError("missing required 'clientVersion'", {
                      instance: m
                    });
                    if (!m.hasOwnProperty("roomId")) throw $util.ProtocolError("missing required 'roomId'", {
                      instance: m
                    });
                    return m;
                  };

                  /**
                   * Gets the default type url for LoginInfo
                   * @function getTypeUrl
                   * @memberof dgame.barrage.engine.proto.LoginInfo
                   * @static
                   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                   * @returns {string} The default type url
                   */
                  LoginInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                      typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/dgame.barrage.engine.proto.LoginInfo";
                  };
                  return LoginInfo;
                }();
                proto.ReplyLogin = function () {
                  /**
                   * Properties of a ReplyLogin.
                   * @memberof dgame.barrage.engine.proto
                   * @interface IReplyLogin
                   * @property {string} rid ReplyLogin rid
                   * @property {number|Long} gid ReplyLogin gid
                   * @property {number|Long} serverTime ReplyLogin serverTime
                   */

                  /**
                   * Constructs a new ReplyLogin.
                   * @memberof dgame.barrage.engine.proto
                   * @classdesc Represents a ReplyLogin.
                   * @implements IReplyLogin
                   * @constructor
                   * @param {dgame.barrage.engine.proto.IReplyLogin=} [p] Properties to set
                   */
                  function ReplyLogin(p) {
                    if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                  }

                  /**
                   * ReplyLogin rid.
                   * @member {string} rid
                   * @memberof dgame.barrage.engine.proto.ReplyLogin
                   * @instance
                   */
                  ReplyLogin.prototype.rid = "";

                  /**
                   * ReplyLogin gid.
                   * @member {number|Long} gid
                   * @memberof dgame.barrage.engine.proto.ReplyLogin
                   * @instance
                   */
                  ReplyLogin.prototype.gid = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

                  /**
                   * ReplyLogin serverTime.
                   * @member {number|Long} serverTime
                   * @memberof dgame.barrage.engine.proto.ReplyLogin
                   * @instance
                   */
                  ReplyLogin.prototype.serverTime = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

                  /**
                   * Creates a new ReplyLogin instance using the specified properties.
                   * @function create
                   * @memberof dgame.barrage.engine.proto.ReplyLogin
                   * @static
                   * @param {dgame.barrage.engine.proto.IReplyLogin=} [properties] Properties to set
                   * @returns {dgame.barrage.engine.proto.ReplyLogin} ReplyLogin instance
                   */
                  ReplyLogin.create = function create(properties) {
                    return new ReplyLogin(properties);
                  };

                  /**
                   * Encodes the specified ReplyLogin message. Does not implicitly {@link dgame.barrage.engine.proto.ReplyLogin.verify|verify} messages.
                   * @function encode
                   * @memberof dgame.barrage.engine.proto.ReplyLogin
                   * @static
                   * @param {dgame.barrage.engine.proto.IReplyLogin} m ReplyLogin message or plain object to encode
                   * @param {$protobuf.Writer} [w] Writer to encode to
                   * @returns {$protobuf.Writer} Writer
                   */
                  ReplyLogin.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    w.uint32(10).string(m.rid);
                    w.uint32(16).int64(m.gid);
                    w.uint32(24).int64(m.serverTime);
                    return w;
                  };

                  /**
                   * Decodes a ReplyLogin message from the specified reader or buffer.
                   * @function decode
                   * @memberof dgame.barrage.engine.proto.ReplyLogin
                   * @static
                   * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                   * @param {number} [l] Message length if known beforehand
                   * @returns {dgame.barrage.engine.proto.ReplyLogin} ReplyLogin
                   * @throws {Error} If the payload is not a reader or valid buffer
                   * @throws {$protobuf.util.ProtocolError} If required fields are missing
                   */
                  ReplyLogin.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                      m = new $root.dgame.barrage.engine.proto.ReplyLogin();
                    while (r.pos < c) {
                      var t = r.uint32();
                      switch (t >>> 3) {
                        case 1:
                          {
                            m.rid = r.string();
                            break;
                          }
                        case 2:
                          {
                            m.gid = r.int64();
                            break;
                          }
                        case 3:
                          {
                            m.serverTime = r.int64();
                            break;
                          }
                        default:
                          r.skipType(t & 7);
                          break;
                      }
                    }
                    if (!m.hasOwnProperty("rid")) throw $util.ProtocolError("missing required 'rid'", {
                      instance: m
                    });
                    if (!m.hasOwnProperty("gid")) throw $util.ProtocolError("missing required 'gid'", {
                      instance: m
                    });
                    if (!m.hasOwnProperty("serverTime")) throw $util.ProtocolError("missing required 'serverTime'", {
                      instance: m
                    });
                    return m;
                  };

                  /**
                   * Gets the default type url for ReplyLogin
                   * @function getTypeUrl
                   * @memberof dgame.barrage.engine.proto.ReplyLogin
                   * @static
                   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                   * @returns {string} The default type url
                   */
                  ReplyLogin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                      typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/dgame.barrage.engine.proto.ReplyLogin";
                  };
                  return ReplyLogin;
                }();
                proto.MaintainNoticeReply = function () {
                  /**
                   * Properties of a MaintainNoticeReply.
                   * @memberof dgame.barrage.engine.proto
                   * @interface IMaintainNoticeReply
                   * @property {number|Long} leftTime MaintainNoticeReply leftTime
                   * @property {number} durationTime MaintainNoticeReply durationTime
                   * @property {string} content MaintainNoticeReply content
                   */

                  /**
                   * Constructs a new MaintainNoticeReply.
                   * @memberof dgame.barrage.engine.proto
                   * @classdesc Represents a MaintainNoticeReply.
                   * @implements IMaintainNoticeReply
                   * @constructor
                   * @param {dgame.barrage.engine.proto.IMaintainNoticeReply=} [p] Properties to set
                   */
                  function MaintainNoticeReply(p) {
                    if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                  }

                  /**
                   * MaintainNoticeReply leftTime.
                   * @member {number|Long} leftTime
                   * @memberof dgame.barrage.engine.proto.MaintainNoticeReply
                   * @instance
                   */
                  MaintainNoticeReply.prototype.leftTime = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

                  /**
                   * MaintainNoticeReply durationTime.
                   * @member {number} durationTime
                   * @memberof dgame.barrage.engine.proto.MaintainNoticeReply
                   * @instance
                   */
                  MaintainNoticeReply.prototype.durationTime = 0;

                  /**
                   * MaintainNoticeReply content.
                   * @member {string} content
                   * @memberof dgame.barrage.engine.proto.MaintainNoticeReply
                   * @instance
                   */
                  MaintainNoticeReply.prototype.content = "";

                  /**
                   * Creates a new MaintainNoticeReply instance using the specified properties.
                   * @function create
                   * @memberof dgame.barrage.engine.proto.MaintainNoticeReply
                   * @static
                   * @param {dgame.barrage.engine.proto.IMaintainNoticeReply=} [properties] Properties to set
                   * @returns {dgame.barrage.engine.proto.MaintainNoticeReply} MaintainNoticeReply instance
                   */
                  MaintainNoticeReply.create = function create(properties) {
                    return new MaintainNoticeReply(properties);
                  };

                  /**
                   * Encodes the specified MaintainNoticeReply message. Does not implicitly {@link dgame.barrage.engine.proto.MaintainNoticeReply.verify|verify} messages.
                   * @function encode
                   * @memberof dgame.barrage.engine.proto.MaintainNoticeReply
                   * @static
                   * @param {dgame.barrage.engine.proto.IMaintainNoticeReply} m MaintainNoticeReply message or plain object to encode
                   * @param {$protobuf.Writer} [w] Writer to encode to
                   * @returns {$protobuf.Writer} Writer
                   */
                  MaintainNoticeReply.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    w.uint32(8).int64(m.leftTime);
                    w.uint32(16).int32(m.durationTime);
                    w.uint32(26).string(m.content);
                    return w;
                  };

                  /**
                   * Decodes a MaintainNoticeReply message from the specified reader or buffer.
                   * @function decode
                   * @memberof dgame.barrage.engine.proto.MaintainNoticeReply
                   * @static
                   * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                   * @param {number} [l] Message length if known beforehand
                   * @returns {dgame.barrage.engine.proto.MaintainNoticeReply} MaintainNoticeReply
                   * @throws {Error} If the payload is not a reader or valid buffer
                   * @throws {$protobuf.util.ProtocolError} If required fields are missing
                   */
                  MaintainNoticeReply.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                      m = new $root.dgame.barrage.engine.proto.MaintainNoticeReply();
                    while (r.pos < c) {
                      var t = r.uint32();
                      switch (t >>> 3) {
                        case 1:
                          {
                            m.leftTime = r.int64();
                            break;
                          }
                        case 2:
                          {
                            m.durationTime = r.int32();
                            break;
                          }
                        case 3:
                          {
                            m.content = r.string();
                            break;
                          }
                        default:
                          r.skipType(t & 7);
                          break;
                      }
                    }
                    if (!m.hasOwnProperty("leftTime")) throw $util.ProtocolError("missing required 'leftTime'", {
                      instance: m
                    });
                    if (!m.hasOwnProperty("durationTime")) throw $util.ProtocolError("missing required 'durationTime'", {
                      instance: m
                    });
                    if (!m.hasOwnProperty("content")) throw $util.ProtocolError("missing required 'content'", {
                      instance: m
                    });
                    return m;
                  };

                  /**
                   * Gets the default type url for MaintainNoticeReply
                   * @function getTypeUrl
                   * @memberof dgame.barrage.engine.proto.MaintainNoticeReply
                   * @static
                   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                   * @returns {string} The default type url
                   */
                  MaintainNoticeReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                      typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/dgame.barrage.engine.proto.MaintainNoticeReply";
                  };
                  return MaintainNoticeReply;
                }();
                proto.Null = function () {
                  /**
                   * Properties of a Null.
                   * @memberof dgame.barrage.engine.proto
                   * @interface INull
                   */

                  /**
                   * Constructs a new Null.
                   * @memberof dgame.barrage.engine.proto
                   * @classdesc Represents a Null.
                   * @implements INull
                   * @constructor
                   * @param {dgame.barrage.engine.proto.INull=} [p] Properties to set
                   */
                  function Null(p) {
                    if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                  }

                  /**
                   * Creates a new Null instance using the specified properties.
                   * @function create
                   * @memberof dgame.barrage.engine.proto.Null
                   * @static
                   * @param {dgame.barrage.engine.proto.INull=} [properties] Properties to set
                   * @returns {dgame.barrage.engine.proto.Null} Null instance
                   */
                  Null.create = function create(properties) {
                    return new Null(properties);
                  };

                  /**
                   * Encodes the specified Null message. Does not implicitly {@link dgame.barrage.engine.proto.Null.verify|verify} messages.
                   * @function encode
                   * @memberof dgame.barrage.engine.proto.Null
                   * @static
                   * @param {dgame.barrage.engine.proto.INull} m Null message or plain object to encode
                   * @param {$protobuf.Writer} [w] Writer to encode to
                   * @returns {$protobuf.Writer} Writer
                   */
                  Null.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    return w;
                  };

                  /**
                   * Decodes a Null message from the specified reader or buffer.
                   * @function decode
                   * @memberof dgame.barrage.engine.proto.Null
                   * @static
                   * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                   * @param {number} [l] Message length if known beforehand
                   * @returns {dgame.barrage.engine.proto.Null} Null
                   * @throws {Error} If the payload is not a reader or valid buffer
                   * @throws {$protobuf.util.ProtocolError} If required fields are missing
                   */
                  Null.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                      m = new $root.dgame.barrage.engine.proto.Null();
                    while (r.pos < c) {
                      var t = r.uint32();
                      switch (t >>> 3) {
                        default:
                          r.skipType(t & 7);
                          break;
                      }
                    }
                    return m;
                  };

                  /**
                   * Gets the default type url for Null
                   * @function getTypeUrl
                   * @memberof dgame.barrage.engine.proto.Null
                   * @static
                   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                   * @returns {string} The default type url
                   */
                  Null.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                      typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/dgame.barrage.engine.proto.Null";
                  };
                  return Null;
                }();
                proto.LongList = function () {
                  /**
                   * Properties of a LongList.
                   * @memberof dgame.barrage.engine.proto
                   * @interface ILongList
                   * @property {Array.<number|Long>|undefined} [vlong] LongList vlong
                   */

                  /**
                   * Constructs a new LongList.
                   * @memberof dgame.barrage.engine.proto
                   * @classdesc Represents a LongList.
                   * @implements ILongList
                   * @constructor
                   * @param {dgame.barrage.engine.proto.ILongList=} [p] Properties to set
                   */
                  function LongList(p) {
                    this.vlong = [];
                    if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                  }

                  /**
                   * LongList vlong.
                   * @member {Array.<number|Long>} vlong
                   * @memberof dgame.barrage.engine.proto.LongList
                   * @instance
                   */
                  LongList.prototype.vlong = $util.emptyArray;

                  /**
                   * Creates a new LongList instance using the specified properties.
                   * @function create
                   * @memberof dgame.barrage.engine.proto.LongList
                   * @static
                   * @param {dgame.barrage.engine.proto.ILongList=} [properties] Properties to set
                   * @returns {dgame.barrage.engine.proto.LongList} LongList instance
                   */
                  LongList.create = function create(properties) {
                    return new LongList(properties);
                  };

                  /**
                   * Encodes the specified LongList message. Does not implicitly {@link dgame.barrage.engine.proto.LongList.verify|verify} messages.
                   * @function encode
                   * @memberof dgame.barrage.engine.proto.LongList
                   * @static
                   * @param {dgame.barrage.engine.proto.ILongList} m LongList message or plain object to encode
                   * @param {$protobuf.Writer} [w] Writer to encode to
                   * @returns {$protobuf.Writer} Writer
                   */
                  LongList.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.vlong != null && m.vlong.length) {
                      for (var i = 0; i < m.vlong.length; ++i) w.uint32(8).int64(m.vlong[i]);
                    }
                    return w;
                  };

                  /**
                   * Decodes a LongList message from the specified reader or buffer.
                   * @function decode
                   * @memberof dgame.barrage.engine.proto.LongList
                   * @static
                   * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                   * @param {number} [l] Message length if known beforehand
                   * @returns {dgame.barrage.engine.proto.LongList} LongList
                   * @throws {Error} If the payload is not a reader or valid buffer
                   * @throws {$protobuf.util.ProtocolError} If required fields are missing
                   */
                  LongList.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                      m = new $root.dgame.barrage.engine.proto.LongList();
                    while (r.pos < c) {
                      var t = r.uint32();
                      switch (t >>> 3) {
                        case 1:
                          {
                            if (!(m.vlong && m.vlong.length)) m.vlong = [];
                            if ((t & 7) === 2) {
                              var c2 = r.uint32() + r.pos;
                              while (r.pos < c2) m.vlong.push(r.int64());
                            } else m.vlong.push(r.int64());
                            break;
                          }
                        default:
                          r.skipType(t & 7);
                          break;
                      }
                    }
                    return m;
                  };

                  /**
                   * Gets the default type url for LongList
                   * @function getTypeUrl
                   * @memberof dgame.barrage.engine.proto.LongList
                   * @static
                   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                   * @returns {string} The default type url
                   */
                  LongList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                      typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/dgame.barrage.engine.proto.LongList";
                  };
                  return LongList;
                }();
                proto.IntList = function () {
                  /**
                   * Properties of an IntList.
                   * @memberof dgame.barrage.engine.proto
                   * @interface IIntList
                   * @property {Array.<number>|undefined} [vint] IntList vint
                   */

                  /**
                   * Constructs a new IntList.
                   * @memberof dgame.barrage.engine.proto
                   * @classdesc Represents an IntList.
                   * @implements IIntList
                   * @constructor
                   * @param {dgame.barrage.engine.proto.IIntList=} [p] Properties to set
                   */
                  function IntList(p) {
                    this.vint = [];
                    if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                  }

                  /**
                   * IntList vint.
                   * @member {Array.<number>} vint
                   * @memberof dgame.barrage.engine.proto.IntList
                   * @instance
                   */
                  IntList.prototype.vint = $util.emptyArray;

                  /**
                   * Creates a new IntList instance using the specified properties.
                   * @function create
                   * @memberof dgame.barrage.engine.proto.IntList
                   * @static
                   * @param {dgame.barrage.engine.proto.IIntList=} [properties] Properties to set
                   * @returns {dgame.barrage.engine.proto.IntList} IntList instance
                   */
                  IntList.create = function create(properties) {
                    return new IntList(properties);
                  };

                  /**
                   * Encodes the specified IntList message. Does not implicitly {@link dgame.barrage.engine.proto.IntList.verify|verify} messages.
                   * @function encode
                   * @memberof dgame.barrage.engine.proto.IntList
                   * @static
                   * @param {dgame.barrage.engine.proto.IIntList} m IntList message or plain object to encode
                   * @param {$protobuf.Writer} [w] Writer to encode to
                   * @returns {$protobuf.Writer} Writer
                   */
                  IntList.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.vint != null && m.vint.length) {
                      for (var i = 0; i < m.vint.length; ++i) w.uint32(8).int32(m.vint[i]);
                    }
                    return w;
                  };

                  /**
                   * Decodes an IntList message from the specified reader or buffer.
                   * @function decode
                   * @memberof dgame.barrage.engine.proto.IntList
                   * @static
                   * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                   * @param {number} [l] Message length if known beforehand
                   * @returns {dgame.barrage.engine.proto.IntList} IntList
                   * @throws {Error} If the payload is not a reader or valid buffer
                   * @throws {$protobuf.util.ProtocolError} If required fields are missing
                   */
                  IntList.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                      m = new $root.dgame.barrage.engine.proto.IntList();
                    while (r.pos < c) {
                      var t = r.uint32();
                      switch (t >>> 3) {
                        case 1:
                          {
                            if (!(m.vint && m.vint.length)) m.vint = [];
                            if ((t & 7) === 2) {
                              var c2 = r.uint32() + r.pos;
                              while (r.pos < c2) m.vint.push(r.int32());
                            } else m.vint.push(r.int32());
                            break;
                          }
                        default:
                          r.skipType(t & 7);
                          break;
                      }
                    }
                    return m;
                  };

                  /**
                   * Gets the default type url for IntList
                   * @function getTypeUrl
                   * @memberof dgame.barrage.engine.proto.IntList
                   * @static
                   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                   * @returns {string} The default type url
                   */
                  IntList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                      typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/dgame.barrage.engine.proto.IntList";
                  };
                  return IntList;
                }();
                proto.StrList = function () {
                  /**
                   * Properties of a StrList.
                   * @memberof dgame.barrage.engine.proto
                   * @interface IStrList
                   * @property {Array.<string>|undefined} [vstring] StrList vstring
                   */

                  /**
                   * Constructs a new StrList.
                   * @memberof dgame.barrage.engine.proto
                   * @classdesc Represents a StrList.
                   * @implements IStrList
                   * @constructor
                   * @param {dgame.barrage.engine.proto.IStrList=} [p] Properties to set
                   */
                  function StrList(p) {
                    this.vstring = [];
                    if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                  }

                  /**
                   * StrList vstring.
                   * @member {Array.<string>} vstring
                   * @memberof dgame.barrage.engine.proto.StrList
                   * @instance
                   */
                  StrList.prototype.vstring = $util.emptyArray;

                  /**
                   * Creates a new StrList instance using the specified properties.
                   * @function create
                   * @memberof dgame.barrage.engine.proto.StrList
                   * @static
                   * @param {dgame.barrage.engine.proto.IStrList=} [properties] Properties to set
                   * @returns {dgame.barrage.engine.proto.StrList} StrList instance
                   */
                  StrList.create = function create(properties) {
                    return new StrList(properties);
                  };

                  /**
                   * Encodes the specified StrList message. Does not implicitly {@link dgame.barrage.engine.proto.StrList.verify|verify} messages.
                   * @function encode
                   * @memberof dgame.barrage.engine.proto.StrList
                   * @static
                   * @param {dgame.barrage.engine.proto.IStrList} m StrList message or plain object to encode
                   * @param {$protobuf.Writer} [w] Writer to encode to
                   * @returns {$protobuf.Writer} Writer
                   */
                  StrList.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.vstring != null && m.vstring.length) {
                      for (var i = 0; i < m.vstring.length; ++i) w.uint32(10).string(m.vstring[i]);
                    }
                    return w;
                  };

                  /**
                   * Decodes a StrList message from the specified reader or buffer.
                   * @function decode
                   * @memberof dgame.barrage.engine.proto.StrList
                   * @static
                   * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                   * @param {number} [l] Message length if known beforehand
                   * @returns {dgame.barrage.engine.proto.StrList} StrList
                   * @throws {Error} If the payload is not a reader or valid buffer
                   * @throws {$protobuf.util.ProtocolError} If required fields are missing
                   */
                  StrList.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                      m = new $root.dgame.barrage.engine.proto.StrList();
                    while (r.pos < c) {
                      var t = r.uint32();
                      switch (t >>> 3) {
                        case 1:
                          {
                            if (!(m.vstring && m.vstring.length)) m.vstring = [];
                            m.vstring.push(r.string());
                            break;
                          }
                        default:
                          r.skipType(t & 7);
                          break;
                      }
                    }
                    return m;
                  };

                  /**
                   * Gets the default type url for StrList
                   * @function getTypeUrl
                   * @memberof dgame.barrage.engine.proto.StrList
                   * @static
                   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                   * @returns {string} The default type url
                   */
                  StrList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                      typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/dgame.barrage.engine.proto.StrList";
                  };
                  return StrList;
                }();
                proto.KstrVlistStr = function () {
                  /**
                   * Properties of a KstrVlistStr.
                   * @memberof dgame.barrage.engine.proto
                   * @interface IKstrVlistStr
                   * @property {string|undefined} [key] KstrVlistStr key
                   * @property {Array.<string>|undefined} [vlist] KstrVlistStr vlist
                   */

                  /**
                   * Constructs a new KstrVlistStr.
                   * @memberof dgame.barrage.engine.proto
                   * @classdesc Represents a KstrVlistStr.
                   * @implements IKstrVlistStr
                   * @constructor
                   * @param {dgame.barrage.engine.proto.IKstrVlistStr=} [p] Properties to set
                   */
                  function KstrVlistStr(p) {
                    this.vlist = [];
                    if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                  }

                  /**
                   * KstrVlistStr key.
                   * @member {string|null|undefined} key
                   * @memberof dgame.barrage.engine.proto.KstrVlistStr
                   * @instance
                   */
                  KstrVlistStr.prototype.key = undefined;

                  /**
                   * KstrVlistStr vlist.
                   * @member {Array.<string>} vlist
                   * @memberof dgame.barrage.engine.proto.KstrVlistStr
                   * @instance
                   */
                  KstrVlistStr.prototype.vlist = $util.emptyArray;

                  /**
                   * Creates a new KstrVlistStr instance using the specified properties.
                   * @function create
                   * @memberof dgame.barrage.engine.proto.KstrVlistStr
                   * @static
                   * @param {dgame.barrage.engine.proto.IKstrVlistStr=} [properties] Properties to set
                   * @returns {dgame.barrage.engine.proto.KstrVlistStr} KstrVlistStr instance
                   */
                  KstrVlistStr.create = function create(properties) {
                    return new KstrVlistStr(properties);
                  };

                  /**
                   * Encodes the specified KstrVlistStr message. Does not implicitly {@link dgame.barrage.engine.proto.KstrVlistStr.verify|verify} messages.
                   * @function encode
                   * @memberof dgame.barrage.engine.proto.KstrVlistStr
                   * @static
                   * @param {dgame.barrage.engine.proto.IKstrVlistStr} m KstrVlistStr message or plain object to encode
                   * @param {$protobuf.Writer} [w] Writer to encode to
                   * @returns {$protobuf.Writer} Writer
                   */
                  KstrVlistStr.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.key != null && Object.hasOwnProperty.call(m, "key")) w.uint32(10).string(m.key);
                    if (m.vlist != null && m.vlist.length) {
                      for (var i = 0; i < m.vlist.length; ++i) w.uint32(18).string(m.vlist[i]);
                    }
                    return w;
                  };

                  /**
                   * Decodes a KstrVlistStr message from the specified reader or buffer.
                   * @function decode
                   * @memberof dgame.barrage.engine.proto.KstrVlistStr
                   * @static
                   * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                   * @param {number} [l] Message length if known beforehand
                   * @returns {dgame.barrage.engine.proto.KstrVlistStr} KstrVlistStr
                   * @throws {Error} If the payload is not a reader or valid buffer
                   * @throws {$protobuf.util.ProtocolError} If required fields are missing
                   */
                  KstrVlistStr.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                      m = new $root.dgame.barrage.engine.proto.KstrVlistStr();
                    while (r.pos < c) {
                      var t = r.uint32();
                      switch (t >>> 3) {
                        case 1:
                          {
                            m.key = r.string();
                            break;
                          }
                        case 2:
                          {
                            if (!(m.vlist && m.vlist.length)) m.vlist = [];
                            m.vlist.push(r.string());
                            break;
                          }
                        default:
                          r.skipType(t & 7);
                          break;
                      }
                    }
                    return m;
                  };

                  /**
                   * Gets the default type url for KstrVlistStr
                   * @function getTypeUrl
                   * @memberof dgame.barrage.engine.proto.KstrVlistStr
                   * @static
                   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                   * @returns {string} The default type url
                   */
                  KstrVlistStr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                      typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/dgame.barrage.engine.proto.KstrVlistStr";
                  };
                  return KstrVlistStr;
                }();
                proto.KstrVlistInt = function () {
                  /**
                   * Properties of a KstrVlistInt.
                   * @memberof dgame.barrage.engine.proto
                   * @interface IKstrVlistInt
                   * @property {string|undefined} [key] KstrVlistInt key
                   * @property {Array.<number>|undefined} [vlist] KstrVlistInt vlist
                   */

                  /**
                   * Constructs a new KstrVlistInt.
                   * @memberof dgame.barrage.engine.proto
                   * @classdesc Represents a KstrVlistInt.
                   * @implements IKstrVlistInt
                   * @constructor
                   * @param {dgame.barrage.engine.proto.IKstrVlistInt=} [p] Properties to set
                   */
                  function KstrVlistInt(p) {
                    this.vlist = [];
                    if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                  }

                  /**
                   * KstrVlistInt key.
                   * @member {string|null|undefined} key
                   * @memberof dgame.barrage.engine.proto.KstrVlistInt
                   * @instance
                   */
                  KstrVlistInt.prototype.key = undefined;

                  /**
                   * KstrVlistInt vlist.
                   * @member {Array.<number>} vlist
                   * @memberof dgame.barrage.engine.proto.KstrVlistInt
                   * @instance
                   */
                  KstrVlistInt.prototype.vlist = $util.emptyArray;

                  /**
                   * Creates a new KstrVlistInt instance using the specified properties.
                   * @function create
                   * @memberof dgame.barrage.engine.proto.KstrVlistInt
                   * @static
                   * @param {dgame.barrage.engine.proto.IKstrVlistInt=} [properties] Properties to set
                   * @returns {dgame.barrage.engine.proto.KstrVlistInt} KstrVlistInt instance
                   */
                  KstrVlistInt.create = function create(properties) {
                    return new KstrVlistInt(properties);
                  };

                  /**
                   * Encodes the specified KstrVlistInt message. Does not implicitly {@link dgame.barrage.engine.proto.KstrVlistInt.verify|verify} messages.
                   * @function encode
                   * @memberof dgame.barrage.engine.proto.KstrVlistInt
                   * @static
                   * @param {dgame.barrage.engine.proto.IKstrVlistInt} m KstrVlistInt message or plain object to encode
                   * @param {$protobuf.Writer} [w] Writer to encode to
                   * @returns {$protobuf.Writer} Writer
                   */
                  KstrVlistInt.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.key != null && Object.hasOwnProperty.call(m, "key")) w.uint32(10).string(m.key);
                    if (m.vlist != null && m.vlist.length) {
                      for (var i = 0; i < m.vlist.length; ++i) w.uint32(16).int32(m.vlist[i]);
                    }
                    return w;
                  };

                  /**
                   * Decodes a KstrVlistInt message from the specified reader or buffer.
                   * @function decode
                   * @memberof dgame.barrage.engine.proto.KstrVlistInt
                   * @static
                   * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                   * @param {number} [l] Message length if known beforehand
                   * @returns {dgame.barrage.engine.proto.KstrVlistInt} KstrVlistInt
                   * @throws {Error} If the payload is not a reader or valid buffer
                   * @throws {$protobuf.util.ProtocolError} If required fields are missing
                   */
                  KstrVlistInt.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                      m = new $root.dgame.barrage.engine.proto.KstrVlistInt();
                    while (r.pos < c) {
                      var t = r.uint32();
                      switch (t >>> 3) {
                        case 1:
                          {
                            m.key = r.string();
                            break;
                          }
                        case 2:
                          {
                            if (!(m.vlist && m.vlist.length)) m.vlist = [];
                            if ((t & 7) === 2) {
                              var c2 = r.uint32() + r.pos;
                              while (r.pos < c2) m.vlist.push(r.int32());
                            } else m.vlist.push(r.int32());
                            break;
                          }
                        default:
                          r.skipType(t & 7);
                          break;
                      }
                    }
                    return m;
                  };

                  /**
                   * Gets the default type url for KstrVlistInt
                   * @function getTypeUrl
                   * @memberof dgame.barrage.engine.proto.KstrVlistInt
                   * @static
                   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                   * @returns {string} The default type url
                   */
                  KstrVlistInt.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                      typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/dgame.barrage.engine.proto.KstrVlistInt";
                  };
                  return KstrVlistInt;
                }();
                proto.KstrVlistLong = function () {
                  /**
                   * Properties of a KstrVlistLong.
                   * @memberof dgame.barrage.engine.proto
                   * @interface IKstrVlistLong
                   * @property {string|undefined} [key] KstrVlistLong key
                   * @property {Array.<number|Long>|undefined} [vlist] KstrVlistLong vlist
                   */

                  /**
                   * Constructs a new KstrVlistLong.
                   * @memberof dgame.barrage.engine.proto
                   * @classdesc Represents a KstrVlistLong.
                   * @implements IKstrVlistLong
                   * @constructor
                   * @param {dgame.barrage.engine.proto.IKstrVlistLong=} [p] Properties to set
                   */
                  function KstrVlistLong(p) {
                    this.vlist = [];
                    if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                  }

                  /**
                   * KstrVlistLong key.
                   * @member {string|null|undefined} key
                   * @memberof dgame.barrage.engine.proto.KstrVlistLong
                   * @instance
                   */
                  KstrVlistLong.prototype.key = undefined;

                  /**
                   * KstrVlistLong vlist.
                   * @member {Array.<number|Long>} vlist
                   * @memberof dgame.barrage.engine.proto.KstrVlistLong
                   * @instance
                   */
                  KstrVlistLong.prototype.vlist = $util.emptyArray;

                  /**
                   * Creates a new KstrVlistLong instance using the specified properties.
                   * @function create
                   * @memberof dgame.barrage.engine.proto.KstrVlistLong
                   * @static
                   * @param {dgame.barrage.engine.proto.IKstrVlistLong=} [properties] Properties to set
                   * @returns {dgame.barrage.engine.proto.KstrVlistLong} KstrVlistLong instance
                   */
                  KstrVlistLong.create = function create(properties) {
                    return new KstrVlistLong(properties);
                  };

                  /**
                   * Encodes the specified KstrVlistLong message. Does not implicitly {@link dgame.barrage.engine.proto.KstrVlistLong.verify|verify} messages.
                   * @function encode
                   * @memberof dgame.barrage.engine.proto.KstrVlistLong
                   * @static
                   * @param {dgame.barrage.engine.proto.IKstrVlistLong} m KstrVlistLong message or plain object to encode
                   * @param {$protobuf.Writer} [w] Writer to encode to
                   * @returns {$protobuf.Writer} Writer
                   */
                  KstrVlistLong.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.key != null && Object.hasOwnProperty.call(m, "key")) w.uint32(10).string(m.key);
                    if (m.vlist != null && m.vlist.length) {
                      for (var i = 0; i < m.vlist.length; ++i) w.uint32(16).int64(m.vlist[i]);
                    }
                    return w;
                  };

                  /**
                   * Decodes a KstrVlistLong message from the specified reader or buffer.
                   * @function decode
                   * @memberof dgame.barrage.engine.proto.KstrVlistLong
                   * @static
                   * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                   * @param {number} [l] Message length if known beforehand
                   * @returns {dgame.barrage.engine.proto.KstrVlistLong} KstrVlistLong
                   * @throws {Error} If the payload is not a reader or valid buffer
                   * @throws {$protobuf.util.ProtocolError} If required fields are missing
                   */
                  KstrVlistLong.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                      m = new $root.dgame.barrage.engine.proto.KstrVlistLong();
                    while (r.pos < c) {
                      var t = r.uint32();
                      switch (t >>> 3) {
                        case 1:
                          {
                            m.key = r.string();
                            break;
                          }
                        case 2:
                          {
                            if (!(m.vlist && m.vlist.length)) m.vlist = [];
                            if ((t & 7) === 2) {
                              var c2 = r.uint32() + r.pos;
                              while (r.pos < c2) m.vlist.push(r.int64());
                            } else m.vlist.push(r.int64());
                            break;
                          }
                        default:
                          r.skipType(t & 7);
                          break;
                      }
                    }
                    return m;
                  };

                  /**
                   * Gets the default type url for KstrVlistLong
                   * @function getTypeUrl
                   * @memberof dgame.barrage.engine.proto.KstrVlistLong
                   * @static
                   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                   * @returns {string} The default type url
                   */
                  KstrVlistLong.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                      typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/dgame.barrage.engine.proto.KstrVlistLong";
                  };
                  return KstrVlistLong;
                }();
                proto.KintVlistStr = function () {
                  /**
                   * Properties of a KintVlistStr.
                   * @memberof dgame.barrage.engine.proto
                   * @interface IKintVlistStr
                   * @property {number|undefined} [key] KintVlistStr key
                   * @property {Array.<string>|undefined} [vlist] KintVlistStr vlist
                   */

                  /**
                   * Constructs a new KintVlistStr.
                   * @memberof dgame.barrage.engine.proto
                   * @classdesc Represents a KintVlistStr.
                   * @implements IKintVlistStr
                   * @constructor
                   * @param {dgame.barrage.engine.proto.IKintVlistStr=} [p] Properties to set
                   */
                  function KintVlistStr(p) {
                    this.vlist = [];
                    if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                  }

                  /**
                   * KintVlistStr key.
                   * @member {number|null|undefined} key
                   * @memberof dgame.barrage.engine.proto.KintVlistStr
                   * @instance
                   */
                  KintVlistStr.prototype.key = undefined;

                  /**
                   * KintVlistStr vlist.
                   * @member {Array.<string>} vlist
                   * @memberof dgame.barrage.engine.proto.KintVlistStr
                   * @instance
                   */
                  KintVlistStr.prototype.vlist = $util.emptyArray;

                  /**
                   * Creates a new KintVlistStr instance using the specified properties.
                   * @function create
                   * @memberof dgame.barrage.engine.proto.KintVlistStr
                   * @static
                   * @param {dgame.barrage.engine.proto.IKintVlistStr=} [properties] Properties to set
                   * @returns {dgame.barrage.engine.proto.KintVlistStr} KintVlistStr instance
                   */
                  KintVlistStr.create = function create(properties) {
                    return new KintVlistStr(properties);
                  };

                  /**
                   * Encodes the specified KintVlistStr message. Does not implicitly {@link dgame.barrage.engine.proto.KintVlistStr.verify|verify} messages.
                   * @function encode
                   * @memberof dgame.barrage.engine.proto.KintVlistStr
                   * @static
                   * @param {dgame.barrage.engine.proto.IKintVlistStr} m KintVlistStr message or plain object to encode
                   * @param {$protobuf.Writer} [w] Writer to encode to
                   * @returns {$protobuf.Writer} Writer
                   */
                  KintVlistStr.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.key != null && Object.hasOwnProperty.call(m, "key")) w.uint32(8).int32(m.key);
                    if (m.vlist != null && m.vlist.length) {
                      for (var i = 0; i < m.vlist.length; ++i) w.uint32(18).string(m.vlist[i]);
                    }
                    return w;
                  };

                  /**
                   * Decodes a KintVlistStr message from the specified reader or buffer.
                   * @function decode
                   * @memberof dgame.barrage.engine.proto.KintVlistStr
                   * @static
                   * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                   * @param {number} [l] Message length if known beforehand
                   * @returns {dgame.barrage.engine.proto.KintVlistStr} KintVlistStr
                   * @throws {Error} If the payload is not a reader or valid buffer
                   * @throws {$protobuf.util.ProtocolError} If required fields are missing
                   */
                  KintVlistStr.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                      m = new $root.dgame.barrage.engine.proto.KintVlistStr();
                    while (r.pos < c) {
                      var t = r.uint32();
                      switch (t >>> 3) {
                        case 1:
                          {
                            m.key = r.int32();
                            break;
                          }
                        case 2:
                          {
                            if (!(m.vlist && m.vlist.length)) m.vlist = [];
                            m.vlist.push(r.string());
                            break;
                          }
                        default:
                          r.skipType(t & 7);
                          break;
                      }
                    }
                    return m;
                  };

                  /**
                   * Gets the default type url for KintVlistStr
                   * @function getTypeUrl
                   * @memberof dgame.barrage.engine.proto.KintVlistStr
                   * @static
                   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                   * @returns {string} The default type url
                   */
                  KintVlistStr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                      typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/dgame.barrage.engine.proto.KintVlistStr";
                  };
                  return KintVlistStr;
                }();
                proto.KintVlistInt = function () {
                  /**
                   * Properties of a KintVlistInt.
                   * @memberof dgame.barrage.engine.proto
                   * @interface IKintVlistInt
                   * @property {number|undefined} [key] KintVlistInt key
                   * @property {Array.<number>|undefined} [vlist] KintVlistInt vlist
                   */

                  /**
                   * Constructs a new KintVlistInt.
                   * @memberof dgame.barrage.engine.proto
                   * @classdesc Represents a KintVlistInt.
                   * @implements IKintVlistInt
                   * @constructor
                   * @param {dgame.barrage.engine.proto.IKintVlistInt=} [p] Properties to set
                   */
                  function KintVlistInt(p) {
                    this.vlist = [];
                    if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                  }

                  /**
                   * KintVlistInt key.
                   * @member {number|null|undefined} key
                   * @memberof dgame.barrage.engine.proto.KintVlistInt
                   * @instance
                   */
                  KintVlistInt.prototype.key = undefined;

                  /**
                   * KintVlistInt vlist.
                   * @member {Array.<number>} vlist
                   * @memberof dgame.barrage.engine.proto.KintVlistInt
                   * @instance
                   */
                  KintVlistInt.prototype.vlist = $util.emptyArray;

                  /**
                   * Creates a new KintVlistInt instance using the specified properties.
                   * @function create
                   * @memberof dgame.barrage.engine.proto.KintVlistInt
                   * @static
                   * @param {dgame.barrage.engine.proto.IKintVlistInt=} [properties] Properties to set
                   * @returns {dgame.barrage.engine.proto.KintVlistInt} KintVlistInt instance
                   */
                  KintVlistInt.create = function create(properties) {
                    return new KintVlistInt(properties);
                  };

                  /**
                   * Encodes the specified KintVlistInt message. Does not implicitly {@link dgame.barrage.engine.proto.KintVlistInt.verify|verify} messages.
                   * @function encode
                   * @memberof dgame.barrage.engine.proto.KintVlistInt
                   * @static
                   * @param {dgame.barrage.engine.proto.IKintVlistInt} m KintVlistInt message or plain object to encode
                   * @param {$protobuf.Writer} [w] Writer to encode to
                   * @returns {$protobuf.Writer} Writer
                   */
                  KintVlistInt.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.key != null && Object.hasOwnProperty.call(m, "key")) w.uint32(8).int32(m.key);
                    if (m.vlist != null && m.vlist.length) {
                      for (var i = 0; i < m.vlist.length; ++i) w.uint32(16).int32(m.vlist[i]);
                    }
                    return w;
                  };

                  /**
                   * Decodes a KintVlistInt message from the specified reader or buffer.
                   * @function decode
                   * @memberof dgame.barrage.engine.proto.KintVlistInt
                   * @static
                   * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                   * @param {number} [l] Message length if known beforehand
                   * @returns {dgame.barrage.engine.proto.KintVlistInt} KintVlistInt
                   * @throws {Error} If the payload is not a reader or valid buffer
                   * @throws {$protobuf.util.ProtocolError} If required fields are missing
                   */
                  KintVlistInt.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                      m = new $root.dgame.barrage.engine.proto.KintVlistInt();
                    while (r.pos < c) {
                      var t = r.uint32();
                      switch (t >>> 3) {
                        case 1:
                          {
                            m.key = r.int32();
                            break;
                          }
                        case 2:
                          {
                            if (!(m.vlist && m.vlist.length)) m.vlist = [];
                            if ((t & 7) === 2) {
                              var c2 = r.uint32() + r.pos;
                              while (r.pos < c2) m.vlist.push(r.int32());
                            } else m.vlist.push(r.int32());
                            break;
                          }
                        default:
                          r.skipType(t & 7);
                          break;
                      }
                    }
                    return m;
                  };

                  /**
                   * Gets the default type url for KintVlistInt
                   * @function getTypeUrl
                   * @memberof dgame.barrage.engine.proto.KintVlistInt
                   * @static
                   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                   * @returns {string} The default type url
                   */
                  KintVlistInt.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                      typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/dgame.barrage.engine.proto.KintVlistInt";
                  };
                  return KintVlistInt;
                }();
                proto.KintVlistLong = function () {
                  /**
                   * Properties of a KintVlistLong.
                   * @memberof dgame.barrage.engine.proto
                   * @interface IKintVlistLong
                   * @property {number|undefined} [key] KintVlistLong key
                   * @property {Array.<number|Long>|undefined} [vlist] KintVlistLong vlist
                   */

                  /**
                   * Constructs a new KintVlistLong.
                   * @memberof dgame.barrage.engine.proto
                   * @classdesc Represents a KintVlistLong.
                   * @implements IKintVlistLong
                   * @constructor
                   * @param {dgame.barrage.engine.proto.IKintVlistLong=} [p] Properties to set
                   */
                  function KintVlistLong(p) {
                    this.vlist = [];
                    if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                  }

                  /**
                   * KintVlistLong key.
                   * @member {number|null|undefined} key
                   * @memberof dgame.barrage.engine.proto.KintVlistLong
                   * @instance
                   */
                  KintVlistLong.prototype.key = undefined;

                  /**
                   * KintVlistLong vlist.
                   * @member {Array.<number|Long>} vlist
                   * @memberof dgame.barrage.engine.proto.KintVlistLong
                   * @instance
                   */
                  KintVlistLong.prototype.vlist = $util.emptyArray;

                  /**
                   * Creates a new KintVlistLong instance using the specified properties.
                   * @function create
                   * @memberof dgame.barrage.engine.proto.KintVlistLong
                   * @static
                   * @param {dgame.barrage.engine.proto.IKintVlistLong=} [properties] Properties to set
                   * @returns {dgame.barrage.engine.proto.KintVlistLong} KintVlistLong instance
                   */
                  KintVlistLong.create = function create(properties) {
                    return new KintVlistLong(properties);
                  };

                  /**
                   * Encodes the specified KintVlistLong message. Does not implicitly {@link dgame.barrage.engine.proto.KintVlistLong.verify|verify} messages.
                   * @function encode
                   * @memberof dgame.barrage.engine.proto.KintVlistLong
                   * @static
                   * @param {dgame.barrage.engine.proto.IKintVlistLong} m KintVlistLong message or plain object to encode
                   * @param {$protobuf.Writer} [w] Writer to encode to
                   * @returns {$protobuf.Writer} Writer
                   */
                  KintVlistLong.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.key != null && Object.hasOwnProperty.call(m, "key")) w.uint32(8).int32(m.key);
                    if (m.vlist != null && m.vlist.length) {
                      for (var i = 0; i < m.vlist.length; ++i) w.uint32(16).int64(m.vlist[i]);
                    }
                    return w;
                  };

                  /**
                   * Decodes a KintVlistLong message from the specified reader or buffer.
                   * @function decode
                   * @memberof dgame.barrage.engine.proto.KintVlistLong
                   * @static
                   * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                   * @param {number} [l] Message length if known beforehand
                   * @returns {dgame.barrage.engine.proto.KintVlistLong} KintVlistLong
                   * @throws {Error} If the payload is not a reader or valid buffer
                   * @throws {$protobuf.util.ProtocolError} If required fields are missing
                   */
                  KintVlistLong.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                      m = new $root.dgame.barrage.engine.proto.KintVlistLong();
                    while (r.pos < c) {
                      var t = r.uint32();
                      switch (t >>> 3) {
                        case 1:
                          {
                            m.key = r.int32();
                            break;
                          }
                        case 2:
                          {
                            if (!(m.vlist && m.vlist.length)) m.vlist = [];
                            if ((t & 7) === 2) {
                              var c2 = r.uint32() + r.pos;
                              while (r.pos < c2) m.vlist.push(r.int64());
                            } else m.vlist.push(r.int64());
                            break;
                          }
                        default:
                          r.skipType(t & 7);
                          break;
                      }
                    }
                    return m;
                  };

                  /**
                   * Gets the default type url for KintVlistLong
                   * @function getTypeUrl
                   * @memberof dgame.barrage.engine.proto.KintVlistLong
                   * @static
                   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                   * @returns {string} The default type url
                   */
                  KintVlistLong.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                      typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/dgame.barrage.engine.proto.KintVlistLong";
                  };
                  return KintVlistLong;
                }();
                proto.KlongVlistStr = function () {
                  /**
                   * Properties of a KlongVlistStr.
                   * @memberof dgame.barrage.engine.proto
                   * @interface IKlongVlistStr
                   * @property {number|Long|undefined} [key] KlongVlistStr key
                   * @property {Array.<string>|undefined} [vlist] KlongVlistStr vlist
                   */

                  /**
                   * Constructs a new KlongVlistStr.
                   * @memberof dgame.barrage.engine.proto
                   * @classdesc Represents a KlongVlistStr.
                   * @implements IKlongVlistStr
                   * @constructor
                   * @param {dgame.barrage.engine.proto.IKlongVlistStr=} [p] Properties to set
                   */
                  function KlongVlistStr(p) {
                    this.vlist = [];
                    if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                  }

                  /**
                   * KlongVlistStr key.
                   * @member {number|Long|null|undefined} key
                   * @memberof dgame.barrage.engine.proto.KlongVlistStr
                   * @instance
                   */
                  KlongVlistStr.prototype.key = undefined;

                  /**
                   * KlongVlistStr vlist.
                   * @member {Array.<string>} vlist
                   * @memberof dgame.barrage.engine.proto.KlongVlistStr
                   * @instance
                   */
                  KlongVlistStr.prototype.vlist = $util.emptyArray;

                  /**
                   * Creates a new KlongVlistStr instance using the specified properties.
                   * @function create
                   * @memberof dgame.barrage.engine.proto.KlongVlistStr
                   * @static
                   * @param {dgame.barrage.engine.proto.IKlongVlistStr=} [properties] Properties to set
                   * @returns {dgame.barrage.engine.proto.KlongVlistStr} KlongVlistStr instance
                   */
                  KlongVlistStr.create = function create(properties) {
                    return new KlongVlistStr(properties);
                  };

                  /**
                   * Encodes the specified KlongVlistStr message. Does not implicitly {@link dgame.barrage.engine.proto.KlongVlistStr.verify|verify} messages.
                   * @function encode
                   * @memberof dgame.barrage.engine.proto.KlongVlistStr
                   * @static
                   * @param {dgame.barrage.engine.proto.IKlongVlistStr} m KlongVlistStr message or plain object to encode
                   * @param {$protobuf.Writer} [w] Writer to encode to
                   * @returns {$protobuf.Writer} Writer
                   */
                  KlongVlistStr.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.key != null && Object.hasOwnProperty.call(m, "key")) w.uint32(8).int64(m.key);
                    if (m.vlist != null && m.vlist.length) {
                      for (var i = 0; i < m.vlist.length; ++i) w.uint32(18).string(m.vlist[i]);
                    }
                    return w;
                  };

                  /**
                   * Decodes a KlongVlistStr message from the specified reader or buffer.
                   * @function decode
                   * @memberof dgame.barrage.engine.proto.KlongVlistStr
                   * @static
                   * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                   * @param {number} [l] Message length if known beforehand
                   * @returns {dgame.barrage.engine.proto.KlongVlistStr} KlongVlistStr
                   * @throws {Error} If the payload is not a reader or valid buffer
                   * @throws {$protobuf.util.ProtocolError} If required fields are missing
                   */
                  KlongVlistStr.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                      m = new $root.dgame.barrage.engine.proto.KlongVlistStr();
                    while (r.pos < c) {
                      var t = r.uint32();
                      switch (t >>> 3) {
                        case 1:
                          {
                            m.key = r.int64();
                            break;
                          }
                        case 2:
                          {
                            if (!(m.vlist && m.vlist.length)) m.vlist = [];
                            m.vlist.push(r.string());
                            break;
                          }
                        default:
                          r.skipType(t & 7);
                          break;
                      }
                    }
                    return m;
                  };

                  /**
                   * Gets the default type url for KlongVlistStr
                   * @function getTypeUrl
                   * @memberof dgame.barrage.engine.proto.KlongVlistStr
                   * @static
                   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                   * @returns {string} The default type url
                   */
                  KlongVlistStr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                      typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/dgame.barrage.engine.proto.KlongVlistStr";
                  };
                  return KlongVlistStr;
                }();
                proto.KlongVlistInt = function () {
                  /**
                   * Properties of a KlongVlistInt.
                   * @memberof dgame.barrage.engine.proto
                   * @interface IKlongVlistInt
                   * @property {number|Long|undefined} [key] KlongVlistInt key
                   * @property {Array.<number>|undefined} [vlist] KlongVlistInt vlist
                   */

                  /**
                   * Constructs a new KlongVlistInt.
                   * @memberof dgame.barrage.engine.proto
                   * @classdesc Represents a KlongVlistInt.
                   * @implements IKlongVlistInt
                   * @constructor
                   * @param {dgame.barrage.engine.proto.IKlongVlistInt=} [p] Properties to set
                   */
                  function KlongVlistInt(p) {
                    this.vlist = [];
                    if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                  }

                  /**
                   * KlongVlistInt key.
                   * @member {number|Long|null|undefined} key
                   * @memberof dgame.barrage.engine.proto.KlongVlistInt
                   * @instance
                   */
                  KlongVlistInt.prototype.key = undefined;

                  /**
                   * KlongVlistInt vlist.
                   * @member {Array.<number>} vlist
                   * @memberof dgame.barrage.engine.proto.KlongVlistInt
                   * @instance
                   */
                  KlongVlistInt.prototype.vlist = $util.emptyArray;

                  /**
                   * Creates a new KlongVlistInt instance using the specified properties.
                   * @function create
                   * @memberof dgame.barrage.engine.proto.KlongVlistInt
                   * @static
                   * @param {dgame.barrage.engine.proto.IKlongVlistInt=} [properties] Properties to set
                   * @returns {dgame.barrage.engine.proto.KlongVlistInt} KlongVlistInt instance
                   */
                  KlongVlistInt.create = function create(properties) {
                    return new KlongVlistInt(properties);
                  };

                  /**
                   * Encodes the specified KlongVlistInt message. Does not implicitly {@link dgame.barrage.engine.proto.KlongVlistInt.verify|verify} messages.
                   * @function encode
                   * @memberof dgame.barrage.engine.proto.KlongVlistInt
                   * @static
                   * @param {dgame.barrage.engine.proto.IKlongVlistInt} m KlongVlistInt message or plain object to encode
                   * @param {$protobuf.Writer} [w] Writer to encode to
                   * @returns {$protobuf.Writer} Writer
                   */
                  KlongVlistInt.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.key != null && Object.hasOwnProperty.call(m, "key")) w.uint32(8).int64(m.key);
                    if (m.vlist != null && m.vlist.length) {
                      for (var i = 0; i < m.vlist.length; ++i) w.uint32(16).int32(m.vlist[i]);
                    }
                    return w;
                  };

                  /**
                   * Decodes a KlongVlistInt message from the specified reader or buffer.
                   * @function decode
                   * @memberof dgame.barrage.engine.proto.KlongVlistInt
                   * @static
                   * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                   * @param {number} [l] Message length if known beforehand
                   * @returns {dgame.barrage.engine.proto.KlongVlistInt} KlongVlistInt
                   * @throws {Error} If the payload is not a reader or valid buffer
                   * @throws {$protobuf.util.ProtocolError} If required fields are missing
                   */
                  KlongVlistInt.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                      m = new $root.dgame.barrage.engine.proto.KlongVlistInt();
                    while (r.pos < c) {
                      var t = r.uint32();
                      switch (t >>> 3) {
                        case 1:
                          {
                            m.key = r.int64();
                            break;
                          }
                        case 2:
                          {
                            if (!(m.vlist && m.vlist.length)) m.vlist = [];
                            if ((t & 7) === 2) {
                              var c2 = r.uint32() + r.pos;
                              while (r.pos < c2) m.vlist.push(r.int32());
                            } else m.vlist.push(r.int32());
                            break;
                          }
                        default:
                          r.skipType(t & 7);
                          break;
                      }
                    }
                    return m;
                  };

                  /**
                   * Gets the default type url for KlongVlistInt
                   * @function getTypeUrl
                   * @memberof dgame.barrage.engine.proto.KlongVlistInt
                   * @static
                   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                   * @returns {string} The default type url
                   */
                  KlongVlistInt.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                      typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/dgame.barrage.engine.proto.KlongVlistInt";
                  };
                  return KlongVlistInt;
                }();
                proto.KlongVlistLong = function () {
                  /**
                   * Properties of a KlongVlistLong.
                   * @memberof dgame.barrage.engine.proto
                   * @interface IKlongVlistLong
                   * @property {number|Long|undefined} [key] KlongVlistLong key
                   * @property {Array.<number|Long>|undefined} [vlist] KlongVlistLong vlist
                   */

                  /**
                   * Constructs a new KlongVlistLong.
                   * @memberof dgame.barrage.engine.proto
                   * @classdesc Represents a KlongVlistLong.
                   * @implements IKlongVlistLong
                   * @constructor
                   * @param {dgame.barrage.engine.proto.IKlongVlistLong=} [p] Properties to set
                   */
                  function KlongVlistLong(p) {
                    this.vlist = [];
                    if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                  }

                  /**
                   * KlongVlistLong key.
                   * @member {number|Long|null|undefined} key
                   * @memberof dgame.barrage.engine.proto.KlongVlistLong
                   * @instance
                   */
                  KlongVlistLong.prototype.key = undefined;

                  /**
                   * KlongVlistLong vlist.
                   * @member {Array.<number|Long>} vlist
                   * @memberof dgame.barrage.engine.proto.KlongVlistLong
                   * @instance
                   */
                  KlongVlistLong.prototype.vlist = $util.emptyArray;

                  /**
                   * Creates a new KlongVlistLong instance using the specified properties.
                   * @function create
                   * @memberof dgame.barrage.engine.proto.KlongVlistLong
                   * @static
                   * @param {dgame.barrage.engine.proto.IKlongVlistLong=} [properties] Properties to set
                   * @returns {dgame.barrage.engine.proto.KlongVlistLong} KlongVlistLong instance
                   */
                  KlongVlistLong.create = function create(properties) {
                    return new KlongVlistLong(properties);
                  };

                  /**
                   * Encodes the specified KlongVlistLong message. Does not implicitly {@link dgame.barrage.engine.proto.KlongVlistLong.verify|verify} messages.
                   * @function encode
                   * @memberof dgame.barrage.engine.proto.KlongVlistLong
                   * @static
                   * @param {dgame.barrage.engine.proto.IKlongVlistLong} m KlongVlistLong message or plain object to encode
                   * @param {$protobuf.Writer} [w] Writer to encode to
                   * @returns {$protobuf.Writer} Writer
                   */
                  KlongVlistLong.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    if (m.key != null && Object.hasOwnProperty.call(m, "key")) w.uint32(8).int64(m.key);
                    if (m.vlist != null && m.vlist.length) {
                      for (var i = 0; i < m.vlist.length; ++i) w.uint32(16).int64(m.vlist[i]);
                    }
                    return w;
                  };

                  /**
                   * Decodes a KlongVlistLong message from the specified reader or buffer.
                   * @function decode
                   * @memberof dgame.barrage.engine.proto.KlongVlistLong
                   * @static
                   * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                   * @param {number} [l] Message length if known beforehand
                   * @returns {dgame.barrage.engine.proto.KlongVlistLong} KlongVlistLong
                   * @throws {Error} If the payload is not a reader or valid buffer
                   * @throws {$protobuf.util.ProtocolError} If required fields are missing
                   */
                  KlongVlistLong.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                      m = new $root.dgame.barrage.engine.proto.KlongVlistLong();
                    while (r.pos < c) {
                      var t = r.uint32();
                      switch (t >>> 3) {
                        case 1:
                          {
                            m.key = r.int64();
                            break;
                          }
                        case 2:
                          {
                            if (!(m.vlist && m.vlist.length)) m.vlist = [];
                            if ((t & 7) === 2) {
                              var c2 = r.uint32() + r.pos;
                              while (r.pos < c2) m.vlist.push(r.int64());
                            } else m.vlist.push(r.int64());
                            break;
                          }
                        default:
                          r.skipType(t & 7);
                          break;
                      }
                    }
                    return m;
                  };

                  /**
                   * Gets the default type url for KlongVlistLong
                   * @function getTypeUrl
                   * @memberof dgame.barrage.engine.proto.KlongVlistLong
                   * @static
                   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                   * @returns {string} The default type url
                   */
                  KlongVlistLong.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                      typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/dgame.barrage.engine.proto.KlongVlistLong";
                  };
                  return KlongVlistLong;
                }();
                proto.S2CCode = function () {
                  /**
                   * Properties of a S2CCode.
                   * @memberof dgame.barrage.engine.proto
                   * @interface IS2CCode
                   * @property {number} retcode S2CCode retcode
                   */

                  /**
                   * Constructs a new S2CCode.
                   * @memberof dgame.barrage.engine.proto
                   * @classdesc Represents a S2CCode.
                   * @implements IS2CCode
                   * @constructor
                   * @param {dgame.barrage.engine.proto.IS2CCode=} [p] Properties to set
                   */
                  function S2CCode(p) {
                    if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                  }

                  /**
                   * S2CCode retcode.
                   * @member {number} retcode
                   * @memberof dgame.barrage.engine.proto.S2CCode
                   * @instance
                   */
                  S2CCode.prototype.retcode = 0;

                  /**
                   * Creates a new S2CCode instance using the specified properties.
                   * @function create
                   * @memberof dgame.barrage.engine.proto.S2CCode
                   * @static
                   * @param {dgame.barrage.engine.proto.IS2CCode=} [properties] Properties to set
                   * @returns {dgame.barrage.engine.proto.S2CCode} S2CCode instance
                   */
                  S2CCode.create = function create(properties) {
                    return new S2CCode(properties);
                  };

                  /**
                   * Encodes the specified S2CCode message. Does not implicitly {@link dgame.barrage.engine.proto.S2CCode.verify|verify} messages.
                   * @function encode
                   * @memberof dgame.barrage.engine.proto.S2CCode
                   * @static
                   * @param {dgame.barrage.engine.proto.IS2CCode} m S2CCode message or plain object to encode
                   * @param {$protobuf.Writer} [w] Writer to encode to
                   * @returns {$protobuf.Writer} Writer
                   */
                  S2CCode.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    w.uint32(8).int32(m.retcode);
                    return w;
                  };

                  /**
                   * Decodes a S2CCode message from the specified reader or buffer.
                   * @function decode
                   * @memberof dgame.barrage.engine.proto.S2CCode
                   * @static
                   * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                   * @param {number} [l] Message length if known beforehand
                   * @returns {dgame.barrage.engine.proto.S2CCode} S2CCode
                   * @throws {Error} If the payload is not a reader or valid buffer
                   * @throws {$protobuf.util.ProtocolError} If required fields are missing
                   */
                  S2CCode.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                      m = new $root.dgame.barrage.engine.proto.S2CCode();
                    while (r.pos < c) {
                      var t = r.uint32();
                      switch (t >>> 3) {
                        case 1:
                          {
                            m.retcode = r.int32();
                            break;
                          }
                        default:
                          r.skipType(t & 7);
                          break;
                      }
                    }
                    if (!m.hasOwnProperty("retcode")) throw $util.ProtocolError("missing required 'retcode'", {
                      instance: m
                    });
                    return m;
                  };

                  /**
                   * Gets the default type url for S2CCode
                   * @function getTypeUrl
                   * @memberof dgame.barrage.engine.proto.S2CCode
                   * @static
                   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                   * @returns {string} The default type url
                   */
                  S2CCode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                      typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/dgame.barrage.engine.proto.S2CCode";
                  };
                  return S2CCode;
                }();
                proto.String = function () {
                  /**
                   * Properties of a String.
                   * @memberof dgame.barrage.engine.proto
                   * @interface IString
                   * @property {string} key String key
                   * @property {string|undefined} [webKey] String webKey
                   */

                  /**
                   * Constructs a new String.
                   * @memberof dgame.barrage.engine.proto
                   * @classdesc Represents a String.
                   * @implements IString
                   * @constructor
                   * @param {dgame.barrage.engine.proto.IString=} [p] Properties to set
                   */
                  function String(p) {
                    if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                  }

                  /**
                   * String key.
                   * @member {string} key
                   * @memberof dgame.barrage.engine.proto.String
                   * @instance
                   */
                  String.prototype.key = "";

                  /**
                   * String webKey.
                   * @member {string|null|undefined} webKey
                   * @memberof dgame.barrage.engine.proto.String
                   * @instance
                   */
                  String.prototype.webKey = undefined;

                  /**
                   * Creates a new String instance using the specified properties.
                   * @function create
                   * @memberof dgame.barrage.engine.proto.String
                   * @static
                   * @param {dgame.barrage.engine.proto.IString=} [properties] Properties to set
                   * @returns {dgame.barrage.engine.proto.String} String instance
                   */
                  String.create = function create(properties) {
                    return new String(properties);
                  };

                  /**
                   * Encodes the specified String message. Does not implicitly {@link dgame.barrage.engine.proto.String.verify|verify} messages.
                   * @function encode
                   * @memberof dgame.barrage.engine.proto.String
                   * @static
                   * @param {dgame.barrage.engine.proto.IString} m String message or plain object to encode
                   * @param {$protobuf.Writer} [w] Writer to encode to
                   * @returns {$protobuf.Writer} Writer
                   */
                  String.encode = function encode(m, w) {
                    if (!w) w = $Writer.create();
                    w.uint32(10).string(m.key);
                    if (m.webKey != null && Object.hasOwnProperty.call(m, "webKey")) w.uint32(18).string(m.webKey);
                    return w;
                  };

                  /**
                   * Decodes a String message from the specified reader or buffer.
                   * @function decode
                   * @memberof dgame.barrage.engine.proto.String
                   * @static
                   * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                   * @param {number} [l] Message length if known beforehand
                   * @returns {dgame.barrage.engine.proto.String} String
                   * @throws {Error} If the payload is not a reader or valid buffer
                   * @throws {$protobuf.util.ProtocolError} If required fields are missing
                   */
                  String.decode = function decode(r, l) {
                    if (!(r instanceof $Reader)) r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l,
                      m = new $root.dgame.barrage.engine.proto.String();
                    while (r.pos < c) {
                      var t = r.uint32();
                      switch (t >>> 3) {
                        case 1:
                          {
                            m.key = r.string();
                            break;
                          }
                        case 2:
                          {
                            m.webKey = r.string();
                            break;
                          }
                        default:
                          r.skipType(t & 7);
                          break;
                      }
                    }
                    if (!m.hasOwnProperty("key")) throw $util.ProtocolError("missing required 'key'", {
                      instance: m
                    });
                    return m;
                  };

                  /**
                   * Gets the default type url for String
                   * @function getTypeUrl
                   * @memberof dgame.barrage.engine.proto.String
                   * @static
                   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                   * @returns {string} The default type url
                   */
                  String.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                      typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/dgame.barrage.engine.proto.String";
                  };
                  return String;
                }();
                return proto;
              }();
              return engine;
            }();
            return barrage;
          }();
          return dgame;
        }();
        $root.com = function () {
          /**
           * Namespace com.
           * @exports com
           * @namespace
           */
          var com = {};
          com.bear = function () {
            /**
             * Namespace bear.
             * @memberof com
             * @namespace
             */
            var bear = {};
            bear.xxld = function () {
              /**
               * Namespace xxld.
               * @memberof com.bear
               * @namespace
               */
              var xxld = {};
              xxld.lib = function () {
                /**
                 * Namespace lib.
                 * @memberof com.bear.xxld
                 * @namespace
                 */
                var lib = {};
                lib.proto = function () {
                  /**
                   * Namespace proto.
                   * @memberof com.bear.xxld.lib
                   * @namespace
                   */
                  var proto = {};
                  proto.KeyIntVLong = function () {
                    /**
                     * Properties of a KeyIntVLong.
                     * @memberof com.bear.xxld.lib.proto
                     * @interface IKeyIntVLong
                     * @property {number} key KeyIntVLong key
                     * @property {number|Long} value KeyIntVLong value
                     */

                    /**
                     * Constructs a new KeyIntVLong.
                     * @memberof com.bear.xxld.lib.proto
                     * @classdesc Represents a KeyIntVLong.
                     * @implements IKeyIntVLong
                     * @constructor
                     * @param {com.bear.xxld.lib.proto.IKeyIntVLong=} [p] Properties to set
                     */
                    function KeyIntVLong(p) {
                      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * KeyIntVLong key.
                     * @member {number} key
                     * @memberof com.bear.xxld.lib.proto.KeyIntVLong
                     * @instance
                     */
                    KeyIntVLong.prototype.key = 0;

                    /**
                     * KeyIntVLong value.
                     * @member {number|Long} value
                     * @memberof com.bear.xxld.lib.proto.KeyIntVLong
                     * @instance
                     */
                    KeyIntVLong.prototype.value = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

                    /**
                     * Creates a new KeyIntVLong instance using the specified properties.
                     * @function create
                     * @memberof com.bear.xxld.lib.proto.KeyIntVLong
                     * @static
                     * @param {com.bear.xxld.lib.proto.IKeyIntVLong=} [properties] Properties to set
                     * @returns {com.bear.xxld.lib.proto.KeyIntVLong} KeyIntVLong instance
                     */
                    KeyIntVLong.create = function create(properties) {
                      return new KeyIntVLong(properties);
                    };

                    /**
                     * Encodes the specified KeyIntVLong message. Does not implicitly {@link com.bear.xxld.lib.proto.KeyIntVLong.verify|verify} messages.
                     * @function encode
                     * @memberof com.bear.xxld.lib.proto.KeyIntVLong
                     * @static
                     * @param {com.bear.xxld.lib.proto.IKeyIntVLong} m KeyIntVLong message or plain object to encode
                     * @param {$protobuf.Writer} [w] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    KeyIntVLong.encode = function encode(m, w) {
                      if (!w) w = $Writer.create();
                      w.uint32(8).int32(m.key);
                      w.uint32(16).int64(m.value);
                      return w;
                    };

                    /**
                     * Decodes a KeyIntVLong message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.bear.xxld.lib.proto.KeyIntVLong
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {com.bear.xxld.lib.proto.KeyIntVLong} KeyIntVLong
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    KeyIntVLong.decode = function decode(r, l) {
                      if (!(r instanceof $Reader)) r = $Reader.create(r);
                      var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.com.bear.xxld.lib.proto.KeyIntVLong();
                      while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                          case 1:
                            {
                              m.key = r.int32();
                              break;
                            }
                          case 2:
                            {
                              m.value = r.int64();
                              break;
                            }
                          default:
                            r.skipType(t & 7);
                            break;
                        }
                      }
                      if (!m.hasOwnProperty("key")) throw $util.ProtocolError("missing required 'key'", {
                        instance: m
                      });
                      if (!m.hasOwnProperty("value")) throw $util.ProtocolError("missing required 'value'", {
                        instance: m
                      });
                      return m;
                    };

                    /**
                     * Gets the default type url for KeyIntVLong
                     * @function getTypeUrl
                     * @memberof com.bear.xxld.lib.proto.KeyIntVLong
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    KeyIntVLong.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                      if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                      }
                      return typeUrlPrefix + "/com.bear.xxld.lib.proto.KeyIntVLong";
                    };
                    return KeyIntVLong;
                  }();
                  proto.KeyLongVInt = function () {
                    /**
                     * Properties of a KeyLongVInt.
                     * @memberof com.bear.xxld.lib.proto
                     * @interface IKeyLongVInt
                     * @property {number|Long} key KeyLongVInt key
                     * @property {number} value KeyLongVInt value
                     */

                    /**
                     * Constructs a new KeyLongVInt.
                     * @memberof com.bear.xxld.lib.proto
                     * @classdesc Represents a KeyLongVInt.
                     * @implements IKeyLongVInt
                     * @constructor
                     * @param {com.bear.xxld.lib.proto.IKeyLongVInt=} [p] Properties to set
                     */
                    function KeyLongVInt(p) {
                      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * KeyLongVInt key.
                     * @member {number|Long} key
                     * @memberof com.bear.xxld.lib.proto.KeyLongVInt
                     * @instance
                     */
                    KeyLongVInt.prototype.key = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

                    /**
                     * KeyLongVInt value.
                     * @member {number} value
                     * @memberof com.bear.xxld.lib.proto.KeyLongVInt
                     * @instance
                     */
                    KeyLongVInt.prototype.value = 0;

                    /**
                     * Creates a new KeyLongVInt instance using the specified properties.
                     * @function create
                     * @memberof com.bear.xxld.lib.proto.KeyLongVInt
                     * @static
                     * @param {com.bear.xxld.lib.proto.IKeyLongVInt=} [properties] Properties to set
                     * @returns {com.bear.xxld.lib.proto.KeyLongVInt} KeyLongVInt instance
                     */
                    KeyLongVInt.create = function create(properties) {
                      return new KeyLongVInt(properties);
                    };

                    /**
                     * Encodes the specified KeyLongVInt message. Does not implicitly {@link com.bear.xxld.lib.proto.KeyLongVInt.verify|verify} messages.
                     * @function encode
                     * @memberof com.bear.xxld.lib.proto.KeyLongVInt
                     * @static
                     * @param {com.bear.xxld.lib.proto.IKeyLongVInt} m KeyLongVInt message or plain object to encode
                     * @param {$protobuf.Writer} [w] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    KeyLongVInt.encode = function encode(m, w) {
                      if (!w) w = $Writer.create();
                      w.uint32(8).int64(m.key);
                      w.uint32(16).int32(m.value);
                      return w;
                    };

                    /**
                     * Decodes a KeyLongVInt message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.bear.xxld.lib.proto.KeyLongVInt
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {com.bear.xxld.lib.proto.KeyLongVInt} KeyLongVInt
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    KeyLongVInt.decode = function decode(r, l) {
                      if (!(r instanceof $Reader)) r = $Reader.create(r);
                      var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.com.bear.xxld.lib.proto.KeyLongVInt();
                      while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                          case 1:
                            {
                              m.key = r.int64();
                              break;
                            }
                          case 2:
                            {
                              m.value = r.int32();
                              break;
                            }
                          default:
                            r.skipType(t & 7);
                            break;
                        }
                      }
                      if (!m.hasOwnProperty("key")) throw $util.ProtocolError("missing required 'key'", {
                        instance: m
                      });
                      if (!m.hasOwnProperty("value")) throw $util.ProtocolError("missing required 'value'", {
                        instance: m
                      });
                      return m;
                    };

                    /**
                     * Gets the default type url for KeyLongVInt
                     * @function getTypeUrl
                     * @memberof com.bear.xxld.lib.proto.KeyLongVInt
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    KeyLongVInt.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                      if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                      }
                      return typeUrlPrefix + "/com.bear.xxld.lib.proto.KeyLongVInt";
                    };
                    return KeyLongVInt;
                  }();
                  proto.KeyIntVInt = function () {
                    /**
                     * Properties of a KeyIntVInt.
                     * @memberof com.bear.xxld.lib.proto
                     * @interface IKeyIntVInt
                     * @property {number} key KeyIntVInt key
                     * @property {number} value KeyIntVInt value
                     */

                    /**
                     * Constructs a new KeyIntVInt.
                     * @memberof com.bear.xxld.lib.proto
                     * @classdesc Represents a KeyIntVInt.
                     * @implements IKeyIntVInt
                     * @constructor
                     * @param {com.bear.xxld.lib.proto.IKeyIntVInt=} [p] Properties to set
                     */
                    function KeyIntVInt(p) {
                      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * KeyIntVInt key.
                     * @member {number} key
                     * @memberof com.bear.xxld.lib.proto.KeyIntVInt
                     * @instance
                     */
                    KeyIntVInt.prototype.key = 0;

                    /**
                     * KeyIntVInt value.
                     * @member {number} value
                     * @memberof com.bear.xxld.lib.proto.KeyIntVInt
                     * @instance
                     */
                    KeyIntVInt.prototype.value = 0;

                    /**
                     * Creates a new KeyIntVInt instance using the specified properties.
                     * @function create
                     * @memberof com.bear.xxld.lib.proto.KeyIntVInt
                     * @static
                     * @param {com.bear.xxld.lib.proto.IKeyIntVInt=} [properties] Properties to set
                     * @returns {com.bear.xxld.lib.proto.KeyIntVInt} KeyIntVInt instance
                     */
                    KeyIntVInt.create = function create(properties) {
                      return new KeyIntVInt(properties);
                    };

                    /**
                     * Encodes the specified KeyIntVInt message. Does not implicitly {@link com.bear.xxld.lib.proto.KeyIntVInt.verify|verify} messages.
                     * @function encode
                     * @memberof com.bear.xxld.lib.proto.KeyIntVInt
                     * @static
                     * @param {com.bear.xxld.lib.proto.IKeyIntVInt} m KeyIntVInt message or plain object to encode
                     * @param {$protobuf.Writer} [w] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    KeyIntVInt.encode = function encode(m, w) {
                      if (!w) w = $Writer.create();
                      w.uint32(8).int32(m.key);
                      w.uint32(16).int32(m.value);
                      return w;
                    };

                    /**
                     * Decodes a KeyIntVInt message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.bear.xxld.lib.proto.KeyIntVInt
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {com.bear.xxld.lib.proto.KeyIntVInt} KeyIntVInt
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    KeyIntVInt.decode = function decode(r, l) {
                      if (!(r instanceof $Reader)) r = $Reader.create(r);
                      var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.com.bear.xxld.lib.proto.KeyIntVInt();
                      while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                          case 1:
                            {
                              m.key = r.int32();
                              break;
                            }
                          case 2:
                            {
                              m.value = r.int32();
                              break;
                            }
                          default:
                            r.skipType(t & 7);
                            break;
                        }
                      }
                      if (!m.hasOwnProperty("key")) throw $util.ProtocolError("missing required 'key'", {
                        instance: m
                      });
                      if (!m.hasOwnProperty("value")) throw $util.ProtocolError("missing required 'value'", {
                        instance: m
                      });
                      return m;
                    };

                    /**
                     * Gets the default type url for KeyIntVInt
                     * @function getTypeUrl
                     * @memberof com.bear.xxld.lib.proto.KeyIntVInt
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    KeyIntVInt.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                      if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                      }
                      return typeUrlPrefix + "/com.bear.xxld.lib.proto.KeyIntVInt";
                    };
                    return KeyIntVInt;
                  }();
                  proto.KeyIntVString = function () {
                    /**
                     * Properties of a KeyIntVString.
                     * @memberof com.bear.xxld.lib.proto
                     * @interface IKeyIntVString
                     * @property {number} key KeyIntVString key
                     * @property {string} value KeyIntVString value
                     */

                    /**
                     * Constructs a new KeyIntVString.
                     * @memberof com.bear.xxld.lib.proto
                     * @classdesc Represents a KeyIntVString.
                     * @implements IKeyIntVString
                     * @constructor
                     * @param {com.bear.xxld.lib.proto.IKeyIntVString=} [p] Properties to set
                     */
                    function KeyIntVString(p) {
                      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * KeyIntVString key.
                     * @member {number} key
                     * @memberof com.bear.xxld.lib.proto.KeyIntVString
                     * @instance
                     */
                    KeyIntVString.prototype.key = 0;

                    /**
                     * KeyIntVString value.
                     * @member {string} value
                     * @memberof com.bear.xxld.lib.proto.KeyIntVString
                     * @instance
                     */
                    KeyIntVString.prototype.value = "";

                    /**
                     * Creates a new KeyIntVString instance using the specified properties.
                     * @function create
                     * @memberof com.bear.xxld.lib.proto.KeyIntVString
                     * @static
                     * @param {com.bear.xxld.lib.proto.IKeyIntVString=} [properties] Properties to set
                     * @returns {com.bear.xxld.lib.proto.KeyIntVString} KeyIntVString instance
                     */
                    KeyIntVString.create = function create(properties) {
                      return new KeyIntVString(properties);
                    };

                    /**
                     * Encodes the specified KeyIntVString message. Does not implicitly {@link com.bear.xxld.lib.proto.KeyIntVString.verify|verify} messages.
                     * @function encode
                     * @memberof com.bear.xxld.lib.proto.KeyIntVString
                     * @static
                     * @param {com.bear.xxld.lib.proto.IKeyIntVString} m KeyIntVString message or plain object to encode
                     * @param {$protobuf.Writer} [w] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    KeyIntVString.encode = function encode(m, w) {
                      if (!w) w = $Writer.create();
                      w.uint32(8).int32(m.key);
                      w.uint32(18).string(m.value);
                      return w;
                    };

                    /**
                     * Decodes a KeyIntVString message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.bear.xxld.lib.proto.KeyIntVString
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {com.bear.xxld.lib.proto.KeyIntVString} KeyIntVString
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    KeyIntVString.decode = function decode(r, l) {
                      if (!(r instanceof $Reader)) r = $Reader.create(r);
                      var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.com.bear.xxld.lib.proto.KeyIntVString();
                      while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                          case 1:
                            {
                              m.key = r.int32();
                              break;
                            }
                          case 2:
                            {
                              m.value = r.string();
                              break;
                            }
                          default:
                            r.skipType(t & 7);
                            break;
                        }
                      }
                      if (!m.hasOwnProperty("key")) throw $util.ProtocolError("missing required 'key'", {
                        instance: m
                      });
                      if (!m.hasOwnProperty("value")) throw $util.ProtocolError("missing required 'value'", {
                        instance: m
                      });
                      return m;
                    };

                    /**
                     * Gets the default type url for KeyIntVString
                     * @function getTypeUrl
                     * @memberof com.bear.xxld.lib.proto.KeyIntVString
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    KeyIntVString.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                      if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                      }
                      return typeUrlPrefix + "/com.bear.xxld.lib.proto.KeyIntVString";
                    };
                    return KeyIntVString;
                  }();
                  proto.KStringVString = function () {
                    /**
                     * Properties of a KStringVString.
                     * @memberof com.bear.xxld.lib.proto
                     * @interface IKStringVString
                     * @property {string} key KStringVString key
                     * @property {string} value KStringVString value
                     */

                    /**
                     * Constructs a new KStringVString.
                     * @memberof com.bear.xxld.lib.proto
                     * @classdesc Represents a KStringVString.
                     * @implements IKStringVString
                     * @constructor
                     * @param {com.bear.xxld.lib.proto.IKStringVString=} [p] Properties to set
                     */
                    function KStringVString(p) {
                      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * KStringVString key.
                     * @member {string} key
                     * @memberof com.bear.xxld.lib.proto.KStringVString
                     * @instance
                     */
                    KStringVString.prototype.key = "";

                    /**
                     * KStringVString value.
                     * @member {string} value
                     * @memberof com.bear.xxld.lib.proto.KStringVString
                     * @instance
                     */
                    KStringVString.prototype.value = "";

                    /**
                     * Creates a new KStringVString instance using the specified properties.
                     * @function create
                     * @memberof com.bear.xxld.lib.proto.KStringVString
                     * @static
                     * @param {com.bear.xxld.lib.proto.IKStringVString=} [properties] Properties to set
                     * @returns {com.bear.xxld.lib.proto.KStringVString} KStringVString instance
                     */
                    KStringVString.create = function create(properties) {
                      return new KStringVString(properties);
                    };

                    /**
                     * Encodes the specified KStringVString message. Does not implicitly {@link com.bear.xxld.lib.proto.KStringVString.verify|verify} messages.
                     * @function encode
                     * @memberof com.bear.xxld.lib.proto.KStringVString
                     * @static
                     * @param {com.bear.xxld.lib.proto.IKStringVString} m KStringVString message or plain object to encode
                     * @param {$protobuf.Writer} [w] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    KStringVString.encode = function encode(m, w) {
                      if (!w) w = $Writer.create();
                      w.uint32(10).string(m.key);
                      w.uint32(18).string(m.value);
                      return w;
                    };

                    /**
                     * Decodes a KStringVString message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.bear.xxld.lib.proto.KStringVString
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {com.bear.xxld.lib.proto.KStringVString} KStringVString
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    KStringVString.decode = function decode(r, l) {
                      if (!(r instanceof $Reader)) r = $Reader.create(r);
                      var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.com.bear.xxld.lib.proto.KStringVString();
                      while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                          case 1:
                            {
                              m.key = r.string();
                              break;
                            }
                          case 2:
                            {
                              m.value = r.string();
                              break;
                            }
                          default:
                            r.skipType(t & 7);
                            break;
                        }
                      }
                      if (!m.hasOwnProperty("key")) throw $util.ProtocolError("missing required 'key'", {
                        instance: m
                      });
                      if (!m.hasOwnProperty("value")) throw $util.ProtocolError("missing required 'value'", {
                        instance: m
                      });
                      return m;
                    };

                    /**
                     * Gets the default type url for KStringVString
                     * @function getTypeUrl
                     * @memberof com.bear.xxld.lib.proto.KStringVString
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    KStringVString.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                      if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                      }
                      return typeUrlPrefix + "/com.bear.xxld.lib.proto.KStringVString";
                    };
                    return KStringVString;
                  }();
                  proto.String = function () {
                    /**
                     * Properties of a String.
                     * @memberof com.bear.xxld.lib.proto
                     * @interface IString
                     * @property {string} key String key
                     */

                    /**
                     * Constructs a new String.
                     * @memberof com.bear.xxld.lib.proto
                     * @classdesc Represents a String.
                     * @implements IString
                     * @constructor
                     * @param {com.bear.xxld.lib.proto.IString=} [p] Properties to set
                     */
                    function String(p) {
                      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * String key.
                     * @member {string} key
                     * @memberof com.bear.xxld.lib.proto.String
                     * @instance
                     */
                    String.prototype.key = "";

                    /**
                     * Creates a new String instance using the specified properties.
                     * @function create
                     * @memberof com.bear.xxld.lib.proto.String
                     * @static
                     * @param {com.bear.xxld.lib.proto.IString=} [properties] Properties to set
                     * @returns {com.bear.xxld.lib.proto.String} String instance
                     */
                    String.create = function create(properties) {
                      return new String(properties);
                    };

                    /**
                     * Encodes the specified String message. Does not implicitly {@link com.bear.xxld.lib.proto.String.verify|verify} messages.
                     * @function encode
                     * @memberof com.bear.xxld.lib.proto.String
                     * @static
                     * @param {com.bear.xxld.lib.proto.IString} m String message or plain object to encode
                     * @param {$protobuf.Writer} [w] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    String.encode = function encode(m, w) {
                      if (!w) w = $Writer.create();
                      w.uint32(10).string(m.key);
                      return w;
                    };

                    /**
                     * Decodes a String message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.bear.xxld.lib.proto.String
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {com.bear.xxld.lib.proto.String} String
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    String.decode = function decode(r, l) {
                      if (!(r instanceof $Reader)) r = $Reader.create(r);
                      var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.com.bear.xxld.lib.proto.String();
                      while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                          case 1:
                            {
                              m.key = r.string();
                              break;
                            }
                          default:
                            r.skipType(t & 7);
                            break;
                        }
                      }
                      if (!m.hasOwnProperty("key")) throw $util.ProtocolError("missing required 'key'", {
                        instance: m
                      });
                      return m;
                    };

                    /**
                     * Gets the default type url for String
                     * @function getTypeUrl
                     * @memberof com.bear.xxld.lib.proto.String
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    String.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                      if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                      }
                      return typeUrlPrefix + "/com.bear.xxld.lib.proto.String";
                    };
                    return String;
                  }();
                  proto.KStringVInt = function () {
                    /**
                     * Properties of a KStringVInt.
                     * @memberof com.bear.xxld.lib.proto
                     * @interface IKStringVInt
                     * @property {string} key KStringVInt key
                     * @property {number} value KStringVInt value
                     */

                    /**
                     * Constructs a new KStringVInt.
                     * @memberof com.bear.xxld.lib.proto
                     * @classdesc Represents a KStringVInt.
                     * @implements IKStringVInt
                     * @constructor
                     * @param {com.bear.xxld.lib.proto.IKStringVInt=} [p] Properties to set
                     */
                    function KStringVInt(p) {
                      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * KStringVInt key.
                     * @member {string} key
                     * @memberof com.bear.xxld.lib.proto.KStringVInt
                     * @instance
                     */
                    KStringVInt.prototype.key = "";

                    /**
                     * KStringVInt value.
                     * @member {number} value
                     * @memberof com.bear.xxld.lib.proto.KStringVInt
                     * @instance
                     */
                    KStringVInt.prototype.value = 0;

                    /**
                     * Creates a new KStringVInt instance using the specified properties.
                     * @function create
                     * @memberof com.bear.xxld.lib.proto.KStringVInt
                     * @static
                     * @param {com.bear.xxld.lib.proto.IKStringVInt=} [properties] Properties to set
                     * @returns {com.bear.xxld.lib.proto.KStringVInt} KStringVInt instance
                     */
                    KStringVInt.create = function create(properties) {
                      return new KStringVInt(properties);
                    };

                    /**
                     * Encodes the specified KStringVInt message. Does not implicitly {@link com.bear.xxld.lib.proto.KStringVInt.verify|verify} messages.
                     * @function encode
                     * @memberof com.bear.xxld.lib.proto.KStringVInt
                     * @static
                     * @param {com.bear.xxld.lib.proto.IKStringVInt} m KStringVInt message or plain object to encode
                     * @param {$protobuf.Writer} [w] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    KStringVInt.encode = function encode(m, w) {
                      if (!w) w = $Writer.create();
                      w.uint32(10).string(m.key);
                      w.uint32(16).int32(m.value);
                      return w;
                    };

                    /**
                     * Decodes a KStringVInt message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.bear.xxld.lib.proto.KStringVInt
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {com.bear.xxld.lib.proto.KStringVInt} KStringVInt
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    KStringVInt.decode = function decode(r, l) {
                      if (!(r instanceof $Reader)) r = $Reader.create(r);
                      var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.com.bear.xxld.lib.proto.KStringVInt();
                      while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                          case 1:
                            {
                              m.key = r.string();
                              break;
                            }
                          case 2:
                            {
                              m.value = r.int32();
                              break;
                            }
                          default:
                            r.skipType(t & 7);
                            break;
                        }
                      }
                      if (!m.hasOwnProperty("key")) throw $util.ProtocolError("missing required 'key'", {
                        instance: m
                      });
                      if (!m.hasOwnProperty("value")) throw $util.ProtocolError("missing required 'value'", {
                        instance: m
                      });
                      return m;
                    };

                    /**
                     * Gets the default type url for KStringVInt
                     * @function getTypeUrl
                     * @memberof com.bear.xxld.lib.proto.KStringVInt
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    KStringVInt.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                      if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                      }
                      return typeUrlPrefix + "/com.bear.xxld.lib.proto.KStringVInt";
                    };
                    return KStringVInt;
                  }();
                  proto.KStringVLong = function () {
                    /**
                     * Properties of a KStringVLong.
                     * @memberof com.bear.xxld.lib.proto
                     * @interface IKStringVLong
                     * @property {string} key KStringVLong key
                     * @property {number|Long} value KStringVLong value
                     */

                    /**
                     * Constructs a new KStringVLong.
                     * @memberof com.bear.xxld.lib.proto
                     * @classdesc Represents a KStringVLong.
                     * @implements IKStringVLong
                     * @constructor
                     * @param {com.bear.xxld.lib.proto.IKStringVLong=} [p] Properties to set
                     */
                    function KStringVLong(p) {
                      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * KStringVLong key.
                     * @member {string} key
                     * @memberof com.bear.xxld.lib.proto.KStringVLong
                     * @instance
                     */
                    KStringVLong.prototype.key = "";

                    /**
                     * KStringVLong value.
                     * @member {number|Long} value
                     * @memberof com.bear.xxld.lib.proto.KStringVLong
                     * @instance
                     */
                    KStringVLong.prototype.value = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

                    /**
                     * Creates a new KStringVLong instance using the specified properties.
                     * @function create
                     * @memberof com.bear.xxld.lib.proto.KStringVLong
                     * @static
                     * @param {com.bear.xxld.lib.proto.IKStringVLong=} [properties] Properties to set
                     * @returns {com.bear.xxld.lib.proto.KStringVLong} KStringVLong instance
                     */
                    KStringVLong.create = function create(properties) {
                      return new KStringVLong(properties);
                    };

                    /**
                     * Encodes the specified KStringVLong message. Does not implicitly {@link com.bear.xxld.lib.proto.KStringVLong.verify|verify} messages.
                     * @function encode
                     * @memberof com.bear.xxld.lib.proto.KStringVLong
                     * @static
                     * @param {com.bear.xxld.lib.proto.IKStringVLong} m KStringVLong message or plain object to encode
                     * @param {$protobuf.Writer} [w] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    KStringVLong.encode = function encode(m, w) {
                      if (!w) w = $Writer.create();
                      w.uint32(10).string(m.key);
                      w.uint32(16).int64(m.value);
                      return w;
                    };

                    /**
                     * Decodes a KStringVLong message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.bear.xxld.lib.proto.KStringVLong
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {com.bear.xxld.lib.proto.KStringVLong} KStringVLong
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    KStringVLong.decode = function decode(r, l) {
                      if (!(r instanceof $Reader)) r = $Reader.create(r);
                      var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.com.bear.xxld.lib.proto.KStringVLong();
                      while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                          case 1:
                            {
                              m.key = r.string();
                              break;
                            }
                          case 2:
                            {
                              m.value = r.int64();
                              break;
                            }
                          default:
                            r.skipType(t & 7);
                            break;
                        }
                      }
                      if (!m.hasOwnProperty("key")) throw $util.ProtocolError("missing required 'key'", {
                        instance: m
                      });
                      if (!m.hasOwnProperty("value")) throw $util.ProtocolError("missing required 'value'", {
                        instance: m
                      });
                      return m;
                    };

                    /**
                     * Gets the default type url for KStringVLong
                     * @function getTypeUrl
                     * @memberof com.bear.xxld.lib.proto.KStringVLong
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    KStringVLong.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                      if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                      }
                      return typeUrlPrefix + "/com.bear.xxld.lib.proto.KStringVLong";
                    };
                    return KStringVLong;
                  }();
                  proto.KIntVStringList = function () {
                    /**
                     * Properties of a KIntVStringList.
                     * @memberof com.bear.xxld.lib.proto
                     * @interface IKIntVStringList
                     * @property {number} tabId KIntVStringList tabId
                     * @property {Array.<string>|undefined} [ids] KIntVStringList ids
                     */

                    /**
                     * Constructs a new KIntVStringList.
                     * @memberof com.bear.xxld.lib.proto
                     * @classdesc Represents a KIntVStringList.
                     * @implements IKIntVStringList
                     * @constructor
                     * @param {com.bear.xxld.lib.proto.IKIntVStringList=} [p] Properties to set
                     */
                    function KIntVStringList(p) {
                      this.ids = [];
                      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * KIntVStringList tabId.
                     * @member {number} tabId
                     * @memberof com.bear.xxld.lib.proto.KIntVStringList
                     * @instance
                     */
                    KIntVStringList.prototype.tabId = 0;

                    /**
                     * KIntVStringList ids.
                     * @member {Array.<string>} ids
                     * @memberof com.bear.xxld.lib.proto.KIntVStringList
                     * @instance
                     */
                    KIntVStringList.prototype.ids = $util.emptyArray;

                    /**
                     * Creates a new KIntVStringList instance using the specified properties.
                     * @function create
                     * @memberof com.bear.xxld.lib.proto.KIntVStringList
                     * @static
                     * @param {com.bear.xxld.lib.proto.IKIntVStringList=} [properties] Properties to set
                     * @returns {com.bear.xxld.lib.proto.KIntVStringList} KIntVStringList instance
                     */
                    KIntVStringList.create = function create(properties) {
                      return new KIntVStringList(properties);
                    };

                    /**
                     * Encodes the specified KIntVStringList message. Does not implicitly {@link com.bear.xxld.lib.proto.KIntVStringList.verify|verify} messages.
                     * @function encode
                     * @memberof com.bear.xxld.lib.proto.KIntVStringList
                     * @static
                     * @param {com.bear.xxld.lib.proto.IKIntVStringList} m KIntVStringList message or plain object to encode
                     * @param {$protobuf.Writer} [w] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    KIntVStringList.encode = function encode(m, w) {
                      if (!w) w = $Writer.create();
                      w.uint32(8).int32(m.tabId);
                      if (m.ids != null && m.ids.length) {
                        for (var i = 0; i < m.ids.length; ++i) w.uint32(18).string(m.ids[i]);
                      }
                      return w;
                    };

                    /**
                     * Decodes a KIntVStringList message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.bear.xxld.lib.proto.KIntVStringList
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {com.bear.xxld.lib.proto.KIntVStringList} KIntVStringList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    KIntVStringList.decode = function decode(r, l) {
                      if (!(r instanceof $Reader)) r = $Reader.create(r);
                      var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.com.bear.xxld.lib.proto.KIntVStringList();
                      while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                          case 1:
                            {
                              m.tabId = r.int32();
                              break;
                            }
                          case 2:
                            {
                              if (!(m.ids && m.ids.length)) m.ids = [];
                              m.ids.push(r.string());
                              break;
                            }
                          default:
                            r.skipType(t & 7);
                            break;
                        }
                      }
                      if (!m.hasOwnProperty("tabId")) throw $util.ProtocolError("missing required 'tabId'", {
                        instance: m
                      });
                      return m;
                    };

                    /**
                     * Gets the default type url for KIntVStringList
                     * @function getTypeUrl
                     * @memberof com.bear.xxld.lib.proto.KIntVStringList
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    KIntVStringList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                      if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                      }
                      return typeUrlPrefix + "/com.bear.xxld.lib.proto.KIntVStringList";
                    };
                    return KIntVStringList;
                  }();
                  proto.KeyIntVIntMap = function () {
                    /**
                     * Properties of a KeyIntVIntMap.
                     * @memberof com.bear.xxld.lib.proto
                     * @interface IKeyIntVIntMap
                     * @property {Array.<com.bear.xxld.lib.proto.IKeyIntVInt>|undefined} [entrys] KeyIntVIntMap entrys
                     */

                    /**
                     * Constructs a new KeyIntVIntMap.
                     * @memberof com.bear.xxld.lib.proto
                     * @classdesc Represents a KeyIntVIntMap.
                     * @implements IKeyIntVIntMap
                     * @constructor
                     * @param {com.bear.xxld.lib.proto.IKeyIntVIntMap=} [p] Properties to set
                     */
                    function KeyIntVIntMap(p) {
                      this.entrys = [];
                      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * KeyIntVIntMap entrys.
                     * @member {Array.<com.bear.xxld.lib.proto.IKeyIntVInt>} entrys
                     * @memberof com.bear.xxld.lib.proto.KeyIntVIntMap
                     * @instance
                     */
                    KeyIntVIntMap.prototype.entrys = $util.emptyArray;

                    /**
                     * Creates a new KeyIntVIntMap instance using the specified properties.
                     * @function create
                     * @memberof com.bear.xxld.lib.proto.KeyIntVIntMap
                     * @static
                     * @param {com.bear.xxld.lib.proto.IKeyIntVIntMap=} [properties] Properties to set
                     * @returns {com.bear.xxld.lib.proto.KeyIntVIntMap} KeyIntVIntMap instance
                     */
                    KeyIntVIntMap.create = function create(properties) {
                      return new KeyIntVIntMap(properties);
                    };

                    /**
                     * Encodes the specified KeyIntVIntMap message. Does not implicitly {@link com.bear.xxld.lib.proto.KeyIntVIntMap.verify|verify} messages.
                     * @function encode
                     * @memberof com.bear.xxld.lib.proto.KeyIntVIntMap
                     * @static
                     * @param {com.bear.xxld.lib.proto.IKeyIntVIntMap} m KeyIntVIntMap message or plain object to encode
                     * @param {$protobuf.Writer} [w] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    KeyIntVIntMap.encode = function encode(m, w) {
                      if (!w) w = $Writer.create();
                      if (m.entrys != null && m.entrys.length) {
                        for (var i = 0; i < m.entrys.length; ++i) $root.com.bear.xxld.lib.proto.KeyIntVInt.encode(m.entrys[i], w.uint32(10).fork()).ldelim();
                      }
                      return w;
                    };

                    /**
                     * Decodes a KeyIntVIntMap message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.bear.xxld.lib.proto.KeyIntVIntMap
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {com.bear.xxld.lib.proto.KeyIntVIntMap} KeyIntVIntMap
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    KeyIntVIntMap.decode = function decode(r, l) {
                      if (!(r instanceof $Reader)) r = $Reader.create(r);
                      var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.com.bear.xxld.lib.proto.KeyIntVIntMap();
                      while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                          case 1:
                            {
                              if (!(m.entrys && m.entrys.length)) m.entrys = [];
                              m.entrys.push($root.com.bear.xxld.lib.proto.KeyIntVInt.decode(r, r.uint32()));
                              break;
                            }
                          default:
                            r.skipType(t & 7);
                            break;
                        }
                      }
                      return m;
                    };

                    /**
                     * Gets the default type url for KeyIntVIntMap
                     * @function getTypeUrl
                     * @memberof com.bear.xxld.lib.proto.KeyIntVIntMap
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    KeyIntVIntMap.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                      if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                      }
                      return typeUrlPrefix + "/com.bear.xxld.lib.proto.KeyIntVIntMap";
                    };
                    return KeyIntVIntMap;
                  }();
                  proto.KeyIntVLongMap = function () {
                    /**
                     * Properties of a KeyIntVLongMap.
                     * @memberof com.bear.xxld.lib.proto
                     * @interface IKeyIntVLongMap
                     * @property {Array.<com.bear.xxld.lib.proto.IKeyIntVLong>|undefined} [entrys] KeyIntVLongMap entrys
                     */

                    /**
                     * Constructs a new KeyIntVLongMap.
                     * @memberof com.bear.xxld.lib.proto
                     * @classdesc Represents a KeyIntVLongMap.
                     * @implements IKeyIntVLongMap
                     * @constructor
                     * @param {com.bear.xxld.lib.proto.IKeyIntVLongMap=} [p] Properties to set
                     */
                    function KeyIntVLongMap(p) {
                      this.entrys = [];
                      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * KeyIntVLongMap entrys.
                     * @member {Array.<com.bear.xxld.lib.proto.IKeyIntVLong>} entrys
                     * @memberof com.bear.xxld.lib.proto.KeyIntVLongMap
                     * @instance
                     */
                    KeyIntVLongMap.prototype.entrys = $util.emptyArray;

                    /**
                     * Creates a new KeyIntVLongMap instance using the specified properties.
                     * @function create
                     * @memberof com.bear.xxld.lib.proto.KeyIntVLongMap
                     * @static
                     * @param {com.bear.xxld.lib.proto.IKeyIntVLongMap=} [properties] Properties to set
                     * @returns {com.bear.xxld.lib.proto.KeyIntVLongMap} KeyIntVLongMap instance
                     */
                    KeyIntVLongMap.create = function create(properties) {
                      return new KeyIntVLongMap(properties);
                    };

                    /**
                     * Encodes the specified KeyIntVLongMap message. Does not implicitly {@link com.bear.xxld.lib.proto.KeyIntVLongMap.verify|verify} messages.
                     * @function encode
                     * @memberof com.bear.xxld.lib.proto.KeyIntVLongMap
                     * @static
                     * @param {com.bear.xxld.lib.proto.IKeyIntVLongMap} m KeyIntVLongMap message or plain object to encode
                     * @param {$protobuf.Writer} [w] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    KeyIntVLongMap.encode = function encode(m, w) {
                      if (!w) w = $Writer.create();
                      if (m.entrys != null && m.entrys.length) {
                        for (var i = 0; i < m.entrys.length; ++i) $root.com.bear.xxld.lib.proto.KeyIntVLong.encode(m.entrys[i], w.uint32(10).fork()).ldelim();
                      }
                      return w;
                    };

                    /**
                     * Decodes a KeyIntVLongMap message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.bear.xxld.lib.proto.KeyIntVLongMap
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {com.bear.xxld.lib.proto.KeyIntVLongMap} KeyIntVLongMap
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    KeyIntVLongMap.decode = function decode(r, l) {
                      if (!(r instanceof $Reader)) r = $Reader.create(r);
                      var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.com.bear.xxld.lib.proto.KeyIntVLongMap();
                      while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                          case 1:
                            {
                              if (!(m.entrys && m.entrys.length)) m.entrys = [];
                              m.entrys.push($root.com.bear.xxld.lib.proto.KeyIntVLong.decode(r, r.uint32()));
                              break;
                            }
                          default:
                            r.skipType(t & 7);
                            break;
                        }
                      }
                      return m;
                    };

                    /**
                     * Gets the default type url for KeyIntVLongMap
                     * @function getTypeUrl
                     * @memberof com.bear.xxld.lib.proto.KeyIntVLongMap
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    KeyIntVLongMap.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                      if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                      }
                      return typeUrlPrefix + "/com.bear.xxld.lib.proto.KeyIntVLongMap";
                    };
                    return KeyIntVLongMap;
                  }();
                  proto.KeyLongVLong = function () {
                    /**
                     * Properties of a KeyLongVLong.
                     * @memberof com.bear.xxld.lib.proto
                     * @interface IKeyLongVLong
                     * @property {number|Long} key KeyLongVLong key
                     * @property {number|Long} value KeyLongVLong value
                     */

                    /**
                     * Constructs a new KeyLongVLong.
                     * @memberof com.bear.xxld.lib.proto
                     * @classdesc Represents a KeyLongVLong.
                     * @implements IKeyLongVLong
                     * @constructor
                     * @param {com.bear.xxld.lib.proto.IKeyLongVLong=} [p] Properties to set
                     */
                    function KeyLongVLong(p) {
                      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * KeyLongVLong key.
                     * @member {number|Long} key
                     * @memberof com.bear.xxld.lib.proto.KeyLongVLong
                     * @instance
                     */
                    KeyLongVLong.prototype.key = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

                    /**
                     * KeyLongVLong value.
                     * @member {number|Long} value
                     * @memberof com.bear.xxld.lib.proto.KeyLongVLong
                     * @instance
                     */
                    KeyLongVLong.prototype.value = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

                    /**
                     * Creates a new KeyLongVLong instance using the specified properties.
                     * @function create
                     * @memberof com.bear.xxld.lib.proto.KeyLongVLong
                     * @static
                     * @param {com.bear.xxld.lib.proto.IKeyLongVLong=} [properties] Properties to set
                     * @returns {com.bear.xxld.lib.proto.KeyLongVLong} KeyLongVLong instance
                     */
                    KeyLongVLong.create = function create(properties) {
                      return new KeyLongVLong(properties);
                    };

                    /**
                     * Encodes the specified KeyLongVLong message. Does not implicitly {@link com.bear.xxld.lib.proto.KeyLongVLong.verify|verify} messages.
                     * @function encode
                     * @memberof com.bear.xxld.lib.proto.KeyLongVLong
                     * @static
                     * @param {com.bear.xxld.lib.proto.IKeyLongVLong} m KeyLongVLong message or plain object to encode
                     * @param {$protobuf.Writer} [w] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    KeyLongVLong.encode = function encode(m, w) {
                      if (!w) w = $Writer.create();
                      w.uint32(8).int64(m.key);
                      w.uint32(16).int64(m.value);
                      return w;
                    };

                    /**
                     * Decodes a KeyLongVLong message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.bear.xxld.lib.proto.KeyLongVLong
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {com.bear.xxld.lib.proto.KeyLongVLong} KeyLongVLong
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    KeyLongVLong.decode = function decode(r, l) {
                      if (!(r instanceof $Reader)) r = $Reader.create(r);
                      var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.com.bear.xxld.lib.proto.KeyLongVLong();
                      while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                          case 1:
                            {
                              m.key = r.int64();
                              break;
                            }
                          case 2:
                            {
                              m.value = r.int64();
                              break;
                            }
                          default:
                            r.skipType(t & 7);
                            break;
                        }
                      }
                      if (!m.hasOwnProperty("key")) throw $util.ProtocolError("missing required 'key'", {
                        instance: m
                      });
                      if (!m.hasOwnProperty("value")) throw $util.ProtocolError("missing required 'value'", {
                        instance: m
                      });
                      return m;
                    };

                    /**
                     * Gets the default type url for KeyLongVLong
                     * @function getTypeUrl
                     * @memberof com.bear.xxld.lib.proto.KeyLongVLong
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    KeyLongVLong.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                      if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                      }
                      return typeUrlPrefix + "/com.bear.xxld.lib.proto.KeyLongVLong";
                    };
                    return KeyLongVLong;
                  }();
                  proto.ListInt = function () {
                    /**
                     * Properties of a ListInt.
                     * @memberof com.bear.xxld.lib.proto
                     * @interface IListInt
                     * @property {Array.<number>|undefined} [value] ListInt value
                     */

                    /**
                     * Constructs a new ListInt.
                     * @memberof com.bear.xxld.lib.proto
                     * @classdesc Represents a ListInt.
                     * @implements IListInt
                     * @constructor
                     * @param {com.bear.xxld.lib.proto.IListInt=} [p] Properties to set
                     */
                    function ListInt(p) {
                      this.value = [];
                      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * ListInt value.
                     * @member {Array.<number>} value
                     * @memberof com.bear.xxld.lib.proto.ListInt
                     * @instance
                     */
                    ListInt.prototype.value = $util.emptyArray;

                    /**
                     * Creates a new ListInt instance using the specified properties.
                     * @function create
                     * @memberof com.bear.xxld.lib.proto.ListInt
                     * @static
                     * @param {com.bear.xxld.lib.proto.IListInt=} [properties] Properties to set
                     * @returns {com.bear.xxld.lib.proto.ListInt} ListInt instance
                     */
                    ListInt.create = function create(properties) {
                      return new ListInt(properties);
                    };

                    /**
                     * Encodes the specified ListInt message. Does not implicitly {@link com.bear.xxld.lib.proto.ListInt.verify|verify} messages.
                     * @function encode
                     * @memberof com.bear.xxld.lib.proto.ListInt
                     * @static
                     * @param {com.bear.xxld.lib.proto.IListInt} m ListInt message or plain object to encode
                     * @param {$protobuf.Writer} [w] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListInt.encode = function encode(m, w) {
                      if (!w) w = $Writer.create();
                      if (m.value != null && m.value.length) {
                        for (var i = 0; i < m.value.length; ++i) w.uint32(8).int32(m.value[i]);
                      }
                      return w;
                    };

                    /**
                     * Decodes a ListInt message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.bear.xxld.lib.proto.ListInt
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {com.bear.xxld.lib.proto.ListInt} ListInt
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListInt.decode = function decode(r, l) {
                      if (!(r instanceof $Reader)) r = $Reader.create(r);
                      var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.com.bear.xxld.lib.proto.ListInt();
                      while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                          case 1:
                            {
                              if (!(m.value && m.value.length)) m.value = [];
                              if ((t & 7) === 2) {
                                var c2 = r.uint32() + r.pos;
                                while (r.pos < c2) m.value.push(r.int32());
                              } else m.value.push(r.int32());
                              break;
                            }
                          default:
                            r.skipType(t & 7);
                            break;
                        }
                      }
                      return m;
                    };

                    /**
                     * Gets the default type url for ListInt
                     * @function getTypeUrl
                     * @memberof com.bear.xxld.lib.proto.ListInt
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ListInt.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                      if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                      }
                      return typeUrlPrefix + "/com.bear.xxld.lib.proto.ListInt";
                    };
                    return ListInt;
                  }();
                  proto.ListLong = function () {
                    /**
                     * Properties of a ListLong.
                     * @memberof com.bear.xxld.lib.proto
                     * @interface IListLong
                     * @property {Array.<number|Long>|undefined} [value] ListLong value
                     */

                    /**
                     * Constructs a new ListLong.
                     * @memberof com.bear.xxld.lib.proto
                     * @classdesc Represents a ListLong.
                     * @implements IListLong
                     * @constructor
                     * @param {com.bear.xxld.lib.proto.IListLong=} [p] Properties to set
                     */
                    function ListLong(p) {
                      this.value = [];
                      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * ListLong value.
                     * @member {Array.<number|Long>} value
                     * @memberof com.bear.xxld.lib.proto.ListLong
                     * @instance
                     */
                    ListLong.prototype.value = $util.emptyArray;

                    /**
                     * Creates a new ListLong instance using the specified properties.
                     * @function create
                     * @memberof com.bear.xxld.lib.proto.ListLong
                     * @static
                     * @param {com.bear.xxld.lib.proto.IListLong=} [properties] Properties to set
                     * @returns {com.bear.xxld.lib.proto.ListLong} ListLong instance
                     */
                    ListLong.create = function create(properties) {
                      return new ListLong(properties);
                    };

                    /**
                     * Encodes the specified ListLong message. Does not implicitly {@link com.bear.xxld.lib.proto.ListLong.verify|verify} messages.
                     * @function encode
                     * @memberof com.bear.xxld.lib.proto.ListLong
                     * @static
                     * @param {com.bear.xxld.lib.proto.IListLong} m ListLong message or plain object to encode
                     * @param {$protobuf.Writer} [w] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListLong.encode = function encode(m, w) {
                      if (!w) w = $Writer.create();
                      if (m.value != null && m.value.length) {
                        for (var i = 0; i < m.value.length; ++i) w.uint32(8).int64(m.value[i]);
                      }
                      return w;
                    };

                    /**
                     * Decodes a ListLong message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.bear.xxld.lib.proto.ListLong
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {com.bear.xxld.lib.proto.ListLong} ListLong
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListLong.decode = function decode(r, l) {
                      if (!(r instanceof $Reader)) r = $Reader.create(r);
                      var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.com.bear.xxld.lib.proto.ListLong();
                      while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                          case 1:
                            {
                              if (!(m.value && m.value.length)) m.value = [];
                              if ((t & 7) === 2) {
                                var c2 = r.uint32() + r.pos;
                                while (r.pos < c2) m.value.push(r.int64());
                              } else m.value.push(r.int64());
                              break;
                            }
                          default:
                            r.skipType(t & 7);
                            break;
                        }
                      }
                      return m;
                    };

                    /**
                     * Gets the default type url for ListLong
                     * @function getTypeUrl
                     * @memberof com.bear.xxld.lib.proto.ListLong
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ListLong.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                      if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                      }
                      return typeUrlPrefix + "/com.bear.xxld.lib.proto.ListLong";
                    };
                    return ListLong;
                  }();
                  proto.ListString = function () {
                    /**
                     * Properties of a ListString.
                     * @memberof com.bear.xxld.lib.proto
                     * @interface IListString
                     * @property {Array.<string>|undefined} [value] ListString value
                     */

                    /**
                     * Constructs a new ListString.
                     * @memberof com.bear.xxld.lib.proto
                     * @classdesc Represents a ListString.
                     * @implements IListString
                     * @constructor
                     * @param {com.bear.xxld.lib.proto.IListString=} [p] Properties to set
                     */
                    function ListString(p) {
                      this.value = [];
                      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * ListString value.
                     * @member {Array.<string>} value
                     * @memberof com.bear.xxld.lib.proto.ListString
                     * @instance
                     */
                    ListString.prototype.value = $util.emptyArray;

                    /**
                     * Creates a new ListString instance using the specified properties.
                     * @function create
                     * @memberof com.bear.xxld.lib.proto.ListString
                     * @static
                     * @param {com.bear.xxld.lib.proto.IListString=} [properties] Properties to set
                     * @returns {com.bear.xxld.lib.proto.ListString} ListString instance
                     */
                    ListString.create = function create(properties) {
                      return new ListString(properties);
                    };

                    /**
                     * Encodes the specified ListString message. Does not implicitly {@link com.bear.xxld.lib.proto.ListString.verify|verify} messages.
                     * @function encode
                     * @memberof com.bear.xxld.lib.proto.ListString
                     * @static
                     * @param {com.bear.xxld.lib.proto.IListString} m ListString message or plain object to encode
                     * @param {$protobuf.Writer} [w] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListString.encode = function encode(m, w) {
                      if (!w) w = $Writer.create();
                      if (m.value != null && m.value.length) {
                        for (var i = 0; i < m.value.length; ++i) w.uint32(10).string(m.value[i]);
                      }
                      return w;
                    };

                    /**
                     * Decodes a ListString message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.bear.xxld.lib.proto.ListString
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {com.bear.xxld.lib.proto.ListString} ListString
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListString.decode = function decode(r, l) {
                      if (!(r instanceof $Reader)) r = $Reader.create(r);
                      var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.com.bear.xxld.lib.proto.ListString();
                      while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                          case 1:
                            {
                              if (!(m.value && m.value.length)) m.value = [];
                              m.value.push(r.string());
                              break;
                            }
                          default:
                            r.skipType(t & 7);
                            break;
                        }
                      }
                      return m;
                    };

                    /**
                     * Gets the default type url for ListString
                     * @function getTypeUrl
                     * @memberof com.bear.xxld.lib.proto.ListString
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ListString.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                      if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                      }
                      return typeUrlPrefix + "/com.bear.xxld.lib.proto.ListString";
                    };
                    return ListString;
                  }();
                  proto.Null = function () {
                    /**
                     * Properties of a Null.
                     * @memberof com.bear.xxld.lib.proto
                     * @interface INull
                     */

                    /**
                     * Constructs a new Null.
                     * @memberof com.bear.xxld.lib.proto
                     * @classdesc Represents a Null.
                     * @implements INull
                     * @constructor
                     * @param {com.bear.xxld.lib.proto.INull=} [p] Properties to set
                     */
                    function Null(p) {
                      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * Creates a new Null instance using the specified properties.
                     * @function create
                     * @memberof com.bear.xxld.lib.proto.Null
                     * @static
                     * @param {com.bear.xxld.lib.proto.INull=} [properties] Properties to set
                     * @returns {com.bear.xxld.lib.proto.Null} Null instance
                     */
                    Null.create = function create(properties) {
                      return new Null(properties);
                    };

                    /**
                     * Encodes the specified Null message. Does not implicitly {@link com.bear.xxld.lib.proto.Null.verify|verify} messages.
                     * @function encode
                     * @memberof com.bear.xxld.lib.proto.Null
                     * @static
                     * @param {com.bear.xxld.lib.proto.INull} m Null message or plain object to encode
                     * @param {$protobuf.Writer} [w] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Null.encode = function encode(m, w) {
                      if (!w) w = $Writer.create();
                      return w;
                    };

                    /**
                     * Decodes a Null message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.bear.xxld.lib.proto.Null
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {com.bear.xxld.lib.proto.Null} Null
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Null.decode = function decode(r, l) {
                      if (!(r instanceof $Reader)) r = $Reader.create(r);
                      var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.com.bear.xxld.lib.proto.Null();
                      while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                          default:
                            r.skipType(t & 7);
                            break;
                        }
                      }
                      return m;
                    };

                    /**
                     * Gets the default type url for Null
                     * @function getTypeUrl
                     * @memberof com.bear.xxld.lib.proto.Null
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Null.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                      if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                      }
                      return typeUrlPrefix + "/com.bear.xxld.lib.proto.Null";
                    };
                    return Null;
                  }();

                  /**
                   * GameMode enum.
                   * @name com.bear.xxld.lib.proto.GameMode
                   * @enum {number}
                   * @property {number} Standalone=1 Standalone value
                   * @property {number} MultiPersonPK=2 MultiPersonPK value
                   */
                  proto.GameMode = function () {
                    var valuesById = {},
                      values = Object.create(valuesById);
                    values[valuesById[1] = "Standalone"] = 1;
                    values[valuesById[2] = "MultiPersonPK"] = 2;
                    return values;
                  }();
                  proto.GameStartRequest = function () {
                    /**
                     * Properties of a GameStartRequest.
                     * @memberof com.bear.xxld.lib.proto
                     * @interface IGameStartRequest
                     * @property {com.bear.xxld.lib.proto.GameMode} mode GameStartRequest mode
                     */

                    /**
                     * Constructs a new GameStartRequest.
                     * @memberof com.bear.xxld.lib.proto
                     * @classdesc Represents a GameStartRequest.
                     * @implements IGameStartRequest
                     * @constructor
                     * @param {com.bear.xxld.lib.proto.IGameStartRequest=} [p] Properties to set
                     */
                    function GameStartRequest(p) {
                      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * GameStartRequest mode.
                     * @member {com.bear.xxld.lib.proto.GameMode} mode
                     * @memberof com.bear.xxld.lib.proto.GameStartRequest
                     * @instance
                     */
                    GameStartRequest.prototype.mode = 1;

                    /**
                     * Creates a new GameStartRequest instance using the specified properties.
                     * @function create
                     * @memberof com.bear.xxld.lib.proto.GameStartRequest
                     * @static
                     * @param {com.bear.xxld.lib.proto.IGameStartRequest=} [properties] Properties to set
                     * @returns {com.bear.xxld.lib.proto.GameStartRequest} GameStartRequest instance
                     */
                    GameStartRequest.create = function create(properties) {
                      return new GameStartRequest(properties);
                    };

                    /**
                     * Encodes the specified GameStartRequest message. Does not implicitly {@link com.bear.xxld.lib.proto.GameStartRequest.verify|verify} messages.
                     * @function encode
                     * @memberof com.bear.xxld.lib.proto.GameStartRequest
                     * @static
                     * @param {com.bear.xxld.lib.proto.IGameStartRequest} m GameStartRequest message or plain object to encode
                     * @param {$protobuf.Writer} [w] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GameStartRequest.encode = function encode(m, w) {
                      if (!w) w = $Writer.create();
                      w.uint32(8).int32(m.mode);
                      return w;
                    };

                    /**
                     * Decodes a GameStartRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.bear.xxld.lib.proto.GameStartRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {com.bear.xxld.lib.proto.GameStartRequest} GameStartRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GameStartRequest.decode = function decode(r, l) {
                      if (!(r instanceof $Reader)) r = $Reader.create(r);
                      var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.com.bear.xxld.lib.proto.GameStartRequest();
                      while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                          case 1:
                            {
                              m.mode = r.int32();
                              break;
                            }
                          default:
                            r.skipType(t & 7);
                            break;
                        }
                      }
                      if (!m.hasOwnProperty("mode")) throw $util.ProtocolError("missing required 'mode'", {
                        instance: m
                      });
                      return m;
                    };

                    /**
                     * Gets the default type url for GameStartRequest
                     * @function getTypeUrl
                     * @memberof com.bear.xxld.lib.proto.GameStartRequest
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    GameStartRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                      if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                      }
                      return typeUrlPrefix + "/com.bear.xxld.lib.proto.GameStartRequest";
                    };
                    return GameStartRequest;
                  }();
                  proto.GameStartReply = function () {
                    /**
                     * Properties of a GameStartReply.
                     * @memberof com.bear.xxld.lib.proto
                     * @interface IGameStartReply
                     * @property {number} recode GameStartReply recode
                     */

                    /**
                     * Constructs a new GameStartReply.
                     * @memberof com.bear.xxld.lib.proto
                     * @classdesc Represents a GameStartReply.
                     * @implements IGameStartReply
                     * @constructor
                     * @param {com.bear.xxld.lib.proto.IGameStartReply=} [p] Properties to set
                     */
                    function GameStartReply(p) {
                      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * GameStartReply recode.
                     * @member {number} recode
                     * @memberof com.bear.xxld.lib.proto.GameStartReply
                     * @instance
                     */
                    GameStartReply.prototype.recode = 0;

                    /**
                     * Creates a new GameStartReply instance using the specified properties.
                     * @function create
                     * @memberof com.bear.xxld.lib.proto.GameStartReply
                     * @static
                     * @param {com.bear.xxld.lib.proto.IGameStartReply=} [properties] Properties to set
                     * @returns {com.bear.xxld.lib.proto.GameStartReply} GameStartReply instance
                     */
                    GameStartReply.create = function create(properties) {
                      return new GameStartReply(properties);
                    };

                    /**
                     * Encodes the specified GameStartReply message. Does not implicitly {@link com.bear.xxld.lib.proto.GameStartReply.verify|verify} messages.
                     * @function encode
                     * @memberof com.bear.xxld.lib.proto.GameStartReply
                     * @static
                     * @param {com.bear.xxld.lib.proto.IGameStartReply} m GameStartReply message or plain object to encode
                     * @param {$protobuf.Writer} [w] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GameStartReply.encode = function encode(m, w) {
                      if (!w) w = $Writer.create();
                      w.uint32(8).int32(m.recode);
                      return w;
                    };

                    /**
                     * Decodes a GameStartReply message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.bear.xxld.lib.proto.GameStartReply
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {com.bear.xxld.lib.proto.GameStartReply} GameStartReply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GameStartReply.decode = function decode(r, l) {
                      if (!(r instanceof $Reader)) r = $Reader.create(r);
                      var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.com.bear.xxld.lib.proto.GameStartReply();
                      while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                          case 1:
                            {
                              m.recode = r.int32();
                              break;
                            }
                          default:
                            r.skipType(t & 7);
                            break;
                        }
                      }
                      if (!m.hasOwnProperty("recode")) throw $util.ProtocolError("missing required 'recode'", {
                        instance: m
                      });
                      return m;
                    };

                    /**
                     * Gets the default type url for GameStartReply
                     * @function getTypeUrl
                     * @memberof com.bear.xxld.lib.proto.GameStartReply
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    GameStartReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                      if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                      }
                      return typeUrlPrefix + "/com.bear.xxld.lib.proto.GameStartReply";
                    };
                    return GameStartReply;
                  }();
                  proto.RankInfo = function () {
                    /**
                     * Properties of a RankInfo.
                     * @memberof com.bear.xxld.lib.proto
                     * @interface IRankInfo
                     * @property {string} openId RankInfo openId
                     * @property {string|undefined} [nickname] RankInfo nickname
                     * @property {number|undefined} [worldRank] RankInfo worldRank
                     */

                    /**
                     * Constructs a new RankInfo.
                     * @memberof com.bear.xxld.lib.proto
                     * @classdesc Represents a RankInfo.
                     * @implements IRankInfo
                     * @constructor
                     * @param {com.bear.xxld.lib.proto.IRankInfo=} [p] Properties to set
                     */
                    function RankInfo(p) {
                      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * RankInfo openId.
                     * @member {string} openId
                     * @memberof com.bear.xxld.lib.proto.RankInfo
                     * @instance
                     */
                    RankInfo.prototype.openId = "";

                    /**
                     * RankInfo nickname.
                     * @member {string|null|undefined} nickname
                     * @memberof com.bear.xxld.lib.proto.RankInfo
                     * @instance
                     */
                    RankInfo.prototype.nickname = undefined;

                    /**
                     * RankInfo worldRank.
                     * @member {number|null|undefined} worldRank
                     * @memberof com.bear.xxld.lib.proto.RankInfo
                     * @instance
                     */
                    RankInfo.prototype.worldRank = undefined;

                    /**
                     * Creates a new RankInfo instance using the specified properties.
                     * @function create
                     * @memberof com.bear.xxld.lib.proto.RankInfo
                     * @static
                     * @param {com.bear.xxld.lib.proto.IRankInfo=} [properties] Properties to set
                     * @returns {com.bear.xxld.lib.proto.RankInfo} RankInfo instance
                     */
                    RankInfo.create = function create(properties) {
                      return new RankInfo(properties);
                    };

                    /**
                     * Encodes the specified RankInfo message. Does not implicitly {@link com.bear.xxld.lib.proto.RankInfo.verify|verify} messages.
                     * @function encode
                     * @memberof com.bear.xxld.lib.proto.RankInfo
                     * @static
                     * @param {com.bear.xxld.lib.proto.IRankInfo} m RankInfo message or plain object to encode
                     * @param {$protobuf.Writer} [w] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RankInfo.encode = function encode(m, w) {
                      if (!w) w = $Writer.create();
                      w.uint32(10).string(m.openId);
                      if (m.nickname != null && Object.hasOwnProperty.call(m, "nickname")) w.uint32(18).string(m.nickname);
                      if (m.worldRank != null && Object.hasOwnProperty.call(m, "worldRank")) w.uint32(24).int32(m.worldRank);
                      return w;
                    };

                    /**
                     * Decodes a RankInfo message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.bear.xxld.lib.proto.RankInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {com.bear.xxld.lib.proto.RankInfo} RankInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RankInfo.decode = function decode(r, l) {
                      if (!(r instanceof $Reader)) r = $Reader.create(r);
                      var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.com.bear.xxld.lib.proto.RankInfo();
                      while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                          case 1:
                            {
                              m.openId = r.string();
                              break;
                            }
                          case 2:
                            {
                              m.nickname = r.string();
                              break;
                            }
                          case 3:
                            {
                              m.worldRank = r.int32();
                              break;
                            }
                          default:
                            r.skipType(t & 7);
                            break;
                        }
                      }
                      if (!m.hasOwnProperty("openId")) throw $util.ProtocolError("missing required 'openId'", {
                        instance: m
                      });
                      return m;
                    };

                    /**
                     * Gets the default type url for RankInfo
                     * @function getTypeUrl
                     * @memberof com.bear.xxld.lib.proto.RankInfo
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    RankInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                      if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                      }
                      return typeUrlPrefix + "/com.bear.xxld.lib.proto.RankInfo";
                    };
                    return RankInfo;
                  }();
                  proto.RankRequest = function () {
                    /**
                     * Properties of a RankRequest.
                     * @memberof com.bear.xxld.lib.proto
                     * @interface IRankRequest
                     * @property {number} type RankRequest type
                     */

                    /**
                     * Constructs a new RankRequest.
                     * @memberof com.bear.xxld.lib.proto
                     * @classdesc Represents a RankRequest.
                     * @implements IRankRequest
                     * @constructor
                     * @param {com.bear.xxld.lib.proto.IRankRequest=} [p] Properties to set
                     */
                    function RankRequest(p) {
                      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * RankRequest type.
                     * @member {number} type
                     * @memberof com.bear.xxld.lib.proto.RankRequest
                     * @instance
                     */
                    RankRequest.prototype.type = 0;

                    /**
                     * Creates a new RankRequest instance using the specified properties.
                     * @function create
                     * @memberof com.bear.xxld.lib.proto.RankRequest
                     * @static
                     * @param {com.bear.xxld.lib.proto.IRankRequest=} [properties] Properties to set
                     * @returns {com.bear.xxld.lib.proto.RankRequest} RankRequest instance
                     */
                    RankRequest.create = function create(properties) {
                      return new RankRequest(properties);
                    };

                    /**
                     * Encodes the specified RankRequest message. Does not implicitly {@link com.bear.xxld.lib.proto.RankRequest.verify|verify} messages.
                     * @function encode
                     * @memberof com.bear.xxld.lib.proto.RankRequest
                     * @static
                     * @param {com.bear.xxld.lib.proto.IRankRequest} m RankRequest message or plain object to encode
                     * @param {$protobuf.Writer} [w] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RankRequest.encode = function encode(m, w) {
                      if (!w) w = $Writer.create();
                      w.uint32(8).int32(m.type);
                      return w;
                    };

                    /**
                     * Decodes a RankRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.bear.xxld.lib.proto.RankRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {com.bear.xxld.lib.proto.RankRequest} RankRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RankRequest.decode = function decode(r, l) {
                      if (!(r instanceof $Reader)) r = $Reader.create(r);
                      var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.com.bear.xxld.lib.proto.RankRequest();
                      while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                          case 1:
                            {
                              m.type = r.int32();
                              break;
                            }
                          default:
                            r.skipType(t & 7);
                            break;
                        }
                      }
                      if (!m.hasOwnProperty("type")) throw $util.ProtocolError("missing required 'type'", {
                        instance: m
                      });
                      return m;
                    };

                    /**
                     * Gets the default type url for RankRequest
                     * @function getTypeUrl
                     * @memberof com.bear.xxld.lib.proto.RankRequest
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    RankRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                      if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                      }
                      return typeUrlPrefix + "/com.bear.xxld.lib.proto.RankRequest";
                    };
                    return RankRequest;
                  }();
                  proto.RankReply = function () {
                    /**
                     * Properties of a RankReply.
                     * @memberof com.bear.xxld.lib.proto
                     * @interface IRankReply
                     * @property {number} type RankReply type
                     * @property {Array.<com.bear.xxld.lib.proto.IRankInfo>|undefined} [ranks] RankReply ranks
                     * @property {number|Long|undefined} [refreshTime] RankReply refreshTime
                     */

                    /**
                     * Constructs a new RankReply.
                     * @memberof com.bear.xxld.lib.proto
                     * @classdesc Represents a RankReply.
                     * @implements IRankReply
                     * @constructor
                     * @param {com.bear.xxld.lib.proto.IRankReply=} [p] Properties to set
                     */
                    function RankReply(p) {
                      this.ranks = [];
                      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * RankReply type.
                     * @member {number} type
                     * @memberof com.bear.xxld.lib.proto.RankReply
                     * @instance
                     */
                    RankReply.prototype.type = 0;

                    /**
                     * RankReply ranks.
                     * @member {Array.<com.bear.xxld.lib.proto.IRankInfo>} ranks
                     * @memberof com.bear.xxld.lib.proto.RankReply
                     * @instance
                     */
                    RankReply.prototype.ranks = $util.emptyArray;

                    /**
                     * RankReply refreshTime.
                     * @member {number|Long|null|undefined} refreshTime
                     * @memberof com.bear.xxld.lib.proto.RankReply
                     * @instance
                     */
                    RankReply.prototype.refreshTime = undefined;

                    /**
                     * Creates a new RankReply instance using the specified properties.
                     * @function create
                     * @memberof com.bear.xxld.lib.proto.RankReply
                     * @static
                     * @param {com.bear.xxld.lib.proto.IRankReply=} [properties] Properties to set
                     * @returns {com.bear.xxld.lib.proto.RankReply} RankReply instance
                     */
                    RankReply.create = function create(properties) {
                      return new RankReply(properties);
                    };

                    /**
                     * Encodes the specified RankReply message. Does not implicitly {@link com.bear.xxld.lib.proto.RankReply.verify|verify} messages.
                     * @function encode
                     * @memberof com.bear.xxld.lib.proto.RankReply
                     * @static
                     * @param {com.bear.xxld.lib.proto.IRankReply} m RankReply message or plain object to encode
                     * @param {$protobuf.Writer} [w] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RankReply.encode = function encode(m, w) {
                      if (!w) w = $Writer.create();
                      w.uint32(8).int32(m.type);
                      if (m.ranks != null && m.ranks.length) {
                        for (var i = 0; i < m.ranks.length; ++i) $root.com.bear.xxld.lib.proto.RankInfo.encode(m.ranks[i], w.uint32(18).fork()).ldelim();
                      }
                      if (m.refreshTime != null && Object.hasOwnProperty.call(m, "refreshTime")) w.uint32(24).int64(m.refreshTime);
                      return w;
                    };

                    /**
                     * Decodes a RankReply message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.bear.xxld.lib.proto.RankReply
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {com.bear.xxld.lib.proto.RankReply} RankReply
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RankReply.decode = function decode(r, l) {
                      if (!(r instanceof $Reader)) r = $Reader.create(r);
                      var c = l === undefined ? r.len : r.pos + l,
                        m = new $root.com.bear.xxld.lib.proto.RankReply();
                      while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                          case 1:
                            {
                              m.type = r.int32();
                              break;
                            }
                          case 2:
                            {
                              if (!(m.ranks && m.ranks.length)) m.ranks = [];
                              m.ranks.push($root.com.bear.xxld.lib.proto.RankInfo.decode(r, r.uint32()));
                              break;
                            }
                          case 3:
                            {
                              m.refreshTime = r.int64();
                              break;
                            }
                          default:
                            r.skipType(t & 7);
                            break;
                        }
                      }
                      if (!m.hasOwnProperty("type")) throw $util.ProtocolError("missing required 'type'", {
                        instance: m
                      });
                      return m;
                    };

                    /**
                     * Gets the default type url for RankReply
                     * @function getTypeUrl
                     * @memberof com.bear.xxld.lib.proto.RankReply
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    RankReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                      if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                      }
                      return typeUrlPrefix + "/com.bear.xxld.lib.proto.RankReply";
                    };
                    return RankReply;
                  }();
                  return proto;
                }();
                return lib;
              }();
              return xxld;
            }();
            return bear;
          }();
          return com;
        }();
        module.exports = $root;

        // #endregion ORIGINAL CODE

        _cjsExports = exports('default', module.exports);
      }, function () {
        return {
          '../../../../node_modules/protobufjs/minimal': __cjsMetaURL$1
        };
      });
    }
  };
});

System.register("chunks:///_virtual/FishProto.mjs_cjs=&original=.js", ['./FishProto.js', './cjs-loader.mjs'], function (exports, module) {
  var __cjsMetaURL, loader;
  return {
    setters: [function (module) {
      __cjsMetaURL = module.__cjsMetaURL;
      var _setter = {};
      _setter.__cjsMetaURL = module.__cjsMetaURL;
      _setter.default = module.default;
      exports(_setter);
    }, function (module) {
      loader = module.default;
    }],
    execute: function () {
      // I am the facade module who provides access to the CommonJS module './FishProto.js'~
      if (!__cjsMetaURL) {
        loader.throwInvalidWrapper('./FishProto.js', module.meta.url);
      }
      loader.require(__cjsMetaURL);
    }
  };
});

System.register("chunks:///_virtual/FloatTipsLabel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Utils.ts', './I18n.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Label, v3, size, UITransform, Tween, color, tween, Vec3, Component, Utils, I18n;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Label = module.Label;
      v3 = module.v3;
      size = module.size;
      UITransform = module.UITransform;
      Tween = module.Tween;
      color = module.color;
      tween = module.tween;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      I18n = module.I18n;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "bcd837FdKdACJyAnyVWqteD", "FloatTipsLabel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      // 文本信息

      var FloatTipsLabel = exports('FloatTipsLabel', (_dec = ccclass('FloatTipsLabel'), _dec2 = property(Sprite), _dec3 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FloatTipsLabel, _Component);
        function FloatTipsLabel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "sp_bg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lb_tips", _descriptor2, _assertThisInitialized(_this));
          _this._endCallback = void 0;
          _this._initedPos = void 0;
          _this._bgInitSize = void 0;
          return _this;
        }
        var _proto = FloatTipsLabel.prototype;
        _proto.onLoad = function onLoad() {
          var _this$node$getChildBy, _this$node$getChildBy2, _this$sp_bg$node$getC;
          this.sp_bg = (_this$node$getChildBy = this.node.getChildByName("bg")) == null ? void 0 : _this$node$getChildBy.getComponent(Sprite);
          this.lb_tips = (_this$node$getChildBy2 = this.node.getChildByName("lb_tips")) == null ? void 0 : _this$node$getChildBy2.getComponent(Label);
          this._initedPos = v3(this.node.position);
          this._bgInitSize = size((_this$sp_bg$node$getC = this.sp_bg.node.getComponent(UITransform)) == null ? void 0 : _this$sp_bg$node$getC.contentSize);
        };
        _proto.setEndCallback = function setEndCallback(callback) {
          this._endCallback = callback;
        }

        // 设置文本信息
        ;

        _proto.setLabelInfo = function setLabelInfo(info) {
          Tween.stopAllByTarget(this.node);
          this.node.position = this._initedPos;
          this.node.scale = v3(1, 1, 1);
          // 文本
          I18n.setLabelText(this.lb_tips, info.text);
          if (info.fontColor) {
            this.lb_tips.color = info.fontColor;
          } else {
            this.lb_tips.color = color(0xff, 0xff, 0xff, 0xff);
          }
          if (info.isSystemFont) {
            this.lb_tips.useSystemFont = info.isSystemFont;
            this.lb_tips.enableOutline = !!info.outlineColor;
            if (info.outlineColor) {
              this.lb_tips.outlineColor = info.outlineColor;
            }
            if (info.outlineWidth) {
              this.lb_tips.outlineWidth = info.outlineWidth;
            }
          } else {
            this.lb_tips.useSystemFont = false;
          }
          // 底框背景
          this._setBgSize();
          // 浮动动作
          this._tween();
        };
        _proto._setBgSize = function _setBgSize() {
          var tmpSize = Utils.getLabelRealSize(this.lb_tips);
          tmpSize = size(Math.max(this._bgInitSize.width, tmpSize.width), Math.max(tmpSize.height, this._bgInitSize.height));
          Utils.setContentSize(this.sp_bg, tmpSize);
        };
        _proto._tween = function _tween() {
          var _this2 = this;
          var tweenDuration = 1.0;
          Tween.stopAllByTarget(this.node);
          tween(this.node).to(0.1, {
            scale: new Vec3(1.1, 1.1, 1)
          }, {
            easing: "sineIn"
          }).to(0.1, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: "sineOut"
          }).by(tweenDuration, {
            position: new Vec3(0, 100, 0)
          }).call(function () {
            _this2._endCallback && _this2._endCallback(_this2.node);
          }).start();
        };
        return FloatTipsLabel;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sp_bg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lb_tips", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameApp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LoginComp.ts', './WinMgr.ts', './WinHelper.ts', './CsvLoader.ts', './Csv.ts', './LoadMgr.ts', './I18n.ts', './GameLaunch.ts', './NetMgr.ts', './EventComp.ts', './ClientEvents.ts', './Utils.ts', './BaseMgr.ts', './GameTimer.ts', './EventListener.ts', './ShaderMgr.ts', './LogMgr.ts', './AssetUtil.ts', './AudioMgr.ts', './AudioConfig.ts', './UIUtils.ts', './Electron.ts'], function (exports) {
  var _inheritsLoose, _assertThisInitialized, cclegacy, _decorator, isValid, game, Game, instantiate, assetManager, TextAsset, Prefab, SpriteAtlas, AudioClip, LoginComp, WinMgr, WinHelper, parse_csv, Csv, LoadMgr, I18n, GameLaunch, NetMgr, EventComp, ClientEvents, Utils, BaseMgr, GameTimer, EventListener, ShaderMgr, LogMgr, AssetUtil, AudioMgr, AudioConfig, UIUtils, Electron;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      isValid = module.isValid;
      game = module.game;
      Game = module.Game;
      instantiate = module.instantiate;
      assetManager = module.assetManager;
      TextAsset = module.TextAsset;
      Prefab = module.Prefab;
      SpriteAtlas = module.SpriteAtlas;
      AudioClip = module.AudioClip;
    }, function (module) {
      LoginComp = module.LoginComp;
    }, function (module) {
      WinMgr = module.WinMgr;
    }, function (module) {
      WinHelper = module.WinHelper;
    }, function (module) {
      parse_csv = module.parse_csv;
    }, function (module) {
      Csv = module.Csv;
    }, function (module) {
      LoadMgr = module.LoadMgr;
    }, function (module) {
      I18n = module.I18n;
    }, function (module) {
      GameLaunch = module.GameLaunch;
    }, function (module) {
      NetMgr = module.NetMgr;
    }, function (module) {
      EventComp = module.EventComp;
    }, function (module) {
      ClientEvents = module.ClientEvents;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      BaseMgr = module.BaseMgr;
    }, function (module) {
      GameTimer = module.GameTimer;
    }, function (module) {
      EventListener = module.EventListener;
    }, function (module) {
      ShaderMgr = module.ShaderMgr;
    }, function (module) {
      LogMgr = module.LogMgr;
    }, function (module) {
      AssetUtil = module.AssetUtil;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      AudioConfig = module.AudioConfig;
    }, function (module) {
      UIUtils = module.UIUtils;
    }, function (module) {
      Electron = module.Electron;
    }],
    execute: function () {
      var _class, _class2;
      cclegacy._RF.push({}, "98a14Aw2xhFFI0o6YLgpuwL", "GameApp", undefined);
      var ccclass = _decorator.ccclass;
      var DEFAULT_LANG_ID_NET_ERROR = -1;
      var GameApp = exports('GameApp', ccclass(_class = (_class2 = /*#__PURE__*/function (_EventComp) {
        _inheritsLoose(GameApp, _EventComp);
        function GameApp() {
          var _this;
          _this = _EventComp.call(this) || this;
          // 通用的一些资源需要手动管理数据
          _this._manualAssets = [];
          _this._enterBackTime = 0;
          // 进入到后台的时间
          _this.isInBack = false;
          _this._listeners = [{
            evtId: ClientEvents.NET_ERROR,
            handler: _this._onNetError,
            target: _assertThisInitialized(_this)
          }, {
            evtId: ClientEvents.NET_WEAK,
            handler: _this._onNetWeak,
            target: _assertThisInitialized(_this)
          }, {
            evtId: ClientEvents.SOCKET_CONNECTED,
            handler: _this._onSocketConnect,
            target: _assertThisInitialized(_this)
          }];
          return _this;
        }
        var _proto = GameApp.prototype;
        _proto.onLoad = function onLoad() {
          _EventComp.prototype.onLoad.call(this);
          if (!isValid(GameApp.instance)) {
            GameApp.instance = this;
          } else {
            this.destroy();
            return;
          }
          this.initApp();
        };
        _proto.onDestroy = function onDestroy() {
          this.removeAllManual();
          game.targetOff(this);
        };
        _proto.initApp = function initApp() {
          // 是否取消底层的前后台切换监听
          game.cancelHideShowEvt();
          game.on(Game.EVENT_HIDE, this._onEnterHide, this);
          game.on(Game.EVENT_SHOW, this._onEnterShow, this);
          game.once(Game.EVENT_RESTART, function () {
            // 重启的时候销毁字体,不能放到restartGame中去  
            I18n.destroy();
          });
          WinHelper.checkBasicNode();
        }

        ////////////////////////////////////////////////////////////////////////////
        ;

        _proto.addToManual = function addToManual(asset) {
          if (!this._manualAssets.includes(asset) && isValid(asset)) {
            asset.addRef();
            this._manualAssets.push(asset);
          }
        };
        _proto.removeFromManual = function removeFromManual(asset) {
          var index = this._manualAssets.indexOf(asset);
          if (index != -1) {
            isValid(asset) && asset.decRef();
            this._manualAssets.splice(index, 1);
          }
        };
        _proto.removeAllManual = function removeAllManual() {
          for (var i = this._manualAssets.length - 1; i >= 0; --i) {
            var asset = this._manualAssets[i];
            isValid(asset) && asset.decRef();
          }
          this._manualAssets.length = 0;
        }

        ////////////////////////////////////////////////////////////////////////////
        ;

        _proto.restartGame = function restartGame() {
          this.removeAllManual();
          GameApp.instance = null;
          GameLaunch.instance = null;

          // 所有的mgr移除
          BaseMgr.destroyMgrs();
          AudioMgr.destroy();
          WinMgr.destroy();
          ShaderMgr.destroy();

          // 定时器移除
          GameTimer.instance.clearAllTimers();

          // 自定义事件监听移除
          EventListener.clean();

          // I18n.destroy();

          game.restart();
        }

        ////////////////////////////////////////////////////////////////////////////
        ;

        _proto.loadLaunchView = function loadLaunchView() {
          WinMgr.instance.clear();
          // 关闭socket
          NetMgr.instance.close();
          WinHelper.checkBasicNode();
          this.newLaunchView();
        };
        _proto.newLaunchView = function newLaunchView() {
          this.removeLaunchView();
          var node = instantiate(GameLaunch.instance.launchPrefab);
          node.parent = WinHelper.getLaunch();
        };
        _proto.removeLaunchView = function removeLaunchView() {
          var node = WinHelper.getLaunchView();
          if (node && isValid(node)) {
            node.destroy();
          }
        };
        _proto.showLaunchView = function showLaunchView(b) {
          var node = WinHelper.getLaunchView();
          if (node && isValid(node)) {
            node.active = b;
          }
        };
        _proto.onLaunchFinish = function onLaunchFinish() {
          var _this2 = this;
          console.log("on launch finish");
          Electron.init();
          WinMgr.instance.clear();
          LogMgr.init();
          UIUtils.gotoMain(function () {
            if (!isValid(_this2)) return;
            _this2.showLaunchView(false);
          });
        }

        ////////////////////////////////////////////////////////////////////////////
        ;

        _proto.loadConfigs = function loadConfigs(progress, complete) {
          var _this3 = this;
          var bundle = assetManager.getBundle("resources");
          if (!bundle) {
            console.error("csv bundle not loaded!");
            complete(false);
            return;
          }
          bundle.loadDir("csv", TextAsset, function (finish, total) {
            progress(finish / total);
          }, function (err, assets) {
            if (err) {
              console.error("load csv failed! ", err);
              if (isValid(_this3)) {
                _this3.scheduleOnce(function () {
                  _this3.loadConfigs(progress, complete);
                }, 2);
              } else {
                complete(false);
              }
              return;
            }
            assets.forEach(function (asset) {
              var csvName = asset.name;
              // console.log("parse csv ", csvName);
              var result = parse_csv(asset.text);
              Csv[csvName] = result;
              assetManager.releaseAsset(asset);
            });
            complete(true);
          });
        };
        _proto.loadFonts = function loadFonts(progress, complete) {
          // 战斗中数字飘字
          var assetsInfo = [
            // {path: "fnt_num_white", type: Font, bundleName: "font"},
          ];
          LoadMgr.instance.loadAssets(assetsInfo, progress, complete);
        };
        _proto.loadI18N = function loadI18N(progress, complete) {
          I18n.loadLang(progress, complete);
        };
        _proto.loadBasicPrefabs = function loadBasicPrefabs(progress, complete) {
          var _this4 = this;
          // 这些基本的预制体都放到WinHelper里面去
          var config = {
            __BLANK_SCREEN__: {
              path: "base/__BLANK_SCREEN__",
              key: "blankScreenPrefab"
            },
            __LOCK_SCREEN__: {
              path: "base/__LOCK_SCREEN__",
              key: "lockScreenPrefab"
            },
            __TEST_FUNC_BTN__: {
              path: "base/__TEST_FUNC_BTN__",
              key: "testFuncBtnPrefab"
            },
            __TRANS_NODE__: {
              path: "base/__TRANS_NODE__",
              key: "transActionPrefab"
            },
            FloatTipsLabel: {
              path: "common/FloatTipsLabel",
              key: "tipLabelPrefab"
            },
            WeakNetTip: {
              path: "common/WeakNetTip",
              key: "weakNetTipPrefab"
            },
            WaittingView: {
              path: "common/WaittingView",
              key: "waittingViewPrefab"
            }
          };
          var assetsInfo = [];
          for (var _name in config) {
            assetsInfo.push({
              path: "views/" + config[_name].path,
              type: Prefab
            });
          }
          LoadMgr.instance.loadAssets(assetsInfo, progress, function (success) {
            if (!success && isValid(_this4)) {
              _this4.scheduleOnce(function () {
                _this4.loadBasicPrefabs(progress, complete);
              }, 2);
            } else {
              complete(success);
            }
          }, function (data) {
            isValid(_this4) && _this4.addToManual(data);
            WinHelper[config[data.name].key] = data;
          });
        };
        _proto.loadAtlasConfig = function loadAtlasConfig(progress, complete) {
          var _this5 = this;
          AssetUtil.AtlasConfig = {};
          var options = {
            __requestType__: "dir",
            bundle: "resources",
            type: SpriteAtlas,
            asAtlasConfig: true,
            __outputAsArray__: true
          };
          assetManager.loadAny("images/plist", options, function (finish, total) {
            progress(finish / total);
          }, function (err, datas) {
            if (err) {
              if (isValid(_this5)) {
                _this5.scheduleOnce(function () {
                  _this5.loadAtlasConfig(progress, complete);
                }, 2);
              } else {
                complete(false);
              }
            } else {
              datas.forEach(function (data) {
                var config = AssetUtil.AtlasConfig[data.name] = [];
                // 修改了底层引擎代码的
                data.framePngs.forEach(function (png) {
                  config.push(png);
                });
              });
              console.log("atlas config:", AssetUtil.AtlasConfig);
              complete(true);
            }
          });
        };
        _proto.preloadAudio = function preloadAudio(progress, complete) {
          var assetInfos = [];
          var config = AudioConfig.COMMON_EFF;
          for (var _name2 in config) {
            var t = config[_name2];
            assetInfos.push({
              path: AudioConfig.AudioPath + t,
              type: AudioClip
            });
          }
          LoadMgr.instance.preloadAssets(assetInfos, progress, complete);
        };
        _proto.loadCommonRes = function loadCommonRes(progress, complete) {
          var _this6 = this;
          var assetsInfo = [{
            path: "images/plist/default",
            type: SpriteAtlas
          }, {
            path: "images/plist/tp",
            type: SpriteAtlas
          }, {
            path: "images/plist/it",
            type: SpriteAtlas
          }];
          LoadMgr.instance.loadAssets(assetsInfo, progress, function (success) {
            if (!success && isValid(_this6)) {
              _this6.scheduleOnce(function () {
                _this6.loadCommonRes(progress, complete);
              }, 2);
            } else {
              complete(success);
            }
          }, function (data) {
            isValid(_this6) && _this6.addToManual(data);
          });
        };
        _proto.loadShaders = function loadShaders(complete) {
          var _this7 = this;
          ShaderMgr.instance.loadAll(function (success) {
            if (!success && isValid(_this7)) {
              _this7.scheduleOnce(function () {
                _this7.loadShaders(complete);
              }, 2);
            } else {
              complete(success);
            }
          });
        };
        _proto.preLoadMainScene = function preLoadMainScene(progress, complete) {
          // complete && complete(true)
          var assetInfos = [{
            path: "views/game/MainView",
            type: Prefab
          }];
          LoadMgr.instance.preloadAssets(assetInfos, progress, complete, "preload main scene");
        }

        ////////////////////////////////////////////////////////////////////////////
        ;

        _proto.checkHotUpdate = function checkHotUpdate(cb) {
          return cb(false);
        };
        _proto.startLogin = function startLogin(progress, complete) {
          LogMgr.log("startLogin");
          var comp = Utils.checkComponent(this.node, LoginComp);
          comp.triggerLogin(progress, complete);
        }

        ////////////////////////////////////////////////////////////////////////////
        ;

        _proto.isShowNetErrorPopUpWin = function isShowNetErrorPopUpWin() {
          return false;
        };
        _proto.isShowWeakNetTip = function isShowWeakNetTip() {
          return false;
        };
        _proto.isRestartGameForBackGroundLongTime = function isRestartGameForBackGroundLongTime() {
          return false;
        }

        ////////////////////////////////////////////////////////////////////////////
        ;

        _proto._onNetError = function _onNetError(msg) {
          var _this8 = this;
          if (!this.isShowNetErrorPopUpWin()) return;
          WinMgr.instance.hideWeakNetTip();
          UIUtils.showPopUpWin({
            content: I18n.t(DEFAULT_LANG_ID_NET_ERROR) + msg,
            isShowClose: false,
            isBlankClose: false,
            isShowCancel: false,
            confirmCallback: function confirmCallback() {
              _this8.loadLaunchView();
            }
          });
        };
        _proto._onNetWeak = function _onNetWeak(msg) {
          if (!this.isShowWeakNetTip()) return;
          if (!WinHelper.getLaunchView()) {
            var tip = msg && msg.tip;
            WinMgr.instance.showWeakNetTip(tip);
          }
        };
        _proto._onSocketConnect = function _onSocketConnect(msg) {
          WinMgr.instance.closeAllPop();
        };
        _proto._onEnterHide = function _onEnterHide() {
          this.isInBack = true;
          AudioMgr.instance.pauseAll();
          this._enterBackTime = Date.now();
          LogMgr.logyellow("enter back ground");
          EventListener.dispatchEvent(ClientEvents.ENTER_HIDE);
        };
        _proto._onEnterShow = function _onEnterShow() {
          this.isInBack = false;
          var second = Math.ceil((Date.now() - this._enterBackTime) / 1000);
          LogMgr.logyellow("enter forground seconds: " + second);
          if (second > 30 * 60) {
            // 30分钟后重启游戏
            if (this.isRestartGameForBackGroundLongTime()) {
              this.restartGame();
              return;
            }
          }
          AudioMgr.instance.playMusic();
          EventListener.dispatchEvent(ClientEvents.ENTER_SHOW, second);
        };
        return GameApp;
      }(EventComp), _class2.instance = null, _class2)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameTimer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e7af1nH8eVDG4rvRW+x2xY1", "GameTimer", undefined);
      var GameTimer = exports('GameTimer', /*#__PURE__*/function () {
        function GameTimer() {
          //setTimeout的所有定时器id
          this._timeOutIds = [];
          //setInterval的所有定时器id
          this._intervalIds = [];
        }
        var _proto = GameTimer.prototype;
        /**
         * 设置单次延迟定时器
         * @author: qiaomingwu
         * @param {Function} cb 回调
         * @param {number} outTime 延迟时间：毫秒
         */
        _proto.setTimeout = function (_setTimeout) {
          function setTimeout(_x, _x2) {
            return _setTimeout.apply(this, arguments);
          }
          setTimeout.toString = function () {
            return _setTimeout.toString();
          };
          return setTimeout;
        }(function (cb, outTime) {
          var timer = setTimeout(cb, outTime);
          this._timeOutIds.push(timer);
          return timer;
        }

        /**
         * 设置间隔定时器
         * @author: qiaomingwu
         * @param {Function} cb 回调
         * @param {number} interval 间隔时间：毫秒
         */);
        _proto.setInterval = function (_setInterval) {
          function setInterval(_x3, _x4) {
            return _setInterval.apply(this, arguments);
          }
          setInterval.toString = function () {
            return _setInterval.toString();
          };
          return setInterval;
        }(function (cb, interval) {
          var timer = setInterval(cb, interval);
          this._intervalIds.push(timer);
          return timer;
        }

        /**
         * 清除timeout定时器
         * @author: qiaomingwu
         * @param {number} timerId 定时器id
         */);
        _proto.clearTimeout = function (_clearTimeout) {
          function clearTimeout(_x5) {
            return _clearTimeout.apply(this, arguments);
          }
          clearTimeout.toString = function () {
            return _clearTimeout.toString();
          };
          return clearTimeout;
        }(function (timerId) {
          clearTimeout(timerId);
          var idx = this._timeOutIds.indexOf(timerId);
          if (idx != -1) {
            this._timeOutIds.splice(idx, 1);
          }
        }

        /**
         * 清除interval定时器
         * @author: qiaomingwu
         * @param {number} timerId 定时器id
         */);
        _proto.clearInterval = function (_clearInterval) {
          function clearInterval(_x6) {
            return _clearInterval.apply(this, arguments);
          }
          clearInterval.toString = function () {
            return _clearInterval.toString();
          };
          return clearInterval;
        }(function (timerId) {
          clearInterval(timerId);
          var idx = this._intervalIds.indexOf(timerId);
          if (idx != -1) {
            this._intervalIds.splice(idx, 1);
          }
        }

        /**
         * 清除所有定时器
         * @author: qiaomingwu
         */);
        _proto.clearAllTimers = function clearAllTimers() {
          for (var i = this._timeOutIds.length - 1; i >= 0; --i) {
            var id = this._timeOutIds[i];
            clearTimeout(id);
          }
          for (var _i = this._intervalIds.length - 1; _i >= 0; --_i) {
            var _id = this._intervalIds[_i];
            clearInterval(_id);
          }
          this._timeOutIds.length = 0;
          this._intervalIds.length = 0;
        };
        _createClass(GameTimer, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new GameTimer();
            }
            return this._instance;
          }
        }]);
        return GameTimer;
      }());
      GameTimer._instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GlobalMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LocalStorage.ts', './Constants.ts', './NetMgr.ts', './Command.ts', './GameTimer.ts', './BaseMgr.ts', './LogMgr.ts', './LoginMgr.ts', './channel_config.ts', './EventListener.ts', './ClientEvents.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, LocalStorage, Constants, NetMgr, MsgId, GameTimer, BaseMgr, LogMgr, LoginMgr, channel_config, EventListener, ClientEvents;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      LocalStorage = module.LocalStorage;
    }, function (module) {
      Constants = module.Constants;
    }, function (module) {
      NetMgr = module.NetMgr;
    }, function (module) {
      MsgId = module.MsgId;
    }, function (module) {
      GameTimer = module.GameTimer;
    }, function (module) {
      BaseMgr = module.BaseMgr;
    }, function (module) {
      LogMgr = module.LogMgr;
    }, function (module) {
      LoginMgr = module.LoginMgr;
    }, function (module) {
      channel_config = module.channel_config;
    }, function (module) {
      EventListener = module.EventListener;
    }, function (module) {
      ClientEvents = module.ClientEvents;
    }],
    execute: function () {
      cclegacy._RF.push({}, "431f1fzARtHgogwAmwct6Zn", "GlobalMgr", undefined);
      var GlobalMgr = exports('GlobalMgr', /*#__PURE__*/function (_BaseMgr) {
        _inheritsLoose(GlobalMgr, _BaseMgr);
        function GlobalMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseMgr.call.apply(_BaseMgr, [this].concat(args)) || this;
          _this.gid = 0;
          _this.rid = "";
          _this.isReconnet = false;
          // 是否是重连
          _this.gameSpeed = Constants.GameSpeed;
          _this._serverTime = 0;
          // 服务器时间(秒)
          _this._serverTimeTimer = -1;
          return _this;
        }
        var _proto = GlobalMgr.prototype;
        _proto.init = function init() {
          this.gid = 0;
          this.rid = "";
          this.isReconnet = false;
          this.gameSpeed = Constants.GameSpeed;
          this.serverTime = Math.floor(Date.now() / 1000);
          // 针对玩家的存储
          LocalStorage.userId = null;
        }

        // 重置游戏数据
        ;

        _proto.resetAllData = function resetAllData() {
          LogMgr.loggreen("Reset All Data");
          this.init();
        }

        // 父类的构造函数会监听
        ;

        _proto._initCmds = function _initCmds() {
          this._listeners = [[MsgId.LoginEnginReply, this._onStatus]];
        };
        _proto.requestLogin = function requestLogin(isReconnnet) {
          var _loginInfo$rid;
          if (isReconnnet === void 0) {
            isReconnnet = false;
          }
          var loginInfo = LoginMgr.instance.netgateInfo;
          var data = {
            rid: (_loginInfo$rid = loginInfo.rid) != null ? _loginInfo$rid : "",
            reLogin: isReconnnet,
            machine: LoginMgr.instance.machineId,
            extraInfo: [],
            clientVersion: channel_config.version,
            head: ""
          };
          NetMgr.instance.send(MsgId.LoginEnginRequest, data);
          this.isReconnet = isReconnnet;
        };
        _proto._onStatus = function _onStatus(msg, cmd) {
          var _msg$gid, _msg$rid;
          switch (cmd) {
            case MsgId.LoginEnginReply:
              LogMgr.log("Login successful", msg);
              if (!this.isReconnet) {
                this.resetAllData();
              }
              this.gid = (_msg$gid = msg.gid) != null ? _msg$gid : 0;
              this.rid = (_msg$rid = msg.rid) != null ? _msg$rid : "";
              this.serverTime = msg.serverTime * 0.001;
              if (this.isReconnet) ;
              EventListener.dispatchEvent(ClientEvents.LOGIN_SUCCESS);
              break;
            case MsgId.GameStartReply:
              LogMgr.log("game start reply", msg);
              break;
          }
        };
        _createClass(GlobalMgr, [{
          key: "serverTime",
          get: function get() {
            return this._serverTime;
          },
          set: function set(t) {
            var _this2 = this;
            this._serverTime = t;
            GameTimer.instance.clearInterval(this._serverTimeTimer);
            this._serverTimeTimer = GameTimer.instance.setInterval(function () {
              _this2._serverTime += 1;
            }, 1000);
            EventListener.dispatchEvent(ClientEvents.UPDATE_SERVER_TIME);
          }
        }, {
          key: "serverMsTime",
          get: function get() {
            return this.serverTime * 1000;
          }
        }], [{
          key: "instance",
          get: function get() {
            if (!this._instance || this._instance._destroyed) {
              this._instance = new GlobalMgr();
              this._instance.init();
            }
            return this._instance;
          }
        }]);
        return GlobalMgr;
      }(BaseMgr));
      GlobalMgr._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GoodsIconNode.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SuitIconNode.ts', './ItemIconNode.ts', './Utils.ts', './Csv.ts', './ConfigUtils.ts', './LogMgr.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, SuitIconNode, ItemIconNode, Utils, Csv, eShopGoodsType, LogMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      SuitIconNode = module.SuitIconNode;
    }, function (module) {
      ItemIconNode = module.ItemIconNode;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      Csv = module.Csv;
    }, function (module) {
      eShopGoodsType = module.eShopGoodsType;
    }, function (module) {
      LogMgr = module.LogMgr;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "39e7a5Gq8RI7JB65vzFHBV2", "GoodsIconNode", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GoodsIconNode = exports('GoodsIconNode', (_dec = ccclass('GoodsIconNode'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GoodsIconNode, _Component);
        function GoodsIconNode() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._isInitNode = false;
          //DATA
          _this.shopId = undefined;
          _this.goodsType = eShopGoodsType.SUIT;
          _this.goodsId = 0;
          //UI
          _this._suitNode = void 0;
          _this._itemNode = void 0;
          return _this;
        }
        var _proto = GoodsIconNode.prototype;
        _proto.onLoad = function onLoad() {
          this._initNode();
          this._initEvent();
        };
        _proto._initNode = function _initNode() {
          if (this._isInitNode) return;
          this._isInitNode = true;
          this._initUI();
        };
        _proto._initUI = function _initUI() {
          this._suitNode = Utils.checkChildComponent(this.node, "SuitNode", SuitIconNode);
          this._itemNode = Utils.checkChildComponent(this.node, "ItemNode", ItemIconNode);
        };
        _proto._initEvent = function _initEvent() {};
        _proto.init = function init(params, data) {
          this.initParam(params);
          this.initWithData(data);
        };
        _proto.initParam = function initParam(params) {
          if (!params) return;
        };
        _proto.initWithData = function initWithData(data) {
          this._initNode();
          this.initData(data);
          this.bindDataToUI();
        };
        _proto.initData = function initData(data) {
          var _data$goodsType, _data$goodsId;
          this.shopId = data == null ? void 0 : data.shopId;
          this.goodsType = (_data$goodsType = data == null ? void 0 : data.goodsType) != null ? _data$goodsType : eShopGoodsType.ITEM;
          this.goodsId = (_data$goodsId = data == null ? void 0 : data.goodsId) != null ? _data$goodsId : 0;
        };
        _proto.bindDataToUI = function bindDataToUI() {
          var _this$goodsType, _this$goodsId;
          Utils.setActive(this._suitNode, false);
          Utils.setActive(this._itemNode, false);
          var _type = (_this$goodsType = this.goodsType) != null ? _this$goodsType : 0;
          var _goodsId = (_this$goodsId = this.goodsId) != null ? _this$goodsId : 0;
          if (this.shopId != undefined) {
            var _shopConfig$Type, _shopConfig$GoodsId;
            var shopConfig = Csv.Shop[this.shopId];
            if (!shopConfig) {
              LogMgr.log("shop config null, shopId: " + this.shopId);
              return;
            }
            _type = (_shopConfig$Type = shopConfig.Type) != null ? _shopConfig$Type : 0;
            _goodsId = (_shopConfig$GoodsId = shopConfig.GoodsId) != null ? _shopConfig$GoodsId : 0;
          }
          if (_type == eShopGoodsType.SUIT) {
            Utils.setActive(this._suitNode, true);
            this._suitNode.initWithData({
              suitId: _goodsId
            });
          } else if (_type == eShopGoodsType.ITEM) {
            Utils.setActive(this._itemNode, true);
            this._itemNode.initWithData({
              itemId: _goodsId
            });
          }
        };
        return GoodsIconNode;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HeadFrame.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Csv.ts', './AssetUtil.ts', './ConfigUtils.ts', './Utils.ts', './LogMgr.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Sprite, Component, Csv, AssetUtil, ConfigUtils, Utils, LogMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      Csv = module.Csv;
    }, function (module) {
      AssetUtil = module.AssetUtil;
    }, function (module) {
      ConfigUtils = module.ConfigUtils;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      LogMgr = module.LogMgr;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "28a26uTukBJ45bHjm3pGim5", "HeadFrame", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var HeadFrame = exports('HeadFrame', (_dec = ccclass('HeadFrame'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HeadFrame, _Component);
        function HeadFrame() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._isInitNode = false;
          //DATA
          _this.frameId = 0;
          //UI
          _this._icon = void 0;
          return _this;
        }
        var _proto = HeadFrame.prototype;
        _proto.onLoad = function onLoad() {
          this._initNode();
          this._initEvent();
        };
        _proto._initNode = function _initNode() {
          if (this._isInitNode) return;
          this._isInitNode = true;
          this._initUI();
        };
        _proto._initUI = function _initUI() {
          this._icon = Utils.checkChildComponent(this.node, "Icon", Sprite);
        };
        _proto._initEvent = function _initEvent() {};
        _proto.init = function init(params, data) {
          this.initParam(params);
          this.initWithData(data);
        };
        _proto.initParam = function initParam(params) {
          if (!params) return;
        };
        _proto.initWithData = function initWithData(data) {
          this._initNode();
          this.initData(data);
          this.bindDataToUI();
        };
        _proto.initData = function initData(data) {
          var _data$frameId;
          this.frameId = (_data$frameId = data == null ? void 0 : data.frameId) != null ? _data$frameId : 0;
        };
        _proto.bindDataToUI = function bindDataToUI() {
          var _config$ItemIcon;
          this._icon.spriteFrame = null;
          var config = Csv.Decoration[this.frameId];
          if (!config) {
            LogMgr.log("decoration config null, frameId: " + this.frameId);
          }
          var img = (_config$ItemIcon = config == null ? void 0 : config.ItemIcon) != null ? _config$ItemIcon : ConfigUtils.DEFAULT_IMG_HEAD_FRAME;
          AssetUtil.setSpriteFrameByAtlas(this._icon.node, img);
        };
        return HeadFrame;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HeadIcon.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LogMgr.ts', './AssetUtil.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Sprite, isValid, assetManager, SpriteFrame, Texture2D, Component, LogMgr, AssetUtil;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      isValid = module.isValid;
      assetManager = module.assetManager;
      SpriteFrame = module.SpriteFrame;
      Texture2D = module.Texture2D;
      Component = module.Component;
    }, function (module) {
      LogMgr = module.LogMgr;
    }, function (module) {
      AssetUtil = module.AssetUtil;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "aa490eh8TxKQr9Ztn8GNgsS", "HeadIcon", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var HeadIcon = exports('HeadIcon', (_dec = ccclass('HeadIcon'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HeadIcon, _Component);
        function HeadIcon() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._iconSprite = void 0;
          _this._defaultSf = null;
          _this._assetMgrComp = void 0;
          _this._isInited = false;
          return _this;
        }
        var _proto = HeadIcon.prototype;
        _proto.onLoad = function onLoad() {
          this._initNodes();
        };
        _proto._initNodes = function _initNodes() {
          if (this._isInited) return;
          this._isInited = true;
          this._iconSprite = this.node.getChildByName("Icon").getComponent(Sprite);
          this._defaultSf = this._iconSprite.spriteFrame;
          if (this._defaultSf) {
            this._defaultSf.packable = false;
          }
          this._assetMgrComp = AssetUtil.checkAssetMgrComp(this.node);
        };
        _proto.setHeadUrl = function setHeadUrl(headUrl) {
          var _this2 = this;
          this._initNodes();
          if (!headUrl || headUrl.length == 0) {
            this.setToDefault();
            return;
          }
          var cacheSp = HeadIcon.sHeadSpriteCaches.get(headUrl);
          if (cacheSp && isValid(cacheSp)) {
            this._iconSprite.spriteFrame = cacheSp;
          } else {
            assetManager.loadRemote(headUrl, function (err, imageAsset) {
              if (!err) {
                if (!isValid(_this2) || !isValid(_this2._iconSprite)) return;
                _this2._assetMgrComp.addAsset(imageAsset, headUrl);
                var spriteFrame = new SpriteFrame();
                var texture = new Texture2D();
                texture.image = imageAsset;
                spriteFrame.packable = false;
                spriteFrame.texture = texture;
                _this2._iconSprite.spriteFrame = spriteFrame;
                //处理缓存
                HeadIcon.sHeadSpriteCaches.set(headUrl, spriteFrame);
              } else {
                LogMgr.log("load head icon err!", err);
                if (!isValid(_this2)) return;
                _this2.setToDefault();
              }
            });
          }
        };
        _proto.setToDefault = function setToDefault() {
          this._initNodes();
          if (isValid(this._iconSprite)) {
            this._iconSprite.spriteFrame = this._defaultSf;
          }
        };
        return HeadIcon;
      }(Component), _class2.sHeadSpriteCaches = new Map(), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HeadNode.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HeadIcon.ts', './HeadFrame.ts', './Utils.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, HeadIcon, HeadFrame, Utils;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      HeadIcon = module.HeadIcon;
    }, function (module) {
      HeadFrame = module.HeadFrame;
    }, function (module) {
      Utils = module.Utils;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "a691dnprEVONZgDEEHD6e1N", "HeadNode", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var HeadNode = exports('HeadNode', (_dec = ccclass('HeadNode'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HeadNode, _Component);
        function HeadNode() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._isInitNode = false;
          //DATA
          _this.headUrl = "";
          _this.headFrameId = 0;
          //UI
          _this._headIcon = void 0;
          _this._headFrame = void 0;
          return _this;
        }
        var _proto = HeadNode.prototype;
        _proto.onLoad = function onLoad() {
          this._initNode();
          this._initEvent();
        };
        _proto._initNode = function _initNode() {
          if (this._isInitNode) return;
          this._isInitNode = true;
          this._initUI();
        };
        _proto._initUI = function _initUI() {
          this._headIcon = Utils.checkChildComponent(this.node, "headIcon", HeadIcon);
          this._headFrame = Utils.checkChildComponent(this.node, "headFrame", HeadFrame);
        };
        _proto._initEvent = function _initEvent() {};
        _proto.init = function init(params, data) {
          this.initParam(params);
          this.initWithData(data);
        };
        _proto.initParam = function initParam(params) {
          if (!params) return;
        };
        _proto.initWithData = function initWithData(data) {
          this._initNode();
          this.initData(data);
          this.bindDataToUI();
        };
        _proto.initData = function initData(data) {
          var _data$headUrl, _data$headFrameId;
          this.headUrl = (_data$headUrl = data == null ? void 0 : data.headUrl) != null ? _data$headUrl : "";
          this.headFrameId = (_data$headFrameId = data == null ? void 0 : data.headFrameId) != null ? _data$headFrameId : 0;
        };
        _proto.bindDataToUI = function bindDataToUI() {
          this._headIcon.setHeadUrl(this.headUrl);
          this._headFrame.initWithData({
            frameId: this.headFrameId
          });
        };
        return HeadNode;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/I18n.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Constants.ts', './StringUtil.ts', './LoadMgr.ts', './StorageConst.ts', './LocalStorage.ts', './LocalizedLabel.ts', './WinMgr.ts'], function (exports) {
  var _createClass, cclegacy, isValid, sys, director, Label, RichText, TextAsset, Font, Constants, StringUtil, LoadMgr, StorageConst, LocalStorage, LocalizedLabel, WinMgr;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      isValid = module.isValid;
      sys = module.sys;
      director = module.director;
      Label = module.Label;
      RichText = module.RichText;
      TextAsset = module.TextAsset;
      Font = module.Font;
    }, function (module) {
      Constants = module.Constants;
    }, function (module) {
      StringUtil = module.StringUtil;
    }, function (module) {
      LoadMgr = module.LoadMgr;
    }, function (module) {
      StorageConst = module.StorageConst;
    }, function (module) {
      LocalStorage = module.LocalStorage;
    }, function (module) {
      LocalizedLabel = module.LocalizedLabel;
    }, function (module) {
      WinMgr = module.WinMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "39535UYajBCWqCoHaF7fsB2", "I18n", undefined);
      function parse_lang(txt) {
        var result = {};
        txt.split("\n").forEach(function (line) {
          line = line.replace(/\r+$/, '');
          if (line == "") return;
          var numPos = line.indexOf(":");
          var id = line.substring(0, numPos);
          var value = line.substring(numPos + 1);
          // 换行符变成\\n了  这里要转下
          value = value.replace(/\\n/g, "\n");
          result[Number(id)] = value;
        });
        return result;
      }
      var I18n = exports('I18n', /*#__PURE__*/function () {
        function I18n() {}
        /**
         * 初始化
         * @param language 
         */
        I18n.init = function init(language) {
          var _language;
          language = (_language = language) != null ? _language : this.getSelectedLang();
          this.setSelectedLang(language);
        };
        I18n.destroy = function destroy() {
          for (var _k in this._langFonts) {
            isValid(this._langFonts[_k]) && this._langFonts[_k].decRef();
          }
          this._langFonts = {};
          this._langs = {};
        };
        I18n.setSelectedLang = function setSelectedLang(lang) {
          if (lang == null || lang == undefined) return;
          LocalStorage.set(StorageConst.GameConst.LANG, lang);
          if (this._language != lang) {
            // 释放掉上一个语言的
            if (isValid(this._langFonts[this._language])) this._langFonts[this._language].decRef();
            delete this._langFonts[this._language];
            delete this._langs[this._language];
            this._language = lang;
          }
        };
        I18n.getSelectedLang = function getSelectedLang() {
          if (this.fixLang != undefined && this.fixLang != "") return this.fixLang;
          var lang = LocalStorage.get(StorageConst.GameConst.LANG);
          if (!lang) {
            lang = sys.languageCode;
            lang = lang.substring(0, 2);
            if (lang == "zh") {
              lang = Constants.LANG.CN;
            } else {
              lang = Constants.LANG.En;
            }
          }
          return lang;
        };
        I18n.getCurLangFont = function getCurLangFont(cb) {
          var _this = this;
          var langKey = this._language;
          var tmpFont = this._langFonts[langKey];
          if (isValid(tmpFont)) {
            cb && cb(tmpFont);
            return;
          }
          var fntName = Constants.LANG_FNT[langKey];
          if (fntName === null) return;
          LoadMgr.instance.loadFont(fntName, function (font) {
            var oldData = _this._langFonts[langKey];
            if (oldData == font) {
              cb && cb(font);
              return;
            }
            oldData == null || oldData.decRef();
            font.addRef();
            _this._langFonts[langKey] = font;
            cb && cb(font);
          });
        }

        /**
         * 翻译文本数据
         * @param key 
         */;
        I18n.t = function t(key) {
          if (key == null) return "";
          var info = this._langs[this._language];
          if (!info) {
            console.error("language conf not found: " + this._language);
            return "";
          }
          var data = info[key];
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          if (args.length > 0 && data) {
            data = StringUtil.Format.apply(StringUtil, [data].concat(args));
          }
          return data || 'undefine' + key;
        }

        // 更新场景Canvas下所有Label文本
        ;

        I18n.updateSceneLabelsText = function updateSceneLabelsText() {
          var _director$getScene;
          var canvas = (_director$getScene = director.getScene()) == null ? void 0 : _director$getScene.getChildByName("Canvas");
          var comps = canvas == null ? void 0 : canvas.getComponentsInChildren(LocalizedLabel);
          if (comps === undefined) return;
          for (var i = 0; i < comps.length; ++i) {
            var label = comps[i];
            label.updateLabel();
          }
        }

        // 更新场景Canvas下所有Label字体
        ;

        I18n.updateSceneLabelsFnt = function updateSceneLabelsFnt(cb) {
          var _director$getScene2;
          var canvas = (_director$getScene2 = director.getScene()) == null ? void 0 : _director$getScene2.getChildByName("Canvas");
          this.updateRootNodeFnts(canvas, cb);
        }

        // 更新根节点下所有Label字体
        ;

        I18n.updateRootNodeFnts = function updateRootNodeFnts(root, cb) {
          if (root === null || root === undefined) return;
          this.getCurLangFont(function (font) {
            if (!isValid(root)) {
              cb && cb();
              return;
            }
            var comps = root.getComponentsInChildren(LocalizedLabel);
            if (comps === undefined) return;
            for (var i = 0; i < comps.length; ++i) {
              var label = comps[i];
              label.setFont(font);
            }
            cb && cb();
          });
        }

        // 更新Label节点字体
        ;

        I18n.updateNodeFnt = function updateNodeFnt(node, cb) {
          if (!node) {
            cb && cb();
            return;
          }
          this.getCurLangFont(function (font) {
            if (!isValid(node)) {
              cb && cb();
              return;
            }
            var label = node.getComponent(LocalizedLabel);
            label && label.setFont(font);
            cb && cb();
          });
        }

        // 设置Label节点文本
        ;

        I18n.setLabelText = function setLabelText(node, keyOrText) {
          if (!node) return;
          if (!isValid(node)) return;
          if (node instanceof Label) {
            node = node.node;
          } else if (node instanceof RichText) {
            node = node.node;
          }
          var cmp = node.getComponent(LocalizedLabel);
          if (cmp === null) {
            cmp = node.addComponent(LocalizedLabel);
          }
          for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }
          cmp && cmp.setText(keyOrText, args);
        }

        // 切换语言应该还是要切换场景,因为:
        // 1:有些Label设置的文本是通过多个字符串拼接的,而不是简单的(语言ID+参数),如:DateUtil.getPassedTime()
        // 2:文本更新后刷新排版问题,如左边icon右边Label两个整体居中,刷新文本后还要处理刷新位置
        ;

        I18n.switchLanguage = function switchLanguage(lang, cb) {
          console.log("switch language");
          if (this._language == lang) {
            cb && cb();
            return;
          }
          var lockTag = WinMgr.instance.lockScreen(10);
          this.loadLang(undefined, function (b) {
            WinMgr.instance.unLockScreen(lockTag);
            cb && cb();
          }, lang);
        };
        I18n.loadLang = function loadLang(progress, complete, lang) {
          var _this2 = this;
          lang = lang || I18n.getSelectedLang();
          var assetsInfo = [{
            path: lang,
            type: TextAsset,
            bundleName: "lang"
          }, {
            path: Constants.LANG_FNT[lang],
            type: Font,
            bundleName: "font"
          }];
          LoadMgr.instance.loadAssets(assetsInfo, progress, function (success) {
            if (success) {
              _this2.init(lang);
            }
            complete && complete(success);
          }, function (data) {
            if (data instanceof Font) {
              var oldData = _this2._langFonts[lang];
              if (oldData == data) return;
              oldData == null || oldData.decRef();
              data.addRef();
              _this2._langFonts[lang] = data;
            } else if (data instanceof TextAsset) {
              _this2._langs[lang] = parse_lang(data.text);
            }
          });
        };
        I18n.getSpriteNameForLang = function getSpriteNameForLang(name) {
          if (name == null || name == "") {
            return "";
          }
          var lang = this.language;
          var langName = name;
          if (lang == Constants.LANG.CN || lang == "") {
            //中文为默认
            langName = name;
          } else {
            langName = name + "_" + lang;
          }
          return langName;
        };
        I18n.getSpineNameForLang = function getSpineNameForLang(name) {
          if (name == null || name == "") {
            return "";
          }
          var lang = this.language;
          var langName = name;
          if (lang == Constants.LANG.CN || lang == "") {
            //中文为默认
            langName = name;
          } else {
            langName = name + "_" + lang;
          }
          return langName;
        };
        _createClass(I18n, null, [{
          key: "language",
          get: function get() {
            return this._language;
          }
        }]);
        return I18n;
      }());
      I18n.fixLang = Constants.LANG.CN;
      I18n._language = "";
      I18n._langFonts = {};
      I18n._langs = {};
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IMainViewPanel.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bff15l3EApDX7QhV161CtCH", "IMainViewPanel", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/InputWin.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './WinMgr.ts', './WinBase.ts', './Utils.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, EditBox, WIN_TYPE, WIN_MASK_TYPE, WinBase, Utils, AddBtnClick, handler;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EditBox = module.EditBox;
    }, function (module) {
      WIN_TYPE = module.WIN_TYPE;
      WIN_MASK_TYPE = module.WIN_MASK_TYPE;
    }, function (module) {
      WinBase = module.WinBase;
    }, function (module) {
      Utils = module.Utils;
      AddBtnClick = module.AddBtnClick;
      handler = module.handler;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "7b081mZQ4ZLsJ5bz+Gmr98V", "InputWin", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var InputWin = exports('InputWin', (_dec = ccclass('InputWin'), _dec(_class = /*#__PURE__*/function (_WinBase) {
        _inheritsLoose(InputWin, _WinBase);
        function InputWin() {
          var _this;
          _this = _WinBase.call(this) || this;
          _this._isInitNode = false;
          //UI
          _this._root = void 0;
          _this._inputBox = void 0;
          _this._okBtn = void 0;
          _this._inputCallback = void 0;
          _this.showType = WIN_TYPE.NORMAL;
          _this.maskType = WIN_MASK_TYPE.DARK;
          _this._listeners = [];
          return _this;
        }
        var _proto = InputWin.prototype;
        _proto.onLoad = function onLoad() {
          _WinBase.prototype.onLoad.call(this);
          this._initNode();
          this._initEvent();
        };
        _proto._initNode = function _initNode() {
          if (this._isInitNode) return;
          this._isInitNode = true;
          this._initUI();
        };
        _proto._initUI = function _initUI() {
          this._root = this.node.getChildByName("root");
          this._inputBox = Utils.checkChildComponent(this._root, "EditBox", EditBox);
          this._okBtn = this._root.getChildByName("okBtn");
        };
        _proto._initEvent = function _initEvent() {
          AddBtnClick(this._okBtn, handler(this, this.onClickOkBtn));
        };
        _proto.initParam = function initParam(params) {
          if (params) {
            this._inputCallback = params.inputCallback;
          }
          this._initNode();
          this.bindDataToUI();
        };
        _proto.bindDataToUI = function bindDataToUI() {};
        _proto.onClickOkBtn = function onClickOkBtn() {
          var str = this._inputBox.string;
          console.log("input: " + str);
          if (!str || str.length == 0) return;
          var func = this._inputCallback;
          this.close();
          func && func(str);
        };
        return InputWin;
      }(WinBase)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ItemIconNode.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Utils.ts', './Csv.ts', './AssetUtil.ts', './LogMgr.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Sprite, Component, Utils, Csv, AssetUtil, LogMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      Csv = module.Csv;
    }, function (module) {
      AssetUtil = module.AssetUtil;
    }, function (module) {
      LogMgr = module.LogMgr;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "27dccnGbmNO+pcKz4LB8zLX", "ItemIconNode", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ItemIconNode = exports('ItemIconNode', (_dec = ccclass('ItemIconNode'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ItemIconNode, _Component);
        function ItemIconNode() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._isInitNode = false;
          //DATA
          _this.itemId = 0;
          _this.itemConfig = void 0;
          //UI
          _this._icon = void 0;
          return _this;
        }
        var _proto = ItemIconNode.prototype;
        _proto.onLoad = function onLoad() {
          this._initNode();
          this._initEvent();
        };
        _proto._initNode = function _initNode() {
          if (this._isInitNode) return;
          this._isInitNode = true;
          this._initUI();
        };
        _proto._initUI = function _initUI() {
          this._icon = Utils.checkChildComponent(this.node, "ItemIcon", Sprite);
        };
        _proto._initEvent = function _initEvent() {};
        _proto.init = function init(params, data) {
          this.initParam(params);
          this.initWithData(data);
        };
        _proto.initParam = function initParam(params) {
          if (!params) return;
        };
        _proto.initWithData = function initWithData(data) {
          this._initNode();
          this.initData(data);
          this.bindDataToUI();
        };
        _proto.initData = function initData(data) {
          var _data$itemId;
          this.itemId = (_data$itemId = data == null ? void 0 : data.itemId) != null ? _data$itemId : 0;
          this.itemConfig = Csv.Item[this.itemId];
          if (!this.itemConfig) {
            LogMgr.log("item config null, itemId: " + this.itemId);
          }
        };
        _proto.bindDataToUI = function bindDataToUI() {
          var _this$itemConfig;
          var itemImg = (_this$itemConfig = this.itemConfig) == null ? void 0 : _this$itemConfig.ItemIcon;
          this._icon.spriteFrame = null;
          if (itemImg && itemImg.length > 0) {
            AssetUtil.setSpriteFrameByAtlas(this._icon.node, itemImg);
          }
        };
        return ItemIconNode;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KsHttpProto.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Csv.ts', './EnumConfig.ts', './SortUtil.ts', './ConfigUtils.ts'], function (exports) {
  var _createClass, _createForOfIteratorHelperLoose, cclegacy, Csv, EnumConfig, SortUtil, eShopGoodsType;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Csv = module.Csv;
    }, function (module) {
      EnumConfig = module.EnumConfig;
    }, function (module) {
      SortUtil = module.SortUtil;
    }, function (module) {
      eShopGoodsType = module.eShopGoodsType;
    }],
    execute: function () {
      exports('KsHttpProto', void 0);
      cclegacy._RF.push({}, "ca76e5WFxlI+5tz7a6cvZYg", "KsHttpProto", undefined);
      var KsHttpProto;
      (function (_KsHttpProto) {
        var EMPTY_ARM_CLASS = "其它";
        var MONTH_RANK_MAX = _KsHttpProto.MONTH_RANK_MAX = 9999;
        var WEEK_RANK_MAX = _KsHttpProto.WEEK_RANK_MAX = 9999;
        var LoginReplyData = /*#__PURE__*/function () {
          function LoginReplyData() {
            this.code = 0;
            //状态码:0为成功
            this.msg = "";
            //消息
            this.openId = "";
            this.token = "";
            this._serverMs = 0;
            this._clientMs = 0;
          }
          _createClass(LoginReplyData, [{
            key: "serverTime",
            get: function get() {
              if (this._serverMs == 0) return 0;
              var curClientMs = new Date().getTime();
              var pastMs = Math.max(0, curClientMs - this._clientMs);
              var curServerMs = this._serverMs + pastMs;
              return curServerMs;
            },
            set: function set(v) {
              this._serverMs = v;
              this._clientMs = new Date().getTime();
            }
          }]);
          return LoginReplyData;
        }();
        _KsHttpProto.LoginReplyData = LoginReplyData;
        var BattleRecordInfo = function BattleRecordInfo() {
          this.camp = 0;
          //所在阵营 1：蓝方 2：橙方
          this.gameModel = 0;
          //游戏模式 1：正常 2：PK
          this.win = 0;
          //战斗情况 0：平局 1：胜利 2：失败
          this.score = 0;
          //本局积分
          this.incrWinStreak = 0;
          //新增连胜
          this.time = 0;
        } //结束时间
        ;

        _KsHttpProto.BattleRecordInfo = BattleRecordInfo;
        var PlayerTO = function PlayerTO() {
          this.openId = "";
          //玩家id
          this.nickname = "";
          //昵称
          this.head = "";
          //头像
          this.avatarFrame = 0;
          //头像框
          this.nameplate = 0;
          //铭牌
          this.title = 0;
          //称号
          this.winStreak = 0;
          //连胜
          this.killStreak = 0;
          //连杀
          this.score = 0;
          //积分
          this.battleCnt = 0;
          //战斗次数
          this.winCnt = 0;
          //胜利次数
          this.monthRank = 0;
          //月排行（排名最大9999，0表示无排名）
          this.weekRank = 0;
          //周排行（ 排名最大9999，0表示无排名）
          this.battleRecordInfos = [];
        } //战斗记录
        ;

        _KsHttpProto.PlayerTO = PlayerTO;
        var PlayerInfoReplyData = /*#__PURE__*/function () {
          function PlayerInfoReplyData() {
            this.code = 0;
            //状态码:0为成功
            this.msg = "";
            //消息
            this.data = void 0;
          }
          var _proto = PlayerInfoReplyData.prototype;
          //玩家基本数据
          _proto.getPlayerTO = function getPlayerTO() {
            var to = undefined;
            if (this.code == 0 && this.data != undefined) {
              to = this.data;
            }
            return to;
          };
          return PlayerInfoReplyData;
        }();
        _KsHttpProto.PlayerInfoReplyData = PlayerInfoReplyData;
        var DecorationTO = function DecorationTO() {
          this.id = 0;
          //装饰id，对应套装id和道具id
          this.type = 0;
          //类型 1：套装 2：道具
          this.usable = false;
          //是否使用中
          this.convertibility = false;
          //是否可以兑换
          this.owned = false;
        } //是否拥有
        ;

        _KsHttpProto.DecorationTO = DecorationTO;
        var PlayerDecorationReplyData = /*#__PURE__*/function () {
          function PlayerDecorationReplyData() {
            this.code = 0;
            //状态码:0为成功
            this.msg = "";
            //消息
            this.data = [];
          }
          var _proto2 = PlayerDecorationReplyData.prototype;
          _proto2.getDecorations = function getDecorations() {
            if (this.code == 0 && this.data != undefined) {
              return this.data;
            }
            return [];
          };
          _proto2.getSuitDecorations = function getSuitDecorations() {
            var arr = this.getDecorations();
            var ret = [];
            for (var _iterator = _createForOfIteratorHelperLoose(arr), _step; !(_step = _iterator()).done;) {
              var v = _step.value;
              if (v.type == eShopGoodsType.SUIT) {
                ret.push(v);
              }
            }
            return ret;
          };
          _proto2.getAppearEffectDecorations = function getAppearEffectDecorations() {
            var arr = this.getDecorations();
            var ret = [];
            for (var _iterator2 = _createForOfIteratorHelperLoose(arr), _step2; !(_step2 = _iterator2()).done;) {
              var v = _step2.value;
              if (v.type == eShopGoodsType.ITEM) {
                var _id = v.id;
                var _config = Csv.Item[_id];
                if (!_config) continue;
                if (_config.Type == EnumConfig.ItemType.JOIN_EFFECT) {
                  ret.push(v);
                }
              }
            }
            return ret;
          };
          _proto2.getSoldierEffectDecorations = function getSoldierEffectDecorations() {
            var arr = this.getDecorations();
            var ret = [];
            for (var _iterator3 = _createForOfIteratorHelperLoose(arr), _step3; !(_step3 = _iterator3()).done;) {
              var v = _step3.value;
              if (v.type == eShopGoodsType.ITEM) {
                var _id = v.id;
                var _config = Csv.Item[_id];
                if (!_config) continue;
                if (_config.Type == EnumConfig.ItemType.SOLDIER_SKIN || _config.Type == EnumConfig.ItemType.BUFF_SKIN) {
                  ret.push(v);
                }
              }
            }
            return ret;
          };
          _proto2.getSoldierEffectArmClassDecorationDatas = function getSoldierEffectArmClassDecorationDatas() {
            var dict = new Map();
            var arr = this.getSoldierEffectDecorations();
            for (var _iterator4 = _createForOfIteratorHelperLoose(arr), _step4; !(_step4 = _iterator4()).done;) {
              var _config$ArmClass;
              var v = _step4.value;
              var _id = v.id;
              var _config = Csv.Item[_id];
              if (!_config) continue;
              var _armClass = (_config$ArmClass = _config.ArmClass) != null ? _config$ArmClass : "";
              var _decorations = dict.get(_armClass);
              if (!_decorations) {
                _decorations = [];
                dict.set(_armClass, _decorations);
              }
              if (_decorations) {
                _decorations.push(v);
              }
            }
            var ret = [];
            var emptyArmClassData = undefined;
            for (var _iterator5 = _createForOfIteratorHelperLoose(dict.entries()), _step5; !(_step5 = _iterator5()).done;) {
              var _step5$value = _step5.value,
                k = _step5$value[0],
                _v = _step5$value[1];
              if (k.length > 0) {
                ret.push({
                  armClass: k,
                  decorationDatas: _v
                });
              } else {
                emptyArmClassData = _v;
              }
            }
            SortUtil.sortMultiCondition(ret, [{
              key: "armClass",
              ascending: true
            }]);
            if (emptyArmClassData) {
              ret.push({
                armClass: EMPTY_ARM_CLASS,
                decorationDatas: emptyArmClassData
              });
            }
            return ret;
          };
          return PlayerDecorationReplyData;
        }();
        _KsHttpProto.PlayerDecorationReplyData = PlayerDecorationReplyData;
        var PlayerRankTO = function PlayerRankTO() {
          this.nickname = "";
          //昵称
          this.head = "";
          //头像
          this.avatarFrame = 0;
          //头像框
          this.nameplate = 0;
          //铭牌
          this.title = 0;
          //称号
          this.winStreak = 0;
          //连胜
          this.killStreak = 0;
          //连杀
          this.score = 0;
          //积分
          this.rank = 0;
        } //排名
        ;

        _KsHttpProto.PlayerRankTO = PlayerRankTO;
        var RankTO = function RankTO() {
          this.monthRank = [];
          //月榜
          this.weekRank = [];
        } //周榜
        ;

        _KsHttpProto.RankTO = RankTO;
        var PlayerRankReplyData = /*#__PURE__*/function () {
          function PlayerRankReplyData() {
            this.code = 0;
            //状态码:0为成功
            this.msg = "";
            //消息
            this.data = void 0;
          }
          var _proto3 = PlayerRankReplyData.prototype;
          //排行榜数据
          _proto3.getRankTO = function getRankTO() {
            var to = undefined;
            if (this.code == 0 && this.data != undefined) {
              to = this.data;
            }
            return to;
          };
          return PlayerRankReplyData;
        }();
        _KsHttpProto.PlayerRankReplyData = PlayerRankReplyData;
        var GoodsTO = function GoodsTO() {
          this.goodsId = 0;
          //商品id ShopStruct表中的id
          this.playerPurchasesTimes = 0;
          //玩家购买次数
          this.totalPurchasesTimes = 0;
        } //商品总购买次数
        ;

        _KsHttpProto.GoodsTO = GoodsTO;
        var ShopListTO = function ShopListTO() {
          this.nextRefreshTime = 0;
          //下次刷新时间
          this.goods = [];
        } //商品信息
        ;

        _KsHttpProto.ShopListTO = ShopListTO;
        var ShopListReplyData = /*#__PURE__*/function () {
          function ShopListReplyData() {
            this.code = 0;
            //状态码:0为成功
            this.msg = "";
            //消息
            this.data = void 0;
          }
          var _proto4 = ShopListReplyData.prototype;
          _proto4.getShopListTO = function getShopListTO() {
            var to = undefined;
            if (this.code == 0 && this.data != undefined) {
              to = this.data;
            }
            return to;
          };
          _proto4.getNextRefreshTime = function getNextRefreshTime() {
            var _to$nextRefreshTime;
            var to = this.getShopListTO();
            return (_to$nextRefreshTime = to == null ? void 0 : to.nextRefreshTime) != null ? _to$nextRefreshTime : 0;
          };
          _proto4.getGoodsTO = function getGoodsTO() {
            var _to$goods;
            var to = this.getShopListTO();
            return (_to$goods = to == null ? void 0 : to.goods) != null ? _to$goods : [];
          };
          return ShopListReplyData;
        }();
        _KsHttpProto.ShopListReplyData = ShopListReplyData;
        var ShopBuyReplyData = function ShopBuyReplyData() {
          this.code = 0;
          //状态码:0为成功
          this.msg = "";
          //消息
          this.data = void 0;
        };
        _KsHttpProto.ShopBuyReplyData = ShopBuyReplyData;
        var PlayerUseDecorationReplyData = function PlayerUseDecorationReplyData() {
          this.code = 0;
          //状态码:0为成功
          this.msg = "";
          //消息
          this.data = void 0;
        };
        _KsHttpProto.PlayerUseDecorationReplyData = PlayerUseDecorationReplyData;
      })(KsHttpProto || (KsHttpProto = exports('KsHttpProto', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KsHttpProtoConvert.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SortUtil.ts', './KsHttpProto.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, SortUtil, KsHttpProto;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      SortUtil = module.SortUtil;
    }, function (module) {
      KsHttpProto = module.KsHttpProto;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3074f3qk69NBZAY5mZHvoiH", "KsHttpProtoConvert", undefined);
      var KsHttpProtoConvert = exports('KsHttpProtoConvert', /*#__PURE__*/function () {
        function KsHttpProtoConvert() {}
        KsHttpProtoConvert.ToNum = function ToNum(data) {
          var num = Number(data != null ? data : 0);
          return !isNaN(num) ? num : 0;
        };
        KsHttpProtoConvert.ToStr = function ToStr(data) {
          return String(data != null ? data : "");
        };
        KsHttpProtoConvert.ToBool = function ToBool(data) {
          if (data === true || data === "true") return true;
          return false;
        };
        KsHttpProtoConvert.ToJson = function ToJson(data) {
          if (typeof data == "string") {
            try {
              return JSON.parse(data);
            } catch (e) {
              console.error(e);
            }
            return {};
          }
          return data;
        };
        KsHttpProtoConvert.ToLoginReplyData = function ToLoginReplyData(data) {
          var ret = new KsHttpProto.LoginReplyData();
          if (data) {
            ret.code = this.ToNum(data.code);
            ret.msg = this.ToStr(data.msg);
            var _data = this.ToJson(data.data);
            if (_data) {
              ret.openId = this.ToStr(_data.openId);
              ret.token = this.ToStr(_data.token);
              ret.serverTime = this.ToNum(_data.serverTime);
            }
          }
          return ret;
        };
        KsHttpProtoConvert.ToBattleRecordInfo = function ToBattleRecordInfo(data) {
          var ret = new KsHttpProto.BattleRecordInfo();
          if (data) {
            ret.camp = this.ToNum(data.camp);
            ret.gameModel = this.ToNum(data.gameModel);
            ret.win = this.ToNum(data.win);
            ret.score = this.ToNum(data.score);
            ret.incrWinStreak = this.ToNum(data.incrWinStreak);
            ret.time = this.ToNum(data.time);
          }
          return ret;
        };
        KsHttpProtoConvert.ToPlayerTO = function ToPlayerTO(data) {
          var ret = new KsHttpProto.PlayerTO();
          if (data) {
            ret.openId = this.ToStr(data.openId);
            ret.nickname = this.ToStr(data.nickname);
            ret.head = this.ToStr(data.head);
            ret.avatarFrame = this.ToNum(data.avatarFrame);
            ret.nameplate = this.ToNum(data.nameplate);
            ret.title = this.ToNum(data.title);
            ret.winStreak = this.ToNum(data.winStreak);
            ret.killStreak = this.ToNum(data.killStreak);
            ret.score = this.ToNum(data.score);
            ret.battleCnt = this.ToNum(data.battleCnt);
            ret.winCnt = this.ToNum(data.winCnt);
            ret.monthRank = this.ToNum(data.monthRank);
            ret.weekRank = this.ToNum(data.weekRank);
            ret.battleRecordInfos = [];
            var battleRecordInfos = data.battleRecordInfos;
            if (Array.isArray(battleRecordInfos)) {
              for (var _iterator = _createForOfIteratorHelperLoose(battleRecordInfos), _step; !(_step = _iterator()).done;) {
                var v = _step.value;
                ret.battleRecordInfos.push(this.ToBattleRecordInfo(v));
              }
            }
            SortUtil.sortMultiCondition(ret.battleRecordInfos, [{
              key: "time",
              ascending: false
            }]);
          }
          return ret;
        };
        KsHttpProtoConvert.ToPlayerInfoReplyData = function ToPlayerInfoReplyData(data) {
          var ret = new KsHttpProto.PlayerInfoReplyData();
          if (data) {
            ret.code = this.ToNum(data.code);
            ret.msg = this.ToStr(data.msg);
            var player = data.data;
            if (player) {
              ret.data = this.ToPlayerTO(player);
            }
          }
          return ret;
        };
        KsHttpProtoConvert.ToDecorationTO = function ToDecorationTO(data) {
          var ret = new KsHttpProto.DecorationTO();
          if (data) {
            ret.id = this.ToNum(data.id);
            ret.type = this.ToNum(data.type);
            ret.usable = this.ToBool(data.usable);
            ret.convertibility = this.ToBool(data.convertibility);
            ret.owned = this.ToBool(data.owned);
          }
          return ret;
        };
        KsHttpProtoConvert.ToPlayerDecorationReplyData = function ToPlayerDecorationReplyData(data) {
          var ret = new KsHttpProto.PlayerDecorationReplyData();
          if (data) {
            ret.code = this.ToNum(data.code);
            ret.msg = this.ToStr(data.msg);
            ret.data.length = 0;
            var decorations = data.data;
            if (Array.isArray(decorations)) {
              for (var _iterator2 = _createForOfIteratorHelperLoose(decorations), _step2; !(_step2 = _iterator2()).done;) {
                var v = _step2.value;
                ret.data.push(this.ToDecorationTO(v));
              }
            }
          }
          return ret;
        };
        KsHttpProtoConvert.ToPlayerRankTO = function ToPlayerRankTO(data) {
          var ret = new KsHttpProto.PlayerRankTO();
          if (data) {
            ret.nickname = this.ToStr(data.nickname);
            ret.head = this.ToStr(data.head);
            ret.avatarFrame = this.ToNum(data.avatarFrame);
            ret.nameplate = this.ToNum(data.nameplate);
            ret.title = this.ToNum(data.title);
            ret.winStreak = this.ToNum(data.winStreak);
            ret.killStreak = this.ToNum(data.killStreak);
            ret.score = this.ToNum(data.score);
            ret.rank = this.ToNum(data.rank);
          }
          return ret;
        };
        KsHttpProtoConvert.ToRankTO = function ToRankTO(data) {
          var ret = new KsHttpProto.RankTO();
          if (data) {
            ret.monthRank = [];
            var monthRank = data.monthRank;
            if (Array.isArray(monthRank)) {
              for (var _iterator3 = _createForOfIteratorHelperLoose(monthRank), _step3; !(_step3 = _iterator3()).done;) {
                var v = _step3.value;
                ret.monthRank.push(this.ToPlayerRankTO(v));
              }
            }
            ret.weekRank = [];
            var weekRank = data.weekRank;
            if (Array.isArray(weekRank)) {
              for (var _iterator4 = _createForOfIteratorHelperLoose(weekRank), _step4; !(_step4 = _iterator4()).done;) {
                var _v = _step4.value;
                ret.weekRank.push(this.ToPlayerRankTO(_v));
              }
            }
            SortUtil.sortMultiCondition(ret.monthRank, [{
              key: "rank",
              ascending: true
            }]);
            SortUtil.sortMultiCondition(ret.weekRank, [{
              key: "rank",
              ascending: true
            }]);
          }
          return ret;
        };
        KsHttpProtoConvert.ToPlayerRankReplyData = function ToPlayerRankReplyData(data) {
          var ret = new KsHttpProto.PlayerRankReplyData();
          if (data) {
            ret.code = this.ToNum(data.code);
            ret.msg = this.ToStr(data.msg);
            var rank = data.data;
            if (rank) {
              ret.data = this.ToRankTO(rank);
            }
          }
          return ret;
        };
        KsHttpProtoConvert.ToGoodsTO = function ToGoodsTO(data) {
          var ret = new KsHttpProto.GoodsTO();
          if (data) {
            ret.goodsId = this.ToNum(data.goodsId);
            ret.playerPurchasesTimes = this.ToNum(data.playerPurchasesTimes);
            ret.totalPurchasesTimes = this.ToNum(data.totalPurchasesTimes);
          }
          return ret;
        };
        KsHttpProtoConvert.ToShopListTO = function ToShopListTO(data) {
          var ret = new KsHttpProto.ShopListTO();
          if (data) {
            ret.nextRefreshTime = this.ToNum(data.nextRefreshTime);
            ret.goods = [];
            var goods = data.goods;
            if (Array.isArray(goods)) {
              for (var _iterator5 = _createForOfIteratorHelperLoose(goods), _step5; !(_step5 = _iterator5()).done;) {
                var v = _step5.value;
                ret.goods.push(this.ToGoodsTO(v));
              }
            }
          }
          return ret;
        };
        KsHttpProtoConvert.ToShopListReplyData = function ToShopListReplyData(data) {
          var ret = new KsHttpProto.ShopListReplyData();
          if (data) {
            ret.code = this.ToNum(data.code);
            ret.msg = this.ToStr(data.msg);
            var shop = data.data;
            if (shop) {
              ret.data = this.ToShopListTO(shop);
            }
          }
          return ret;
        };
        KsHttpProtoConvert.ToShopBuyReplyData = function ToShopBuyReplyData(data) {
          var ret = new KsHttpProto.ShopBuyReplyData();
          if (data) {
            ret.code = this.ToNum(data.code);
            ret.msg = this.ToStr(data.msg);
            if (data.data) {
              ret.data = this.ToStr(data.data);
            }
          }
          return ret;
        };
        KsHttpProtoConvert.ToPlayerUseDecorationReplyData = function ToPlayerUseDecorationReplyData(data) {
          var ret = new KsHttpProto.PlayerUseDecorationReplyData();
          if (data) {
            ret.code = this.ToNum(data.code);
            ret.msg = this.ToStr(data.msg);
            if (data.data) {
              ret.data = this.ToStr(data.data);
            }
          }
          return ret;
        };
        return KsHttpProtoConvert;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KsMiniGameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetMgr.ts', './LogMgr.ts', './BaseMgr.ts', './KsSdk.ts', './UIUtils.ts', './KsHttpProtoConvert.ts', './GameTimer.ts', './WinMgr.ts', './ChannelMgr.ts', './channel_config.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, isValid, NetMgr, LogMgr, BaseMgr, KsSdk, UIUtils, KsHttpProtoConvert, GameTimer, WinMgr, ChannelMgr, channel_config;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      isValid = module.isValid;
    }, function (module) {
      NetMgr = module.NetMgr;
    }, function (module) {
      LogMgr = module.LogMgr;
    }, function (module) {
      BaseMgr = module.BaseMgr;
    }, function (module) {
      KsSdk = module.KsSdk;
    }, function (module) {
      UIUtils = module.UIUtils;
    }, function (module) {
      KsHttpProtoConvert = module.KsHttpProtoConvert;
    }, function (module) {
      GameTimer = module.GameTimer;
    }, function (module) {
      WinMgr = module.WinMgr;
    }, function (module) {
      ChannelMgr = module.ChannelMgr;
    }, function (module) {
      channel_config = module.channel_config;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bbd35AnbhZO1IXBc9HVFHBb", "KsMiniGameMgr", undefined);
      var HttpTimeout = 8000;
      var TestJsCode = "";
      var KsMiniGameMgr = exports('KsMiniGameMgr', /*#__PURE__*/function (_BaseMgr) {
        _inheritsLoose(KsMiniGameMgr, _BaseMgr);
        function KsMiniGameMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseMgr.call.apply(_BaseMgr, [this].concat(args)) || this;
          _this._ksJsCode = "";
          _this._loginReplyData = undefined;
          _this._loginSuccessFunc = null;
          _this._loginSuccessTarget = void 0;
          return _this;
        }
        var _proto = KsMiniGameMgr.prototype;
        _proto.init = function init() {
          this._ksJsCode = "";
          this._loginReplyData = undefined;
          this._loginSuccessFunc = null;
          this._loginSuccessTarget = null;
        };
        _proto.resetLoginInfo = function resetLoginInfo() {
          this._ksJsCode = "";
          this._loginReplyData = undefined;
        };
        _proto.login = function login(successFunc, target) {
          if (!isValid(target) || !successFunc) {
            return;
          }
          this._loginSuccessFunc = successFunc;
          this._loginSuccessTarget = target;
          this.resetLoginInfo();
          this.ksLogin();
        };
        _proto.ksLogin = function ksLogin() {
          var _this2 = this;
          LogMgr.log("ksLogin start");
          if (TestJsCode.length > 0) {
            this._ksJsCode = TestJsCode;
            LogMgr.log("ksLogin: success, TestJsCode: " + TestJsCode);
            this.httpLogin();
            return;
          }
          if (ChannelMgr.isKsMiniGameWebTest()) {
            UIUtils.showInputWin(function (str) {
              _this2._ksJsCode = str;
              LogMgr.log("ksLogin: success, input JsCode: " + _this2._ksJsCode);
              _this2.httpLogin();
            });
            return;
          }
          KsSdk.ksLogin(function (resp) {
            if (!isValid(_this2)) return;
            if (!resp || !resp.success || !resp.code) {
              LogMgr.log("ksLogin: fail");
              _this2.showLoginFailDialog("登陆失败,请重试!", function () {
                if (!isValid(_this2)) return;
                if (!_this2._loginSuccessFunc) return;
                _this2.ksLogin();
              });
            } else {
              _this2._ksJsCode = resp.code;
              LogMgr.log("ksLogin: success, ksJsCode: " + _this2._ksJsCode);
              _this2.httpLogin();
            }
          });
        };
        _proto.httpLogin = function httpLogin() {
          var _this3 = this;
          LogMgr.log("httpLogin start");
          if (!this._ksJsCode || this._ksJsCode.length == 0) {
            LogMgr.log("httpLogin, ksJsCode null, to ksLogin");
            this.ksLogin();
            return;
          }
          var funcSuccess = function funcSuccess(resp) {
            LogMgr.log("httpLogin: success", resp);
            if (!isValid(_this3)) return;
            _this3._loginReplyData = KsHttpProtoConvert.ToLoginReplyData(resp);
            _this3._onLoginSuccess();
          };
          var funcFail = function funcFail(status) {
            LogMgr.log("httpLogin: fail, status: " + status);
            if (!isValid(_this3)) return;
            _this3.showLoginFailDialog("登陆服务器失败,请重试!", function () {
              if (!isValid(_this3)) return;
              if (!_this3._loginSuccessFunc) return;
              _this3.httpLogin();
            });
          };
          if (this.testLoginReply(funcSuccess)) {
            return;
          }
          var url = this.HttpUrl + "/login?";
          NetMgr.httpPost(url, {
            jsCode: this._ksJsCode
          }, undefined, funcSuccess, funcFail, HttpTimeout);
        };
        _proto._onLoginSuccess = function _onLoginSuccess() {
          if (this._loginSuccessFunc && isValid(this._loginSuccessTarget)) {
            this._loginSuccessFunc.call(this._loginSuccessTarget);
            this._loginSuccessFunc = null;
            this._loginSuccessTarget = null;
          }
        };
        _proto.showLoginFailDialog = function showLoginFailDialog(msg, cb) {
          UIUtils.showComDialogView({
            content: msg,
            isShowNo: false,
            isBlankClose: false,
            okCallback: function okCallback() {
              GameTimer.instance.setTimeout(function () {
                cb && cb();
              }, 0.5);
            }
          });
        }

        //////////////////////////////////////////////////////////////////////
        ;

        _proto.requestPlayerInfo = function requestPlayerInfo(func, target, showWait) {
          if (showWait === void 0) {
            showWait = true;
          }
          LogMgr.log("request player info: start");
          if (showWait) {
            WinMgr.instance.showWaittingView();
          }
          if (!this.loginReplyData) {
            LogMgr.log("request player info: fail (not login)");
            if (showWait) {
              WinMgr.instance.hideWaittingView();
            }
            func && func(false, undefined);
            return;
          }
          var funcSuccess = function funcSuccess(resp) {
            LogMgr.log("request player info: success", resp);
            if (showWait) {
              WinMgr.instance.hideWaittingView();
            }
            if (target && !isValid(target)) return;
            var replyData = KsHttpProtoConvert.ToPlayerInfoReplyData(resp);
            func && func(true, replyData);
            return;
          };
          var funcFail = function funcFail(status) {
            LogMgr.log("request player info: fail, status: " + status);
            if (showWait) {
              WinMgr.instance.hideWaittingView();
            }
            if (target && !isValid(target)) return;
            func && func(false, undefined);
            return;
          };
          if (this.testPlayerInfoReply(funcSuccess)) {
            return;
          }
          var url = this.HttpUrl + "/player/info?";
          var requestData = {
            openId: this.loginReplyData.openId
          };
          var headers = [{
            k: "token",
            v: this.loginReplyData.token
          }];
          NetMgr.httpPost(url, requestData, headers, funcSuccess, funcFail, HttpTimeout);
        };
        _proto.requestPlayerDecoration = function requestPlayerDecoration(func, target, showWait) {
          if (showWait === void 0) {
            showWait = true;
          }
          LogMgr.log("request player decoration: start");
          if (showWait) {
            WinMgr.instance.showWaittingView();
          }
          if (!this.loginReplyData) {
            LogMgr.log("request player decoration: fail (not login)");
            if (showWait) {
              WinMgr.instance.hideWaittingView();
            }
            func && func(false, undefined);
            return;
          }
          var funcSuccess = function funcSuccess(resp) {
            LogMgr.log("request player decoration: success", resp);
            if (showWait) {
              WinMgr.instance.hideWaittingView();
            }
            if (target && !isValid(target)) return;
            var replyData = KsHttpProtoConvert.ToPlayerDecorationReplyData(resp);
            func && func(true, replyData);
            return;
          };
          var funcFail = function funcFail(status) {
            LogMgr.log("request player decoration: fail, status: " + status);
            if (showWait) {
              WinMgr.instance.hideWaittingView();
            }
            if (target && !isValid(target)) return;
            func && func(false, undefined);
            return;
          };
          if (this.testPlayerDecorationReply(funcSuccess)) {
            return;
          }
          var url = this.HttpUrl + "/player/decoration?";
          var requestData = {
            openId: this.loginReplyData.openId
          };
          var headers = [{
            k: "token",
            v: this.loginReplyData.token
          }];
          NetMgr.httpPost(url, requestData, headers, funcSuccess, funcFail, HttpTimeout);
        };
        _proto.requestPlayerRank = function requestPlayerRank(func, target, showWait) {
          if (showWait === void 0) {
            showWait = true;
          }
          LogMgr.log("request player rank: start");
          if (showWait) {
            WinMgr.instance.showWaittingView();
          }
          if (!this.loginReplyData) {
            LogMgr.log("request player rank: fail (not login)");
            if (showWait) {
              WinMgr.instance.hideWaittingView();
            }
            func && func(false, undefined);
            return;
          }
          var funcSuccess = function funcSuccess(resp) {
            LogMgr.log("request player rank: success", resp);
            if (showWait) {
              WinMgr.instance.hideWaittingView();
            }
            if (target && !isValid(target)) return;
            var replyData = KsHttpProtoConvert.ToPlayerRankReplyData(resp);
            func && func(true, replyData);
            return;
          };
          var funcFail = function funcFail(status) {
            LogMgr.log("request player rank: fail, status: " + status);
            if (showWait) {
              WinMgr.instance.hideWaittingView();
            }
            if (target && !isValid(target)) return;
            func && func(false, undefined);
            return;
          };
          if (this.testPlayerRankReply(funcSuccess)) {
            return;
          }
          var url = this.HttpUrl + "/player/rank?";
          var requestData = {
            openId: this.loginReplyData.openId
          };
          var headers = [{
            k: "token",
            v: this.loginReplyData.token
          }];
          NetMgr.httpPost(url, requestData, headers, funcSuccess, funcFail, HttpTimeout);
        };
        _proto.requestShopList = function requestShopList(func, target, showWait) {
          if (showWait === void 0) {
            showWait = true;
          }
          LogMgr.log("request shop list: start");
          if (showWait) {
            WinMgr.instance.showWaittingView();
          }
          if (!this.loginReplyData) {
            LogMgr.log("request shop list: fail (not login)");
            if (showWait) {
              WinMgr.instance.hideWaittingView();
            }
            func && func(false, undefined);
            return;
          }
          var funcSuccess = function funcSuccess(resp) {
            LogMgr.log("request shop list: success", resp);
            if (showWait) {
              WinMgr.instance.hideWaittingView();
            }
            if (target && !isValid(target)) return;
            var replyData = KsHttpProtoConvert.ToShopListReplyData(resp);
            func && func(true, replyData);
            return;
          };
          var funcFail = function funcFail(status) {
            LogMgr.log("request shop list: fail, status: " + status);
            if (showWait) {
              WinMgr.instance.hideWaittingView();
            }
            if (target && !isValid(target)) return;
            func && func(false, undefined);
            return;
          };
          if (this.testShopListReply(funcSuccess)) {
            return;
          }
          var url = this.HttpUrl + "/shop/list?";
          var requestData = {
            openId: this.loginReplyData.openId
          };
          var headers = [{
            k: "token",
            v: this.loginReplyData.token
          }];
          NetMgr.httpPost(url, requestData, headers, funcSuccess, funcFail, HttpTimeout);
        };
        _proto.requestShopBuy = function requestShopBuy(shopId, func, target, showWait) {
          if (showWait === void 0) {
            showWait = true;
          }
          LogMgr.log("request shop buy: start, shopId: " + shopId);
          if (showWait) {
            WinMgr.instance.showWaittingView();
          }
          if (!this.loginReplyData) {
            LogMgr.log("request shop buy: fail (not login)");
            if (showWait) {
              WinMgr.instance.hideWaittingView();
            }
            func && func(false, undefined);
            return;
          }
          var funcSuccess = function funcSuccess(resp) {
            LogMgr.log("request shop buy: success", resp);
            if (showWait) {
              WinMgr.instance.hideWaittingView();
            }
            if (target && !isValid(target)) return;
            var replyData = KsHttpProtoConvert.ToShopBuyReplyData(resp);
            if (replyData && replyData.code == 0) {
              WinMgr.instance.addNotice("兑换成功!");
            } else {
              WinMgr.instance.addNotice("兑换失败!");
            }
            func && func(true, replyData);
            return;
          };
          var funcFail = function funcFail(status) {
            LogMgr.log("request shop buy: fail, status: " + status);
            if (showWait) {
              WinMgr.instance.hideWaittingView();
            }
            if (target && !isValid(target)) return;
            func && func(false, undefined);
            return;
          };
          if (this.testShopBuyReply(funcSuccess)) {
            return;
          }
          var url = this.HttpUrl + "/shop/buy?";
          var requestData = {
            openId: this.loginReplyData.openId,
            goodsId: String(shopId)
          };
          var headers = [{
            k: "token",
            v: this.loginReplyData.token
          }];
          NetMgr.httpPost(url, requestData, headers, funcSuccess, funcFail, HttpTimeout);
        };
        _proto.requestPlayerUseDecoration = function requestPlayerUseDecoration(decorationType, decorationId, func, target, showWait) {
          if (showWait === void 0) {
            showWait = true;
          }
          LogMgr.log("request player use decoration: start, decorationType: " + decorationType + ", decorationId: " + decorationId);
          if (showWait) {
            WinMgr.instance.showWaittingView();
          }
          if (!this.loginReplyData) {
            LogMgr.log("request player use decoration: fail (not login)");
            if (showWait) {
              WinMgr.instance.hideWaittingView();
            }
            func && func(false, undefined);
            return;
          }
          var funcSuccess = function funcSuccess(resp) {
            LogMgr.log("request player use decoration: success", resp);
            if (showWait) {
              WinMgr.instance.hideWaittingView();
            }
            if (target && !isValid(target)) return;
            var replyData = KsHttpProtoConvert.ToPlayerUseDecorationReplyData(resp);
            if (replyData && replyData.code == 0) {
              WinMgr.instance.addNotice("装备成功!");
            } else {
              WinMgr.instance.addNotice("装备失败!");
            }
            func && func(true, replyData);
            return;
          };
          var funcFail = function funcFail(status) {
            LogMgr.log("request player use decoration: fail, status: " + status);
            if (showWait) {
              WinMgr.instance.hideWaittingView();
            }
            if (target && !isValid(target)) return;
            func && func(false, undefined);
            return;
          };
          if (this.testPlayerUseDecorationReply(funcSuccess)) {
            return;
          }
          var url = this.HttpUrl + "/player/use_decoration?";
          var requestData = {
            openId: this.loginReplyData.openId,
            type: String(decorationType),
            id: String(decorationId)
          };
          var headers = [{
            k: "token",
            v: this.loginReplyData.token
          }];
          NetMgr.httpPost(url, requestData, headers, funcSuccess, funcFail, HttpTimeout);
        }

        //////////////////////////////////////////////////////////////////////
        ;

        _proto.testLoginReply = function testLoginReply(successFunc) {
          return false;
        };
        _proto.testPlayerInfoReply = function testPlayerInfoReply(successFunc) {
          return false;
        };
        _proto.testPlayerDecorationReply = function testPlayerDecorationReply(successFunc) {
          return false;
        };
        _proto.testPlayerRankReply = function testPlayerRankReply(successFunc) {
          return false;
        };
        _proto.testShopListReply = function testShopListReply(successFunc) {
          return false;
        };
        _proto.testShopBuyReply = function testShopBuyReply(successFunc) {
          return false;
        };
        _proto.testPlayerUseDecorationReply = function testPlayerUseDecorationReply(successFunc) {
          return false;
        };
        _createClass(KsMiniGameMgr, [{
          key: "HttpUrl",
          get: function get() {
            return channel_config.gatewayUrl;
          }
        }, {
          key: "ksJsCode",
          get: function get() {
            return this._ksJsCode;
          }
        }, {
          key: "loginReplyData",
          get: function get() {
            return this._loginReplyData;
          }
        }, {
          key: "serverMsTime",
          get: function get() {
            return this._loginReplyData ? this._loginReplyData.serverTime : 0;
          }
        }], [{
          key: "instance",
          get: function get() {
            if (!this._instance || this._instance._destroyed) {
              this._instance = new KsMiniGameMgr();
              this._instance.init();
            }
            return this._instance;
          }
        }]);
        return KsMiniGameMgr;
      }(BaseMgr));
      KsMiniGameMgr._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KsSdk.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fcfc5Z/kIpMlLh7thdSXqgw", "KsSdk", undefined);
      var KsSdk = exports('KsSdk', /*#__PURE__*/function () {
        function KsSdk() {}
        KsSdk.ksIsValid = function ksIsValid() {
          if (typeof ks === 'undefined') return false;
          if (typeof ks.login === 'undefined') return false;
          return true;
        };
        KsSdk.ksLogin = function ksLogin(cb) {
          var resp = {
            success: false
          };
          if (!this.ksIsValid()) {
            console.log("ks is not valid");
            cb && cb(resp);
            return;
          }
          ks.login({
            success: function success(result) {
              if (result === undefined || result === null) {
                cb && cb(resp);
                return;
              }
              console.log("ks login success");
              if (result.code) {
                console.log("ks login js_code: " + result.code);
                resp.success = true;
                resp.code = String(result.code);
              }
              cb && cb(resp);
            },
            fail: function fail(error) {
              console.log("ks login fail: " + error);
              cb && cb(resp);
            }
          });
        };
        return KsSdk;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LabelNumRoll.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './UIUtils.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, I18n, UIUtils;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      I18n = module.I18n;
    }, function (module) {
      UIUtils = module.UIUtils;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "190b8A7sMFOZIdUahr/a1+m", "LabelNumRoll", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DEFAULT_INTERVAL = 0.1;
      var DEFAULT_TIME = 1.5;
      var DEFAULT_ZOOM = 0;
      var LabelNumRoll = exports('LabelNumRoll', (_dec = ccclass('LabelNumRoll'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LabelNumRoll, _Component);
        function LabelNumRoll() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._curNum = 0;
          _this._toNum = 0;
          _this._fromNum = 0;
          _this._interval = DEFAULT_INTERVAL;
          _this._time = DEFAULT_TIME;
          _this._zoom = DEFAULT_ZOOM;
          _this._rollTimer = 0;
          _this._refreshTimer = 0;
          _this._enableRoll = false;
          _this._numFormator = void 0;
          return _this;
        }
        var _proto = LabelNumRoll.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.startRoll = function startRoll(params) {
          var _params$delay;
          if (!params) return;
          this._toNum = params.toNum;
          if (params.time != undefined) {
            this._time = params.time;
          } else {
            this._time = DEFAULT_TIME;
          }
          if (params.interval != undefined) {
            this._interval = params.interval;
          } else {
            this._interval = DEFAULT_INTERVAL;
          }
          if (params.zoom != undefined) {
            this._zoom = params.zoom;
          } else {
            this._zoom = DEFAULT_ZOOM;
          }
          if (params.curNum != undefined) {
            this._curNum = params.curNum;
          }
          this._fromNum = this._curNum;
          this._rollTimer = 0;
          this._refreshTimer = 0;
          this._enableRoll = false;
          this.stopRoll();
          var delay = (_params$delay = params.delay) != null ? _params$delay : 0;
          if (delay > 0) {
            this.unschedule(this._startRoll);
            this.scheduleOnce(this._startRoll, delay);
          } else {
            this.unschedule(this._startRoll);
            this._startRoll();
          }
        };
        _proto._startRoll = function _startRoll() {
          this._enableRoll = true;
          this.refreshNumber();
        };
        _proto.stopRoll = function stopRoll() {
          this._enableRoll = false;
        };
        _proto.finishRoll = function finishRoll() {
          this._enableRoll = false;
          this._rollTimer = this._time;
          this._curNum = this._toNum;
          this.refreshNumber();
        };
        _proto.setNumFormator = function setNumFormator(formator) {
          this._numFormator = formator;
        };
        _proto.update = function update(dt) {
          if (!this._enableRoll) return;
          this._rollTimer += dt;
          this._refreshTimer += dt;
          if (this._rollTimer >= this._time) {
            this.finishRoll();
            return;
          }
          if (this._refreshTimer >= this._interval) {
            this._refreshTimer = 0;
            this.calculateCurNum();
            this.refreshNumber();
            if (this._zoom > 0) {
              UIUtils.playZoomInOutAction(this.node, this._interval, this._zoom, false);
            }
          }
        };
        _proto.calculateCurNum = function calculateCurNum() {
          this._curNum = this._fromNum + (this._toNum - this._fromNum) * (this._rollTimer / this._time);
          this._curNum = Math.floor(this._curNum);
        };
        _proto.refreshNumber = function refreshNumber() {
          var str = this._numFormator ? this._numFormator(this._curNum) : String(this._curNum);
          I18n.setLabelText(this.node, str);
        };
        return LabelNumRoll;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LabelTimer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './GlobalMgr.ts', './DateUtil.ts', './ArrayUtil.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, _decorator, isValid, Component, I18n, GlobalMgr, DateUtil, ArrayUtil;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      isValid = module.isValid;
      Component = module.Component;
    }, function (module) {
      I18n = module.I18n;
    }, function (module) {
      GlobalMgr = module.GlobalMgr;
    }, function (module) {
      DateUtil = module.DateUtil;
    }, function (module) {
      ArrayUtil = module.ArrayUtil;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "9a6e4fosGNJoZFW2M3Gygw0", "LabelTimer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LabelTimer = exports('LabelTimer', (_dec = ccclass('LabelTimer'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LabelTimer, _Component);
        function LabelTimer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._isCdMode = true;
          _this._msTime = 0;
          _this._msPastMax = void 0;
          _this._cdEndCallback = void 0;
          _this._timeCallbacks = {};
          _this._calledTimes = new Set();
          _this._timeFormator = void 0;
          _this._serverTimeGetter = void 0;
          _this._timeSplitLabelNodes = void 0;
          return _this;
        }
        var _proto = LabelTimer.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.setServerTimeGetter = function setServerTimeGetter(v) {
          this._serverTimeGetter = v;
        };
        _proto.getServerTime = function getServerTime() {
          var ms = this._serverTimeGetter ? this._serverTimeGetter() : GlobalMgr.instance.serverMsTime;
          return ms;
        };
        _proto.setTimeSplitLabelNodes = function setTimeSplitLabelNodes(nodes) {
          if (!nodes || !Array.isArray(nodes)) return;
          this._timeSplitLabelNodes = [];
          ArrayUtil.merge(this._timeSplitLabelNodes, nodes);
        }

        //设置倒计时时间(秒)
        ;

        _proto.setCdTime = function setCdTime(second) {
          var endMs = this.getServerTime() + second * 1000;
          this.setTime(endMs);
        }

        //按结束时间戳倒计时
        ;

        _proto.setTime = function setTime(endMs) {
          this._isCdMode = true;
          this._msTime = endMs;
          this.startSchedulerTimer();
        }

        //按开始时间戳计时已过去时间
        ;

        _proto.setPastTime = function setPastTime(startMs, maxMs) {
          this._isCdMode = false;
          this._msTime = startMs;
          this._msPastMax = maxMs;
          this.startSchedulerTimer();
        }

        //自定义时间字符串格式化方法
        //默认调用:DateUtil.gethhmmss(second)
        ;

        _proto.setTimeFormator = function setTimeFormator(formator) {
          this._timeFormator = formator;
        }

        //停止计时
        ;

        _proto.cleanTime = function cleanTime() {
          this.stopSchedulerTimer();
          this.clearTimeLabel();
        }

        //设置倒计时结束回调
        ;

        _proto.setEndCallback = function setEndCallback(cb) {
          this._cdEndCallback = cb;
        }

        //添加计时时间点(第x秒)回调
        ;

        _proto.addTimeCallback = function addTimeCallback(second, cb) {
          this._timeCallbacks[second] = cb;
        };
        _proto.clearCalledTimes = function clearCalledTimes() {
          this._calledTimes.clear();
        };
        _proto.startSchedulerTimer = function startSchedulerTimer() {
          this.stopSchedulerTimer();
          this.clearCalledTimes();
          this.tickTimer();
          this.schedule(this.tickTimer, 0.5);
        };
        _proto.stopSchedulerTimer = function stopSchedulerTimer() {
          this.unschedule(this.tickTimer);
        };
        _proto.tickTimer = function tickTimer() {
          if (this._isCdMode) {
            var serverMs = this.getServerTime();
            if (this._msTime > serverMs) {
              var secondTime = Math.floor((this._msTime - serverMs) * 0.001);
              if (serverMs == 0) {
                secondTime = 0;
              }
              this.refreshTimeLabel(secondTime);
              this.doTimeCallback(secondTime);
            } else {
              this.stopSchedulerTimer();
              this.refreshTimeLabel(0);
              this._cdEndCallback && this._cdEndCallback();
            }
          } else {
            var _serverMs = this.getServerTime();
            var passMs = Math.floor(_serverMs - this._msTime);
            if (this._msPastMax) {
              passMs = Math.min(this._msPastMax, passMs);
            }
            var _secondTime = Math.max(0, passMs * 0.001);
            this.refreshTimeLabel(_secondTime);
            this.doTimeCallback(_secondTime);
          }
        };
        _proto.doTimeCallback = function doTimeCallback(secondTime) {
          if (this._timeCallbacks[secondTime] && !this._calledTimes.has(secondTime)) {
            this._timeCallbacks[secondTime]();
            this._calledTimes.add(secondTime);
          }
        };
        _proto.refreshTimeLabel = function refreshTimeLabel(second) {
          var str = this._timeFormator ? this._timeFormator(second) : DateUtil.gethhmmss(second);
          this._refreshLabelStr(str);
        };
        _proto.clearTimeLabel = function clearTimeLabel() {
          this._refreshLabelStr("");
        };
        _proto._refreshLabelStr = function _refreshLabelStr(str) {
          if (this._timeSplitLabelNodes) {
            for (var _iterator = _createForOfIteratorHelperLoose(this._timeSplitLabelNodes), _step; !(_step = _iterator()).done;) {
              var _node2 = _step.value;
              if (isValid(_node2)) {
                I18n.setLabelText(_node2, "");
              }
            }
            var nodeNum = this._timeSplitLabelNodes.length;
            for (var idx = 0; idx < str.length && idx < nodeNum; idx++) {
              var _str = str[idx];
              var _node = this._timeSplitLabelNodes[idx];
              if (isValid(_node)) {
                I18n.setLabelText(_node, _str);
              }
            }
          } else {
            I18n.setLabelText(this.node, str);
          }
        };
        _proto.stopTimer = function stopTimer() {
          this.stopSchedulerTimer();
        };
        return LabelTimer;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoadMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './StringUtil.ts', './AudioConfig.ts', './LogMgr.ts', './UIUtils.ts'], function (exports) {
  var _createClass, cclegacy, assetManager, Prefab, AudioClip, sp, SpriteFrame, SpriteAtlas, Font, Asset, misc, StringUtil, AudioConfig, LogMgr, UIUtils;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      assetManager = module.assetManager;
      Prefab = module.Prefab;
      AudioClip = module.AudioClip;
      sp = module.sp;
      SpriteFrame = module.SpriteFrame;
      SpriteAtlas = module.SpriteAtlas;
      Font = module.Font;
      Asset = module.Asset;
      misc = module.misc;
    }, function (module) {
      StringUtil = module.StringUtil;
    }, function (module) {
      AudioConfig = module.AudioConfig;
    }, function (module) {
      LogMgr = module.LogMgr;
    }, function (module) {
      UIUtils = module.UIUtils;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7c29d2F+LtM7rIXTvgH4ymQ", "LoadMgr", undefined);
      var LoadMgr = exports('LoadMgr', /*#__PURE__*/function () {
        function LoadMgr() {}
        var _proto = LoadMgr.prototype;
        _proto.loadAssets = function loadAssets(assetsInfo, progress, allComplete, oneComplete) {
          var idx = 0,
            successTotal = 0;
          assetsInfo.sort(function (a, b) {
            var _a$waitResult, _b$waitResult;
            if ((_a$waitResult = a.waitResult) != null ? _a$waitResult : true) return -1;
            if ((_b$waitResult = b.waitResult) != null ? _b$waitResult : true) return 1;
            return 0;
          });
          var resTotal = assetsInfo.length;
          var loadFunc = function loadFunc() {
            var _info$bundleName;
            var info = assetsInfo[idx++];
            if (!info) {
              allComplete && allComplete(successTotal >= resTotal);
              return;
            }
            var bundleName = (_info$bundleName = info.bundleName) != null ? _info$bundleName : "resources";
            assetManager.loadBundle(bundleName, function (err, bundle) {
              var _info$waitResult, _info$type;
              if (err) {
                console.error("LoadMgr.loadBundle err " + err);
                return;
              }
              var waitResult = (_info$waitResult = info.waitResult) != null ? _info$waitResult : true;
              if (!waitResult) {
                ++successTotal;
                progress && progress(successTotal / resTotal);
                loadFunc();
              }
              bundle.load(info.path, (_info$type = info.type) != null ? _info$type : Asset, function (finish, total) {
                if (progress && waitResult) {
                  var _percent = (successTotal + misc.clampf(finish / total, 0, 1)) / resTotal;
                  progress(_percent);
                }
              }, function (err, data) {
                if (err) {
                  console.error("LoadMgr.loadAssets.loadAsset error " + err);
                  // 音效的话即使失败也不用管它
                  if (info.type == AudioClip) {
                    waitResult && ++successTotal;
                    oneComplete && oneComplete(null);
                  }
                } else {
                  waitResult && ++successTotal;
                  oneComplete && oneComplete(data);
                }
                waitResult && loadFunc();
              });
            });
          };
          loadFunc();
        }

        /**
         * 预加载资源 兼容文件夹的形式
         * @param assetsInfo 
         */;
        _proto.preloadAssets = function preloadAssets(assetsInfo, progress, allComplete, logKey) {
          if (logKey) {
            UIUtils.recordTimeBegin(logKey);
          }
          var successTotal = 0,
            idx = 0;
          var resTotal = assetsInfo.length;
          var loadFunc = function loadFunc() {
            var _info$bundleName2;
            var info = assetsInfo[idx++];
            if (!info) {
              allComplete && allComplete(successTotal >= resTotal);
              if (logKey) {
                UIUtils.recordTimeEnd(logKey);
              }
              return;
            }
            var bundleName = (_info$bundleName2 = info.bundleName) != null ? _info$bundleName2 : "resources";
            assetManager.loadBundle(bundleName, function (err, bundle) {
              if (err) {
                console.error("LoadMgr.preloadAssets err " + err);
              } else {
                if (StringUtil.endWith(info.path, "/")) {
                  var _info$type2;
                  bundle.preloadDir(info.path, (_info$type2 = info.type) != null ? _info$type2 : Asset, function (finish, total) {
                    if (progress) {
                      var _percent2 = (successTotal + misc.clampf(finish / total, 0, 1)) / resTotal;
                      progress(_percent2);
                    }
                  }, function (err, data) {
                    if (err) {
                      console.error("LoadMgr.preloadAssets.loadAsset error " + err);
                    }
                    ++successTotal;
                    loadFunc();
                  });
                } else {
                  var _info$type3;
                  bundle.preload(info.path, (_info$type3 = info.type) != null ? _info$type3 : Asset, function (finish, total) {
                    if (progress) {
                      var _percent3 = (successTotal + misc.clampf(finish / total, 0, 1)) / resTotal;
                      progress(_percent3);
                    }
                  }, function (err, data) {
                    if (err) {
                      console.error("LoadMgr.preloadAssets.loadAsset error " + err);
                    }
                    ++successTotal;
                    loadFunc();
                  });
                }
              }
            });
          };
          loadFunc();
        };
        _proto.loadAsset = function loadAsset(path, type, complete, bundleName) {
          if (bundleName === void 0) {
            bundleName = "resources";
          }
          LogMgr.log("LoadMgr.loadAsset, path: " + path + ", bundle: " + bundleName);
          var bundle = assetManager.getBundle(bundleName);
          if (!bundle) {
            LogMgr.error("LoadMgr.loadAsset, not load bundle, path: " + path + ", bundle: " + bundleName);
            return;
          }
          // let data = bundle.get(path, type);
          // if (data) {
          //     complete && complete(data);
          //     return;
          // }
          bundle.load(path, type, function (err, data) {
            if (err) {
              LogMgr.error("LoadMgr.loadAsset, err: " + err + ", path: " + path + ", bundle: " + bundleName);
              complete && complete();
              return;
            }
            LogMgr.log("LoadMgr.loadAsset, success, path: " + path + ", bundle: " + bundleName);
            complete && complete(data);
          });
        };
        _proto.loadPrefab = function loadPrefab(path, cb, bundleName) {
          if (bundleName === void 0) {
            bundleName = "resources";
          }
          path = "views/" + path; // 所有预制体都放到views目录下
          this.loadAsset(path, Prefab, function (data) {
            cb(data);
          }, bundleName);
        };
        _proto.loadMusic = function loadMusic(path, cb, bundleName) {
          if (bundleName === void 0) {
            bundleName = "resources";
          }
          path = AudioConfig.BgmPath + path;
          this.loadAsset(path, AudioClip, function (data) {
            if (data) {
              cb(data);
            }
          }, bundleName);
        };
        _proto.loadSound = function loadSound(path, cb, bundleName) {
          if (bundleName === void 0) {
            bundleName = "resources";
          }
          path = AudioConfig.AudioPath + path;
          this.loadAsset(path, AudioClip, function (data) {
            data && cb(data);
          }, bundleName);
        };
        _proto.hasSkeletonData = function hasSkeletonData(path, bundleName) {
          if (bundleName === void 0) {
            bundleName = "resources";
          }
          var bundle = assetManager.getBundle(bundleName);
          if (!bundle) {
            return false;
          }
          path = "spine/" + path;
          var info = bundle.getInfoWithPath(path, sp.SkeletonData);
          return info != null;
        };
        _proto.loadSkeletonData = function loadSkeletonData(path, cb, bundleName) {
          if (bundleName === void 0) {
            bundleName = "resources";
          }
          // 到时候定义spine名字的时候按文件夹定义
          path = "spine/" + path;
          this.loadAsset(path, sp.SkeletonData, function (data) {
            cb(data);
          }, bundleName);
        };
        _proto.hasSpriteFrame = function hasSpriteFrame(path, bundleName) {
          if (bundleName === void 0) {
            bundleName = "resources";
          }
          var bundle = assetManager.getBundle(bundleName);
          if (!bundle) {
            return false;
          }
          path = "images/single/" + path + "/spriteFrame";
          var info = bundle.getInfoWithPath(path, SpriteFrame);
          return info != null;
        };
        _proto.loadSpriteFrame = function loadSpriteFrame(path, cb, bundleName) {
          if (bundleName === void 0) {
            bundleName = "resources";
          }
          path = "images/single/" + path; // 所有的单图都放到这个目录下
          this.loadAsset(path + "/spriteFrame", SpriteFrame, function (data) {
            cb(data);
          }, bundleName);
        };
        _proto.loadSpritePlist = function loadSpritePlist(plistName, cb, bundleName) {
          if (bundleName === void 0) {
            bundleName = "resources";
          }
          plistName = "images/plist/" + plistName; // 所有的图集都放到这个目录下
          this.loadAsset(plistName, SpriteAtlas, function (data) {
            cb(data);
          }, bundleName);
        };
        _proto.loadFont = function loadFont(path, cb, bundleName) {
          if (bundleName === void 0) {
            bundleName = "font";
          }
          this.loadAsset(path, Font, function (data) {
            data && cb(data);
          }, bundleName);
        };
        _createClass(LoadMgr, null, [{
          key: "instance",
          get: function get() {
            if (this._instance === null) {
              this._instance = new LoadMgr();
            }
            return this._instance;
          }
        }]);
        return LoadMgr;
      }());
      LoadMgr._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LocalizedLabel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, RichText, Label, Component, I18n;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      RichText = module.RichText;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      I18n = module.I18n;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "51710DZgdFKspXqr1nEPsm9", "LocalizedLabel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LocalizedLabel = exports('LocalizedLabel', (_dec = ccclass('LocalizedLabel'), _dec2 = property({
        displayName: 'Key',
        visible: true,
        tooltip: 'language文件夹下的语言表中Text的key'
      }), _dec3 = property({
        displayName: 'FixFont',
        visible: true,
        tooltip: '固定编辑器里的字体设置,代码不能修改字体(即不支持多语言)'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LocalizedLabel, _Component);
        function LocalizedLabel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.label = null;
          _initializerDefineProperty(_this, "_key", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_fixFont", _descriptor2, _assertThisInitialized(_this));
          _this._args = [];
          _this._text = "";
          _this._nodesInited = false;
          return _this;
        }
        var _proto = LocalizedLabel.prototype;
        _proto.onLoad = function onLoad() {
          this._initNodes();
          this._checkUpdateFnt();
        };
        _proto._initNodes = function _initNodes() {
          var _this$label, _this$label2;
          if (this._nodesInited) return;
          this._nodesInited = true;
          this.label = null;
          this.label = (_this$label = this.label) != null ? _this$label : this.getComponent(RichText);
          this.label = (_this$label2 = this.label) != null ? _this$label2 : this.getComponent(Label);
          this._text = this.label ? this.label.string : "";
        };
        _proto.updateLabel = function updateLabel() {
          this._initNodes();
          if (!this.label) return;
          var str = this._key == -1 ? this._text : I18n.t.apply(I18n, [this._key].concat(this._args));
          this.label.string = str;
        }

        // 可设置语言ID或者拼接好的字符串
        ;

        _proto.setText = function setText(keyOrText, args) {
          this._initNodes();
          if (typeof keyOrText == 'string') {
            this._text = keyOrText;
            this._key = -1;
            this._args = [];
          } else {
            this._text = "";
            this._key = keyOrText;
            this._args = args ? [].concat(args) : [];
          }
          this.updateLabel();
        };
        _proto._checkUpdateFnt = function _checkUpdateFnt() {
          this._initNodes();
          if (!this.label) return;
          if (this._fixFont || this.label.useSystemFont) {
            this.updateLabel();
            return;
          }
          I18n.updateNodeFnt(this.node);
        }

        // 设置字体,如果默认是系统字体则不设置
        ;

        _proto.setFont = function setFont(font) {
          this._initNodes();
          if (!this.label) return;
          if (this._fixFont || this.label.useSystemFont) {
            this.updateLabel();
            return;
          }
          var oldFont = this.label.font;
          if (font === oldFont) {
            this.updateLabel();
            return;
          }
          if (font === null) return;
          this.label.string = "";
          this.label.font = font;
          this.updateLabel();
        };
        return LocalizedLabel;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_key", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_fixFont", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LocalizedSprite.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AssetUtil.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Component, AssetUtil;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      AssetUtil = module.AssetUtil;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "61b34VilVBJMbrccb3rbMUj", "LocalizedSprite", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LocalizedSprite = exports('LocalizedSprite', (_dec = ccclass('LocalizedSprite'), _dec2 = property({
        displayName: 'Key',
        visible: true,
        tooltip: 'images/single目录下散图文件path,或者plist图集里的文件名'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LocalizedSprite, _Component);
        function LocalizedSprite() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_key", _descriptor, _assertThisInitialized(_this));
          _this._sprite = null;
          _this._nodesInited = false;
          return _this;
        }
        var _proto = LocalizedSprite.prototype;
        _proto.onLoad = function onLoad() {
          this._initNodes();
        };
        _proto._initNodes = function _initNodes() {
          var _this$_sprite;
          if (this._nodesInited) return;
          this._nodesInited = true;
          this._sprite = null;
          this._sprite = (_this$_sprite = this._sprite) != null ? _this$_sprite : this.getComponent(Sprite);
          this.updateSprite();
        };
        _proto.updateSprite = function updateSprite() {
          this._initNodes();
          if (this._key == null || this._key.length == 0) return;
          if (this._sprite) {
            this._sprite.spriteFrame = null;
          }
          AssetUtil.setSpriteFrameForLang(this.node, this._key);
        };
        return LocalizedSprite;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_key", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LocalStorage.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './StringUtil.ts', './ObjectUtil.ts', './StorageConst.ts', './Electron.ts'], function (exports) {
  var _createClass, cclegacy, sys, StringUtil, ObjectUtil, StorageConst, Electron;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }, function (module) {
      StringUtil = module.StringUtil;
    }, function (module) {
      ObjectUtil = module.ObjectUtil;
    }, function (module) {
      StorageConst = module.StorageConst;
    }, function (module) {
      Electron = module.Electron;
    }],
    execute: function () {
      cclegacy._RF.push({}, "21080X5vPdCNbrYrQ/l0ItB", "LocalStorage", undefined);
      var LocalStorage = exports('LocalStorage', /*#__PURE__*/function () {
        function LocalStorage() {}
        // 全局的
        LocalStorage.set = function set(key, value) {
          if (Electron.isElectronValid()) {
            Electron.storageSetItem(key, value);
            return;
          }
          sys.localStorage.setItem(key, value);
        };
        LocalStorage.get = function get(key, defaultValue) {
          var value = "";
          if (Electron.isElectronValid()) {
            value = Electron.storageGetItem(key);
          } else {
            value = sys.localStorage.getItem(key);
          }
          // 微信平台没得key返回的是空字符串,而web平台返回的是null
          if (value == "" || value == null || value == undefined) {
            value = defaultValue;
          }
          if (defaultValue != undefined) {
            if (typeof defaultValue == "number") {
              value = Number(value);
            } else if (typeof defaultValue == "boolean") {
              value = StringUtil.toBoolean(value);
            }
          }
          return value;
        };
        LocalStorage.remove = function remove(key) {
          if (Electron.isElectronValid()) {
            Electron.storageRemoveItem(key);
            return;
          }
          sys.localStorage.removeItem(key);
        }

        //  保存到玩家身上的
        ;

        LocalStorage._isKeyValid = function _isKeyValid(key) {
          if (ObjectUtil.contain(StorageConst.PlayerConst, key)) {
            return true;
          } else {
            return false;
          }
        }

        /** 
         * 获取玩家缓存数据
         * @param key 缓存的key
         * @returns 找到缓存返回缓存string，未找到返回null
         */;
        LocalStorage.getUserItem = function getUserItem(key, defaultValue) {
          if (this._userId && this._isKeyValid(key)) {
            return this.get(this._userId + "~" + key, defaultValue);
          } else {
            return null;
          }
        }

        /**
         * 设置玩家缓存数据
         * @param key 缓存的key key必须在StorageConst中定义
         * @param val 存储的值
         */;
        LocalStorage.setUserItem = function setUserItem(key, val) {
          if (this._userId && this._isKeyValid(key)) {
            return this.set(this._userId + "~" + key, val);
          }
        };
        LocalStorage.removeUserItem = function removeUserItem(key) {
          if (this._userId && this._isKeyValid(key)) {
            this.remove(this._userId + "~" + key);
          }
        };
        _createClass(LocalStorage, null, [{
          key: "userId",
          set:
          //当前玩家id

          function set(userId) {
            this._userId = userId;
          }
        }]);
        return LocalStorage;
      }());
      LocalStorage._userId = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoginComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LoginMgr.ts', './EventComp.ts', './ClientEvents.ts', './LogMgr.ts', './ChannelMgr.ts', './KsMiniGameMgr.ts'], function (exports) {
  var _inheritsLoose, _assertThisInitialized, cclegacy, _decorator, LoginMgr, EventComp, ClientEvents, LogMgr, ChannelMgr, KsMiniGameMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      LoginMgr = module.LoginMgr;
    }, function (module) {
      EventComp = module.EventComp;
    }, function (module) {
      ClientEvents = module.ClientEvents;
    }, function (module) {
      LogMgr = module.LogMgr;
    }, function (module) {
      ChannelMgr = module.ChannelMgr;
    }, function (module) {
      KsMiniGameMgr = module.KsMiniGameMgr;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "b8935hHo7pBqZjHBUmtgxuV", "LoginComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LoginComp = exports('LoginComp', ccclass(_class = /*#__PURE__*/function (_EventComp) {
        _inheritsLoose(LoginComp, _EventComp);
        function LoginComp() {
          var _this;
          _this = _EventComp.call(this) || this;
          _this._progressCallback = void 0;
          _this._completeCallback = void 0;
          _this._listeners = [{
            evtId: ClientEvents.LOGIN_SUCCESS,
            handler: _this._onAllResponseReceive,
            target: _assertThisInitialized(_this)
          }];
          return _this;
        }
        var _proto = LoginComp.prototype;
        _proto.onLoad = function onLoad() {
          _EventComp.prototype.onLoad.call(this);
        };
        _proto.triggerLogin = function triggerLogin(progress, complete) {
          LogMgr.log("triggerLogin");
          this._progressCallback = progress;
          this._completeCallback = complete;
          if (ChannelMgr.isKsMiniGame() || ChannelMgr.isKsMiniGameWebTest()) {
            KsMiniGameMgr.instance.login(this._onKsMiniGameLoginSuccess, this);
          } else {
            LoginMgr.instance.thirdLogin(this._onThirdLoginSuccess, this);
          }
        };
        _proto._onKsMiniGameLoginSuccess = function _onKsMiniGameLoginSuccess() {
          LogMgr.log("on ks minigame login success");
          this._completeCallback && this._completeCallback();
          this._completeCallback = undefined;
        }

        // 第三方登陆成功回调
        ;

        _proto._onThirdLoginSuccess = function _onThirdLoginSuccess() {
          LogMgr.log("third party login successful!");
          this._progressCallback && this._progressCallback(0.3);
          this._startNetgateLogin();
        }

        // 开始网关登陆
        ;

        _proto._startNetgateLogin = function _startNetgateLogin() {
          LoginMgr.instance.netgateLogin(this._onNetgateLoginSuccess, this);
        };
        _proto._onNetgateLoginSuccess = function _onNetgateLoginSuccess() {
          this._progressCallback && this._progressCallback(0.6);
          // 连接socket开始
          LoginMgr.instance.tcpLogin();
        };
        _proto._onAllResponseReceive = function _onAllResponseReceive() {
          this._completeCallback && this._completeCallback();
          // 只执行一次
          this._completeCallback = undefined;
        };
        return LoginComp;
      }(EventComp)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoginMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetMgr.ts', './EventListener.ts', './ClientEvents.ts', './Utils.ts', './GlobalMgr.ts', './BaseMgr.ts', './channel_config.ts', './UIUtils.ts', './LogMgr.ts', './md5.ts', './I18n.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, isValid, sys, NetMgr, EventListener, ClientEvents, Utils, GlobalMgr, BaseMgr, channel_config, UIUtils, LogMgr, Md5, I18n;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      isValid = module.isValid;
      sys = module.sys;
    }, function (module) {
      NetMgr = module.NetMgr;
    }, function (module) {
      EventListener = module.EventListener;
    }, function (module) {
      ClientEvents = module.ClientEvents;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      GlobalMgr = module.GlobalMgr;
    }, function (module) {
      BaseMgr = module.BaseMgr;
    }, function (module) {
      channel_config = module.channel_config;
    }, function (module) {
      UIUtils = module.UIUtils;
    }, function (module) {
      LogMgr = module.LogMgr;
    }, function (module) {
      Md5 = module.Md5;
    }, function (module) {
      I18n = module.I18n;
    }],
    execute: function () {
      cclegacy._RF.push({}, "10ff1dQWTFFGJU86ibadulI", "LoginMgr", undefined);
      var s_maxNetgateFailNum = 3;
      var sloginSignKey = "Ajp4X7sCovPJvM5D";

      //是否只登陆一次网关
      //一般弹幕游戏的token是从exe启动参数传来的,而且token有时效性
      //所以下次再登陆网关时,服务器拿到token去SDK服务器校验可能会失败
      var s_netgateLoginOnlyOnce = false;

      //网关登陆信息

      var LoginMgr = exports('LoginMgr', /*#__PURE__*/function (_BaseMgr) {
        _inheritsLoose(LoginMgr, _BaseMgr);
        function LoginMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseMgr.call.apply(_BaseMgr, [this].concat(args)) || this;
          _this.netgateInfo = {};
          _this.needNetgateLogin = true;
          _this.isNetgateLoginSuccess = false;
          _this.machineId = Utils.getMachineId();
          _this._netgateSuccessFunc = null;
          _this._netgateSuccessTarget = void 0;
          _this._netgateFailNum = 0;
          return _this;
        }
        var _proto = LoginMgr.prototype;
        // 网关登陆失败次数
        _proto.init = function init() {
          this.initLiveData();
          EventListener.on({
            evtId: ClientEvents.NET_CHANGED,
            handler: this._onNetChanged,
            target: this
          });
        };
        _proto.initLiveData = function initLiveData() {}

        // 第三方登陆
        ;

        _proto.thirdLogin = function thirdLogin(successFunc, target) {
          // sdk方面的登陆处理
          successFunc.call(target);
        }

        // 网关登陆开始
        ;

        _proto.netgateLogin = function netgateLogin(successFunc, target) {
          var _this2 = this;
          if (!isValid(target) || !successFunc) {
            return;
          }
          this._netgateSuccessFunc = successFunc;
          this._netgateSuccessTarget = target;
          if (this.isNetgateLoginSuccess && s_netgateLoginOnlyOnce) {
            LogMgr.log("Successfully logged in to the gateway, no need to log in to the gateway again");
            this._onNetgateLoginSuccess();
            return;
          }
          if (this.needNetgateLogin) {
            if (!NetMgr.instance.isLocalNetFine || NetMgr.instance.netState == sys.NetworkType.NONE) {
              this.showConfirmToNetgateLogin(I18n.t(-1));
              return;
            }
            var params = this._getNetgateLoginParams();
            var paramsStr = NetMgr.assembleToURI(params);
            var url = channel_config.gatewayUrl + "login?" + paramsStr;
            this.isNetgateLoginSuccess = false;
            NetMgr.httpGet(url, function (response) {
              LogMgr.log("Gateway login return: ", response);
              if (response.code == 200) {
                var data = response.data;
                if (data.result == 2) {
                  // 必须强更新
                  UIUtils.showConfirmToEndGame(I18n.t(-1));
                  return;
                }
                _this2.isNetgateLoginSuccess = true;
                _this2._netgateFailNum = 0;
                _this2.netgateInfo = {};
                _this2.netgateInfo.rid = data.rid;
                _this2.netgateInfo.socketAddr = data.socketAddr;
                _this2.netgateInfo.webSocketAddr = data.webSocketAddr;
                _this2.netgateInfo.result = data.result;
                _this2.netgateInfo.maintainNotify = data.maintainNotify;
                _this2._onNetgateLoginSuccess();
                return;
              }
              _this2._onNetgateLoginErr(response.code);
            }, function (errCode) {
              LogMgr.log("Gateway login failed:" + errCode);
              _this2._onNetgateLoginErr(-errCode);
            });
          } else {
            this._onNetgateLoginSuccess();
          }
        };
        _proto._getNetgateLoginParams = function _getNetgateLoginParams() {
          var param = {
            machineId: this.machineId,
            clientVersion: channel_config.version,
            uid: "",
            sign: ""
          };
          var tab = [param.machineId, param.clientVersion];
          param.sign = Md5.hashStr(sloginSignKey + tab.join(''));
          return param;
        };
        _proto._onNetgateLoginSuccess = function _onNetgateLoginSuccess() {
          this.needNetgateLogin = true;
          if (this._netgateSuccessFunc && isValid(this._netgateSuccessTarget)) {
            this._netgateSuccessFunc.call(this._netgateSuccessTarget);
            this._netgateSuccessFunc = null;
            this._netgateSuccessTarget = null;
          }
        };
        _proto._onNetgateLoginErr = function _onNetgateLoginErr(code) {
          ++this._netgateFailNum;
          if (this._netgateFailNum > s_maxNetgateFailNum) {
            //UIUtils.showConfirmToEndGame(I18n.t(-1));
            this.showConfirmToNetgateLogin(I18n.t(-1));
          } else {
            this.showConfirmToNetgateLogin(I18n.t(-1) + (code != null ? code : ""));
          }
        }

        // 游戏socket登陆
        ;

        _proto.tcpLogin = function tcpLogin() {
          var _channel_config$socke;
          var _addr = this.netgateInfo.webSocketAddr;
          var protocol = (_channel_config$socke = channel_config.socketProtocol) != null ? _channel_config$socke : "wss";
          var url = protocol + "://" + _addr + "/ws";
          NetMgr.instance.close();
          NetMgr.instance.connect({
            url: url,
            connectCallback: function connectCallback(reconnect) {
              LogMgr.log("Successfully created socket!");
              //重连时会再次回调这里,且reconnect为true
              GlobalMgr.instance.requestLogin(reconnect);
            }
          });
        };
        _proto._onNetChanged = function _onNetChanged() {
          // 网络连上了,网关未连接成功时重连
          if (NetMgr.instance.isLocalNetFine && NetMgr.instance.netState > 0) {
            if (!this.isNetgateLoginSuccess && this._netgateSuccessFunc) {
              this.netgateLogin(this._netgateSuccessFunc, this._netgateSuccessTarget);
            }
          }
        };
        _proto.showConfirmToNetgateLogin = function showConfirmToNetgateLogin(msg) {
          var _this3 = this;
          UIUtils.showPopUpWin({
            content: msg,
            isShowClose: false,
            isBlankClose: false,
            isShowCancel: false,
            okBtnStr: I18n.t(-1),
            confirmCallback: function confirmCallback() {
              if (!_this3._netgateSuccessFunc) return;
              _this3.netgateLogin(_this3._netgateSuccessFunc, _this3._netgateSuccessTarget);
            }
          });
        };
        _createClass(LoginMgr, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance || this._instance._destroyed) {
              this._instance = new LoginMgr();
              this._instance.init();
            }
            return this._instance;
          }
        }]);
        return LoginMgr;
      }(BaseMgr));
      LoginMgr._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LogMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetMgr.ts', './DateUtil.ts', './Utils.ts', './md5.ts', './Electron.ts', './channel_config.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, sys, native, DateUtil, Utils, Electron, channel_config;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
      native = module.native;
    }, null, function (module) {
      DateUtil = module.DateUtil;
    }, function (module) {
      Utils = module.Utils;
    }, null, function (module) {
      Electron = module.Electron;
    }, function (module) {
      channel_config = module.channel_config;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2b498vtO/NLHKYCsmXi9lSY", "LogMgr", undefined);
      var eLogLevel = /*#__PURE__*/function (eLogLevel) {
        eLogLevel[eLogLevel["info"] = 0] = "info";
        eLogLevel[eLogLevel["warn"] = 1] = "warn";
        eLogLevel[eLogLevel["err"] = 2] = "err";
        eLogLevel[eLogLevel["max"] = 3] = "max";
        return eLogLevel;
      }(eLogLevel || {});
      var MAX_LOCAL_LOG_COUNT = 5000;
      var LogMgr = exports('LogMgr', /*#__PURE__*/function () {
        function LogMgr() {}
        LogMgr.init = function init() {
          var _this = this;
          this.logs = [];
          this.localLogs = [];
          if (sys.platform == sys.Platform.WIN32) {
            var errRecords = [];
            var logFileName = native.fileUtils.getWritablePath() + "/errlog.txt";
            window.console.error = function (err) {
              if (typeof err == "object" && err.stack) {
                if (errRecords.indexOf(err.stack) == -1) {
                  errRecords.push(err.stack);
                  native.fileUtils.writeStringToFile(err.stack, logFileName);
                  _this.addLog("JS ERROR START ---------------------------------------\n");
                  _this.addLog(String(err.stack));
                  _this.sendLog();
                }
              }
            };
            jsb.onError(function (location, message, stack) {
              if (errRecords.indexOf(stack) == -1) {
                errRecords.push(stack);
                var errStr = "\n" + location + message + stack;
                errStr += "\n" + DateUtil.dateToString2(new Date()) + "  ";
                native.fileUtils.writeStringToFile(errStr, logFileName);
                _this.addLog("JSB ERROR START ---------------------------------------\n");
                _this.addLog(String(errStr));
                _this.sendLog();
              }
            });
          } else {
            console.log("--------------------- log mgr init ---------------------");
            window.console.error = function () {
              try {
                for (var _len = arguments.length, data = new Array(_len), _key = 0; _key < _len; _key++) {
                  data[_key] = arguments[_key];
                }
                if (data) {
                  var errStr = "JS ERROR START (window.console.error) ---------------------------------------";
                  if (Array.isArray(data)) {
                    for (var _iterator = _createForOfIteratorHelperLoose(data), _step; !(_step = _iterator()).done;) {
                      var _err = _step.value;
                      if (_err) {
                        errStr += "\n" + "err: " + String(_err);
                        if (_err.stack) {
                          errStr += "\n" + "err.stack: " + String(_err.stack);
                        }
                      }
                    }
                  } else {
                    var _err2 = data;
                    errStr += "\n" + "err: " + String(_err2);
                    if (_err2.stack) {
                      errStr += "\n" + "err.stack: " + String(_err2.stack);
                    }
                  }
                  _this.addLog(String(errStr));
                  _this.sendLog();
                  Electron.writeErrorLog(errStr);
                }
              } catch (e) {
                console.log(String(e));
              }
            };
            window.onerror = function (event, source, lineno, colno, error) {
              // message：错误信息（字符串）。可用于HTML onerror=""处理程序中的event
              // source：发生错误的脚本URL（字符串）
              // lineno：发生错误的行号（数字）
              // colno：发生错误的列号（数字）
              // error：Error对象
              try {
                var errStr = "JS ERROR START (window.onerror) ---------------------------------------";
                if (event) {
                  errStr += "\n" + "event: " + String(event);
                }
                if (source) {
                  errStr += "\n" + "source: " + String(source);
                }
                if (lineno) {
                  errStr += "\n" + "lineno: " + String(lineno);
                }
                if (colno) {
                  errStr += "\n" + "colno: " + String(colno);
                }
                if (error) {
                  if (error.name) {
                    errStr += "\n" + "error.name: " + String(error.name);
                  }
                  if (error.message) {
                    errStr += "\n" + "error.message: " + String(error.message);
                  }
                  if (error.stack) {
                    errStr += "\n" + "error.stack: " + String(error.stack);
                  }
                }
                _this.addLog(String(errStr));
                _this.sendLog();
                Electron.writeErrorLog(errStr);
              } catch (e) {
                console.log(String(e));
              }
              return false;
            };
            window.addEventListener("error", function (event) {
              try {
                var errStr = "JS ERROR START (EventListener) ---------------------------------------";
                if (event) {
                  errStr += "\n" + "event: " + String(event);
                  if (event.message) {
                    errStr += "\n" + "event.message: " + String(event.message);
                  }
                  if (event.filename) {
                    errStr += "\n" + "event.filename: " + String(event.filename);
                  }
                  if (event.lineno) {
                    errStr += "\n" + "event.lineno: " + String(event.lineno);
                  }
                  if (event.colno) {
                    errStr += "\n" + "event.colno: " + String(event.colno);
                  }
                  if (event.error) {
                    errStr += "\n" + "event.error: " + String(event.error);
                    if (event.error.stack) {
                      errStr += "\n" + "event.error.stack: " + String(event.error.stack);
                    }
                  }
                  _this.addLog(String(errStr));
                  _this.sendLog();
                  Electron.writeErrorLog(errStr);
                }
              } catch (e) {
                console.log(String(e));
              }
            }, true);
          }
        };
        LogMgr.getLocalLogs = function getLocalLogs() {
          return this.localLogs;
        };
        LogMgr.saveLocalLog = function saveLocalLog() {
          for (var _len2 = arguments.length, data = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            data[_key2] = arguments[_key2];
          }
          if (data) {
            var str = data.join(" ");
            this.localLogs.push(str);
            if (this.localLogs.length > MAX_LOCAL_LOG_COUNT) {
              this.localLogs.shift();
            }
          }
        };
        LogMgr.log = function log() {
          var _console;
          this.saveLocalLog.apply(this, arguments);
          this.eLevel >= eLogLevel.info && (_console = console).log.apply(_console, arguments);
        }

        /**
         * 输出tag为紫色的一条日志
         * @param tag 
         * @param data 
         */;
        LogMgr.logT = function logT(tag) {
          var _console2;
          for (var _len3 = arguments.length, data = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            data[_key3 - 1] = arguments[_key3];
          }
          this.saveLocalLog.apply(this, [tag].concat(data));
          this.eLevel >= eLogLevel.info && (_console2 = console).log.apply(_console2, ["%c[" + tag + "]:", "color:#ff00ff"].concat(data));
        }

        /**
         * 绿色日志
         * @param data 
         */;
        LogMgr.loggreen = function loggreen(data) {
          this.saveLocalLog(data);
          this.eLevel >= eLogLevel.info && console.log("%c" + data, "color:#00ff00");
        }

        /**
         * 黄色背景的日志
         * @param data 
         */;
        LogMgr.logyellow = function logyellow(data) {
          this.saveLocalLog(data);
          this.eLevel >= eLogLevel.info && console.log("%c" + data, "background:#ffff00");
        };
        LogMgr.warn = function warn() {
          var _console3;
          this.saveLocalLog.apply(this, arguments);
          this.eLevel >= eLogLevel.warn && (_console3 = console).warn.apply(_console3, arguments);
        };
        LogMgr.error = function error() {
          var _console4;
          this.saveLocalLog.apply(this, arguments);
          this.eLevel >= eLogLevel.err && (_console4 = console).error.apply(_console4, arguments);
        };
        LogMgr.addLog = function addLog() {
          for (var _len4 = arguments.length, strs = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            strs[_key4] = arguments[_key4];
          }
          this.saveLocalLog.apply(this, strs);
          if (this.logs.length > this.logMaxCount) {
            this.logs.shift();
          }
          var str = DateUtil.dateToString2(new Date()) + "  " + strs.join(" ");
          this.logs.push(str);
        }

        // 给服务器发日志
        ;

        LogMgr.sendLog = function sendLog() {
          var content = "++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n\n";
          content += "clientVersion: " + channel_config.version + " \n";
          content += "machineId: " + Utils.getMachineId() + " \n";
          content += "logTime: " + DateUtil.dateToString2(new Date()) + " \n";
          content += this.logs.join("\n");
          content += "\n";
          this.logs.length = 0;
          this.log2Server(content);
        };
        LogMgr.log2Server = function log2Server(str) {
          return;
        };
        return LogMgr;
      }());
      LogMgr.logMaxCount = 200;
      //记录的log最大条数
      LogMgr.logs = [];
      LogMgr.eLevel = eLogLevel.max;
      LogMgr.localLogs = [];
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MainInfoPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventComp.ts', './Utils.ts', './KsMiniGameMgr.ts', './KsHttpProto.ts', './UIConstants.ts', './NameplateIcon.ts', './HeadNode.ts', './I18n.ts', './MathUtil.ts', './TableView.ts', './UIUtils.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, isValid, Color, EventComp, Utils, KsMiniGameMgr, KsHttpProto, NameplateIcon, HeadNode, I18n, MathUtil, TableView, UIUtils;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      isValid = module.isValid;
      Color = module.Color;
    }, function (module) {
      EventComp = module.EventComp;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      KsMiniGameMgr = module.KsMiniGameMgr;
    }, function (module) {
      KsHttpProto = module.KsHttpProto;
    }, null, function (module) {
      NameplateIcon = module.NameplateIcon;
    }, function (module) {
      HeadNode = module.HeadNode;
    }, function (module) {
      I18n = module.I18n;
    }, function (module) {
      MathUtil = module.MathUtil;
    }, function (module) {
      TableView = module.TableView;
    }, function (module) {
      UIUtils = module.UIUtils;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "1a07cvlByFA4Li81xfBSx5h", "MainInfoPanel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MainInfoPanel = exports('MainInfoPanel', (_dec = ccclass('MainInfoPanel'), _dec(_class = /*#__PURE__*/function (_EventComp) {
        _inheritsLoose(MainInfoPanel, _EventComp);
        function MainInfoPanel() {
          var _this;
          _this = _EventComp.call(this) || this;
          _this._isInitNode = false;
          _this.mainView = void 0;
          _this.replyData = void 0;
          _this.listDatas = [];
          //UI
          _this._nameplateIcon = void 0;
          _this._labelName = void 0;
          _this._headNode = void 0;
          _this._monthRank = void 0;
          _this._weekRank = void 0;
          _this._labelMonthRank = void 0;
          _this._labelWeekRank = void 0;
          _this._labelWinStreak = void 0;
          _this._labelScore = void 0;
          _this._labelWinCnt = void 0;
          _this._labelWinRate = void 0;
          //
          _this._listNode = void 0;
          _this._listCell = void 0;
          _this._listTableView = void 0;
          _this._listeners = [];
          return _this;
        }
        var _proto = MainInfoPanel.prototype;
        _proto.onLoad = function onLoad() {
          _EventComp.prototype.onLoad.call(this);
          this._initNode();
          this._initEvent();
        };
        _proto._initNode = function _initNode() {
          if (this._isInitNode) return;
          this._isInitNode = true;
          this._initUI();
        };
        _proto._initUI = function _initUI() {
          var baseInfo = this.node.getChildByName("baseInfo");
          this._nameplateIcon = Utils.checkChildComponent(baseInfo, "nameNode/nameplateIcon", NameplateIcon);
          this._labelName = baseInfo.getChildByPath("nameNode/LabelName");
          this._headNode = Utils.checkChildComponent(baseInfo, "headNode", HeadNode);
          this._monthRank = baseInfo.getChildByPath("rankNodes/monthRank");
          this._weekRank = baseInfo.getChildByPath("rankNodes/weekRank");
          this._labelMonthRank = this._monthRank.getChildByName("Label");
          this._labelWeekRank = this._weekRank.getChildByName("Label");
          this._labelWinStreak = baseInfo.getChildByPath("winStreak/LabelValue");
          this._labelScore = baseInfo.getChildByPath("score/LabelValue");
          this._labelWinCnt = baseInfo.getChildByPath("winCnt/LabelValue");
          this._labelWinRate = baseInfo.getChildByPath("winRate/LabelValue");
          //
          var battleRecord = this.node.getChildByName("battleRecord");
          this._listNode = battleRecord.getChildByPath("listPanel/list");
          this._listCell = this._listNode.getChildByPath("view/content/listCell");
          this._listCell.active = false;
          this._listTableView = Utils.checkComponent(this._listNode, TableView);
          this._listTableView.cellItem = this._listCell;
        };
        _proto._initEvent = function _initEvent() {};
        _proto.initParam = function initParam(params) {
          if (params) {
            this.mainView = params.mainView;
          }
          this._initNode();
        };
        _proto.onShow = function onShow(params) {
          var _this2 = this;
          this.replyData = undefined;
          this.bindDataToUI();
          KsMiniGameMgr.instance.requestPlayerInfo(function (success, resp) {
            if (!isValid(_this2)) return;
            if (success && resp) {
              _this2.replyData = resp;
            }
            _this2.bindDataToUI();
          }, this);
        };
        _proto.onHide = function onHide() {};
        _proto.bindDataToUI = function bindDataToUI() {
          this._initNode();
          this.updateBaseInfo();
          this.updateRecordList();
        };
        _proto.updateBaseInfo = function updateBaseInfo() {
          var _this$replyData, _playerVo$nameplate, _playerVo$nickname, _playerVo$head, _playerVo$avatarFrame, _playerVo$monthRank, _playerVo$weekRank, _playerVo$winStreak, _playerVo$score, _playerVo$winCnt, _playerVo$winCnt2, _playerVo$battleCnt;
          var playerVo = (_this$replyData = this.replyData) == null ? void 0 : _this$replyData.getPlayerTO();
          this._nameplateIcon.initWithData({
            nameplateId: (_playerVo$nameplate = playerVo == null ? void 0 : playerVo.nameplate) != null ? _playerVo$nameplate : 0
          });
          I18n.setLabelText(this._labelName, UIUtils.cutNickName((_playerVo$nickname = playerVo == null ? void 0 : playerVo.nickname) != null ? _playerVo$nickname : ""));
          this._headNode.initWithData({
            headUrl: (_playerVo$head = playerVo == null ? void 0 : playerVo.head) != null ? _playerVo$head : "",
            headFrameId: (_playerVo$avatarFrame = playerVo == null ? void 0 : playerVo.avatarFrame) != null ? _playerVo$avatarFrame : 0
          });
          var _month_rank = (_playerVo$monthRank = playerVo == null ? void 0 : playerVo.monthRank) != null ? _playerVo$monthRank : 0;
          var _week_rank = (_playerVo$weekRank = playerVo == null ? void 0 : playerVo.weekRank) != null ? _playerVo$weekRank : 0;
          Utils.setActive(this._monthRank, _month_rank > 0 && _month_rank <= KsHttpProto.MONTH_RANK_MAX);
          Utils.setActive(this._weekRank, _week_rank > 0 && _week_rank <= KsHttpProto.WEEK_RANK_MAX);
          I18n.setLabelText(this._labelMonthRank, String(_month_rank));
          I18n.setLabelText(this._labelWeekRank, String(_week_rank));
          I18n.setLabelText(this._labelWinStreak, String((_playerVo$winStreak = playerVo == null ? void 0 : playerVo.winStreak) != null ? _playerVo$winStreak : 0));
          I18n.setLabelText(this._labelScore, Utils.formatNumber((_playerVo$score = playerVo == null ? void 0 : playerVo.score) != null ? _playerVo$score : 0));
          I18n.setLabelText(this._labelWinCnt, String((_playerVo$winCnt = playerVo == null ? void 0 : playerVo.winCnt) != null ? _playerVo$winCnt : 0));
          var winRate = MathUtil.getPercent((_playerVo$winCnt2 = playerVo == null ? void 0 : playerVo.winCnt) != null ? _playerVo$winCnt2 : 0, (_playerVo$battleCnt = playerVo == null ? void 0 : playerVo.battleCnt) != null ? _playerVo$battleCnt : 0);
          I18n.setLabelText(this._labelWinRate, Math.floor(winRate * 100) + "%");
        };
        _proto.updateRecordList = function updateRecordList() {
          var _this$replyData2,
            _playerVo$battleRecor,
            _this3 = this;
          var playerVo = (_this$replyData2 = this.replyData) == null ? void 0 : _this$replyData2.getPlayerTO();
          this.listDatas = (_playerVo$battleRecor = playerVo == null ? void 0 : playerVo.battleRecordInfos) != null ? _playerVo$battleRecor : [];
          this._listTableView.cellCount = this.listDatas.length;
          this._listTableView.cellInterval = 0;
          this._listTableView.setExtraDistance(0, 0);
          this._listTableView.setCellLoadCallback(function (index, cell, reuse) {
            if (!cell || !isValid(cell)) return;
            _this3.refreshListViewCell(index, cell);
          });
          this._listTableView.reloadData();
        };
        _proto.refreshListViewCell = function refreshListViewCell(index, cell) {
          if (!cell || !isValid(cell)) return;
          cell.active = true;
          var cellData = this.listDatas[index];
          if (!cellData) return;
          var campBlue = cell.getChildByPath("camp/campBlue");
          var campOrange = cell.getChildByPath("camp/campOrange");
          var LabelMode = cell.getChildByName("LabelMode");
          var LabelResult = cell.getChildByName("LabelResult");
          var LabelScore = cell.getChildByName("LabelScore");
          var LabelWinStreak = cell.getChildByName("LabelWinStreak");
          var LabelTime = cell.getChildByName("LabelTime");
          var _camp = cellData.camp;
          var _gameModel = cellData.gameModel;
          var _win = cellData.win;
          var _score = cellData.score;
          var _incrWinStreak = cellData.incrWinStreak;
          var _time = cellData.time;
          Utils.setActive(campBlue, _camp == 1);
          Utils.setActive(campOrange, _camp == 2);
          if (_gameModel == 1) {
            I18n.setLabelText(LabelMode, "常规");
          } else if (_gameModel == 2) {
            I18n.setLabelText(LabelMode, "PK");
          } else {
            I18n.setLabelText(LabelMode, "");
          }
          if (_win == 1) {
            I18n.setLabelText(LabelResult, "胜利");
            Utils.setLabelColor(LabelResult, new Color("3B89FFFF"));
          } else if (_win == 2) {
            I18n.setLabelText(LabelResult, "失败");
            Utils.setLabelColor(LabelResult, new Color("FF4343FF"));
          } else {
            I18n.setLabelText(LabelResult, "平局");
            Utils.setLabelColor(LabelResult, new Color("000000B4"));
          }
          I18n.setLabelText(LabelScore, Utils.formatNumber(_score));
          I18n.setLabelText(LabelWinStreak, Utils.getNumberSymbolString(_incrWinStreak, true));
          if (_incrWinStreak >= 0) {
            Utils.setLabelColor(LabelWinStreak, new Color("73C169FF"));
          } else {
            Utils.setLabelColor(LabelWinStreak, new Color("000000B4"));
          }
          var _date = new Date(_time);
          var year = _date.getFullYear();
          var mon = _date.getMonth() + 1;
          var day = _date.getDate();
          var h = _date.getHours();
          var m = _date.getMinutes();
          var s = _date.getSeconds();
          var strtTime = h.toString().padStart(2, '0') + ":" + m.toString().padStart(2, '0');
          var strDate = mon.toString().padStart(2, '0') + "-" + day.toString().padStart(2, '0');
          I18n.setLabelText(LabelTime, strDate + " " + strtTime);
        };
        return MainInfoPanel;
      }(EventComp)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MainItemPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MainView.ts', './EventComp.ts', './UIConstants.ts', './Utils.ts', './KsMiniGameMgr.ts', './TableView.ts', './ArrayUtil.ts', './DressUpItemNode.ts', './I18n.ts', './ConfigUtils.ts', './SortUtil.ts', './LogMgr.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, isValid, BottomBtnNames, EventComp, Utils, AddClick, KsMiniGameMgr, TableView, ArrayUtil, DressUpItemNode, I18n, ConfigUtils, SortUtil, LogMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      isValid = module.isValid;
    }, function (module) {
      BottomBtnNames = module.BottomBtnNames;
    }, function (module) {
      EventComp = module.EventComp;
    }, null, function (module) {
      Utils = module.Utils;
      AddClick = module.AddClick;
    }, function (module) {
      KsMiniGameMgr = module.KsMiniGameMgr;
    }, function (module) {
      TableView = module.TableView;
    }, function (module) {
      ArrayUtil = module.ArrayUtil;
    }, function (module) {
      DressUpItemNode = module.DressUpItemNode;
    }, function (module) {
      I18n = module.I18n;
    }, function (module) {
      ConfigUtils = module.ConfigUtils;
    }, function (module) {
      SortUtil = module.SortUtil;
    }, function (module) {
      LogMgr = module.LogMgr;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "ae1fdKxN7RJ64joRRQZnja7", "MainItemPanel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SUIT_BTN_NAME = "suitBtn";
      var APPEAR_EFFECT_BTN_NAME = "appearEffectBtn";
      var SOLDIER_EFFECT_BTN_NAME = "soldierEffectBtn";
      var MainItemPanel = exports('MainItemPanel', (_dec = ccclass('MainItemPanel'), _dec(_class = /*#__PURE__*/function (_EventComp) {
        _inheritsLoose(MainItemPanel, _EventComp);
        function MainItemPanel() {
          var _this;
          _this = _EventComp.call(this) || this;
          _this._isInitNode = false;
          _this.mainView = void 0;
          //DATA
          _this.replyData = void 0;
          _this.comItemDatas = [];
          _this.soldierEffectCurTabIdx = 0;
          _this.soldierEffectArmClassDatas = [];
          _this.soldierEffectDecorationDatas = [];
          //UI
          _this._tabBtnDict = {};
          _this._curTabBtnName = SUIT_BTN_NAME;
          //
          _this._comItemPanel = void 0;
          _this._soldierEffectPanel = void 0;
          //
          _this._comItemListNode = void 0;
          _this._comItemListCell = void 0;
          _this._comItemListTableView = void 0;
          //
          _this._soldierEffectTabListNode = void 0;
          _this._soldierEffectTabListCell = void 0;
          _this._soldierEffectTabListTableView = void 0;
          //
          _this._soldierEffectListNode = void 0;
          _this._soldierEffectListCell = void 0;
          _this._soldierEffectListTableView = void 0;
          _this._listeners = [];
          return _this;
        }
        var _proto = MainItemPanel.prototype;
        _proto.onLoad = function onLoad() {
          _EventComp.prototype.onLoad.call(this);
          this._initNode();
          this._initEvent();
        };
        _proto._initNode = function _initNode() {
          if (this._isInitNode) return;
          this._isInitNode = true;
          this._initUI();
        };
        _proto._initUI = function _initUI() {
          var btns = this.node.getChildByPath("tabBtnPanel/btns");
          var btnNames = [SUIT_BTN_NAME, APPEAR_EFFECT_BTN_NAME, SOLDIER_EFFECT_BTN_NAME];
          for (var _i = 0, _btnNames = btnNames; _i < _btnNames.length; _i++) {
            var btnName = _btnNames[_i];
            var btnNode = btns.getChildByName(btnName);
            var selectNode = btnNode == null ? void 0 : btnNode.getChildByName("select");
            var unselectNode = btnNode == null ? void 0 : btnNode.getChildByName("unselect");
            this._tabBtnDict[btnName] = {
              btn: btnNode,
              select: selectNode,
              unselect: unselectNode
            };
          }
          //
          var tabPanels = this.node.getChildByName("tabPanels");
          this._comItemPanel = tabPanels.getChildByName("ComItemPanel");
          this._soldierEffectPanel = tabPanels.getChildByName("SoldierEffectPanel");
          //
          this._comItemListNode = this._comItemPanel.getChildByName("itemList");
          this._comItemListCell = this._comItemListNode.getChildByPath("view/content/listCell");
          this._comItemListCell.active = false;
          this._comItemListTableView = Utils.checkComponent(this._comItemListNode, TableView);
          this._comItemListTableView.cellItem = this._comItemListCell;
          //
          this._soldierEffectTabListNode = this._soldierEffectPanel.getChildByName("typeList");
          this._soldierEffectTabListCell = this._soldierEffectTabListNode.getChildByPath("view/content/listCell");
          this._soldierEffectTabListCell.active = false;
          this._soldierEffectTabListTableView = Utils.checkComponent(this._soldierEffectTabListNode, TableView);
          this._soldierEffectTabListTableView.cellItem = this._soldierEffectTabListCell;
          //
          this._soldierEffectListNode = this._soldierEffectPanel.getChildByName("itemList");
          this._soldierEffectListCell = this._soldierEffectListNode.getChildByPath("view/content/listCell");
          this._soldierEffectListCell.active = false;
          this._soldierEffectListTableView = Utils.checkComponent(this._soldierEffectListNode, TableView);
          this._soldierEffectListTableView.cellItem = this._soldierEffectListCell;
        };
        _proto._initEvent = function _initEvent() {
          var _this2 = this;
          var _loop = function _loop(btnName) {
            var info = _this2._tabBtnDict[btnName];
            var btnNode = info.btn;
            AddClick(btnNode, function () {
              _this2.onClickTabBtn(btnName);
            }, _this2);
          };
          for (var btnName in this._tabBtnDict) {
            _loop(btnName);
          }
        };
        _proto.initParam = function initParam(params) {
          if (params) {
            this.mainView = params.mainView;
          }
          this._initNode();
        };
        _proto.onShow = function onShow(params) {
          this.requestNewData();
        };
        _proto.onHide = function onHide() {};
        _proto.requestNewData = function requestNewData(isReset) {
          var _this3 = this;
          if (isReset === void 0) {
            isReset = true;
          }
          if (isReset) {
            this.replyData = undefined;
            this._curTabBtnName = SUIT_BTN_NAME;
            this.bindDataToUI(false);
          }
          KsMiniGameMgr.instance.requestPlayerDecoration(function (success, resp) {
            if (!isValid(_this3)) return;
            if (success && resp) {
              _this3.replyData = resp;
            }
            _this3.bindDataToUI(!isReset);
          }, this);
        };
        _proto.bindDataToUI = function bindDataToUI(keep) {
          if (keep === void 0) {
            keep = false;
          }
          this._initNode();
          this.updateTabBtns();
          this.updateTabPanels(keep);
        };
        _proto.updateTabBtns = function updateTabBtns() {
          for (var btnName in this._tabBtnDict) {
            var info = this._tabBtnDict[btnName];
            var btnNode = info.btn;
            var selectNode = info.select;
            var unselectNode = info.unselect;
            Utils.setActive(selectNode, btnName == this._curTabBtnName);
            Utils.setActive(unselectNode, btnName != this._curTabBtnName);
          }
        };
        _proto.updateTabPanels = function updateTabPanels(keep) {
          if (keep === void 0) {
            keep = false;
          }
          if (this._curTabBtnName == SUIT_BTN_NAME || this._curTabBtnName == APPEAR_EFFECT_BTN_NAME) {
            Utils.setActive(this._comItemPanel, true);
            Utils.setActive(this._soldierEffectPanel, false);
            this.updateComItemList(keep);
          } else if (this._curTabBtnName == SOLDIER_EFFECT_BTN_NAME) {
            Utils.setActive(this._comItemPanel, false);
            Utils.setActive(this._soldierEffectPanel, true);
            this.updateSoldierEffectPanel(keep);
          } else {
            Utils.setActive(this._comItemPanel, false);
            Utils.setActive(this._soldierEffectPanel, false);
          }
        };
        _proto.resetComItemDatas = function resetComItemDatas() {
          this.comItemDatas.length = 0;
          if (this.replyData) {
            if (this._curTabBtnName == SUIT_BTN_NAME) {
              var _this$replyData$getSu;
              ArrayUtil.merge(this.comItemDatas, (_this$replyData$getSu = this.replyData.getSuitDecorations()) != null ? _this$replyData$getSu : []);
            } else if (this._curTabBtnName == APPEAR_EFFECT_BTN_NAME) {
              var _this$replyData$getAp;
              ArrayUtil.merge(this.comItemDatas, (_this$replyData$getAp = this.replyData.getAppearEffectDecorations()) != null ? _this$replyData$getAp : []);
            }
          }
          SortUtil.sortMultiCondition(this.comItemDatas, [{
            key: "owned",
            ascending: false
          }, {
            key: "usable",
            ascending: false
          }, {
            key: "convertibility",
            ascending: false
          }]);
        };
        _proto.updateComItemList = function updateComItemList(keep) {
          var _this4 = this;
          if (keep === void 0) {
            keep = false;
          }
          this.resetComItemDatas();
          this._comItemListTableView.cellCount = this.comItemDatas.length;
          this._comItemListTableView.cellInterval = 10;
          this._comItemListTableView.gridNum = 3;
          this._comItemListTableView.gridInterval = 9;
          this._comItemListTableView.setExtraDistance(0, 0);
          this._comItemListTableView.setCellLoadCallback(function (index, cell, reuse) {
            if (!cell || !isValid(cell)) return;
            _this4.refreshComItemListViewCell(index, cell);
          });
          this._comItemListTableView.reloadData(true, keep);
        };
        _proto.refreshComItemListViewCell = function refreshComItemListViewCell(index, cell) {
          if (!cell || !isValid(cell)) return;
          cell.active = true;
          var cellData = this.comItemDatas[index];
          if (!cellData) return;
          this.refreshDecorationCell(cellData, cell);
        };
        _proto.updateSoldierEffectPanel = function updateSoldierEffectPanel(keep) {
          if (keep === void 0) {
            keep = false;
          }
          if (!keep) {
            this.soldierEffectCurTabIdx = 0;
          }
          this.resetSoldierEffectArmClassDatas();
          this.updateSoldierEffectTabList(keep);
          this.updateSoldierEffectList(keep);
        };
        _proto.resetSoldierEffectArmClassDatas = function resetSoldierEffectArmClassDatas() {
          this.soldierEffectArmClassDatas.length = 0;
          if (this.replyData) {
            if (this._curTabBtnName == SOLDIER_EFFECT_BTN_NAME) {
              var _this$replyData$getSo;
              ArrayUtil.merge(this.soldierEffectArmClassDatas, (_this$replyData$getSo = this.replyData.getSoldierEffectArmClassDecorationDatas()) != null ? _this$replyData$getSo : []);
            }
          }
          this.resetSoldierEffectDecorationDatas();
        };
        _proto.resetSoldierEffectDecorationDatas = function resetSoldierEffectDecorationDatas() {
          this.soldierEffectDecorationDatas.length = 0;
          if (this.soldierEffectCurTabIdx >= this.soldierEffectArmClassDatas.length) {
            this.soldierEffectCurTabIdx = 0;
          }
          if (this.soldierEffectCurTabIdx < this.soldierEffectArmClassDatas.length) {
            var _this$soldierEffectAr;
            var tmpArr = (_this$soldierEffectAr = this.soldierEffectArmClassDatas[this.soldierEffectCurTabIdx].decorationDatas) != null ? _this$soldierEffectAr : [];
            ArrayUtil.merge(this.soldierEffectDecorationDatas, tmpArr);
          }
          SortUtil.sortMultiCondition(this.soldierEffectDecorationDatas, [{
            key: "owned",
            ascending: false
          }, {
            key: "usable",
            ascending: false
          }, {
            key: "convertibility",
            ascending: false
          }]);
        };
        _proto.updateSoldierEffectTabList = function updateSoldierEffectTabList(keep) {
          var _this5 = this;
          if (keep === void 0) {
            keep = false;
          }
          this._soldierEffectTabListTableView.cellCount = this.soldierEffectArmClassDatas.length;
          this._soldierEffectTabListTableView.cellInterval = 5;
          this._soldierEffectTabListTableView.setExtraDistance(0, 0);
          this._soldierEffectTabListTableView.setCellLoadCallback(function (index, cell, reuse) {
            if (!cell || !isValid(cell)) return;
            _this5.refreshSoldierEffectTabListViewCell(index, cell);
          });
          this._soldierEffectTabListTableView.reloadData(true, keep);
        };
        _proto.refreshSoldierEffectTabListViewCell = function refreshSoldierEffectTabListViewCell(index, cell) {
          var _this6 = this;
          if (!cell || !isValid(cell)) return;
          cell.active = true;
          var cellData = this.soldierEffectArmClassDatas[index];
          if (!cellData) return;
          var _btn = cell.getChildByName("btn");
          var _unselect = _btn.getChildByName("unselect");
          var _unselectLabel = _unselect.getChildByName("Label");
          var _select = _btn.getChildByName("select");
          var _selectLabel = _select.getChildByName("Label");
          Utils.setActive(_unselect, index != this.soldierEffectCurTabIdx);
          Utils.setActive(_select, index == this.soldierEffectCurTabIdx);
          I18n.setLabelText(_unselectLabel, String(cellData.armClass));
          I18n.setLabelText(_selectLabel, String(cellData.armClass));
          AddClick(_btn, function () {
            _this6.onClickSoldierEffectTabBtn(index);
          });
        };
        _proto.onClickSoldierEffectTabBtn = function onClickSoldierEffectTabBtn(index) {
          if (this.soldierEffectCurTabIdx == index) return;
          this.soldierEffectCurTabIdx = index;
          this.resetSoldierEffectDecorationDatas();
          this.updateSoldierEffectTabList(true);
          this.updateSoldierEffectList(false);
        };
        _proto.updateSoldierEffectList = function updateSoldierEffectList(keep) {
          var _this7 = this;
          if (keep === void 0) {
            keep = false;
          }
          this._soldierEffectListTableView.cellCount = this.soldierEffectDecorationDatas.length;
          this._soldierEffectListTableView.cellInterval = 10;
          this._soldierEffectListTableView.gridNum = 2;
          this._soldierEffectListTableView.gridInterval = 9;
          this._soldierEffectListTableView.setExtraDistance(0, 0);
          this._soldierEffectListTableView.setCellLoadCallback(function (index, cell, reuse) {
            if (!cell || !isValid(cell)) return;
            _this7.refreshSoldierEffectListViewCell(index, cell);
          });
          this._soldierEffectListTableView.reloadData(true, keep);
        };
        _proto.refreshSoldierEffectListViewCell = function refreshSoldierEffectListViewCell(index, cell) {
          if (!cell || !isValid(cell)) return;
          cell.active = true;
          var cellData = this.soldierEffectDecorationDatas[index];
          if (!cellData) return;
          this.refreshDecorationCell(cellData, cell);
        };
        _proto.refreshDecorationCell = function refreshDecorationCell(cellData, cell) {
          var _this8 = this;
          if (!cell || !isValid(cell)) return;
          cell.active = true;
          if (!cellData) return;
          var dressupNode = Utils.checkChildComponent(cell, "Item", DressUpItemNode);
          dressupNode.initWithData({
            decorationData: cellData
          });
          dressupNode.setClickEquipCallback(function (decoration) {
            _this8.doEquipDecoration(decoration);
          });
          dressupNode.setClickBuyCallback(function (decoration) {
            var shopId = undefined;
            if (decoration) {
              var shopConfig = ConfigUtils.getShopConfigByDecoration(decoration.type, decoration.id);
              if (shopConfig) {
                var _shopConfig$Id;
                shopId = (_shopConfig$Id = shopConfig.Id) != null ? _shopConfig$Id : 0;
              }
            }
            if (_this8.mainView && isValid(_this8.mainView)) {
              _this8.mainView.selectBottomBtn(BottomBtnNames.SHOP, shopId);
            }
          });
        };
        _proto.doEquipDecoration = function doEquipDecoration(decoration) {
          var _this9 = this;
          if (!decoration) return;
          LogMgr.log("do equip decoration, type: " + decoration.type + ", id: " + decoration.id);
          KsMiniGameMgr.instance.requestPlayerUseDecoration(decoration.type, decoration.id, function (success, resp) {
            if (!isValid(_this9)) return;
            if (success && resp && resp.code == 0) {
              LogMgr.log("do equip decoration success, type: " + decoration.type + ", id: " + decoration.id);
              _this9.requestNewData(false);
            } else {
              LogMgr.log("do equip decoration fail, type: " + decoration.type + ", id: " + decoration.id);
            }
          }, this);
        };
        _proto.onClickTabBtn = function onClickTabBtn(tabBtnName) {
          if (this._curTabBtnName == tabBtnName) return;
          this._curTabBtnName = tabBtnName;
          this.bindDataToUI();
        };
        return MainItemPanel;
      }(EventComp)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MainRankPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventComp.ts', './UIConstants.ts', './Utils.ts', './KsMiniGameMgr.ts', './TableView.ts', './ArrayUtil.ts', './I18n.ts', './HeadNode.ts', './UIUtils.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, isValid, EventComp, Utils, AddClick, KsMiniGameMgr, TableView, ArrayUtil, I18n, HeadNode, UIUtils;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      isValid = module.isValid;
    }, function (module) {
      EventComp = module.EventComp;
    }, null, function (module) {
      Utils = module.Utils;
      AddClick = module.AddClick;
    }, function (module) {
      KsMiniGameMgr = module.KsMiniGameMgr;
    }, function (module) {
      TableView = module.TableView;
    }, function (module) {
      ArrayUtil = module.ArrayUtil;
    }, function (module) {
      I18n = module.I18n;
    }, function (module) {
      HeadNode = module.HeadNode;
    }, function (module) {
      UIUtils = module.UIUtils;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "30be0epVEJIx5geYDWzsNOX", "MainRankPanel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MONTH_BTN_NAME = "monthBtn";
      var WEEK_BTN_NAME = "weekBtn";
      var MainRankPanel = exports('MainRankPanel', (_dec = ccclass('MainRankPanel'), _dec(_class = /*#__PURE__*/function (_EventComp) {
        _inheritsLoose(MainRankPanel, _EventComp);
        function MainRankPanel() {
          var _this;
          _this = _EventComp.call(this) || this;
          _this._isInitNode = false;
          _this.mainView = void 0;
          _this.replyData = void 0;
          _this.rankDatas = [];
          //UI
          _this._tabBtnDict = {};
          _this._curTabBtnName = MONTH_BTN_NAME;
          //
          _this._labelTitleScore = void 0;
          _this._labelTitleRank = void 0;
          _this._listNode = void 0;
          _this._listCell = void 0;
          _this._listTableView = void 0;
          _this._listeners = [];
          return _this;
        }
        var _proto = MainRankPanel.prototype;
        _proto.onLoad = function onLoad() {
          _EventComp.prototype.onLoad.call(this);
          this._initNode();
          this._initEvent();
        };
        _proto._initNode = function _initNode() {
          if (this._isInitNode) return;
          this._isInitNode = true;
          this._initUI();
        };
        _proto._initUI = function _initUI() {
          var btns = this.node.getChildByPath("tabBtnPanel/btns");
          var btnNames = [MONTH_BTN_NAME, WEEK_BTN_NAME];
          for (var _i = 0, _btnNames = btnNames; _i < _btnNames.length; _i++) {
            var btnName = _btnNames[_i];
            var btnNode = btns.getChildByName(btnName);
            var selectNode = btnNode == null ? void 0 : btnNode.getChildByName("select");
            var unselectNode = btnNode == null ? void 0 : btnNode.getChildByName("unselect");
            this._tabBtnDict[btnName] = {
              btn: btnNode,
              select: selectNode,
              unselect: unselectNode
            };
          }
          //
          var listPanel = this.node.getChildByName("listPanel");
          this._labelTitleScore = listPanel.getChildByPath("title/bg/LabelScore");
          this._labelTitleRank = listPanel.getChildByPath("title/bg/LabelRank");
          //
          this._listNode = listPanel.getChildByName("list");
          this._listCell = this._listNode.getChildByPath("view/content/listCell");
          this._listCell.active = false;
          this._listTableView = Utils.checkComponent(this._listNode, TableView);
          this._listTableView.cellItem = this._listCell;
        };
        _proto._initEvent = function _initEvent() {
          var _this2 = this;
          var _loop = function _loop(btnName) {
            var info = _this2._tabBtnDict[btnName];
            var btnNode = info.btn;
            AddClick(btnNode, function () {
              _this2.onClickTabBtn(btnName);
            }, _this2);
          };
          for (var btnName in this._tabBtnDict) {
            _loop(btnName);
          }
        };
        _proto.initParam = function initParam(params) {
          if (params) {
            this.mainView = params.mainView;
          }
          this._initNode();
        };
        _proto.onShow = function onShow(params) {
          var _this3 = this;
          this.replyData = undefined;
          this._curTabBtnName = MONTH_BTN_NAME;
          this.bindDataToUI();
          KsMiniGameMgr.instance.requestPlayerRank(function (success, resp) {
            if (!isValid(_this3)) return;
            if (success && resp) {
              _this3.replyData = resp;
            }
            _this3.bindDataToUI();
          }, this);
        };
        _proto.onHide = function onHide() {};
        _proto.bindDataToUI = function bindDataToUI() {
          this._initNode();
          this.updateTabBtns();
          this.updateRankList();
        };
        _proto.updateTabBtns = function updateTabBtns() {
          for (var btnName in this._tabBtnDict) {
            var info = this._tabBtnDict[btnName];
            var btnNode = info.btn;
            var selectNode = info.select;
            var unselectNode = info.unselect;
            Utils.setActive(selectNode, btnName == this._curTabBtnName);
            Utils.setActive(unselectNode, btnName != this._curTabBtnName);
          }
        };
        _proto.updateRankDatas = function updateRankDatas() {
          var _this$replyData;
          this.rankDatas.length = 0;
          var rankVo = (_this$replyData = this.replyData) == null ? void 0 : _this$replyData.getRankTO();
          if (rankVo) {
            if (this._curTabBtnName == MONTH_BTN_NAME) {
              var _rankVo$monthRank;
              ArrayUtil.merge(this.rankDatas, (_rankVo$monthRank = rankVo.monthRank) != null ? _rankVo$monthRank : []);
            } else if (this._curTabBtnName == WEEK_BTN_NAME) {
              var _rankVo$weekRank;
              ArrayUtil.merge(this.rankDatas, (_rankVo$weekRank = rankVo.weekRank) != null ? _rankVo$weekRank : []);
            }
          }
        };
        _proto.updateRankList = function updateRankList() {
          var _this4 = this;
          this.updateRankDatas();
          //
          if (this._curTabBtnName == MONTH_BTN_NAME) {
            I18n.setLabelText(this._labelTitleScore, "本月积分");
            I18n.setLabelText(this._labelTitleRank, "本月排名");
          } else if (this._curTabBtnName == WEEK_BTN_NAME) {
            I18n.setLabelText(this._labelTitleScore, "本周积分");
            I18n.setLabelText(this._labelTitleRank, "本周排名");
          }
          //
          this._listTableView.cellCount = this.rankDatas.length;
          this._listTableView.cellInterval = 0;
          this._listTableView.setExtraDistance(0, 0);
          this._listTableView.setCellLoadCallback(function (index, cell, reuse) {
            if (!cell || !isValid(cell)) return;
            _this4.refreshListViewCell(index, cell);
          });
          this._listTableView.reloadData();
        };
        _proto.refreshListViewCell = function refreshListViewCell(index, cell) {
          if (!cell || !isValid(cell)) return;
          cell.active = true;
          var cellData = this.rankDatas[index];
          if (!cellData) return;
          var _head = cellData.head;
          var _avatarFrame = cellData.avatarFrame;
          var _winStreak = cellData.winStreak;
          var _nickname = cellData.nickname;
          var _killStreak = cellData.killStreak;
          var _score = cellData.score;
          var _rank = cellData.rank;
          var headNode = Utils.checkChildComponent(cell, "headNode", HeadNode);
          var LabelWinStreak = cell.getChildByName("LabelWinStreak");
          var LabelName = cell.getChildByName("LabelName");
          var LabelKillStreak = cell.getChildByName("LabelKillStreak");
          var LabelScore = cell.getChildByName("LabelScore");
          var monthRank = cell.getChildByPath("rankNodes/monthRank");
          var weekRank = cell.getChildByPath("rankNodes/weekRank");
          var LabelMonthRank = monthRank.getChildByName("Label");
          var LabelWeekRank = weekRank.getChildByName("Label");
          headNode.initWithData({
            headUrl: _head,
            headFrameId: _avatarFrame
          });
          I18n.setLabelText(LabelWinStreak, _winStreak + "\u8FDE\u80DC");
          I18n.setLabelText(LabelName, UIUtils.cutNickName(_nickname));
          I18n.setLabelText(LabelKillStreak, Utils.formatNumber(_killStreak) + "\u8FDE\u6D88");
          I18n.setLabelText(LabelScore, Utils.formatNumber(_score));
          Utils.setActive(monthRank, this._curTabBtnName == MONTH_BTN_NAME);
          Utils.setActive(weekRank, this._curTabBtnName == WEEK_BTN_NAME);
          I18n.setLabelText(LabelMonthRank, String(_rank));
          I18n.setLabelText(LabelWeekRank, String(_rank));
        };
        _proto.onClickTabBtn = function onClickTabBtn(tabBtnName) {
          if (this._curTabBtnName == tabBtnName) return;
          this._curTabBtnName = tabBtnName;
          this.bindDataToUI();
        };
        return MainRankPanel;
      }(EventComp)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MainShopPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventComp.ts', './UIConstants.ts', './Utils.ts', './KsMiniGameMgr.ts', './LabelTimer.ts', './TableView.ts', './ArrayUtil.ts', './DateUtil.ts', './ShopItemNode.ts', './LogMgr.ts', './UIUtils.ts', './ConfigUtils.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, isValid, HorizontalTextAlignment, EventComp, Utils, KsMiniGameMgr, LabelTimer, TableView, ArrayUtil, DateUtil, ShopItemNode, LogMgr, UIUtils, ConfigUtils;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      isValid = module.isValid;
      HorizontalTextAlignment = module.HorizontalTextAlignment;
    }, function (module) {
      EventComp = module.EventComp;
    }, null, function (module) {
      Utils = module.Utils;
    }, function (module) {
      KsMiniGameMgr = module.KsMiniGameMgr;
    }, function (module) {
      LabelTimer = module.LabelTimer;
    }, function (module) {
      TableView = module.TableView;
    }, function (module) {
      ArrayUtil = module.ArrayUtil;
    }, function (module) {
      DateUtil = module.DateUtil;
    }, function (module) {
      ShopItemNode = module.ShopItemNode;
    }, function (module) {
      LogMgr = module.LogMgr;
    }, function (module) {
      UIUtils = module.UIUtils;
    }, function (module) {
      ConfigUtils = module.ConfigUtils;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "724c7vBoSFLTJxBt4uEOdEz", "MainShopPanel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MainShopPanel = exports('MainShopPanel', (_dec = ccclass('MainShopPanel'), _dec(_class = /*#__PURE__*/function (_EventComp) {
        _inheritsLoose(MainShopPanel, _EventComp);
        function MainShopPanel() {
          var _this;
          _this = _EventComp.call(this) || this;
          _this._isInitNode = false;
          _this.mainView = void 0;
          _this.replyData = void 0;
          _this.nextRefreshTime = 0;
          _this.goodsDatas = [];
          _this.gotoShopId = undefined;
          //UI
          _this._labelCD = void 0;
          _this._listNode = void 0;
          _this._listCell = void 0;
          _this._listTableView = void 0;
          _this._listeners = [];
          return _this;
        }
        var _proto = MainShopPanel.prototype;
        _proto.onLoad = function onLoad() {
          _EventComp.prototype.onLoad.call(this);
          this._initNode();
          this._initEvent();
        };
        _proto._initNode = function _initNode() {
          if (this._isInitNode) return;
          this._isInitNode = true;
          this._initUI();
        };
        _proto._initUI = function _initUI() {
          var _this2 = this;
          var listPanel = this.node.getChildByName("listPanel");
          this._labelCD = Utils.checkChildComponent(listPanel, "title/LabelTime", LabelTimer);
          this._labelCD.setServerTimeGetter(function () {
            return KsMiniGameMgr.instance.serverMsTime;
          });
          this._labelCD.setTimeFormator(function (second) {
            return "\u66F4\u65B0\u5012\u8BA1\u65F6:" + DateUtil.getDayHourMinuteSecond(second);
          });
          this._labelCD.setEndCallback(function () {
            _this2.requestNewData();
          });
          //
          this._listNode = listPanel.getChildByName("list");
          this._listCell = this._listNode.getChildByPath("view/content/listCell");
          this._listCell.active = false;
          this._listTableView = Utils.checkComponent(this._listNode, TableView);
          this._listTableView.cellItem = this._listCell;
        };
        _proto._initEvent = function _initEvent() {};
        _proto.initParam = function initParam(params) {
          if (params) {
            this.mainView = params.mainView;
          }
          this._initNode();
        };
        _proto.onShow = function onShow(params) {
          if (params !== undefined) {
            if (typeof params == "number") {
              this.gotoShopId = params;
            }
          }
          this.requestNewData();
        };
        _proto.onHide = function onHide() {};
        _proto.requestNewData = function requestNewData(isReset) {
          var _this3 = this;
          if (isReset === void 0) {
            isReset = true;
          }
          if (isReset) {
            this.replyData = undefined;
            this.updateShopData();
            this.bindDataToUI(false);
          }
          KsMiniGameMgr.instance.requestShopList(function (success, resp) {
            if (!isValid(_this3)) return;
            if (success && resp) {
              _this3.replyData = resp;
              _this3.updateShopData();
            }
            _this3.bindDataToUI(!isReset);
          }, this);
        };
        _proto.bindDataToUI = function bindDataToUI(keep) {
          if (keep === void 0) {
            keep = false;
          }
          this._initNode();
          this.updateCd();
          this.updateShopList(keep);
        };
        _proto.updateShopData = function updateShopData() {
          this.nextRefreshTime = 0;
          this.goodsDatas.length = 0;
          if (this.replyData) {
            this.nextRefreshTime = this.replyData.getNextRefreshTime();
            var goodsArr = this.replyData.getGoodsTO();
            ArrayUtil.merge(this.goodsDatas, goodsArr != null ? goodsArr : []);
          }
        };
        _proto.updateCd = function updateCd() {
          var curTime = KsMiniGameMgr.instance.serverMsTime;
          if (this.nextRefreshTime <= 0 || curTime >= this.nextRefreshTime) {
            this._labelCD.cleanTime();
          } else {
            this._labelCD.setTime(this.nextRefreshTime);
          }
        };
        _proto.updateShopList = function updateShopList(keep) {
          var _this4 = this;
          if (keep === void 0) {
            keep = false;
          }
          this._listTableView.cellCount = this.goodsDatas.length;
          this._listTableView.cellInterval = 10;
          this._listTableView.gridNum = 3;
          this._listTableView.gridInterval = 9;
          this._listTableView.setExtraDistance(0, 0);
          this._listTableView.setCellLoadCallback(function (index, cell, reuse) {
            if (!cell || !isValid(cell)) return;
            _this4.refreshListViewCell(index, cell);
          });
          if (this.gotoShopId && this.goodsDatas.length > 0) {
            var tmpShopId = this.gotoShopId;
            this.gotoShopId = undefined;
            var tmpIdx = undefined;
            for (var i = 0; i < this.goodsDatas.length; i++) {
              var vv = this.goodsDatas[i];
              if (vv.goodsId == tmpShopId) {
                tmpIdx = i;
                break;
              }
            }
            if (tmpIdx) {
              this._listTableView.reloadData();
              this._listTableView.jumpToIndex(tmpIdx);
            } else {
              this._listTableView.reloadData(true, keep);
            }
          } else {
            this._listTableView.reloadData(true, keep);
          }
        };
        _proto.refreshListViewCell = function refreshListViewCell(index, cell) {
          var _this5 = this;
          if (!cell || !isValid(cell)) return;
          cell.active = true;
          var cellData = this.goodsDatas[index];
          if (!cellData) return;
          var shopItemNode = Utils.checkChildComponent(cell, "Item", ShopItemNode);
          shopItemNode.initWithData({
            goodsData: cellData
          });
          shopItemNode.setClickBuyCallback(function (shopId, canBuy) {
            if (!canBuy) return;
            _this5.showBuyGoodsDialog(shopId);
          });
        };
        _proto.showBuyGoodsDialog = function showBuyGoodsDialog(shopId) {
          var _this6 = this;
          LogMgr.log("show buy goods dialog, shopId: " + shopId);
          var tipStr = ConfigUtils.getBuyGoodsTipString(shopId);
          if (!tipStr || tipStr.length == 0) return;
          UIUtils.showComDialogView({
            content: tipStr,
            isBlankClose: false,
            horizontalAlign: HorizontalTextAlignment.CENTER,
            okCallback: function okCallback() {
              if (!isValid(_this6)) return;
              _this6.doBuyGoods(shopId);
            }
          });
        };
        _proto.doBuyGoods = function doBuyGoods(shopId) {
          var _this7 = this;
          LogMgr.log("do buy goods, shopId: " + shopId);
          KsMiniGameMgr.instance.requestShopBuy(shopId, function (success, resp) {
            if (!isValid(_this7)) return;
            if (success && resp && resp.code == 0) {
              LogMgr.log("do buy goods success, shopId: " + shopId);
              _this7.requestNewData(false);
            } else {
              LogMgr.log("do buy goods fail, shopId: " + shopId);
            }
          }, this);
        };
        return MainShopPanel;
      }(EventComp)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MainView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './WinBase.ts', './WinMgr.ts', './Constants.ts', './Utils.ts', './MainInfoPanel.ts', './MainItemPanel.ts', './MainRankPanel.ts', './MainShopPanel.ts', './LogMgr.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, _decorator, Button, WinBase, EWinActionType, WinMgr, WIN_TYPE, WIN_MASK_TYPE, Constants, Utils, AddClick, MainInfoPanel, MainItemPanel, MainRankPanel, MainShopPanel, LogMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
    }, function (module) {
      WinBase = module.WinBase;
      EWinActionType = module.EWinActionType;
    }, function (module) {
      WinMgr = module.WinMgr;
      WIN_TYPE = module.WIN_TYPE;
      WIN_MASK_TYPE = module.WIN_MASK_TYPE;
    }, function (module) {
      Constants = module.Constants;
    }, function (module) {
      Utils = module.Utils;
      AddClick = module.AddClick;
    }, function (module) {
      MainInfoPanel = module.MainInfoPanel;
    }, function (module) {
      MainItemPanel = module.MainItemPanel;
    }, function (module) {
      MainRankPanel = module.MainRankPanel;
    }, function (module) {
      MainShopPanel = module.MainShopPanel;
    }, function (module) {
      LogMgr = module.LogMgr;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "efc73Yx7iRD/Yhh6mjZAONr", "MainView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BottomBtnNames = exports('BottomBtnNames', {
        INFO: "btnInfo",
        ITEM: "btnItem",
        SHOP: "btnShop",
        RANK: "btnRank"
      });
      var MainView = exports('MainView', (_dec = ccclass('MainView'), _dec(_class = /*#__PURE__*/function (_WinBase) {
        _inheritsLoose(MainView, _WinBase);
        function MainView() {
          var _this;
          _this = _WinBase.call(this) || this;
          _this._isInitNode = false;
          _this._bottomBtnInfos = [];
          _this._curBottomBtnName = BottomBtnNames.INFO;
          _this._mainInfoPanel = void 0;
          _this._mainItemPanel = void 0;
          _this._mainRankPanel = void 0;
          _this._mainShopPanel = void 0;
          _this._mainPanels = [];
          _this.showType = WIN_TYPE.CAN_NOT_CLOSE;
          _this.maskType = WIN_MASK_TYPE.NONE;
          _this.actionType = EWinActionType.Fade;
          _this.zOrder = Constants.ContentNodeZOrder.MAIN_VIEW;
          _this._listeners = [];
          return _this;
        }
        var _proto = MainView.prototype;
        _proto.onLoad = function onLoad() {
          _WinBase.prototype.onLoad.call(this);
          this._initNode();
          this._initEvent();
        };
        _proto.onWinOpened = function onWinOpened() {
          _WinBase.prototype.onWinOpened.call(this);
          WinMgr.instance.clearOtherContent(this);
          this.bindDataToUI();
        };
        _proto._initNode = function _initNode() {
          if (this._isInitNode) return;
          this._isInitNode = true;
          this._initUI();
        };
        _proto._initUI = function _initUI() {
          //底部按钮
          this._bottomBtnInfos.length = 0;
          var bottom_btns = this.node.getChildByPath("bottom/btns");
          for (var k in BottomBtnNames) {
            var nodeName = BottomBtnNames[k];
            var btnRoot = bottom_btns.getChildByName(nodeName);
            var ImgSelect = btnRoot.getChildByName("ImgSelect");
            var btn = Utils.getChildComponent(btnRoot, "btn", Button);
            var btnInfo = {
              btnName: nodeName,
              root: btnRoot,
              ImgSelect: ImgSelect,
              btn: btn
            };
            this._bottomBtnInfos.push(btnInfo);
          }
          //面板
          var panels = this.node.getChildByName("panels");
          this._mainInfoPanel = Utils.checkChildComponent(panels, "panelInfo", MainInfoPanel);
          this._mainInfoPanel.initParam({
            mainView: this
          });
          this._mainItemPanel = Utils.checkChildComponent(panels, "panelItem", MainItemPanel);
          this._mainItemPanel.initParam({
            mainView: this
          });
          this._mainRankPanel = Utils.checkChildComponent(panels, "panelRank", MainRankPanel);
          this._mainRankPanel.initParam({
            mainView: this
          });
          this._mainShopPanel = Utils.checkChildComponent(panels, "panelShop", MainShopPanel);
          this._mainShopPanel.initParam({
            mainView: this
          });
          Utils.setActive(this._mainInfoPanel, false);
          Utils.setActive(this._mainItemPanel, false);
          Utils.setActive(this._mainRankPanel, false);
          Utils.setActive(this._mainShopPanel, false);
          this._mainPanels.length = 0;
          this._mainPanels.push({
            btnName: BottomBtnNames.INFO,
            panelObj: this._mainInfoPanel.node,
            panelComp: this._mainInfoPanel
          });
          this._mainPanels.push({
            btnName: BottomBtnNames.ITEM,
            panelObj: this._mainItemPanel.node,
            panelComp: this._mainItemPanel
          });
          this._mainPanels.push({
            btnName: BottomBtnNames.RANK,
            panelObj: this._mainRankPanel.node,
            panelComp: this._mainRankPanel
          });
          this._mainPanels.push({
            btnName: BottomBtnNames.SHOP,
            panelObj: this._mainShopPanel.node,
            panelComp: this._mainShopPanel
          });
        };
        _proto._initEvent = function _initEvent() {
          var _this2 = this;
          var _loop = function _loop() {
            var info = _step.value;
            var btnName = info.btnName;
            var btn = info.btn;
            AddClick(btn.node, function () {
              _this2.onClickBottomBtnName(btnName);
            });
          };
          for (var _iterator = _createForOfIteratorHelperLoose(this._bottomBtnInfos), _step; !(_step = _iterator()).done;) {
            _loop();
          }
        };
        _proto.initParam = function initParam(params) {
          this._initNode();
        };
        _proto.bindDataToUI = function bindDataToUI() {
          this._initNode();
          this.updateBottomBtns();
          this.updatePanels();
        };
        _proto.updateBottomBtns = function updateBottomBtns() {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this._bottomBtnInfos), _step2; !(_step2 = _iterator2()).done;) {
            var info = _step2.value;
            var btnName = info.btnName;
            var ImgSelect = info.ImgSelect;
            Utils.setActive(ImgSelect, btnName == this._curBottomBtnName);
          }
        };
        _proto.updatePanels = function updatePanels(showParams) {
          for (var _iterator3 = _createForOfIteratorHelperLoose(this._mainPanels), _step3; !(_step3 = _iterator3()).done;) {
            var info = _step3.value;
            var btnName = info.btnName;
            var panelObj = info.panelObj;
            var panelComp = info.panelComp;
            if (btnName == this._curBottomBtnName) {
              Utils.setActive(panelObj, true);
              LogMgr.log("main view show panel: " + panelObj.name);
              panelComp.onShow(showParams);
            } else {
              panelComp.onHide();
              Utils.setActive(panelObj, false);
            }
          }
        };
        _proto.onClickBottomBtnName = function onClickBottomBtnName(btnName) {
          this.selectBottomBtn(btnName);
        };
        _proto.selectBottomBtn = function selectBottomBtn(btnName, showParams) {
          if (this._curBottomBtnName == btnName) return;
          this._curBottomBtnName = btnName;
          this.updateBottomBtns();
          this.updatePanels(showParams);
        };
        return MainView;
      }(WinBase)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MathUtil.ts", ['cc'], function (exports) {
  var cclegacy, math, Vec3, misc;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      math = module.math;
      Vec3 = module.Vec3;
      misc = module.misc;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7b6fc3he69DH4isrdsjvDvp", "MathUtil", undefined);
      var MathUtil = exports('MathUtil', {
        /**
         * @description: 从startp到endp的旋转角度
         * @param {Vec3} startP
         * @param {Vec3} endP
         * @return {number}
         */
        getRotateAngle: function getRotateAngle(startP, endP) {
          var dx = startP.x - endP.x;
          var dy = startP.y - endP.y;
          if (dx == 0) {
            if (dy > 0) return 90; // x相同应该转90

            return 270;
          }
          var angle = math.toDegree(Math.atan(dy / dx));
          if (angle < 0) angle = -angle;
          if (startP.x < endP.x) {
            if (startP.y > endP.y) {
              angle = 360 - angle;
            }
          } else {
            if (startP.y < endP.y) {
              angle = 180 - angle;
            } else {
              angle = 180 + angle;
            }
          }
          return angle;
        },
        /**
         * @description: 贝塞尔曲线计算函数（TweenOption-onUpdate中使用）
         * @param {number} t ratio
         * @param {Vec3} p1 点位1（一般为起点）
         * @param {Vec3} cp 控制点
         * @param {Vec3} p2 点位2（一般为终点）
         * @return {Vec3}
         */
        twoBezier: function twoBezier(t, p1, cp, p2) {
          var x = (1 - t) * (1 - t) * p1.x + 2 * t * (1 - t) * cp.x + t * t * p2.x;
          var y = (1 - t) * (1 - t) * p1.y + 2 * t * (1 - t) * cp.y + t * t * p2.y;
          return new Vec3(x, y, 0);
        },
        /**
         * @param num1 分子
         * @param num2 分母
         * @return [0, 1]
         */
        getPercent: function getPercent(num1, num2) {
          if (isNaN(num1) || isNaN(num2)) return 0;
          if (num2 == 0) return 0;
          return misc.clampf(num1 / num2, 0, 1);
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/md5.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "20114ELNcpAJbQhwi+s5iNc", "md5", undefined);
      var Md5 = exports('Md5', /*#__PURE__*/function () {
        Md5.hashStr = function hashStr(str, raw) {
          if (raw === void 0) {
            raw = false;
          }
          return this.onePassHasher.start().appendStr(str).end(raw);
        }

        /**
         * Hash a ASCII string on the spot
         * @param str String to hash
         * @param raw Whether to return the value as an `Int32Array`
         */;
        Md5.hashAsciiStr = function hashAsciiStr(str, raw) {
          if (raw === void 0) {
            raw = false;
          }
          return this.onePassHasher.start().appendAsciiStr(str).end(raw);
        }
        // Private Static Variables
        ;

        Md5._hex = function _hex(x) {
          var hc = Md5.hexChars;
          var ho = Md5.hexOut;
          var n;
          var offset;
          var j;
          var i;
          for (i = 0; i < 4; i += 1) {
            offset = i * 8;
            n = x[i];
            for (j = 0; j < 8; j += 2) {
              ho[offset + 1 + j] = hc.charAt(n & 0x0F);
              n >>>= 4;
              ho[offset + 0 + j] = hc.charAt(n & 0x0F);
              n >>>= 4;
            }
          }
          return ho.join('');
        };
        Md5._md5cycle = function _md5cycle(x, k) {
          var a = x[0];
          var b = x[1];
          var c = x[2];
          var d = x[3];
          // ff()
          a += (b & c | ~b & d) + k[0] - 680876936 | 0;
          a = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[1] - 389564586 | 0;
          d = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[2] + 606105819 | 0;
          c = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
          b = (b << 22 | b >>> 10) + c | 0;
          a += (b & c | ~b & d) + k[4] - 176418897 | 0;
          a = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
          d = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
          c = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[7] - 45705983 | 0;
          b = (b << 22 | b >>> 10) + c | 0;
          a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
          a = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
          d = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[10] - 42063 | 0;
          c = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
          b = (b << 22 | b >>> 10) + c | 0;
          a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
          a = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[13] - 40341101 | 0;
          d = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
          c = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
          b = (b << 22 | b >>> 10) + c | 0;
          // gg()
          a += (b & d | c & ~d) + k[1] - 165796510 | 0;
          a = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
          d = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[11] + 643717713 | 0;
          c = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[0] - 373897302 | 0;
          b = (b << 20 | b >>> 12) + c | 0;
          a += (b & d | c & ~d) + k[5] - 701558691 | 0;
          a = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[10] + 38016083 | 0;
          d = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[15] - 660478335 | 0;
          c = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[4] - 405537848 | 0;
          b = (b << 20 | b >>> 12) + c | 0;
          a += (b & d | c & ~d) + k[9] + 568446438 | 0;
          a = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
          d = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[3] - 187363961 | 0;
          c = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
          b = (b << 20 | b >>> 12) + c | 0;
          a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
          a = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[2] - 51403784 | 0;
          d = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
          c = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
          b = (b << 20 | b >>> 12) + c | 0;
          // hh()
          a += (b ^ c ^ d) + k[5] - 378558 | 0;
          a = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
          d = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
          c = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[14] - 35309556 | 0;
          b = (b << 23 | b >>> 9) + c | 0;
          a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
          a = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
          d = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[7] - 155497632 | 0;
          c = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
          b = (b << 23 | b >>> 9) + c | 0;
          a += (b ^ c ^ d) + k[13] + 681279174 | 0;
          a = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[0] - 358537222 | 0;
          d = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[3] - 722521979 | 0;
          c = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[6] + 76029189 | 0;
          b = (b << 23 | b >>> 9) + c | 0;
          a += (b ^ c ^ d) + k[9] - 640364487 | 0;
          a = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[12] - 421815835 | 0;
          d = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[15] + 530742520 | 0;
          c = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[2] - 995338651 | 0;
          b = (b << 23 | b >>> 9) + c | 0;
          // ii()
          a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
          a = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
          d = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
          c = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
          b = (b << 21 | b >>> 11) + c | 0;
          a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
          a = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
          d = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
          c = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
          b = (b << 21 | b >>> 11) + c | 0;
          a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
          a = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
          d = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
          c = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
          b = (b << 21 | b >>> 11) + c | 0;
          a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
          a = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
          d = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
          c = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
          b = (b << 21 | b >>> 11) + c | 0;
          x[0] = a + x[0] | 0;
          x[1] = b + x[1] | 0;
          x[2] = c + x[2] | 0;
          x[3] = d + x[3] | 0;
        };
        function Md5() {
          this._dataLength = 0;
          this._bufferLength = 0;
          this._state = new Int32Array(4);
          this._buffer = new ArrayBuffer(68);
          this._buffer8 = void 0;
          this._buffer32 = void 0;
          this._buffer8 = new Uint8Array(this._buffer, 0, 68);
          this._buffer32 = new Uint32Array(this._buffer, 0, 17);
          this.start();
        }

        /**
         * Initialise buffer to be hashed
         */
        var _proto = Md5.prototype;
        _proto.start = function start() {
          this._dataLength = 0;
          this._bufferLength = 0;
          this._state.set(Md5.stateIdentity);
          return this;
        }

        // Char to code point to to array conversion:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
        // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown

        /**
         * Append a UTF-8 string to the hash buffer
         * @param str String to append
         */;
        _proto.appendStr = function appendStr(str) {
          var buf8 = this._buffer8;
          var buf32 = this._buffer32;
          var bufLen = this._bufferLength;
          var code;
          var i;
          for (i = 0; i < str.length; i += 1) {
            code = str.charCodeAt(i);
            if (code < 128) {
              buf8[bufLen++] = code;
            } else if (code < 0x800) {
              buf8[bufLen++] = (code >>> 6) + 0xC0;
              buf8[bufLen++] = code & 0x3F | 0x80;
            } else if (code < 0xD800 || code > 0xDBFF) {
              buf8[bufLen++] = (code >>> 12) + 0xE0;
              buf8[bufLen++] = code >>> 6 & 0x3F | 0x80;
              buf8[bufLen++] = code & 0x3F | 0x80;
            } else {
              code = (code - 0xD800) * 0x400 + (str.charCodeAt(++i) - 0xDC00) + 0x10000;
              if (code > 0x10FFFF) {
                throw new Error('Unicode standard supports code points up to U+10FFFF');
              }
              buf8[bufLen++] = (code >>> 18) + 0xF0;
              buf8[bufLen++] = code >>> 12 & 0x3F | 0x80;
              buf8[bufLen++] = code >>> 6 & 0x3F | 0x80;
              buf8[bufLen++] = code & 0x3F | 0x80;
            }
            if (bufLen >= 64) {
              this._dataLength += 64;
              Md5._md5cycle(this._state, buf32);
              bufLen -= 64;
              buf32[0] = buf32[16];
            }
          }
          this._bufferLength = bufLen;
          return this;
        }

        /**
         * Append an ASCII string to the hash buffer
         * @param str String to append
         */;
        _proto.appendAsciiStr = function appendAsciiStr(str) {
          var buf8 = this._buffer8;
          var buf32 = this._buffer32;
          var bufLen = this._bufferLength;
          var i;
          var j = 0;
          for (;;) {
            i = Math.min(str.length - j, 64 - bufLen);
            while (i--) {
              buf8[bufLen++] = str.charCodeAt(j++);
            }
            if (bufLen < 64) {
              break;
            }
            this._dataLength += 64;
            Md5._md5cycle(this._state, buf32);
            bufLen = 0;
          }
          this._bufferLength = bufLen;
          return this;
        }

        /**
         * Append a byte array to the hash buffer
         * @param input array to append
         */;
        _proto.appendByteArray = function appendByteArray(input) {
          var buf8 = this._buffer8;
          var buf32 = this._buffer32;
          var bufLen = this._bufferLength;
          var i;
          var j = 0;
          for (;;) {
            i = Math.min(input.length - j, 64 - bufLen);
            while (i--) {
              buf8[bufLen++] = input[j++];
            }
            if (bufLen < 64) {
              break;
            }
            this._dataLength += 64;
            Md5._md5cycle(this._state, buf32);
            bufLen = 0;
          }
          this._bufferLength = bufLen;
          return this;
        }

        /**
         * Get the state of the hash buffer
         */;
        _proto.getState = function getState() {
          var s = this._state;
          return {
            buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)),
            buflen: this._bufferLength,
            length: this._dataLength,
            state: [s[0], s[1], s[2], s[3]]
          };
        }

        /**
         * Override the current state of the hash buffer
         * @param state New hash buffer state
         */;
        _proto.setState = function setState(state) {
          var buf = state.buffer;
          var x = state.state;
          var s = this._state;
          var i;
          this._dataLength = state.length;
          this._bufferLength = state.buflen;
          s[0] = x[0];
          s[1] = x[1];
          s[2] = x[2];
          s[3] = x[3];
          for (i = 0; i < buf.length; i += 1) {
            this._buffer8[i] = buf.charCodeAt(i);
          }
        }

        /**
         * Hash the current state of the hash buffer and return the result
         * @param raw Whether to return the value as an `Int32Array`
         */;
        _proto.end = function end(raw) {
          if (raw === void 0) {
            raw = false;
          }
          var bufLen = this._bufferLength;
          var buf8 = this._buffer8;
          var buf32 = this._buffer32;
          var i = (bufLen >> 2) + 1;
          this._dataLength += bufLen;
          var dataBitsLen = this._dataLength * 8;
          buf8[bufLen] = 0x80;
          buf8[bufLen + 1] = buf8[bufLen + 2] = buf8[bufLen + 3] = 0;
          buf32.set(Md5.buffer32Identity.subarray(i), i);
          if (bufLen > 55) {
            Md5._md5cycle(this._state, buf32);
            buf32.set(Md5.buffer32Identity);
          }

          // Do the final computation based on the tail and length
          // Beware that the final length may not fit in 32 bits so we take care of that
          if (dataBitsLen <= 0xFFFFFFFF) {
            buf32[14] = dataBitsLen;
          } else {
            var matches = dataBitsLen.toString(16).match(/(.*?)(.{0,8})$/);
            if (matches === null) {
              return;
            }
            var lo = parseInt(matches[2], 16);
            var hi = parseInt(matches[1], 16) || 0;
            buf32[14] = lo;
            buf32[15] = hi;
          }
          Md5._md5cycle(this._state, buf32);
          return raw ? this._state : Md5._hex(this._state);
        };
        return Md5;
      }());
      _class = Md5;
      Md5.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]);
      Md5.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      Md5.hexChars = '0123456789abcdef';
      Md5.hexOut = [];
      // Permanent instance is to use for one-call hashing
      Md5.onePassHasher = new _class();
      if (Md5.hashStr('hello') !== '5d41402abc4b2a76b9719d911017c592') {
        throw new Error('Md5 self test failed.');
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NameplateIcon.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Csv.ts', './AssetUtil.ts', './Utils.ts', './ConfigUtils.ts', './LogMgr.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Sprite, Component, Csv, AssetUtil, Utils, ConfigUtils, LogMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      Csv = module.Csv;
    }, function (module) {
      AssetUtil = module.AssetUtil;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      ConfigUtils = module.ConfigUtils;
    }, function (module) {
      LogMgr = module.LogMgr;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "e9d39gbacNEWb+xoXOpdd9B", "NameplateIcon", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var NameplateIcon = exports('NameplateIcon', (_dec = ccclass('NameplateIcon'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(NameplateIcon, _Component);
        function NameplateIcon() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._isInitNode = false;
          //DATA
          _this.nameplateId = 0;
          //UI
          _this._icon = void 0;
          return _this;
        }
        var _proto = NameplateIcon.prototype;
        _proto.onLoad = function onLoad() {
          this._initNode();
          this._initEvent();
        };
        _proto._initNode = function _initNode() {
          if (this._isInitNode) return;
          this._isInitNode = true;
          this._initUI();
        };
        _proto._initUI = function _initUI() {
          this._icon = Utils.checkChildComponent(this.node, "Icon", Sprite);
        };
        _proto._initEvent = function _initEvent() {};
        _proto.init = function init(params, data) {
          this.initParam(params);
          this.initWithData(data);
        };
        _proto.initParam = function initParam(params) {
          if (!params) return;
        };
        _proto.initWithData = function initWithData(data) {
          this._initNode();
          this.initData(data);
          this.bindDataToUI();
        };
        _proto.initData = function initData(data) {
          var _data$nameplateId;
          this.nameplateId = (_data$nameplateId = data == null ? void 0 : data.nameplateId) != null ? _data$nameplateId : 0;
        };
        _proto.bindDataToUI = function bindDataToUI() {
          var _config$ItemIcon;
          this._icon.spriteFrame = null;
          var config = Csv.Decoration[this.nameplateId];
          if (!config) {
            LogMgr.log("decoration config null, nameplateId: " + this.nameplateId);
          }
          var img = (_config$ItemIcon = config == null ? void 0 : config.ItemIcon) != null ? _config$ItemIcon : ConfigUtils.DEFAULT_IMG_NAMEPLATE;
          AssetUtil.setSpriteFrameByAtlas(this._icon.node, img);
        };
        return NameplateIcon;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NativeUtil.ts", ['cc', './ArrayUtil.ts', './Electron.ts'], function (exports) {
  var cclegacy, game, ArrayUtil, Electron;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      game = module.game;
    }, function (module) {
      ArrayUtil = module.ArrayUtil;
    }, function (module) {
      Electron = module.Electron;
    }],
    execute: function () {
      cclegacy._RF.push({}, "689c1/slV5OG5D77/dGgw+i", "NativeUtil", undefined);
      var NativeUtil = exports('NativeUtil', /*#__PURE__*/function () {
        function NativeUtil() {}
        // 获得exe启动参数
        NativeUtil.getRunArguments = function getRunArguments() {
          var ret = [];
          if (Electron.isElectronValid()) {
            var args = Electron.getArguments();
            ArrayUtil.merge(ret, args);
          }
          return ret;
        }

        // 设置屏幕尺寸
        ;

        NativeUtil.setViewSize = function setViewSize(w, h) {
          if (w <= 0 || h <= 0) return;
          if (Electron.isElectronValid()) {
            Electron.setSize(w, h);
          }
        }

        // 剪切板
        ;

        NativeUtil.copyTextToClipboard = function copyTextToClipboard(str) {
          if (Electron.isElectronValid()) {
            Electron.copyToClipboard(str);
          }
        }

        // 关闭游戏
        ;

        NativeUtil.closeGame = function closeGame() {
          if (Electron.isElectronValid()) {
            Electron.closeApp();
          } else {
            game.end();
          }
          // 微信小游戏退出
          if (wx && wx.exitMiniProgram) {
            wx.exitMiniProgram();
          }
        };
        return NativeUtil;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NetChannel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameTimer.ts', './Command.ts', './GlobalMgr.ts', './WinMgr.ts', './EventListener.ts', './ClientEvents.ts', './NetMgr.ts', './LoginMgr.ts', './GameApp.ts', './I18n.ts', './LogMgr.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, _createClass, cclegacy, log, sys, GameTimer, MsgId, GlobalMgr, WinMgr, EventListener, ClientEvents, NetMgr, LoginMgr, GameApp, I18n, LogMgr;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      log = module.log;
      sys = module.sys;
    }, function (module) {
      GameTimer = module.GameTimer;
    }, function (module) {
      MsgId = module.MsgId;
    }, function (module) {
      GlobalMgr = module.GlobalMgr;
    }, function (module) {
      WinMgr = module.WinMgr;
    }, function (module) {
      EventListener = module.EventListener;
    }, function (module) {
      ClientEvents = module.ClientEvents;
    }, function (module) {
      NetMgr = module.NetMgr;
    }, function (module) {
      LoginMgr = module.LoginMgr;
    }, function (module) {
      GameApp = module.GameApp;
    }, function (module) {
      I18n = module.I18n;
    }, function (module) {
      LogMgr = module.LogMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "32f80UAHYdL9r8ehlhutBsu", "NetChannel", undefined);

      /** 网络状态 */
      var NetChannelState = exports('NetChannelState', /*#__PURE__*/function (NetChannelState) {
        NetChannelState[NetChannelState["Closed"] = 0] = "Closed";
        NetChannelState[NetChannelState["Connecting"] = 1] = "Connecting";
        NetChannelState[NetChannelState["Working"] = 2] = "Working";
        return NetChannelState;
      }({})); // 可传输数据
      var sOfflineTime = 30 * 1000; // 离线超时时间
      var sNetWarningTime = 8 * 1000; // 离线网络警告时间
      var sHeartOffsetTime = 5 * 1000; // 心跳包发送间隔

      var sCustomCloseCode = exports('sCustomCloseCode', 4444); // 客户端主动去关闭socket时的code
      var sCustomInitConnectCloseCode = exports('sCustomInitConnectCloseCode', 4445); // 连接socket前的关闭
      var sCustomReLoginCloseCode = exports('sCustomReLoginCloseCode', 4446); // 重连时主动关闭

      /** 网络通道 */
      var NetChannel = exports('NetChannel', /*#__PURE__*/function () {
        // 是否可以继续重连
        // ============================================================================================

        function NetChannel(socket, protocol) {
          this._connectOptions = null;
          // 网络选项
          this._isSocketInit = false;
          // Socket是否初始化过
          this._state = NetChannelState.Closed;
          // 节点当前状态
          this._socket = null;
          // Socket对象（可能是原生socket、websocket、wx.socket...)
          this._protocolHelper = null;
          // 包解析对象
          this._connectedCallback = null;
          // 连接完成回调
          this._listener = new Map();
          // 监听者列表
          // 重连 心跳
          this._lastHeartTime = 0;
          // 上次心跳包发送后经过的时间  发送时重置为0
          this._lastRecvTime = 0;
          // 上次接受到数据后又经过的时间  接受到数据时重置为0
          this._heartTimer = null;
          // 心跳定时器
          this._lastNetErrTime = null;
          this._isReconnecting = false;
          // 是否正在重连中
          this._isAutoConnected = false;
          // 是否为重连连接成功
          this._delayReconnectTimer = null;
          this._delayReLoginCloseTimer = null;
          this._reconnectNum = 0;
          // 当前重连的次数
          this._canContinueReconnect = true;
          this._socket = socket;
          this._protocolHelper = protocol;
        }
        var _proto = NetChannel.prototype;
        // ============================================================================================
        _proto.destroy = function destroy() {
          EventListener.offByTarget(this);
          this.closeSocket();
          this._stopHeart();
          this._stopDelayReconnect();
          this._stopDelayReLoginClose();
          this.cleanListeners();
        }

        /** 连接网络  */;
        _proto.connect = function connect(options, asReconnect) {
          var _this$_connectOptions;
          if (options === void 0) {
            options = null;
          }
          if (asReconnect === void 0) {
            asReconnect = false;
          }
          // 先关闭已经存在的socket
          this.closeSocket(sCustomInitConnectCloseCode);
          //  不同的socket地址了 切服务器这种情况 
          if (this._connectOptions && options && this._connectOptions.url != options.url) {
            var _options$maxReconnect;
            this._canContinueReconnect = true;
            options.maxReconnectCount = (_options$maxReconnect = options.maxReconnectCount) != null ? _options$maxReconnect : 1;
          }
          // options == null 重连的时候用的
          this._connectOptions = options || this._connectOptions;
          this._connectOptions.maxReconnectCount = (_this$_connectOptions = this._connectOptions.maxReconnectCount) != null ? _this$_connectOptions : 5;
          this._isAutoConnected = asReconnect;
          if (this._socket && this._state == NetChannelState.Closed) {
            this.initSocket();
            this._state = NetChannelState.Connecting;
            if (!this._socket.connect(this._connectOptions)) {
              return false;
            }
            this._connectedCallback = this._connectOptions.connectCallback || null;
            if (asReconnect) {
              EventListener.dispatchEvent(ClientEvents.SOCKET_RECONNECT_START);
            }
            return true;
          }
          return false;
        }

        /** 通道初始化网络Socket  */;
        _proto.initSocket = function initSocket() {
          var _this = this;
          if (this._isSocketInit) {
            return;
          }
          this._socket.onConnected = function (event) {
            _this.onConnected(event);
          };
          this._socket.onMessage = function (msg) {
            _this.onMessage(msg);
          };
          this._socket.onError = function (event) {
            _this.onError(event);
          };
          this._socket.onClosed = function (event) {
            _this.onClosed(event);
          };

          // 网络有变化的时候
          EventListener.on({
            evtId: ClientEvents.NET_CHANGED,
            handler: this._onNetChanged,
            target: this
          });
          EventListener.on({
            evtId: ClientEvents.ENTER_SHOW,
            handler: this._onEnterShow,
            target: this
          });
          this._isSocketInit = true;
        }

        /** 网络连接成功 */;
        _proto.onConnected = function onConnected(event) {
          log("NetChannel onConnected!");
          this._state = NetChannelState.Working;
          this._reconnectNum = 0;
          this._canContinueReconnect = true;
          this._stopDelayReconnect();
          EventListener.dispatchEvent(ClientEvents.SOCKET_CONNECTED);
          WinMgr.instance.hideWeakNetTip();
          this._startHeart(); // 连接成功后开始心跳
          // 如果连接回调
          if (this._connectedCallback !== null) {
            this._connectedCallback(this._isAutoConnected);
          }
        }

        // 接收到一个完整的消息包 分包粘包处理
        ;

        _proto.onMessage = function onMessage(msg) {
          this._lastRecvTime = 0;
          this._lastNetErrTime = null;
          WinMgr.instance.hideWeakNetTip();
          if (msg == null) {
            return;
          }
          var tmpData = this._protocolHelper.unpack(msg);
          var hasError = tmpData.err;
          var msgs = tmpData.result;
          for (var _iterator = _createForOfIteratorHelperLoose(msgs), _step; !(_step = _iterator()).done;) {
            var data = _step.value;
            this._doReceiveData(data.msgId, data.msg);
          }
          if (hasError) {
            LogMgr.logyellow("unpack has error, will close for relogin");
            this._delayReLoginClose();
          }
        }

        /** 关闭连接(重新登陆) */;
        _proto._delayReLoginClose = function _delayReLoginClose() {
          var _this2 = this;
          this._stopDelayReLoginClose();
          this._delayReLoginCloseTimer = GameTimer.instance.setTimeout(function () {
            _this2.closeSocket(sCustomReLoginCloseCode, "The client actively closes the socket (relogin)");
          }, 500);
        };
        _proto._stopDelayReLoginClose = function _stopDelayReLoginClose() {
          if (this._delayReLoginCloseTimer) {
            GameTimer.instance.clearTimeout(this._delayReLoginCloseTimer);
          }
          this._delayReLoginCloseTimer = null;
        }

        /** 错误时操作 */;
        _proto.onError = function onError(event) {
          console.warn("NetChannel.onError", event);
          // this._state = NetChannelState.Closed;
          // this._checkReconnect();
        }

        /** 网络关闭时操作 */;
        _proto.onClosed = function onClosed(event) {
          console.warn("socket onClosed", event);
          this._state = NetChannelState.Closed;
          EventListener.dispatchEvent(ClientEvents.SOCKET_ONCLOSED);
          // 不是客户端主动关闭的才做重连
          if (event && event.code != sCustomCloseCode && event.code != sCustomInitConnectCloseCode) {
            this._checkReconnect();
          }
        }

        /** 只是关闭Socket套接字（仍然重用缓存与当前状态） */;
        _proto.closeSocket = function closeSocket(code, reason) {
          var _code;
          code = (_code = code) != null ? _code : sCustomCloseCode;
          this._state = NetChannelState.Closed;
          this._stopHeart();
          // 主动关闭时关闭掉所有 
          if (code == sCustomCloseCode) {
            this._canContinueReconnect = false;
            WinMgr.instance.hideWeakNetTip();
            this._stopDelayReconnect();
          }
          if (this._socket) {
            this._socket.close(code, reason);
          }
        }

        // 发起请求
        ;

        _proto.send = function send(msgid, data) {
          if (this._state != NetChannelState.Working) {
            LogMgr.log("net state not working ", this._state);
            return false;
          }
          var pbuf = this._protocolHelper.pack(msgid, data);
          if (pbuf == null) {
            console.error("NetChannel pack error " + msgid);
            return false;
          }
          return this._socket.send(pbuf);
        }

        // ============================================================================================
        // 回调相关处理

        /** 增加一个回调监听 */;
        _proto.addResponseHandler = function addResponseHandler(cmd, callback, target) {
          if (callback == null) {
            console.error("NetChannel addResponeHandler error " + cmd);
            return false;
          }
          var resCbObj = {
            cmd: cmd,
            target: target,
            func: callback
          };
          var lt = this._listener.get(cmd);
          if (!lt) {
            this._listener.set(cmd, [resCbObj]);
          } else {
            console.warn("Normally, it is best to listen to the same protocol only once", cmd);
            var index = this._getListenerIndex(cmd, target);
            // 有旧的  相同页面
            if (index != -1) {
              lt.splice(index, 1);
            }
            lt.push(resCbObj);
          }
          return true;
        }

        // 删除一个协议监听  
        ;

        _proto.removeResponseHandler = function removeResponseHandler(cmd, target) {
          var lt = this._listener.get(cmd);
          if (lt) {
            if (!target) {
              this._listener["delete"](cmd);
            } else {
              var index = this._getListenerIndex(cmd, target);
              if (index != -1) {
                lt.splice(index, 1);
                if (lt.length == 0) {
                  this._listener["delete"](cmd);
                }
              }
            }
          }
        }
        // 删除target下的所有协议监听
        ;

        _proto.removeResponseHandlerByTarget = function removeResponseHandlerByTarget(target) {
          var _this3 = this;
          this._listener.forEach(function (val, cmd) {
            _this3.removeResponseHandler(cmd, target);
          });
        }
        /** 清空监听 */;
        _proto.cleanListeners = function cleanListeners(msgid) {
          if (msgid === void 0) {
            msgid = -1;
          }
          if (msgid == -1) {
            this._listener.clear();
          } else {
            this._listener["delete"](msgid);
          }
        }

        /** 当前连接状态 */;
        _proto.getState = function getState() {
          return this._state;
        };
        _proto._doReceiveData = function _doReceiveData(cmd, data) {
          if (cmd == MsgId.HeartReply) {
            // 心跳返回重新设置服务器时间
            GlobalMgr.instance.serverTime = data.vlong[0] * 0.001;
            //EventListener.dispatchEvent(ClientEvents.REFRESH_DOT);
            return;
          }
          LogMgr.log("NetChannel receive msgid " + cmd);
          // 触发listeners队列
          var lt = this._listener.get(cmd);
          if (lt && lt.length > 0) {
            for (var _iterator2 = _createForOfIteratorHelperLoose(lt), _step2; !(_step2 = _iterator2()).done;) {
              var rsp = _step2.value;
              LogMgr.log("NetChannel execute listener msgid " + cmd);
              rsp.func.call(rsp.target, data, cmd);
            }
          }
        };
        _proto._getListenerIndex = function _getListenerIndex(cmd, target) {
          var lt = this._listener.get(cmd);
          if (lt) {
            for (var i = 0, len = lt.length; i < len; ++i) {
              var resObj = lt[i];
              if (resObj.target == target) {
                return i;
              }
            }
          }
          return -1;
        }

        // 心跳请求
        ;

        _proto._requestHeartBeat = function _requestHeartBeat() {
          this.send(MsgId.HeartRequest, {});
        };
        _proto._startHeart = function _startHeart() {
          var _this4 = this;
          this._lastRecvTime = 0;
          this._lastHeartTime = 0;
          if (!this._heartTimer) {
            var interval = 100;
            // 切换到后台后 组件的schedule会暂停  但是js这个setInterval之类的不会暂停
            // 并且时间间隔不是前台定的那个固定值
            var nowT = Date.now();
            this._heartTimer = GameTimer.instance.setInterval(function () {
              var dt = Date.now() - nowT;
              nowT = Date.now();
              // web 考虑到断点时间较久 
              if (sys.platform == sys.Platform.DESKTOP_BROWSER) {
                dt = interval;
              }
              _this4._lastRecvTime += dt;
              _this4._lastHeartTime += dt;
              // 在后台了还要继续心跳吗??
              // if (GameApp.instance.isInBack) return;

              // 距离上次收到消息 大于一个时间段后做重连
              if (_this4._lastRecvTime >= sOfflineTime) {
                LogMgr.log("reconnect because last recvtime > offline");
                _this4._checkReconnect("heartbeat timeout");
              } else if (_this4._lastRecvTime >= sNetWarningTime) {
                _this4._showConnectTips();
              }
              // 距上次发送心跳时间
              if (_this4._lastHeartTime >= sHeartOffsetTime) {
                _this4._lastHeartTime = 0;
                _this4._requestHeartBeat();
              }
            }, interval);
          }
        };
        _proto._checkReconnect = function _checkReconnect(reason) {
          var _this5 = this;
          if (reason === void 0) {
            reason = "";
          }
          this._stopHeart();

          //大于一定时间150s不做重连
          // if (this._lastNetErrTime && Date.now() - this._lastNetErrTime > 150000) {
          //     this._showErrorTips();
          //     return;
          // }
          // 不能重连的情况
          if (!this._canContinueReconnect || !LoginMgr.instance.isNetgateLoginSuccess) {
            this._stopDelayReconnect();
            return;
          }
          // 没得网络
          if (NetMgr.instance.netState == sys.NetworkType.NONE || !NetMgr.instance.isLocalNetFine) {
            this._showConnectTips();
            this._stopDelayReconnect();
            return;
          }
          LogMgr.log("reconnect!!! reseaon: " + reason);
          // 在后台就不重连了
          if (GameApp.instance.isInBack) return;
          // 客观原因导致的重连
          if (reason.length > 0) {
            this._reconnectNum = 0;
            this._stopDelayReconnect();
            this.connect(null, true);
            return;
          }
          // 上一个重连正在进行
          if (this._isReconnecting) return;
          this._isReconnecting = true;
          // 连接失败后的重连
          ++this._reconnectNum;
          LogMgr.log("Connection count:", this._reconnectNum);
          if (this._reconnectNum > this._connectOptions.maxReconnectCount) {
            this._canContinueReconnect = false;
            this._showErrorTips();
          } else {
            this._delayReconnectTimer = GameTimer.instance.setTimeout(function () {
              _this5._showConnectTips(I18n.t(24) + _this5._reconnectNum);
              _this5._isReconnecting = false;
              _this5.connect(null, true);
            }, (this._reconnectNum - 1) * 5000);
          }
        };
        _proto._showConnectTips = function _showConnectTips(tip) {
          EventListener.dispatchEvent(ClientEvents.NET_WEAK, {
            tip: tip
          });
        };
        _proto._showErrorTips = function _showErrorTips(msg) {
          if (msg === void 0) {
            msg = "";
          }
          this._canContinueReconnect = false;
          this._connectOptions = null;
          this._stopHeart();
          this._stopDelayReconnect();
          EventListener.dispatchEvent(ClientEvents.NET_ERROR, msg);
        };
        _proto._stopDelayReconnect = function _stopDelayReconnect() {
          this._isReconnecting = false;
          if (this._delayReconnectTimer) {
            GameTimer.instance.clearTimeout(this._delayReconnectTimer);
          }
          this._delayReconnectTimer = null;
        };
        _proto._stopHeart = function _stopHeart() {
          if (this._heartTimer) {
            GameTimer.instance.clearInterval(this._heartTimer);
            this._heartTimer = null;
          }
          this._lastNetErrTime = this._lastNetErrTime || Date.now();
        };
        _proto._onNetChanged = function _onNetChanged() {
          // 网络连上了 并且socket断开了 并且 网关登陆是成功的
          if (NetMgr.instance.isLocalNetFine && NetMgr.instance.netState > 0 && this._state == NetChannelState.Closed && LoginMgr.instance.isNetgateLoginSuccess) {
            this._checkReconnect("local net fine");
          }
        };
        _proto._onEnterShow = function _onEnterShow() {
          if (NetMgr.instance.isLocalNetFine && NetMgr.instance.netState > 0 && this._state == NetChannelState.Closed && LoginMgr.instance.isNetgateLoginSuccess) {
            this._checkReconnect("from background reconnect");
          }
        };
        _createClass(NetChannel, [{
          key: "protoHelper",
          get: function get() {
            return this._protocolHelper;
          }
        }]);
        return NetChannel;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NetInterface.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "762d8oMKQtJvYzE8y5taVa0", "NetInterface", undefined);
      /*
       * @Author: qiaomingwu
       * @Date: 2023-03-27 11:22:01
       * @Description: 网络接口定义
       */
      /** socket断连类型 */
      var SOCKET_CLOSE_CODE = exports('SOCKET_CLOSE_CODE', /*#__PURE__*/function (SOCKET_CLOSE_CODE) {
        SOCKET_CLOSE_CODE[SOCKET_CLOSE_CODE["FORCE_CLOSE"] = 4001] = "FORCE_CLOSE";
        SOCKET_CLOSE_CODE[SOCKET_CLOSE_CODE["UNPACK_ERROR"] = 4002] = "UNPACK_ERROR";
        return SOCKET_CLOSE_CODE;
      }({})); //解包失败

      /** Socket接口 */

      /** 网络提示接口 */

      /** 网络参数 */

      /** 请求对象 */

      /**  回调对象 */

      /** 消息预处理 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NetMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetChannel.ts', './ProtoBufProtocol.ts', './WebSock.ts', './GameTimer.ts', './EventListener.ts', './ClientEvents.ts', './BaseMgr.ts', './channel_config.ts', './LogMgr.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, cclegacy, sys, sCustomReLoginCloseCode, NetChannel, ProtoBufProtocol, WebSock, GameTimer, EventListener, ClientEvents, BaseMgr, channel_config, LogMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }, function (module) {
      sCustomReLoginCloseCode = module.sCustomReLoginCloseCode;
      NetChannel = module.NetChannel;
    }, function (module) {
      ProtoBufProtocol = module.ProtoBufProtocol;
    }, function (module) {
      WebSock = module.WebSock;
    }, function (module) {
      GameTimer = module.GameTimer;
    }, function (module) {
      EventListener = module.EventListener;
    }, function (module) {
      ClientEvents = module.ClientEvents;
    }, function (module) {
      BaseMgr = module.BaseMgr;
    }, function (module) {
      channel_config = module.channel_config;
    }, function (module) {
      LogMgr = module.LogMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "51b7b7/Ih9NSZBlWP4eYkZF", "NetMgr", undefined);
      var signKeyTest = "400FDAadfe";
      var signKeyOnline = "12dfFDAadf";
      /** 网络管理对象  */
      var NetMgr = exports('NetMgr', /*#__PURE__*/function (_BaseMgr) {
        _inheritsLoose(NetMgr, _BaseMgr);
        function NetMgr() {
          var _globalThis$navigator, _globalThis$navigator2;
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseMgr.call.apply(_BaseMgr, [this].concat(args)) || this;
          _this._netChannel = null;
          _this._netStateTimer = null;
          _this.netState = sys.getNetworkType();
          _this.isLocalNetFine = (_globalThis$navigator = (_globalThis$navigator2 = globalThis.navigator) == null ? void 0 : _globalThis$navigator2.onLine) != null ? _globalThis$navigator : true;
          return _this;
        }
        var _proto = NetMgr.prototype;
        _proto.init = function init() {
          this._initChannel();
          this._init();
        };
        _proto.destroy = function destroy() {
          var _this$_netChannel;
          (_this$_netChannel = this._netChannel) == null || _this$_netChannel.destroy();
          // 清除本来网络监听
          if (globalThis.removeEventListener) {
            globalThis.removeEventListener("online", this._onLocalNetOnline);
            globalThis.removeEventListener("offline", this._onLocalNetOffline);
          }
          // 清除定时器
          if (this._netStateTimer) {
            GameTimer.instance.clearInterval(this._netStateTimer);
          }
          _BaseMgr.prototype.destroy.call(this);
        }

        /** 调用Channel连接 */;
        _proto.connect = function connect(options) {
          return this._netChannel.connect(options);
        }

        /** 调用Channel发送 */;
        _proto.send = function send(msgid, data) {
          return this._netChannel.send(msgid, data);
        }

        // 协议监听
        ;

        _proto.addResponseListener = function addResponseListener(cmd, callback, target) {
          this._netChannel.addResponseHandler(cmd, callback, target);
        }

        // 协议监听  数组形式[ [cmd, calback, target], [] ... ]
        ;

        _proto.addResponseListeners = function addResponseListeners(arr) {
          for (var _iterator = _createForOfIteratorHelperLoose(arr), _step; !(_step = _iterator()).done;) {
            var cell = _step.value;
            this.addResponseListener(cell[0], cell[1], cell[2]);
          }
        };
        _proto.removeResponseListener = function removeResponseListener(cmd, target) {
          this._netChannel.removeResponseHandler(cmd, target);
        };
        _proto.removeResponseListenerTarget = function removeResponseListenerTarget(target) {
          this._netChannel.removeResponseHandlerByTarget(target);
        };
        _proto.cleanListeners = function cleanListeners(msgId) {
          if (msgId === void 0) {
            msgId = -1;
          }
          this._netChannel.cleanListeners(msgId);
        }

        /** 调用Channel主动去关闭 */;
        _proto.close = function close() {
          return this._netChannel.closeSocket(undefined, "The client actively closes the socket");
        }
        /** 调用Channel主动去关闭(重新登陆) */;
        _proto.closeForRelogin = function closeForRelogin() {
          this._netChannel.closeSocket(sCustomReLoginCloseCode, "The client actively closes the socket (relogin)");
        }

        /**
         * 获取某个连接的状态
         */;
        _proto.getChannelState = function getChannelState() {
          return this._netChannel.getState();
        };
        _proto._initChannel = function _initChannel() {
          //创建socket
          var channel = new NetChannel(new WebSock(), new ProtoBufProtocol());
          // 线上线下服务器要搞成不一样的key!!!!
          channel.protoHelper.signKey = channel_config.isOnline ? signKeyOnline : signKeyTest;
          this._netChannel = channel;
        };
        _proto._init = function _init() {
          var _globalThis$navigator3,
            _globalThis$navigator4,
            _this2 = this;
          // 原生平台是否有效？？
          this.isLocalNetFine = (_globalThis$navigator3 = (_globalThis$navigator4 = globalThis.navigator) == null ? void 0 : _globalThis$navigator4.onLine) != null ? _globalThis$navigator3 : true;
          if (globalThis.addEventListener) {
            globalThis.addEventListener("online", this._onLocalNetOnline);
            globalThis.addEventListener('offline', this._onLocalNetOffline);
          }
          this.netState = sys.getNetworkType();
          if (!this._netStateTimer) {
            this._netStateTimer = GameTimer.instance.setInterval(function () {
              var netState = sys.getNetworkType();
              if (netState != _this2.netState) {
                EventListener.dispatchEvent(ClientEvents.NET_CHANGED);
              }
              _this2.netState = netState;
            }, 4000);
          }
        };
        _proto._onLocalNetOnline = function _onLocalNetOnline() {
          // this.isLocalNetFine = true;  此时的this是一个globalThis对象
          NetMgr._instance && (NetMgr._instance.isLocalNetFine = true);
          EventListener.dispatchEvent(ClientEvents.NET_CHANGED);
        };
        _proto._onLocalNetOffline = function _onLocalNetOffline() {
          NetMgr._instance && (NetMgr._instance.isLocalNetFine = false);
          EventListener.dispatchEvent(ClientEvents.NET_CHANGED);
        }

        // http 相关的请求 不能跨域请求
        ;

        NetMgr.httpGet = function httpGet(url, successCallback, failCallback, timeout, responseType) {
          if (timeout === void 0) {
            timeout = 5000;
          }
          if (responseType === void 0) {
            responseType = "json";
          }
          var xhr = new XMLHttpRequest();
          xhr.timeout = timeout;
          xhr.responseType = responseType;
          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              if (xhr.status >= 200 && xhr.status < 400) {
                if (successCallback) {
                  successCallback(xhr.response);
                }
              } else if (failCallback) {
                failCallback(xhr.status);
              }
            }
          };
          LogMgr.log("Http Get: " + url);
          xhr.open("GET", url, true);
          xhr.send();
        };
        NetMgr.httpPost = function httpPost(url, data, headers, successCallback, failCallback, timeout, responseType) {
          if (timeout === void 0) {
            timeout = 5000;
          }
          if (responseType === void 0) {
            responseType = "json";
          }
          var xhr = new XMLHttpRequest();
          xhr.timeout = timeout;
          xhr.responseType = responseType;
          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              if (xhr.status >= 200 && xhr.status < 400) {
                if (successCallback) {
                  successCallback(xhr.response);
                }
              } else if (failCallback) {
                failCallback(xhr.status);
              }
            }
          };
          var uri = this.assembleToURI(data);
          LogMgr.log("Http post: " + url + uri);
          xhr.open("POST", url, true); // true都用异步请求
          xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          if (headers && headers.length > 0) {
            for (var _iterator2 = _createForOfIteratorHelperLoose(headers), _step2; !(_step2 = _iterator2()).done;) {
              var _header = _step2.value;
              xhr.setRequestHeader(_header.k, _header.v);
            }
          }
          if (uri && uri.length > 0) {
            xhr.send(uri);
          } else {
            xhr.send();
          }
        };
        NetMgr.assembleToURI = function assembleToURI(requestParams) {
          var params = [];
          if (requestParams) {
            Object.entries(requestParams).forEach(function (_ref) {
              var key = _ref[0],
                value = _ref[1];
              var param = key + '=' + encodeURIComponent(value.toString());
              params.push(param);
            });
          }
          return params.join('&');
        };
        _createClass(NetMgr, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance || this._instance._destroyed) {
              this._instance = new NetMgr();
              this._instance.init();
            }
            return this._instance;
          }
        }]);
        return NetMgr;
      }(BaseMgr));
      NetMgr._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NumberSelect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Utils.ts', './I18n.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, EditBox, Node, misc, NodeEventType, v3, tween, Tween, Component, Utils, AddClick, handler, I18n;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EditBox = module.EditBox;
      Node = module.Node;
      misc = module.misc;
      NodeEventType = module.NodeEventType;
      v3 = module.v3;
      tween = module.tween;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      Utils = module.Utils;
      AddClick = module.AddClick;
      handler = module.handler;
    }, function (module) {
      I18n = module.I18n;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "45f82a0IShPVLEhIE1OL9kZ", "NumberSelect", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TWEEN_TAG_DELAY_ADD_SUB = 1001;
      var TWEEN_TAG_REPEAT_ADD_SUB = 1002;
      var DEFAULT_MAX_NUM = 100;
      var DEFAULT_MIN_NUM = 1;
      var NumberSelect = exports('NumberSelect', (_dec = ccclass('NumberSelect'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(NumberSelect, _Component);
        function NumberSelect() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._isInitNode = false;
          //DATA
          _this.maxNum = DEFAULT_MAX_NUM;
          _this.minNum = DEFAULT_MIN_NUM;
          _this.curNum = DEFAULT_MIN_NUM;
          _this.numChangeFunc = void 0;
          //UI
          _this._inputBox = void 0;
          _this._addBtn = void 0;
          _this._subBtn = void 0;
          _this._sdd10Btn = void 0;
          _this._sub10Btn = void 0;
          _this._maxBtn = void 0;
          _this._isLongTouch = false;
          return _this;
        }
        var _proto = NumberSelect.prototype;
        _proto.onLoad = function onLoad() {
          this._initNode();
          this._initEvent();
        };
        _proto._initNode = function _initNode() {
          if (this._isInitNode) return;
          this._isInitNode = true;
          this._initUI();
        };
        _proto._initUI = function _initUI() {
          this._inputBox = Utils.checkComponent(this.node.getChildByPath("inputBox"), EditBox);
          this._inputBox.inputMode = EditBox.InputMode.NUMERIC;
          this._addBtn = this.node.getChildByPath("addBtn");
          this._subBtn = this.node.getChildByPath("subBtn");
          this._sdd10Btn = this.node.getChildByPath("add10Btn");
          this._sub10Btn = this.node.getChildByPath("sub10Btn");
          this._maxBtn = this.node.getChildByPath("maxBtn");
          I18n.setLabelText(this._inputBox.textLabel, "");
          I18n.setLabelText(this._inputBox.placeholderLabel, "");
        };
        _proto._initEvent = function _initEvent() {
          var _this2 = this;
          this._addBtn.on(Node.EventType.TOUCH_START, function (event) {
            _this2.onTouchAddOrSubBtn(_this2._addBtn, event, Node.EventType.TOUCH_START);
          });
          this._addBtn.on(Node.EventType.TOUCH_END, function (event) {
            _this2.onTouchAddOrSubBtn(_this2._addBtn, event, Node.EventType.TOUCH_END);
          });
          this._addBtn.on(Node.EventType.TOUCH_CANCEL, function (event) {
            _this2.onTouchAddOrSubBtn(_this2._addBtn, event, Node.EventType.TOUCH_CANCEL);
          });
          this._subBtn.on(Node.EventType.TOUCH_START, function (event) {
            _this2.onTouchAddOrSubBtn(_this2._subBtn, event, Node.EventType.TOUCH_START);
          });
          this._subBtn.on(Node.EventType.TOUCH_END, function (event) {
            _this2.onTouchAddOrSubBtn(_this2._subBtn, event, Node.EventType.TOUCH_END);
          });
          this._subBtn.on(Node.EventType.TOUCH_CANCEL, function (event) {
            _this2.onTouchAddOrSubBtn(_this2._subBtn, event, Node.EventType.TOUCH_CANCEL);
          });
          this._inputBox.node.on(EditBox.EventType.EDITING_DID_BEGAN, function () {
            _this2.onInputBoxEvent(EditBox.EventType.EDITING_DID_BEGAN);
          });
          this._inputBox.node.on(EditBox.EventType.EDITING_DID_ENDED, function () {
            _this2.onInputBoxEvent(EditBox.EventType.EDITING_DID_ENDED);
          });
          this._inputBox.node.on(EditBox.EventType.TEXT_CHANGED, function () {
            _this2.onInputBoxEvent(EditBox.EventType.TEXT_CHANGED);
          });
          this._inputBox.node.on(EditBox.EventType.EDITING_RETURN, function () {
            _this2.onInputBoxEvent(EditBox.EventType.EDITING_RETURN);
          });
          AddClick(this._sdd10Btn, handler(this, this.onClickAdd10Btn));
          AddClick(this._sub10Btn, handler(this, this.onClickSub10Btn));
          AddClick(this._maxBtn, handler(this, this.onClickMaxBtn));
        };
        _proto.init = function init(params, data) {
          this.initParam(params);
          this.initWithData(data);
        };
        _proto.initParam = function initParam(params) {
          if (!params) return;
        };
        _proto.initWithData = function initWithData(data) {
          this._initNode();
          this.initData(data);
          this.bindDataToUI();
        };
        _proto.initData = function initData(data) {
          var _data$maxNum, _data$minNum, _data$curNum;
          this.maxNum = misc.clampf((_data$maxNum = data.maxNum) != null ? _data$maxNum : DEFAULT_MAX_NUM, 0, Number.MAX_VALUE);
          this.minNum = misc.clampf((_data$minNum = data.minNum) != null ? _data$minNum : DEFAULT_MIN_NUM, 0, this.maxNum);
          this.curNum = misc.clampf((_data$curNum = data.curNum) != null ? _data$curNum : DEFAULT_MIN_NUM, this.minNum, this.maxNum);
        };
        _proto.bindDataToUI = function bindDataToUI() {
          this.updateInputBox();
          this.updateNum();
        };
        _proto.getCurNum = function getCurNum() {
          return this.curNum;
        };
        _proto.setNumChangeCallback = function setNumChangeCallback(cb) {
          this.numChangeFunc = cb;
        };
        _proto.updateInputBox = function updateInputBox() {
          this._inputBox.maxLength = String(this.maxNum).length;
        };
        _proto.updateNum = function updateNum() {
          this._inputBox.string = String(this.curNum);
        };
        _proto.onTouchAddOrSubBtn = function onTouchAddOrSubBtn(btnNode, event, eventType) {
          var _this3 = this;
          if (eventType == NodeEventType.TOUCH_START) {
            btnNode.setScale(v3(0.95, 0.95, 0.95));
            this.stopScheduleAddOrSubBtn();
            this._isLongTouch = false;
            var action1 = tween(btnNode).delay(0.5).call(function () {
              _this3._isLongTouch = true;
              var action2 = tween(btnNode).repeatForever(tween(btnNode).sequence(tween(btnNode).delay(0.05), tween(btnNode).call(function () {
                _this3.executeAddOrSubBtn(btnNode);
              }))).tag(TWEEN_TAG_REPEAT_ADD_SUB).start();
            }).tag(TWEEN_TAG_DELAY_ADD_SUB).start();
          } else if (eventType == NodeEventType.TOUCH_END || eventType == NodeEventType.TOUCH_CANCEL) {
            btnNode.setScale(v3(1, 1, 1));
            this.stopScheduleAddOrSubBtn();
            if (!this._isLongTouch) {
              this.executeAddOrSubBtn(btnNode);
            }
            this._isLongTouch = false;
          }
        };
        _proto.stopScheduleAddOrSubBtn = function stopScheduleAddOrSubBtn() {
          Tween.stopAllByTag(TWEEN_TAG_DELAY_ADD_SUB, this._addBtn);
          Tween.stopAllByTag(TWEEN_TAG_REPEAT_ADD_SUB, this._addBtn);
          Tween.stopAllByTag(TWEEN_TAG_DELAY_ADD_SUB, this._subBtn);
          Tween.stopAllByTag(TWEEN_TAG_REPEAT_ADD_SUB, this._subBtn);
        };
        _proto.executeAddOrSubBtn = function executeAddOrSubBtn(btnNode) {
          var isAdd = btnNode == this._addBtn;
          var addBatch = isAdd ? 1 : -1;
          var isLimit = this.executeAddNum(addBatch);
          if (isLimit) {
            this.stopScheduleAddOrSubBtn();
          }
        };
        _proto.executeAddNum = function executeAddNum(addNum) {
          var isLimit = false;
          var tmpNum = this.curNum + addNum;
          if (tmpNum <= this.minNum) {
            tmpNum = this.minNum;
            isLimit = true;
          } else if (tmpNum >= this.maxNum) {
            tmpNum = this.maxNum;
            isLimit = true;
          }
          this.curNum = tmpNum;
          this.onNumChanged();
          return isLimit;
        };
        _proto.onClickAdd10Btn = function onClickAdd10Btn() {
          this.executeAddNum(10);
        };
        _proto.onClickSub10Btn = function onClickSub10Btn() {
          this.executeAddNum(-10);
        };
        _proto.onClickMaxBtn = function onClickMaxBtn() {
          this.curNum = this.maxNum;
          this.onNumChanged();
        };
        _proto.onInputBoxEvent = function onInputBoxEvent(eventType) {
          if (eventType == EditBox.EventType.EDITING_DID_ENDED) {
            var str = this._inputBox.string;
            var _num = Number(str);
            var inputNum = misc.clampf(isNaN(_num) ? this.minNum : _num, this.minNum, this.maxNum);
            this.curNum = inputNum;
            this.onNumChanged();
          }
        };
        _proto.onNumChanged = function onNumChanged() {
          this.updateNum();
          this.callbackNumChange();
        };
        _proto.callbackNumChange = function callbackNumChange() {
          if (this.numChangeFunc) {
            this.numChangeFunc(this.curNum);
          }
        };
        return NumberSelect;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NumberUtil.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4d3c5H6p2VDpJxHDdN0h41w", "NumberUtil", undefined);
      var NumberUtil = exports('NumberUtil', {
        /**
         * 保留n位小数
         * @author: qiaomingwu
         * @param {number} num 数字
         * @param {number} n 小数位数
         * @param {boolean} roundOff 是否四舍五入
         */
        GetPreciseDecimal: function GetPreciseDecimal(num, n, roundOff) {
          if (roundOff === void 0) {
            roundOff = true;
          }
          if (roundOff) {
            //四舍五入
            if (typeof num != "number") {
              return num;
            }
            n = n || 0;
            if (n < 0) {
              n = 0;
            }
            num += 0.000001;
            return Number(num.toFixed(n));
          } else {
            //不四舍五入
            return parseInt(String(num * Math.pow(10, n))) / Math.pow(10, n);
          }
        },
        /**
         * 区间随机整数
         * @author: qiaomingwu
         * @param {number} under 下值
         * @param {number} over 上值
         */
        fRandomBy: function fRandomBy(under, over) {
          return Math.floor(Math.random() * (over - under + 1) + under);
        },
        /**
         * 保留有效数字
         * @param d 数
         * @param n 几位
         * @returns 
         */
        ValidNumber: function ValidNumber(d, n) {
          var base = Math.pow(10, n);
          var _d = Math.round(base * d);
          return _d / base;
        },
        /**
         * @description: 获取大小介于两者之间的值
         * @param {number} val 原始值
         * @param {number} min 最小值
         * @param {number} max 最大值
         * @return {Number} 介于两者之间的值
         */
        clampf: function clampf(val, min, max) {
          if (val < min) {
            return min;
          } else if (val > max) {
            return max;
          }
          return val;
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ObjectUtil.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3a0b1C0o/lEr6CNqTZJZf76", "ObjectUtil", undefined);
      var ObjectUtil = exports('ObjectUtil', {
        isEmpty: function isEmpty(obj) {
          for (var k in obj) {
            return false;
          }
          return true;
        },
        count: function count(obj) {
          if (!obj) return 0;
          var num = 0;
          for (var k in obj) {
            num++;
          }
          return num;
        },
        merge: function merge(obj1, obj2) {
          if (!obj1 || !obj2) {
            return {};
          }
          var obj = {};
          for (var k in obj1) {
            obj[k] = obj1[k];
          }
          for (var k in obj2) {
            obj[k] = obj2[k];
          }
          return obj;
        },
        mergeTo: function mergeTo(from, to) {
          for (var k in from) {
            to[k] = from[k];
          }
        },
        copy: function copy(obj) {
          var newObj = Object.create(obj);
          Object.assign(newObj, obj);
          return newObj;
        },
        deepCopy: function deepCopy(obj) {
          try {
            return JSON.parse(JSON.stringify(obj));
          } catch (error) {
            console.error("not an object");
            return null;
          }
        },
        // 删除obj对象的所有属性，高效的将obj转化为一个崭新的对象！
        wipe: function wipe(obj) {
          for (var p in obj) {
            if (obj.hasOwnProperty(p)) delete obj[p];
          }
        },
        contain: function contain(obj, item) {
          for (var key in obj) {
            var val = obj[key];
            if (item == val) {
              return true;
            }
          }
          return false;
        },
        // 把对象的值转为数组 主要是读配置字典到数组中
        toArray: function toArray(obj) {
          var arr = [];
          for (var k in obj) {
            arr.push(obj[k]);
          }
          return arr;
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/OrderMgrComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SortUtil.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, isValid, Component, SortUtil;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      isValid = module.isValid;
      Component = module.Component;
    }, function (module) {
      SortUtil = module.SortUtil;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "13ee1YkSxtHkapxWmURhZbm", "OrderMgrComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DEFAULT_ZORDER = 0;
      var DEFAULT_UPDATE = true;
      var OrderMgrComp = exports('OrderMgrComp', (_dec = ccclass('OrderMgrComp'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(OrderMgrComp, _Component);
        function OrderMgrComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._arrivalCounter = 0;
          _this._childOrders = [];
          return _this;
        }
        var _proto = OrderMgrComp.prototype;
        _proto.addChild = function addChild(child, zorder, update) {
          var _update = update != null ? update : DEFAULT_UPDATE;
          if (!child || !isValid(child)) return;
          if (child.parent != this.node) {
            child.parent = this.node;
          }
          this.addOrderInfo(child, zorder);
          if (_update) {
            this.updateChildOrder();
          }
        };
        _proto.removeChild = function removeChild(child, update) {
          if (!child) return;
          var _update = update != null ? update : DEFAULT_UPDATE;
          if (child && isValid(child) && child.parent == this.node) {
            this.node.removeChild(child);
          }
          this.removeOrderInfo(child);
          if (_update) {
            this.updateChildOrder();
          }
        };
        _proto.updateChildOrder = function updateChildOrder() {
          this.removeInvalidOrderInfos();
          SortUtil.sortMultiCondition(this._childOrders, [{
            key: "customOrder",
            ascending: true
          }, {
            key: "arrivalOrder",
            ascending: true
          }]);
          var index = this.node.children.length;
          for (var i = 0; i < this._childOrders.length; i++) {
            var child = this._childOrders[i].childNode;
            child.setSiblingIndex(index + i);
          }
        };
        _proto.setZOrder = function setZOrder(child, zorder, update) {
          var _update = update != null ? update : DEFAULT_UPDATE;
          if (!child) return;
          var info = this.getOrderInfo(child);
          if (info) {
            info.customOrder = zorder;
          }
          if (_update) {
            this.updateChildOrder();
          }
        };
        _proto.setArrivalOrder = function setArrivalOrder(child, arrivalOrder, update) {
          var _update = update != null ? update : DEFAULT_UPDATE;
          if (!child) return;
          var info = this.getOrderInfo(child);
          if (info) {
            info.arrivalOrder = arrivalOrder;
          }
          if (_update) {
            this.updateChildOrder();
          }
        };
        _proto.swapArrivalOrder = function swapArrivalOrder(child1, child2, update) {
          var _update = update != null ? update : DEFAULT_UPDATE;
          if (!child1 || !child2 || !isValid(child1) || !isValid(child2)) return;
          var info1 = this.getOrderInfo(child1);
          var info2 = this.getOrderInfo(child2);
          if (info1 && info2) {
            var tmpArrival = info1.arrivalOrder;
            info1.arrivalOrder = info2.arrivalOrder;
            info2.arrivalOrder = tmpArrival;
            if (_update) {
              this.updateChildOrder();
            }
          }
        };
        _proto.getOrderInfo = function getOrderInfo(child) {
          for (var _iterator = _createForOfIteratorHelperLoose(this._childOrders), _step; !(_step = _iterator()).done;) {
            var v = _step.value;
            if (v.childNode == child) {
              return v;
            }
          }
          return null;
        };
        _proto.addOrderInfo = function addOrderInfo(child, zorder) {
          if (!child) return;
          var _zorder = zorder != null ? zorder : DEFAULT_ZORDER;
          this.removeInvalidOrderInfos();
          var info = this.getOrderInfo(child);
          if (info) {
            info.customOrder = _zorder;
          } else {
            this._childOrders.push({
              childNode: child,
              arrivalOrder: this.newArrivalOrder,
              customOrder: _zorder
            });
          }
        };
        _proto.removeOrderInfo = function removeOrderInfo(child) {
          if (!child) return;
          var arr = this._childOrders;
          for (var i = arr.length - 1; i >= 0; i--) {
            var v = arr[i];
            if (v.childNode == child) {
              arr.splice(i, 1);
            }
          }
        };
        _proto.removeInvalidOrderInfos = function removeInvalidOrderInfos() {
          var arr = this._childOrders;
          for (var i = arr.length - 1; i >= 0; i--) {
            var v = arr[i];
            var child = v.childNode;
            if (!isValid(child) || child.parent != this.node) {
              arr.splice(i, 1);
            }
          }
        };
        _createClass(OrderMgrComp, [{
          key: "newArrivalOrder",
          get: function get() {
            return this._arrivalCounter++;
          }
        }]);
        return OrderMgrComp;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopUpWin.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './WinBase.ts', './WinMgr.ts', './Utils.ts', './I18n.ts', './AssetUtil.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Label, HorizontalTextAlignment, WinBase, WIN_MASK_TYPE, WIN_TYPE, AddClick, I18n, AssetUtil;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      HorizontalTextAlignment = module.HorizontalTextAlignment;
    }, function (module) {
      WinBase = module.WinBase;
    }, function (module) {
      WIN_MASK_TYPE = module.WIN_MASK_TYPE;
      WIN_TYPE = module.WIN_TYPE;
    }, function (module) {
      AddClick = module.AddClick;
    }, function (module) {
      I18n = module.I18n;
    }, function (module) {
      AssetUtil = module.AssetUtil;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "0a947wUzp9JlY6BAHqfhawc", "PopUpWin", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PopUpWin = exports('PopUpWin', (_dec = ccclass('PopUpWin'), _dec(_class = /*#__PURE__*/function (_WinBase) {
        _inheritsLoose(PopUpWin, _WinBase);
        function PopUpWin() {
          var _this;
          _this = _WinBase.call(this) || this;
          _this._isInitNode = false;
          _this._info = {};
          _this._defaultTitle = "";
          _this._defaultNoBtnStr = "";
          _this._defaultOkBtnStr = "";
          _this._defaultBtnImageCancel = "";
          _this._defaultBtnImageConfirm = "";
          //UI
          _this.lb_title = void 0;
          _this.lb_content = void 0;
          _this.btnNodes = null;
          _this.btn_confirm = null;
          _this.btn_cancel = null;
          _this.btn_close = null;
          _this.showType = WIN_TYPE.HIDDEN_POP;
          _this.maskType = WIN_MASK_TYPE.DARK_BLANK_CLOSE;
          _this._listeners = [];
          //
          _this._defaultTitle = "提示";
          _this._defaultNoBtnStr = "取消";
          _this._defaultOkBtnStr = "确认";
          _this._defaultBtnImageCancel = "";
          _this._defaultBtnImageConfirm = "";
          return _this;
        }
        var _proto = PopUpWin.prototype;
        _proto.onLoad = function onLoad() {
          _WinBase.prototype.onLoad.call(this);
          this._initNode();
          this._initEvent();
        };
        _proto._initNode = function _initNode() {
          if (this._isInitNode) return;
          this._isInitNode = true;
          this._initUI();
        };
        _proto._initUI = function _initUI() {
          var rootNode = this.node.getChildByName("root");
          this.lb_title = rootNode == null ? void 0 : rootNode.getChildByName("lb_title");
          this.lb_content = rootNode == null ? void 0 : rootNode.getChildByName("lb_content");
          this.btnNodes = rootNode.getChildByName("btnNodes");
          this.btn_confirm = this.btnNodes.getChildByName("btn_confirm");
          this.btn_cancel = this.btnNodes.getChildByName("btn_cancel");
          this.btn_close = rootNode.getChildByName("closeBtn");
          this.btn_close.active = false;
        };
        _proto._initEvent = function _initEvent() {
          var _this2 = this;
          AddClick(this.btn_confirm, function () {
            if (_this2._info.confirmCallback) {
              _this2._info.confirmCallback();
            }
            _this2.close();
          });
          AddClick(this.btn_cancel, function () {
            if (_this2._info.cancelCallback) {
              _this2._info.cancelCallback();
            }
            _this2.close();
          });
          AddClick(this.btn_close, function () {
            _this2.close();
          });
        };
        _proto.initParam = function initParam(info) {
          if (info) {
            this._info = info;
            if (this._info.isBlankClose === false) {
              this.maskType = WIN_MASK_TYPE.DARK;
            }
          }
          this._initNode();
          this.bindDataToUI();
        };
        _proto.bindDataToUI = function bindDataToUI() {
          if (this._info.title != undefined) {
            this.setTitleName(this._info.title);
          } else {
            this.setTitleName(this._defaultTitle);
          }
          if (this._info.content != undefined) {
            this.setContent(this._info.content);
          } else {
            this.setContent("");
          }
          this.setButtonInfo();
        };
        _proto.setTitleName = function setTitleName(name) {
          I18n.setLabelText(this.lb_title, name);
        };
        _proto.setContent = function setContent(content) {
          var _this$_info$horizonta;
          this.lb_content.getComponent(Label).horizontalAlign = (_this$_info$horizonta = this._info.horizontalAlign) != null ? _this$_info$horizonta : HorizontalTextAlignment.CENTER;
          I18n.setLabelText(this.lb_content, content);
        };
        _proto.setButtonInfo = function setButtonInfo() {
          this.btn_close.active = this._info.isShowClose == true;
          this.btn_cancel.active = this._info.isShowCancel != false;
          if (this._info.cancelBtnStr != undefined) {
            I18n.setLabelText(this.btn_cancel.getChildByName("Label"), this._info.cancelBtnStr);
          } else {
            I18n.setLabelText(this.btn_cancel.getChildByName("Label"), this._defaultNoBtnStr);
          }
          if (this._info.okBtnStr != undefined) {
            I18n.setLabelText(this.btn_confirm.getChildByName("Label"), this._info.okBtnStr);
          } else {
            I18n.setLabelText(this.btn_confirm.getChildByName("Label"), this._defaultOkBtnStr);
          }
          if (this._info.cancelBtnImg != undefined && this._info.cancelBtnImg.length > 0) {
            if (this._info.bntImgIsLang == true) {
              AssetUtil.setSpriteFrameForLang(this.btn_cancel, this._info.cancelBtnImg);
            } else {
              AssetUtil.setSpriteFrameByAtlas(this.btn_cancel, this._info.cancelBtnImg);
            }
          }
          if (this._info.okBtnImg != undefined && this._info.okBtnImg.length > 0) {
            if (this._info.bntImgIsLang == true) {
              AssetUtil.setSpriteFrameForLang(this.btn_confirm, this._info.okBtnImg);
            } else {
              AssetUtil.setSpriteFrameByAtlas(this.btn_confirm, this._info.okBtnImg);
            }
          }
        };
        _proto.onDestroy = function onDestroy() {
          _WinBase.prototype.onDestroy.call(this);
          if (this._info.closedCallback) {
            this._info.closedCallback();
          }
        };
        return PopUpWin;
      }(WinBase)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PromptWin.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './WinBase.ts', './WinMgr.ts', './I18n.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, ScrollView, WinBase, WIN_TYPE, WIN_MASK_TYPE, I18n;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ScrollView = module.ScrollView;
    }, function (module) {
      WinBase = module.WinBase;
    }, function (module) {
      WIN_TYPE = module.WIN_TYPE;
      WIN_MASK_TYPE = module.WIN_MASK_TYPE;
    }, function (module) {
      I18n = module.I18n;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "c35496Pd+BMsro0e39ofrZA", "PromptWin", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PromptWin = exports('PromptWin', (_dec = ccclass('PromptWin'), _dec(_class = /*#__PURE__*/function (_WinBase) {
        _inheritsLoose(PromptWin, _WinBase);
        function PromptWin() {
          var _this;
          _this = _WinBase.call(this) || this;
          _this._isInitNode = false;
          _this.root = void 0;
          _this.lb_title = void 0;
          _this.lb_content = void 0;
          _this.view = void 0;
          _this.showType = WIN_TYPE.HIDDEN_POP;
          _this.maskType = WIN_MASK_TYPE.DARK_BLANK_CLOSE;
          _this._listeners = [];
          return _this;
        }
        var _proto = PromptWin.prototype;
        _proto.onLoad = function onLoad() {
          _WinBase.prototype.onLoad.call(this);
          this._initNode();
          this._initEvent();
        };
        _proto._initNode = function _initNode() {
          if (this._isInitNode) return;
          this._isInitNode = true;
          this._initUI();
        };
        _proto._initUI = function _initUI() {
          this.root = this.node.getChildByName("root");
          this.lb_title = this.root.getChildByName("lb_title");
          this.view = this.root.getChildByName("ScrollView").getComponent(ScrollView);
          this.lb_content = this.view.content.getChildByName("item");
          I18n.setLabelText(this.lb_title, "");
        };
        _proto._initEvent = function _initEvent() {};
        _proto.initParam = function initParam(params) {
          this._initNode();
          if (params) {
            if (params.title) {
              this.setTitle(params.title);
            }
            if (params.content) {
              this.setContent(params.content);
            }
          }
        };
        _proto.setTitle = function setTitle(title) {
          I18n.setLabelText(this.lb_title, title);
        };
        _proto.setContent = function setContent(content) {
          I18n.setLabelText(this.lb_content, content);
        };
        return PromptWin;
      }(WinBase)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ProtoBufProtocol.ts", ['cc', './ZlibCtrl.ts', './StringUtil.ts', './Command.ts'], function (exports) {
  var cclegacy, ZlibCtrl, StringUtil, MsgName;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ZlibCtrl = module.ZlibCtrl;
    }, function (module) {
      StringUtil = module.StringUtil;
    }, function (module) {
      MsgName = module.MsgName;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6f78136LH5PMZOVtwu3P0bp", "ProtoBufProtocol", undefined);

      // protobuf协议对象
      var ProtoBufProtocol = exports('ProtoBufProtocol', /*#__PURE__*/function () {
        function ProtoBufProtocol() {
          this.m_pakSendIndex = 0;
          //发送包头长度 // 包体长度（ushort，2） +指令数（客户端自增，unint，4） +校验码（crc,byte[]，2） +指令号（unshort，2） +protobuf（byte[],） 
          this.m_pakSendHeadLen = 2 + 4 + 2 + 2;
          // 接受包体 内容长度2 + 协议号2 + 是否压缩1 + 
          this.m_preLen = 2 + 2 + 1;
          this._crcBuffer = new ArrayBuffer(65535 + 1024);
          this._uint8CacheBuffer = new Uint8Array(0);
          this.signKey = "";
        }
        var _proto = ProtoBufProtocol.prototype;
        _proto.pack = function pack(msgid, data) {
          var mName = MsgName[msgid];
          if (!mName) {
            return null;
          }
          // console.error(mName);
          var protocol = this.getProtocol(mName);
          // console.error(protocol);
          mName = this.getMsgName(msgid);
          // console.error(mName);

          if (!mName || !protocol.hasOwnProperty(mName)) {
            return null;
          }
          this.m_pakSendIndex++;
          var pData = protocol[mName].encode(data).finish();
          var orgLen = pData.length;
          var checkCode = this.MakeCrcCode(this.m_pakSendIndex, msgid, pData);
          var binary = new ArrayBuffer(orgLen + this.m_pakSendHeadLen);
          var p = 0;
          var dv = new DataView(binary);
          dv.setUint16(p, orgLen + this.m_pakSendHeadLen);
          p += 2;
          dv.setUint32(p, this.m_pakSendIndex);
          p += 4;
          dv.setUint16(p, checkCode);
          p += 2;
          dv.setUint16(p, msgid);
          p += 2;
          for (var i = 0; i < orgLen; i++) {
            dv.setUint8(i + p, pData[i]);
          }
          return dv.buffer;
        };
        _proto.unpack = function unpack(buffer) {
          var resultData = {
            err: false,
            result: []
          };
          try {
            // 合并还没有处理的cacheBuffer 和 buffer
            var totalLen = buffer.byteLength + this._uint8CacheBuffer.byteLength;
            var uint8Arr = new Uint8Array(totalLen);
            var uint8Buffer = new Uint8Array(buffer);
            uint8Arr.set(this._uint8CacheBuffer, 0);
            uint8Arr.set(uint8Buffer, this._uint8CacheBuffer.byteLength);
            this._uint8CacheBuffer = uint8Arr;
            var curPos = 0;
            var dataView = new DataView(this._uint8CacheBuffer.buffer);
            // 只有buffer长度大于preLen才开始解析
            while (curPos + this.m_preLen <= dataView.byteLength) {
              var bodyLen = dataView.getUint16(curPos);
              // 数据长度小于本次传输长度为半包，需等待后面收到数据后再处理
              if (dataView.byteLength < curPos + bodyLen) {
                break;
              }
              curPos += 2;
              // 协议号
              var msgId = dataView.getUint16(curPos);
              curPos += 2;
              // 压缩标识
              var zipFlag = dataView.getUint8(curPos);
              curPos += 1;
              var mName = MsgName[msgId];
              if (!mName) {
                console.error("not exists msgId " + msgId);
                this.onUnpackError();
                resultData.err = true;
                return resultData;
              }
              var protocol = this.getProtocol(mName);
              mName = this.getMsgName(msgId);
              if (!mName || !protocol.hasOwnProperty(mName)) {
                console.error("not exists msgId2 " + msgId);
                this.onUnpackError();
                resultData.err = true;
                return resultData;
              }
              var bodyEndPos = curPos - this.m_preLen + bodyLen; // 内容的结束标位
              var msgBuf = this._uint8CacheBuffer.slice(curPos, bodyEndPos);
              curPos += msgBuf.byteLength;
              var hasError = false;
              if (zipFlag == 1) {
                console.log("=====================unpack decompress==========================");
                try {
                  msgBuf = ZlibCtrl.deCompress(msgBuf);
                } catch (err) {
                  hasError = true;
                }
              }
              if (hasError) {
                console.error("unpack error 1");
                this.onUnpackError();
                resultData.err = true;
                return resultData;
              }
              try {
                var msg = protocol[mName].decode(msgBuf);
                var data = {
                  msg: msg,
                  msgId: msgId
                };
                resultData.result.push(data);
              } catch (err) {
                hasError = true;
              }
              if (hasError) {
                console.error("unpack error 2");
                this.onUnpackError();
                resultData.err = true;
                return resultData;
              }
            }
            // 全部读完 清空
            if (curPos >= this._uint8CacheBuffer.byteLength) {
              this.resetBufferData();
            } else {
              // 剩余的
              this._uint8CacheBuffer = this._uint8CacheBuffer.slice(curPos);
            }
          } catch (err) {
            console.error("unpack error 3");
            this.onUnpackError();
            resultData.err = true;
          }
          return resultData;
        };
        _proto.onUnpackError = function onUnpackError() {
          this.resetBufferData();
        };
        _proto.resetBufferData = function resetBufferData() {
          this._uint8CacheBuffer = new Uint8Array(0);
        };
        _proto.getProtocol = function getProtocol(mName) {
          var protocol;
          if (mName.startsWith("dgame.barrage.engine.proto")) {
            protocol = dgame.barrage.engine.proto;
          } else if (mName.startsWith("com.bear.xxld.lib")) {
            var str = mName.replace("com.bear.xxld.lib.proto.", '');
            if (str.indexOf(".") === -1) {
              protocol = com.bear.xxld.lib.proto;
            } else {
              var key = str.split('.')[0];
              protocol = com.bear.xxld.lib.proto[key];
            }
          } else {
            return null;
          }
          return protocol;
        };
        _proto.getMsgName = function getMsgName(msgid) {
          var mName = MsgName[msgid];
          if (!mName) return null;
          var startIdx = mName.lastIndexOf('.');
          return mName.slice(startIdx + 1);
        }

        // 字符串转byte（网上找的一个）
        ;

        _proto.stringToArrayBuffer = function stringToArrayBuffer(str) {
          var bytes = new Array();
          var len, c;
          len = str.length;
          for (var i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if (c >= 0x010000 && c <= 0x10FFFF) {
              bytes.push(c >> 18 & 0x07 | 0xF0);
              bytes.push(c >> 12 & 0x3F | 0x80);
              bytes.push(c >> 6 & 0x3F | 0x80);
              bytes.push(c & 0x3F | 0x80);
            } else if (c >= 0x000800 && c <= 0x00FFFF) {
              bytes.push(c >> 12 & 0x0F | 0xE0);
              bytes.push(c >> 6 & 0x3F | 0x80);
              bytes.push(c & 0x3F | 0x80);
            } else if (c >= 0x000080 && c <= 0x0007FF) {
              bytes.push(c >> 6 & 0x1F | 0xC0);
              bytes.push(c & 0x3F | 0x80);
            } else {
              bytes.push(c & 0xFF);
            }
          }
          var array = new Int8Array(bytes.length);
          for (var _i = 0; _i < bytes.length; _i++) {
            array[_i] = bytes[_i];
          }
          return array.buffer;
        }

        // 和服务器同算法的一个发送内容混淆
        ;

        _proto.MakeCrcCode = function MakeCrcCode(cmdCnt, msgid, mainBody, cnt) {
          if (cnt === void 0) {
            cnt = -1;
          }
          var p = 0;
          if (cnt == -1) cnt = mainBody.length;
          if (cnt >= 65535) {
            console.log("msg data is too big:" + msgid);
          }
          var dv = new DataView(this._crcBuffer);
          for (var i = 0; i < cnt; i++) {
            dv.setUint8(i, mainBody[i]);
          }
          p += cnt;
          for (var _i2 = 0; _i2 < cnt; _i2++) {
            var b = dv.getUint8(_i2);
            var low = b & 0x7F;
            if (b >> 7 > 0) b = low - 128;
            if (b == 0 || b == -128 || b == 128) {
              dv.setUint8(_i2, 97);
            } else if (b < 0) {
              dv.setUint8(_i2, b + 128);
            }
          }
          var head = StringUtil.Format("{0}-{1}-{2}", cmdCnt, this.signKey, msgid);
          var headBuffer = this.stringToArrayBuffer(encodeURI(head));
          var headBufferDv = new DataView(headBuffer);
          for (var _i3 = 0; _i3 < headBufferDv.byteLength; _i3++) {
            dv.setUint8(p++, headBufferDv.getUint8(_i3));
          }
          var g = globalThis;
          return g.crc32.buf(new Uint8Array(dv.buffer), 0, p);
        };
        return ProtoBufProtocol;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ProtocolTypes.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "65171mxJBdDw7lcDX79ZVTm", "ProtocolTypes", undefined);
      /**
       * 消息体内带Code,且Code值大于0时,需要监听该返回消息时,需加入此数组，否则监听不到消息
       */
      var HasErrorNeedResponseMsg = exports('HasErrorNeedResponseMsg', []);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RandomUtil.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "93d06o1D9xDZay1jDhXCMQc", "RandomUtil", undefined);
      var RandomUtil = exports('RandomUtil', /*#__PURE__*/function () {
        function RandomUtil() {}
        // 打乱数组
        RandomUtil.shuffle = function shuffle(arr, isNew) {
          if (isNew === void 0) {
            isNew = false;
          }
          if (isNew) {
            arr = [].concat(arr);
          }
          arr.sort(function () {
            return Math.random() > 0.5 ? 1 : -1;
          });
          return arr;
        }

        // 打乱数组
        ;

        RandomUtil.randomSortArray = function randomSortArray(arr, isNew) {
          if (isNew === void 0) {
            isNew = false;
          }
          if (isNew) {
            arr = [].concat(arr);
          }
          for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var _ref = [arr[j], arr[i]];
            arr[i] = _ref[0];
            arr[j] = _ref[1];
          }
          return arr;
        }

        // 随机保留数组最大个数,删除多余的项
        ;

        RandomUtil.randomSetArrayMaxLength = function randomSetArrayMaxLength(arr, maxLen, isNew) {
          if (isNew === void 0) {
            isNew = false;
          }
          arr = this.randomSortArray(arr, isNew);
          var num = Math.min(maxLen, arr.length);
          arr.splice(num, arr.length - num);
          return arr;
        }

        // 从数组中随机一个
        ;

        RandomUtil.randomArrayItem = function randomArrayItem(arr) {
          var len = arr.length;
          if (len === 0) return null;
          var idx = Math.floor(Math.random() * len);
          return arr[idx];
        }

        // 随机[num1,num2]之间的整数,包含num1,num2
        ;

        RandomUtil.randomInteger = function randomInteger(num1, num2) {
          var min = Math.floor(Math.min(num1, num2));
          var max = Math.floor(Math.max(num1, num2));
          return Math.floor(Math.random() * (max - min + 1) + min); // 0 <= Math.random() < 1
        }

        // 判断概率, num: [0, 1]
        ;

        RandomUtil.checkProbability = function checkProbability(num) {
          if (num >= 1) return true;
          if (num <= 0) return false;
          num = Math.max(0, Math.min(1, num));
          return Math.round(Math.random() * 10000) / 10000 <= num;
        }

        // 按权重随机一个
        ;

        RandomUtil.randomItemByProbability = function randomItemByProbability(arr, weightKey) {
          if (arr.length == 0) return null;
          var TOTAL_WEIGHT_VALUE = 10000;
          var totalWeight = 0;
          for (var _iterator = _createForOfIteratorHelperLoose(arr), _step; !(_step = _iterator()).done;) {
            var _vv = _step.value;
            var _tmpWeight = Number(_vv[weightKey]);
            _tmpWeight = isNaN(_tmpWeight) ? 0 : Math.max(0, _tmpWeight);
            totalWeight += _tmpWeight;
          }
          if (totalWeight <= 0) {
            return this.randomArrayItem(arr);
          }
          var index2Weight = [];
          for (var idx = 0; idx < arr.length; idx++) {
            var vv = arr[idx];
            var tmpWeight = Number(vv[weightKey]);
            tmpWeight = isNaN(tmpWeight) ? 0 : Math.max(0, tmpWeight);
            index2Weight[idx] = TOTAL_WEIGHT_VALUE * tmpWeight / totalWeight;
          }
          var randNum = Math.round(Math.random() * TOTAL_WEIGHT_VALUE);
          var selectIdx = null;
          for (var _idx = 0; _idx < index2Weight.length; _idx++) {
            var _num = index2Weight[_idx];
            if (randNum <= _num) {
              selectIdx = _idx;
              break;
            }
            randNum -= _num;
          }
          if (selectIdx && arr[selectIdx]) {
            return arr[selectIdx];
          }
          return this.randomArrayItem(arr);
        };
        return RandomUtil;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/scripts", ['./GameApp.ts', './AniFrameComp.ts', './AnnotationComp.ts', './AutoRichTextFontSize.ts', './CheckTopTouch.ts', './CommonInterface.ts', './CustomPropertyComp.ts', './DataConvert.ts', './FloatTipsLabel.ts', './I18n.ts', './LabelNumRoll.ts', './LabelTimer.ts', './LocalizedLabel.ts', './LocalizedSprite.ts', './OrderMgrComp.ts', './ShrinkWidth.ts', './TableView.ts', './TestSpine.ts', './TouchHook.ts', './UITableOption.ts', './UIUtils.ts', './Csv.ts', './DefineConstant.ts', './DefineObjectArr.ts', './EnumConfig.ts', './AudioConfig.ts', './Constants.ts', './StorageConst.ts', './UIConstants.ts', './WinPrefabPath.ts', './Electron.ts', './ClientEvents.ts', './EventComp.ts', './EventListener.ts', './AdaptBang.ts', './AdaptBg.ts', './AdaptCapsule.ts', './AssetMgrComp.ts', './LocalStorage.ts', './SpineComp.ts', './ZlibCtrl.ts', './GameTimer.ts', './LoadMgr.ts', './CsvLoader.ts', './WinHelper.ts', './ArgsParser.ts', './ArrayUtil.ts', './AssetUtil.ts', './ColorUtil.ts', './DateUtil.ts', './MathUtil.ts', './NativeUtil.ts', './NumberUtil.ts', './ObjectUtil.ts', './RandomUtil.ts', './SortUtil.ts', './StringUtil.ts', './Utils.ts', './UuidUtil.ts', './md5.ts', './AppArgMgr.ts', './AudioMgr.ts', './BaseMgr.ts', './ChannelMgr.ts', './ConfigUtils.ts', './GlobalMgr.ts', './KsMiniGameMgr.ts', './LogMgr.ts', './LoginComp.ts', './LoginMgr.ts', './ShaderMgr.ts', './WinMgr.ts', './BaseModel.ts', './BattleCtrl.ts', './TestData.ts', './Base64.ts', './KsHttpProto.ts', './KsHttpProtoConvert.ts', './NetChannel.ts', './NetInterface.ts', './NetMgr.ts', './ProtoBufProtocol.ts', './ProtocolTypes.ts', './WebSock.ts', './Command.ts', './FishProto.mjs_cjs=&original=.js', './KsSdk.ts', './SdkMgr.ts', './BlankScreen.ts', './TransView.ts', './WinBase.ts', './HeadIcon.ts', './InputWin.ts', './NumberSelect.ts', './PopUpWin.ts', './PromptWin.ts', './TestFuncLayer.ts', './TestLogView.ts', './WaittingView.ts', './WeakNetTip.ts', './WebViewLayer.ts', './ComDialogView.ts', './MainView.ts', './IMainViewPanel.ts', './MainInfoPanel.ts', './MainItemPanel.ts', './MainRankPanel.ts', './MainShopPanel.ts', './DressUpItemNode.ts', './GoodsIconNode.ts', './HeadFrame.ts', './HeadNode.ts', './ItemIconNode.ts', './NameplateIcon.ts', './ShopItemNode.ts', './SuitIconNode.ts', './TimeTypeNode.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/SdkMgr.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2b0eam20P5DMImvSNxk2l/P", "SdkMgr", undefined);
      var SdkMgr = exports('SdkMgr', /*#__PURE__*/function () {
        function SdkMgr() {}
        SdkMgr.init = function init() {};
        return SdkMgr;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ShaderMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LoadMgr.ts'], function (exports) {
  var _createClass, cclegacy, builtinResMgr, sp, Label, Sprite, Material, LoadMgr;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      builtinResMgr = module.builtinResMgr;
      sp = module.sp;
      Label = module.Label;
      Sprite = module.Sprite;
      Material = module.Material;
    }, function (module) {
      LoadMgr = module.LoadMgr;
    }],
    execute: function () {
      var _SHADER_INFOS;
      cclegacy._RF.push({}, "c13de+5r39DBLUOdUAjjjDR", "ShaderMgr", undefined);
      var SHADER_NAME = exports('SHADER_NAME', /*#__PURE__*/function (SHADER_NAME) {
        SHADER_NAME[SHADER_NAME["NORMAL"] = 0] = "NORMAL";
        SHADER_NAME[SHADER_NAME["GRAY"] = 1] = "GRAY";
        SHADER_NAME[SHADER_NAME["BRIGHTNESS"] = 2] = "BRIGHTNESS";
        SHADER_NAME[SHADER_NAME["POISON"] = 3] = "POISON";
        SHADER_NAME[SHADER_NAME["FIRE"] = 4] = "FIRE";
        SHADER_NAME[SHADER_NAME["ICE"] = 5] = "ICE";
        SHADER_NAME[SHADER_NAME["WEAK"] = 6] = "WEAK";
        SHADER_NAME[SHADER_NAME["SKETCH"] = 7] = "SKETCH";
        return SHADER_NAME;
      }({})); // 剪影 非透明部分黑色

      /**内置材质 */
      var INTERNAL_MATERIAL = {
        normalSprite: "ui-sprite-material",
        normalSpine: "default-spine-material",
        graySprite: "ui-sprite-gray-material"
      };

      /**自定义材质 */
      var CUSTOM_MATERIAL = {
        graySpine: "gray-spine",
        brightnessSprite: "brightness-sprite",
        brightnessSpine: "brightness-spine",
        poisonSpine: "poison-spine",
        fireSpine: "fire-spine",
        iceSpine: "ice-spine",
        weakSpine: "weak-spine",
        sketchSprite: "sketch-sprite"
      };

      //所有shader分类
      var SHADER_INFOS = (_SHADER_INFOS = {}, _SHADER_INFOS[SHADER_NAME.NORMAL] = {
        sprite: INTERNAL_MATERIAL.normalSprite,
        spine: INTERNAL_MATERIAL.normalSpine
      }, _SHADER_INFOS[SHADER_NAME.GRAY] = {
        sprite: INTERNAL_MATERIAL.graySprite,
        spine: CUSTOM_MATERIAL.graySpine
      }, _SHADER_INFOS[SHADER_NAME.BRIGHTNESS] = {
        sprite: CUSTOM_MATERIAL.brightnessSprite,
        spine: CUSTOM_MATERIAL.brightnessSpine
      }, _SHADER_INFOS[SHADER_NAME.POISON] = {
        spine: CUSTOM_MATERIAL.poisonSpine
      }, _SHADER_INFOS[SHADER_NAME.FIRE] = {
        spine: CUSTOM_MATERIAL.fireSpine
      }, _SHADER_INFOS[SHADER_NAME.ICE] = {
        spine: CUSTOM_MATERIAL.iceSpine
      }, _SHADER_INFOS[SHADER_NAME.WEAK] = {
        spine: CUSTOM_MATERIAL.weakSpine
      }, _SHADER_INFOS[SHADER_NAME.SKETCH] = {
        spine: CUSTOM_MATERIAL.sketchSprite
      }, _SHADER_INFOS);
      var ShaderMgr = exports('ShaderMgr', /*#__PURE__*/function () {
        function ShaderMgr() {
          /**所有材质 */
          this._materials = new Map();
        }
        ShaderMgr.destroy = function destroy() {
          if (this._instance) {
            this._instance._materials.forEach(function (value) {
              value == null || value.decRef();
            });
          }
          ShaderMgr._instance = null;
        };
        var _proto = ShaderMgr.prototype;
        _proto.init = function init() {};
        _proto.loadAll = function loadAll(completeCb) {
          var _this = this;
          this._materials.forEach(function (value) {
            value == null || value.decRef();
          });
          this._materials = new Map();
          for (var _key in INTERNAL_MATERIAL) {
            var _name = INTERNAL_MATERIAL[_key];
            var mat = builtinResMgr.get(_name);
            mat.addRef();
            this._materials.set(_name, mat);
          }
          var assetsInfo = [];
          for (var _key2 in CUSTOM_MATERIAL) {
            var _name2 = CUSTOM_MATERIAL[_key2];
            this._materials.set(_name2, null);
            assetsInfo.push({
              path: "shader/materials/" + _name2,
              type: Material,
              bundleName: "resources"
            });
          }
          LoadMgr.instance.loadAssets(assetsInfo, undefined, completeCb, function (data) {
            data.addRef();
            _this._materials.set(data.name, data);
          });
        };
        _proto.updateShader = function updateShader(node, shaderName, applyChild, param) {
          if (applyChild === void 0) {
            applyChild = false;
          }
          var shaders = SHADER_INFOS[shaderName];
          if (!shaders) return;
          this._findComponent(node, shaders, applyChild, param);
        };
        _proto.restoreShader = function restoreShader(node, applyChild) {
          if (applyChild === void 0) {
            applyChild = false;
          }
          var shaders = SHADER_INFOS[SHADER_NAME.NORMAL];
          this._findComponent(node, shaders, applyChild);
        };
        _proto._findComponent = function _findComponent(node, shaders, applyChild, param) {
          var _this2 = this;
          if (applyChild === void 0) {
            applyChild = false;
          }
          //不是所有UIRenderer都可以设置material
          this._applyShader(node.getComponent(sp.Skeleton), shaders.spine, param) && this._applyShader(node.getComponent(Label), shaders.sprite, param) && this._applyShader(node.getComponent(Sprite), shaders.sprite, param);
          if (applyChild) {
            node.children.forEach(function (node) {
              _this2._findComponent(node, shaders, applyChild, param);
            });
          }
        };
        _proto._applyShader = function _applyShader(comp, name, param) {
          if (!comp || !name) return true; //go on
          comp.bindShaderName_ = name;
          var mat = this._materials.get(name);
          if (mat) {
            this._setMaterial(comp, mat, param);
          }
          return false;
        };
        _proto._setMaterial = function _setMaterial(comp, mat, param) {
          if (!comp || !mat || !comp.isValid) return;
          if (comp.bindShaderName_ != mat.name) return;
          if (param) {
            for (var _name3 in param) {
              var info = param[_name3];
              mat.setProperty(info.propertyName, info.val);
            }
          }
          comp.customMaterial = mat;
        };
        _createClass(ShaderMgr, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new ShaderMgr();
              this._instance.init();
            }
            return this._instance;
          }
        }]);
        return ShaderMgr;
      }());
      ShaderMgr._instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ShopItemNode.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TimeTypeNode.ts', './GoodsIconNode.ts', './Utils.ts', './Csv.ts', './I18n.ts', './ConfigUtils.ts', './LogMgr.ts', './UIUtils.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, TimeTypeNode, GoodsIconNode, Utils, AddClick, handler, Csv, I18n, eShopPurchaseType, LogMgr, UIUtils;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      TimeTypeNode = module.TimeTypeNode;
    }, function (module) {
      GoodsIconNode = module.GoodsIconNode;
    }, function (module) {
      Utils = module.Utils;
      AddClick = module.AddClick;
      handler = module.handler;
    }, function (module) {
      Csv = module.Csv;
    }, function (module) {
      I18n = module.I18n;
    }, function (module) {
      eShopPurchaseType = module.eShopPurchaseType;
    }, function (module) {
      LogMgr = module.LogMgr;
    }, function (module) {
      UIUtils = module.UIUtils;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "5a663qXGddOZ4+0UnDUN4bg", "ShopItemNode", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ShopItemNode = exports('ShopItemNode', (_dec = ccclass('ShopItemNode'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ShopItemNode, _Component);
        function ShopItemNode() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._isInitNode = false;
          //DATA
          _this.shopId = 0;
          _this.shopConfig = void 0;
          _this.playerBuyTimes = 0;
          _this.totalBuyTimes = 0;
          //UI
          _this._timeTypeNode = void 0;
          _this._goodsName = void 0;
          _this._goodsIcon = void 0;
          _this._labelCost = void 0;
          _this._labelLimit = void 0;
          _this._buyBtn = void 0;
          _this._clickBuyCallback = void 0;
          return _this;
        }
        var _proto = ShopItemNode.prototype;
        _proto.onLoad = function onLoad() {
          this._initNode();
          this._initEvent();
        };
        _proto._initNode = function _initNode() {
          if (this._isInitNode) return;
          this._isInitNode = true;
          this._initUI();
        };
        _proto._initUI = function _initUI() {
          this._timeTypeNode = Utils.checkChildComponent(this.node, "timeType", TimeTypeNode);
          this._goodsName = this.node.getChildByName("goodsName");
          this._goodsIcon = Utils.checkChildComponent(this.node, "goodsIcon", GoodsIconNode);
          this._labelCost = this.node.getChildByName("LabelCost");
          this._labelLimit = this.node.getChildByName("LabelLimit");
          this._buyBtn = this.node.getChildByName("buyBtn");
        };
        _proto._initEvent = function _initEvent() {
          AddClick(this._buyBtn, handler(this, this.onClickBuyBtn));
        };
        _proto.init = function init(params, data) {
          this.initParam(params);
          this.initWithData(data);
        };
        _proto.initParam = function initParam(params) {
          if (!params) return;
        };
        _proto.initWithData = function initWithData(data) {
          this._initNode();
          this.initData(data);
          this.bindDataToUI();
        };
        _proto.initData = function initData(data) {
          var _goodsData$goodsId, _goodsData$playerPurc, _goodsData$totalPurch;
          var goodsData = data == null ? void 0 : data.goodsData;
          this.shopId = (_goodsData$goodsId = goodsData == null ? void 0 : goodsData.goodsId) != null ? _goodsData$goodsId : 0;
          this.shopConfig = Csv.Shop[this.shopId];
          this.playerBuyTimes = (_goodsData$playerPurc = goodsData == null ? void 0 : goodsData.playerPurchasesTimes) != null ? _goodsData$playerPurc : 0;
          this.totalBuyTimes = (_goodsData$totalPurch = goodsData == null ? void 0 : goodsData.totalPurchasesTimes) != null ? _goodsData$totalPurch : 0;
        };
        _proto.bindDataToUI = function bindDataToUI() {
          var _this$shopConfig$Vali, _this$shopConfig, _this$shopConfig$Name, _this$shopConfig2, _this$shopConfig$Purc, _this$shopConfig3, _this$shopConfig$BuyP, _this$shopConfig4, _this$shopConfig$Play, _this$shopConfig5, _this$shopConfig$Over, _this$shopConfig6;
          if (!this.shopConfig) {
            LogMgr.log("shop config null, shopId: " + this.shopId);
          }
          var _validity = (_this$shopConfig$Vali = (_this$shopConfig = this.shopConfig) == null ? void 0 : _this$shopConfig.Validity) != null ? _this$shopConfig$Vali : 0;
          var _name = (_this$shopConfig$Name = (_this$shopConfig2 = this.shopConfig) == null ? void 0 : _this$shopConfig2.Name) != null ? _this$shopConfig$Name : "";
          var _purchaseType = (_this$shopConfig$Purc = (_this$shopConfig3 = this.shopConfig) == null ? void 0 : _this$shopConfig3.PurchaseType) != null ? _this$shopConfig$Purc : -1;
          var _buyPrice = (_this$shopConfig$BuyP = (_this$shopConfig4 = this.shopConfig) == null ? void 0 : _this$shopConfig4.BuyPrice) != null ? _this$shopConfig$BuyP : 0;
          var _playerRestriction = (_this$shopConfig$Play = (_this$shopConfig5 = this.shopConfig) == null ? void 0 : _this$shopConfig5.PlayerRestriction) != null ? _this$shopConfig$Play : -1;
          var _overallRestriction = (_this$shopConfig$Over = (_this$shopConfig6 = this.shopConfig) == null ? void 0 : _this$shopConfig6.OverallRestriction) != null ? _this$shopConfig$Over : -1;
          this._timeTypeNode.initWithData({
            limitDay: _validity
          });
          I18n.setLabelText(this._goodsName, String(_name));
          this._goodsIcon.initWithData({
            shopId: this.shopId
          });
          var priceStr = "";
          if (_purchaseType == eShopPurchaseType.WIN_STREAK) {
            priceStr = "\u6D88\u8017" + _buyPrice + "\u8FDE\u80DC";
          } else if (_purchaseType == eShopPurchaseType.MINI_GAME_CURRENCY) {
            priceStr = "\u6D88\u8017" + _buyPrice + "\u5C0F\u7A0B\u5E8F\u8D27\u5E01";
          } else {
            priceStr = "\u6D88\u8017" + _buyPrice;
          }
          I18n.setLabelText(this._labelCost, priceStr);
          if (_playerRestriction > 0) {
            Utils.setActive(this._labelLimit, true);
            var leftCount = Math.max(0, _playerRestriction - this.playerBuyTimes);
            var strRestriction = "\u672C\u5468\u9650\u8D2D:" + leftCount;
            I18n.setLabelText(this._labelLimit, strRestriction);
          } else {
            Utils.setActive(this._labelLimit, false);
          }
          var isCanBuy = this.checkCanBuy();
          Utils.setGray(this._buyBtn, !isCanBuy);
          Utils.setTouchEnabled(this._buyBtn, isCanBuy);
        };
        _proto.checkCanBuy = function checkCanBuy(isLog) {
          var _this$shopConfig$Play2, _this$shopConfig7, _this$shopConfig$Over2, _this$shopConfig8;
          if (isLog === void 0) {
            isLog = false;
          }
          if (!this.shopConfig) {
            if (isLog) {
              LogMgr.log("shop config null: shopId: " + this.shopId);
            }
            return false;
          }
          var _playerRestriction = (_this$shopConfig$Play2 = (_this$shopConfig7 = this.shopConfig) == null ? void 0 : _this$shopConfig7.PlayerRestriction) != null ? _this$shopConfig$Play2 : -1;
          var _overallRestriction = (_this$shopConfig$Over2 = (_this$shopConfig8 = this.shopConfig) == null ? void 0 : _this$shopConfig8.OverallRestriction) != null ? _this$shopConfig$Over2 : -1;
          if (_playerRestriction > 0 && this.playerBuyTimes >= _playerRestriction) {
            if (isLog) {
              LogMgr.log("player restriction: shopId: " + this.shopId + ", player buy times: " + this.playerBuyTimes);
            }
            return false;
          }
          if (_overallRestriction > 0 && this.totalBuyTimes >= _overallRestriction) {
            if (isLog) {
              LogMgr.log("overall restriction: shopId: " + this.shopId + ", total buy times: " + this.totalBuyTimes);
            }
            return false;
          }
          return true;
        };
        _proto.setClickBuyCallback = function setClickBuyCallback(func) {
          this._clickBuyCallback = func;
        };
        _proto.onClickBuyBtn = function onClickBuyBtn() {
          if (!UIUtils.checkOperateInterval("SHOP_ITEM_CLICK_BUY", 500)) return;
          var isCanBuy = this.checkCanBuy(true);
          this._clickBuyCallback && this._clickBuyCallback(this.shopId, isCanBuy);
        };
        return ShopItemNode;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ShrinkWidth.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, v3, Component, Utils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      Utils = module.Utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "19996r0fQpIia06uPZFF0yy", "ShrinkWidth", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode;
      var ShrinkWidth = exports('ShrinkWidth', (_dec = ccclass('ShrinkWidth'), _dec2 = executeInEditMode(true), _dec3 = property({
        displayName: 'WidthMax',
        visible: true,
        tooltip: '设置显示最大宽度'
      }), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ShrinkWidth, _Component);
        function ShrinkWidth() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_widthMax", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ShrinkWidth.prototype;
        _proto.onLoad = function onLoad() {
          this.node.on(Node.EventType.SIZE_CHANGED, this.checkShrink, this);
          this.checkShrink();
        };
        _proto.checkShrink = function checkShrink() {
          var _size = Utils.getContentSize(this.node);
          if (this._widthMax <= 0) {
            this.node.setScale(v3(1, 1, 1));
            return;
          }
          var scale = Math.min(1, this._widthMax / _size.width);
          this.node.setScale(v3(scale, scale, 1));
        };
        return ShrinkWidth;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_widthMax", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SortUtil.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "37754jFHhROj4YfX9nkb7rc", "SortUtil", undefined);
      var SortUtil = exports('SortUtil', /*#__PURE__*/function () {
        function SortUtil() {}
        SortUtil.compareValue = function compareValue(a, b, ascending) {
          var ta = typeof a;
          var tb = typeof b;
          if (a === b) return 0;
          if (ta == "number" && tb == "number") {
            return ascending ? a - b : b - a;
          } else if (ta == "boolean" && tb == "boolean") {
            var va = a ? 1 : 0;
            var vb = b ? 1 : 0;
            return ascending ? va - vb : vb - va;
          } else if (ta == "string" && tb == "string") {
            return ascending ? a.localeCompare(b) : b.localeCompare(a);
          } else {
            var sa = String(a);
            var sb = String(b);
            return ascending ? sa.localeCompare(sb) : sb.localeCompare(sa);
          }
        };
        SortUtil.multiCompareValue = function multiCompareValue(a, b, conditions) {
          for (var _iterator = _createForOfIteratorHelperLoose(conditions), _step; !(_step = _iterator()).done;) {
            var condi = _step.value;
            var key = condi.key;
            var _ascending = condi.ascending;
            var compareFunc = condi.compare;
            var compareNum = 0;
            if (compareFunc) {
              compareNum = compareFunc(a, b, _ascending);
            } else {
              var av = a[key];
              var bv = b[key];
              compareNum = this.compareValue(av, bv, _ascending);
            }
            if (compareNum != 0) return compareNum;
          }
          return 0;
        };
        SortUtil.sortMultiCondition = function sortMultiCondition(arr, conditions) {
          var _this = this;
          if (conditions.length == 0) return;
          arr.sort(function (a, b) {
            return _this.multiCompareValue(a, b, conditions);
          });
        };
        return SortUtil;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpineComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LoadMgr.ts', './I18n.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, sp, isValid, v3, UITransform, Vec3, Component, LoadMgr, I18n;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      isValid = module.isValid;
      v3 = module.v3;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      LoadMgr = module.LoadMgr;
    }, function (module) {
      I18n = module.I18n;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "a57013CBDVMFJL7y6lCIbWQ", "SpineComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 一般该组件挂到单独一个node上
       */

      var SpineEventType = exports('SpineEventType', {
        START: 1,
        END: 2,
        COMPLETE: 3,
        EVENT: 4,
        ALL: 5
      });
      var SpineComp = exports('SpineComp', (_dec = ccclass('SpineComp'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpineComp, _Component);
        function SpineComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._spine = void 0;
          _this.__bindPath__ = "";
          _this._skeletonData = null;
          _this.skDataInited = false;
          return _this;
        }
        var _proto = SpineComp.prototype;
        _proto.onLoad = function onLoad() {
          this._initSpine();
        };
        _proto._initSpine = function _initSpine() {
          this._spine = this.node.getComponent(sp.Skeleton);
          if (!isValid(this._spine)) {
            this._spine = this.node.addComponent(sp.Skeleton);
          }
          this._spine.premultipliedAlpha = false;
        };
        /**
         * 此方法应该只调用一次
         * @param path 
         * @param cb 
         */
        _proto.loadData = function loadData(path, cb, isLang) {
          var _this2 = this;
          if (isLang === void 0) {
            isLang = false;
          }
          if (isLang) {
            var tmpPath = I18n.getSpineNameForLang(path);
            if (tmpPath != "" && LoadMgr.instance.hasSkeletonData(tmpPath)) {
              path = tmpPath;
            }
          }
          this.__bindPath__ = path;
          this.skDataInited = false;
          LoadMgr.instance.loadSkeletonData(path, function (skData) {
            if (isValid(_this2)) {
              if (skData && _this2.__bindPath__.endsWith(skData.name)) {
                _this2.skDataInited = true;
                _this2._setSkeletonData(skData);
                cb && cb(true, skData);
              } else {
                cb && cb(false);
              }
            }
          });
        };
        _proto.setMix = function setMix(fromAnimation, toAnimation, duration) {
          this.spine.setMix(fromAnimation, toAnimation, duration);
        };
        _proto.setAnimation = function setAnimation(name, loop) {
          if (loop === void 0) {
            loop = false;
          }
          if (name == "") return;
          var curName = this.getCurActionName();
          var curLoop = this.checkCurActionLoop();
          if (curName != name || curLoop != loop || !curLoop) {
            if (isValid(this.spine.skeletonData)) {
              try {
                this.spine.setAnimation(0, name, loop);
              } catch (error) {
                this.node.destroy();
                console.error("------------------- Animation error", error);
              }
            }
          }
        };
        _proto.registerEventListener = function registerEventListener(cb, type) {
          if (type === void 0) {
            type = SpineEventType.ALL;
          }
          switch (type) {
            case SpineEventType.START:
              this.spine.setStartListener(function (trackEntry) {
                cb(trackEntry, type);
              });
              break;
            case SpineEventType.END:
              this.spine.setEndListener(function (trackEntry) {
                cb(trackEntry, type);
              });
              break;
            case SpineEventType.COMPLETE:
              this.spine.setCompleteListener(function (trackEntry) {
                cb(trackEntry, type);
              });
              break;
            case SpineEventType.EVENT:
              this.spine.setEventListener(function (trackEntry, e) {
                cb(trackEntry, type, e instanceof sp.spine.Event ? e : undefined);
              });
              break;
            case SpineEventType.ALL:
              this.spine.setStartListener(function (trackEntry) {
                cb(trackEntry, SpineEventType.START);
              });
              this.spine.setEndListener(function (trackEntry) {
                cb(trackEntry, SpineEventType.END);
              });
              this.spine.setCompleteListener(function (trackEntry) {
                cb(trackEntry, SpineEventType.COMPLETE);
              });
              this.spine.setEventListener(function (trackEntry, e) {
                cb(trackEntry, SpineEventType.EVENT, e instanceof sp.spine.Event ? e : undefined);
              });
              break;
          }
        }

        /**
         * 获取当前的动画名字
         * @param trackIndex 
         * @returns 
         */;
        _proto.getCurActionName = function getCurActionName(trackIndex) {
          if (trackIndex === void 0) {
            trackIndex = 0;
          }
          var trackEntry = this.spine.getCurrent(trackIndex);
          if (trackEntry) {
            return trackEntry.animation.name;
          }
          return "";
        }

        /**
         * 获取当前动画是否是循环播放的
         * @param trackIndex 
         * @returns 
         */;
        _proto.checkCurActionLoop = function checkCurActionLoop(trackIndex) {
          if (trackIndex === void 0) {
            trackIndex = 0;
          }
          var trackEntry = this.spine.getCurrent(trackIndex);
          if (trackEntry) {
            return trackEntry.loop;
          }
          return false;
        }

        /**
         * 
         * @param name 是否有该动画名字
         * @returns 
         */;
        _proto.checkAnimation = function checkAnimation(name) {
          return this.spine.findAnimation(name) != null;
        }

        /**
         * 一般和下面的函数一起用
         * @param trackIndex 
         * @returns 
         */;
        _proto.getCurTrackTime = function getCurTrackTime(trackIndex) {
          if (trackIndex === void 0) {
            trackIndex = 0;
          }
          var trackEntry = this.spine.getCurrent(trackIndex);
          if (trackEntry) {
            return trackEntry.trackTime;
          }
          return 0;
        }

        /**
         * 设置动画从某个时间点开始播放  一般用于多个相同的动画 同步播放效果
         * @param time 
         * @param trackIndex 
         */;
        _proto.setCurTrackTime = function setCurTrackTime(time, trackIndex) {
          if (trackIndex === void 0) {
            trackIndex = 0;
          }
          var trackEntry = this.spine.getCurrent(trackIndex);
          if (trackEntry) {
            trackEntry.trackTime = time;
          }
        }
        /**
         * 一般如果动作不对了就要调用下面这个三个函数来做一些清除操作
         */;
        _proto.setToSetupPose = function setToSetupPose() {
          this.spine.setToSetupPose();
        };
        _proto.clearTrack = function clearTrack(trackIndex) {
          if (trackIndex === void 0) {
            trackIndex = 0;
          }
          this.spine.clearTrack(trackIndex);
        };
        _proto.clearTracks = function clearTracks() {
          this.spine.clearTracks();
        }

        /**
         * 左右翻转  
         * @param b 
         */;
        _proto.turnToward = function turnToward(b) {
          var scale = this.node.scale;
          var x = Math.abs(scale.x);
          scale = v3(b ? -x : x, scale.y, scale.z);
          this.node.scale = scale;
        }

        /**
         * 是否改变了左右朝向
         */;
        _proto.checkTurnedToward = function checkTurnedToward() {
          return this.node.scale.x < 0;
        }

        /**
         * 播放完成后自动删除节点
         */;
        _proto.setAutoRemove = function setAutoRemove(removeNode, callback) {
          var _this3 = this;
          if (removeNode === void 0) {
            removeNode = false;
          }
          this.registerEventListener(function () {
            _this3.removeSelf(removeNode);
            callback && callback();
            callback = undefined;
          }, SpineEventType.COMPLETE);
        };
        _proto.removeSelf = function removeSelf(removeNode) {
          if (removeNode === void 0) {
            removeNode = false;
          }
          if (removeNode) {
            this.node.destroy();
          } else {
            // 只删除这两个组件
            this.spine.destroy();
            this.destroy();
          }
        }

        /**
         * 获取骨骼的世界坐标
         * @param boneName 
         * @returns 
         */;
        _proto.getBoneWorldPos = function getBoneWorldPos(boneName) {
          var bone = this.spine.findBone(boneName);
          if (bone) {
            var pos = v3(bone.worldX, bone.worldY);
            pos = this.node.getComponent(UITransform).convertToWorldSpaceAR(pos);
            return pos;
          } else {
            console.warn("not find bone:", boneName, this.spine);
          }
          return Vec3.ZERO;
        }

        /**
         * 获取骨骼相对于target的本来坐标
         * @param boneName 
         * @param taregt 
         * @returns 
         */;
        _proto.getBonePosInNode = function getBonePosInNode(boneName, taregt) {
          var pos = this.getBoneWorldPos(boneName);
          if (isValid(taregt)) {
            pos = taregt.getComponent(UITransform).convertToNodeSpaceAR(pos);
            return pos;
          }
          return Vec3.ZERO;
        };
        _proto.getBoxRect = function getBoxRect() {
          return this.node.getComponent(UITransform).getBoundingBox();
        };
        _proto.onDestroy = function onDestroy() {
          var _this$_skeletonData;
          (_this$_skeletonData = this._skeletonData) == null || _this$_skeletonData.decRef();
          this._skeletonData = null;
        };
        _proto._setSkeletonData = function _setSkeletonData(data) {
          if (this._skeletonData == data) return;
          if (this._skeletonData) {
            this._skeletonData.decRef();
          }
          data.addRef();
          this._skeletonData = data;
          this.spine.skeletonData = data;
        };
        _createClass(SpineComp, [{
          key: "spine",
          get: function get() {
            if (!this._spine) this._initSpine();
            return this._spine;
          }
        }, {
          key: "timeScale",
          get: function get() {
            return this.spine.timeScale;
          },
          set: function set(scale) {
            this.spine.timeScale = scale;
          }
        }]);
        return SpineComp;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StorageConst.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('StorageConst', void 0);
      cclegacy._RF.push({}, "5363aY9xdBFdLBF9BY4BrLi", "StorageConst", undefined);
      var StorageConst;
      (function (_StorageConst) {
        var PlayerConst = _StorageConst.PlayerConst = {
          GAME_SPEED: "server_game_speed",
          FIRST_LOGIN_TIME: "first_login_time"
        };
        var GameConst = _StorageConst.GameConst = {
          IS_AGREE_PROTOCOL: "isAgreeProtocol",
          MACHINE_ID: "machine_id",
          MUSIC: "music",
          //音乐
          SOUND_EFF: "sound_effect",
          //音效
          VOLUME_MUSIC: "volume_music",
          //音乐音量
          VOLUME_SOUND_EFF: "volume_sound_effect",
          //音效音量
          LANG: "lang",
          // 选择的语言
          RESOLUTION: "resolution" //分辨率
        };
      })(StorageConst || (StorageConst = exports('StorageConst', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StringUtil.ts", ['cc', './I18n.ts', './Constants.ts'], function (exports) {
  var cclegacy, I18n, Constants;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      I18n = module.I18n;
    }, function (module) {
      Constants = module.Constants;
    }],
    execute: function () {
      cclegacy._RF.push({}, "91757ljUoNNLq1WCIKhV4dH", "StringUtil", undefined);
      var StringUtil = exports('StringUtil', {
        startWith: function startWith(str, prefix) {
          if (!prefix || !str.length || str[0] != prefix[0]) return false;
          return str.substring(0, prefix.length) == prefix;
        },
        endWith: function endWith(str, suffix) {
          if (!suffix || !str.length || suffix.length > str.length) return false;
          return str.substring(str.length - suffix.length) == suffix;
        },
        format: function format(str) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          return str.replace(/\{(\d+)\}/g, function (s, i) {
            return args[i];
          });
        },
        Format: function Format(str) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          return str.replace(/\{(\d+)\}/g, function (s, i) {
            if (typeof args === 'string') {
              return args[i];
            } else if (typeof args === "number") return args[i];
            switch (typeof args[i]) {
              case "string":
                return args[i];
              case "number":
                return args[i].toString();
              case "object":
                if (typeof args[i]["toString"] === "function") return args[i]["toString"]();
            }
            return String(args[i]);
          });
        },
        formatStringArray: function formatStringArray(str, args) {
          return str.replace(/\{(\d+)\}/g, function (s, i) {
            return args[i];
          });
        },
        capWord: function capWord(str) {
          return str.substr(0, 1).toUpperCase() + str.substr(1);
        },
        /** 整数转字符串补0 */PrefixInteger: function PrefixInteger(num, length) {
          if (num >= Math.pow(10, length)) {
            //num位数大于Length
            return String(num);
          } else {
            //num位数小于Length
            num = Math.floor(num), length = Math.floor(length);
            return (Array(length).join('0') + num).slice(-length);
          }
        },
        /**
         * 判断字符串是否为JSON格式
         * @author: qiaomingwu
         * @param {string} str 目标字符串
         */
        isJSON: function isJSON(str) {
          if (typeof str == 'string') {
            try {
              var obj = JSON.parse(str);
              if (typeof obj == 'object' && obj) {
                return true;
              } else {
                return false;
              }
            } catch (e) {
              return false;
            }
          }
          return false;
        },
        /**
         * 连接指定数量的字符串
         * @author: qiaomingwu
         * @param {number} num 数量
         */
        repeat: function repeat(str, num) {
          var ret = "";
          for (var i = 0; i < num; i++) {
            ret += str;
          }
          return ret;
        },
        /**
         * 是否为整数
         * @author: qiaomingwu
         * @param {number} num 数
         */
        isInt: function isInt(str) {
          return !!str.match(/^[+-]?\d*$/);
        },
        ReplaceText: function ReplaceText(str) {
          if (!str) {
            return "";
          }
          for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            args[_key3 - 1] = arguments[_key3];
          }
          if (null == args) {
            return str;
          }
          return this.format.apply(this, [str].concat(args));
        },
        /**
        * 长字符串分隔,使用#part单独一行分隔,每一段不超过300字
        * @author: qiaomingwu
        * @param {string} longString 长字符串
        */
        SplitLongStr: function SplitLongStr(longString) {
          var splitStr = [];
          var splitFunc = function splitFunc() {
            var idx = longString.indexOf("#part");
            if (idx !== -1) {
              //去除前一个回车符号
              splitStr.push(longString.slice(0, idx - 1));
              var returnIdx = longString.indexOf("\n", idx + 1);
              if (returnIdx !== -1) {
                longString = longString.slice(returnIdx + 1);
              } else {
                longString = longString.slice(idx + 5);
              }
              splitFunc();
              return;
            }
            if (longString.length > 0) {
              splitStr.push(longString);
            }
          };
          splitFunc();
          return splitStr;
        },
        FormatNumToString: function FormatNumToString(srcNum) {
          var lang = I18n.language;
          var isCn = lang == Constants.LANG.CN;
          var isTw = lang == Constants.LANG.TW;
          if (isCn || isTw) {
            return this.FormatNumToString_Chinese(srcNum);
          } else {
            return this.FormatNumToString_Normal(srcNum);
          }
        },
        FormatNumToString_Chinese: function FormatNumToString_Chinese(srcNum) {
          var isCn = I18n.language == Constants.LANG.CN;
          var isTw = I18n.language == Constants.LANG.TW;
          var fNum = srcNum;
          var unit = "";
          if (srcNum < 100000) {
            return srcNum.toString();
          } else if (srcNum >= 100000 && srcNum < 100000000) {
            fNum = fNum / 10000;
            unit = isCn ? "万" : isTw ? "萬" : "万"; //[SKIP_CHARACTER_CHECK]
          } else if (srcNum >= 100000000) {
            fNum = fNum / 100000000;
            unit = isCn ? "亿" : isTw ? "億" : "亿"; //[SKIP_CHARACTER_CHECK]
          }

          var price = String(fNum);
          var iNum = Math.floor(fNum);
          if (Math.abs(fNum - iNum) >= 0.01) {
            price = fNum.toFixed(2);
          } else {
            price = String(iNum);
          }
          return StringUtil.format("{0}{1}", price.toString(), unit.toString());
        },
        FormatNumToString_Normal: function FormatNumToString_Normal(srcNum) {
          var fNum = srcNum;
          var unit = "";
          if (srcNum < 100000) {
            return srcNum.toString();
          } else if (srcNum >= 100000 && srcNum < 10000000) {
            fNum = fNum / 1000;
            unit = "K";
          } else if (srcNum >= 10000000 && srcNum < 1000000000) {
            fNum = fNum / 1000000;
            unit = "M";
          } else {
            fNum = fNum / 1000000000;
            unit = "B";
          }
          var price = String(fNum);
          var iNum = Math.floor(fNum);
          if (Math.abs(fNum - iNum) >= 0.01) {
            price = fNum.toFixed(2);
          } else {
            price = String(iNum);
          }
          return StringUtil.format("{0}{1}", price.toString(), unit.toString());
        },
        StringToIntArray: function StringToIntArray(str, charSplit) {
          if (charSplit === void 0) {
            charSplit = "#";
          }
          if (!str) return [];
          var arr = str.split(charSplit);
          var tmpArr = [];
          for (var i = 0, len = arr.length; i < len; i++) {
            var val = arr[i];
            tmpArr.push(Number(val));
          }
          return tmpArr;
        },
        StringToIntArrayArray: function StringToIntArrayArray(str, charSemicolon, charSplit) {
          if (charSemicolon === void 0) {
            charSemicolon = ";";
          }
          if (charSplit === void 0) {
            charSplit = "#";
          }
          var tmp = str.split(charSemicolon);
          var ret = [];
          for (var i = 0; i < tmp.length; i++) {
            var _str = tmp[i];
            var tmpArr = [];
            var splitArr = _str.split(charSplit);
            for (var j = 0; j < splitArr.length; j++) {
              tmpArr.push(Number(splitArr[j]));
            }
            ret.push(tmpArr);
          }
          return ret;
        },
        toBoolean: function toBoolean(str) {
          if (typeof str == "boolean") return str;
          if (str.toLocaleLowerCase() == "false" || str.length == 0) {
            return false;
          }
          return true;
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SuitIconNode.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConfigUtils.ts', './Utils.ts', './AssetUtil.ts', './LogMgr.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Sprite, Component, ConfigUtils, Utils, AssetUtil, LogMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      ConfigUtils = module.ConfigUtils;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      AssetUtil = module.AssetUtil;
    }, function (module) {
      LogMgr = module.LogMgr;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "2345fSZa2BNBKqO/fzSqUGF", "SuitIconNode", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SuitIconNode = exports('SuitIconNode', (_dec = ccclass('SuitIconNode'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SuitIconNode, _Component);
        function SuitIconNode() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._isInitNode = false;
          //DATA
          _this.suitId = 0;
          _this.suitConfig = void 0;
          //UI
          _this._headFrameIcon = void 0;
          _this._nameplateIcon = void 0;
          return _this;
        }
        var _proto = SuitIconNode.prototype;
        _proto.onLoad = function onLoad() {
          this._initNode();
          this._initEvent();
        };
        _proto._initNode = function _initNode() {
          if (this._isInitNode) return;
          this._isInitNode = true;
          this._initUI();
        };
        _proto._initUI = function _initUI() {
          this._headFrameIcon = Utils.checkChildComponent(this.node, "headFrameIcon", Sprite);
          this._nameplateIcon = Utils.checkChildComponent(this.node, "nameplateIcon", Sprite);
        };
        _proto._initEvent = function _initEvent() {};
        _proto.init = function init(params, data) {
          this.initParam(params);
          this.initWithData(data);
        };
        _proto.initParam = function initParam(params) {
          if (!params) return;
        };
        _proto.initWithData = function initWithData(data) {
          this._initNode();
          this.initData(data);
          this.bindDataToUI();
        };
        _proto.initData = function initData(data) {
          var _data$suitId;
          this.suitId = (_data$suitId = data == null ? void 0 : data.suitId) != null ? _data$suitId : 0;
          this.suitConfig = ConfigUtils.getSuitConfig(this.suitId);
        };
        _proto.bindDataToUI = function bindDataToUI() {
          var headFrameImg = undefined;
          var nameplateImg = undefined;
          if (this.suitConfig) {
            var headFrameConfig = this.suitConfig.headFrameConfig;
            var nameplateConfig = this.suitConfig.nameplateConfig;
            headFrameImg = headFrameConfig == null ? void 0 : headFrameConfig.ItemIcon;
            nameplateImg = nameplateConfig == null ? void 0 : nameplateConfig.ItemIcon;
          } else {
            LogMgr.log("suit config null, suitId: " + this.suitId);
          }
          this._headFrameIcon.spriteFrame = null;
          this._nameplateIcon.spriteFrame = null;
          if (headFrameImg && headFrameImg.length > 0) {
            AssetUtil.setSpriteFrameByAtlas(this._headFrameIcon.node, headFrameImg);
          }
          if (nameplateImg && nameplateImg.length > 0) {
            AssetUtil.setSpriteFrameByAtlas(this._nameplateIcon.node, nameplateImg);
          }
        };
        return SuitIconNode;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TableView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Size, ScrollView, UITransform, NodeEventType, v2, v3, Prefab, instantiate, Vec3, Tween, tween, Vec2, size, Component, Utils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Size = module.Size;
      ScrollView = module.ScrollView;
      UITransform = module.UITransform;
      NodeEventType = module.NodeEventType;
      v2 = module.v2;
      v3 = module.v3;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      Tween = module.Tween;
      tween = module.tween;
      Vec2 = module.Vec2;
      size = module.size;
      Component = module.Component;
    }, function (module) {
      Utils = module.Utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "ef432xbm31LJYO0cHOuiZ+r", "TableView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TableView = exports('TableView', (_dec = ccclass('TableView'), _dec2 = property({
        type: Node,
        visible: true
      }), _dec3 = property({
        visible: true,
        tooltip: "content小于view的时候是否可以滚动"
      }), _dec4 = property({
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TableView, _Component);
        function TableView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_cellItem", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_lessScrollable", _descriptor2, _assertThisInitialized(_this));
          _this._contentSize = Size.ZERO;
          _this._viewSize = Size.ZERO;
          // 子项大小
          _this._cellSize = Size.ZERO;
          // 子项间隔
          _this._cellInterval = 0;
          // 子项数量
          _this._cellCount = 0;
          // 开始结束下标
          _this._startIndex = 0;
          _this._endIndex = 0;
          // 可见的 index:Node{key:number :value:Node}
          _this._cells = {};
          // 可重用的
          _this._reuseCells = [];
          _this._scrollView = void 0;
          // 前面加 "!" 表示这个的值一定是该类型
          _this._viewTrans = void 0;
          _this._contentTrans = void 0;
          // 在实际的contentsize大小上再加上的大小
          _this._extraDistance = 0;
          _this._extraTopDistance = 0;
          _this._cellLoadCallback = void 0;
          // 可视区域能显示的item数目
          _this._visibleCount = 0;
          _this._inited = false;
          // grid 相关
          // 一行可能有多个cell
          _this._gridNum = 1;
          // 一行中各个grid的间隔
          _this._gridInterval = 10;
          _this._gridsRowWidth = 0;
          _this._maxGridRow = 0;
          // 最多多少行 从1开始
          // pageview 相关
          _initializerDefineProperty(_this, "_pageAbled", _descriptor3, _assertThisInitialized(_this));
          // 当前page序号
          _this._pageIndex = 0;
          _this._pageDir = 0;
          // 1向前  -1向后
          _this._pageCellCallback = void 0;
          _this._scrollCallback = void 0;
          // 滚动临界值，默认单位百分比，当拖拽超出该数值时，松开会自动滚动下一页，小于时则还原。
          _this.scrollThreshold = 0.2;
          return _this;
        }
        var _proto = TableView.prototype;
        _proto.onLoad = function onLoad() {
          this._init();
        };
        _proto._init = function _init() {
          var _this$_scrollView$con,
            _this2 = this;
          if (this._inited) return;
          this._inited = true;
          this._scrollView = this.node.getComponent(ScrollView);
          this._viewTrans = this._scrollView.view;
          this._viewSize = this._viewTrans.contentSize;
          this._contentTrans = (_this$_scrollView$con = this._scrollView.content) == null ? void 0 : _this$_scrollView$con.getComponent(UITransform);
          this.node.on(ScrollView.EventType.SCROLLING, this._onScrolling, this);
          this.node.on(ScrollView.EventType.SCROLL_BEGAN, function (scrollView, touch) {
            _this2._scrollCallback && _this2._scrollCallback();
          });
          this.node.on(ScrollView.EventType.SCROLL_ENDED, function (scrollView, touch) {
            _this2._checkTouchDir(touch);
            _this2._updatePageCenter(0.5);
          });
          this.node.on(NodeEventType.TOUCH_START, function () {
            _this2._pageDir = 0;
          });
          // 只能是横向滚动或者竖向滚动
          if (this._scrollView.horizontal) {
            // 重新设置内容的锚点 靠右
            this._contentTrans.anchorPoint = v2(0, 0.5);
          } else {
            // 靠上            
            if (this._scrollView.isBottomToTop) {
              this._contentTrans.anchorPoint = v2(0.5, 0);
            } else {
              this._contentTrans.anchorPoint = v2(0.5, 1);
            }
          }
          // 当page的时候
          if (this._pageAbled) {
            this._scrollView.inertia = false;
          }
          this._calItemSize();
        };
        _proto._initView = function _initView(refresh_cell, useLastOffset) {
          if (refresh_cell === void 0) {
            refresh_cell = true;
          }
          if (useLastOffset === void 0) {
            useLastOffset = false;
          }
          this._visibleCount = 0;
          if (this._scrollView.horizontal) {
            if (this._viewSize.width > this._contentSize.width) {
              this._visibleCount = Math.floor((this._contentSize.width + this._cellInterval) / (this._cellSize.width + this._cellInterval));
            } else {
              this._visibleCount = Math.ceil((this._viewSize.width + this._cellInterval) / (this._cellSize.width + this._cellInterval));
            }
          } else {
            if (this._viewSize.height > this._contentSize.height) {
              this._visibleCount = Math.floor((this._contentSize.height + this._cellInterval) / (this._cellSize.height + this._cellInterval));
            } else {
              this._visibleCount = Math.ceil((this._viewSize.height + this._cellInterval) / (this._cellSize.height + this._cellInterval));
            }
          }
          this._maxGridRow = Math.ceil(this._cellCount / this._gridNum);
          this._startIndex = 0;
          this._visibleCount = Math.min(this._visibleCount, this._maxGridRow);
          this._endIndex = this._visibleCount - 1;
          if (refresh_cell) {
            if (useLastOffset) {
              this._calCellIndex();
            } else {
              // 对齐到左上(下)
              if (this._scrollView.horizontal) {
                var x = this._extraTopDistance + this._viewTrans.anchorPoint.x * this._viewSize.width;
                this._contentTrans.node.position = v3(x, this._contentTrans.node.position.y, this._contentTrans.node.position.z);
              } else {
                var y = this._extraTopDistance + (1 - this._viewTrans.anchorPoint.y) * this._viewTrans.height;
                if (this._scrollView.isBottomToTop) y = -y;
                this._contentTrans.node.position = v3(this._contentTrans.node.position.x, y, this._contentTrans.node.position.z);
              }
            }
            this._updateCells();
          }
        };
        _proto._calItemSize = function _calItemSize() {
          if (this._cellItem) {
            var _this$_cellItem;
            if (this._cellItem instanceof Prefab) {
              this._cellItem = instantiate(this._cellItem);
            }
            this._cellSize = (_this$_cellItem = this._cellItem) == null || (_this$_cellItem = _this$_cellItem.getComponent(UITransform)) == null ? void 0 : _this$_cellItem.contentSize;
          }
        };
        _proto._createCellAtIndex = function _createCellAtIndex(index) {
          var cell;
          var reuse = false;
          if (this._reuseCells.length > 0) {
            // 有重用的就取第一个
            cell = this._reuseCells.shift();
            reuse = true;
          } else {
            // 重新创建
            if (!this._cellItem) {
              return;
            }
            cell = instantiate(this._cellItem);
          }
          cell.parent = this._contentTrans.node;
          var cellTrans = cell.getComponent(UITransform);
          if (this._scrollView.horizontal) {
            var posX = index * this._cellSize.width + index * this._cellInterval + this._extraTopDistance;
            posX += this._cellSize.width * cellTrans.anchorPoint.x;
            cell.position = v3(posX, (cellTrans.anchorPoint.y - 0.5) * this._contentSize.height, cell.position.z);
          } else {
            var col = index % this._gridNum;
            var row = Math.floor(index / this._gridNum);

            // cell下边缘到content下边缘的距离
            var posY = row * this._cellSize.height + row * this._cellInterval + this._extraTopDistance;
            if (this._scrollView.isBottomToTop) {
              posY += this._cellSize.height * cellTrans.anchorPoint.y;
            } else {
              posY = -posY;
              posY -= this._cellSize.height * (1 - cellTrans.anchorPoint.y);
            }
            var _posX = (this._cellSize.width + this._gridInterval) * col + this._cellSize.width * cellTrans.anchorPoint.x;
            _posX -= this._gridsRowWidth * 0.5;
            cell.position = v3(_posX, posY, cell.position.z);
          }
          cell.name = "item" + index.toString();
          cell.active = true;
          // 加到当前展示的里面
          this._cells[index] = cell;
          this._cellLoadCallback && this._cellLoadCallback(index, cell, reuse);
        };
        _proto._convert2GridIndex = function _convert2GridIndex() {
          var realStart = this._startIndex;
          var realEnd = this._endIndex;
          realStart *= this._gridNum;
          realEnd = (realEnd + 1) * this._gridNum - 1;
          realEnd = Math.min(realEnd, this._cellCount - 1);
          return {
            realStart: realStart,
            realEnd: realEnd
          };
        };
        _proto._updateCells = function _updateCells() {
          var delArr = [];
          var _this$_convert2GridIn = this._convert2GridIndex(),
            realStart = _this$_convert2GridIn.realStart,
            realEnd = _this$_convert2GridIn.realEnd;
          for (var _index in this._cells) {
            var idx = Number(_index);
            if (idx < realStart || idx > realEnd) {
              delArr.push(idx);
              this._cells[_index].active = false;
              this._reuseCells.push(this._cells[idx]);
            }
          }
          for (var _i = 0, _delArr = delArr; _i < _delArr.length; _i++) {
            var _index2 = _delArr[_i];
            delete this._cells[_index2];
          }
          for (var i = realStart; i <= realEnd; ++i) {
            if (!this._cells[i]) {
              this._createCellAtIndex(i);
            }
          }
        };
        _proto._calCellIndex = function _calCellIndex() {
          var scrollOffset = this._scrollView.getScrollOffset();
          if (this._scrollView.horizontal) {
            // 此时scrollOffset.x 为负数
            var start = -scrollOffset.x;
            var end = -scrollOffset.x + this._viewSize.width;
            this._startIndex = Math.ceil((start + this._cellInterval) / (this._cellSize.width + this._cellInterval)) - 1;
            this._endIndex = Math.ceil((end + this._cellInterval) / (this._cellSize.width + this._cellInterval)) - 1;
          } else {
            var offsetY = scrollOffset.y;
            var _start = offsetY;
            var _end = offsetY + this._viewSize.height;
            if (this._scrollView.isBottomToTop) {
              _start = this._contentSize.height - _end;
              _end = _start + this._viewSize.height;
            }
            this._startIndex = Math.ceil((_start + this._cellInterval) / (this._cellSize.height + this._cellInterval)) - 1;
            this._endIndex = Math.ceil((_end + this._cellInterval) / (this._cellSize.height + this._cellInterval)) - 1;
          }
          this._startIndex = Math.max(0, this._startIndex);
          this._endIndex = Math.min(this._maxGridRow - 1, this._endIndex);
          // 要凑齐显示区域
          if (this._startIndex == 0) {
            this._endIndex = Math.max(this._visibleCount - 1, this._endIndex);
          } else if (this._endIndex == this._maxGridRow - 1) {
            this._startIndex = Math.min(this._endIndex - this._visibleCount + 1, this._startIndex);
          }
        };
        _proto._refreshCellsByCurOffset = function _refreshCellsByCurOffset() {
          this._calCellIndex();
          this._updateCells();
        };
        _proto._onScrolling = function _onScrolling(scrollVew) {
          // 内容没有超出可视区域的 不处理
          if (this._scrollView.horizontal && this._contentSize.width <= this._viewSize.width || this._scrollView.vertical && this._contentSize.height <= this._viewSize.height) {
            return;
          }
          this._refreshCellsByCurOffset();
        };
        _proto._findCenterIndex = function _findCenterIndex() {
          var min_distance = 99999999999;
          var middle = -1;
          var to_center_d = 0;
          for (var i = this._startIndex; i <= this._endIndex; ++i) {
            var _node = this._cells[i];
            if (!_node) continue;
            to_center_d = this._cellToCenterDistance(_node);
            if (Math.abs(to_center_d) < Math.abs(min_distance)) {
              min_distance = to_center_d;
              middle = i;
            }
          }
          if (middle == this._pageIndex && this._pageDir != 0) {
            var _i2 = this._pageDir + middle;
            if (this._cells[_i2]) {
              min_distance = this._cellToCenterDistance(this._cells[_i2]);
              middle = _i2;
            }
          }
          return {
            idex: middle,
            d: min_distance
          };
        };
        _proto._cellToCenterDistance = function _cellToCenterDistance(cell) {
          var d = 0;
          var pos = Utils.getPositionInNode(cell, this._viewTrans.node);
          if (this._scrollView.horizontal) {
            d = pos.x;
            d += (0.5 - cell.getComponent(UITransform).anchorPoint.x) * this._cellSize.width;
          } else {
            d = pos.y;
            d -= (cell.getComponent(UITransform).anchorPoint.y - 0.5) * this._cellSize.height;
          }
          return d;
        }
        // 作为page的时候要保持到中间
        ;

        _proto._updatePageCenter = function _updatePageCenter(duration) {
          var _this3 = this;
          if (duration === void 0) {
            duration = 0;
          }
          // 一行只有一个cell的时候才可以作为page滚动
          if (!this._pageAbled || this._gridNum > 1) return;
          var info = this._findCenterIndex();
          var middle = info.idex;
          if (middle == -1) return;
          this._pageIndex = middle;
          var targetPos = v3(0);
          // 中间的cell    
          if (middle > 0 && middle < this._cellCount - 1) {
            // 创建上一个
            var preNode = this._cells[middle - 1];
            if (!preNode) {
              this._createCellAtIndex(middle - 1);
              this._startIndex -= 1;
            }
            // 创建下一个
            var nextNode = this._cells[middle + 1];
            if (!nextNode) {
              this._createCellAtIndex(middle + 1);
              this._endIndex += 1;
            }
            var addPos = v3(0, 0, 0);
            if (this._scrollView.horizontal) {
              addPos.x = info.d;
            } else {
              addPos.y = info.d;
            }
            targetPos = Vec3.subtract(new Vec3(0), this._contentTrans.node.position, addPos);
          } else {
            // 第一个cell
            if (middle == 0) {
              if (this._scrollView.horizontal) {
                targetPos = v3(this._contentTrans.node.position);
                targetPos.x = -this._viewSize.width * 0.5;
              } else {
                targetPos = v3(this._contentTrans.node.position);
                targetPos.y = this._viewSize.height * 0.5;
                if (this._scrollView.isBottomToTop) {
                  targetPos.y = -this._viewSize.height * 0.5;
                }
              }
            } else if (middle == this._cellCount - 1) {
              // 最后一个cell
              if (this._scrollView.horizontal) {
                targetPos = v3(this._contentTrans.node.position);
                targetPos.x = -(this._contentSize.width - this._viewSize.width * 0.5);
              } else {
                targetPos = v3(this._contentTrans.node.position);
                targetPos.y = this._contentSize.height - this._viewSize.height * 0.5;
                if (this._scrollView.isBottomToTop) {
                  targetPos.y = -this._contentSize.height + this._viewSize.height * 0.5;
                }
              }
            }
          }
          Tween.stopAllByTag(123, this._contentTrans.node);
          var isEqual = Vec3.distance(targetPos, this._contentTrans.node.position) <= 10;
          if (duration > 0 && !isEqual) {
            this.node.pauseSystemEvents(true);
            tween(this._contentTrans.node).to(0.5, {
              position: targetPos
            }, {
              onUpdate: function onUpdate() {
                // this._onScrolling(this._scrollView);
              }
            }).call(function () {
              _this3.node.resumeSystemEvents(true);
              _this3._pageCellCallback == null || _this3._pageCellCallback(_this3._pageIndex);
            }).tag(123).start();
          } else {
            var _this$_pageCellCallba;
            this._contentTrans.node.position = targetPos;
            (_this$_pageCellCallba = this._pageCellCallback) == null || _this$_pageCellCallba.call(this, this._pageIndex);
          }
        };
        _proto._checkTouchDir = function _checkTouchDir(touch) {
          if (!this._pageAbled || !touch) return;
          var endPos = touch.getUILocation();
          var startPos = touch.getUIStartLocation();
          var delatPos = Vec2.subtract(new Vec2(), endPos, startPos);
          if (this._scrollView.horizontal) {
            if (Math.abs(delatPos.x) >= this._cellSize.width * this.scrollThreshold) {
              // deltaPos.x > 0 向右边划动
              this._pageDir = delatPos.x > 0 ? -1 : 1;
            }
          } else {
            if (Math.abs(delatPos.y) >= this._cellSize.height * this.scrollThreshold) {
              if (delatPos.y > 0) {
                // 向上滑动的
                this._pageDir = this._scrollView.isBottomToTop ? -1 : 1;
              } else {
                this._pageDir = this._scrollView.isBottomToTop ? 1 : -1;
              }
            }
          }
        };
        _proto.setCellLoadCallback = function setCellLoadCallback(func) {
          this._cellLoadCallback = func;
        };
        _proto.setPageCellCallback = function setPageCellCallback(func) {
          this._pageCellCallback = func;
        };
        _proto.setOnScrollCallback = function setOnScrollCallback(func) {
          this._scrollCallback = func;
        };
        _proto.setExtraDistance = function setExtraDistance(extra_d, extra_top_d) {
          if (extra_top_d === void 0) {
            extra_top_d = 0;
          }
          this._extraDistance = extra_d;
          this._extraTopDistance = extra_top_d;
        }
        /**
         * 当content小于view的时候 是否也可以拖动  默认不可以
         */;
        /**
         * 
         * @param type 可视区域内的组件
         * @returns 
         */
        _proto.getValidComs = function getValidComs(type) {
          var comps = [];
          var _this$_convert2GridIn2 = this._convert2GridIndex(),
            realStart = _this$_convert2GridIn2.realStart,
            realEnd = _this$_convert2GridIn2.realEnd;
          for (var i = realStart; i <= realEnd; ++i) {
            var _node2 = this._cells[i];
            if (_node2) {
              var comp = _node2.getComponent(type);
              if (comp) comps.push(comp);
            }
          }
          return comps;
        }
        /**
         * 根据idx获取可视区域内的组件
         * @param type 
         * @param idx 
         */;
        _proto.getValidCompByIdx = function getValidCompByIdx(type, idx) {
          var component = null;
          var _this$_convert2GridIn3 = this._convert2GridIndex(),
            realStart = _this$_convert2GridIn3.realStart,
            realEnd = _this$_convert2GridIn3.realEnd;
          for (var i = realStart; i <= realEnd; ++i) {
            if (i === idx) {
              var _node3 = this._cells[i];
              if (_node3) {
                var comp = _node3.getComponent(type);
                if (comp) component = comp;
              }
              break;
            }
          }
          return component;
        };
        _proto.getValidNodeByIdx = function getValidNodeByIdx(idx) {
          var node = null;
          var _this$_convert2GridIn4 = this._convert2GridIndex(),
            realStart = _this$_convert2GridIn4.realStart,
            realEnd = _this$_convert2GridIn4.realEnd;
          for (var i = realStart; i <= realEnd; ++i) {
            if (i === idx) {
              var cell = this._cells[i];
              if (cell) {
                node = cell;
              }
              break;
            }
          }
          return node;
        };
        /**
         * 
         * @param refresh_cell 是否立即刷新  默认true， 如果是false的话一般是后面调用jumpToIndex之类的来刷新特定的区域
         * @param useLastOffset 是否用上次滚动到的位置来填充，默认是false 表示从第一个开始填充  否则是从上次的滚动位置填充。refresh_cell为true是有效
         */
        _proto.reloadData = function reloadData(refresh_cell, useLastOffset) {
          if (refresh_cell === void 0) {
            refresh_cell = true;
          }
          if (useLastOffset === void 0) {
            useLastOffset = false;
          }
          this._init();
          for (var _index3 in this._cells) {
            var _node4 = this._cells[_index3];
            _node4.active = false;
            this._reuseCells.push(_node4);
          }
          this._cells = {};
          if (this._scrollView.horizontal) {
            this._contentSize = size(this._cellSize.width * this._cellCount + (this._cellCount - 1) * this._cellInterval + this._extraDistance + this._extraTopDistance, this._contentTrans.contentSize.height);
            if (this._lessScrollable) {
              this._contentSize.width = Math.max(this._viewSize.width, this._contentSize.width);
            }
          } else {
            var row = Math.ceil(this._cellCount / this._gridNum);
            this._contentSize = size(this._viewSize.width, this._cellSize.height * row + (row - 1) * this._cellInterval + this._extraDistance + this._extraTopDistance);
            if (this._lessScrollable) {
              this._contentSize.height = Math.max(this._viewSize.height, this._contentSize.height);
            }
            // 一行中所有grid加起来占用的 width
            this._gridsRowWidth = this._cellSize.width * this._gridNum + (this._gridNum - 1) * this._gridInterval;
          }
          // 设置content大小
          this._contentTrans.contentSize = this._contentSize;
          this._initView(refresh_cell, useLastOffset);
        }
        // index [0, this._cellCount - 1]
        ;

        _proto.jumpToIndex = function jumpToIndex(index, timeInSecond) {
          if (timeInSecond === void 0) {
            timeInSecond = 0;
          }
          index = Math.max(0, index);
          index = Math.min(this._cellCount - 1, index);
          this._scrollView.stopAutoScroll();
          var maxScrollOffset = this._scrollView.getMaxScrollOffset();
          if (this._scrollView.horizontal) {
            var x = index * (this._cellSize.width + this._cellInterval) + this._extraTopDistance;
            if (timeInSecond <= 0 || maxScrollOffset.x <= 0) {
              x += this._viewTrans.anchorPoint.x * this._viewSize.width;
              this._contentTrans.node.position = v3(-x, this._contentTrans.node.position.y);
              this._refreshCellsByCurOffset();
              this._updatePageCenter();
            } else {
              var pos = v2(x / maxScrollOffset.x, 0);
              this._scrollView.scrollTo(pos, timeInSecond);
            }
          } else {
            var row = Math.floor(index / this._gridNum);
            var y = row * (this._cellSize.height + this._cellInterval) + this._extraTopDistance;
            if (timeInSecond <= 0 || maxScrollOffset.y <= 0) {
              y += (1 - this._viewTrans.anchorPoint.y) * this._viewSize.height;
              if (this._scrollView.isBottomToTop) {
                y = -y;
              }
              this._contentTrans.node.position = v3(this._contentTrans.node.position.x, y);
              this._refreshCellsByCurOffset();
              this._updatePageCenter();
            } else {
              var _pos = v2(0, 1 - y / maxScrollOffset.y);
              if (this._scrollView.isBottomToTop) {
                _pos = v2(0, y / maxScrollOffset.y);
              }
              this._scrollView.scrollTo(_pos, timeInSecond);
            }
          }
        };
        _proto.jumpToFirst = function jumpToFirst(timeInSecond) {
          this.jumpToIndex(0, timeInSecond);
        };
        _proto.jumpToLast = function jumpToLast(timeInSecond) {
          this.jumpToIndex(this._cellCount - 1, timeInSecond);
        };
        _createClass(TableView, [{
          key: "pageIndex",
          get: function get() {
            return this._pageIndex;
          }
        }, {
          key: "cellInterval",
          set: function set(d) {
            this._cellInterval = d;
          }
        }, {
          key: "cellCount",
          set: function set(count) {
            this._cellCount = count;
          }
        }, {
          key: "lessScrollable",
          set: function set(b) {
            this._lessScrollable = b;
          }
          /**
           * 一行包含多少个cell  默认都是1个
           * 主要是针对竖向的滚动  横向的一般每一列就一个cell
           */
        }, {
          key: "gridNum",
          set: function set(num) {
            this._gridNum = num;
          }
          /**
           * 一行中grid cell的间隔
           */
        }, {
          key: "gridInterval",
          set: function set(num) {
            this._gridInterval = num;
          }
        }, {
          key: "startIndex",
          get: function get() {
            return this._convert2GridIndex().realStart;
          }
        }, {
          key: "endIndex",
          get: function get() {
            return this._convert2GridIndex().realEnd;
          }
        }, {
          key: "cellSize",
          set: function set(s) {
            this._cellSize = s;
          }
        }, {
          key: "cellItem",
          set: function set(item) {
            this._cellItem = item;
            this._calItemSize();
          }
        }]);
        return TableView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_cellItem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_lessScrollable", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_pageAbled", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TestData.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c39a2VuTgZMT5NYyveCywlC", "TestData", undefined);
      var TestData = exports('TestData', function TestData(data) {
        this.attr1 = "";
        this.attr2 = "";
        this.attr3 = "";
        if (!data) return;
        if (data.attr1 != undefined) {
          this.attr1 = data.attr1;
        }
        if (data.attr2 != undefined) {
          this.attr2 = data.attr2;
        }
        if (data.attr3 != undefined) {
          this.attr3 = data.attr3;
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TestFuncLayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './WinBase.ts', './WinMgr.ts', './Utils.ts', './I18n.ts', './WinPrefabPath.ts', './LogMgr.ts', './Electron.ts', './GameTimer.ts', './UIUtils.ts', './GameApp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, EditBox, instantiate, Label, WinBase, WinMgr, WIN_TYPE, WIN_MASK_TYPE, Utils, AddClick, handler, I18n, WIN_NAME, LogMgr, Electron, GameTimer, UIUtils, GameApp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EditBox = module.EditBox;
      instantiate = module.instantiate;
      Label = module.Label;
    }, function (module) {
      WinBase = module.WinBase;
    }, function (module) {
      WinMgr = module.WinMgr;
      WIN_TYPE = module.WIN_TYPE;
      WIN_MASK_TYPE = module.WIN_MASK_TYPE;
    }, function (module) {
      Utils = module.Utils;
      AddClick = module.AddClick;
      handler = module.handler;
    }, function (module) {
      I18n = module.I18n;
    }, function (module) {
      WIN_NAME = module.WIN_NAME;
    }, function (module) {
      LogMgr = module.LogMgr;
    }, function (module) {
      Electron = module.Electron;
    }, function (module) {
      GameTimer = module.GameTimer;
    }, function (module) {
      UIUtils = module.UIUtils;
    }, function (module) {
      GameApp = module.GameApp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "c6aeeRHMJJIYpWbB5A9PeEL", "TestFuncLayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TestFuncLayer = exports('TestFuncLayer', (_dec = ccclass('TestFuncLayer'), _dec(_class = /*#__PURE__*/function (_WinBase) {
        _inheritsLoose(TestFuncLayer, _WinBase);
        function TestFuncLayer() {
          var _this;
          _this = _WinBase.call(this) || this;
          _this._isInitNode = false;
          //UI
          _this._root = void 0;
          _this._inputBox = void 0;
          _this._okBtn = void 0;
          _this._infoLabel = void 0;
          _this._view = void 0;
          _this._viewContent = void 0;
          _this._viewItem = void 0;
          _this.showType = WIN_TYPE.HIDDEN_POP;
          _this.maskType = WIN_MASK_TYPE.DARK_BLANK_CLOSE;
          _this._listeners = [];
          return _this;
        }
        var _proto = TestFuncLayer.prototype;
        _proto.onLoad = function onLoad() {
          _WinBase.prototype.onLoad.call(this);
          this._initNode();
          this._initEvent();
        };
        _proto._initNode = function _initNode() {
          if (this._isInitNode) return;
          this._isInitNode = true;
          this._initUI();
        };
        _proto._initUI = function _initUI() {
          this._root = this.node.getChildByName("root");
          this._inputBox = Utils.checkComponent(this._root.getChildByPath("bg1/EditBox"), EditBox);
          this._okBtn = this._root.getChildByPath("bg1/okBtn");
          this._infoLabel = this._root.getChildByPath("bg1/infoBg/infoLabel");
          I18n.setLabelText(this._infoLabel, "");
          this._view = this._root.getChildByName("ScrollView");
          this._viewContent = this._view.getChildByName("content");
          this._viewItem = this._view.getChildByName("item");
        };
        _proto._initEvent = function _initEvent() {
          AddClick(this._okBtn, handler(this, this.onClickOkBtn));
        };
        _proto.initParam = function initParam() {
          this._initNode();
          this.bindDataToUI();
        };
        _proto.bindDataToUI = function bindDataToUI() {
          this.resetViewList();
        };
        _proto.resetViewList = function resetViewList() {
          var _this$_viewContent,
            _this2 = this;
          var funcKeys = [{
            key: "OpenDevTools",
            title: "open dev tools",
            enable: true
          }, {
            key: "CloseDevTools",
            title: "close dev tools",
            enable: true
          }, {
            key: "OpenLogView",
            title: "open log view",
            enable: true
          }, {
            key: "LogWritablePath",
            title: "log writable path",
            enable: true
          }, {
            key: "TestErroe",
            title: "test erroe",
            enable: true
          }, {
            key: "TestCrash",
            title: "test crash",
            enable: true
          }, {
            key: "TestNotice",
            title: "test notice",
            enable: true
          }, {
            key: "TestWeakNetTip",
            title: "test weak net tip",
            enable: true
          }, {
            key: "TestWaittingView",
            title: "test waitting view",
            enable: true
          }, {
            key: "TestPopUpWin",
            title: "test pop up win",
            enable: true
          }, {
            key: "TestPromptWin",
            title: "test prompt win",
            enable: true
          }, {
            key: "TestShowWebView",
            title: "test show webview",
            enable: true
          }, {
            key: "TestLockScreen",
            title: "test lock screen",
            enable: true
          }, {
            key: "TestGotoLaunch",
            title: "test goto launch",
            enable: true
          }];
          this._viewItem.active = false;
          (_this$_viewContent = this._viewContent) == null || _this$_viewContent.removeAllChildren();
          var _loop = function _loop(i) {
            var _this2$_viewContent;
            if (!funcKeys[i].enable) return 1; // continue
            var cell = instantiate(_this2._viewItem);
            cell.active = true;
            (_this2$_viewContent = _this2._viewContent) == null || _this2$_viewContent.addChild(cell);
            var btn = cell.getChildByName("btn");
            var btnTxt = cell.getChildByPath("btn/txt");
            btnTxt.getComponent(Label).string = funcKeys[i].title;
            AddClick(btn, function () {
              _this2.onClickTestCell(funcKeys[i].key);
            });
          };
          for (var i = 0, len = funcKeys.length; i < len; i++) {
            if (_loop(i)) continue;
          }
        };
        _proto.onClickOkBtn = function onClickOkBtn() {
          var str = this._inputBox.string;
          console.log("input: " + str);
        };
        _proto.onClickTestCell = function onClickTestCell(key) {
          console.log("click test cell:" + key);
          var funcName = "do" + key;
          var func = this[funcName];
          if (func) {
            func.call(this);
          }
        };
        _proto.doOpenDevTools = function doOpenDevTools() {
          this.close();
          Electron.openDevTools();
        };
        _proto.doCloseDevTools = function doCloseDevTools() {
          this.close();
          Electron.closeDevTools();
        };
        _proto.doOpenLogView = function doOpenLogView() {
          this.close();
          WinMgr.instance.open(WIN_NAME.TEST_LOG_VIEW);
        };
        _proto.doLogWritablePath = function doLogWritablePath() {};
        _proto.doTestErroe = function doTestErroe() {
          this.close();
          GameTimer.instance.setTimeout(function () {
            LogMgr.log("doTestErroe");
            var a = 'hell';
            a.fun();
            var tmpArr = [];
            tmpArr.length = -1;
          }, 1000);
        };
        _proto.doTestCrash = function doTestCrash() {
          this.close();
          Electron.testCrashMainProcess();
        };
        _proto.doTestNotice = function doTestNotice() {
          WinMgr.instance.addNotice("这是一段提示文本!");
        };
        _proto.doTestWeakNetTip = function doTestWeakNetTip() {
          WinMgr.instance.showWeakNetTip();
          this.scheduleOnce(function () {
            WinMgr.instance.hideWeakNetTip();
          }, 3.0);
        };
        _proto.doTestWaittingView = function doTestWaittingView() {
          WinMgr.instance.showWaittingView();
          this.scheduleOnce(function () {
            WinMgr.instance.hideWaittingView();
          }, 5.0);
        };
        _proto.doTestPopUpWin = function doTestPopUpWin() {
          UIUtils.showConfirmToCloseApp();
        };
        _proto.doTestPromptWin = function doTestPromptWin() {
          UIUtils.showHelp("帮助文本帮助文本帮助文本帮助文本帮助文本帮助文本帮助文本帮助文本帮助文本帮助文本帮助文本帮助文本帮助文本帮助文本帮助文本帮助文本帮助文本帮助文本帮助文本帮助文本帮助文本");
        };
        _proto.doTestShowWebView = function doTestShowWebView() {
          UIUtils.showWebView("https://www.cocos.com");
        };
        _proto.doTestLockScreen = function doTestLockScreen() {
          WinMgr.instance.lockScreen(5, undefined, 150);
        };
        _proto.doTestGotoLaunch = function doTestGotoLaunch() {
          GameApp.instance.loadLaunchView();
        };
        return TestFuncLayer;
      }(WinBase)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TestLogView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './WinBase.ts', './WinMgr.ts', './TableView.ts', './Utils.ts', './I18n.ts', './LogMgr.ts', './NativeUtil.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, isValid, WinBase, WIN_TYPE, WIN_MASK_TYPE, TableView, Utils, AddClick, I18n, LogMgr, NativeUtil;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      isValid = module.isValid;
    }, function (module) {
      WinBase = module.WinBase;
    }, function (module) {
      WIN_TYPE = module.WIN_TYPE;
      WIN_MASK_TYPE = module.WIN_MASK_TYPE;
    }, function (module) {
      TableView = module.TableView;
    }, function (module) {
      Utils = module.Utils;
      AddClick = module.AddClick;
    }, function (module) {
      I18n = module.I18n;
    }, function (module) {
      LogMgr = module.LogMgr;
    }, function (module) {
      NativeUtil = module.NativeUtil;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "d94da6QJl1O54eWG9LNhQSr", "TestLogView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TestLogView = exports('TestLogView', (_dec = ccclass('TestLogView'), _dec(_class = /*#__PURE__*/function (_WinBase) {
        _inheritsLoose(TestLogView, _WinBase);
        function TestLogView() {
          var _this;
          _this = _WinBase.call(this) || this;
          _this._isInitNode = false;
          //
          _this.logDatas = [];
          //
          _this._rootNode = void 0;
          _this._logList = void 0;
          _this._logCell = void 0;
          _this._logTableView = void 0;
          _this.showType = WIN_TYPE.HIDDEN_POP;
          _this.maskType = WIN_MASK_TYPE.DARK_BLANK_CLOSE;
          _this._listeners = [];
          return _this;
        }
        var _proto = TestLogView.prototype;
        _proto.onLoad = function onLoad() {
          _WinBase.prototype.onLoad.call(this);
          this._initNode();
          this._initEvent();
        };
        _proto._initNode = function _initNode() {
          if (this._isInitNode) return;
          this._isInitNode = true;
          this._initUI();
        };
        _proto._initUI = function _initUI() {
          this._rootNode = this.node.getChildByName("root");
          this._logList = this._rootNode.getChildByName("LogList");
          this._logCell = this._logList.getChildByPath("view/content/itemCell");
          this._logCell.active = false;
          this._logTableView = Utils.checkComponent(this._logList, TableView);
          this._logTableView.cellItem = this._logCell;
        };
        _proto._initEvent = function _initEvent() {};
        _proto.initParam = function initParam(params) {
          this._initNode();
          this.bindDataToUI();
          this.bindDataToView();
        };
        _proto.bindDataToUI = function bindDataToUI() {};
        _proto.bindDataToView = function bindDataToView() {
          var _this2 = this;
          this.logDatas = LogMgr.getLocalLogs();
          this._logTableView.cellCount = this.logDatas.length;
          this._logTableView.cellInterval = 2;
          this._logTableView.setExtraDistance(0, 0);
          this._logTableView.setCellLoadCallback(function (index, cell, reuse) {
            if (!cell) return;
            _this2.refreshLogCell(index, cell);
          });
          this._logTableView.reloadData();
          this._logTableView.jumpToLast();
        };
        _proto.refreshLogCell = function refreshLogCell(index, cell) {
          if (!cell || !isValid(cell)) return;
          cell.active = true;
          var data = this.logDatas[index];
          if (!data) return;
          var bg = cell.getChildByName("bg");
          var label = cell.getChildByName("Label");
          var btn = cell.getChildByName("btn");
          //bg.active = (index % 2 == 0);
          I18n.setLabelText(label, data);
          AddClick(btn, function () {
            NativeUtil.copyTextToClipboard(data);
          });
        };
        return TestLogView;
      }(WinBase)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TestSpine.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AssetUtil.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, screen, view, ResolutionPolicy, sp, Toggle, Label, Button, Sprite, Color, EditBox, instantiate, Component, AssetUtil;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      screen = module.screen;
      view = module.view;
      ResolutionPolicy = module.ResolutionPolicy;
      sp = module.sp;
      Toggle = module.Toggle;
      Label = module.Label;
      Button = module.Button;
      Sprite = module.Sprite;
      Color = module.Color;
      EditBox = module.EditBox;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      AssetUtil = module.AssetUtil;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "4acbcMts9xIB7t0VnwwUDKJ", "TestSpine", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TestSpine = exports('TestSpine', (_dec = ccclass('TestSpine'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TestSpine, _Component);
        function TestSpine() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.editBox = void 0;
          _this.testSpineNode = void 0;
          _this.spine = void 0;
          _this.actionsNode = void 0;
          _this.actionTempNode = void 0;
          _this.eventLabel = void 0;
          _this.loop = true;
          _this.actionBtnNodes = [];
          return _this;
        }
        var _proto = TestSpine.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this,
            _this$node$getChildBy,
            _this$node$getChildBy2;
          var scalex = screen.windowSize.width / view.getDesignResolutionSize().width;
          var scaley = screen.windowSize.height / view.getDesignResolutionSize().height;
          if (scalex < scaley) {
            view.setResolutionPolicy(ResolutionPolicy.FIXED_WIDTH);
          } else {
            view.setResolutionPolicy(ResolutionPolicy.FIXED_HEIGHT);
          }

          // 普通的spine测试
          this.testSpineNode = this.node.getChildByName("TestSpineNode");
          this.testSpineNode.active = false;
          this.spine = this.testSpineNode.getChildByName("Spine").getComponent(sp.Skeleton);
          this.actionsNode = this.testSpineNode.getChildByName("actionLayout");
          this.actionTempNode = this.actionsNode.getChildByName("actionBtn");
          this.actionTempNode.active = false;
          this.testSpineNode.getChildByName("Toggle").on(Toggle.EventType.TOGGLE, function () {
            _this2.loop = _this2.testSpineNode.getChildByName("Toggle").getComponent(Toggle).isChecked;
          });
          this.eventLabel = this.testSpineNode.getChildByName("eventLabel").getComponent(Label);

          // 其他
          var isBlack = true;
          (_this$node$getChildBy = this.node.getChildByName("bg")) == null || (_this$node$getChildBy = _this$node$getChildBy.getChildByName("Button")) == null || _this$node$getChildBy.on(Button.EventType.CLICK, function () {
            _this2.node.getChildByName("bg").getComponent(Sprite).color = isBlack ? Color.WHITE : Color.BLACK;
            isBlack = !isBlack;
          });
          (_this$node$getChildBy2 = this.node.getChildByName("bg")) == null || (_this$node$getChildBy2 = _this$node$getChildBy2.getChildByName("Button2")) == null || _this$node$getChildBy2.on(Button.EventType.CLICK, this.onEditEnd, this);
          this.editBox = this.node.getChildByName("EditBox").getComponent(EditBox);
          this.spine.setEventListener(function (trackEntry, e) {
            if (e instanceof sp.spine.Event) {
              _this2.eventLabel.string = e == null ? void 0 : e.data.name;
            }
          });
        };
        _proto.onEditEnd = function onEditEnd() {
          var _this3 = this;
          var name = this.editBox.string;
          this.testSpineNode.active = true;
          this.actionBtnNodes.forEach(function (node) {
            return node.destroy();
          });
          this.actionBtnNodes = [];
          AssetUtil.loadSpineToNode(this.spine.node, name, function () {
            var names = _this3.spine.getAllAnimationNames();
            names.forEach(function (name) {
              var btn = instantiate(_this3.actionTempNode);
              btn.on(Button.EventType.CLICK, function () {
                _this3.eventLabel.string = "";
                _this3.spine.setAnimation(0, name, _this3.loop);
              });
              btn.active = true;
              btn.parent = _this3.actionsNode;
              btn.getChildByName("Label").getComponent(Label).string = name;
              _this3.actionBtnNodes.push(btn);
            });
          });
        };
        return TestSpine;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TimeTypeNode.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Utils.ts', './I18n.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, Utils, I18n;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      I18n = module.I18n;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "ba382EGInlDjZDyyVebbSRQ", "TimeTypeNode", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TimeTypeNode = exports('TimeTypeNode', (_dec = ccclass('TimeTypeNode'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TimeTypeNode, _Component);
        function TimeTypeNode() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._isInitNode = false;
          //DATDA
          _this.limitDay = 0;
          //UI
          _this._typeLimit = void 0;
          _this._labelTypeLimit = void 0;
          _this._typeForever = void 0;
          return _this;
        }
        var _proto = TimeTypeNode.prototype;
        _proto.onLoad = function onLoad() {
          this._initNode();
          this._initEvent();
        };
        _proto._initNode = function _initNode() {
          if (this._isInitNode) return;
          this._isInitNode = true;
          this._initUI();
        };
        _proto._initUI = function _initUI() {
          this._typeLimit = this.node.getChildByName("typeLimit");
          this._labelTypeLimit = this._typeLimit.getChildByName("Label");
          this._typeForever = this.node.getChildByName("typeForever");
        };
        _proto._initEvent = function _initEvent() {};
        _proto.init = function init(params, data) {
          this.initParam(params);
          this.initWithData(data);
        };
        _proto.initParam = function initParam(params) {
          if (!params) return;
        };
        _proto.initWithData = function initWithData(data) {
          this._initNode();
          this.initData(data);
          this.bindDataToUI();
        };
        _proto.initData = function initData(data) {
          var _data$limitDay;
          this.limitDay = (_data$limitDay = data == null ? void 0 : data.limitDay) != null ? _data$limitDay : 0;
        };
        _proto.bindDataToUI = function bindDataToUI() {
          var isLimit = this.limitDay > 0;
          Utils.setActive(this._typeLimit, isLimit);
          Utils.setActive(this._typeForever, !isLimit);
          if (isLimit) {
            I18n.setLabelText(this._labelTypeLimit, "\u9650\u65F6" + this.limitDay + "\u5929");
          }
        };
        return TimeTypeNode;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TouchHook.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, _createClass, _inheritsLoose, cclegacy, _decorator, Button, Node, isValid, EditBox, Slider, ScrollView, RichText, Component;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Node = module.Node;
      isValid = module.isValid;
      EditBox = module.EditBox;
      Slider = module.Slider;
      ScrollView = module.ScrollView;
      RichText = module.RichText;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class2;
      cclegacy._RF.push({}, "088b7o3Qe5Kupd4VVu1sr0z", "TouchHook", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TOUCH_EVENT_TYPES = exports('TOUCH_EVENT_TYPES', [Button.EventType.CLICK, Node.EventType.TOUCH_END]);
      var GetTouchCallInfo = exports('GetTouchCallInfo', function GetTouchCallInfo(node, type, useCapture) {
        if (useCapture === void 0) {
          useCapture = false;
        }
        if (!node || !isValid(node)) return null;
        if (!type) return null;
        //if (!TOUCH_EVENT_TYPES.includes(type)) return null;
        var eventProcessor = node.eventProcessor;
        if (!eventProcessor) return null;
        var target = useCapture ? eventProcessor.capturingTarget : eventProcessor.bubblingTarget;
        if (!target) return null;
        var callTable = target._callbackTable;
        if (!callTable) return null;
        var list = callTable[type];
        if (!list) return null;
        var infos = list.callbackInfos;
        if (!infos || !Array.isArray(infos)) return null;
        for (var _iterator = _createForOfIteratorHelperLoose(infos), _step; !(_step = _iterator()).done;) {
          var info = _step.value;
          if (!info) continue;
          var _target = info.target;
          var _callback = info.callback;
          if (!_callback) continue;
          var _isCCComp = false;
          _isCCComp = _isCCComp || _target && _target instanceof EditBox;
          _isCCComp = _isCCComp || _target && _target instanceof Slider;
          _isCCComp = _isCCComp || _target && _target instanceof ScrollView;
          _isCCComp = _isCCComp || _target && _target instanceof Button;
          _isCCComp = _isCCComp || _target && _target instanceof RichText;
          if (_isCCComp) continue;
          return {
            callback: _callback,
            target: _target
          };
        }
        return null;
      });
      var TouchCallInfos = exports('TouchCallInfos', /*#__PURE__*/function () {
        function TouchCallInfos(_capture) {
          this._isCapture = void 0;
          this._callInfoDict = new Map();
          this._isCapture = _capture;
        }
        _createClass(TouchCallInfos, [{
          key: "isCapture",
          get: function get() {
            return this._isCapture;
          }
        }, {
          key: "callInfoDict",
          get: function get() {
            return this._callInfoDict;
          }
        }]);
        return TouchCallInfos;
      }());
      var TouchHook = exports('TouchHook', (_dec = ccclass('TouchHook'), _dec(_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TouchHook, _Component);
        function TouchHook() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._bubblingCallInfos = new TouchCallInfos(false);
          _this._captureCallInfos = new TouchCallInfos(true);
          return _this;
        }
        var _proto = TouchHook.prototype;
        _proto.setHook = function setHook(hookFunc) {
          this._setHookForCapture(hookFunc, false);
          this._setHookForCapture(hookFunc, true);
        };
        _proto.revertHook = function revertHook() {
          this._revertHookForCapture(false);
          this._revertHookForCapture(true);
        };
        _proto.delayRevertHook = function delayRevertHook(delay) {
          this.unschedule(this.revertHook);
          this.scheduleOnce(this.revertHook, delay != null ? delay : 0);
        };
        _proto._setHookForCapture = function _setHookForCapture(hookFunc, capture) {
          var _this2 = this;
          if (!hookFunc) return;
          var infos = capture ? this._captureCallInfos : this._bubblingCallInfos;
          var _loop = function _loop() {
              var eventType = _TOUCH_EVENT_TYPES[_i];
              var _componCallInfo = infos.callInfoDict.get(eventType);
              var _engineCallInfo = GetTouchCallInfo(_this2.node, eventType, infos.isCapture);
              if (!_engineCallInfo) {
                _componCallInfo = null;
                infos.callInfoDict["delete"](eventType);
                return 0; // continue
              }

              if (_engineCallInfo.target === _this2 && !_componCallInfo) {
                return 0; // continue
              }

              _this2.node.off(eventType, _engineCallInfo.callback, _engineCallInfo.target, infos.isCapture);
              if (_engineCallInfo.target !== _this2) {
                _componCallInfo = _engineCallInfo;
                infos.callInfoDict.set(eventType, _componCallInfo);
              }
              if (_componCallInfo && _componCallInfo.target !== _this2) {
                var _callback = _componCallInfo.callback;
                var _target = _componCallInfo.target;
                var newCall = function newCall() {
                  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                  }
                  if (_target) {
                    _callback.call.apply(_callback, [_target].concat(args));
                  } else {
                    _callback.apply(void 0, args);
                  }
                  hookFunc && hookFunc();
                };
                _this2.node.on(eventType, newCall, _this2, infos.isCapture);
              }
            },
            _ret;
          for (var _i = 0, _TOUCH_EVENT_TYPES = TOUCH_EVENT_TYPES; _i < _TOUCH_EVENT_TYPES.length; _i++) {
            _ret = _loop();
            if (_ret === 0) continue;
          }
        };
        _proto._revertHookForCapture = function _revertHookForCapture(capture) {
          var infos = capture ? this._captureCallInfos : this._bubblingCallInfos;
          for (var _i2 = 0, _TOUCH_EVENT_TYPES2 = TOUCH_EVENT_TYPES; _i2 < _TOUCH_EVENT_TYPES2.length; _i2++) {
            var eventType = _TOUCH_EVENT_TYPES2[_i2];
            var _componCallInfo = infos.callInfoDict.get(eventType);
            var _engineCallInfo = GetTouchCallInfo(this.node, eventType, infos.isCapture);
            if (_engineCallInfo && _engineCallInfo.target === this && _componCallInfo) {
              this.node.off(eventType, _engineCallInfo.callback, _engineCallInfo.target, infos.isCapture);
              this.node.on(eventType, _componCallInfo.callback, _componCallInfo.target, infos.isCapture);
            }
            _componCallInfo = null;
            infos.callInfoDict["delete"](eventType);
          }
        };
        return TouchHook;
      }(Component)) || _class2));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TransView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Utils.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, UIOpacity, Tween, isValid, tween, Component, Utils;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UIOpacity = module.UIOpacity;
      Tween = module.Tween;
      isValid = module.isValid;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      Utils = module.Utils;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "28a03kOkVJPHqdbM7hakbHn", "TransView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TransView = exports('TransView', (_dec = ccclass('TransView'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TransView, _Component);
        function TransView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._opacityComp = void 0;
          _this._inited = false;
          return _this;
        }
        var _proto = TransView.prototype;
        _proto.onLoad = function onLoad() {
          this._init();
        };
        _proto._init = function _init() {
          if (this._inited) return;
          this._inited = true;
          this._opacityComp = Utils.checkComponent(this.node, UIOpacity);
        };
        _proto.showFadeAction = function showFadeAction(inNode, outNode, finallyCb, duration) {
          var _this2 = this;
          if (duration === void 0) {
            duration = 0.5;
          }
          this._init();
          Tween.stopAllByTarget(this._opacityComp);
          this._opacityComp.opacity = 0;
          if (inNode && isValid(inNode)) {
            inNode.active = false;
          }
          if (outNode && isValid(outNode)) {
            outNode.active = true;
          }
          this.node.active = true;
          tween(this._opacityComp).to(duration * 0.5, {
            opacity: 255
          }).call(function () {
            if (inNode && isValid(inNode)) {
              inNode.active = true;
            }
            if (outNode && isValid(outNode)) {
              outNode.active = false;
            }
          }).to(duration * 0.5, {
            opacity: 0
          }).call(function () {
            finallyCb && finallyCb();
            _this2.node.active = false;
          }).start();
        };
        return TransView;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIConstants.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "79317k0indIBZdDNBO3ssra", "UIConstants", undefined);
      var CornerType = exports('CornerType', /*#__PURE__*/function (CornerType) {
        CornerType[CornerType["TL"] = 0] = "TL";
        CornerType[CornerType["TC"] = 1] = "TC";
        CornerType[CornerType["TR"] = 2] = "TR";
        CornerType[CornerType["CL"] = 3] = "CL";
        CornerType[CornerType["CC"] = 4] = "CC";
        CornerType[CornerType["CR"] = 5] = "CR";
        CornerType[CornerType["BL"] = 6] = "BL";
        CornerType[CornerType["BC"] = 7] = "BC";
        CornerType[CornerType["BR"] = 8] = "BR";
        return CornerType;
      }({}));
      var IsHideUiOnHttpRequesting = exports('IsHideUiOnHttpRequesting', false);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UITableOption.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Utils.ts', './AudioConfig.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, SpriteFrame, Button, Sprite, Component, Utils, AddClick, handler, AudioConfig;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Button = module.Button;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      Utils = module.Utils;
      AddClick = module.AddClick;
      handler = module.handler;
    }, function (module) {
      AudioConfig = module.AudioConfig;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "38daan5OE1EZbeVmswwT1M9", "UITableOption", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UITableOption = exports('UITableOption', (_dec = ccclass('UITableOption'), _dec2 = property({
        type: SpriteFrame,
        visible: true
      }), _dec3 = property({
        type: SpriteFrame,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UITableOption, _Component);
        function UITableOption() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_normalFrame", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_highlightFrame", _descriptor2, _assertThisInitialized(_this));
          // 标签列表
          _this._tableOptions = [];
          // 标签对应的类型列表
          _this._tableOptionTypes = [];
          // 标签是否可用列表
          _this._tableOptionsEnable = [];
          // 点击标签的回调
          _this._tableOptionsCallBack = void 0;
          // 正在使用的标签
          _this._usingIndex = 0;
          return _this;
        }
        var _proto = UITableOption.prototype;
        _proto.onLoad = function onLoad() {
          var _btns$0$node$getCompo;
          var _btns = this.node.getComponentsInChildren(Button);
          if (this._normalFrame == null) this._normalFrame = (_btns$0$node$getCompo = _btns[0].node.getComponent(Sprite)) == null ? void 0 : _btns$0$node$getCompo.spriteFrame;
          if (this._highlightFrame == null) this._highlightFrame = this._normalFrame;
        };
        _proto.start = function start() {};
        _proto.reset = function reset() {
          this._tableOptions = [];
          this._tableOptionTypes = [];
          this._tableOptionsEnable = [];
          this._tableOptionsCallBack = undefined;
          this._usingIndex = 0;
        };
        _proto.createOptionsWithTable = function createOptionsWithTable(options) {
          this._tableOptions = options;
          for (var index = 0; index < this._tableOptions.length; index++) {
            var item = this._tableOptions[index];
            Utils.setCustomProperty(item.node, "tabIdx", index);
            AddClick(item.node, handler(this, this._optionsHandler), AudioConfig.COMMON_EFF.CLICK_BTN);
            item.zoomScale = 0.99;
            this._tableOptionsEnable.push(true);
          }
          this.setSelectedIndex(this._usingIndex);
        }

        // 标签类型列表,应与标签列表大小一样
        ;

        _proto.setOptionsTypes = function setOptionsTypes(_types) {
          this._tableOptionTypes = _types;
        }

        // 切换页签(按页签类型)
        ;

        _proto.setSelectedType = function setSelectedType(_type) {
          var idx = this._tableOptionTypes.indexOf(_type);
          if (idx === -1) return;
          this.setSelectedIndex(idx);
        }

        // 切换页签
        ;

        _proto.setSelectedIndex = function setSelectedIndex(idx) {
          if (!this._tableOptionsEnable[idx]) {
            return;
          }
          this._usingIndex = idx;
          this.reloadData();
        }

        // 添加点击时的回调函数
        ;

        _proto.addSelectCallBack = function addSelectCallBack(cb) {
          this._tableOptionsCallBack = cb;
        };
        _proto.reloadData = function reloadData() {
          if (this._usingIndex == -1 || !this._tableOptionsEnable[this._usingIndex]) {
            this._usingIndex = this._getUseableIndex();
          }
          if (this._usingIndex == -1) return;
          this._refreshOptions();
          this._forceToCallBack();
        }

        /**获取可用的标签 */;
        _proto._getUseableIndex = function _getUseableIndex() {
          var idx = 0;
          for (var _iterator = _createForOfIteratorHelperLoose(this._tableOptionsEnable), _step; !(_step = _iterator()).done;) {
            var enable = _step.value;
            if (enable) return idx;
            idx++;
          }
          return -1;
        };
        _proto._refreshOptions = function _refreshOptions() {
          for (var _idx = 0; _idx < this._tableOptions.length; _idx++) {
            var item = this._tableOptions[_idx];
            if (_idx !== this._usingIndex) {
              item.node.getComponent(Sprite).spriteFrame = this._normalFrame;
            } else if (!this._tableOptionsEnable[_idx]) {
              item.node.getComponent(Sprite).spriteFrame = this._normalFrame;
            } else {
              item.node.getComponent(Sprite).spriteFrame = this._highlightFrame;
            }
          }
        };
        _proto._forceToCallBack = function _forceToCallBack() {
          var _type = this._tableOptionTypes[this._usingIndex];
          if (_type === undefined) {
            _type = -1;
          }
          this._tableOptionsCallBack && this._tableOptionsCallBack(this._usingIndex, _type);
        };
        _proto._optionsHandler = function _optionsHandler(node) {
          var tag = Utils.getCustomProperty(node, "tabIdx");
          if (!this._tableOptionsEnable[tag]) return;
          if (this._usingIndex == tag) return;
          this.setSelectedIndex(tag);
        };
        return UITableOption;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_normalFrame", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_highlightFrame", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './WinPrefabPath.ts', './WinMgr.ts', './Utils.ts', './SpineComp.ts', './AssetUtil.ts', './LogMgr.ts', './NativeUtil.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, misc, Node, Sprite, color, builtinResMgr, SpriteFrame, isValid, Vec3, size, view, v3, Tween, tween, WIN_NAME, WinMgr, Utils, SpineComp, AssetUtil, LogMgr, NativeUtil;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      misc = module.misc;
      Node = module.Node;
      Sprite = module.Sprite;
      color = module.color;
      builtinResMgr = module.builtinResMgr;
      SpriteFrame = module.SpriteFrame;
      isValid = module.isValid;
      Vec3 = module.Vec3;
      size = module.size;
      view = module.view;
      v3 = module.v3;
      Tween = module.Tween;
      tween = module.tween;
    }, function (module) {
      WIN_NAME = module.WIN_NAME;
    }, function (module) {
      WinMgr = module.WinMgr;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      SpineComp = module.SpineComp;
    }, function (module) {
      AssetUtil = module.AssetUtil;
    }, function (module) {
      LogMgr = module.LogMgr;
    }, function (module) {
      NativeUtil = module.NativeUtil;
    }],
    execute: function () {
      cclegacy._RF.push({}, "47527LDArlIvJJhPvRfxVaO", "UIUtils", undefined);
      var TWEEN_TAG_VERTICAL_FLOAT_ACTION = 1001;
      var TWEEN_TAG_ZOOM_IN_OUT_ACTION = 1002;
      var UIUtils = exports('UIUtils', /*#__PURE__*/function () {
        function UIUtils() {}
        UIUtils.showPopUpWin = function showPopUpWin(info) {
          WinMgr.instance.close(WIN_NAME.POPUP_WIN, true);
          WinMgr.instance.open(WIN_NAME.POPUP_WIN, undefined, info);
        };
        UIUtils.showConfirmToEndGame = function showConfirmToEndGame(msg) {
          this.showPopUpWin({
            content: msg,
            isShowClose: false,
            isBlankClose: false,
            isShowCancel: false,
            confirmCallback: function confirmCallback() {
              NativeUtil.closeGame();
            }
          });
        };
        UIUtils.showConfirmToCloseApp = function showConfirmToCloseApp() {
          UIUtils.showPopUpWin({
            content: "确认退出游戏？",
            isShowCancel: true,
            isShowClose: true,
            isBlankClose: false,
            confirmCallback: function confirmCallback() {
              NativeUtil.closeGame();
            }
          });
        };
        UIUtils.showComDialogView = function showComDialogView(info) {
          WinMgr.instance.close(WIN_NAME.COM_DIALOG_VIEW, true);
          WinMgr.instance.open(WIN_NAME.COM_DIALOG_VIEW, undefined, info);
        };
        UIUtils.showWebView = function showWebView(url) {
          WinMgr.instance.close(WIN_NAME.WEB_VIEW_LAYER, true);
          WinMgr.instance.open(WIN_NAME.WEB_VIEW_LAYER, undefined, {
            url: url
          });
        };
        UIUtils.showHelp = function showHelp(content) {
          WinMgr.instance.close(WIN_NAME.PROMPT_WIN, true);
          WinMgr.instance.open(WIN_NAME.PROMPT_WIN, undefined, {
            content: content
          });
        };
        UIUtils.showInputWin = function showInputWin(cb) {
          WinMgr.instance.close(WIN_NAME.INPUT_WIN, true);
          WinMgr.instance.open(WIN_NAME.INPUT_WIN, undefined, {
            inputCallback: cb
          });
        };
        UIUtils.checkOperateInterval = function checkOperateInterval(operateKey, intervalMs) {
          var _this$_operateInterva;
          var curMs = new Date().getTime();
          var lastMs = (_this$_operateInterva = this._operateIntervals.get(operateKey)) != null ? _this$_operateInterva : 0;
          var pastMs = curMs - lastMs;
          if (pastMs >= intervalMs) {
            this._operateIntervals.set(operateKey, curMs);
            return true;
          }
          LogMgr.log("not reach operate interval for: " + operateKey + ", past millisecond: " + pastMs);
          return false;
        };
        UIUtils.setLastOperateWithNow = function setLastOperateWithNow(operateKey) {
          var curMs = new Date().getTime();
          this._operateIntervals.set(operateKey, curMs);
        };
        UIUtils.clearOperateInterval = function clearOperateInterval(operateKey) {
          this._operateIntervals["delete"](operateKey);
        };
        UIUtils.clearMultOperateInterval = function clearMultOperateInterval(operateKeys) {
          for (var _iterator = _createForOfIteratorHelperLoose(operateKeys), _step; !(_step = _iterator()).done;) {
            var _key = _step.value;
            this._operateIntervals["delete"](_key);
          }
        };
        UIUtils.clearAllOperateInterval = function clearAllOperateInterval() {
          this._operateIntervals.clear();
        };
        UIUtils.recordTimeBegin = function recordTimeBegin(key) {
          var curMs = new Date().getTime();
          this._recordedTimes.set(key, curMs);
        };
        UIUtils.recordTimeEnd = function recordTimeEnd(key) {
          var curMs = new Date().getTime();
          var beginMs = this._recordedTimes.get(key);
          this._recordedTimes.set(key, curMs);
          var costMs = beginMs != undefined ? curMs - beginMs : 0;
          LogMgr.log("operate " + key + " cost millisecond: " + costMs);
        }

        // opacity: [0-1]
        ;

        UIUtils.createBlackPanel = function createBlackPanel(opacity) {
          opacity = misc.clampf(opacity, 0, 1);
          var _node = new Node();
          var _sprite = _node.addComponent(Sprite);
          _sprite.type = Sprite.Type.SIMPLE;
          _sprite.sizeMode = Sprite.SizeMode.CUSTOM;
          _sprite.color = color(0, 0, 0, 255 * opacity);
          var texture = builtinResMgr.get("black-texture");
          if (texture) {
            var spriteFrame = new SpriteFrame();
            spriteFrame.texture = texture;
            spriteFrame.packable = false;
            _sprite.spriteFrame = spriteFrame;
          }
          return _node;
        };
        UIUtils.playSpineAnimaForLang = function playSpineAnimaForLang(parent, spineFile, animaName, endFunc, black) {
          this.playSpineAnima(parent, spineFile, animaName, endFunc, black, true);
        };
        UIUtils.playSpineAnima = function playSpineAnima(parent, spineFile, animaName, endFunc, black, isLang) {
          if (isLang === void 0) {
            isLang = false;
          }
          if (!isValid(parent)) return;
          var animNode = new Node();
          animNode.parent = parent;
          animNode.setPosition(Vec3.ZERO);
          animNode.setSiblingIndex(parent.children.length);
          if (black != undefined && black > 0) {
            var blackPanel = this.createBlackPanel(black);
            blackPanel.parent = animNode;
            blackPanel.setPosition(Vec3.ZERO);
            blackPanel.setSiblingIndex(0);
            Utils.setContentSize(blackPanel, size(view.getVisibleSize()));
          }
          var spineNode = new Node();
          spineNode.parent = animNode;
          spineNode.setPosition(Vec3.ZERO);
          spineNode.active = true;
          spineNode.setSiblingIndex(1);
          var spineComp = Utils.checkComponent(spineNode, SpineComp);
          spineComp.setAutoRemove(true, function () {
            if (isValid(animNode)) {
              animNode.destroy();
            }
            endFunc && endFunc();
          });
          AssetUtil.loadSpineToNode(spineNode, spineFile, undefined, animaName, false, undefined, isLang);
        };
        UIUtils.playVerticalFloatAction = function playVerticalFloatAction(node, time, h) {
          if (time === void 0) {
            time = 0.3;
          }
          if (h === void 0) {
            h = 5;
          }
          if (!node || !isValid(node)) return;
          var savePos = Utils.getCustomProperty(node, "savePos");
          if (savePos === undefined) {
            savePos = node.getPosition();
            Utils.setCustomProperty(node, "savePos", savePos);
          }
          node.setPosition(v3(savePos.x, 0, 0));
          Tween.stopAllByTag(TWEEN_TAG_VERTICAL_FLOAT_ACTION, node);
          tween(node).repeatForever(tween(node).sequence(tween(node).by(time, {
            position: v3(0, h, 0)
          }), tween(node).by(time, {
            position: v3(0, -h, 0)
          }))).tag(TWEEN_TAG_VERTICAL_FLOAT_ACTION).start();
        };
        UIUtils.playZoomInOutAction = function playZoomInOutAction(node, time, scale, repeat) {
          if (time === void 0) {
            time = 0.3;
          }
          if (scale === void 0) {
            scale = 0.2;
          }
          if (repeat === void 0) {
            repeat = true;
          }
          if (!node || !isValid(node)) return;
          var saveScale = Utils.getCustomProperty(node, "saveScale");
          if (saveScale === undefined) {
            saveScale = node.getScale();
            Utils.setCustomProperty(node, "saveScale", saveScale);
          }
          node.setScale(v3(saveScale.x, saveScale.y, saveScale.z));
          Tween.stopAllByTag(TWEEN_TAG_ZOOM_IN_OUT_ACTION, node);
          if (repeat) {
            tween(node).repeatForever(tween(node).sequence(tween(node).to(time * 0.5, {
              scale: v3(saveScale.x * (1 + scale), saveScale.y * (1 + scale), saveScale.z * (1 + scale))
            }), tween(node).to(time * 0.5, {
              scale: v3(saveScale.x, saveScale.y, saveScale.z)
            }))).tag(TWEEN_TAG_ZOOM_IN_OUT_ACTION).start();
          } else {
            tween(node).sequence(tween(node).to(time * 0.5, {
              scale: v3(saveScale.x * (1 + scale), saveScale.y * (1 + scale), saveScale.z * (1 + scale))
            }), tween(node).to(time * 0.5, {
              scale: v3(saveScale.x, saveScale.y, saveScale.z)
            })).tag(TWEEN_TAG_ZOOM_IN_OUT_ACTION).start();
          }
        };
        UIUtils.cutString = function cutString(str, maxLen) {
          if (maxLen === void 0) {
            maxLen = 8;
          }
          var result = "";
          if (str === undefined) return result;
          var arr = Array.from(str);
          for (var _i = 0, _arr = arr; _i < _arr.length; _i++) {
            var s = _arr[_i];
            if (maxLen <= 0) {
              result += "...";
              break;
            }
            result += s;
            --maxLen;
          }
          return result;
        };
        UIUtils.cutNickName = function cutNickName(str, maxLen) {
          if (maxLen === void 0) {
            maxLen = 8;
          }
          return this.cutString(str, maxLen);
        };
        UIUtils.gotoMain = function gotoMain(cb) {
          WinMgr.instance.open(WIN_NAME.MAIN_VIEW, cb);
        };
        return UIUtils;
      }());
      UIUtils._operateIntervals = new Map();
      UIUtils._recordedTimes = new Map();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Utils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CustomPropertyComp.ts', './ArrayUtil.ts', './LocalStorage.ts', './StorageConst.ts', './RandomUtil.ts', './AudioMgr.ts', './StringUtil.ts', './UIConstants.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, Button, cclegacy, isValid, v3, Node, UITransform, v2, Vec3, size, Rect, Label, Layout, Vec2, Size, HorizontalTextAlignment, sys, Widget, Sprite, CustomPropertyComp, ArrayUtil, LocalStorage, StorageConst, RandomUtil, AudioMgr, StringUtil, CornerType;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      Button = module.Button;
      cclegacy = module.cclegacy;
      isValid = module.isValid;
      v3 = module.v3;
      Node = module.Node;
      UITransform = module.UITransform;
      v2 = module.v2;
      Vec3 = module.Vec3;
      size = module.size;
      Rect = module.Rect;
      Label = module.Label;
      Layout = module.Layout;
      Vec2 = module.Vec2;
      Size = module.Size;
      HorizontalTextAlignment = module.HorizontalTextAlignment;
      sys = module.sys;
      Widget = module.Widget;
      Sprite = module.Sprite;
    }, function (module) {
      CustomPropertyComp = module.CustomPropertyComp;
    }, function (module) {
      ArrayUtil = module.ArrayUtil;
    }, function (module) {
      LocalStorage = module.LocalStorage;
    }, function (module) {
      StorageConst = module.StorageConst;
    }, function (module) {
      RandomUtil = module.RandomUtil;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      StringUtil = module.StringUtil;
    }, function (module) {
      CornerType = module.CornerType;
    }],
    execute: function () {
      cclegacy._RF.push({}, "827ecWl8D1GqIa7F6MrHH7e", "Utils", undefined);
      var handler = exports('handler', function handler(targt, method) {
        return function () {
          if (isValid(targt)) {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return method.call.apply(method, [targt].concat(args));
          }
        };
      });

      // target 如果是字符串则认为是一个音效路径噢
      var AddClick = exports('AddClick', function AddClick(node, callback, target, audio) {
        if (audio === void 0) {
          audio = "";
        }
        node.off(Button.EventType.CLICK);
        var btn = node.getComponent(Button);
        btn.transition = Button.Transition.SCALE;
        btn.zoomScale = 0.95;
        btn.duration = 0.05;
        var func = function func() {
          if (typeof target == "string") {
            // 认为是一个音效路径
            audio = target;
          }
          audio.length > 0 && AudioMgr.instance.playOneShot(audio);
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          if (target != undefined && target != null && typeof target != "string") {
            if (isValid(target)) {
              return callback.call.apply(callback, [target].concat(args));
            }
          } else {
            callback.call.apply(callback, [null].concat(args));
          }
        };
        return node.on(Button.EventType.CLICK, func);
      });
      var AddBtnClick = exports('AddBtnClick', function AddBtnClick(node, callback, target, audio) {
        if (audio === void 0) {
          audio = "";
        }
        node.off(Button.EventType.CLICK);
        var func = function func() {
          if (typeof target == "string") {
            // 认为是一个音效路径
            audio = target;
          }
          audio.length > 0 && AudioMgr.instance.playOneShot(audio);
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          if (target != undefined && target != null && typeof target != "string") {
            if (isValid(target)) {
              return callback.call.apply(callback, [target].concat(args));
            }
          } else {
            callback.call.apply(callback, [null].concat(args));
          }
        };
        return node.on(Button.EventType.CLICK, func);
      });
      var Utils = exports('Utils', {
        /**
         * 改变一个节点的父节点
         * @param node 
         * @param newParent 
         */
        changeParent: function changeParent(node, newParent, zIndex) {
          if (node.parent) {
            node.setPosition(this.getPositionInNode(node, newParent));
          }
          node.parent = newParent;
          // 默认放最后
          node.setSiblingIndex(zIndex != null ? zIndex : newParent.children.length - 1);
        },
        /**
         * 获取一个节点在另外一个节点中的位置
         * @param node 
         * @param parent 
         * @returns 
         */
        getPositionInNode: function getPositionInNode(node, parent) {
          var _parent$getComponent$, _parent$getComponent;
          var worldPos = v3(0);
          if (node instanceof Node) {
            var _node$getComponent$co, _node$getComponent;
            worldPos = (_node$getComponent$co = (_node$getComponent = node.getComponent(UITransform)) == null ? void 0 : _node$getComponent.convertToWorldSpaceAR(v3(0))) != null ? _node$getComponent$co : v3(0);
          } else {
            worldPos = node;
          }
          var pos = (_parent$getComponent$ = (_parent$getComponent = parent.getComponent(UITransform)) == null ? void 0 : _parent$getComponent.convertToNodeSpaceAR(worldPos)) != null ? _parent$getComponent$ : v3(0);
          return pos;
        },
        // 获得节点屏幕坐标
        getWorldPosition: function getWorldPosition(node) {
          var _node$getComponent$co2, _node$getComponent2;
          if (!node) return v3(0);
          return (_node$getComponent$co2 = (_node$getComponent2 = node.getComponent(UITransform)) == null ? void 0 : _node$getComponent2.convertToWorldSpaceAR(v3(0))) != null ? _node$getComponent$co2 : v3(0);
        },
        // 获得节点内坐标(几个特殊点)
        getNodeCornerPosition: function getNodeCornerPosition(node, corner) {
          var _corner2offset, _corner2offset$corner;
          var corner2offset = (_corner2offset = {}, _corner2offset[CornerType.TL] = v2(-0.5, 0.5), _corner2offset[CornerType.TC] = v2(0, 0.5), _corner2offset[CornerType.TR] = v2(0.5, 0.5), _corner2offset[CornerType.CL] = v2(-0.5, 0), _corner2offset[CornerType.CC] = v2(0, 0), _corner2offset[CornerType.CR] = v2(0.5, 0), _corner2offset[CornerType.BL] = v2(-0.5, -0.5), _corner2offset[CornerType.BC] = v2(0, -0.5), _corner2offset[CornerType.BR] = v2(0.5, -0.5), _corner2offset);
          if (!node) return Vec3.ZERO;
          var uiTransform = node.getComponent(UITransform);
          if (!uiTransform) return Vec3.ZERO;
          var _size = size(uiTransform.contentSize);
          var _anchor = v2(uiTransform.anchorPoint);
          var _center = v2(0.5 - _anchor.x, 0.5 - _anchor.y);
          var _offset = (_corner2offset$corner = corner2offset[corner]) != null ? _corner2offset$corner : v2(0, 0);
          var _pa = v2(_center.x + _offset.x, _center.y + _offset.y);
          var _nodePos = v3(_size.width * _pa.x, _size.height * _pa.y, 0);
          return _nodePos;
        },
        // 获得节点屏幕坐标(几个特殊点)
        getWorldPositionForCorner: function getWorldPositionForCorner(node, corner) {
          if (!node) return Vec3.ZERO;
          var uiTransform = node.getComponent(UITransform);
          if (!uiTransform) return Vec3.ZERO;
          var _nodePos = this.getNodeCornerPosition(node, corner);
          return uiTransform.convertToWorldSpaceAR(_nodePos);
        },
        // 获得节点在目标节点里的位置
        getInNodePositionForCorner: function getInNodePositionForCorner(node, parent, corner) {
          var worldPos = this.getWorldPositionForCorner(node, corner);
          if (!parent) return Vec3.ZERO;
          var parentTransform = parent.getComponent(UITransform);
          if (!parentTransform) return Vec3.ZERO;
          var pos = parentTransform.convertToNodeSpaceAR(worldPos);
          return pos;
        },
        // 在父节点里的包围盒
        getBoundingBox: function getBoundingBox(node) {
          if (!node) return new Rect();
          var uiTransform = node.getComponent(UITransform);
          if (!uiTransform) return new Rect();
          return uiTransform.getBoundingBox();
        },
        // 在屏幕里的包围盒
        getBoundingBoxToWorld: function getBoundingBoxToWorld(node, recursive) {
          if (!node) return new Rect();
          var uiTransform = node.getComponent(UITransform);
          if (!uiTransform) return new Rect();
          return uiTransform.getBoundingBoxToWorld();
        },
        // 是否点击在节点内
        isTouchInNode: function isTouchInNode(node, event) {
          if (!node || !isValid(node) || !event) return false;
          var uiTransform = node.getComponent(UITransform);
          if (!uiTransform) return false;
          return uiTransform.hitTest(event.getLocation(), event.windowId);
        },
        /**
         * 返回label的真实宽高
         * @param label 节点
         * @returns 
         */
        getLabelRealSize: function getLabelRealSize(label) {
          var _label$getComponent;
          if (!isValid(label)) {
            return size(0, 0);
          }
          //手动更新一下渲染，这样当前帧才能获得当前的label最新的宽高
          label.updateRenderData();
          var realSize = (_label$getComponent = label.getComponent(UITransform)) == null ? void 0 : _label$getComponent.contentSize;
          return realSize;
        },
        //立即刷新Label
        immediatelyUpdateLabel: function immediatelyUpdateLabel(node) {
          if (!isValid(node)) return;
          var label = node.getComponent(Label);
          label == null || label.updateRenderData();
        },
        //立即刷新Layout
        immediatelyUpdateLayout: function immediatelyUpdateLayout(node) {
          if (!isValid(node)) return;
          var layout = node.getComponent(Layout);
          layout == null || layout.updateLayout(true);
        },
        getChildComponent: function getChildComponent(node, path, tp) {
          if (!isValid(node)) return null;
          var child = node.getChildByPath(path);
          if (child === null || !isValid(child)) return null;
          var comp = child.getComponent(tp);
          return comp;
        },
        checkChildComponent: function checkChildComponent(node, path, tp) {
          if (!isValid(node)) return null;
          var child = node.getChildByPath(path);
          if (child === null || !isValid(child)) return null;
          var comp = child.getComponent(tp);
          if (!comp) {
            var visible = child.active;
            child.active = true;
            comp = child.addComponent(tp);
            child.active = visible;
          }
          return comp;
        },
        //检测获取(添加)组件
        checkComponent: function checkComponent(node, tp) {
          var comp = node.getComponent(tp);
          if (!comp) {
            var visible = node.active;
            node.active = true;
            comp = node.addComponent(tp);
            node.active = visible;
          }
          return comp;
        },
        setActive: function setActive(nodeOrComp, b) {
          if (!isValid(nodeOrComp)) return;
          if (nodeOrComp instanceof Node) {
            if (nodeOrComp.active != b) {
              nodeOrComp.active = b;
            }
          } else {
            if (nodeOrComp.node.active != b) {
              nodeOrComp.node.active = b;
            }
          }
        },
        //获取锚点
        getAnchorPoint: function getAnchorPoint(node) {
          if (!isValid(node)) return Vec2.ZERO;
          var uiTransform = node.getComponent(UITransform);
          if (!uiTransform) return Vec2.ZERO;
          return uiTransform.anchorPoint;
        },
        //设置锚点
        setAnchorPoint: function setAnchorPoint(node, anchor) {
          if (!isValid(node)) return;
          var uiTransform = node.getComponent(UITransform);
          if (!uiTransform) return;
          uiTransform.anchorPoint = v2(anchor);
        },
        /**
         * 获取节点的大小
         * @param node 
         * @returns 
         */
        getContentSize: function getContentSize(node) {
          if (!isValid(node)) return Size.ZERO;
          var uiTransform = node.getComponent(UITransform);
          if (!uiTransform) return Size.ZERO;
          return size(uiTransform.contentSize);
        },
        /**
         * 设置节点的大小，获取节点的UITransform组件，设置contentsize属性
         * @param node 节点
         * @param size 大小
         */
        setContentSize: function setContentSize(node, size, height) {
          if (!isValid(node)) {
            return;
          }
          var uiTransform = node.getComponent(UITransform);
          if (!uiTransform) {
            uiTransform = node.addComponent(UITransform);
          }
          if (size instanceof Size) {
            uiTransform.contentSize = size;
          } else {
            uiTransform.width = size;
            if (height) {
              uiTransform.height = height;
            }
          }
        },
        /**设置按钮点击状态 */setTouchEnabled: function setTouchEnabled(node, b) {
          if (!isValid(node)) return;
          if (node instanceof Node) {
            var comp = node.getComponent(Button);
            if (!comp) return;
            comp.interactable = b;
          } else {
            node.interactable = b;
          }
        },
        /**设置label颜色 */setLabelColor: function setLabelColor(node, color, childName) {
          if (!isValid(node)) return;
          var label = node.getComponent(Label);
          if (label) {
            label.color = color;
            return;
          }
          if (childName) {
            var _node$getChildByName;
            label = (_node$getChildByName = node.getChildByName(childName)) == null ? void 0 : _node$getChildByName.getComponent(Label);
          } else {
            label = node.getComponentInChildren(Label);
          }
          if (label) {
            label.color = color;
          }
        },
        // 几个节点居中显示
        setNodesToCenter: function setNodesToCenter(nodes, centerX, spaces) {
          var _spaces;
          spaces = (_spaces = spaces) != null ? _spaces : [5];
          if (typeof spaces == "number") {
            spaces = [spaces];
          }
          // 填充到和nodes的长度一样长-1
          ArrayUtil.fillToLength(spaces, nodes.length - 1, spaces[spaces.length - 1]);
          var widths = [];
          var totalW = 0;
          for (var i = 0; i < nodes.length; ++i) {
            var node = nodes[i];
            if (isValid(node)) {
              var label = node.getComponent(Label);
              // 文字的对齐居中
              if (label) {
                label.updateRenderData();
                label.horizontalAlign = HorizontalTextAlignment.CENTER;
              }
              var uiTrans = node.getComponent(UITransform);
              // 锚点居中
              uiTrans.anchorX = 0.5;
              var w = uiTrans.contentSize.width * Math.abs(node.scale.x);
              widths.push(w);
              totalW += w;
              // 加上间隔宽度
              if (i < nodes.length - 1) {
                totalW += spaces[i];
              }
            }
          }
          var startX = centerX - totalW * 0.5;
          for (var _i = 0; _i < nodes.length; ++_i) {
            var _node2 = nodes[_i];
            if (isValid(_node2)) {
              startX += widths[_i] * 0.5;
              _node2.position = v3(startX, _node2.position.y, _node2.position.z);
              if (_i < nodes.length - 1) {
                startX += widths[_i] * 0.5 + spaces[_i];
              }
            }
          }
          return totalW;
        },
        /**获取节点的自定义属性组件 */getCustomPropertyComp: function getCustomPropertyComp(node) {
          var customPropertyComp = node.getComponent(CustomPropertyComp);
          if (!customPropertyComp) {
            customPropertyComp = node.addComponent(CustomPropertyComp);
          }
          return customPropertyComp;
        },
        /**设置节点的自定义属性 */setCustomProperty: function setCustomProperty(node, key, value) {
          var customComp = this.getCustomPropertyComp(node);
          customComp.setProperty(key, value);
        },
        /**获取节点的自定义属性 */getCustomProperty: function getCustomProperty(node, key) {
          var customComp = this.getCustomPropertyComp(node);
          return customComp.getProperty(key);
        },
        getMachineId: function getMachineId() {
          var id = LocalStorage.get(StorageConst.GameConst.MACHINE_ID);
          if (sys.platform == sys.Platform.IOS) ;else if (sys.platform == sys.Platform.ANDROID) ;else ;
          if (!id) {
            // 随机一个
            var _id = "abcdefghijklmnopqrstuvwxyz";
            _id += _id.toUpperCase();
            var arr = _id.split("");
            RandomUtil.shuffle(arr);
            _id = arr.join("");
            _id = _id.substring(0, RandomUtil.randomInteger(4, 6));
            _id += new Date().getTime();
            id = _id;
            LocalStorage.set(StorageConst.GameConst.MACHINE_ID, String(id));
          }
          return String(id);
        },
        /**
         * 立即刷新widget的一些对齐方式 包括子节点
         * @param node 
         */
        updateWidget: function updateWidget(node) {
          var _this = this;
          var widgetComp = node.getComponent(Widget);
          if (widgetComp) {
            widgetComp.updateAlignment();
            node.children.forEach(function (node) {
              _this.updateWidget(node);
            });
          }
        },
        /**格式化数量显示 */formatNumber: function formatNumber(num) {
          return StringUtil.FormatNumToString(num);
        },
        /**数字带正负符号字符串 */getNumberSymbolString: function getNumberSymbolString(num, format) {
          if (format === void 0) {
            format = false;
          }
          if (num > 0) {
            var sNum = format ? this.formatNumber(num) : String(num);
            return "+" + sNum;
          } else if (num < 0) {
            var _sNum = format ? this.formatNumber(-num) : String(-num);
            return "-" + _sNum;
          } else {
            return String(num);
          }
        },
        getChildsByNames: function getChildsByNames(root, names) {
          var nodes = [];
          if (!isValid(root)) return nodes;
          for (var _iterator = _createForOfIteratorHelperLoose(names), _step; !(_step = _iterator()).done;) {
            var _name = _step.value;
            var _node = root.getChildByName(_name);
            if (_node && isValid(_node)) {
              nodes.push(_node);
            }
          }
          return nodes;
        },
        setGray: function setGray(root, gray) {
          if (!isValid(root)) return;
          var sprite = root.getComponent(Sprite);
          if (sprite) {
            sprite.grayscale = gray;
          }
          var sprites = root.getComponentsInChildren(Sprite);
          if (sprites) {
            for (var _iterator2 = _createForOfIteratorHelperLoose(sprites), _step2; !(_step2 = _iterator2()).done;) {
              var v = _step2.value;
              if (v) {
                v.grayscale = gray;
              }
            }
          }
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UuidUtil.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "20c1cYYhcpDRaN2i2YR0Z2u", "UuidUtil", undefined);
      var SpecialUuid = exports('SpecialUuid', {
        UUID_BEGIN: 10000,
        UUID_NEGATIVE_BEGIN: -10000
      });
      var UuidUtil = exports('UuidUtil', /*#__PURE__*/function () {
        function UuidUtil() {}
        UuidUtil.generateUid = function generateUid() {
          this._uid++;
          return this._uid;
        };
        UuidUtil.generateNegativeUid = function generateNegativeUid() {
          this._negativeUid--;
          return this._negativeUid;
        };
        return UuidUtil;
      }());
      UuidUtil._uid = SpecialUuid.UUID_BEGIN;
      UuidUtil._negativeUid = SpecialUuid.UUID_NEGATIVE_BEGIN;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WaittingView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, UIOpacity, Tween, v3, tween, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UIOpacity = module.UIOpacity;
      Tween = module.Tween;
      v3 = module.v3;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "813c7AN6VJOiK1y4UH+4GsI", "WaittingView", undefined);
      var ccclass = _decorator.ccclass;
      var WAIT_SHOW_TIME = 1.5;
      var WaittingView = exports('WaittingView', (_dec = ccclass('WaittingView'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(WaittingView, _Component);
        function WaittingView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._bg = void 0;
          _this._waittingIcon = void 0;
          _this._opacityComp = void 0;
          return _this;
        }
        var _proto = WaittingView.prototype;
        _proto.onLoad = function onLoad() {
          this._bg = this.node.getChildByName("bg");
          this._waittingIcon = this._bg.getChildByName("waittingIcon");
          this._opacityComp = this._bg.getComponent(UIOpacity);
        };
        _proto.show = function show() {
          var _this2 = this;
          this.unscheduleAllCallbacks();
          this.node.active = true;
          Tween.stopAllByTarget(this._waittingIcon);
          this._waittingIcon.eulerAngles = v3(0, 0, 0);
          tween(this._waittingIcon).repeatForever(tween(this._waittingIcon).by(1.0, {
            eulerAngles: v3(0, 0, 360)
          })).start();
          this._opacityComp.opacity = 0;
          this.scheduleOnce(function () {
            _this2._opacityComp.opacity = 100;
          }, WAIT_SHOW_TIME);
        };
        _proto.hide = function hide() {
          this.unscheduleAllCallbacks();
          Tween.stopAllByTarget(this._waittingIcon);
          this._opacityComp.opacity = 0;
          this.node.active = false;
        };
        return WaittingView;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WeakNetTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AssetUtil.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, BlockInputEvents, UIOpacity, Tween, tween, Component, AssetUtil;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      BlockInputEvents = module.BlockInputEvents;
      UIOpacity = module.UIOpacity;
      Tween = module.Tween;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      AssetUtil = module.AssetUtil;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "65c9b0+i0NFZI20q2yLUQA9", "WeakNetTip", undefined);
      var ccclass = _decorator.ccclass;
      var WeakNetTip = exports('WeakNetTip', (_dec = ccclass('WeakNetTip'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(WeakNetTip, _Component);
        function WeakNetTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._sp = void 0;
          _this._opacityComp = void 0;
          _this._blockInputComp = void 0;
          return _this;
        }
        var _proto = WeakNetTip.prototype;
        _proto.onLoad = function onLoad() {
          this._blockInputComp = this.node.getComponent(BlockInputEvents);
          this._opacityComp = this.node.getChildByName("bg").getComponent(UIOpacity);
          this._sp = AssetUtil.loadSpineToNode(this.node.getChildByName("sp"), "o-no_net", undefined, "a_1");
        };
        _proto.show = function show() {
          this._blockInputComp.enabled = true;
          if (!this.node.active) {
            this.node.active = true;
            Tween.stopAllByTarget(this._opacityComp);
            this._opacityComp.opacity = 0;
            tween(this._opacityComp).to(0.1, {
              opacity: 100
            }).start();
          }
        };
        _proto.hide = function hide() {
          var _this2 = this;
          if (this.node.active) {
            Tween.stopAllByTarget(this._opacityComp);
            tween(this._opacityComp).to(0.1, {
              opacity: 0
            }).call(function () {
              _this2.node.active = false;
            }).start();
          }
        };
        return WeakNetTip;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WebSock.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "44fe58Lp15DZqWRGhPXYHDL", "WebSock", undefined);
      var WebSock = exports('WebSock', /*#__PURE__*/function () {
        function WebSock() {
          this._ws = null;
          // websocket对象
          this.onConnected = null;
          this.onMessage = null;
          this.onError = null;
          this.onClosed = null;
        }
        var _proto = WebSock.prototype;
        _proto.connect = function connect(options) {
          var _this = this;
          if (this._ws) {
            if (this._ws.readyState === WebSocket.CONNECTING) {
              console.log("websocket connecting, wait for a moment...");
              return false;
            }
          }
          var url = options.url;
          console.log("connet websocket use url: " + url);
          // 3.7版本后貌似不用下面这个了
          {
            this._ws = new WebSocket(encodeURI(url));
          }
          this._ws.binaryType = "arraybuffer";
          this._ws.onmessage = function (event) {
            _this.onMessage(event.data);
          };
          this._ws.onopen = function (event) {
            _this.onConnected(event);
          };
          this._ws.onerror = this.onError;
          this._ws.onclose = this.onClosed;
          return true;
        };
        _proto.send = function send(buffer) {
          if (buffer == null) {
            return false;
          }
          if (this._ws.readyState == WebSocket.OPEN) {
            this._ws.send(buffer);
            return true;
          }
          return false;
        };
        _proto.close = function close(code, reason) {
          if (reason === void 0) {
            reason = "";
          }
          console.log("websocket closed ", code);
          if (!this._ws) return;
          if (code) {
            this._ws.close(code, reason);
          } else {
            this._ws.close();
          }
        };
        return WebSock;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WebViewLayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './WinBase.ts', './WinMgr.ts', './Utils.ts', './I18n.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, WebView, WinBase, WIN_TYPE, WIN_MASK_TYPE, Utils, I18n;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      WebView = module.WebView;
    }, function (module) {
      WinBase = module.WinBase;
    }, function (module) {
      WIN_TYPE = module.WIN_TYPE;
      WIN_MASK_TYPE = module.WIN_MASK_TYPE;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      I18n = module.I18n;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "3d99bNqpj1MTaNWB/tFbavg", "WebViewLayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var WebViewLayer = exports('WebViewLayer', (_dec = ccclass('WebViewLayer'), _dec(_class = /*#__PURE__*/function (_WinBase) {
        _inheritsLoose(WebViewLayer, _WinBase);
        function WebViewLayer() {
          var _this;
          _this = _WinBase.call(this) || this;
          _this.root = void 0;
          _this.lb_title = void 0;
          _this.web_view = null;
          _this._isInitNode = false;
          _this._data = void 0;
          _this.showType = WIN_TYPE.HIDDEN_POP;
          _this.maskType = WIN_MASK_TYPE.DARK_BLANK_CLOSE;
          _this._listeners = [];
          return _this;
        }
        var _proto = WebViewLayer.prototype;
        _proto.onLoad = function onLoad() {
          _WinBase.prototype.onLoad.call(this);
          this._initNode();
          this._initEvent();
        };
        _proto._initNode = function _initNode() {
          if (this._isInitNode) return;
          this._isInitNode = true;
          this._initUI();
        };
        _proto._initUI = function _initUI() {
          this.root = this.node.getChildByName("root");
          this.lb_title = this.root.getChildByName("lb_title");
          try {
            this.web_view = Utils.checkComponent(this.root.getChildByName("web_view"), WebView);
          } catch (e) {
            console.log(String(e));
          }
          I18n.setLabelText(this.lb_title, "");
        };
        _proto._initEvent = function _initEvent() {};
        _proto.initParam = function initParam(params) {
          this._data = params;
          this._initNode();
          this.bindDataToUI();
        };
        _proto.bindDataToUI = function bindDataToUI() {
          if (this._data.titleLangId) {
            I18n.setLabelText(this.lb_title, this._data.titleLangId);
          }
          if (this.web_view) {
            this.web_view.url = this._data.url;
          }
        };
        return WebViewLayer;
      }(WinBase)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WinBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventComp.ts', './WinMgr.ts', './LogMgr.ts', './Utils.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, Tween, v3, UIOpacity, tween, easing, isValid, EventComp, WinMgr, WIN_MASK_TYPE, WIN_TYPE, LogMgr, Utils;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Tween = module.Tween;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      easing = module.easing;
      isValid = module.isValid;
    }, function (module) {
      EventComp = module.EventComp;
    }, function (module) {
      WinMgr = module.WinMgr;
      WIN_MASK_TYPE = module.WIN_MASK_TYPE;
      WIN_TYPE = module.WIN_TYPE;
    }, function (module) {
      LogMgr = module.LogMgr;
    }, function (module) {
      Utils = module.Utils;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "970e2D8Of5BYYui5Sf9ZABA", "WinBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var sShowActionTag = 10;
      var EWinActionType = exports('EWinActionType', /*#__PURE__*/function (EWinActionType) {
        EWinActionType[EWinActionType["Direct"] = 0] = "Direct";
        EWinActionType[EWinActionType["Scale"] = 1] = "Scale";
        EWinActionType[EWinActionType["Fade"] = 2] = "Fade";
        return EWinActionType;
      }({}));
      var WinBase = exports('WinBase', ccclass(_class = /*#__PURE__*/function (_EventComp) {
        _inheritsLoose(WinBase, _EventComp);
        function WinBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _EventComp.call.apply(_EventComp, [this].concat(args)) || this;
          _this.maskType = WIN_MASK_TYPE.DARK_BLANK_CLOSE;
          _this._showType = WIN_TYPE.HIDDEN_POP;
          //窗口显示类型
          _this.actionType = EWinActionType.Scale;
          _this.zOrder = void 0;
          return _this;
        }
        var _proto = WinBase.prototype;
        //非弹窗类型界面ZOrder
        _proto.onLoad = function onLoad() {
          _EventComp.prototype.onLoad.call(this);
          LogMgr.logT("LoadWindow", this.node.name);
        };
        _proto.initParam = function initParam(params) {};
        _proto.close = function close() {
          WinMgr.instance.close(this);
        };
        _proto.doShow = function doShow(actionType, cb) {
          var _actionType,
            _this2 = this;
          actionType = (_actionType = actionType) != null ? _actionType : this.actionType;
          var callback = function callback() {
            cb == null || cb(_this2);
          };
          if (actionType == EWinActionType.Scale) {
            var lockTag = WinMgr.instance.lockScreen(5);
            Utils.updateWidget(this.node);
            Tween.stopAllByTag(sShowActionTag, this.node);
            this.node.scale = v3(0.8, 0.8, 0.8);
            var opacityComp = Utils.checkComponent(this.node, UIOpacity);
            Tween.stopAllByTag(sShowActionTag, opacityComp);
            opacityComp.opacity = 0;
            tween(opacityComp).to(0.3, {
              opacity: 255
            }).tag(sShowActionTag).start();
            tween(this.node).to(0.3, {
              scale: v3(1, 1, 1)
            }, {
              easing: easing.backInOut
            }).call(function () {
              WinMgr.instance.unLockScreen(lockTag);
              Utils.updateWidget(_this2.node); // 带widget的由于在什么设置scale的时候把contentSize变化了 这里要强制设下  或者自行重写doShow方法 
              _this2.onWinOpened();
              callback();
            }).tag(sShowActionTag).start();
          } else if (actionType == EWinActionType.Fade) {
            var _lockTag = WinMgr.instance.lockScreen(5);
            WinMgr.instance.doFadeTrans(this.node, undefined, function () {
              WinMgr.instance.unLockScreen(_lockTag);
              if (!isValid(_this2)) return;
              Utils.updateWidget(_this2.node);
              _this2.onWinOpened();
              callback();
            }, 0.5);
          } else {
            this.onWinOpened();
            callback();
          }
        };
        _proto.doClose = function doClose(actionType, callback_) {
          var _actionType2,
            _this3 = this;
          actionType = (_actionType2 = actionType) != null ? _actionType2 : this.actionType;
          var callback = function callback() {
            _this3.onWinClosed();
            _this3.node.destroy();
            callback_ == null || callback_();
          };
          if (actionType == EWinActionType.Scale) {
            var lockTag = WinMgr.instance.lockScreen(5);
            Tween.stopAllByTag(sShowActionTag, this.node);
            var opacityComp = Utils.checkComponent(this.node, UIOpacity);
            Tween.stopAllByTag(sShowActionTag, opacityComp);
            tween(opacityComp).to(0.2, {
              opacity: 0
            }).tag(sShowActionTag).start();
            tween(this.node).to(0.2, {
              scale: v3(0.85, 0.85, 0.85)
            }, {
              easing: easing.backIn
            }).call(function () {
              WinMgr.instance.unLockScreen(lockTag);
              callback();
            }).tag(sShowActionTag).start();
          } else if (actionType == EWinActionType.Fade) {
            var _lockTag2 = WinMgr.instance.lockScreen(5);
            WinMgr.instance.doFadeTrans(undefined, this.node, function () {
              WinMgr.instance.unLockScreen(_lockTag2);
              callback();
            }, 0.5);
          } else {
            // 直接关闭
            callback();
          }
        };
        _proto.onWinShow = function onWinShow() {
          this.node.active = true;
        };
        _proto.onWinHide = function onWinHide() {
          this.node.active = false;
        };
        _proto.onWinOpened = function onWinOpened() {};
        _proto.onWinClosed = function onWinClosed() {};
        _createClass(WinBase, [{
          key: "showType",
          get: function get() {
            return this._showType;
          },
          set: function set(type) {
            this._showType = type;
            if (this._showType == WIN_TYPE.CAN_NOT_CLOSE) {
              this.maskType = WIN_MASK_TYPE.NONE;
            }
          }
        }]);
        return WinBase;
      }(EventComp)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WinHelper.ts", ['cc', './Constants.ts'], function (exports) {
  var cclegacy, Node, UITransform, view, director, isValid, instantiate, Constants;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      UITransform = module.UITransform;
      view = module.view;
      director = module.director;
      isValid = module.isValid;
      instantiate = module.instantiate;
    }, function (module) {
      Constants = module.Constants;
    }],
    execute: function () {
      cclegacy._RF.push({}, "078b0SNL7VBW7Ozjlj3L4MA", "WinHelper", undefined);
      var WinHelper = exports('WinHelper', /*#__PURE__*/function () {
        function WinHelper() {}
        // 每个scene的Canvas中必须包含content，top节点
        WinHelper.checkBasicNode = function checkBasicNode() {
          var content = this.createNode(Constants.BasicNodes.Content);
          var top = this.createNode(Constants.BasicNodes.Top);
          var index = content.getSiblingIndex();
          top.setSiblingIndex(++index);
        };
        WinHelper.createNode = function createNode(name, parentNode) {
          var canvas = parentNode != null ? parentNode : this.getCanvas();
          var node = canvas.getChildByName(name);
          if (!node) {
            node = new Node();
            node.name = name;
            canvas.addChild(node);
            var trans = node.addComponent(UITransform);
            trans.width = view.getVisibleSize().width;
            trans.height = view.getVisibleSize().height;
            node.setPosition(0, 0);
          }
          return node;
        };
        WinHelper.getCanvas = function getCanvas() {
          var _director$getScene;
          var canvas = (_director$getScene = director.getScene()) == null ? void 0 : _director$getScene.getChildByName("Canvas");
          return canvas;
        };
        WinHelper.getTopNode = function getTopNode() {
          var canvas = this.getCanvas();
          return canvas.getChildByName(Constants.BasicNodes.Top);
        };
        WinHelper.getContentNode = function getContentNode() {
          var canvas = this.getCanvas();
          return canvas.getChildByName(Constants.BasicNodes.Content);
        };
        WinHelper.getLaunch = function getLaunch() {
          var canvas = this.getCanvas();
          return canvas.getChildByName("launch");
        };
        WinHelper.getLaunchView = function getLaunchView() {
          var canvas = this.getCanvas();
          return canvas.getChildByPath("launch/LaunchView");
        }

        //以canvas为根节点通过路径获得子节点
        ;

        WinHelper.getNodeByPath = function getNodeByPath(path) {
          var canvas = this.getCanvas();
          return canvas.getChildByPath(path);
        };
        WinHelper.getMaskLayer = function getMaskLayer(nodeName) {
          if (nodeName === void 0) {
            nodeName = Constants.BasicNodes.Top;
          }
          var canvas = director.getScene().getChildByName("Canvas");
          var node = canvas.getChildByName(nodeName);
          var maskLayer = node.getChildByName(Constants.BaseNodeName.BLANK_SCREEN);
          if (!isValid(maskLayer, true)) {
            maskLayer = instantiate(this.blankScreenPrefab);
            maskLayer.name = Constants.BaseNodeName.BLANK_SCREEN;
            maskLayer.parent = node;
          }
          return maskLayer;
        };
        return WinHelper;
      }());
      // 这些预制体一定是在初始化的时候加载了
      WinHelper.blankScreenPrefab = void 0;
      WinHelper.lockScreenPrefab = void 0;
      WinHelper.testFuncBtnPrefab = void 0;
      WinHelper.transActionPrefab = void 0;
      WinHelper.tipLabelPrefab = void 0;
      WinHelper.weakNetTipPrefab = void 0;
      WinHelper.waittingViewPrefab = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WinMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FloatTipsLabel.ts', './Constants.ts', './WinPrefabPath.ts', './ArrayUtil.ts', './AssetUtil.ts', './WinHelper.ts', './WinBase.ts', './WeakNetTip.ts', './Utils.ts', './TransView.ts', './OrderMgrComp.ts', './CheckTopTouch.ts', './LogMgr.ts', './WaittingView.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, _createClass, cclegacy, isValid, Node, view, instantiate, v3, Component, UITransform, NodePool, Sprite, color, FloatTipsLabel, Constants, WinPrefabPath, WIN_NAME, ArrayUtil, AssetUtil, WinHelper, WinBase, EWinActionType, WeakNetTip, Utils, AddClick, TransView, OrderMgrComp, CheckTopTouch, LogMgr, WaittingView;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      isValid = module.isValid;
      Node = module.Node;
      view = module.view;
      instantiate = module.instantiate;
      v3 = module.v3;
      Component = module.Component;
      UITransform = module.UITransform;
      NodePool = module.NodePool;
      Sprite = module.Sprite;
      color = module.color;
    }, function (module) {
      FloatTipsLabel = module.FloatTipsLabel;
    }, function (module) {
      Constants = module.Constants;
    }, function (module) {
      WinPrefabPath = module.WinPrefabPath;
      WIN_NAME = module.WIN_NAME;
    }, function (module) {
      ArrayUtil = module.ArrayUtil;
    }, function (module) {
      AssetUtil = module.AssetUtil;
    }, function (module) {
      WinHelper = module.WinHelper;
    }, function (module) {
      WinBase = module.WinBase;
      EWinActionType = module.EWinActionType;
    }, function (module) {
      WeakNetTip = module.WeakNetTip;
    }, function (module) {
      Utils = module.Utils;
      AddClick = module.AddClick;
    }, function (module) {
      TransView = module.TransView;
    }, function (module) {
      OrderMgrComp = module.OrderMgrComp;
    }, function (module) {
      CheckTopTouch = module.CheckTopTouch;
    }, function (module) {
      LogMgr = module.LogMgr;
    }, function (module) {
      WaittingView = module.WaittingView;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2b86dsb4XdOyZ1DAGy6xsIr", "WinMgr", undefined);

      //窗口打开状态
      var EWinState = /*#__PURE__*/function (EWinState) {
        EWinState[EWinState["CLOSED"] = 0] = "CLOSED";
        EWinState[EWinState["OPENING"] = 1] = "OPENING";
        EWinState[EWinState["OPENED"] = 2] = "OPENED";
        return EWinState;
      }(EWinState || {}); //已打开

      //窗口信息

      /** 窗口类型 */
      var WIN_TYPE = exports('WIN_TYPE', /*#__PURE__*/function (WIN_TYPE) {
        WIN_TYPE[WIN_TYPE["NORMAL"] = 0] = "NORMAL";
        WIN_TYPE[WIN_TYPE["HIDDEN_POP"] = 1] = "HIDDEN_POP";
        WIN_TYPE[WIN_TYPE["FULL_SCREEN"] = 2] = "FULL_SCREEN";
        WIN_TYPE[WIN_TYPE["CAN_NOT_CLOSE"] = 3] = "CAN_NOT_CLOSE";
        return WIN_TYPE;
      }({})); //一般是底层的固定界面,放到content节点下

      /** 遮罩类型 */
      var WIN_MASK_TYPE = exports('WIN_MASK_TYPE', /*#__PURE__*/function (WIN_MASK_TYPE) {
        WIN_MASK_TYPE[WIN_MASK_TYPE["NONE"] = 0] = "NONE";
        WIN_MASK_TYPE[WIN_MASK_TYPE["DARK"] = 1] = "DARK";
        WIN_MASK_TYPE[WIN_MASK_TYPE["DARK_BLANK_CLOSE"] = 2] = "DARK_BLANK_CLOSE";
        return WIN_MASK_TYPE;
      }({})); // 有黑色遮罩且点击空白可关闭
      var WinMgr = exports('WinMgr', /*#__PURE__*/function () {
        function WinMgr() {
          // 打开中、已打开的窗口名字
          this._winsState = {};
          // 所有的弹窗类都放这里面 WIN_TYPE的NORMAL，HIDDEN_POP, FULL_SCREEN
          this._popViews = [];
          this._maskNode = null;
          // 飘字缓存
          this._tipLabelPool = new NodePool();
          this._weakNetTip = void 0;
          this._waittingView = void 0;
          this._checkTopTouch = void 0;
          this._transView = void 0;
          this._testFuncBtn = void 0;
          // 锁屏
          this._lockScreenTag = 0;
          this._lockScreenSchedules = {};
        }
        WinMgr.destroy = function destroy() {
          if (this._instance) {
            this._instance.clear();
          }
          WinMgr._instance = null;
        };
        var _proto = WinMgr.prototype;
        _proto.init = function init() {
          var _this$topOrderMgr, _this$contentOrderMgr;
          this._tipLabelPool.clear();
          this._winsState = {};
          this._popViews = [];
          (_this$topOrderMgr = this.topOrderMgr) == null || _this$topOrderMgr.updateChildOrder();
          (_this$contentOrderMgr = this.contentOrderMgr) == null || _this$contentOrderMgr.updateChildOrder();
        };
        _proto.clearOther = function clearOther() {
          if (isValid(this._maskNode)) {
            var _this$topOrderMgr2, _this$_maskNode;
            (_this$topOrderMgr2 = this.topOrderMgr) == null || _this$topOrderMgr2.removeChild(this._maskNode, false);
            (_this$_maskNode = this._maskNode) == null || _this$_maskNode.destroy();
          }
          this._maskNode = null;
          if (isValid(this._weakNetTip)) {
            var _this$topOrderMgr3, _this$_weakNetTip, _this$_weakNetTip2;
            (_this$topOrderMgr3 = this.topOrderMgr) == null || _this$topOrderMgr3.removeChild((_this$_weakNetTip = this._weakNetTip) == null ? void 0 : _this$_weakNetTip.node, false);
            (_this$_weakNetTip2 = this._weakNetTip) == null || _this$_weakNetTip2.node.destroy();
          }
          this._weakNetTip = undefined;
          if (isValid(this._waittingView)) {
            var _this$topOrderMgr4, _this$_waittingView, _this$_waittingView2;
            (_this$topOrderMgr4 = this.topOrderMgr) == null || _this$topOrderMgr4.removeChild((_this$_waittingView = this._waittingView) == null ? void 0 : _this$_waittingView.node, false);
            (_this$_waittingView2 = this._waittingView) == null || _this$_waittingView2.node.destroy();
          }
          this._waittingView = undefined;
          if (isValid(this._checkTopTouch)) {
            var _this$topOrderMgr5, _this$_checkTopTouch, _this$_checkTopTouch2;
            (_this$topOrderMgr5 = this.topOrderMgr) == null || _this$topOrderMgr5.removeChild((_this$_checkTopTouch = this._checkTopTouch) == null ? void 0 : _this$_checkTopTouch.node, false);
            (_this$_checkTopTouch2 = this._checkTopTouch) == null || _this$_checkTopTouch2.node.destroy();
          }
          this._checkTopTouch = undefined;
          if (isValid(this._transView)) {
            var _this$_transView;
            (_this$_transView = this._transView) == null || _this$_transView.node.destroy();
          }
          this._transView = undefined;
          if (this._testFuncBtn && isValid(this._testFuncBtn)) {
            this._testFuncBtn.destroy();
          }
          this._testFuncBtn = undefined;
          for (var tag in this._lockScreenSchedules) {
            this.unLockScreen(tag);
          }
          this._lockScreenTag = 0;
          this._lockScreenSchedules = {};
        };
        _proto.checkTopTouch = function checkTopTouch() {
          if (this.topOrderMgr) {
            if (!this._checkTopTouch || !isValid(this._checkTopTouch)) {
              var node = new Node();
              node.name = Constants.BaseNodeName.CHECK_TOP_TOUCH;
              this.topOrderMgr.addChild(node, Constants.TopNodeZOrder.CHECK_TOP_TOUCH);
              Utils.setContentSize(node, view.getVisibleSize());
              this._checkTopTouch = Utils.checkComponent(node, CheckTopTouch);
            }
          }
          return this._checkTopTouch;
        };
        _proto.createTestFuncBtn = function createTestFuncBtn() {
          var _this = this;
          var machineId = Utils.getMachineId();
          var TEST_MACHINE_IDS = ["#0#", "#1#", "#2#", "#3#", "#4#", "#5#", "#6#", "#7#", "#8#", "#9#"];
          var isAdd = false;
          isAdd = isAdd || TEST_MACHINE_IDS.includes(machineId);
          if (!isAdd) return;
          if (!this._testFuncBtn || !isValid(this._testFuncBtn)) {
            if (this.topOrderMgr && WinHelper.testFuncBtnPrefab) {
              var node = instantiate(WinHelper.testFuncBtnPrefab);
              node.name = Constants.BaseNodeName.TEST_FUNC_BTN;
              this.topOrderMgr.addChild(node, Constants.TopNodeZOrder.TEST_FUNC_BTN);
              this._testFuncBtn = node;
              AddClick(node, function () {
                _this.open(WIN_NAME.TEST_FUNC_LAYER);
              });
            }
          }
        };
        _proto.createWin = function createWin(parent, winName, cb, params) {
          var _this2 = this;
          var prefabPath = WinPrefabPath[winName];
          if (prefabPath === undefined) {
            LogMgr.error("WinMgr.createWin cannot find win path:" + winName);
            return;
          }
          prefabPath = prefabPath + winName;
          var lockTag = this.lockScreen(5);
          AssetUtil.addPrefab(parent, prefabPath, function (node, _comp) {
            _this2.unLockScreen(lockTag);
            node.position = v3(0, 0, 0);
            var comp = node.getComponent(node.name);
            if (!comp) {
              comp = node.addComponent(node.name);
            }
            comp.initParam(params);
            comp.onWinOpened();
            cb && cb(node, comp);
          });
        };
        _proto.open = function open(winName, cb, params, prefabLoadedCb) {
          var _winState,
            _winState2,
            _this3 = this;
          var winState = this._getWinState(winName);
          if (((_winState = winState) == null ? void 0 : _winState.state) == EWinState.OPENED) {
            prefabLoadedCb && prefabLoadedCb();
            this.setToTop(winName);
            cb && cb(winState.comp);
            return;
          }
          if (((_winState2 = winState) == null ? void 0 : _winState2.state) == EWinState.OPENING) {
            LogMgr.log("winOpening:" + winName);
            return;
          }
          var prefabPath = WinPrefabPath[winName];
          if (prefabPath === undefined) {
            LogMgr.error("WinMgr.open cannot find win path:" + winName);
            return;
          }
          prefabPath = prefabPath + winName;
          if (!winState) {
            winState = {
              state: EWinState.OPENING,
              winName: winName
            }, this._winsState[winName] = winState;
          } else {
            winState.state = EWinState.OPENING;
          }
          // 加一个锁屏
          var lockTag = this.lockScreen(5);
          LogMgr.log("WinMgr.open, loadPrefab start:" + prefabPath);
          AssetUtil.loadPrefab(prefabPath, function (node, asset) {
            LogMgr.log("WinMgr.open, loadPrefab finish:" + prefabPath);
            _this3.unLockScreen(lockTag); // 解除锁屏   
            var winState = _this3._getWinState(winName);
            // 有些加载回来的时候,已经切换场景或者关闭清理了
            if (!winState) {
              return;
            }
            prefabLoadedCb && prefabLoadedCb();
            _this3._setWinPrefab(winName, asset);
            _this3.openByNode(node, cb, params);
          });
        };
        _proto.openByNode = function openByNode(node, cb, params) {
          this._setWinState(node.name, EWinState.OPENED);
          // 脚本组件名字和预制体名字要保持一致
          var comp = node.getComponent(node.name);
          if (!comp) {
            comp = node.addComponent(node.name);
          }
          // 弹窗节点放到top里面,其他节点放到content里面
          var parent = comp.showType == WIN_TYPE.CAN_NOT_CLOSE ? WinHelper.getContentNode() : WinHelper.getTopNode();
          node.parent = parent;
          node.position = v3(0, 0, 0);
          this._setWinComp(comp);
          comp.initParam(params);
          this._updateWinsOrder();
          //cb && cb(comp);
          comp.doShow(undefined, cb);
        };
        _proto.checkWinOpend = function checkWinOpend(name) {
          var state = this._getWinState(name);
          if (state && state.state == EWinState.OPENED) {
            return true;
          }
          return false;
        };
        _proto.hasWinInfo = function hasWinInfo(winName) {
          return this._getWinState(winName) !== undefined;
        };
        _proto.getWinComp = function getWinComp(name) {
          var state = this._getWinState(name);
          if (state) {
            return state.comp;
          }
          return null;
        };
        _proto.getWinNode = function getWinNode(name) {
          var state = this._getWinState(name);
          if (state && state.comp && isValid(state.comp)) {
            return state.comp.node;
          }
          return null;
        }

        // 关闭top节点中比这个层级更高的节点(包括自己?)
        ;

        _proto.closeHigherView = function closeHigherView(win, includeSelf) {
          if (includeSelf === void 0) {
            includeSelf = true;
          }
          var topNode = WinHelper.getTopNode();
          var children = topNode.children;
          var node = null;
          if (typeof win == "string") {
            node = topNode.getChildByName(win);
          } else if (win instanceof Component) {
            node = win.node;
          } else {
            node = win;
          }
          if (!node) return;
          var index = children.indexOf(node);
          if (index != -1) {
            if (!includeSelf) index++;
            for (var i = children.length - 1; i >= index; --i) {
              var name = children[i].name;
              // 这些不移除
              if (name == Constants.BaseNodeName.LOCK_SCREEN || name == Constants.BaseNodeName.CHECK_TOP_TOUCH || name == Constants.BaseNodeName.TEST_FUNC_BTN || children[i] == this._maskNode) {
                continue;
              }
              var state = this._getWinState(name);
              if (state) {
                this._destroyWin(name, false);
              } else {
                children[i].destroy();
              }
            }
          }
          this._updateWinsOrder();
        };
        _proto.close = function close(winOrName, direct) {
          if (direct === void 0) {
            direct = false;
          }
          var _name = "";
          var _win = null;
          if (winOrName instanceof WinBase) {
            _name = winOrName.node.name;
            _win = winOrName;
          } else {
            _name = winOrName;
          }
          if (this._getWinState(_name)) {
            this._destroyWin(_name, !direct);
            this._updateWinsOrder();
          } else {
            if (_win && isValid(_win)) {
              _win.doClose(EWinActionType.Direct);
              this._updateWinsOrder();
            }
          }
        }

        /** 只有弹窗类的才有效 */;
        _proto.setToTop = function setToTop(uiName) {
          if (uiName instanceof WinBase) {
            uiName = uiName.node.name;
          }
          var info = this._winsState[uiName];
          if (info) {
            var comp = info.comp;
            var index = this._popViews.indexOf(comp);
            if (index == -1) {
              LogMgr.warn("WinMgr.setToTop is not popView, name = " + uiName);
              return;
            }
            // 先删除
            this._popViews.splice(index, 1);
            // 加入到最后
            this._popViews.push(comp);
            this._updateWinsOrder();
          }
        }

        /** 关闭最上面的弹窗
         * 
         */;
        _proto.closeTop = function closeTop(force) {
          if (force === void 0) {
            force = true;
          }
          if (this._popViews.length > 0) {
            var win = this._popViews[this._popViews.length - 1];
            if (force || win.maskType == WIN_MASK_TYPE.DARK_BLANK_CLOSE) {
              this.close(win);
            }
          }
        }

        /** 关闭所有弹窗
         * 
         */;
        _proto.closeAllPop = function closeAllPop(excludes) {
          for (var i = this._popViews.length - 1; i >= 0; --i) {
            var comp = this._popViews[i];
            if (isValid(comp)) {
              var uiName = comp.node.name;
              if (!(excludes && excludes.includes(uiName))) {
                this._destroyWin(uiName, false);
              }
            }
          }
          this._updateWinsOrder();
        }

        /** 关闭Content下所有界面
         * 
         */;
        _proto.clearContent = function clearContent(excludes) {
          var _this$contentOrderMgr2;
          var content = WinHelper.getContentNode();
          if (!isValid(content)) return;
          var children = content.children;
          for (var _iterator = _createForOfIteratorHelperLoose(children), _step; !(_step = _iterator()).done;) {
            var win = _step.value;
            var uiName = win.name;
            if (!(excludes && excludes.includes(uiName))) {
              this._destroyWin(uiName, false);
            }
          }
          (_this$contentOrderMgr2 = this.contentOrderMgr) == null || _this$contentOrderMgr2.updateChildOrder();
        };
        _proto.clearOtherContent = function clearOtherContent(win) {
          var name = win.node.name;
          this.clearContent([name]);
        };
        _proto.clear = function clear() {
          this.clearContent();
          this.closeAllPop();
          this.clearOther();
          this.init();
          this.createTestFuncBtn();
        };
        _proto.addNotice = function addNotice(params) {
          var _this4 = this,
            _this$topOrderMgr6;
          var node = this._tipLabelPool.get();
          if (!isValid(node)) {
            node = instantiate(WinHelper.tipLabelPrefab);
            var comp = node.addComponent(FloatTipsLabel);
            comp.setEndCallback(function (node) {
              if (isValid(node)) {
                var _this4$topOrderMgr;
                (_this4$topOrderMgr = _this4.topOrderMgr) == null || _this4$topOrderMgr.removeChild(node);
                _this4._tipLabelPool.put(node);
              }
            });
          }
          node.active = true;
          (_this$topOrderMgr6 = this.topOrderMgr) == null || _this$topOrderMgr6.addChild(node, Constants.TopNodeZOrder.NOTICE);
          var _comp = node.getComponent(FloatTipsLabel);
          if (typeof params == "string") {
            params = {
              text: params
            };
          }
          _comp.setLabelInfo(params);
        };
        _proto.doFadeTrans = function doFadeTrans(inNode, outNode, finallyCb, duration) {
          var _this$_transView2, _this$_transView3, _this$_transView4;
          if (duration === void 0) {
            duration = 0.5;
          }
          if (!isValid(this._transView)) {
            var transNode = instantiate(WinHelper.transActionPrefab);
            transNode.parent = WinHelper.getCanvas();
            this._transView = Utils.checkComponent(transNode, TransView);
          }
          var parent = (_this$_transView2 = this._transView) == null ? void 0 : _this$_transView2.node.parent;
          (_this$_transView3 = this._transView) == null || _this$_transView3.node.setSiblingIndex(parent.children.length - 1);
          (_this$_transView4 = this._transView) == null || _this$_transView4.showFadeAction(inNode, outNode, finallyCb, duration);
        };
        _proto.showWeakNetTip = function showWeakNetTip(tip) {
          var _this$_weakNetTip3;
          if (!isValid(this._weakNetTip)) {
            var _this$topOrderMgr7;
            var node = instantiate(WinHelper.weakNetTipPrefab);
            (_this$topOrderMgr7 = this.topOrderMgr) == null || _this$topOrderMgr7.addChild(node, Constants.TopNodeZOrder.WEAK_NET_TIP);
            this._weakNetTip = node.addComponent(WeakNetTip);
          }
          (_this$_weakNetTip3 = this._weakNetTip) == null || _this$_weakNetTip3.show();
        };
        _proto.hideWeakNetTip = function hideWeakNetTip() {
          if (isValid(this._weakNetTip)) {
            var _this$_weakNetTip4;
            (_this$_weakNetTip4 = this._weakNetTip) == null || _this$_weakNetTip4.hide();
          }
        };
        _proto.showWaittingView = function showWaittingView() {
          var _this$_waittingView3;
          if (!isValid(this._waittingView)) {
            var _this$topOrderMgr8;
            var node = instantiate(WinHelper.waittingViewPrefab);
            (_this$topOrderMgr8 = this.topOrderMgr) == null || _this$topOrderMgr8.addChild(node, Constants.TopNodeZOrder.WAITTING_VIEW);
            this._waittingView = node.addComponent(WaittingView);
          }
          (_this$_waittingView3 = this._waittingView) == null || _this$_waittingView3.show();
        };
        _proto.hideWaittingView = function hideWaittingView() {
          if (isValid(this._waittingView)) {
            var _this$_waittingView4;
            (_this$_waittingView4 = this._waittingView) == null || _this$_waittingView4.hide();
          }
        };
        _proto.lockScreen = function lockScreen(time, tag, alpha) {
          var _this5 = this;
          if (time === void 0) {
            time = 0;
          }
          if (alpha === void 0) {
            alpha = 0;
          }
          var top = WinHelper.getTopNode();
          if (!top) return;
          var lockScreen = top.getChildByName(Constants.BaseNodeName.LOCK_SCREEN);
          var showFunc = function showFunc() {
            var _this5$topOrderMgr;
            if (!lockScreen) {
              return;
            }
            if (!tag) {
              tag = (++_this5._lockScreenTag).toString();
            }
            lockScreen.active = true;
            lockScreen.getComponent(Sprite).color = color(0, 0, 0, alpha);
            (_this5$topOrderMgr = _this5.topOrderMgr) == null || _this5$topOrderMgr.updateChildOrder();
            // 存在相同的,则先移除老的
            var scheduleFunc = _this5._lockScreenSchedules[tag];
            if (scheduleFunc) {
              _this5.unLockScreen(tag);
            }
            scheduleFunc = function scheduleFunc() {
              _this5.unLockScreen(tag);
            };
            _this5._lockScreenSchedules[tag] = scheduleFunc;
            lockScreen.getComponent(UITransform).scheduleOnce(scheduleFunc, time);
            if (lockScreen.refCount === undefined) {
              lockScreen.refCount = 0;
            }
            ++lockScreen.refCount;
            return tag;
          };
          if (!lockScreen) {
            var _this$topOrderMgr9;
            lockScreen = instantiate(WinHelper.lockScreenPrefab);
            lockScreen.name = Constants.BaseNodeName.LOCK_SCREEN;
            (_this$topOrderMgr9 = this.topOrderMgr) == null || _this$topOrderMgr9.addChild(lockScreen, Constants.TopNodeZOrder.LOCK_SCREEN);
            return showFunc();
          } else {
            if (time > 0) {
              return showFunc();
            }
          }
        };
        _proto.unLockScreen = function unLockScreen(tag) {
          if (tag === undefined) return;
          var top = WinHelper.getTopNode();
          if (top == null) return;
          var lockScreen = top.getChildByName(Constants.BaseNodeName.LOCK_SCREEN);
          if (lockScreen) {
            var scheduleFunc = this._lockScreenSchedules[tag];
            if (scheduleFunc) {
              lockScreen.getComponent(UITransform).unschedule(scheduleFunc);
            }
            delete this._lockScreenSchedules[tag];
            if (lockScreen.refCount === undefined || --lockScreen.refCount <= 0) {
              var _this$topOrderMgr10;
              lockScreen.active = false;
              lockScreen.refCount = 0;
              lockScreen.getComponent(UITransform).unscheduleAllCallbacks();
              (_this$topOrderMgr10 = this.topOrderMgr) == null || _this$topOrderMgr10.updateChildOrder();
            }
          }
        };
        _proto._updateWinsOrder = function _updateWinsOrder() {
          var _this$topOrderMgr14, _this$contentOrderMgr3;
          //全屏窗口需要隐藏后面的所有窗口
          var fullScreen = false;
          //是否影藏后面的所有弹窗
          var hidePop = false;
          var maskIndex;
          for (var i = this._popViews.length - 1; i >= 0; --i) {
            var _this$topOrderMgr11;
            var comp = this._popViews[i];
            // this._popViews 越后加入越放后面
            (_this$topOrderMgr11 = this.topOrderMgr) == null || _this$topOrderMgr11.setArrivalOrder(comp.node, i * 10, false);
            // 遮罩层应该放的位置
            if (!maskIndex && (comp.showType == WIN_TYPE.NORMAL || comp.showType == WIN_TYPE.HIDDEN_POP) && comp.maskType != WIN_MASK_TYPE.NONE) {
              maskIndex = i * 10 - 1;
            }
            var active = !fullScreen;
            if (active && hidePop && (comp.showType == WIN_TYPE.NORMAL || comp.showType == WIN_TYPE.HIDDEN_POP)) {
              active = false;
            }
            comp.node.active = active;
            if (!fullScreen) {
              fullScreen = comp.showType == WIN_TYPE.FULL_SCREEN;
            }
            if (!hidePop) {
              hidePop = comp.showType == WIN_TYPE.HIDDEN_POP;
            }
          }
          if (maskIndex !== undefined) {
            var _this$topOrderMgr12, _this$topOrderMgr13;
            if (!isValid(this._maskNode, true)) {
              this._maskNode = WinHelper.getMaskLayer();
            }
            this._maskNode.active = true;
            (_this$topOrderMgr12 = this.topOrderMgr) == null || _this$topOrderMgr12.addChild(this._maskNode, undefined, false);
            (_this$topOrderMgr13 = this.topOrderMgr) == null || _this$topOrderMgr13.setArrivalOrder(this._maskNode, maskIndex, false);
          } else if (isValid(this._maskNode)) {
            this._maskNode.active = false;
          }
          (_this$topOrderMgr14 = this.topOrderMgr) == null || _this$topOrderMgr14.updateChildOrder();
          (_this$contentOrderMgr3 = this.contentOrderMgr) == null || _this$contentOrderMgr3.updateChildOrder();
        }

        //设置窗口预制
        ;

        _proto._setWinPrefab = function _setWinPrefab(winName, prefab) {
          if (prefab === undefined || prefab === null) return;
          if (!this._winsState[winName]) return;
          if (prefab != this._winsState[winName].prefab) {
            var _this$_winsState$winN;
            prefab.addRef();
            (_this$_winsState$winN = this._winsState[winName].prefab) == null || _this$_winsState$winN.decRef();
            this._winsState[winName].prefab = prefab;
          }
        }

        //设置窗口绑定组件
        ;

        _proto._setWinComp = function _setWinComp(comp) {
          if (comp === undefined || comp === null) return;
          var name = comp.node.name;
          if (!this._winsState[name]) return;
          this._winsState[name].comp = comp;
          if (comp.showType == WIN_TYPE.NORMAL || comp.showType == WIN_TYPE.HIDDEN_POP || comp.showType == WIN_TYPE.FULL_SCREEN) {
            var _this$topOrderMgr15;
            this._popViews.push(comp);
            (_this$topOrderMgr15 = this.topOrderMgr) == null || _this$topOrderMgr15.addChild(comp.node, undefined, false);
          } else if (comp.showType == WIN_TYPE.CAN_NOT_CLOSE) {
            var _this$contentOrderMgr4;
            (_this$contentOrderMgr4 = this.contentOrderMgr) == null || _this$contentOrderMgr4.addChild(comp.node, comp.zOrder, false);
          }
        }

        //获取某窗口状态
        ;

        _proto._getWinState = function _getWinState(winName) {
          return this._winsState[winName];
        };
        _proto._setWinState = function _setWinState(winName, state) {
          var win = this._winsState[winName];
          if (!win) {
            this._winsState[winName] = {
              state: state,
              winName: winName
            };
          } else {
            win.state = state;
          }
        };
        _proto._destroyWin = function _destroyWin(uiName, showAction) {
          if (showAction === void 0) {
            showAction = true;
          }
          var info = this._getWinState(uiName);
          ArrayUtil.remove(this._popViews, info == null ? void 0 : info.comp);
          if (info) {
            if (info.comp && isValid(info.comp)) {
              var _this$topOrderMgr16, _info$comp, _this$contentOrderMgr5, _info$comp2, _info$comp3;
              (_this$topOrderMgr16 = this.topOrderMgr) == null || _this$topOrderMgr16.removeChild((_info$comp = info.comp) == null ? void 0 : _info$comp.node, false);
              (_this$contentOrderMgr5 = this.contentOrderMgr) == null || _this$contentOrderMgr5.removeChild((_info$comp2 = info.comp) == null ? void 0 : _info$comp2.node, false);
              (_info$comp3 = info.comp) == null || _info$comp3.doClose(showAction ? EWinActionType.Scale : EWinActionType.Direct, function () {
                if (info) {
                  if (info.prefab && isValid(info.prefab)) {
                    info.prefab.decRef();
                  }
                  info.prefab = undefined;
                }
              });
            }
          }
          delete this._winsState[uiName];
        };
        _proto.getTopPopViewName = function getTopPopViewName() {
          if (this._popViews.length == 0) return undefined;
          var topView = this._popViews[this._popViews.length - 1];
          return topView.node.name;
        };
        _createClass(WinMgr, [{
          key: "topOrderMgr",
          get: function get() {
            var topNode = WinHelper.getTopNode();
            if (!topNode) return null;
            var comp = Utils.checkComponent(topNode, OrderMgrComp);
            return comp;
          }
        }, {
          key: "contentOrderMgr",
          get: function get() {
            var contentNode = WinHelper.getContentNode();
            if (!contentNode) return null;
            var comp = Utils.checkComponent(contentNode, OrderMgrComp);
            return comp;
          }
        }], [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new WinMgr();
              this._instance.init();
            }
            return this._instance;
          }
        }]);
        return WinMgr;
      }());
      WinMgr._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WinPrefabPath.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      var _WinPrefabPath;
      cclegacy._RF.push({}, "4bb0eByN+JKM414S8WdSKPZ", "WinPrefabPath", undefined);
      //窗口名字常量
      var WIN_NAME = exports('WIN_NAME', {
        //common
        POPUP_WIN: "PopUpWin",
        PROMPT_WIN: "PromptWin",
        INPUT_WIN: "InputWin",
        WEB_VIEW_LAYER: "WebViewLayer",
        TEST_FUNC_LAYER: "TestFuncLayer",
        TEST_LOG_VIEW: "TestLogView",
        //game
        MAIN_VIEW: "MainView",
        COM_DIALOG_VIEW: "ComDialogView"
      });

      //窗口预制路径,不包括views这一层目录
      var WinPrefabPath = exports('WinPrefabPath', (_WinPrefabPath = {}, _WinPrefabPath[WIN_NAME.POPUP_WIN] = "common/", _WinPrefabPath[WIN_NAME.PROMPT_WIN] = "common/", _WinPrefabPath[WIN_NAME.INPUT_WIN] = "common/", _WinPrefabPath[WIN_NAME.WEB_VIEW_LAYER] = "common/", _WinPrefabPath[WIN_NAME.TEST_FUNC_LAYER] = "common/", _WinPrefabPath[WIN_NAME.TEST_LOG_VIEW] = "common/", _WinPrefabPath[WIN_NAME.MAIN_VIEW] = "game/", _WinPrefabPath[WIN_NAME.COM_DIALOG_VIEW] = "game/", _WinPrefabPath));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ZlibCtrl.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c8d19/c9otGpK62v04YpA3s", "ZlibCtrl", undefined);
      /*
       * @Author: qiaomingwu
       * @Date: 2023-03-27 09:55:40
       * @Description: zlib压缩解压数据
       */
      var ZlibCtrl = exports('ZlibCtrl', /*#__PURE__*/function () {
        function ZlibCtrl() {}
        /**压缩*/
        ZlibCtrl.compress = function compress(data) {
          // @ts-ignore
          var result = new Zlib.Deflate(data).compress();
          return result;
        }

        /**解压缩*/;
        ZlibCtrl.deCompress = function deCompress(data) {
          // @ts-ignore
          var result = new Zlib.Inflate(data).decompress();
          return result;
        };
        return ZlibCtrl;
      }());
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/scripts', 'chunks:///_virtual/scripts'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});