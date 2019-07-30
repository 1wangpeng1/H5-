require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonp([2],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_goodsMsgDetail_vue__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8ac07770_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_goodsMsgDetail_vue__ = __webpack_require__(139);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(136)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8ac07770"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_goodsMsgDetail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8ac07770_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_goodsMsgDetail_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\goods\\goodsMsgDetail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] goodsMsgDetail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8ac07770", Component.options)
  } else {
    hotAPI.reload("data-v-8ac07770", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 136:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vant_weapp_dist_toast_toast__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__palette_goodsCard__ = __webpack_require__(138);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var card = new __WEBPACK_IMPORTED_MODULE_1__palette_goodsCard__["a" /* default */]();
var customStyle = 'margin:0rpx 75rpx;background: #fff;';
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'goodsMsgDetail',

  data: function data() {
    return {
      pid: '',
      // 商品ID
      productMsg: {},
      // 商品数据
      swiperCurrent: 0,
      goodsDialogShow: false,
      sharePopup: false,
      // 分享店铺弹框
      shareImg: '',
      customStyle: customStyle,
      template: '',
      // 分享店铺数据
      goodsBuyNum: 1,
      // 弹框购买数量
      totlePrice: 0 // 弹框商品总价

    };
  },
  onLoad: function onLoad() {
    this.pid = this.$route.query.pid;
    console.log(this.pid);
    this.getProductMsg();
  },


  methods: {
    swiperChange: function swiperChange(e) {
      // console.log(e)
      var current = e.mp.detail.current;
      var that = this;
      that.swiperCurrent = current;
    },
    buyDialog: function buyDialog() {
      console.log('显示弹框');
      this.goodsDialogShow = true;
      this.goodsBuyNum = 1; // 购买数量清0

      this.totlePrice = this.productMsg.price;
    },
    onClose: function onClose() {
      this.goodsDialogShow = false;
    },
    goodsNumChange: function goodsNumChange(event) {
      console.log('购买数量改变' + event.mp.detail);
      this.goodsBuyNum = event.mp.detail;
      this.totlePrice = this.totalPriceCount(event.mp.detail);
    },
    totalPriceCount: function totalPriceCount(num) {
      console.log('调用函数');
      return num * this.productMsg.price;
    },
    addCartBtn: function addCartBtn() {},
    buyBtn: function buyBtn() {
      this.$router.push({
        path: '/pages/goods/sureOrder'
      }); // this.globalData.sureOrderList = this.productMsg
    },
    getProductMsg: function getProductMsg() {
      var that = this;
      that.$httpWX.post({
        url: '/product/details',
        data: {
          id: that.pid
        },
        header: that.globalData.Token // header: ''

      }).then(function (res) {
        that.productMsg = res.data;
        console.log(that.productMsg); // 动态修改页面title

        wx.setNavigationBarTitle({
          title: that.productMsg.name
        });
      });
    },
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
              },
              fail: function fail() {
                // 用户拒绝了授权
                wx.showModal({
                  title: '保存图片',
                  content: '保存图片需要您授权',
                  showCancel: true,
                  confirmText: '确定',
                  success: function success(res) {
                    if (res.confirm) {
                      // 打开设置页面
                      wx.openSetting({
                        success: function success(data) {
                          if (data.authSetting['scope.writePhotosAlbum']) {
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
                          } else {
                            console.log('授权失败');
                          }
                        },
                        fail: function fail(data) {
                          console.log('openSetting: fail');
                        }
                      });
                    } else if (res.cancel) {
                      console.log('用户点击取消');
                    }
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
    },
    popupBg: function popupBg() {
      this.sharePopup = false; // 分享弹窗隐藏
    },
    getShareMsg: function getShareMsg() {
      var userInfo = {
        price: this.productMsg.price,
        detail: this.productMsg.brief,
        bg: this.productMsg.imgList[0]
      };
      this.template = card.do(userInfo);
      __WEBPACK_IMPORTED_MODULE_0_vant_weapp_dist_toast_toast__["a" /* default */].clear();
      this.sharePopup = true; // 分享弹窗显示
    },


    // 店铺分享按钮
    peoShareGoods: function peoShareGoods() {
      __WEBPACK_IMPORTED_MODULE_0_vant_weapp_dist_toast_toast__["a" /* default */].loading({
        duration: 0,
        mask: true,
        message: '生成图片中'
      }); //

      this.getShareMsg();
    }
  },
  onShareAppMessage: function onShareAppMessage(options) {
    // var that = this;
    // 设置菜单中的转发按钮触发转发事件时的转发内容
    var shareObj = {
      title: '转发的标题',
      // 默认是小程序的名称(可以写slogan等)
      path: '/pages/goods/goodsMsgDetail',
      // 默认是当前页面，必须是以‘/’开头的完整路径
      imgUrl: '',
      // 自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
      success: function success(res) {
        // 转发成功之后的回调
        if (res.errMsg === 'shareAppMessage:ok') {}
      },
      fail: function fail(res) {
        // 转发失败之后的回调
        if (res.errMsg === 'shareAppMessage:fail cancel') {// 用户取消转发
        } else if (res.errMsg === 'shareAppMessage:fail') {// 转发失败，其中 detail message 为详细失败信息
        }
      } // 来自页面内的按钮的转发

    };

    if (options.from === 'button') {
      var eData = options.target.dataset;
      var that = this;
      console.log(eData); // 此处可以修改 shareObj 中的内容

      shareObj.path = '/pages/goods/goodsMsgDetail?productId=' + that.productMsg.id + '&shopId=' + that.productMsg.id;
    } // 返回shareObj


    return shareObj;
  }
});

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);




// 名片分享样式
var LastMayday = function () {
  function LastMayday() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, LastMayday);

    this.cardInfo = {};
    this.TEXT_SMALL = {
      fontSize: '24rpx'
    };
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(LastMayday, [{
    key: 'do',
    value: function _do(cardInfo) {
      console.log(JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(cardInfo)));
      this.cardInfo = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(cardInfo));
      return this._template();
    }
  }, {
    key: '_template',
    value: function _template() {
      return {
        // background: 'https://qhyxpicoss.kujiale.com/2018/06/12/LMPUSDAKAEBKKOASAAAAAAY8_981x600.png',
        width: '600rpx',
        height: '700rpx',
        borderRadius: '10rpx',
        views: [{
          type: 'image',
          url: this.cardInfo.bg,
          css: {
            top: '12rpx',
            left: '12rpx',
            width: '576rpx',
            height: '470rpx',
            borderRadius: '4rpx'
          }
        }, {
          type: 'qrcode',
          content: 'https://github.com/Kujiale-Mobile',
          css: {
            right: '70rpx',
            top: '500rpx',
            width: '120rpx',
            height: '120rpx',
            margin: '10rpx'
          }
        }, {
          type: 'text',
          text: '识别小程序码，立即购买',
          css: {
            right: '20rpx',
            bottom: '40rpx',
            fontSize: '20rpx',
            color: '#999999'
          }
        }, {
          type: 'text',
          text: this.cardInfo.detail,
          css: {
            left: '50rpx',
            top: '520rpx',
            fontSize: '32rpx',
            width: '300rpx',
            height: '120rpx',
            lineHeight: '44rpx',
            color: '#666'
          }
        }, {
          type: 'text',
          text: '￥' + this.cardInfo.price,
          css: {
            left: '50rpx',
            bottom: '40rpx',
            fontSize: '32rpx',
            color: '#B97E72',
            align: 'left'
          }
        }]
      };
    }
  }]);

  return LastMayday;
}();

