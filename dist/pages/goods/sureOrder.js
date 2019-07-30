require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonp([19],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_sureOrder_vue__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_35d00e9d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_sureOrder_vue__ = __webpack_require__(143);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(141)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-35d00e9d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_sureOrder_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_35d00e9d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_sureOrder_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\goods\\sureOrder.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] sureOrder.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-35d00e9d", Component.options)
  } else {
    hotAPI.reload("data-v-35d00e9d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 141:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 142:
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
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'sureOrder',

  data: function data() {
    return {
      totlePrice: 0,
      totleNum: 0,
      remarks: '',
      // 订单备注
      inexistAddress: false,
      // 时候存在地址  false存在  true不存在
      sureOrderList: [],
      // 提交的订单数据
      sureOrderShopName: '',
      // 店铺name
      sureOrderShopId: '' // 店铺id

    };
  },
  onLoad: function onLoad() {
    this.sureOrderList = this.globalData.sureOrderList; // 数据获取

    this.sureOrderShopName = this.globalData.sureOrderShopName; // 数据获取

    this.sureOrderShopId = this.globalData.sureOrderShopId; // 数据获取

    this.totlePrice = 0;
    this.totleNum = 0;
    console.log(this.sureOrderList);

    for (var i = 0; i < this.sureOrderList.length; i++) {
      this.totlePrice += this.sureOrderList[i].price * this.sureOrderList[i].num;
      this.totleNum += this.sureOrderList[i].num;
    }
  },


  methods: {
    changeRemarks: function changeRemarks(event) {
      this.remarks = event.mp.detail;
    },
    submitBtn: function submitBtn() {
      var orderDto = {};
      orderDto.items = this.sureOrderList;
      orderDto.addressId = 1;
      orderDto.goodsNum = this.totleNum;
      orderDto.orderMoney = this.totlePrice;
      orderDto.remark = this.remarks;
      orderDto.storeId = this.sureOrderShopId;
      orderDto.storeName = this.sureOrderShopName;
      console.log(orderDto);
      var that = this;
      wx.request({
        url: 'http://192.168.0.102:9990' + '/order/create',
        method: 'POST',
        data: {
          orderDto: orderDto
        },
        header: {
          'content-type': 'application/json',
          'token': that.globalData.Token
        },
        success: function success(res) {
          if (res.data.code === 200) {
            console.log(res.data);
          } else {
            console.log(res.data.msg);
            __WEBPACK_IMPORTED_MODULE_0_vant_weapp_dist_toast_toast__["a" /* default */].fail(res.data.msg);
          }
        }
      });
    }
  }
});

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pagesBg"
  }, [(_vm.inexistAddress) ? _c('div', {
    staticClass: "addAddress"
  }, [_c('img', {
    attrs: {
      "src": "../../../static/images/addAddress.png"
    }
  }), _vm._v(" "), _c('span', [_vm._v("请选择收货地址")])]) : _c('div', {
    staticClass: "addressList"
  }, [_c('img', {
    attrs: {
      "src": "../../../static/images/addressTips.png"
    }
  }), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('div', {
    staticClass: "ordersList"
  }, [_c('div', {
    staticClass: "orderLiTitle"
  }, [_c('div', [_vm._v(_vm._s(_vm.sureOrderShopName))]), _vm._v(" "), _c('div', {
    staticClass: "orderStatus"
  }, [_vm._v("待付款")])]), _vm._v(" "), _vm._l((_vm.sureOrderList), function(i, index) {
    return _c('div', {
      key: index,
      staticClass: "orderLiGoods"
    }, [_c('img', {
      staticClass: "orderLiGoodsImg",
      attrs: {
        "src": i.listImg
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "orderLiGoodsMsg"
    }, [_c('div', {
      staticClass: "goodsMsgTop"
    }, [_c('div', {
      staticClass: "goodsName"
    }, [_vm._v(_vm._s(i.name))]), _vm._v(" "), _c('div', {
      staticClass: "goodsPrice"
    }, [_vm._v("¥" + _vm._s(i.price))])]), _vm._v(" "), _c('div', {
      staticClass: "goodsMsgBottom"
    }, [_c('div', {
      staticClass: "goodsDetail"
    }, [_vm._v(_vm._s(i.brief))]), _vm._v(" "), _c('div', {
      staticClass: "goodsNum"
    }, [_vm._v("*" + _vm._s(i.num))])])])])
  }), _vm._v(" "), _c('div', {
    staticClass: "sureOrderTips"
  }, [_c('van-cell-group', {
    attrs: {
      "mpcomid": '2'
    }
  }, [_c('van-field', {
    attrs: {
      "border": false,
      "placeholder": "快递 免邮",
      "placeholder-style": "color:#999999;",
      "label": "配送方式",
      "disabled": "",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "border": "false",
      "value": _vm.remarks,
      "placeholder": "选填",
      "placeholder-style": "color:#D3D3D3;",
      "label": "订单备注",
      "eventid": '0',
      "mpcomid": '1'
    },
    on: {
      "change": _vm.changeRemarks
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "orderLiNum"
  }, [_vm._v("共" + _vm._s(_vm.totleNum) + "件商品 合计："), _c('span', [_vm._v("￥" + _vm._s(_vm.totlePrice))])])], 2), _vm._v(" "), _c('div', {
    staticClass: "submitDiv"
  }, [_c('div', {
    staticClass: "allMoney"
  }, [_vm._v("合计："), _c('span', [_vm._v("￥" + _vm._s(_vm.totlePrice))])]), _vm._v(" "), _c('div', {
    staticClass: "submitBtn",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.submitBtn
    }
  }, [_vm._v("提交订单")])]), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '3'
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "addressListRight"
  }, [_c('div', {
    staticClass: "addressMsg"
  }, [_c('div', [_c('span', {
    staticClass: "addressName"
  }, [_vm._v("宋立夏")]), _vm._v(" "), _c('span', {
    staticClass: "addressTel"
  }, [_vm._v("1761510082")])]), _vm._v(" "), _c('div', {
    staticClass: "addressDetail"
  }, [_vm._v("北京市昌平区龙泽苑街道首开智慧社东区育知东路30号院1号楼1单元6层610室")])]), _vm._v(" "), _c('span', {
    staticClass: "arrow"
  }, [_vm._v(">")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-35d00e9d", esExports)
  }
}

/***/ })

},[213]);