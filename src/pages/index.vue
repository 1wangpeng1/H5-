<template>
  <div>
    <scroll-view
      scroll-y
      style="height: calc(100vh - 98rpx);"
      @scrolltolower="downLoad"
      @scroll="scroll"
    >
      <div class="indexBanner box">
      <div class="indexBannerBg"></div>
      <img src="../../static/images/shopBanner.png" />
    </div>
      <div class="indexTab" id="fixd" :class="fixtop? 'fix':''">
        <div class="tabOne" @click="tabOneClick">
          <img class="tabOneHot" src="../../static/images/tabOne1.png" :style="{'margin-bottom':marginBottom?'10rpx':'0rpx'}" />
          <img :src="tabOne ? tabOneImg.active : tabOneImg.normal" :class="tabOne ? 'tabOn' : 'tabHeight'" />
        </div>
        <div class="tabTwo" @click="tabTwoClick">
          <img :src="tabTwo ? tabTwoImg.active : tabTwoImg.normal" :class="tabTwo ? 'tabOn' : 'tabHeight'" />
        </div>
        <div class="tabThree" @click="tabThreeClick">
          <img :src="tabThree ? tabThreeImg.active : tabThreeImg.normal" :class="tabThree ? 'tabOn' : 'tabHeight'" />
        </div>
      </div>
      <!--<div v-html="shtn">slsls</div>-->
      <div class="goodsListDiv">
        <GoodsList v-for="(item,index) in goodsList" :key="index" :goodsList="item" list-type="index"></GoodsList>
        <div class="loadingFinish" v-if="loadingFinish">—— 数据已全部加载 ——</div>
      </div>
    </scroll-view>
    <!--授权模拟界面-->
    <div class="fixedAuthorize" v-if="fixedAuthorize">
      <div class='header'>
        <!--<img src='../../../static/images/user.png' />-->
      </div>
      <div class='content'>
        <div>申请获取以下权限</div>
        <span>获得你的公开信息(昵称，头像等)</span>
      </div>
      <button class='bottom' type='primary' open-type="getUserInfo" @getuserinfo="bindGetUserInfo">点击授权</button>
    </div>
    <!--这种特殊占位符是必须有的！-->
    <van-toast id="van-toast"/>
    <myTabbar :tabbar='tabbar'></myTabbar>
  </div>
</template>

