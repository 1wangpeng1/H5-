require("../common/manifest.js")
require("../common/vendor.js")
global.webpackJsonp([20],{

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_cardImgTwo_vue__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_15c3866c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_cardImgTwo_vue__ = __webpack_require__(205);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(203)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-15c3866c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_cardImgTwo_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_15c3866c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_cardImgTwo_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\cardImgTwo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] cardImgTwo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-15c3866c", Component.options)
  } else {
    hotAPI.reload("data-v-15c3866c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 203:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__palette_card__ = __webpack_require__(22);
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

var card = new __WEBPACK_IMPORTED_MODULE_0__palette_card__["a" /* default */]();
var userInfo = {
  avatar: 'https://qhyxpicoss.kujiale.com/r/2017/12/04/L3D123I45VHNYULVSAEYCV3P3X6888_3200x2400.jpg@!70q'
};
var template = card.do(userInfo);
var customStyle = 'margin:0rpx 75rpx;';
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      shareImg: '',
      customStyle: customStyle,
      template: template
    };
  },


  methods: {
    save: function save() {
      console.log('on save click'); // shareImg 得到的图片

      var that = this; // 获取相册授权

      wx.getSetting({
        success: function success(res) {
          if (!res.authSetting['scope.writePhotosAlbum']) {
            wx.authorize({
              scope: 'scope.writePhotosAlbum',

              success: function success() {
                console.log('授权成功');
                wx.saveImageToPhotosAlbum({
                  filePath: that.shareImg,

                  success: function success(res) {
                    console.log('保存图片成功');
                    console.log(res);
                    wx.showToast({
                      title: '保存成功',
                      icon: 'success',
                      duration: 2000
                    });
                  }
                });
              }
            });
          } else {
            // 用户已经授权过了
            wx.saveImageToPhotosAlbum({
              filePath: that.shareImg,

              success: function success(res) {
                console.log('保存图片成功');
                console.log(res);
                wx.showToast({
                  title: '保存成功',
                  icon: 'success',
                  duration: 2000
                });
              }
            });
          }
        }
      });
    },
    onImgOk: function onImgOk(e) {
      this.shareImg = e.mp.detail.path; // 两种路径是一样的

      console.log(e.mp.detail.path);
      console.log(e.target.path);
    }
  }
});

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pageBg"
  }, [_c('painter', {
    attrs: {
      "customStyle": _vm.customStyle,
      "palette": _vm.template,
      "dirty": true,
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "imgOK": _vm.onImgOk
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "functionBtn"
  }, [_c('div', {
    staticClass: "shareBtn"
  }, [_vm._v("微信好友")]), _vm._v(" "), _c('div', {
    staticClass: "saveBtn",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.save
    }
  }, [_vm._v("保存图片")])])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-15c3866c", esExports)
  }
}

/***/ })

},[229]);