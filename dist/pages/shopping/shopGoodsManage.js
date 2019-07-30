require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonp([4],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_shopGoodsManage_vue__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_69aecad1_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_shopGoodsManage_vue__ = __webpack_require__(126);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(124)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-69aecad1"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_shopGoodsManage_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_69aecad1_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_shopGoodsManage_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\shopping\\shopGoodsManage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] shopGoodsManage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-69aecad1", Component.options)
  } else {
    hotAPI.reload("data-v-69aecad1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 124:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vant_weapp_dist_toast_toast__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_goodsList__ = __webpack_require__(33);
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
  name: 'shopGoodsManage',

  data: function data() {
    return {
      tabOne: true,
      tabTwo: false,
      tabThree: false,
      marginBottom: true,
      scrollTop: 0,
      shopHomeId: '',
      // 店铺ID
      cateId: 1,
      // 分类ID
      pageIndex: 1,
      // 当前页数
      loadingNow: 1,
      // 自定义变量，防止多次滑动加载
      loadingFinish: false,
      // 数据加载完全
      tabOneImg: {
        normal: __webpack_require__(35),
        active: __webpack_require__(36)
      },
      tabTwoImg: {
        normal: __webpack_require__(37),
        active: __webpack_require__(38)
      },
      tabThreeImg: {
        normal: __webpack_require__(39),
        active: __webpack_require__(40)
      },
      goodsList: [] // goodsList: [{goodsName: '小盆绿萝1', upOrDown: true, goodsDetail: '属于麒麟叶属植物，其缠绕性强，气根发达，可以水培种植。', nowPrice: '217', beforePrice: '40', img: require('../../../static/test/goodsImg.png')}, {goodsName: '小盆绿萝2', upOrDown: false, goodsDetail: '属于麒麟叶属植物，其缠绕性强，属于麒麟叶属植物，其缠绕性强，气根发可以水培种植。', nowPrice: '21', beforePrice: '40', img: '/../../static/test/goodsImg.png'}, {goodsName: '小盆绿萝', goodsDetail: '属于麒麟叶属植物，其缠绕性强，气根发 达，可以水培种植。', nowPrice: '2', beforePrice: '40', img: '/../../static/test/goodsImg.png'},
      //   {goodsName: '小盆绿萝1', upOrDown: true, goodsDetail: '属于麒麟叶属植物，其缠绕性强，气根发达，可以水培种植。', nowPrice: '10', beforePrice: '40', img: require('../../../static/test/goodsImg.png')}, {goodsName: '小盆绿萝2', upOrDown: false, goodsDetail: '属于麒麟叶属植物，其缠绕性强，属于麒麟叶属植物，其缠绕性强，气根发可以水培种植。', nowPrice: '21', beforePrice: '40', img: '/../../static/test/goodsImg.png'}, {goodsName: '小盆绿萝', goodsDetail: '属于麒麟叶属植物，其缠绕性强，气根发 达，可以水培种植。', nowPrice: '2', beforePrice: '40', img: '/../../static/test/goodsImg.png'}]

    };
  },


  components: {
    GoodsList: __WEBPACK_IMPORTED_MODULE_1__components_goodsList__["a" /* default */]
  },

  onLoad: function onLoad() {
    console.log(this.$route.query.shopHomeId);
    this.shopHomeId = this.$route.query.shopHomeId;
    this.goodsList = [];
    this.getManageGoodsList();
  },


  methods: {
    tabOneClick: function tabOneClick() {
      if (this.tabOne === false) {
        this.tabOne = !this.tabOne;
        this.tabTwo = false;
        this.tabThree = false;
        this.marginBottom = true;
      }

      this.cateId = 1;
      this.pageIndex = 1;
      this.loadingFinish = false;
      this.goodsList = []; // 请求数据

      this.getManageGoodsList(); // 回到顶部

      this.goTop();
    },
    tabTwoClick: function tabTwoClick() {
      if (this.tabTwo === false) {
        this.tabTwo = !this.tabTwo;
        this.tabOne = false;
        this.tabThree = false;
        this.marginBottom = false;
      }

      this.cateId = 2;
      this.pageIndex = 1;
      this.loadingFinish = false;
      this.goodsList = []; // 请求数据

      this.getManageGoodsList(); // 回到顶部

      this.goTop();
    },
    tabThreeClick: function tabThreeClick() {
      if (this.tabThree === false) {
        this.tabThree = !this.tabThree;
        this.tabTwo = false;
        this.tabOne = false;
        this.marginBottom = false;
      }

      this.cateId = 3;
      this.pageIndex = 1;
      this.loadingFinish = false;
      this.goodsList = []; // 请求数据

      this.getManageGoodsList(); // 回到顶部

      this.goTop();
    },
    upProduct: function upProduct(item) {
      var _this = this;

      console.log('上架');
      console.log(item);
      var that = this;
      that.$httpWX.post({
        url: '/store/upper/shelf/product',
        data: {
          productId: item.id,
          storeId: that.shopHomeId
        },
        header: that.globalData.Token
      }).then(function (res) {
        console.log(res);
        __WEBPACK_IMPORTED_MODULE_0_vant_weapp_dist_toast_toast__["a" /* default */].success('上架成功');
        _this.pageIndex = 1;
        _this.loadingFinish = false;
        _this.goodsList = []; // 刷新一下数据

        that.getManageGoodsList();
      });
    },
    downProduct: function downProduct(item) {
      var _this2 = this;

      console.log('下架');
      console.log(item);
      var that = this;
      that.$httpWX.post({
        url: '/store/lower/shelf/product',
        data: {
          productId: item.id,
          storeId: that.shopHomeId
        },
        header: that.globalData.Token
      }).then(function (res) {
        console.log(res);
        __WEBPACK_IMPORTED_MODULE_0_vant_weapp_dist_toast_toast__["a" /* default */].success('下架成功');
        _this2.pageIndex = 1;
        _this2.loadingFinish = false;
        _this2.goodsList = []; // 刷新一下数据

        that.getManageGoodsList();
      });
    },
    getManageGoodsList: function getManageGoodsList() {
      var that = this;
      that.$httpWX.post({
        url: '/store/manager/product/list',
        data: {
          storeId: that.shopHomeId,
          // 店铺ID
          cateId: that.cateId,
          // 分类ID（1-2-3）
          current: that.pageIndex,
          // 当前页
          size: 10
        },
        header: that.globalData.Token // header: ''

      }).then(function (res) {
        console.log(res);
        that.loadingNow = 1; // 赋值

        that.goodsList = that.goodsList.concat(res.data.records);
        console.log(that.goodsList);

        if (res.data.records.length < 10) {
          that.loadingFinish = true;
        }
      });
    },
    downLoad: function downLoad() {
      var that = this;
      console.log('sssssssssss');

      if (that.loadingNow === 0) {
        // 判断是否加载完，如若加载完值变为1，未加载完时还是0，return出去不执行bindDownLoad整个函数
        return;
      }

      that.pageIndex = that.pageIndex + 1; // 当前页+1

      console.log('===========上拉刷新pageNo' + that.pageIndex); // 请求后台

      that.loadingNow = 0; // 赋值

      that.getManageGoodsList();
    },
    scroll: function scroll(e) {
      var that = this;
      that.scrollTop = e.mp.detail.scrollTop;

      if (e.mp.detail.scrollTop >= that.top) {
        that.fixtop = true;
      } else {
        that.fixtop = false;
      }
    },
    goTop: function goTop() {
      this.scrollTop = 0;
    }
  }
});

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('scroll-view', {
    staticStyle: {
      "height": "100vh"
    },
    attrs: {
      "scroll-y": "",
      "scroll-top": _vm.scrollTop,
      "eventid": '4'
    },
    on: {
      "scrolltolower": _vm.downLoad,
      "scroll": _vm.scroll
    }
  }, [_c('div', {
    staticClass: "indexTab"
  }, [_c('div', {
    staticClass: "tabOne",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.tabOneClick
    }
  }, [_c('img', {
    staticClass: "tabOneHot",
    style: ({
      'margin-bottom': _vm.marginBottom ? '10rpx' : '0rpx'
    }),
    attrs: {
      "src": "../../../static/images/tabOne1.png"
    }
  }), _vm._v(" "), _c('img', {
    class: _vm.tabOne ? 'tabOn' : 'tabHeight',
    attrs: {
      "src": _vm.tabOne ? _vm.tabOneImg.active : _vm.tabOneImg.normal
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "tabTwo",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.tabTwoClick
    }
  }, [_c('img', {
    class: _vm.tabTwo ? 'tabOn' : 'tabHeight',
    attrs: {
      "src": _vm.tabTwo ? _vm.tabTwoImg.active : _vm.tabTwoImg.normal
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "tabThree",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.tabThreeClick
    }
  }, [_c('img', {
    class: _vm.tabThree ? 'tabOn' : 'tabHeight',
    attrs: {
      "src": _vm.tabThree ? _vm.tabThreeImg.active : _vm.tabThreeImg.normal
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "goodsListDiv"
  }, [_vm._l((_vm.goodsList), function(item, index) {
    return _c('GoodsList', {
      key: index,
      attrs: {
        "goodsList": item,
        "list-type": "goodsManage",
        "eventid": '3_' + index,
        "mpcomid": '0_' + index
      },
      on: {
        "checkUp": _vm.upProduct,
        "checkDown": _vm.downProduct
      }
    })
  }), _vm._v(" "), (_vm.loadingFinish) ? _c('div', {
    staticClass: "loadingFinish"
  }, [_vm._v("—— 数据已全部加载 ——")]) : _vm._e()], 2), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '1'
    }
  })], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-69aecad1", esExports)
  }
}

/***/ })

},[209]);