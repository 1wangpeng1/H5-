require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonp([6],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_changeTemplate_vue__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_efaabb1a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_changeTemplate_vue__ = __webpack_require__(134);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(132)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-efaabb1a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_changeTemplate_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_efaabb1a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_changeTemplate_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\shopping\\openShopping\\changeTemplate.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] changeTemplate.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-efaabb1a", Component.options)
  } else {
    hotAPI.reload("data-v-efaabb1a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 132:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 133:
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
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'changeTemplate',

  data: function data() {
    return {
      editTemplate: false,
      // 是否是第一次
      templateIndex: 0,
      // 选中哪一个模板
      openShoppingMsg: {},
      // 开花店的信息（名字、宣传语）
      templateImg: [] // templateImg: [require('../../../../static/images/peoShopHome.png'), require('../../../../static/images/peoShopHome.png'), require('../../../../static/images/peoShopHome.png'), require('../../../../static/images/peoShopHome.png')]

    };
  },
  onLoad: function onLoad() {
    var that = this;
    console.log(that.$route.query.editTemplate); // 获取背景图

    that.getShopBackground(); // 是否是第一次来选模板 true第二次 即修改

    that.editTemplate = that.$route.query.editTemplate;
    that.openShoppingMsg = JSON.parse(that.$route.query.openShoppingMsg);
  },


  methods: {
    changeImg: function changeImg(index) {
      console.log(index);
      this.templateIndex = index; // 传给后台大图

      console.log(this.templateImg);
      console.log(this.templateImg[index].big_url);
      this.openShoppingMsg.sureTemplateImg = this.templateImg[index].big_url;
      console.log(this.openShoppingMsg);
    },
    openShopBtn: function openShopBtn() {
      var _this = this;

      console.log(this.openShoppingMsg);
      var that = this;
      that.$httpWX.post({
        url: '/store/save/info',
        data: {
          background: that.openShoppingMsg.sureTemplateImg,
          detail: that.openShoppingMsg.detail,
          headPic: that.openShoppingMsg.pic,
          id: that.openShoppingMsg.id,
          // 店铺ID  新添ID为空 修改ID需有值
          pid: '',
          // 上级店铺ID
          storeName: that.openShoppingMsg.storeName
        },
        header: that.globalData.Token
      }).then(function (res) {
        console.log(res);
        _this.$router.replace({
          path: '/pages/shopping/shopHome',
          query: {
            shopHomeId: res.data.id
          }
        });
      });
    },
    getShopBackground: function getShopBackground() {
      var _this2 = this;

      var that = this;
      that.$httpWX.get({
        url: '/store/get/background',
        header: that.globalData.Token
      }).then(function (res) {
        console.log(res);
        that.templateImg = res.data;
        console.log(that.templateImg);
        _this2.openShoppingMsg.sureTemplateImg = _this2.templateImg[0].big_url;
        console.log(that.openShoppingMsg);

        if (that.editTemplate === true || that.editTemplate === 'true') {
          console.log(that.$route.query.templateClassify);

          for (var i = 0; i < that.templateImg.length; i++) {
            if (that.templateImg[i].big_url === that.$route.query.templateClassify) {
              that.templateIndex = i;
              console.log(that.templateIndex);
            }
          }
        }
      });
    }
  }
});

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "changeTips"
  }, [_vm._v("为花店选一个装饰风格吧~")]), _vm._v(" "), _c('div', {
    staticClass: "templateImg"
  }, _vm._l((_vm.templateImg), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "templateImgLi",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.changeImg(index)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": item.small_url
      }
    }), _vm._v(" "), _c('div', {
      class: _vm.templateIndex === index ? 'templateImgYes' : 'templateImgNo'
    })])
  })), _vm._v(" "), _c('div', {
    staticClass: "openShopBtn"
  }, [(_vm.editTemplate === 'true') ? _c('div', {
    staticClass: "editBtn",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.openShopBtn
    }
  }, [_vm._v("确认")]) : _c('img', {
    attrs: {
      "src": "../../../../static/images/openShopBtn.png",
      "eventid": '1'
    },
    on: {
      "click": _vm.openShopBtn
    }
  })])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-efaabb1a", esExports)
  }
}

/***/ })

},[211]);