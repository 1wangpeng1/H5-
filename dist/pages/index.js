require("../common/manifest.js")
require("../common/vendor.js")
global.webpackJsonp([18],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_index_vue__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_76f5c7ef_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_index_vue__ = __webpack_require__(113);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(105)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-76f5c7ef"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_76f5c7ef_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-76f5c7ef", Component.options)
  } else {
    hotAPI.reload("data-v-76f5c7ef", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 105:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_myTabbar__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_goodsList__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_CurrentPage__ = __webpack_require__(34);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // import Toast from 'vant-weapp/dist/toast/toast'

/* harmony default export */ __webpack_exports__["a"] = ({
  mpType: 'page',

  data: function data() {
    return {
      routers: 1,
      shtn: '<p style="color: #f00;">我的s他的</p>',
      tabbar: {},
      fixedAuthorize: false,
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
      goodsList: [] // goodsList: [{goodsName: '小盆绿萝1', goodsDetail: '属于麒麟叶属植物，其缠绕性强，气根发达，可以水培种植。', nowPrice: '21', beforePrice: '40', img: require('../../static/test/goodsImg.png')}, {goodsName: '小盆绿萝1', goodsDetail: '属于麒麟叶属植物，其缠绕性强，气根发达，可以水培种植。', nowPrice: '21', beforePrice: '40', img: require('../../static/test/goodsImg.png')}, {goodsName: '小盆绿萝1', goodsDetail: '属于麒麟叶属植物，其缠绕性强，气根发达，可以水培种植。', nowPrice: '21', beforePrice: '40', img: require('../../static/test/goodsImg.png')}, {goodsName: '小盆绿萝1', goodsDetail: '属于麒麟叶属植物，其缠绕性强，气根发达，可以水培种植。', nowPrice: '21', beforePrice: '40', img: require('../../static/test/goodsImg.png')}, {goodsName: '小盆绿萝1', goodsDetail: '属于麒麟叶属植物，其缠绕性强，气根发达，可以水培种植。', nowPrice: '21', beforePrice: '40', img: require('../../static/test/goodsImg.png')}, {goodsName: '小盆绿萝2', goodsDetail: '属于麒麟叶属植物，其缠绕性强，属于麒麟叶属植物，其缠绕性强，气根发可以水培种植。', nowPrice: '21', beforePrice: '40', img: '/../static/test/goodsImg.png'}, {goodsName: '小盆绿萝', goodsDetail: '属于麒麟叶属植物，其缠绕性强，气根发 达，可以水培种植。', nowPrice: '21', beforePrice: '40', img: '/../static/test/goodsImg.png'}]

    };
  },


  components: {
    myTabbar: __WEBPACK_IMPORTED_MODULE_0__components_myTabbar__["a" /* default */],
    GoodsList: __WEBPACK_IMPORTED_MODULE_1__components_goodsList__["a" /* default */]
  },

  onLoad: function onLoad() {
    console.log('page index onLoad');
    wx.hideTabBar();
    var that = this;
    that.tabbar = Object(__WEBPACK_IMPORTED_MODULE_2__utils_CurrentPage__["a" /* getQuery */])();
    console.log(that.tabbar); // 吸顶操作

    var res = wx.getSystemInfoSync();
    that.windowWidth = res.windowWidth;
    var query = wx.createSelectorQuery();
    query.select('#fixd', '.nav').boundingClientRect();
    query.exec(function (res) {
      that.top = res[0].top;
    });
    console.log(that.globalData.Token);

    if (that.globalData.Token === '' || that.globalData.Token === undefined || that.globalData.Token === null) {
      // 查看是否授权
      wx.getSetting({
        success: function success(res) {
          if (res.authSetting['scope.userInfo']) {
            wx.login({
              success: function success(res) {
                that.globalData.code = res.code;
                wx.getUserInfo({
                  success: function success(res) {
                    // 用户已经授权过,不需要显示授权页面,所以不需要改变 isHide 的值
                    // 根据自己的需求有其他操作再补充
                    // 我这里实现的是在用户授权成功后，调用微信的 wx.login 接口，从而获取code
                    console.log(res);
                    that.globalData.userInfo = res.userInfo;
                    that.globalData.encryptedData = res.encryptedData;
                    that.globalData.iv = res.iv;
                    that.globalData.rawData = res.rawData;
                    that.globalData.signature = res.signature; // console.log(that.globalData.userInfo)
                    // 获取到用户的 code 之后：res.code

                    that.getWxLoginToken(); //  // console.log('用户的code:' + res.code)
                    // 可以传给后台，再经过解析获取用户的 openid
                    // 或者可以直接使用微信的提供的接口直接获取 openid ，方法如下：
                    // wx.request({
                    //     // 自行补上自己的 APPID 和 SECRET
                    //     url: 'https://api.weixin.qq.com/sns/jscode2session?appid=自己的APPID&secret=自己的SECRET&js_code=' + res.code + '&grant_type=authorization_code',
                    //     success: res => {
                    //         // 获取到用户的 openid
                    //         console.log("用户的openid:" + res.data.openid);
                    //     }
                    // });
                  }
                });
              }
            });
          } else {
            // 用户没有授权 改变 isHide 的值，显示授权页面
            that.fixedAuthorize = true;
          }
        }
      });
    } else {
      console.log('已有token,即不需要查看时候授权');
      console.log(that.globalData);
      console.log(that.globalData.userInfo);
      console.log('请求数据'); // 请求数据

      that.getGoodsList(); // 根据分享过来的参数 进行页面跳转（店铺页或是商品详情页）
      // if (that.routers === 1) {
      //   that.$router.replace({path: '/pages/shopping/shopHome'})
      // }
    }
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

      this.getGoodsList();
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

      this.getGoodsList();
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

      this.getGoodsList();
    },
    bindViewTap: function bindViewTap() {
      console.log(this.globalData.URL);
      this.globalData.userInfo = {
        name: 'aaa'
      };
      console.log(this.globalData.userInfo.name); // this.$router.push({ path: '/pages/shopping/createShop' })
      // this.$router.push({ path: '/pages/logs/main', isTab: true })
      // Toast.loading({
      //   duration: 0, // 持续展示 toast
      //   mask: true,
      //   message: '加载中...'
      // })
      // Toast.clear()
    },


    // @click="clickHandle('test click', $event)"
    // clickHandle (msg, ev) {
    //   // eslint-disable-next-line
    //   console.log('clickHandle:', msg, ev)
    // }
    // 授权
    bindGetUserInfo: function bindGetUserInfo(e) {
      var that = this;
      console.log(e.mp);
      wx.login({
        success: function success(res) {
          that.globalData.code = res.code;

          if (e.mp.detail.userInfo) {
            // 用户按了允许授权按钮
            // 获取到用户的信息了，打印到控制台上看下
            console.log('用户的信息如下：');
            console.log(e.mp.detail);
            console.log(e.mp.detail.userInfo);
            that.globalData.userInfo = e.mp.detail.userInfo; // 授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来

            that.fixedAuthorize = false;
            that.globalData.encryptedData = e.mp.detail.encryptedData;
            that.globalData.iv = e.mp.detail.iv;
            that.globalData.rawData = e.mp.detail.rawData;
            that.globalData.signature = e.mp.detail.signature; // console.log(that.globalData.userInfo)
            // 获取到用户的 code 之后：res.code

            that.getWxLoginToken();
          } else {
            // 用户按了拒绝按钮
            wx.showModal({
              title: '警告',
              content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
              showCancel: false,
              confirmText: '返回授权',
              success: function success(res) {
                // 用户没有授权成功，不需要改变 isHide 的值
                if (res.confirm) {
                  console.log('用户点击了“返回授权”');
                }
              }
            });
          }
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

      that.getGoodsList();
    },
    scroll: function scroll(e) {
      var that = this;

      if (e.mp.detail.scrollTop >= that.top) {
        that.fixtop = true;
      } else {
        that.fixtop = false;
      }
    },
    getGoodsList: function getGoodsList() {
      var that = this;
      that.$httpWX.post({
        url: '/product/list',
        data: {
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


    // 微信授权登录获取token
    getWxLoginToken: function getWxLoginToken() {
      var that = this;
      console.log(that.globalData.code);
      console.log(that.globalData.encryptedData);
      console.log(that.globalData.iv);
      console.log(that.globalData.rawData);
      console.log(that.globalData.signature);
      that.$httpWX.post({
        url: '/wx/login',
        data: {
          code: that.globalData.code,
          encryptedData: that.globalData.encryptedData,
          iv: that.globalData.iv,
          rawData: that.globalData.rawData,
          signature: that.globalData.signature
        },
        header: ''
      }).then(function (res) {
        console.log('获取token成功');
        console.log(res);
        that.globalData.Token = res.data.token; // 根据分享过来的参数 进行页面跳转（店铺页或是商品详情页）
        // if (that.routers === 1) {
        //   that.$router.replace({path: '/pages/shopping/shopHome'})
        // }

        console.log('请求数据'); // 请求数据

        that.getGoodsList();
      });
    }
  }
});

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('scroll-view', {
    staticStyle: {
      "height": "calc(100vh - 98rpx)"
    },
    attrs: {
      "scroll-y": "",
      "eventid": '3'
    },
    on: {
      "scrolltolower": _vm.downLoad,
      "scroll": _vm.scroll
    }
  }, [_c('div', {
    staticClass: "indexBanner box"
  }, [_c('div', {
    staticClass: "indexBannerBg"
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": "../../static/images/shopBanner.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "indexTab",
    class: _vm.fixtop ? 'fix' : '',
    attrs: {
      "id": "fixd"
    }
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
      "src": "../../static/images/tabOne1.png"
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
        "list-type": "index",
        "mpcomid": '0_' + index
      }
    })
  }), _vm._v(" "), (_vm.loadingFinish) ? _c('div', {
    staticClass: "loadingFinish"
  }, [_vm._v("—— 数据已全部加载 ——")]) : _vm._e()], 2)]), _vm._v(" "), (_vm.fixedAuthorize) ? _c('div', {
    staticClass: "fixedAuthorize"
  }, [_c('div', {
    staticClass: "header"
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('button', {
    staticClass: "bottom",
    attrs: {
      "type": "primary",
      "open-type": "getUserInfo",
      "eventid": '4'
    },
    on: {
      "getuserinfo": _vm.bindGetUserInfo
    }
  }, [_vm._v("点击授权")])], 1) : _vm._e(), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('myTabbar', {
    attrs: {
      "tabbar": _vm.tabbar,
      "mpcomid": '2'
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('div', [_vm._v("申请获取以下权限")]), _vm._v(" "), _c('span', [_vm._v("获得你的公开信息(昵称，头像等)")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-76f5c7ef", esExports)
  }
}

/***/ })

},[207]);