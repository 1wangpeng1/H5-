require("../common/manifest.js")
require("../common/vendor.js")
global.webpackJsonp([17],{

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_myIfo_vue__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_a8bb927a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_myIfo_vue__ = __webpack_require__(151);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(149)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a8bb927a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_myIfo_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_a8bb927a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_myIfo_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\myIfo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] myIfo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a8bb927a", Component.options)
  } else {
    hotAPI.reload("data-v-a8bb927a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 149:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_myTabbar__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_CurrentPage__ = __webpack_require__(34);
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
  data: function data() {
    return {
      tabbar: {},
      userInfo: '',
      // 本地存储的头像 名字
      userMsg: '',
      // 接口返回数据
      newsNum: 9,
      // 未读消息数
      inviteShow: false,
      // 邀请规则弹框
      friendShow: false
    };
  },


  components: {
    myTabbar: __WEBPACK_IMPORTED_MODULE_0__components_myTabbar__["a" /* default */]
  },

  onLoad: function onLoad() {
    console.log('page counter onLoad');
    wx.hideTabBar();
    var that = this;
    that.tabbar = Object(__WEBPACK_IMPORTED_MODULE_1__utils_CurrentPage__["a" /* getQuery */])();
    console.log(that.tabbar);
    that.userInfo = that.globalData.userInfo; // 全局变量

    console.log('that.userInfo' + that.userInfo); // 获取用户信息

    that.getMyifoMsg();
    that.getNewsNum();
  },


  methods: {
    // 明细
    accountDetail: function accountDetail() {
      this.$router.push({
        path: '/pages/myIfoPages/accountDetail'
      });
    },


    // 提现
    moneyCash: function moneyCash() {
      this.$router.push({
        path: '/pages/myIfoPages/moneyCash'
      });
    },
    inviteBtn: function inviteBtn() {
      console.log(this.inviteShow);
      this.inviteShow = true;
    },
    friendBtn: function friendBtn() {
      console.log(this.friendShow);
      this.friendShow = true;
    },
    onClose: function onClose() {
      this.inviteShow = false;
    },
    friendClose: function friendClose() {
      this.friendShow = false;
    },


    // 获取用户信息
    getMyifoMsg: function getMyifoMsg() {
      var that = this;
      that.$httpWX.post({
        url: '/user/my',
        header: that.globalData.Token // header: ''

      }).then(function (res) {
        console.log(res);
        that.userMsg = res.data;
        console.log(that.userMsg);
      });
    },
    getNewsNum: function getNewsNum() {
      var that = this;
      that.$httpWX.post({
        url: '/message/unread/num',
        header: that.globalData.Token
      }).then(function (res) {
        console.log(res);
        that.newsNum = res.data.unreadNum;
        console.log(that.newsNum);
      });
    }
  }
});

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "myifoMsg"
  }, [_c('div', {
    staticClass: "myifoAvatar"
  }, [_c('div', {
    staticClass: "myifoAvatarMsg"
  }, [_c('img', {
    attrs: {
      "src": _vm.userInfo.avatarUrl
    }
  }), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.userInfo.nickName))])]), _vm._v(" "), _c('navigator', {
    staticClass: "myifoNews",
    attrs: {
      "url": "/pages/myIfoPages/myifoNews",
      "hover-class": "none"
    }
  }, [_c('van-icon', {
    staticClass: "#543E3E",
    attrs: {
      "name": "chat-o",
      "size": "40rpx",
      "info": _vm.newsNum,
      "mpcomid": '0'
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "myifoAccount"
  }, [_c('div', {
    staticClass: "myifoAccountDiv"
  }, [_c('div', {
    staticClass: "myifoAccountTitle"
  }, [_c('div', [_vm._v("账户余额")]), _vm._v(" "), _c('div', [_c('span', {
    staticClass: "accountMoneyNum"
  }, [_vm._v("￥" + _vm._s(_vm.userMsg.money))]), _vm._v(" "), _c('span', {
    staticClass: "accountMoneyDetail",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.accountDetail
    }
  }, [_vm._v("明细")])]), _vm._v(" "), _c('div', {
    staticClass: "accountMoneyTixian",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.moneyCash
    }
  }, [_vm._v("去提现 >")])]), _vm._v(" "), _c('div', {
    staticClass: "shopAccount"
  }, [_c('div', [_c('img', {
    staticClass: "accountImg1",
    attrs: {
      "src": "../../static/images/accountImg1.png"
    }
  }), _vm._v(" "), _c('span', [_vm._v("小店销售额：￥" + _vm._s(_vm.userMsg.storeSalesMoney))])]), _vm._v(" "), _c('div', [_c('img', {
    staticClass: "accountImg2",
    attrs: {
      "src": "../../static/images/accountImg2.png"
    }
  }), _vm._v(" "), _c('span', [_vm._v("小店的利润：￥" + _vm._s(_vm.userMsg.storeProfit))])])]), _vm._v(" "), _c('div', {
    staticClass: "friendShopAccount"
  }, [_c('div', [_c('img', {
    staticClass: "accountImg1",
    attrs: {
      "src": "../../static/images/accountImg1.png"
    }
  }), _vm._v(" "), _c('span', [_vm._v("朋友的店销售额：￥" + _vm._s(_vm.userMsg.secondSalesMoney))])]), _vm._v(" "), _c('div', [_c('img', {
    staticClass: "accountImg2",
    attrs: {
      "src": "../../static/images/accountImg2.png"
    }
  }), _vm._v(" "), _c('span', [_vm._v("朋友的店销售奖励利润：￥" + _vm._s(_vm.userMsg.secondRoyalty))])])]), _vm._v(" "), _c('div', {
    staticClass: "inviteReward"
  }, [_c('div', [_vm._v("邀请奖励："), _c('span', {
    staticClass: "rewardNum"
  }, [_vm._v("￥" + _vm._s(_vm.userMsg.recommendRoyalty))])]), _vm._v(" "), _c('div', {
    staticClass: "rewardRule",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.inviteBtn
    }
  }, [_vm._v("规则")])])])]), _vm._v(" "), (_vm.userMsg.isStore === 1) ? _c('div', {
    staticClass: "Orders shopOrders"
  }, [_c('div', {
    staticClass: "shopOrdersTitle"
  }, [_c('van-cell', {
    attrs: {
      "title": "店铺订单",
      "is-link": "",
      "url": "/pages/myIfoPages/shopOrders?status=5",
      "value": "全部订单",
      "mpcomid": '1'
    }
  })], 1), _vm._v(" "), _c('van-row', {
    staticClass: "shopOrdersClassify",
    attrs: {
      "mpcomid": '6'
    }
  }, [_c('van-col', {
    staticClass: "shopOrdersClassifyLi",
    attrs: {
      "span": "6",
      "mpcomid": '2'
    }
  }, [_c('navigator', {
    attrs: {
      "url": "/pages/myIfoPages/shopOrders?status=1",
      "hover-class": "none"
    }
  }, [_c('img', {
    attrs: {
      "src": "../../static/images/waitPay.png"
    }
  }), _vm._v(" "), _c('div', [_vm._v("待付款")])])], 1), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "6",
      "mpcomid": '3'
    }
  }, [_c('navigator', {
    attrs: {
      "url": "/pages/myIfoPages/shopOrders?status=2",
      "hover-class": "none"
    }
  }, [_c('img', {
    attrs: {
      "src": "../../static/images/waitSent.png"
    }
  }), _vm._v(" "), _c('div', [_vm._v("待发货")])])], 1), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "6",
      "mpcomid": '4'
    }
  }, [_c('navigator', {
    attrs: {
      "url": "/pages/myIfoPages/shopOrders?status=3",
      "hover-class": "none"
    }
  }, [_c('img', {
    attrs: {
      "src": "../../static/images/waitCollect.png"
    }
  }), _vm._v(" "), _c('div', [_vm._v("待收货")])])], 1), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "6",
      "mpcomid": '5'
    }
  }, [_c('navigator', {
    attrs: {
      "url": "/pages/myIfoPages/shopOrders?status=4",
      "hover-class": "none"
    }
  }, [_c('img', {
    attrs: {
      "src": "../../static/images/waitFinish.png"
    }
  }), _vm._v(" "), _c('div', [_vm._v("已完成")])])], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "Orders myifoOrders"
  }, [_c('div', {
    staticClass: "shopOrdersTitle"
  }, [_c('van-cell', {
    attrs: {
      "title": "我的订单",
      "is-link": "",
      "url": "/pages/myIfoPages/myOrders?status=5",
      "value": "全部订单",
      "mpcomid": '7'
    }
  })], 1), _vm._v(" "), _c('van-row', {
    staticClass: "shopOrdersClassify",
    attrs: {
      "mpcomid": '12'
    }
  }, [_c('van-col', {
    staticClass: "shopOrdersClassifyLi",
    attrs: {
      "span": "6",
      "mpcomid": '8'
    }
  }, [_c('navigator', {
    attrs: {
      "url": "/pages/myIfoPages/myOrders?status=1",
      "hover-class": "none"
    }
  }, [_c('img', {
    attrs: {
      "src": "../../static/images/waitPay.png"
    }
  }), _vm._v(" "), _c('div', [_vm._v("待付款")])])], 1), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "6",
      "mpcomid": '9'
    }
  }, [_c('navigator', {
    attrs: {
      "url": "/pages/myIfoPages/myOrders?status=2",
      "hover-class": "none"
    }
  }, [_c('img', {
    attrs: {
      "src": "../../static/images/waitSent.png"
    }
  }), _vm._v(" "), _c('div', [_vm._v("待发货")])])], 1), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "6",
      "mpcomid": '10'
    }
  }, [_c('navigator', {
    attrs: {
      "url": "/pages/myIfoPages/myOrders?status=3",
      "hover-class": "none"
    }
  }, [_c('img', {
    attrs: {
      "src": "../../static/images/waitCollect.png"
    }
  }), _vm._v(" "), _c('div', [_vm._v("待收货")])])], 1), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "6",
      "mpcomid": '11'
    }
  }, [_c('navigator', {
    attrs: {
      "url": "/pages/myIfoPages/myOrders?status=4",
      "hover-class": "none"
    }
  }, [_c('img', {
    attrs: {
      "src": "../../static/images/waitFinish.png"
    }
  }), _vm._v(" "), _c('div', [_vm._v("已完成")])])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "myifoSet"
  }, [_c('navigator', {
    attrs: {
      "url": "/pages/myIfoPages/bankCard",
      "hover-class": "none"
    }
  }, [_c('van-cell', {
    attrs: {
      "title": "银行卡",
      "mpcomid": '14'
    }
  }, [_c('van-icon', {
    staticClass: "custom-icon",
    attrs: {
      "mpcomid": '13'
    },
    slot: "right-icon"
  }), _vm._v(" "), _c('div', {
    slot: "right-icon"
  }, [_c('img', {
    staticClass: "cellImg0",
    attrs: {
      "src": "../../static/images/bankCard.png"
    }
  })])], 1)], 1), _vm._v(" "), _c('van-cell', {
    attrs: {
      "title": "邀请好友",
      "eventid": '3',
      "mpcomid": '16'
    },
    on: {
      "click": _vm.friendBtn
    }
  }, [_c('van-icon', {
    staticClass: "custom-icon",
    attrs: {
      "mpcomid": '15'
    },
    slot: "right-icon"
  }), _vm._v(" "), _c('div', {
    slot: "right-icon"
  }, [_c('img', {
    staticClass: "cellImg1",
    attrs: {
      "src": "../../static/images/invite.png"
    }
  })])], 1), _vm._v(" "), _c('navigator', {
    attrs: {
      "url": "/pages/myIfoPages/addressList",
      "hover-class": "none"
    }
  }, [_c('van-cell', {
    attrs: {
      "title": "收货地址管理",
      "mpcomid": '18'
    }
  }, [_c('van-icon', {
    staticClass: "custom-icon",
    attrs: {
      "mpcomid": '17'
    },
    slot: "right-icon"
  }), _vm._v(" "), _c('div', {
    slot: "right-icon"
  }, [_c('img', {
    staticClass: "cellImg2",
    attrs: {
      "src": "../../static/images/addressManage.png"
    }
  })])], 1)], 1)], 1)]), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "100%",
      "height": "98rpx"
    }
  }), _vm._v(" "), _c('van-popup', {
    attrs: {
      "z-index": "1000",
      "show": _vm.inviteShow,
      "close-on-click-overlay": "false",
      "close": _vm.onClose,
      "mpcomid": '19'
    }
  }, [_c('div', {
    staticClass: "delectPopup"
  }, [_c('div', {
    staticClass: "delectTitle"
  }, [_c('img', {
    attrs: {
      "src": "../../static/images/smallWarn.png"
    }
  }), _vm._v(" "), _c('span', [_vm._v("邀请规则")])]), _vm._v(" "), _c('div', {
    staticClass: "delectContent"
  }, [_vm._v("通过你分享的小程序/二维码进入花样并注册开店的店铺，自动成为你的好友店铺。（每个店铺限制有10个好友店铺）好友店铺销售额的5%，将作为你的提成。好友店铺每销售100元，奖励一级店铺5元。")]), _vm._v(" "), _c('div', {
    staticClass: "delectBtn"
  }, [_c('img', {
    attrs: {
      "src": "../../static/images/invitefriend.png"
    }
  })]), _vm._v(" "), _c('img', {
    staticClass: "closeDelect",
    attrs: {
      "src": "../../static/images/wrong.png",
      "eventid": '4'
    },
    on: {
      "click": _vm.onClose
    }
  })])]), _vm._v(" "), _c('van-popup', {
    attrs: {
      "z-index": "1000",
      "show": _vm.friendShow,
      "close-on-click-overlay": "false",
      "close": _vm.friendClose,
      "mpcomid": '20'
    }
  }, [_c('div', {
    staticClass: "friendPopup delectPopup"
  }, [_c('div', {
    staticClass: "delectTitle"
  }, [_c('span', [_vm._v("成功邀请好友注册店铺")])]), _vm._v(" "), _c('div', {
    staticClass: "delectContent"
  }, [_vm._v("你会获得好友店铺销售额5%的奖励")]), _vm._v(" "), _c('div', {
    staticClass: "delectBtn"
  }, [_c('img', {
    attrs: {
      "src": "../../static/images/invitefriend.png"
    }
  })]), _vm._v(" "), _c('img', {
    staticClass: "closeDelect",
    attrs: {
      "src": "../../static/images/wrong.png",
      "eventid": '5'
    },
    on: {
      "click": _vm.friendClose
    }
  })])]), _vm._v(" "), _c('myTabbar', {
    attrs: {
      "tabbar": _vm.tabbar,
      "mpcomid": '21'
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
     require("vue-hot-reload-api").rerender("data-v-a8bb927a", esExports)
  }
}

/***/ })

},[216]);