<script>
import myTabbar from '../components/myTabbar'
import GoodsList from '../components/goodsList'
import { getQuery } from '../utils/CurrentPage'
// import Toast from 'vant-weapp/dist/toast/toast'
export default {
  mpType: 'page',
  data () {
    return {
      routers: 1,
      shtn: '<p style="color: #f00;">我的s他的</p>',
      tabbar: {},
      fixedAuthorize: false,
      cateId: 1, // 分类ID
      pageIndex: 1, // 当前页数
      tabOne: true,
      tabTwo: false,
      tabThree: false,
      marginBottom: true,
      fixtop: false, // 是否吸顶
      top: 0, // 导航栏初始到屏幕顶部高度
      windowWidth: 0, // 窗口宽度
      loadingNow: 1, // 自定义变量，防止多次滑动加载
      loadingFinish: false, // 数据加载完全
      tabOneImg: {normal: require('../../static/images/tabOne2.png'),
        active: require('../../static/images/tabOne_on.png')},
      tabTwoImg: {normal: require('../../static/images/tabTwo.png'),
        active: require('../../static/images/tabTwo_on.png')},
      tabThreeImg: {normal: require('../../static/images/tabThree.png'),
        active: require('../../static/images/tabThree_on.png')},
      goodsList: []
      // goodsList: [{goodsName: '小盆绿萝1', goodsDetail: '属于麒麟叶属植物，其缠绕性强，气根发达，可以水培种植。', nowPrice: '21', beforePrice: '40', img: require('../../static/test/goodsImg.png')}, {goodsName: '小盆绿萝1', goodsDetail: '属于麒麟叶属植物，其缠绕性强，气根发达，可以水培种植。', nowPrice: '21', beforePrice: '40', img: require('../../static/test/goodsImg.png')}, {goodsName: '小盆绿萝1', goodsDetail: '属于麒麟叶属植物，其缠绕性强，气根发达，可以水培种植。', nowPrice: '21', beforePrice: '40', img: require('../../static/test/goodsImg.png')}, {goodsName: '小盆绿萝1', goodsDetail: '属于麒麟叶属植物，其缠绕性强，气根发达，可以水培种植。', nowPrice: '21', beforePrice: '40', img: require('../../static/test/goodsImg.png')}, {goodsName: '小盆绿萝1', goodsDetail: '属于麒麟叶属植物，其缠绕性强，气根发达，可以水培种植。', nowPrice: '21', beforePrice: '40', img: require('../../static/test/goodsImg.png')}, {goodsName: '小盆绿萝2', goodsDetail: '属于麒麟叶属植物，其缠绕性强，属于麒麟叶属植物，其缠绕性强，气根发可以水培种植。', nowPrice: '21', beforePrice: '40', img: '/../static/test/goodsImg.png'}, {goodsName: '小盆绿萝', goodsDetail: '属于麒麟叶属植物，其缠绕性强，气根发 达，可以水培种植。', nowPrice: '21', beforePrice: '40', img: '/../static/test/goodsImg.png'}]
    }
  },

  components: {
    myTabbar,
    GoodsList
  },
  onLoad () {
    console.log('page index onLoad')
    wx.hideTabBar()
    var that = this
    that.tabbar = getQuery()
    console.log(that.tabbar)
    // 吸顶操作
    let res = wx.getSystemInfoSync()
    that.windowWidth = res.windowWidth
    const query = wx.createSelectorQuery()
    query.select('#fixd', '.nav').boundingClientRect()
    query.exec(function (res) {
      that.top = res[0].top
    })
    console.log(that.globalData.Token)
    if (that.globalData.Token === '' || that.globalData.Token === undefined || that.globalData.Token === null) {
      // 查看是否授权
      wx.getSetting({
        success: function (res) {
          if (res.authSetting['scope.userInfo']) {
            wx.login({
              success: res => {
                that.globalData.code = res.code
                wx.getUserInfo({
                  success: function (res) {
                    // 用户已经授权过,不需要显示授权页面,所以不需要改变 isHide 的值
                    // 根据自己的需求有其他操作再补充
                    // 我这里实现的是在用户授权成功后，调用微信的 wx.login 接口，从而获取code
                    console.log(res)
                    that.globalData.userInfo = res.userInfo
                    that.globalData.encryptedData = res.encryptedData
                    that.globalData.iv = res.iv
                    that.globalData.rawData = res.rawData
                    that.globalData.signature = res.signature
                    // console.log(that.globalData.userInfo)

                    // 获取到用户的 code 之后：res.code
                    that.getWxLoginToken()
                    //  // console.log('用户的code:' + res.code)
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
                })
              }
            })
          } else {
            // 用户没有授权 改变 isHide 的值，显示授权页面
            that.fixedAuthorize = true
          }
        }
      })
    } else {
      console.log('已有token,即不需要查看时候授权')
      console.log(that.globalData)
      console.log(that.globalData.userInfo)
      console.log('请求数据')
      // 请求数据
      that.getGoodsList()
      // 根据分享过来的参数 进行页面跳转（店铺页或是商品详情页）
      // if (that.routers === 1) {
      //   that.$router.replace({path: '/pages/shopping/shopHome'})
      // }
    }
  },
  methods: {
    tabOneClick () {
      if (this.tabOne === false) {
        this.tabOne = !this.tabOne
        this.tabTwo = false
        this.tabThree = false
        this.marginBottom = true
      }
      this.cateId = 1
      this.pageIndex = 1
      this.loadingFinish = false
      this.goodsList = []
      // 请求数据
      this.getGoodsList()
    },
    tabTwoClick () {
      if (this.tabTwo === false) {
        this.tabTwo = !this.tabTwo
        this.tabOne = false
        this.tabThree = false
        this.marginBottom = false
      }
      this.cateId = 2
      this.pageIndex = 1
      this.loadingFinish = false
      this.goodsList = []
      // 请求数据
      this.getGoodsList()
    },
    tabThreeClick () {
      if (this.tabThree === false) {
        this.tabThree = !this.tabThree
        this.tabTwo = false
        this.tabOne = false
        this.marginBottom = false
      }
      this.cateId = 3
      this.pageIndex = 1
      this.loadingFinish = false
      this.goodsList = []
      // 请求数据
      this.getGoodsList()
    },
    bindViewTap () {
      console.log(this.globalData.URL)
      this.globalData.userInfo = {name: 'aaa'}
      console.log(this.globalData.userInfo.name)
      // this.$router.push({ path: '/pages/shopping/createShop' })
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
    bindGetUserInfo: function (e) {
      var that = this
      console.log(e.mp)
      wx.login({
        success: res => {
          that.globalData.code = res.code
          if (e.mp.detail.userInfo) {
            // 用户按了允许授权按钮
            // 获取到用户的信息了，打印到控制台上看下
            console.log('用户的信息如下：')
            console.log(e.mp.detail)
            console.log(e.mp.detail.userInfo)
            that.globalData.userInfo = e.mp.detail.userInfo
            // 授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
            that.fixedAuthorize = false
            that.globalData.encryptedData = e.mp.detail.encryptedData
            that.globalData.iv = e.mp.detail.iv
            that.globalData.rawData = e.mp.detail.rawData
            that.globalData.signature = e.mp.detail.signature
            // console.log(that.globalData.userInfo)
            // 获取到用户的 code 之后：res.code
            that.getWxLoginToken()
          } else {
            // 用户按了拒绝按钮
            wx.showModal({
              title: '警告',
              content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
              showCancel: false,
              confirmText: '返回授权',
              success: function (res) {
                // 用户没有授权成功，不需要改变 isHide 的值
                if (res.confirm) {
                  console.log('用户点击了“返回授权”')
                }
              }
            })
          }
        }
      })
    },
    downLoad () {
      var that = this
      console.log('sssssssssss')
      if (that.loadingNow === 0) { // 判断是否加载完，如若加载完值变为1，未加载完时还是0，return出去不执行bindDownLoad整个函数
        return
      }
      that.pageIndex = that.pageIndex + 1 // 当前页+1
      console.log('===========上拉刷新pageNo' + that.pageIndex)
      // 请求后台
      that.loadingNow = 0 // 赋值
      that.getGoodsList()
    },
    scroll (e) {
      var that = this
      if (e.mp.detail.scrollTop >= that.top) {
        that.fixtop = true
      } else {
        that.fixtop = false
      }
    },
    getGoodsList () {
      var that = this
      that.$httpWX.post({
        url: '/product/list',
        data: {
          cateId: that.cateId, // 分类ID（1-2-3）
          current: that.pageIndex, // 当前页
          size: 10
        },
        header: that.globalData.Token
        // header: ''
      }).then(res => {
        console.log(res)
        that.loadingNow = 1 // 赋值
        that.goodsList = that.goodsList.concat(res.data.records)
        console.log(that.goodsList)
        if (res.data.records.length < 10) {
          that.loadingFinish = true
        }
      })
    },
    // 微信授权登录获取token
    getWxLoginToken () {
      var that = this
      console.log(that.globalData.code)
      console.log(that.globalData.encryptedData)
      console.log(that.globalData.iv)
      console.log(that.globalData.rawData)
      console.log(that.globalData.signature)
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
      }).then(res => {
        console.log('获取token成功')
        console.log(res)
        that.globalData.Token = res.data.token
        // 根据分享过来的参数 进行页面跳转（店铺页或是商品详情页）
        // if (that.routers === 1) {
        //   that.$router.replace({path: '/pages/shopping/shopHome'})
        // }
        console.log('请求数据')
        // 请求数据
        that.getGoodsList()
      })
    }
  }
}
</script>

