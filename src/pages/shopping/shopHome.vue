<template>
    <div>
      <scroll-view
        scroll-y
        style="height: 100vh;"
        @scrolltolower="downLoad"
        @scroll="scroll"
      >
        <div class="shopCard box">
          <div class="shopCardBg">
            <img class="shopCardBgImg" :src="shoppingMsg.background" />
            <div class="functionBtn">
              <img class='peoShareShop' @click="shareShopBtn" src="../../../static/images/peoShareShop.png" />
            </div>
            <navigator v-if="shopHome === 'shopHomeMy'" :url="'/pages/shopping/shopGoodsManage?shopHomeId='+shopHomeId" hover-class="none"><img class="enterShop" src="../../../static/images/goodsManage.png" /></navigator>
            <navigator v-if="shopHome === 'shopHomeOther'" open-type="switchTab" url="/pages/setShop" hover-class="none"><img class="enterShop" src="../../../static/images/otherOpen.png" /></navigator>
            <div class="shopSeller">
              <img class="shopSellerPic" :src="shoppingMsg.pic" />
              <div class="shopSellerMsg">
                <div class="shopSellerName">
                  <span>{{shoppingMsg.storeName}}</span>
                  <img v-if="shopHome === 'shopHomeMy'" @click="editShoppingMsg" src="../../../static/images/editName.png" />
                </div>
                <div class="shopSellerDet">{{shoppingMsg.detail}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="indexTab" id="fixd" :class="fixtop? 'fix':''">
          <div class="tabOne" @click="tabOneClick">
            <img class="tabOneHot" src="../../../static/images/tabOne1.png" :style="{'margin-bottom':marginBottom?'10rpx':'0rpx'}" />
            <img :src="tabOne ? tabOneImg.active : tabOneImg.normal" :class="tabOne ? 'tabOn' : 'tabHeight'" />
          </div>
          <div class="tabTwo" @click="tabTwoClick">
            <img :src="tabTwo ? tabTwoImg.active : tabTwoImg.normal" :class="tabTwo ? 'tabOn' : 'tabHeight'" />
          </div>
          <div class="tabThree" @click="tabThreeClick">
            <img :src="tabThree ? tabThreeImg.active : tabThreeImg.normal" :class="tabThree ? 'tabOn' : 'tabHeight'" />
          </div>
        </div>
        <div class="goodsListDiv">
          <GoodsList v-for="(item,index) in goodsList" :key="index" :goodsList="item" :list-type="shopHome" @check="buyDialog"></GoodsList>
          <div class="loadingFinish" v-if="loadingFinish">—— 数据已全部加载 ——</div>
        </div>
      </scroll-view>
      <!--GoodsList组件中购买按钮弹框-->
      <van-popup z-index="1000" :show="goodsDialogShow" close-on-click-overlay="false" :close="onClose">
        <div class="goodsDialogPopup">
          <div class="goodsDetail">
            <div class="goodsImg"><img :src="goodsDialogMsg.listImg" /></div>
            <div class="goodsDetailRight">
              <div class="goodsTitle">{{goodsDialogMsg.name}}</div>
              <div class="goodswords">{{goodsDialogMsg.brief}}</div>
              <div class="goodsdPrice">￥{{goodsDialogMsg.price}}</div>
            </div>
          </div>
          <div class="goodsNum">
            <div class="goodsNumChange">
              <div>购买数量</div>
              <div>
                <van-stepper :value="goodsBuyNum" @change="goodsNumChange" />
              </div>
            </div>
            <div class="goodsNumRecord">共{{goodsBuyNum}}件商品 小计：<span>￥{{totlePrice}}</span></div>
            <div class="goodsBuyBtn">
              <div class="addCartBtn" @click="addCartBtn">加入购物车</div>
              <div class="buyBtn" @click="buyBtn">购买</div>
            </div>
          </div>
          <img class="closeGoodsDialog" src="../../../static/images/wrong.png" @click="onClose" />
        </div>
      </van-popup>
      <!--底部购物车-->
      <div class="shopCardDiv" v-if="shopCartLists.length > 0">
        <div class="shopCardDivLeft" @click="shopCartPopup">
          <img src="../../../static/images/shopCart.png" />
          <span class="tips">{{shopCartLists.length}}</span>
        </div>
        <div class="shopCardDivRight">
          <div class="shopCardAllMoney">￥<span>{{allMoney}}</span></div>
          <div class="shopCardBtn" @click="shopCartBuyBtn">立即下单</div>
        </div>
      </div>
      <van-popup z-index="99" :show="shopCartShow" position="bottom" close-on-click-overlay="false" :close="shopCartClose">
        <div class="shopCartPopup" @touchmove.prevent>
          <div class="clearShopCart">
            <img @click="clearShopCartBtn" src="../../../static/images/delect.png" />
            <span @click="clearShopCartBtn">清空购物车</span>
          </div>
          <div class="shopCartGoods">
            <div class="shopCartList" v-for="(item,index) in shopCartLists" :key="index">
              <div>{{item.name}}</div>
              <div>￥{{item.price * item.num}}</div>
              <van-stepper v-model="item.num" :value="item.num" :min="0" @change="shopCartNumChange($event, item.productId)" />
            </div>
          </div>
          <div class="tips"></div>
        </div>
      </van-popup>
      <!--分享弹窗-->
      <div class="popupBg" v-if="sharePopup" @click="popupBg">
        <painter :customStyle="customStyle" @click.stop='' @imgOK="onImgOk" :palette="template" :dirty="true"/>
        <div class="functionBtn">
          <button data-name="shareBtn" plain="true" open-type="share" class="shareBtn" @click.stop=""><img src="../../../static/images/shareWx.png" /> 微信好友</button>
          <div class="saveBtn" @click.stop="save"><img src="../../../static/images/shareDown.png" /> 保存图片</div>
        </div>
      </div>
      <!--这种特殊占位符是必须有的！-->
      <van-toast id="van-toast"/>
    </div>
</template>

<script>
  import Toast from 'vant-weapp/dist/toast/toast'
  import Card from '../../palette/card'
  import GoodsList from '../../components/goodsList'
  const card = new Card()
  const customStyle = 'margin:0rpx 75rpx;background: #fff;'
export default {
    name: 'shopHome',
    config: {
      // navigationBarTitleText: '我的花店'
      // navigationBarBackgroundColor: '#F8F8F9',
      // navigationBarTextStyle: 'black'
    },
    data () {
      return {
        userInfo: '',
        shopHomeId: '', // 店铺ID
        shoppingMsg: {}, // 店铺top信息
        shopHome: 'shopHomeOther', // shopHomeOther买家看到的样式  shopHomeMy卖家看到的样式
        sharePopup: false, // 分享店铺弹框
        shareImg: '',
        customStyle: customStyle,
        template: '', // 分享店铺数据
        goodsDialogShow: false, // 购买弹框显示
        goodsDialogMsg: {}, // 购买弹框显示数据
        goodsBuyNum: 1, // 弹框购买数量
        totlePrice: 0, // 弹框商品总价
        allMoney: 0, // 购物车总价
        shopCartShow: false, // 购物车弹框
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
        tabOneImg: {normal: require('../../../static/images/tabOne2.png'),
          active: require('../../../static/images/tabOne_on.png')},
        tabTwoImg: {normal: require('../../../static/images/tabTwo.png'),
          active: require('../../../static/images/tabTwo_on.png')},
        tabThreeImg: {normal: require('../../../static/images/tabThree.png'),
          active: require('../../../static/images/tabThree_on.png')},
        shopCartLists: [], // 购物车列表
        goodsList: []
      }
    },
    components: {
      GoodsList
    },
    onLoad: function () {
      console.log('page shopHome onLoad')
      var that = this
      console.log(that.$route.query.shopHomeId)
      that.shopHomeId = that.$route.query.shopHomeId // 店铺ID
      // that.shopHomeId = 18
      // that.getShoppingMsg() // 花店top信息
      // that.getShoppingGoodsList() // 花店商品数据
      // that.userInfo = that.globalData.userInfo // 全局变量
      // console.log(that.globalData.userInfo)
      that.shopHome = 'shopHomeMy' // 初始化根据进来的路口判断页面显示
      // 吸顶操作
      let res = wx.getSystemInfoSync()
      that.windowWidth = res.windowWidth
      const query = wx.createSelectorQuery()
      query.select('#fixd', '.nav').boundingClientRect()
      query.exec(function (res) {
        that.top = res[0].top
      })
    },
    onShow () {
      this.cateId = 1
      this.pageIndex = 1
      this.loadingFinish = false
      this.goodsDialogShow = false
      this.goodsList = []
      this.shopCartLists = []
      this.getShoppingMsg() // 花店top信息
      this.getShoppingGoodsList() // 花店商品数据
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
        this.getShoppingGoodsList()
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
        this.getShoppingGoodsList()
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
        this.getShoppingGoodsList()
      },
      buyDialog (item) {
        console.log('显示弹框')
        console.log(item)
        this.goodsDialogMsg = item
        this.goodsDialogShow = true
        this.goodsBuyNum = 1 // 购买数量清0
        this.totlePrice = this.goodsDialogMsg.price
      },
      onClose () {
        this.goodsDialogShow = false
      },
      goodsNumChange (event) {
        console.log('购买数量改变' + event.mp.detail)
        this.goodsBuyNum = event.mp.detail
        this.totlePrice = this.totalPriceCount(event.mp.detail)
      },
      totalPriceCount (num) {
        console.log('调用函数')
        return num * this.goodsDialogMsg.price
      },
      addCartBtn () {
        var that = this
        console.log('加入购物车')
        console.log('that.goodsBuyNum' + that.goodsBuyNum)
        // 判断是否购物车中已经有商品，如果有就增加数量，反之加入这个商品
        let foodIndex = that.shopCartLists.findIndex(food => food.productId === that.goodsDialogMsg.id)
        // foodIndex为-1表示不存在 ,要加入商品
        if (foodIndex === -1) {
          that.shopCartLists.push({
            name: that.goodsDialogMsg.name,
            productId: that.goodsDialogMsg.id,
            price: that.goodsDialogMsg.price,
            brief: that.goodsDialogMsg.brief,
            listImg: that.goodsDialogMsg.listImg,
            num: that.goodsBuyNum
          })
          // foodIndex存在 ,更新数据
        } else {
          that.shopCartLists[foodIndex].num = that.shopCartLists[foodIndex].num + that.goodsBuyNum
        }
        console.log(that.shopCartLists)
        wx.showToast({
          title: '添加成功',
          icon: 'success',
          duration: 2000
        })
        that.goodsDialogShow = false
        this.allMoney = this.allMoneyCount()
      },
      allMoneyCount () {
        var allMoney = 0
        for (var i = 0; i < this.shopCartLists.length; i++) {
          allMoney = allMoney + this.shopCartLists[i].price * this.shopCartLists[i].num
        }
        return allMoney
      },
      // 立即购买
      buyBtn () {
        console.log('立即购买' + this.totlePrice)
        console.log(this.goodsDialogMsg)
        this.goodsDialogMsg.num = this.goodsBuyNum
        this.$router.push({ path: '/pages/goods/sureOrder' })
        var ClearingArr = []
        ClearingArr.push(this.goodsDialogMsg)
        this.globalData.sureOrderList = ClearingArr // 订单数据存储
        this.globalData.sureOrderShopId = this.shopHomeId // 店铺数据存储
        this.globalData.sureOrderShopName = this.shoppingMsg.storeName // 店铺数据存储
      },
      // 购物车购买
      shopCartBuyBtn () {
        console.log(this.shopCartLists)
        this.$router.push({ path: '/pages/goods/sureOrder' })
        this.globalData.sureOrderList = this.shopCartLists // 订单数据存储
        this.globalData.sureOrderShopId = this.shopHomeId // 店铺数据存储
        this.globalData.sureOrderShopName = this.shoppingMsg.storeName // 店铺数据存储
      },
      editShoppingMsg () {
        var shoppingMsg = JSON.stringify(this.shoppingMsg)
        this.$router.push({ path: '/pages/shopping/openShopping/editShopping', query: {changeShoppingMsg: shoppingMsg, openShopping: false} })
      },
      // 清空购物车
      clearShopCartBtn () {
        this.shopCartLists = []
        wx.showToast({
          title: '成功清空购物车',
          icon: 'success',
          duration: 2000
        })
        this.shopCartShow = false
      },
      // 购物车
      shopCartPopup () {
        this.shopCartShow = !this.shopCartShow
      },
      shopCartClose () {
        this.shopCartShow = false
      },
      shopCartNumChange (event, productId) {
        console.log('购物车price' + productId)
        console.log(this.shopCartLists)
        var that = this
        if (event.mp.detail < 1) {
          console.log('数量减少到0即删除商品')
          for (var i = 0; i < that.shopCartLists.length; i++) {
            if (that.shopCartLists[i].productId === productId) {
              that.shopCartLists.splice(i, 1)
            }
          }
          if (that.shopCartLists.length === 0) { // 减0 减到数组长度为0 购物车列表消失
            this.shopCartShow = false
          }
        } else {
          for (var j = 0; j < that.shopCartLists.length; j++) {
            if (that.shopCartLists[j].productId === productId) {
              that.shopCartLists[j].num = event.mp.detail
            }
          }
          this.allMoney = this.allMoneyCount()
        }
      },
      getShoppingMsg () {
        var that = this
        that.$httpWX.post({
          url: '/store/info',
          data: {
            storeId: that.shopHomeId
            // storeId: 18
          },
          header: that.globalData.Token
        }).then(res => {
          console.log(res)
          that.shoppingMsg = res.data
          // 动态修改页面title
          wx.setNavigationBarTitle({
            // title: that.shoppingMsg.storeName + '的花店'
            title: that.shoppingMsg.storeName
          })
        })
      },
      getShoppingGoodsList () {
        var that = this
        that.$httpWX.post({
          url: '/store/seller/product/list',
          data: {
            storeId: that.shopHomeId,
            // storeId: 18, // 店铺ID
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
        that.getShoppingGoodsList()
      },
      scroll (e) {
        var that = this
        if (e.mp.detail.scrollTop >= that.top) {
          that.fixtop = true
        } else {
          that.fixtop = false
        }
      },
      save () {
        console.log('on save click')
        // shareImg 得到的图片
        var that = this
        // 获取相册授权
        wx.getSetting({
          success (res) {
            if (!res.authSetting['scope.writePhotosAlbum']) {
              wx.authorize({
                scope: 'scope.writePhotosAlbum',
                success () {
                  console.log('授权成功')
                  wx.saveImageToPhotosAlbum({
                    filePath: that.shareImg,
                    success (res) {
                      console.log('保存图片成功')
                      console.log(res)
                      wx.showToast({
                        title: '保存成功',
                        icon: 'success',
                        duration: 2000
                      })
                    }
                  })
                },
                fail () {
                  // 用户拒绝了授权
                  wx.showModal({
                    title: '保存图片',
                    content: '保存图片需要您授权',
                    showCancel: true,
                    confirmText: '确定',
                    success: function (res) {
                      if (res.confirm) {
                        // 打开设置页面
                        wx.openSetting({
                          success: function (data) {
                            if (data.authSetting['scope.writePhotosAlbum']) {
                              // 用户已经授权过了
                              wx.saveImageToPhotosAlbum({
                                filePath: that.shareImg,
                                success (res) {
                                  console.log('保存图片成功')
                                  console.log(res)
                                  wx.showToast({
                                    title: '保存成功',
                                    icon: 'success',
                                    duration: 2000
                                  })
                                }
                              })
                            } else {
                              console.log('授权失败')
                            }
                          },
                          fail: function (data) {
                            console.log('openSetting: fail')
                          }
                        })
                      } else if (res.cancel) {
                        console.log('用户点击取消')
                      }
                    }
                  })
                }
              })
            } else {
              // 用户已经授权过了
              wx.saveImageToPhotosAlbum({
                filePath: that.shareImg,
                success (res) {
                  console.log('保存图片成功')
                  console.log(res)
                  wx.showToast({
                    title: '保存成功',
                    icon: 'success',
                    duration: 2000
                  })
                }
              })
            }
          }
        })
      },
      onImgOk (e) {
        this.shareImg = e.mp.detail.path
        // 两种路径是一样的
        console.log(e.mp.detail.path)
        console.log(e.target.path)
      },
      popupBg () {
        this.sharePopup = false // 分享弹窗隐藏
      },
      getShareMsg () {
        // this.name = 'https://qhyxpicoss.kujiale.com/r/2017/12/04/L3D123I45VHNYULVSAEYCV3P3X6888_3200x2400.jpg@!70q'
        var userInfo = {
          avatar: this.shoppingMsg.pic,
          storeName: this.shoppingMsg.storeName,
          detail: this.shoppingMsg.detail,
          bg: this.shoppingMsg.background
        }
        this.template = card.do(userInfo)
        Toast.clear()
        this.sharePopup = true // 分享弹窗显示
      },
      // 店铺分享按钮
      shareShopBtn () {
        Toast.loading({
          duration: 0,
          mask: true,
          message: '生成图片中'
        })
        //
        this.getShareMsg()
      }
    },
    onShareAppMessage: function (options) {
      // var that = this;
      // 设置菜单中的转发按钮触发转发事件时的转发内容
      var shareObj = {
        title: '转发的标题', // 默认是小程序的名称(可以写slogan等)
        path: '/pages/shopping/shopHome', // 默认是当前页面，必须是以‘/’开头的完整路径
        imgUrl: '', // 自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
        success: function (res) {
          // 转发成功之后的回调
          if (res.errMsg === 'shareAppMessage:ok') {
          }
        },
        fail: function (res) {
          // 转发失败之后的回调
          if (res.errMsg === 'shareAppMessage:fail cancel') {
            // 用户取消转发
          } else if (res.errMsg === 'shareAppMessage:fail') {
            // 转发失败，其中 detail message 为详细失败信息
          }
        }
      }
      // 来自页面内的按钮的转发
      if (options.from === 'button') {
        var eData = options.target.dataset
        var that = this
        console.log(eData.name)
        // 此处可以修改 shareObj 中的内容
        shareObj.path = '/pages/shopping/shopHome?shopId=' + that.shopHomeId
      }
      // 返回shareObj
      return shareObj
    }
}
</script>

<style scoped lang="less">
  .shopCard {
    width: 750rpx;
    height: 414rpx;
    /*padding: 30rpx 16rpx 10rpx;*/
    box-sizing: border-box;
    .shopCardBg {
      position: relative;
      width:100%;
      height:100%;
      .shopCardBgImg {
        width: 100%;
        height: 100%;
      }
    }
    .functionBtn {
      .peoShareShop {
        position: absolute;
        z-index: 9;
        top: 0;
        right: 0;
        width: 60rpx;
        height: 56rpx;
      }
    }
    .enterShop {
      position: absolute;
      z-index: 9;
      bottom: 14rpx;
      width: 220rpx;
      height: 68rpx;
      margin-left: -110rpx;
      left: 50%;
    }
    .shopSeller {
      position: absolute;
      z-index: 9;
      top: 60rpx;
      left: 70rpx;
      display: flex;
      justify-content: left;
      align-items: center;
      /*border: 1px solid #ccc;*/
      .shopSellerPic {
        width: 120rpx;
        height: 120rpx;
        border-radius: 50%;
        background: #fff;
        margin-right: 34rpx;
      }
      .shopSellerMsg {
        .shopSellerName {
          font-size: 35rpx;
          color: #fff;
          margin-bottom: 4rpx;
          img {
            padding-left: 20rpx;
            width: 24rpx;
            height: 26rpx;
          }
        }
        .shopSellerDet {
          font-size: 25rpx;
          color: #aaa;
        }
      }
    }
  }
  .box {
    width: 7.5rem;
    height: 4.14rem;
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
  .goodsDialogPopup {
    position: relative;
    width: 678rpx;
    height: 606rpx;
    /*padding-top: 26px;*/
    background: #fff;
    -webkit-border-radius: 12rpx;
    -moz-border-radius: 12rpx;
    border-radius: 12rpx;
    text-align: center;
    overflow-y:hidden;
    .closeGoodsDialog {
      position: absolute;
      top: 18rpx;
      right: 18rpx;
      width: 38rpx;
      height: 38rpx;
    }
    .goodsDetail {
      width: 100%;
      height: 254rpx;
      display: flex;
      justify-content: left;
      align-items: center;
      border-bottom: 2rpx solid #ededed;
      .goodsImg {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 196rpx;
        height: 196rpx;
        border: 1px solid #ccc;
        img {
          width: 75%;
          height: 75%;
          max-width: 100%;
          max-height: 100%;
        }
      }
      .goodsDetailRight {
        flex: 1;
        padding: 0 40rpx 0 18rpx;
        text-align: left;
        .goodsTitle {
          font-size: 40rpx;
          color: #333;
        }
        .goodswords {
          font-size: 26rpx;
          color: #999;
          margin: 6rpx 0 16rpx;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .goodsdPrice {
          color: #B97E72;
          font-size: 28rpx;
        }
      }
    }
    .goodsNum {
      padding: 36rpx 40rpx 32rpx 50rpx;
      box-sizing: border-box;
      font-size: 28rpx;
      color: #333;
      .goodsNumChange {
        display: flex;
        justify-content: space-between;
      }
      .goodsNumRecord {
        width: 100%;
        text-align: right;
        margin: 58rpx 0 54rpx;
        span {
          color: #B97E72;
        }
      }
      .goodsBuyBtn {
        display: flex;
        justify-content: space-between;
        padding: 0 8rpx;
        .addCartBtn {
          font-size: 32rpx;
          width: 256rpx;
          height: 68rpx;
          line-height: 68rpx;
          text-align: center;
          border: 2rpx solid #dedede;
          -webkit-border-radius: 4rpx;
          -moz-border-radius: 4rpx;
          border-radius: 4rpx;
        }
        .buyBtn {
          font-size: 32rpx;
          width: 256rpx;
          height: 68rpx;
          color: #fff;
          line-height: 68rpx;
          text-align: center;
          background: linear-gradient(to bottom, #E6B58B, #B97E72);
          -webkit-border-radius: 4rpx;
          -moz-border-radius: 4rpx;
          border-radius: 4rpx;
        }
      }
    }
  }
  /*购物车样式*/
  .shopCardDiv {
    position: fixed;
    bottom: 0;
    z-index: 100;
    width: 7.5rem;
    height: 1.24rem;
    background: #fff;
    box-shadow: 0 0 20rpx 0 rgba(119, 131, 151, 0.5);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .28rem 0 .42rem;
    box-sizing: border-box;
    .shopCardDivLeft {
      position: relative;
      margin-right: .42rem;
      img {
        width: .7rem;
        height: .7rem;
      }
      .tips {
        position: absolute;
        top: -.01rem;
        right: -.28rem;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        background: #D83A01;
        font-size: .26rem;
        color: #fff;
        width: .4rem;
        height: .4rem;
        line-height: .4rem;
        text-align:center;
      }
    }
    .shopCardDivRight {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #B97E72;
      .shopCardAllMoney {
        font-size: .26rem;
        height:124rpx;
        line-height:124rpx;
        span {
          font-size: .34rem;
        }
      }
      .shopCardBtn {
        width: 2.56rem;
        height: .8rem;
        line-height: .8rem;
        color: #fff;
        font-size: .36rem;
        text-align: center;
        background: linear-gradient(to bottom, #E6B58B, #B97E72);
        -webkit-border-radius: 4rpx;
        -moz-border-radius: 4rpx;
        border-radius: 4rpx;
      }
    }
  }
  .shopCartPopup {
    width: 100%;
    .clearShopCart {
      height: .88rem;
      background: #F4F4F4;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-right: .28rem;
      box-sizing: border-box;
      color: #999;
      font-size: .26rem;
      img {
        width: .32rem;
        height: .32rem;
        vertical-align: middle;
        padding-right: .08rem;
      }
    }
    .shopCartGoods {
      height: auto;
      max-height: 4rem;
      overflow-y: scroll;
      .shopCartList {
        display: flex;
        justify-content: space-between;
        height: 1.2rem;
        line-height: 1.2rem;
        font-size: .32rem;
        padding: 0 .28rem 0 .5rem;
        .plus {
          color: red;
        }
      }
    }
    .tips {
      height: 1.24rem;
      background: #fff;
    }
  }
  /*分享店铺弹框*/
  .popupBg {
    position: fixed;
    top:0;
    background: rgba(000,000,000,0.8);
    width: 100%;
    height: 100vh;
    padding-top: 1.5rem;
    box-sizing: border-box;
    z-index:999;
    .functionBtn {
      position: fixed;
      top: 8.5rem;
      width: 6rem;
      height: 1rem;
      margin: 0 .75rem;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      color: #666666;
      font-size: .28rem;
      button[plain]{
        border:0;
        color:#666;
        font-size: .28rem;
        display:inline-block;
        line-height: .4rem;
        height: 1rem;
      }
      .shareBtn {
        width: 50%;
        text-align: center;
        height: 1rem;
        img {
          width: .38rem;
          height: .32rem;
          display: inline-block;
          vertical-align: middle;
        }
      }
      .saveBtn {
        flex: 1;
        text-align: center;
        height: 1rem;
        img {
          width: .26rem;
          height: .26rem;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }
</style>
