System.register("chunks:///_virtual/channel_config.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "27fa281sG1B+4H8ZXiAnG9l", "channel_config", undefined);
      // 测试服
      var channel_config = exports('channel_config', {
        id: 1,
        channelName: "KsMiniGameWebTest",
        gatewayUrl: "http://115.182.198.83:7003",
        loginType: 1,
        version: "1.0.0",
        socketProtocol: "ws",
        isOnline: false
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director, Component;
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
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);
        function DebugViewRuntimeControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));
          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }
        var _proto = DebugViewRuntimeControl.prototype;
        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);
          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }
          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
            y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
            height = 20;

          // new nodes
          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles';

          // title
          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;
            var _labelComponent = newLabel.getComponent(Label);
            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }
          y -= height;
          // single
          var currentRow = 0;
          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }
            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }
          x += width;
          // buttons
          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent;

          // misc
          y -= 40;
          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);
            _newNode.setPosition(x, y - height * _i2, 0.0);
            _newNode.setScale(0.5, 0.5, 0.5);
            _newNode.parent = miscNode;
            var _textComponent = _newNode.getComponentInChildren(RichText);
            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;
            var toggleComponent = _newNode.getComponent(Toggle);
            toggleComponent.isChecked = _i2 ? true : false;
            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);
            this.miscModeToggleList[_i2] = _newNode;
          }

          // composite
          y -= 150;
          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;
            _newNode2.setPosition(x, y - height * _i3, 0.0);
            _newNode2.setScale(0.5, 0.5, 0.5);
            _newNode2.parent = this.compositeModeToggle.parent;
            var _textComponent2 = _newNode2.getComponentInChildren(RichText);
            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;
            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);
            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };
        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');
          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };
        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };
        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };
        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };
        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };
        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);
          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);
            _toggleComponent.isChecked = true;
          }
          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };
        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };
        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;
          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }
          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }
          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };
        _proto.onLoad = function onLoad() {};
        _proto.update = function update(deltaTime) {};
        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
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

