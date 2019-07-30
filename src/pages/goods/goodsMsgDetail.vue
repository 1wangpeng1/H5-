<template>
    <div>
      <div class="swiper-box">
        <img class='peoShareGoods' @click="peoShareGoods" src="../../../static/images/peoShareShop.png" />
        <swiper class="goodsSwiper"
                autoplay="autoplay" interval="3000" @change="swiperChange">
          <block v-for="(item, index) in productMsg.imgList" :key="index">
            <swiper-item>
              <image :src="item" class="slide-image" width="355" height="150"/>
            </swiper-item>
          </block>
        </swiper>
        <div class="dots">
          <block v-for="(item, index) in productMsg.imgList" :key="index">
            <div class="dot" :class="index === swiperCurrent ? ' active' : ''"></div>
          </block>
        </div>
      </div>
      <div class="goodsMsg">
        <div class="goodsName">{{productMsg.name}}</div>
        <div class="goodsPrice">￥{{productMsg.price}}</div>
        <div class="goodsDetail">{{productMsg.brief}}</div>
        <div class="goodsAddress">
          <span>发货</span>
          <van-icon class="icon" name="location-o" /><span>{{productMsg.site}}</span>
        </div>
        <div class="goodsBuy">
          <div>配送：免运费</div>
          <div @click="buyDialog" class="buyBtn">购买</div>
        </div>
      </div>
      <div class="goodsImg">

      </div>
      <!--GoodsList组件中购买按钮弹框-->
      <van-popup z-index="1000" :show="goodsDialogShow" close-on-click-overlay="false" :close="onClose">
        <div class="goodsDialogPopup">
          <div class="goodsDetail">
            <div class="goodsImg"><img :src="productMsg.imgList[0]" /></div>
            <div class="goodsDetailRight">
              <div class="goodsTitle">{{productMsg.name}}</div>
              <div class="goodswords">{{productMsg.brief}}</div>
              <div class="goodsdPrice">￥{{productMsg.price}}</div>
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
  import Card from '../../palette/goodsCard'
  const card = new Card()
  const customStyle = 'margin:0rpx 75rpx;background: #fff;'
  export default {
    name: 'goodsMsgDetail',
    config: {
      navigationBarTitleText: '详情'
    },
    data () {
      return {
        pid: '', // 商品ID
        productMsg: {}, // 商品数据
        swiperCurrent: 0,
        goodsDialogShow: false,
        sharePopup: false, // 分享店铺弹框
        shareImg: '',
        customStyle: customStyle,
        template: '', // 分享店铺数据
        goodsBuyNum: 1, // 弹框购买数量
        totlePrice: 0 // 弹框商品总价
      }
    },
    onLoad () {
      this.pid = this.$route.query.pid
      console.log(this.pid)
      this.getProductMsg()
    },
    methods: {
      swiperChange (e) {
        // console.log(e)
        let current = e.mp.detail.current
        let that = this
        that.swiperCurrent = current
      },
      buyDialog () {
        console.log('显示弹框')
        this.goodsDialogShow = true
        this.goodsBuyNum = 1 // 购买数量清0
        this.totlePrice = this.productMsg.price
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
        return num * this.productMsg.price
      },
      addCartBtn () {

      },
      buyBtn () {
        this.$router.push({ path: '/pages/goods/sureOrder' })
        // this.globalData.sureOrderList = this.productMsg
      },
      getProductMsg () {
        var that = this
        that.$httpWX.post({
          url: '/product/details',
          data: {
            id: that.pid
          },
          header: that.globalData.Token
          // header: ''
        }).then(res => {
          that.productMsg = res.data
          console.log(that.productMsg)
          // 动态修改页面title
          wx.setNavigationBarTitle({
            title: that.productMsg.name
          })
        })
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
        var userInfo = {
          price: this.productMsg.price,
          detail: this.productMsg.brief,
          bg: this.productMsg.imgList[0]
        }
        this.template = card.do(userInfo)
        Toast.clear()
        this.sharePopup = true // 分享弹窗显示
      },
      // 店铺分享按钮
      peoShareGoods () {
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
        path: '/pages/goods/goodsMsgDetail', // 默认是当前页面，必须是以‘/’开头的完整路径
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
        console.log(eData)
        // 此处可以修改 shareObj 中的内容
        shareObj.path = '/pages/goods/goodsMsgDetail?productId=' + that.productMsg.id + '&shopId=' + that.productMsg.id
      }
      // 返回shareObj
      return shareObj
    }
  }
</script>

<style scoped lang="less">
  .swiper-box{
    position: relative;
    width: 100%;
    .peoShareGoods {
      position: absolute;
      top: 0;
      right: 0;
      width: 60rpx;
      height: 56rpx;
      z-index: 9;
    }
    .goodsSwiper {
      width: 750rpx;
      height: 750rpx;
      image {
        width: 100%;
        height: 100%;
      }
    }
    .dots{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 20rpx;
      display: flex;
      justify-content: center;
      .dot{
        margin: 0 10rpx;
        width: 14rpx;
        height: 14rpx;
        background: #fff;
        transition: all .6s;
        transform:rotate(45deg);
        -ms-transform:rotate(45deg); 	/* IE 9 */
        -moz-transform:rotate(45deg); 	/* Firefox */
        -webkit-transform:rotate(45deg); /* Safari 和 Chrome */
        -o-transform:rotate(45deg);
      }
      .active{
        background: #B97E72;
      }
    }
  }
  .goodsMsg {
    width: 100%;
    height: 350rpx;
    font-size: 28rpx;
    color: #666;
    border-bottom: 14rpx solid #F8F8F8;
    padding: 36rpx 24rpx 48rpx;
    box-sizing: border-box;
    .goodsName {
      font-size: 32rpx;
      color: #333;
    }
    .goodsPrice {
      color: #B97E72;
      font-size: 32rpx;
      margin: 16rpx 0;
    }
    .goodsAddress {
      margin: 16rpx 0 4rpx;
      .icon {
        width: 24rpx;
        height: 30rpx;
        margin: 0 10rpx 0 42rpx;
        vertical-align: middle;
      }
    }
    .goodsBuy {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .buyBtn {
        width: 122rpx;
        height: 52rpx;
        line-height: 52rpx;
        color: #fff;
        font-size: 30rpx;
        background: linear-gradient(to bottom, #E6B58B, #B97E72);
        -webkit-border-radius: 4rpx;
        -moz-border-radius: 4rpx;
        border-radius: 4rpx;
        text-align: center;
      }
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
