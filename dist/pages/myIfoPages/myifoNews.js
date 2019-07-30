require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonp([10],{

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_myifoNews_vue__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6fccedca_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_myifoNews_vue__ = __webpack_require__(193);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(191)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6fccedca"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_myifoNews_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6fccedca_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_myifoNews_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\myIfoPages\\myifoNews.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] myifoNews.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6fccedca", Component.options)
  } else {
    hotAPI.reload("data-v-6fccedca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 191:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 192:
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
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'myifoNews',

  data: function data() {
    return {
      newsList: [{
        title: '氧化大全1',
        time: '2019-12-28',
        id: 1
      }, {
        title: '氧化大全2',
        time: '2019-12-28',
        id: 2
      }, {
        title: '氧化大全3',
        time: '2019-12-28',
        id: 3
      }]
    };
  },
  onLoad: function onLoad() {
    this.getNewsList();
  },


  methods: {
    getNewsList: function getNewsList() {
      var that = this;
      that.$httpWX.post({
        url: '/message/list',
        data: {
          current: 1,
          size: 10
        },
        header: that.globalData.Token
      }).then(function (res) {
        console.log(res); // that.newsList = res.data.records
        // console.log(that.newsList)
      });
    }
  }
});

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "newsList myifoSet"
  }, [_c('van-cell-group', {
    attrs: {
      "mpcomid": '2'
    }
  }, _vm._l((_vm.newsList), function(item, index) {
    return _c('van-cell', {
      key: index,
      attrs: {
        "title": item.title,
        "value": item.time,
        "url": '/pages/myIfoPages/newsDetail?newsId=' + item.id,
        "mpcomid": '1_' + index
      }
    }, [_c('van-icon', {
      staticClass: "custom-icon",
      attrs: {
        "mpcomid": '0_' + index
      },
      slot: "icon"
    }), _vm._v(" "), _c('div', {
      slot: "icon"
    }, [_c('img', {
      staticClass: "cellImg",
      attrs: {
        "src": "../../../static/images/myifoNews.png"
      }
    })])], 1)
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6fccedca", esExports)
  }
}

/***/ })

},[226]);