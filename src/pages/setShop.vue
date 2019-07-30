<template>
  <div>
    <!--已开花店样式div-->
    <div v-if="openShopping === true" class="shopCard">
      <div class="shopCardBg" v-for="(item, index) in shopMsg" :key="index">
        <img class="shopCardBgImg" :src="item.background" />
        <div class="functionBtn">
          <img class=‘peoShareShop’ src="../../static/images/peoShareShop.png" @click="shareShop(item)" />
          <img class=‘delectShop’ src="../../static/images/delectShop.png" @click="delectShop(item.id)" />
          <img class=‘editShop’ src="../../static/images/editShop.png" @click="editShoppingMsg(item)" />
        </div>
        <div @click="jumpShopHome(item.id)"  hover-class="none"><img class="enterShop" src="../../static/images/enterShop.png" /></div>
        <div class="shopSeller">
          <img class="shopSellerPic" :src="item.pic" />
          <div class="shopSellerMsg">
            <div class="shopSellerName">
              <span>{{item.storeName}}</span>
              <img src="../../static/images/editName.png" @click="editShoppingMsg(item)" />
            </div>
            <div class="shopSellerDet">{{item.detail}}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="openShopping === true" class="invitefriend"><img @click="friendPopup" src="../../static/images/invitefriend.png" /></div>
    <!--未开花店样式-->
    <div v-else class="startOpen">
      <!--未开店-->
      <navigator class="startOpenBtn" url="/pages/shopping/openShopping/editShopping?openShopping=true"></navigator>
    </div>
    <!--delectShow弹框-->
    <van-popup z-index="1000" :show="delectShow" close-on-click-overlay="false" :close="onClose">
      <div class="delectPopup">
        <div class="delectTitle">
          <img src="../../static/images/warn.png" />
          <span>确定要删除店铺？</span>
        </div>
        <div class="delectContent">删除店铺后您邀请的朋友店铺将和您取消关系！</div>
        <div class="delectBtn">
          <div class="delectLeftBtn" @click="sureDelectBtn">删除店铺</div>
          <div class="delectRightBtn" @click="onClose">重新开店</div>
        </div>
        <img class="closeDelect" src="../../static/images/wrong.png" @click="onClose" />
      </div>
    </van-popup>
    <!--邀请好友弹框-->
    <van-popup z-index="1000" :show="friendShow" close-on-click-overlay="false" :close="friendClose">
      <div class="friendPopup delectPopup">
        <div class="delectTitle">
          <span>成功邀请好友注册店铺</span>
        </div>
        <div class="delectContent">你会获得好友店铺销售额5%的奖励</div>
        <div class="delectBtn">
          <img src="../../static/images/invitefriend.png" />
        </div>
        <img class="closeDelect" src="../../static/images/wrong.png" @click="friendClose" />
      </div>
    </van-popup>
    <!--分享弹窗-->
    <div class="popupBg" v-if="sharePopup" @click="popupBg">
      <painter :customStyle="customStyle" @click.stop='' @imgOK="onImgOk" :palette="template" :dirty="true"/>
      <div class="functionBtn">
        <button data-name="shareBtn" plain="true" open-type="share" class="shareBtn" @click.stop=""><img src="../../static/images/shareWx.png" /> 微信好友</button>
        <div class="saveBtn" @click.stop="save"><img src="../../static/images/shareDown.png" /> 保存图片</div>
      </div>
    </div>
    <!--这种特殊占位符是必须有的！-->
    <van-toast id="van-toast"/>
    <myTabbar :tabbar='tabbar'></myTabbar>
  </div>
</template>

