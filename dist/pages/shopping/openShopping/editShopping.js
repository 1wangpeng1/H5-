require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonp([5],{

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_editShopping_vue__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_32c3980a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_editShopping_vue__ = __webpack_require__(130);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(128)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-32c3980a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_editShopping_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_32c3980a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_editShopping_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\shopping\\openShopping\\editShopping.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] editShopping.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-32c3980a", Component.options)
  } else {
    hotAPI.reload("data-v-32c3980a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 128:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vant_weapp_dist_toast_toast__ = __webpack_require__(9);

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
  name: 'editShopping',

  data: function data() {
    return {
      userInfo: '',
      openShopping: false,
      // 是否是首次进来填写 true首次  false修改
      // openShoppingMsg: {}
      // openShoppingMsg: {shoppingName: '', shoppingDetail: '', shoperAvatar: '', shoperTemplate: ''}
      openShoppingMsg: {
        storeName: '',
        detail: '',
        pic: '',
        background: ''
      }
    };
  },
  onLoad: function onLoad() {
    this.userInfo = this.globalData.userInfo; // 全局变量

    console.log('that.userInfo' + this.userInfo);
    this.openShoppingMsg.pic = this.userInfo.avatarUrl;
    this.openShopping = this.$route.query.openShopping;
    console.log(this.openShopping); // 修改店铺信息数据

    if (this.openShopping === false || this.openShopping === 'false') {
      console.log('修改店铺信息');
      this.openShoppingMsg = JSON.parse(this.$route.query.changeShoppingMsg);
      this.openShoppingMsg.background = this.openShoppingMsg.background;
      this.openShoppingMsg.pic = this.openShoppingMsg.pic;
    }

    console.log(this.openShoppingMsg);
  },


  methods: {
    changeShoppingName: function changeShoppingName(event) {
      this.openShoppingMsg.storeName = event.mp.detail;
    },
    changeShoppingDetail: function changeShoppingDetail(event) {
      this.openShoppingMsg.detail = event.mp.detail;
    },
    changeTemplate: function changeTemplate() {
      var that = this;
      console.log(that.openShoppingMsg.storeName);

      if (that.openShoppingMsg.storeName === '') {
        __WEBPACK_IMPORTED_MODULE_1_vant_weapp_dist_toast_toast__["a" /* default */].fail('请先填写花店名字');
      } else if (that.openShoppingMsg.storeName.length > 6) {
        __WEBPACK_IMPORTED_MODULE_1_vant_weapp_dist_toast_toast__["a" /* default */].fail('花店名字个数需少于7个字');
      } else if (that.openShoppingMsg.detail.length > 18) {
        __WEBPACK_IMPORTED_MODULE_1_vant_weapp_dist_toast_toast__["a" /* default */].fail('宣传语字数需少于18个字');
      } else {
        console.log(that.openShoppingMsg);
        var openShoppingMsg = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(that.openShoppingMsg);
        this.$router.replace({
          path: '/pages/shopping/openShopping/changeTemplate',
          query: {
            openShoppingMsg: openShoppingMsg
          }
        });
      }
    },
    changeAvatar: function changeAvatar() {
      console.log('修改头像');
      var that = this;
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],

        success: function success(res) {
          // tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths;
          console.log(tempFilePaths);
          that.openShoppingMsg.pic = tempFilePaths[0];
        },
        fail: function fail(res) {
          console.log(res);
        }
      });
    },
    modifyTemplate: function modifyTemplate() {
      var that = this;
      console.log(that.openShoppingMsg.storeName);

      if (that.openShoppingMsg.storeName === '') {
        __WEBPACK_IMPORTED_MODULE_1_vant_weapp_dist_toast_toast__["a" /* default */].fail('请先填写花店名字');
      } else if (that.openShoppingMsg.storeName.length > 6) {
        __WEBPACK_IMPORTED_MODULE_1_vant_weapp_dist_toast_toast__["a" /* default */].fail('花店名字个数需少于7个字');
      } else if (that.openShoppingMsg.detail.length > 18) {
        __WEBPACK_IMPORTED_MODULE_1_vant_weapp_dist_toast_toast__["a" /* default */].fail('宣传语字数需少于18个字');
      } else {
        var openShoppingMsg = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.openShoppingMsg);
        this.$router.replace({
          path: '/pages/shopping/openShopping/changeTemplate',
          query: {
            templateClassify: this.openShoppingMsg.background,
            openShoppingMsg: openShoppingMsg,
            editTemplate: 'true'
          }
        });
      }
    }
  }
});

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pageBg"
  }, [_c('div', {
    staticClass: "shoppingAvatar"
  }, [_c('div', {
    staticClass: "shoppingAvatarTitle"
  }, [_vm._v("花店头像")]), _vm._v(" "), _c('div', {
    staticClass: "shoppingAvatarUrl",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.changeAvatar
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.openShoppingMsg.pic
    }
  }), _vm._v(" "), _c('span', [_vm._v(">")])])]), _vm._v(" "), _c('div', {
    staticClass: "shoppingMsg"
  }, [_c('van-cell-group', {
    attrs: {
      "mpcomid": '2'
    }
  }, [_c('van-field', {
    staticClass: "shoppingName",
    attrs: {
      "value": _vm.openShoppingMsg.storeName,
      "placeholder": "花店名称",
      "eventid": '1',
      "mpcomid": '0'
    },
    on: {
      "change": _vm.changeShoppingName
    }
  }), _vm._v(" "), _c('van-field', {
    staticClass: "shoppingDetail",
    attrs: {
      "value": _vm.openShoppingMsg.detail,
      "type": "textarea",
      "placeholder": "给你的花店写一小段宣传语吧～",
      "eventid": '2',
      "mpcomid": '1'
    },
    on: {
      "change": _vm.changeShoppingDetail
    }
  })], 1)], 1), _vm._v(" "), (_vm.openShopping === 'true') ? _c('div', {
    staticClass: "selectTemplate"
  }, [_c('img', {
    attrs: {
      "src": "../../../../static/images/templateBtn.png",
      "eventid": '3'
    },
    on: {
      "click": _vm.changeTemplate
    }
  })]) : _c('div', {
    staticClass: "shoppingTemplate"
  }, [_c('div', {
    staticClass: "shoppingTemplateTitle"
  }, [_vm._v("选择模板")]), _vm._v(" "), _c('div', {
    staticClass: "shoppingTemplateUrl",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.modifyTemplate
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.openShoppingMsg.background
    }
  }), _vm._v(" "), _c('span', [_vm._v(">")])])]), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '3'
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
     require("vue-hot-reload-api").rerender("data-v-32c3980a", esExports)
  }
}

/***/ })

},[210]);