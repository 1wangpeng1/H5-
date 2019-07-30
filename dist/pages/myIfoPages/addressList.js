require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonp([15],{

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_addressList_vue__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_ad78c9d8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_addressList_vue__ = __webpack_require__(171);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(169)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ad78c9d8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_addressList_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_ad78c9d8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_addressList_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\myIfoPages\\addressList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] addressList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ad78c9d8", Component.options)
  } else {
    hotAPI.reload("data-v-ad78c9d8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 169:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  name: 'addressList',

  data: function data() {
    return {
      addressList: [{
        name: '张三',
        tel: '1761510082',
        addressDetail: '北京 北京市 昌平区 龙泽苑街道 首开智慧社 东区育知东路',
        type: 1
      }, {
        name: '张三',
        tel: '1761510082',
        addressDetail: '北京 北京市 昌平区 龙泽苑街道 首开智慧社 东区育知东路',
        type: 2
      }, {
        name: '张三',
        tel: '1761510082',
        addressDetail: '北京 北京市 昌平区 龙泽苑街道 首开智慧社 东区育知东路',
        type: 1
      }, {
        name: '张三',
        tel: '1761510082',
        addressDetail: '北京 北京市 昌平区 龙泽苑街道 首开智慧社 东区育知东路',
        type: 1
      }]
    };
  }
});

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._l((_vm.addressList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "addressDetailLi"
    }, [_c('div', {
      staticClass: "addressDetailMsg"
    }, [_c('div', [_c('span', {
      staticClass: "addressName"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('span', {
      staticClass: "addressTel"
    }, [_vm._v(_vm._s(item.tel))])]), _vm._v(" "), _c('div', [(item.type === 2) ? _c('span', {
      staticClass: "addressDefault"
    }, [_vm._v("默认")]) : _vm._e(), _vm._v(" "), _c('span', {
      staticClass: "addressDetail"
    }, [_vm._v(_vm._s(item.addressDetail))])])]), _vm._v(" "), _c('div', {
      staticClass: "editAddress"
    }, [_vm._v("编辑")])])
  }), _vm._v(" "), _c('navigator', {
    staticClass: "addAddress",
    attrs: {
      "url": "/pages/myIfoPages/editAddress",
      "hover-class": "none"
    }
  }, [_c('span', {
    staticClass: "plus"
  }, [_vm._v("+")]), _vm._v(" 添加地址\n  ")])], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ad78c9d8", esExports)
  }
}

/***/ })

},[222]);