<style scoped lang="less">
  .indexBanner {
    position: relative;
    width: 750rpx;
    height: 480rpx;
    /*background: #0f0;*/
    .indexBannerBg {
      width: 100%;
      height: 304rpx;
      background: #AEB6AB;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 726rpx;
      height: 100%;
      margin: 0 12rpx;
    }
  }
  .box {
    width: 7.5rem;
    height: 4.8rem;
  }
  .indexTab {
    width: 100%;
    height: 102rpx;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    img {
      width: 120rpx;
      height: 42rpx;
    }
    .tabOn {
      margin-top: 20rpx;
    }
    .tabHeight {
      width: 120rpx;
      height: 28rpx;
    }
    .tabOneHot {
      width: 34rpx;
      height: 38rpx;
      padding-right: 8rpx;
    }
  }
  .fix {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    animation: move 0.2s linear;
  }
  .goodsListDiv {
    margin-bottom: 98rpx;
    .loadingFinish {
      width: 100%;
      height: .9rem;
      line-height: .9rem;
      text-align: center;
      color: #999;
      font-size: .26rem;
    }
  }
  /*<!--授权定义样式-->*/
  .fixedAuthorize {
    position: fixed;
    top: 0;
    left: 0;
    width: 750rpx;
    height: 100vh;
    z-index: 1000;
    background: #fff;
  }
  .header {
    margin: 90rpx 0 90rpx 50rpx;
    border-bottom: 1px solid #ccc;
    text-align: center;
    width: 650rpx;
    height: 300rpx;
    line-height: 450rpx;
  }

  .header img {
    width: 200rpx;
    height: 200rpx;
  }

  .content {
    margin-left: 50rpx;
    margin-bottom: 90rpx;
  }

  .content span {
    display: block;
    color: #9d9d9d;
    margin-top: 40rpx;
  }

  .bottom {
    border-radius: 80rpx;
    margin: 70rpx 50rpx;
    font-size: 35rpx;
  }
</style>