<script>
  import Toast from 'vant-weapp/dist/toast/toast'
  import myTabbar from '../components/myTabbar'
  import { getQuery } from '../utils/CurrentPage'
  import Card from '../palette/card'
  const card = new Card()
  const customStyle = 'margin:0rpx 75rpx;background: #fff;'
  export default {
    name: 'setShop',
    config: {
      // navigationBarTitleText: '花店'
    },
    data () {
      return {
        tabbar: {},
        openShopping: true, // 是否开启店铺
        shopMsg: [], // 店铺信息
        delectShopId: '', // 将要删除的店铺ID
        delectShow: false,
        friendShow: false,
        sharePopup: false, // 分享店铺弹框
        shareImg: '',
        customStyle: customStyle,
        template: '' // 分享店铺数据
      }
    },
    components: {
      myTabbar
    },
    onLoad () {
      console.log('page setShop onLoad')
      wx.hideTabBar()
      var that = this
      that.tabbar = getQuery()
      console.log(that.tabbar)
    },
    onShow () {
      // 判断我的店铺是否有店
      this.myStore()
    },
    methods: {
      delectShop (id) {
        var that = this
        that.delectShow = true
        console.log(id)
        that.delectShopId = id
      },
      onClose () {
        this.delectShow = false
      },
      sureDelectBtn () {
        var that = this
        that.$httpWX.post({
          url: '/store/close',
          data: {
            storeId: that.delectShopId
          },
          header: that.globalData.Token
        }).then(res => {
          console.log(res)
          // 删除成功
          Toast.success('店铺已删除')
          this.delectShow = false
          this.myStore()
        })
      },
      friendPopup () {
        console.log(this.friendShow)
        this.friendShow = true
      },
      friendClose () {
        this.friendShow = false
      },
      jumpShopHome (id) {
        this.$router.push({ path: '/pages/shopping/shopHome', query: {shopHomeId: id} })
      },
      editShoppingMsg (item) {
        console.log(item)
        var shoppingMsg = JSON.stringify(item)
        this.$router.push({ path: '/pages/shopping/openShopping/editShopping', query: {changeShoppingMsg: shoppingMsg, openShopping: false} })
      },
      myStore () {
        var that = this
        that.$httpWX.post({
          url: '/store/my',
          header: that.globalData.Token
        }).then(res => {
          console.log(res)
          if (res.data.length !== 0) {
            // 设置显示样式
            that.openShopping = true // 开启店铺
            that.shopMsg = res.data
          } else {
            // 设置显示样式
            that.openShopping = false // 未开启店铺
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
      getShareMsg (item) {
        console.log(item)
        var userInfo = {
          avatar: item.pic,
          storeName: item.storeName,
          detail: item.detail,
          bg: item.background
        }
        this.template = card.do(userInfo)
        Toast.clear()
        this.sharePopup = true // 分享弹窗显示
      },
      // 店铺分享按钮
      shareShop (item) {
        Toast.loading({
          duration: 0,
          mask: true,
          message: '生成图片中'
        })
        //
        this.getShareMsg(item)
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
    /*height: 414rpx;*/
    padding: 30rpx 16rpx 10rpx;
    box-sizing: border-box;
    .shopCardBg {
      position: relative;
      border-radius: 16rpx;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.5);
      width:100%;
      height: 414rpx;
      overflow: hidden;
      margin-bottom: .2rem;
      .shopCardBgImg {
        /*position: relative;*/
        border-radius: 16rpx;
        width: 108%;
        height: 120%;
        margin:-10rpx 0 0 -20rpx;
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
      .delectShop {
        position: absolute;
        z-index: 9;
        top: 56rpx;
        right: 0;
        width: 60rpx;
        height: 56rpx;
        margin: 2rpx 0;
      }
      .editShop {
        position: absolute;
        z-index: 9;
        top: 116rpx;
        right: 0;
        width: 60rpx;
        height: 56rpx;
      }
    }
    .enterShop {
      position: absolute;
      z-index: 9;
      bottom: 28rpx;
      width: 220rpx;
      height: 68rpx;
      margin-left: -110rpx;
      left: 50%;
    }
    .shopSeller {
      position: absolute;
      z-index: 9;
      top: 65rpx;
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
        margin-right: 28rpx;
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
  .invitefriend {
    margin: 32rpx auto 200rpx;
    width: 100%;
    text-align: center;
    img {
      width: 220rpx;
      height: 68rpx;
    }
  }
  /*未开店的样式*/
  .startOpen {
    position: relative;
    width: 100%;
    height: calc(100vh - 98rpx);
    background: url("../../static/images/startOpen.png");
    background-size: 100% 100%;
    .startOpenBtn {
      position: absolute;
      left: 50%;
      bottom: 80rpx;
      margin-left: -199rpx;
      width: 398rpx;
      height: 102rpx;
      background: url("../../static/images/startOpenBtn.png");
      background-size: 100% 100%;
    }
  }
  /*弹框样式开始*/
  .delectPopup {
    position: relative;
    width: 634rpx;
    height: 332rpx;
    padding-top: 26px;
    background: #fff;
    -webkit-border-radius: 12rpx;
    -moz-border-radius: 12rpx;
    border-radius: 12rpx;
    text-align: center;
    box-sizing: border-box;
    .closeDelect {
      position: absolute;
      top: 18rpx;
      right: 18rpx;
      width: 38rpx;
      height: 38rpx;
    }
    .delectTitle {
      img {
        width: 10rpx;
        height: 36rpx;
        padding-right: 20rpx;
        vertical-align: middle;
      }
      span {
        color: #333;
        font-size: 32rpx;
      }
    }
    .delectContent {
      color: #999;
      font-size: 26rpx;
      /*margin-left: 52rpx;*/
      text-align: center;
      padding: 44rpx 0;
    }
    .delectBtn {
      display: flex;
      width: 100%;
      height: 102rpx;
      line-height: 102rpx;
      font-size: 32rpx;
      border-top: 2rpx solid #F2F2F2;
      font-size: 32rpx;
      .delectLeftBtn {
        width: 50%;
        text-align: center;
        color: #999;
      }
      .delectRightBtn {
        flex: 1;
        background: #F49E2A;
        color: #fff;
      }
    }
  }
  /*弹框样式结束*/
  .friendPopup {
    width: 578rpx;
    height: 276rpx;
    padding-top: 0;
    background: url("../../static/images/redPopup.png");
    background-size: 100% 100%;
    .delectContent {
      border-top: none;
      font-size: .28rem;
      color: #333;
      padding: 0 .46rem .38rem;
      box-sizing: border-box;
    }
    .closeDelect {
      top: -14rpx;
    }
    .delectTitle {
      margin: 28rpx 0;
    }
    .delectBtn {
      display: flex;
      justify-content: center;
      border-top: none;
      img {
        width: 2.2rem;
        height: .68rem;
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