System.register("chunks:///_virtual/GameLaunch.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, isValid, macro, game, director, view, screen, ResolutionPolicy, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      isValid = module.isValid;
      macro = module.macro;
      game = module.game;
      director = module.director;
      view = module.view;
      screen = module.screen;
      ResolutionPolicy = module.ResolutionPolicy;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _class3;
      cclegacy._RF.push({}, "f1668O2cnNElpLNGq1+KQEZ", "GameLaunch", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameLaunch = exports('GameLaunch', (_dec = ccclass('GameLaunch'), _dec2 = property(Prefab), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameLaunch, _Component);
        function GameLaunch() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "launchPrefab", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = GameLaunch.prototype;
        _proto.onLoad = function onLoad() {
          if (!isValid(GameLaunch.instance)) {
            GameLaunch.instance = this;
          } else {
            this.destroy();
            return;
          }
          // 不要多点触摸
          macro.ENABLE_MULTI_TOUCH = false;
          // 设置帧率
          game.frameRate = 40;
          // 常驻根节点
          director.addPersistRootNode(this.node);
          this._fit();
          view.on("canvas-resize", this._fit, this);
        };
        _proto.onDestroy = function onDestroy() {
          view.targetOff(this);
        };
        _proto._fit = function _fit() {
          // 适配屏幕 保证一边撑满  另外一边留白 留白处再用大背景图填充
          var scalex = screen.windowSize.width / view.getDesignResolutionSize().width;
          var scaley = screen.windowSize.height / view.getDesignResolutionSize().height;
          if (scalex < scaley) {
            view.setResolutionPolicy(ResolutionPolicy.FIXED_WIDTH);
            console.log("setResolutionPolicy: FIXED_WIDTH");
          } else {
            view.setResolutionPolicy(ResolutionPolicy.FIXED_HEIGHT);
            console.log("setResolutionPolicy: FIXED_HEIGHT");
          }
          var visibleSize = view.getVisibleSize();
          console.log("screenSize:" + screen.windowSize);
          console.log("visibleSize:" + visibleSize);
        };
        return GameLaunch;
      }(Component), _class3.instance = null, _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "launchPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LaunchView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameLaunch.ts', './channel_config.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Label, ProgressBar, Widget, Sprite, view, UITransform, AssetManager, assetManager, Component, GameLaunch, channel_config;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      ProgressBar = module.ProgressBar;
      Widget = module.Widget;
      Sprite = module.Sprite;
      view = module.view;
      UITransform = module.UITransform;
      AssetManager = module.AssetManager;
      assetManager = module.assetManager;
      Component = module.Component;
    }, function (module) {
      GameLaunch = module.GameLaunch;
    }, function (module) {
      channel_config = module.channel_config;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "c032d20ZcpCUKct5WwKueKC", "LaunchView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LaunchView = exports('LaunchView', (_dec = ccclass('LaunchView'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LaunchView, _Component);
        function LaunchView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._bar = void 0;
          _this._progressLabel = void 0;
          _this._tipsLabel = void 0;
          _this._progIdx = -1;
          _this._progress = 0;
          _this._realProgress = 0;
          // 一个虚拟的进度条
          _this._virtualProgress = 0;
          _this._virtualMaxProgress = 100;
          _this._virtualGrowInterval = 0.15;
          _this._virtualPerGrowValue = 0.4;
          return _this;
        }
        var _proto = LaunchView.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          console.log("launch view: start");
          this._initUI();
          this._doLoad();
        };
        _proto.onDestroy = function onDestroy() {
          this._stopScheduleProgress();
        };
        _proto._initUI = function _initUI() {
          var _barBag$getChildByNam, _barBag$getChildByNam2;
          this._initBg();
          var rootNode = this.node.getChildByName("root");
          rootNode.getChildByName("version").getComponent(Label).string = channel_config.version;
          var barBag = rootNode.getChildByName("barBg");
          this._bar = barBag.getComponent(ProgressBar);
          this._progressLabel = (_barBag$getChildByNam = barBag.getChildByName("progress")) == null ? void 0 : _barBag$getChildByNam.getComponent(Label);
          this._tipsLabel = (_barBag$getChildByNam2 = barBag.getChildByName("tips_label")) == null ? void 0 : _barBag$getChildByNam2.getComponent(Label);
          this._progIdx = -1;
          this._progress = 0;
          this._virtualProgress = 0;
        };
        _proto._initBg = function _initBg() {
          var bg = this.node.getChildByName("bg");
          if (bg) {
            var bg_widget = bg.getComponent(Widget);
            if (bg_widget) {
              bg_widget.enabled = false;
            }
            var bg_sprite = bg.getComponent(Sprite);
            if (bg_sprite) {
              bg_sprite.sizeMode = Sprite.SizeMode.TRIMMED;
              bg_sprite.type = Sprite.Type.SIMPLE;
              bg_sprite.trim = true;
            }
            var size_win = view.getVisibleSize();
            var size_bg = bg.getComponent(UITransform).contentSize;
            var bg_scale = Math.max(size_win.width / size_bg.width, size_win.height / size_bg.height);
            bg_scale = Math.max(1, bg_scale);
            console.log("launch bg scale:" + bg_scale);
            bg.setScale(bg_scale, bg_scale);
          }
        };
        _proto._doLoad = function _doLoad() {
          this._stopScheduleProgress();
          this._loadAssets();
          this.schedule(this._refreshProgress);
          this.schedule(this._scheduleVirtualProgress, this._virtualGrowInterval);
        };
        _proto._stopScheduleProgress = function _stopScheduleProgress() {
          this.unschedule(this._refreshProgress);
          this.unschedule(this._scheduleVirtualProgress);
        };
        _proto._refreshProgress = function _refreshProgress() {
          var tmpProgress = Math.max(this._virtualProgress, this._progress);
          if (tmpProgress <= this._realProgress) return;
          this._realProgress = tmpProgress;
          var progress = Math.min(this._realProgress / 100, 1);
          this._bar.progress = progress;
          this._progressLabel.string = Math.floor(progress * 100) + "%";
        };
        _proto._scheduleVirtualProgress = function _scheduleVirtualProgress() {
          if (this._virtualProgress >= this._virtualMaxProgress) {
            return;
          }
          this._virtualProgress += this._virtualPerGrowValue;
          if (this._virtualProgress >= this._progress) {
            this._virtualProgress = this._progress;
          }
        };
        _proto._loadAssets = function _loadAssets() {
          var _this2 = this;
          console.log("launch view: loadAssets");
          Promise.resolve().then(function () {
            _this2._progIdx = 0;
            // main里面的脚本 scripts中的脚本
            return _this2._loadBundles([AssetManager.BuiltinBundleName.MAIN, "scripts"], 5);
          }).then(function () {
            // 所有bundle
            _this2._progIdx = 1;
            return _this2._loadBundles([AssetManager.BuiltinBundleName.RESOURCES, "font", "lang"], 5);
          }).then(function () {
            // 解析csv        
            return _this2._parseCsv(5);
          }).then(function () {
            // 加载字体
            return _this2._loadFonts(5);
          }).then(function () {
            // 加载多语言
            return _this2._loadI18N(1);
          }).then(function () {
            return _this2._loadBasicPrefabs(35);
          }).then(function () {
            _this2._progIdx = 2;
            return _this2._checkHotUpdate();
          }).then(function () {
            _this2._progIdx = 3;
            return _this2._loadAtlasConfig(5);
          }).then(function () {
            return _this2._loadAudio(1);
          }).then(function () {
            // 通用资源
            return _this2._loadCommonRes(20);
          }).then(function () {
            _this2._progIdx = 4;
            return _this2._preLoadMainView(10);
          }).then(function () {
            _this2._progIdx = 5;
            // 开始登陆
            return _this2._startLogin(100 - _this2._progress);
          }).then(function () {
            var comp = _this2._getGameAppComp();
            _this2._refreshProgress();
            _this2._stopScheduleProgress();
            comp.onLaunchFinish();
          })["catch"](function (reason) {
            if (typeof _this2[reason] == "function") ;
            console.error("+++++++++++++++++++++++++++ load assets error: ", reason);
          });
        };
        _proto._loadBundles = function _loadBundles(bundleNames, totalProgress) {
          var _this3 = this;
          console.log("launch view: load bundles start: " + bundleNames);
          var tempProgress = this._progress;
          var successCallback = function successCallback() {
            _this3._progress = tempProgress + totalProgress;
            console.log("launch view: load bundles success: " + bundleNames);
          };
          var progressCallback = function progressCallback(percent) {
            _this3._progress = tempProgress + totalProgress * percent;
          };
          if (typeof bundleNames == "string") bundleNames = [bundleNames];
          return new Promise(function (resolve, reject) {
            var total = bundleNames.length;
            var idx = 0,
              successNum = 0;
            var loadFunc = function loadFunc() {
              var bundleName = bundleNames[idx++];
              if (!bundleName) {
                if (successNum == total) {
                  successCallback();
                  resolve(null);
                } else {
                  reject();
                }
                return;
              }
              var bundle = assetManager.getBundle(bundleName);
              if (bundle) {
                ++successNum;
                progressCallback(successNum / total);
                loadFunc();
              } else {
                assetManager.loadBundle(bundleName, function (error, bundle) {
                  if (error) {
                    console.log("load bundle error ", error, bundleName);
                  } else {
                    ++successNum;
                    progressCallback(successNum / total);
                  }
                  loadFunc();
                });
              }
            };
            loadFunc();
          });
        };
        _proto._getGameAppComp = function _getGameAppComp() {
          var comp = GameLaunch.instance.node.getComponent("GameApp");
          if (!comp) {
            comp = GameLaunch.instance.node.addComponent("GameApp");
          }
          return comp;
        };
        _proto._parseCsv = function _parseCsv(totalProgress) {
          var _this4 = this;
          console.log("launch view: parse csv start");
          var tempProgress = this._progress;
          return new Promise(function (resolve, reject) {
            var gameApp = _this4._getGameAppComp();
            gameApp.loadConfigs(function (percent) {
              _this4._progress = tempProgress + totalProgress * percent;
            }, function (b) {
              if (b) {
                _this4._progress = tempProgress + totalProgress;
                resolve(null);
                console.log("launch view: parse csv success");
              } else {
                reject();
                console.log("launch view: parse csv fail");
              }
            });
          });
        };
        _proto._loadFonts = function _loadFonts(totalProgress) {
          var _this5 = this;
          console.log("launch view: load fonts start");
          var tempProgress = this._progress;
          return new Promise(function (resolve, reject) {
            var gameApp = _this5._getGameAppComp();
            gameApp.loadFonts(function (percent) {
              _this5._progress = tempProgress + totalProgress * percent;
            }, function (b) {
              if (b) {
                _this5._progress = tempProgress + totalProgress;
                resolve(null);
                console.log("launch view: load fonts success");
              } else {
                reject();
                console.log("launch view: load fonts fail");
              }
            });
          });
        };
        _proto._loadI18N = function _loadI18N(totalProgress) {
          var _this6 = this;
          console.log("launch view: load i18n start");
          var tempProgress = this._progress;
          return new Promise(function (resolve, reject) {
            var gameApp = _this6._getGameAppComp();
            gameApp.loadI18N(function (percent) {
              _this6._progress = tempProgress + totalProgress * percent;
            }, function (b) {
              if (b) {
                _this6._progress = tempProgress + totalProgress;
                resolve(null);
                console.log("launch view: load i18n success");
              } else {
                reject();
                console.log("launch view: load i18n fail");
              }
            });
          });
        };
        _proto._loadBasicPrefabs = function _loadBasicPrefabs(totalProgress) {
          var _this7 = this;
          console.log("launch view: load basic prefabs start");
          var tempProgress = this._progress;
          return new Promise(function (resolve, reject) {
            var gameApp = _this7._getGameAppComp();
            gameApp.loadBasicPrefabs(function (percent) {
              _this7._progress = tempProgress + totalProgress * percent;
            }, function (b) {
              if (b) {
                _this7._progress = tempProgress + totalProgress;
                resolve(null);
                console.log("launch view: load basic prefabs success");
              } else {
                reject();
                console.log("launch view: load basic prefabs fail");
              }
            });
          });
        };
        _proto._checkHotUpdate = function _checkHotUpdate() {
          // 原生平台检查热更新
          return new Promise(function (resolve, reject) {
            {
              resolve(null);
            }
          });
        };
        _proto._loadAtlasConfig = function _loadAtlasConfig(totalProgress) {
          var _this9 = this;
          console.log("launch view: load atlas config start");
          var tempProgress = this._progress;
          return new Promise(function (resolve, reject) {
            var gameApp = _this9._getGameAppComp();
            gameApp.loadAtlasConfig(function (percent) {
              _this9._progress = tempProgress + totalProgress * percent;
            }, function (b) {
              if (b) {
                _this9._progress = tempProgress + totalProgress;
                resolve(null);
                console.log("launch view: load atlas config success");
              } else {
                reject();
                console.log("launch view: load atlas config fail");
              }
            });
          });
        };
        _proto._loadAudio = function _loadAudio(totalProgress) {
          var _this10 = this;
          console.log("launch view: load audio start");
          var tempProgress = this._progress;
          return new Promise(function (resolve, reject) {
            var gameApp = _this10._getGameAppComp();
            gameApp.preloadAudio(function (percent) {
              _this10._progress = tempProgress + totalProgress * percent;
            }, function (b) {
              if (b) {
                _this10._progress = tempProgress + totalProgress;
                resolve(null);
                console.log("launch view: load audio success");
              } else {
                reject();
                console.log("launch view: load audio fail");
              }
            });
          });
        };
        _proto._loadCommonRes = function _loadCommonRes(totalProgress) {
          var _this11 = this;
          var tempProgress = this._progress;
          var p1 = new Promise(function (resolve, reject) {
            console.log("launch view: load common res start");
            var gameApp = _this11._getGameAppComp();
            gameApp.loadCommonRes(function (percent) {
              _this11._progress = tempProgress + totalProgress * percent;
            }, function (b) {
              if (b) {
                _this11._progress = tempProgress + totalProgress;
                resolve(null);
                console.log("launch view: load common res success");
              } else {
                reject();
                console.log("launch view: load common res fail");
              }
            });
          });
          var p2 = new Promise(function (resolve, reject) {
            console.log("launch view: load shaders start");
            var gameApp = _this11._getGameAppComp();
            gameApp.loadShaders(function (b) {
              if (b) {
                resolve(null);
                console.log("launch view: load shaders success");
              } else {
                reject();
                console.log("launch view: load shaders fail");
              }
            });
          });
          return Promise.all([p1, p2]);
        };
        _proto._startLogin = function _startLogin(totalProgress) {
          var _this12 = this;
          var tempProgress = this._progress;
          return new Promise(function (resolve, reject) {
            var gameApp = _this12._getGameAppComp();
            gameApp.startLogin(function (percent) {
              _this12._progress = tempProgress + totalProgress * percent;
            }, function () {
              _this12._progress = tempProgress + totalProgress;
              resolve(null);
            });
          });
        };
        _proto._preLoadMainView = function _preLoadMainView(totalProgress) {
          var _this13 = this;
          console.log("launch view: preload mainview start");
          var tempProgress = this._progress;
          return new Promise(function (resolve, reject) {
            var gameApp = _this13._getGameAppComp();
            gameApp.preLoadMainScene(function (percent) {
              _this13._progress = tempProgress + totalProgress * percent;
            }, function (b) {
              if (b) {
                _this13._progress = tempProgress + totalProgress;
                resolve(null);
                console.log("launch view: preload mainview success");
              } else {
                reject();
                console.log("launch view: preload mainview fail");
              }
            });
          });
        };
        return LaunchView;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./GameLaunch.ts', './LaunchView.ts', './channel_config.ts', './debug-view-runtime-control.ts'], function () {
  return {
    setters: [null, null, null, null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
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