require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonp([13],{

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_editBankCard_vue__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5dbff4b8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_editBankCard_vue__ = __webpack_require__(167);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(165)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5dbff4b8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_editBankCard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5dbff4b8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_editBankCard_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\myIfoPages\\editBankCard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] editBankCard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5dbff4b8", Component.options)
  } else {
    hotAPI.reload("data-v-5dbff4b8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 165:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 166:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'editBankCard',

  data: function data() {
    return {
      bankCardMsg: {
        name: '',
        cardId: '',
        bankId: '',
        tel: ''
      }
    };
  },
  onShow: function onShow() {
    this.bankCardMsg = {
      name: '',
      cardId: '',
      bankId: '',
      tel: ''
    };
  },


  methods: {
    changeName: function changeName(event) {
      this.bankCardMsg.name = event.mp.detail;
    },
    changeCardId: function changeCardId(event) {
      this.bankCardMsg.cardId = event.mp.detail;
    },
    changeBankId: function changeBankId(event) {
      this.bankCardMsg.bankId = event.mp.detail;
    },
    changeTel: function changeTel(event) {
      this.bankCardMsg.tel = event.mp.detail;
    },
    addBankCardBtn: function addBankCardBtn() {
      var _this = this;

      console.log(this.bankCardMsg);

      if (this.bankCardMsg.name === '') {
        __WEBPACK_IMPORTED_MODULE_0_vant_weapp_dist_toast_toast__["a" /* default */].fail('请正确输入名字');
      } else if (this.bankCardMsg.cardId === '') {
        __WEBPACK_IMPORTED_MODULE_0_vant_weapp_dist_toast_toast__["a" /* default */].fail('请输入身份证号');
      } else if (this.bankCardMsg.bankId === '') {
        __WEBPACK_IMPORTED_MODULE_0_vant_weapp_dist_toast_toast__["a" /* default */].fail('请输入银行卡号');
      } else if (this.bankCardMsg.tel === '' || this.bankCardMsg.tel.length < 11) {
        __WEBPACK_IMPORTED_MODULE_0_vant_weapp_dist_toast_toast__["a" /* default */].fail('请正确输入手机号');
      } else {
        var that = this;
        that.$httpWX.post({
          url: '/bank/save',
          data: {
            cartNo: that.bankCardMsg.bankId,
            idNo: that.bankCardMsg.cardId,
            name: that.bankCardMsg.name,
            phone: that.bankCardMsg.tel
          },
          header: that.globalData.Token
        }).then(function (res) {
          console.log(res);

          if (res.code === 200) {
            __WEBPACK_IMPORTED_MODULE_0_vant_weapp_dist_toast_toast__["a" /* default */].success('添加成功');
            _this.$router.replace({
              path: '/pages/myIfoPages/bankCard'
            });
          } else {
            __WEBPACK_IMPORTED_MODULE_0_vant_weapp_dist_toast_toast__["a" /* default */].fail('输入信息不正确，请确认后添加！');
          }
        });
      } // this.$router.replace({ path: '/pages/myIfoPages/bankCard' })
      // this.$router.back()返回界面不会加载
    }
  }
});

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pagesBg"
  }, [_c('div', {
    staticClass: "bankCardCell"
  }, [_c('van-cell-group', {
    attrs: {
      "mpcomid": '4'
    }
  }, [_c('van-field', {
    attrs: {
      "value": _vm.bankCardMsg.name,
      "label": "持卡人：",
      "title-width": "65px",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "change": _vm.changeName
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.bankCardMsg.cardId,
      "label": "身份证号：",
      "type": "idcard",
      "title-width": "80px",
      "eventid": '1',
      "mpcomid": '1'
    },
    on: {
      "change": _vm.changeCardId
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.bankCardMsg.bankId,
      "type": "number",
      "label": "银行卡号：",
      "title-width": "80px",
      "eventid": '2',
      "mpcomid": '2'
    },
    on: {
      "change": _vm.changeBankId
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.bankCardMsg.tel,
      "label": "手机号：",
      "title-width": "65px",
      "type": "number",
      "placeholder": "（预留银行的手机号码）",
      "placeholder-style": "color: #999;font-size=16px;height: 50px;line-height: 50px;",
      "eventid": '3',
      "mpcomid": '3'
    },
    on: {
      "change": _vm.changeTel
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "addBankTips"
  }, [_vm._v("提示：该银行卡将用于您的账户提现，请填写正确信息")])], 1), _vm._v(" "), _c('div', {
    staticClass: "addBankCardBtn",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.addBankCardBtn
    }
  }, [_vm._v("确认添加")]), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '5'
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
     require("vue-hot-reload-api").rerender("data-v-5dbff4b8", esExports)
  }
}

/***/ })

},[221]);