require("../common/manifest.js")
require("../common/vendor.js")
global.webpackJsonp([7],{

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_setShop_vue__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3cfbcd56_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_setShop_vue__ = __webpack_require__(147);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(145)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3cfbcd56"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_setShop_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3cfbcd56_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_setShop_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\setShop.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] setShop.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3cfbcd56", Component.options)
  } else {
    hotAPI.reload("data-v-3cfbcd56", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 145:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vant_weapp_dist_toast_toast__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_myTabbar__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_CurrentPage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__palette_card__ = __webpack_require__(22);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var card = new __WEBPACK_IMPORTED_MODULE_4__palette_card__["a" /* default */]();
var customStyle = 'margin:0rpx 75rpx;background: #fff;';
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'setShop',

  data: function data() {
    return {
      tabbar: {},
      openShopping: true,
      // 是否开启店铺
      shopMsg: [],
      // 店铺信息
      delectShopId: '',
      // 将要删除的店铺ID
      delectShow: false,
      friendShow: false,
      sharePopup: false,
      // 分享店铺弹框
      shareImg: '',
      customStyle: customStyle,
      template: '' // 分享店铺数据

    };
  },


  components: {
    myTabbar: __WEBPACK_IMPORTED_MODULE_2__components_myTabbar__["a" /* default */]
  },

  onLoad: function onLoad() {
    console.log('page setShop onLoad');
    wx.hideTabBar();
    var that = this;
    that.tabbar = Object(__WEBPACK_IMPORTED_MODULE_3__utils_CurrentPage__["a" /* getQuery */])();
    console.log(that.tabbar);
  },
  onShow: function onShow() {
    // 判断我的店铺是否有店
    this.myStore();
  },


  methods: {
    delectShop: function delectShop(id) {
      var that = this;
      that.delectShow = true;
      console.log(id);
      that.delectShopId = id;
    },
    onClose: function onClose() {
      this.delectShow = false;
    },
    sureDelectBtn: function sureDelectBtn() {
      var _this = this;

      var that = this;
      that.$httpWX.post({
        url: '/store/close',
        data: {
          storeId: that.delectShopId
        },
        header: that.globalData.Token
      }).then(function (res) {
        console.log(res); // 删除成功

        __WEBPACK_IMPORTED_MODULE_1_vant_weapp_dist_toast_toast__["a" /* default */].success('店铺已删除');
        _this.delectShow = false;
        _this.myStore();
      });
    },
    friendPopup: function friendPopup() {
      console.log(this.friendShow);
      this.friendShow = true;
    },
    friendClose: function friendClose() {
      this.friendShow = false;
    },
    jumpShopHome: function jumpShopHome(id) {
      this.$router.push({
        path: '/pages/shopping/shopHome',
        query: {
          shopHomeId: id
        }
      });
    },
    editShoppingMsg: function editShoppingMsg(item) {
      console.log(item);
      var shoppingMsg = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(item);
      this.$router.push({
        path: '/pages/shopping/openShopping/editShopping',
        query: {
          changeShoppingMsg: shoppingMsg,
          openShopping: false
        }
      });
    },
    myStore: function myStore() {
      var that = this;
      that.$httpWX.post({
        url: '/store/my',
        header: that.globalData.Token
      }).then(function (res) {
        console.log(res);

        if (res.data.length !== 0) {
          // 设置显示样式
          that.openShopping = true; // 开启店铺

          that.shopMsg = res.data;
        } else {
          // 设置显示样式
          that.openShopping = false; // 未开启店铺
        }
      });
    },
    onImgOk: function onImgOk(e) {
      this.shareImg = e.mp.detail.path; // 两种路径是一样的

      console.log(e.mp.detail.path);
      console.log(e.target.path);
    },
    popupBg: function popupBg() {
      this.sharePopup = false; // 分享弹窗隐藏
    },
    getShareMsg: function getShareMsg(item) {
      console.log(item);
      var userInfo = {
        avatar: item.pic,
        storeName: item.storeName,
        detail: item.detail,
        bg: item.background
      };
      this.template = card.do(userInfo);
      __WEBPACK_IMPORTED_MODULE_1_vant_weapp_dist_toast_toast__["a" /* default */].clear();
      this.sharePopup = true; // 分享弹窗显示
    },


    // 店铺分享按钮
    shareShop: function shareShop(item) {
      __WEBPACK_IMPORTED_MODULE_1_vant_weapp_dist_toast_toast__["a" /* default */].loading({
        duration: 0,
        mask: true,
        message: '生成图片中'
      }); //

      this.getShareMsg(item);
    }
  },
  onShareAppMessage: function onShareAppMessage(options) {
    // var that = this;
    // 设置菜单中的转发按钮触发转发事件时的转发内容
    var shareObj = {
      title: '转发的标题',
      // 默认是小程序的名称(可以写slogan等)
      path: '/pages/shopping/shopHome',
      // 默认是当前页面，必须是以‘/’开头的完整路径
      imgUrl: '',
      // 自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
      success: function success(res) {
        // 转发成功之后的回调
        if (res.errMsg === 'shareAppMessage:ok') {}
      },
      fail: function fail(res) {
        // 转发失败之后的回调
        if (res.errMsg === 'shareAppMessage:fail cancel') {// 用户取消转发
        } else if (res.errMsg === 'shareAppMessage:fail') {// 转发失败，其中 detail message 为详细失败信息
        }
      } // 来自页面内的按钮的转发

    };

    if (options.from === 'button') {
      var eData = options.target.dataset;
      var that = this;
      console.log(eData.name); // 此处可以修改 shareObj 中的内容

      shareObj.path = '/pages/shopping/shopHome?shopId=' + that.shopHomeId;
    } // 返回shareObj


    return shareObj;
  }
});

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.openShopping === true) ? _c('div', {
    staticClass: "shopCard"
  }, _vm._l((_vm.shopMsg), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "shopCardBg"
    }, [_c('img', {
      staticClass: "shopCardBgImg",
      attrs: {
        "src": item.background
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "functionBtn"
    }, [_c('img', {
      staticClass: "‘peoShareShop’",
      attrs: {
        "src": "../../static/images/peoShareShop.png",
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.shareShop(item)
        }
      }
    }), _vm._v(" "), _c('img', {
      staticClass: "‘delectShop’",
      attrs: {
        "src": "../../static/images/delectShop.png",
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.delectShop(item.id)
        }
      }
    }), _vm._v(" "), _c('img', {
      staticClass: "‘editShop’",
      attrs: {
        "src": "../../static/images/editShop.png",
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.editShoppingMsg(item)
        }
      }
    })]), _vm._v(" "), _c('div', {
      attrs: {
        "hover-class": "none",
        "eventid": '3_' + index
      },
      on: {
        "click": function($event) {
          _vm.jumpShopHome(item.id)
        }
      }
    }, [_c('img', {
      staticClass: "enterShop",
      attrs: {
        "src": "../../static/images/enterShop.png"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "shopSeller"
    }, [_c('img', {
      staticClass: "shopSellerPic",
      attrs: {
        "src": item.pic
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "shopSellerMsg"
    }, [_c('div', {
      staticClass: "shopSellerName"
    }, [_c('span', [_vm._v(_vm._s(item.storeName))]), _vm._v(" "), _c('img', {
      attrs: {
        "src": "../../static/images/editName.png",
        "eventid": '4_' + index
      },
      on: {
        "click": function($event) {
          _vm.editShoppingMsg(item)
        }
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "shopSellerDet"
    }, [_vm._v(_vm._s(item.detail))])])])])
  })) : _vm._e(), _vm._v(" "), (_vm.openShopping === true) ? _c('div', {
    staticClass: "invitefriend"
  }, [_c('img', {
    attrs: {
      "src": "../../static/images/invitefriend.png",
      "eventid": '5'
    },
    on: {
      "click": _vm.friendPopup
    }
  })]) : _c('div', {
    staticClass: "startOpen"
  }, [_c('navigator', {
    staticClass: "startOpenBtn",
    attrs: {
      "url": "/pages/shopping/openShopping/editShopping?openShopping=true"
    }
  })], 1), _vm._v(" "), _c('van-popup', {
    attrs: {
      "z-index": "1000",
      "show": _vm.delectShow,
      "close-on-click-overlay": "false",
      "close": _vm.onClose,
      "mpcomid": '0'
    }
  }, [_c('div', {
    staticClass: "delectPopup"
  }, [_c('div', {
    staticClass: "delectTitle"
  }, [_c('img', {
    attrs: {
      "src": "../../static/images/warn.png"
    }
  }), _vm._v(" "), _c('span', [_vm._v("确定要删除店铺？")])]), _vm._v(" "), _c('div', {
    staticClass: "delectContent"
  }, [_vm._v("删除店铺后您邀请的朋友店铺将和您取消关系！")]), _vm._v(" "), _c('div', {
    staticClass: "delectBtn"
  }, [_c('div', {
    staticClass: "delectLeftBtn",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.sureDelectBtn
    }
  }, [_vm._v("删除店铺")]), _vm._v(" "), _c('div', {
    staticClass: "delectRightBtn",
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": _vm.onClose
    }
  }, [_vm._v("重新开店")])]), _vm._v(" "), _c('img', {
    staticClass: "closeDelect",
    attrs: {
      "src": "../../static/images/wrong.png",
      "eventid": '8'
    },
    on: {
      "click": _vm.onClose
    }
  })])]), _vm._v(" "), _c('van-popup', {
    attrs: {
      "z-index": "1000",
      "show": _vm.friendShow,
      "close-on-click-overlay": "false",
      "close": _vm.friendClose,
      "mpcomid": '1'
    }
  }, [_c('div', {
    staticClass: "friendPopup delectPopup"
  }, [_c('div', {
    staticClass: "delectTitle"
  }, [_c('span', [_vm._v("成功邀请好友注册店铺")])]), _vm._v(" "), _c('div', {
    staticClass: "delectContent"
  }, [_vm._v("你会获得好友店铺销售额5%的奖励")]), _vm._v(" "), _c('div', {
    staticClass: "delectBtn"
  }, [_c('img', {
    attrs: {
      "src": "../../static/images/invitefriend.png"
    }
  })]), _vm._v(" "), _c('img', {
    staticClass: "closeDelect",
    attrs: {
      "src": "../../static/images/wrong.png",
      "eventid": '9'
    },
    on: {
      "click": _vm.friendClose
    }
  })])]), _vm._v(" "), (_vm.sharePopup) ? _c('div', {
    staticClass: "popupBg",
    attrs: {
      "eventid": '13'
    },
    on: {
      "click": _vm.popupBg
    }
  }, [_c('painter', {
    attrs: {
      "customStyle": _vm.customStyle,
      "palette": _vm.template,
      "dirty": true,
      "eventid": '10',
      "mpcomid": '2'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
      },
      "imgOK": _vm.onImgOk
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "functionBtn"
  }, [_c('button', {
    staticClass: "shareBtn",
    attrs: {
      "data-name": "shareBtn",
      "plain": "true",
      "open-type": "share",
      "eventid": '11'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
      }
    }
  }, [_c('img', {
    attrs: {
      "src": "../../static/images/shareWx.png"
    }
  }), _vm._v(" 微信好友")]), _vm._v(" "), _c('div', {
    staticClass: "saveBtn",
    attrs: {
      "eventid": '12'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.save($event)
      }
    }
  }, [_c('img', {
    attrs: {
      "src": "../../static/images/shareDown.png"
    }
  }), _vm._v(" 保存图片")])], 1)], 1) : _vm._e(), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '3'
    }
  }), _vm._v(" "), _c('myTabbar', {
    attrs: {
      "tabbar": _vm.tabbar,
      "mpcomid": '4'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3cfbcd56", esExports)
  }
}

/***/ })

},[214]);