/* harmony default export */ __webpack_exports__["a"] = (LastMayday);

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "swiper-box"
  }, [_c('img', {
    staticClass: "peoShareGoods",
    attrs: {
      "src": "../../../static/images/peoShareShop.png",
      "eventid": '0'
    },
    on: {
      "click": _vm.peoShareGoods
    }
  }), _vm._v(" "), _c('swiper', {
    staticClass: "goodsSwiper",
    attrs: {
      "autoplay": "autoplay",
      "interval": "3000",
      "eventid": '1'
    },
    on: {
      "change": _vm.swiperChange
    }
  }, _vm._l((_vm.productMsg.imgList), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0_' + index
      }
    }, [_c('image', {
      staticClass: "slide-image",
      attrs: {
        "src": item,
        "width": "355",
        "height": "150"
      }
    })])], 1)
  })), _vm._v(" "), _c('div', {
    staticClass: "dots"
  }, _vm._l((_vm.productMsg.imgList), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('div', {
      staticClass: "dot",
      class: index === _vm.swiperCurrent ? ' active' : ''
    })])
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "goodsMsg"
  }, [_c('div', {
    staticClass: "goodsName"
  }, [_vm._v(_vm._s(_vm.productMsg.name))]), _vm._v(" "), _c('div', {
    staticClass: "goodsPrice"
  }, [_vm._v("￥" + _vm._s(_vm.productMsg.price))]), _vm._v(" "), _c('div', {
    staticClass: "goodsDetail"
  }, [_vm._v(_vm._s(_vm.productMsg.brief))]), _vm._v(" "), _c('div', {
    staticClass: "goodsAddress"
  }, [_c('span', [_vm._v("发货")]), _vm._v(" "), _c('van-icon', {
    staticClass: "icon",
    attrs: {
      "name": "location-o",
      "mpcomid": '1'
    }
  }), _c('span', [_vm._v(_vm._s(_vm.productMsg.site))])], 1), _vm._v(" "), _c('div', {
    staticClass: "goodsBuy"
  }, [_c('div', [_vm._v("配送：免运费")]), _vm._v(" "), _c('div', {
    staticClass: "buyBtn",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.buyDialog
    }
  }, [_vm._v("购买")])])]), _vm._v(" "), _c('div', {
    staticClass: "goodsImg"
  }), _vm._v(" "), _c('van-popup', {
    attrs: {
      "z-index": "1000",
      "show": _vm.goodsDialogShow,
      "close-on-click-overlay": "false",
      "close": _vm.onClose,
      "mpcomid": '3'
    }
  }, [_c('div', {
    staticClass: "goodsDialogPopup"
  }, [_c('div', {
    staticClass: "goodsDetail"
  }, [_c('div', {
    staticClass: "goodsImg"
  }, [_c('img', {
    attrs: {
      "src": _vm.productMsg.imgList[0]
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "goodsDetailRight"
  }, [_c('div', {
    staticClass: "goodsTitle"
  }, [_vm._v(_vm._s(_vm.productMsg.name))]), _vm._v(" "), _c('div', {
    staticClass: "goodswords"
  }, [_vm._v(_vm._s(_vm.productMsg.brief))]), _vm._v(" "), _c('div', {
    staticClass: "goodsdPrice"
  }, [_vm._v("￥" + _vm._s(_vm.productMsg.price))])])]), _vm._v(" "), _c('div', {
    staticClass: "goodsNum"
  }, [_c('div', {
    staticClass: "goodsNumChange"
  }, [_c('div', [_vm._v("购买数量")]), _vm._v(" "), _c('div', [_c('van-stepper', {
    attrs: {
      "value": _vm.goodsBuyNum,
      "eventid": '3',
      "mpcomid": '2'
    },
    on: {
      "change": _vm.goodsNumChange
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "goodsNumRecord"
  }, [_vm._v("共" + _vm._s(_vm.goodsBuyNum) + "件商品 小计："), _c('span', [_vm._v("￥" + _vm._s(_vm.totlePrice))])]), _vm._v(" "), _c('div', {
    staticClass: "goodsBuyBtn"
  }, [_c('div', {
    staticClass: "addCartBtn",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.addCartBtn
    }
  }, [_vm._v("加入购物车")]), _vm._v(" "), _c('div', {
    staticClass: "buyBtn",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.buyBtn
    }
  }, [_vm._v("购买")])])]), _vm._v(" "), _c('img', {
    staticClass: "closeGoodsDialog",
    attrs: {
      "src": "../../../static/images/wrong.png",
      "eventid": '6'
    },
    on: {
      "click": _vm.onClose
    }
  })])]), _vm._v(" "), (_vm.sharePopup) ? _c('div', {
    staticClass: "popupBg",
    attrs: {
      "eventid": '10'
    },
    on: {
      "click": _vm.popupBg
    }
  }, [_c('painter', {
    attrs: {
      "customStyle": _vm.customStyle,
      "palette": _vm.template,
      "dirty": true,
      "eventid": '7',
      "mpcomid": '4'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
      },
      "imgOK": _vm.onImgOk
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "functionBtn"
  }, [_c('button', {
    staticClass: "shareBtn",
    attrs: {
      "data-name": "shareBtn",
      "plain": "true",
      "open-type": "share",
      "eventid": '8'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
      }
    }
  }, [_c('img', {
    attrs: {
      "src": "../../../static/images/shareWx.png"
    }
  }), _vm._v(" 微信好友")]), _vm._v(" "), _c('div', {
    staticClass: "saveBtn",
    attrs: {
      "eventid": '9'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.save($event)
      }
    }
  }, [_c('img', {
    attrs: {
      "src": "../../../static/images/shareDown.png"
    }
  }), _vm._v(" 保存图片")])], 1)], 1) : _vm._e(), _vm._v(" "), _c('van-toast', {
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
     require("vue-hot-reload-api").rerender("data-v-8ac07770", esExports)
  }
}

/***/ })

},[212]);