require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonp([3],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_shopHome_vue__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2f985859_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_shopHome_vue__ = __webpack_require__(122);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(115)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2f985859"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_shopHome_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2f985859_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_shopHome_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\shopping\\shopHome.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] shopHome.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f985859", Component.options)
  } else {
    hotAPI.reload("data-v-2f985859", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 115:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vant_weapp_dist_toast_toast__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__palette_card__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_goodsList__ = __webpack_require__(33);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var card = new __WEBPACK_IMPORTED_MODULE_2__palette_card__["a" /* default */]();
var customStyle = 'margin:0rpx 75rpx;background: #fff;';
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'shopHome',

  data: function data() {
    return {
      userInfo: '',
      shopHomeId: '',
      // 店铺ID
      shoppingMsg: {},
      // 店铺top信息
      shopHome: 'shopHomeOther',
      // shopHomeOther买家看到的样式  shopHomeMy卖家看到的样式
      sharePopup: false,
      // 分享店铺弹框
      shareImg: '',
      customStyle: customStyle,
      template: '',
      // 分享店铺数据
      goodsDialogShow: false,
      // 购买弹框显示
      goodsDialogMsg: {},
      // 购买弹框显示数据
      goodsBuyNum: 1,
      // 弹框购买数量
      totlePrice: 0,
      // 弹框商品总价
      allMoney: 0,
      // 购物车总价
      shopCartShow: false,
      // 购物车弹框
      cateId: 1,
      // 分类ID
      pageIndex: 1,
      // 当前页数
      tabOne: true,
      tabTwo: false,
      tabThree: false,
      marginBottom: true,
      fixtop: false,
      // 是否吸顶
      top: 0,
      // 导航栏初始到屏幕顶部高度
      windowWidth: 0,
      // 窗口宽度
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
      shopCartLists: [],
      // 购物车列表
      goodsList: []
    };
  },


  components: {
    GoodsList: __WEBPACK_IMPORTED_MODULE_3__components_goodsList__["a" /* default */]
  },
  onLoad: function onLoad() {
    console.log('page shopHome onLoad');
    var that = this;
    console.log(that.$route.query.shopHomeId);
    that.shopHomeId = that.$route.query.shopHomeId; // 店铺ID
    // that.shopHomeId = 18
    // that.getShoppingMsg() // 花店top信息
    // that.getShoppingGoodsList() // 花店商品数据
    // that.userInfo = that.globalData.userInfo // 全局变量
    // console.log(that.globalData.userInfo)

    that.shopHome = 'shopHomeMy'; // 初始化根据进来的路口判断页面显示
    // 吸顶操作

    var res = wx.getSystemInfoSync();
    that.windowWidth = res.windowWidth;
    var query = wx.createSelectorQuery();
    query.select('#fixd', '.nav').boundingClientRect();
    query.exec(function (res) {
      that.top = res[0].top;
    });
  },

  onShow: function onShow() {
    this.cateId = 1;
    this.pageIndex = 1;
    this.loadingFinish = false;
    this.goodsDialogShow = false;
    this.goodsList = [];
    this.shopCartLists = [];
    this.getShoppingMsg(); // 花店top信息

    this.getShoppingGoodsList(); // 花店商品数据
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

      this.getShoppingGoodsList();
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

      this.getShoppingGoodsList();
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

      this.getShoppingGoodsList();
    },
    buyDialog: function buyDialog(item) {
      console.log('显示弹框');
      console.log(item);
      this.goodsDialogMsg = item;
      this.goodsDialogShow = true;
      this.goodsBuyNum = 1; // 购买数量清0

      this.totlePrice = this.goodsDialogMsg.price;
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
      return num * this.goodsDialogMsg.price;
    },
    addCartBtn: function addCartBtn() {
      var that = this;
      console.log('加入购物车');
      console.log('that.goodsBuyNum' + that.goodsBuyNum); // 判断是否购物车中已经有商品，如果有就增加数量，反之加入这个商品

      var foodIndex = that.shopCartLists.findIndex(function (food) {
        return food.productId === that.goodsDialogMsg.id;
      }); // foodIndex为-1表示不存在 ,要加入商品

      if (foodIndex === -1) {
        that.shopCartLists.push({
          name: that.goodsDialogMsg.name,
          productId: that.goodsDialogMsg.id,
          price: that.goodsDialogMsg.price,
          brief: that.goodsDialogMsg.brief,
          listImg: that.goodsDialogMsg.listImg,
          num: that.goodsBuyNum
        }); // foodIndex存在 ,更新数据
      } else {
        that.shopCartLists[foodIndex].num = that.shopCartLists[foodIndex].num + that.goodsBuyNum;
      }

      console.log(that.shopCartLists);
      wx.showToast({
        title: '添加成功',
        icon: 'success',
        duration: 2000
      });
      that.goodsDialogShow = false;
      this.allMoney = this.allMoneyCount();
    },
    allMoneyCount: function allMoneyCount() {
      var allMoney = 0;

      for (var i = 0; i < this.shopCartLists.length; i++) {
        allMoney = allMoney + this.shopCartLists[i].price * this.shopCartLists[i].num;
      }

      return allMoney;
    },


    // 立即购买
    buyBtn: function buyBtn() {
      console.log('立即购买' + this.totlePrice);
      console.log(this.goodsDialogMsg);
      this.goodsDialogMsg.num = this.goodsBuyNum;
      this.$router.push({
        path: '/pages/goods/sureOrder'
      });
      var ClearingArr = [];
      ClearingArr.push(this.goodsDialogMsg);
      this.globalData.sureOrderList = ClearingArr; // 订单数据存储

      this.globalData.sureOrderShopId = this.shopHomeId; // 店铺数据存储

      this.globalData.sureOrderShopName = this.shoppingMsg.storeName; // 店铺数据存储
    },


    // 购物车购买
    shopCartBuyBtn: function shopCartBuyBtn() {
      console.log(this.shopCartLists);
      this.$router.push({
        path: '/pages/goods/sureOrder'
      });
      this.globalData.sureOrderList = this.shopCartLists; // 订单数据存储

      this.globalData.sureOrderShopId = this.shopHomeId; // 店铺数据存储

      this.globalData.sureOrderShopName = this.shoppingMsg.storeName; // 店铺数据存储
    },
    editShoppingMsg: function editShoppingMsg() {
      var shoppingMsg = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.shoppingMsg);
      this.$router.push({
        path: '/pages/shopping/openShopping/editShopping',
        query: {
          changeShoppingMsg: shoppingMsg,
          openShopping: false
        }
      });
    },


    // 清空购物车
    clearShopCartBtn: function clearShopCartBtn() {
      this.shopCartLists = [];
      wx.showToast({
        title: '成功清空购物车',
        icon: 'success',
        duration: 2000
      });
      this.shopCartShow = false;
    },


    // 购物车
    shopCartPopup: function shopCartPopup() {
      this.shopCartShow = !this.shopCartShow;
    },
    shopCartClose: function shopCartClose() {
      this.shopCartShow = false;
    },
    shopCartNumChange: function shopCartNumChange(event, productId) {
      console.log('购物车price' + productId);
      console.log(this.shopCartLists);
      var that = this;

      if (event.mp.detail < 1) {
        console.log('数量减少到0即删除商品');

        for (var i = 0; i < that.shopCartLists.length; i++) {
          if (that.shopCartLists[i].productId === productId) {
            that.shopCartLists.splice(i, 1);
          }
        }

        if (that.shopCartLists.length === 0) {
          // 减0 减到数组长度为0 购物车列表消失
          this.shopCartShow = false;
        }
      } else {
        for (var j = 0; j < that.shopCartLists.length; j++) {
          if (that.shopCartLists[j].productId === productId) {
            that.shopCartLists[j].num = event.mp.detail;
          }
        }

        this.allMoney = this.allMoneyCount();
      }
    },
    getShoppingMsg: function getShoppingMsg() {
      var that = this;
      that.$httpWX.post({
        url: '/store/info',
        data: {
          storeId: that.shopHomeId // storeId: 18

        },
        header: that.globalData.Token
      }).then(function (res) {
        console.log(res);
        that.shoppingMsg = res.data; // 动态修改页面title

        wx.setNavigationBarTitle({
          // title: that.shoppingMsg.storeName + '的花店'
          title: that.shoppingMsg.storeName
        });
      });
    },
    getShoppingGoodsList: function getShoppingGoodsList() {
      var that = this;
      that.$httpWX.post({
        url: '/store/seller/product/list',
        data: {
          storeId: that.shopHomeId,
          // storeId: 18, // 店铺ID
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

      that.getShoppingGoodsList();
    },
    scroll: function scroll(e) {
      var that = this;

      if (e.mp.detail.scrollTop >= that.top) {
        that.fixtop = true;
      } else {
        that.fixtop = false;
      }
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
      // this.name = 'https://qhyxpicoss.kujiale.com/r/2017/12/04/L3D123I45VHNYULVSAEYCV3P3X6888_3200x2400.jpg@!70q'
      var userInfo = {
        avatar: this.shoppingMsg.pic,
        storeName: this.shoppingMsg.storeName,
        detail: this.shoppingMsg.detail,
        bg: this.shoppingMsg.background
      };
      this.template = card.do(userInfo);
      __WEBPACK_IMPORTED_MODULE_1_vant_weapp_dist_toast_toast__["a" /* default */].clear();
      this.sharePopup = true; // 分享弹窗显示
    },


    // 店铺分享按钮
    shareShopBtn: function shareShopBtn() {
      __WEBPACK_IMPORTED_MODULE_1_vant_weapp_dist_toast_toast__["a" /* default */].loading({
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
      path: '/pages/shopping/shopHome',
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
      console.log(eData.name); // 此处可以修改 shareObj 中的内容

      shareObj.path = '/pages/shopping/shopHome?shopId=' + that.shopHomeId;
    } // 返回shareObj


    return shareObj;
  }
});

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('scroll-view', {
    staticStyle: {
      "height": "100vh"
    },
    attrs: {
      "scroll-y": "",
      "eventid": '6'
    },
    on: {
      "scrolltolower": _vm.downLoad,
      "scroll": _vm.scroll
    }
  }, [_c('div', {
    staticClass: "shopCard box"
  }, [_c('div', {
    staticClass: "shopCardBg"
  }, [_c('img', {
    staticClass: "shopCardBgImg",
    attrs: {
      "src": _vm.shoppingMsg.background
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "functionBtn"
  }, [_c('img', {
    staticClass: "peoShareShop",
    attrs: {
      "src": "../../../static/images/peoShareShop.png",
      "eventid": '0'
    },
    on: {
      "click": _vm.shareShopBtn
    }
  })]), _vm._v(" "), (_vm.shopHome === 'shopHomeMy') ? _c('navigator', {
    attrs: {
      "url": '/pages/shopping/shopGoodsManage?shopHomeId=' + _vm.shopHomeId,
      "hover-class": "none"
    }
  }, [_c('img', {
    staticClass: "enterShop",
    attrs: {
      "src": "../../../static/images/goodsManage.png"
    }
  })]) : _vm._e(), _vm._v(" "), (_vm.shopHome === 'shopHomeOther') ? _c('navigator', {
    attrs: {
      "open-type": "switchTab",
      "url": "/pages/setShop",
      "hover-class": "none"
    }
  }, [_c('img', {
    staticClass: "enterShop",
    attrs: {
      "src": "../../../static/images/otherOpen.png"
    }
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "shopSeller"
  }, [_c('img', {
    staticClass: "shopSellerPic",
    attrs: {
      "src": _vm.shoppingMsg.pic
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "shopSellerMsg"
  }, [_c('div', {
    staticClass: "shopSellerName"
  }, [_c('span', [_vm._v(_vm._s(_vm.shoppingMsg.storeName))]), _vm._v(" "), (_vm.shopHome === 'shopHomeMy') ? _c('img', {
    attrs: {
      "src": "../../../static/images/editName.png",
      "eventid": '1'
    },
    on: {
      "click": _vm.editShoppingMsg
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "shopSellerDet"
  }, [_vm._v(_vm._s(_vm.shoppingMsg.detail))])])])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "indexTab",
    class: _vm.fixtop ? 'fix' : '',
    attrs: {
      "id": "fixd"
    }
  }, [_c('div', {
    staticClass: "tabOne",
    attrs: {
      "eventid": '2'
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
      "eventid": '3'
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
      "eventid": '4'
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
        "list-type": _vm.shopHome,
        "eventid": '5_' + index,
        "mpcomid": '0_' + index
      },
      on: {
        "check": _vm.buyDialog
      }
    })
  }), _vm._v(" "), (_vm.loadingFinish) ? _c('div', {
    staticClass: "loadingFinish"
  }, [_vm._v("—— 数据已全部加载 ——")]) : _vm._e()], 2)]), _vm._v(" "), _c('van-popup', {
    attrs: {
      "z-index": "1000",
      "show": _vm.goodsDialogShow,
      "close-on-click-overlay": "false",
      "close": _vm.onClose,
      "mpcomid": '2'
    }
  }, [_c('div', {
    staticClass: "goodsDialogPopup"
  }, [_c('div', {
    staticClass: "goodsDetail"
  }, [_c('div', {
    staticClass: "goodsImg"
  }, [_c('img', {
    attrs: {
      "src": _vm.goodsDialogMsg.listImg
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "goodsDetailRight"
  }, [_c('div', {
    staticClass: "goodsTitle"
  }, [_vm._v(_vm._s(_vm.goodsDialogMsg.name))]), _vm._v(" "), _c('div', {
    staticClass: "goodswords"
  }, [_vm._v(_vm._s(_vm.goodsDialogMsg.brief))]), _vm._v(" "), _c('div', {
    staticClass: "goodsdPrice"
  }, [_vm._v("￥" + _vm._s(_vm.goodsDialogMsg.price))])])]), _vm._v(" "), _c('div', {
    staticClass: "goodsNum"
  }, [_c('div', {
    staticClass: "goodsNumChange"
  }, [_c('div', [_vm._v("购买数量")]), _vm._v(" "), _c('div', [_c('van-stepper', {
    attrs: {
      "value": _vm.goodsBuyNum,
      "eventid": '7',
      "mpcomid": '1'
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
      "eventid": '8'
    },
    on: {
      "click": _vm.addCartBtn
    }
  }, [_vm._v("加入购物车")]), _vm._v(" "), _c('div', {
    staticClass: "buyBtn",
    attrs: {
      "eventid": '9'
    },
    on: {
      "click": _vm.buyBtn
    }
  }, [_vm._v("购买")])])]), _vm._v(" "), _c('img', {
    staticClass: "closeGoodsDialog",
    attrs: {
      "src": "../../../static/images/wrong.png",
      "eventid": '10'
    },
    on: {
      "click": _vm.onClose
    }
  })])]), _vm._v(" "), (_vm.shopCartLists.length > 0) ? _c('div', {
    staticClass: "shopCardDiv"
  }, [_c('div', {
    staticClass: "shopCardDivLeft",
    attrs: {
      "eventid": '11'
    },
    on: {
      "click": _vm.shopCartPopup
    }
  }, [_c('img', {
    attrs: {
      "src": "../../../static/images/shopCart.png"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v(_vm._s(_vm.shopCartLists.length))])]), _vm._v(" "), _c('div', {
    staticClass: "shopCardDivRight"
  }, [_c('div', {
    staticClass: "shopCardAllMoney"
  }, [_vm._v("￥"), _c('span', [_vm._v(_vm._s(_vm.allMoney))])]), _vm._v(" "), _c('div', {
    staticClass: "shopCardBtn",
    attrs: {
      "eventid": '12'
    },
    on: {
      "click": _vm.shopCartBuyBtn
    }
  }, [_vm._v("立即下单")])])]) : _vm._e(), _vm._v(" "), _c('van-popup', {
    attrs: {
      "z-index": "99",
      "show": _vm.shopCartShow,
      "position": "bottom",
      "close-on-click-overlay": "false",
      "close": _vm.shopCartClose,
      "mpcomid": '4'
    }
  }, [_c('div', {
    staticClass: "shopCartPopup",
    attrs: {
      "eventid": '16'
    },
    on: {
      "touchmove": function($event) {
        $event.preventDefault();
      }
    }
  }, [_c('div', {
    staticClass: "clearShopCart"
  }, [_c('img', {
    attrs: {
      "src": "../../../static/images/delect.png",
      "eventid": '13'
    },
    on: {
      "click": _vm.clearShopCartBtn
    }
  }), _vm._v(" "), _c('span', {
    attrs: {
      "eventid": '14'
    },
    on: {
      "click": _vm.clearShopCartBtn
    }
  }, [_vm._v("清空购物车")])]), _vm._v(" "), _c('div', {
    staticClass: "shopCartGoods"
  }, _vm._l((_vm.shopCartLists), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "shopCartList"
    }, [_c('div', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', [_vm._v("￥" + _vm._s(item.price * item.num))]), _vm._v(" "), _c('van-stepper', {
      attrs: {
        "value": item.num,
        "min": 0,
        "eventid": '15_' + index,
        "mpcomid": '3_' + index
      },
      on: {
        "change": function($event) {
          _vm.shopCartNumChange($event, item.productId)
        }
      },
      model: {
        value: (item.num),
        callback: function($$v) {
          item.num = $$v
        },
        expression: "item.num"
      }
    })], 1)
  })), _vm._v(" "), _c('div', {
    staticClass: "tips"
  })])]), _vm._v(" "), (_vm.sharePopup) ? _c('div', {
    staticClass: "popupBg",
    attrs: {
      "eventid": '20'
    },
    on: {
      "click": _vm.popupBg
    }
  }, [_c('painter', {
    attrs: {
      "customStyle": _vm.customStyle,
      "palette": _vm.template,
      "dirty": true,
      "eventid": '17',
      "mpcomid": '5'
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
      "eventid": '18'
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
      "eventid": '19'
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
      "mpcomid": '6'
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
     require("vue-hot-reload-api").rerender("data-v-2f985859", esExports)
  }
}

/***/ })

},[208]);