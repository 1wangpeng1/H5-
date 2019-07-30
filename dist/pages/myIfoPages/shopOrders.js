require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonp([8],{

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_shopOrders_vue__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3df2aaee_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_shopOrders_vue__ = __webpack_require__(185);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(180)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3df2aaee"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_shopOrders_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3df2aaee_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_shopOrders_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\myIfoPages\\shopOrders.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] shopOrders.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3df2aaee", Component.options)
  } else {
    hotAPI.reload("data-v-3df2aaee", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 180:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_orderList__ = __webpack_require__(59);
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
  name: 'shopOrders',

  data: function data() {
    return {
      /* eslint-disable */
      tabActive: '',
      // tab标签显示位置
      status: '',
      // 返回值 订单状态，0已取消，1待付款，2待发货，3待收货，4已完成，5全部
      pageIndex: 1,
      tabTitle: ['全部', '待付款', '待发货', '待收货', '已完成'],
      allOrders: [{
        "id": 14,
        "orderNo": "20190530376738",
        "storeId": 4,
        "orderMoney": 1500,
        "status": 4,
        "payMoney": 1500,
        "storeName": "海角弯",
        "goodsNum": 0,
        "items": [{
          "pid": 1,
          "pname": "小盆绿萝",
          "pic": "http://flower.zghuahui.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190416091828.png",
          "num": 100,
          "sumMoney": 1500,
          "retailPrice": 15,
          'brief': '沙发上的股份属于麒麟叶属植物，其缠绕性强， 气根发达，可以水培种可以水培种可以水培种就流口水放假啊',
          "price": 10
        }, {
          "pid": 2,
          "pname": "小盆绿萝3",
          "pic": "http://flower.zghuahui.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190416091828.png",
          "num": 10,
          "sumMoney": 150,
          "retailPrice": 15,
          'brief': '沙发上的股份属于麒麟叶属植物，其缠绕性强， 气根发达，可以水培种可以水培种可以水培种就流口水放假啊',
          "price": 10
        }]
      }, {
        "id": 13,
        "orderNo": "20190530415665",
        "storeId": 4,
        "orderMoney": 1500,
        "status": 4,
        "payMoney": 1500,
        "storeName": "海角弯",
        "goodsNum": 0,
        "items": [{
          "pid": 1,
          "pname": "小盆绿萝",
          "pic": "http://flower.zghuahui.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190416091828.png",
          "num": 100,
          "sumMoney": 1500,
          "retailPrice": 15,
          'brief': '沙发上的股份属于麒麟叶属植物，其缠绕性强， 气根发达，可以水培种可以水培种可以水培种就流口水放假啊',
          "price": 10
        }]
      }]
    };
  },
  onLoad: function onLoad() {
    var that = this;
    console.log(that.$route.query.status);
    this.status = that.$route.query.status;

    switch (that.status) {
      case '5':
        that.tabActive = 0;
        break;

      case '4':
        that.tabActive = 4;
        break;

      case '3':
        that.tabActive = 3;
        break;

      case '2':
        that.tabActive = 2;
        break;

      case '1':
        that.tabActive = 1;
        break;
    }

    console.log(that.tabActive);
    that.getOrderList();
  },


  components: {
    OrderList: __WEBPACK_IMPORTED_MODULE_0__components_orderList__["a" /* default */]
  },
  methods: {
    tabActiveChange: function tabActiveChange(e) {
      console.log(e.mp.detail.index);
      this.status = e.mp.detail.index;
      this.getOrderList();
    },
    handleContact: function handleContact(e) {
      console.log(e.path);
      console.log(e.query);
    },
    getOrderList: function getOrderList() {
      var that = this;
      that.$httpWX.post({
        url: '/order/store/list',
        data: {
          status: that.status,
          current: that.pageIndex,
          // 当前页
          size: 10
        },
        header: that.globalData.Token
      }).then(function (res) {
        console.log(res);
      });
    }
  }
});

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "shopOrdersBg"
  }, [_c('van-tabs', {
    attrs: {
      "active": _vm.tabActive,
      "swipe-threshold": 5,
      "color": "#7C8B71",
      "sticky": "true",
      "border": false,
      "eventid": '0',
      "mpcomid": '2'
    },
    on: {
      "change": _vm.tabActiveChange
    }
  }, _vm._l((_vm.tabTitle), function(item, index) {
    return _c('van-tab', {
      key: index,
      attrs: {
        "title": item,
        "mpcomid": '1_' + index
      }
    }, _vm._l((_vm.allOrders), function(item, index1) {
      return _c('OrderList', {
        key: index1,
        attrs: {
          "item": item,
          "list-type": "shopOrders",
          "mpcomid": '0_' + index + '-' + index1
        }
      })
    }))
  })), _vm._v(" "), _c('div', {
    staticClass: "contact"
  }, [_c('button', {
    attrs: {
      "open-type": "contact",
      "eventid": '1'
    },
    on: {
      "contact": _vm.handleContact
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
     require("vue-hot-reload-api").rerender("data-v-3df2aaee", esExports)
  }
}

/***/ })

},[224]);