require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonp([14],{

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_bankCard_vue__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1af1ad7a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_bankCard_vue__ = __webpack_require__(163);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(161)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1af1ad7a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_bankCard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1af1ad7a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_bankCard_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\myIfoPages\\bankCard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] bankCard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1af1ad7a", Component.options)
  } else {
    hotAPI.reload("data-v-1af1ad7a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 161:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vant_weapp_dist_toast_toast__ = __webpack_require__(9);
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'bankCard',

  data: function data() {
    return {
      delectShow: false,
      bankMsg: {},
      isBankCard: true // 是否已有银行卡 true没添加  false 已有银行卡

    };
  },
  onLoad: function onLoad() {
    this.getBank();
  },
  onShow: function onShow() {
    this.delectShow = false;
  },


  methods: {
    delectShop: function delectShop() {
      console.log(this.delectShow);
      this.delectShow = true;
    },
    onClose: function onClose() {
      this.delectShow = false;
    },
    addBankCard: function addBankCard() {
      this.$router.push({
        path: '/pages/myIfoPages/editBankCard'
      });
    },
    sureDelectBank: function sureDelectBank() {
      var that = this;
      that.$httpWX.post({
        url: '/bank/del',
        data: {
          id: that.bankMsg.id
        },
        header: that.globalData.Token
      }).then(function (res) {
        console.log(res);
        __WEBPACK_IMPORTED_MODULE_0_vant_weapp_dist_toast_toast__["a" /* default */].success('删除成功');
        that.getBank();
      });
    },
    getBank: function getBank() {
      var that = this;
      that.$httpWX.post({
        url: '/bank/get',
        header: that.globalData.Token
      }).then(function (res) {
        console.log(res);
        that.bankMsg = res.data;

        if (that.bankMsg !== null) {
          that.isBankCard = false;
          that.bankMsg.afterCardNo = that.bankMsg.cardNo.substring(that.bankMsg.cardNo.length - 4);
        }
      });
    }
  }
});

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pageBg"
  }, [_c('div', {
    staticClass: "topGap"
  }), _vm._v(" "), (_vm.isBankCard) ? _c('div', {
    staticClass: "addBankCard",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.addBankCard
    }
  }, [_c('span', {
    staticClass: "plus"
  }, [_vm._v("+")]), _vm._v(" "), _c('div', {
    staticClass: "addBankCardRight"
  }, [_c('span', [_vm._v("添加银行卡")]), _vm._v(" "), _c('van-icon', {
    staticClass: "arrow",
    attrs: {
      "name": "arrow",
      "color": "#8E8E8E",
      "size": "15px",
      "mpcomid": '0'
    }
  })], 1)]) : _c('div', {
    staticClass: "bankCardMsg"
  }, [_c('div', {
    staticClass: "bankMsg",
    style: ({
      backgroundImage: 'url(' + _vm.bankMsg.cardBg + ')'
    })
  }, [_c('div', {
    staticClass: "logoBg"
  }, [_c('img', {
    attrs: {
      "src": _vm.bankMsg.logo
    }
  })]), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "bankName"
  }, [_vm._v(_vm._s(_vm.bankMsg.bankName))]), _vm._v(" "), _c('div', {
    staticClass: "bankType"
  }, [_vm._v(_vm._s(_vm.bankMsg.bankType))]), _vm._v(" "), _c('div', {
    staticClass: "cardNo"
  }, [_vm._v("**** **** **** " + _vm._s(_vm.bankMsg.afterCardNo))])]), _vm._v(" "), _c('img', {
    staticClass: "delectBank",
    attrs: {
      "src": "../../../static/images/delect.png",
      "eventid": '0'
    },
    on: {
      "click": _vm.delectShop
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "addBankCard",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.addBankCard
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "addBankCardRight"
  }, [_c('span', [_vm._v("更换银行卡")]), _vm._v(" "), _c('van-icon', {
    staticClass: "arrow",
    attrs: {
      "name": "arrow",
      "color": "#8E8E8E",
      "size": "15px",
      "mpcomid": '1'
    }
  })], 1)])]), _vm._v(" "), _c('van-popup', {
    attrs: {
      "z-index": "1000",
      "show": _vm.delectShow,
      "close-on-click-overlay": "false",
      "close": _vm.onClose,
      "mpcomid": '2'
    }
  }, [_c('div', {
    staticClass: "delectPopup"
  }, [_c('div', {
    staticClass: "delectTitle"
  }, [_c('img', {
    attrs: {
      "src": "../../../static/images/warn.png"
    }
  }), _vm._v(" "), _c('span', [_vm._v("确定要删除银行卡？")])]), _vm._v(" "), _c('div', {
    staticClass: "delectContent"
  }, [_vm._v("删除银行卡后您将无法提现哦！")]), _vm._v(" "), _c('div', {
    staticClass: "delectBtn"
  }, [_c('div', {
    staticClass: "delectLeftBtn",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.sureDelectBank
    }
  }, [_vm._v("删除银行卡")]), _vm._v(" "), _c('div', {
    staticClass: "delectRightBtn",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.addBankCard
    }
  }, [_vm._v("更换银行卡")])]), _vm._v(" "), _c('img', {
    staticClass: "closeDelect",
    attrs: {
      "src": "../../../static/images/wrong.png",
      "eventid": '5'
    },
    on: {
      "click": _vm.onClose
    }
  })])]), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '3'
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "plus"
  }, [_c('img', {
    attrs: {
      "src": "../../../static/images/changeBank.png"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1af1ad7a", esExports)
  }
}

/***/ })

},[220]);