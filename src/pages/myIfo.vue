<template>
  <div>
    <div class="myifoMsg">
      <div class="myifoAvatar">
        <div class="myifoAvatarMsg">
          <img :src="userInfo.avatarUrl" />
          <div>{{userInfo.nickName}}</div>
        </div>
        <navigator url="/pages/myIfoPages/myifoNews" hover-class="none" class="myifoNews">
          <van-icon name="chat-o" class="#543E3E" size="40rpx" :info="newsNum" />
        </navigator>
      </div>
      <div class="myifoAccount">
        <div class="myifoAccountDiv">
          <div class="myifoAccountTitle">
            <div>账户余额</div>
            <div>
              <span class="accountMoneyNum">￥{{userMsg.money}}</span>
              <span class="accountMoneyDetail" @click="accountDetail">明细</span>
            </div>
            <div class="accountMoneyTixian" @click="moneyCash">去提现 ></div>
          </div>
          <div class="shopAccount">
            <div>
              <img class="accountImg1" src="../../static/images/accountImg1.png" />
              <span>小店销售额：￥{{userMsg.storeSalesMoney}}</span>
            </div>
            <div>
              <img class="accountImg2" src="../../static/images/accountImg2.png" />
              <span>小店的利润：￥{{userMsg.storeProfit}}</span>
            </div>
          </div>
          <div class="friendShopAccount">
            <div>
              <img class="accountImg1" src="../../static/images/accountImg1.png" />
              <span>朋友的店销售额：￥{{userMsg.secondSalesMoney}}</span>
            </div>
            <div>
              <img class="accountImg2" src="../../static/images/accountImg2.png" />
              <span>朋友的店销售奖励利润：￥{{userMsg.secondRoyalty}}</span>
            </div>
          </div>
          <div class="inviteReward">
            <div>邀请奖励：<span class="rewardNum">￥{{userMsg.recommendRoyalty}}</span></div>
            <div class="rewardRule" @click="inviteBtn">规则</div>
          </div>
        </div>
      </div>
      <div v-if="userMsg.isStore === 1" class="Orders shopOrders">
        <div class="shopOrdersTitle">
          <van-cell title="店铺订单" is-link url="/pages/myIfoPages/shopOrders?status=5" value="全部订单" />
        </div>
        <van-row  class="shopOrdersClassify">
          <van-col span="6" class="shopOrdersClassifyLi">
            <navigator url="/pages/myIfoPages/shopOrders?status=1" hover-class="none">
              <img src="../../static/images/waitPay.png" />
              <div>待付款</div>
            </navigator>
          </van-col>
          <van-col span="6">
            <navigator url="/pages/myIfoPages/shopOrders?status=2" hover-class="none">
              <img src="../../static/images/waitSent.png" />
              <div>待发货</div>
            </navigator>
          </van-col>
          <van-col span="6">
            <navigator url="/pages/myIfoPages/shopOrders?status=3" hover-class="none">
              <img src="../../static/images/waitCollect.png" />
              <div>待收货</div>
            </navigator>
          </van-col>
          <van-col span="6">
            <navigator url="/pages/myIfoPages/shopOrders?status=4" hover-class="none">
              <img src="../../static/images/waitFinish.png" />
              <div>已完成</div>
            </navigator>
          </van-col>
        </van-row>
      </div>
      <div class="Orders myifoOrders">
        <div class="shopOrdersTitle">
          <van-cell title="我的订单" is-link url="/pages/myIfoPages/myOrders?status=5" value="全部订单" />
        </div>
        <van-row  class="shopOrdersClassify">
          <van-col span="6" class="shopOrdersClassifyLi">
            <navigator url="/pages/myIfoPages/myOrders?status=1" hover-class="none">
              <img src="../../static/images/waitPay.png" />
              <div>待付款</div>
            </navigator>
          </van-col>
          <van-col span="6">
            <navigator url="/pages/myIfoPages/myOrders?status=2" hover-class="none">
              <img src="../../static/images/waitSent.png" />
              <div>待发货</div>
            </navigator>
          </van-col>
          <van-col span="6">
            <navigator url="/pages/myIfoPages/myOrders?status=3" hover-class="none">
              <img src="../../static/images/waitCollect.png" />
              <div>待收货</div>
            </navigator>
          </van-col>
          <van-col span="6">
            <navigator url="/pages/myIfoPages/myOrders?status=4" hover-class="none">
              <img src="../../static/images/waitFinish.png" />
              <div>已完成</div>
            </navigator>
          </van-col>
        </van-row>
      </div>
      <div class="myifoSet">
        <navigator url="/pages/myIfoPages/bankCard" hover-class="none">
          <van-cell title="银行卡">
            <van-icon slot="right-icon" class="custom-icon" />
            <div slot="right-icon">
              <img class="cellImg0" src="../../static/images/bankCard.png" />
            </div>
          </van-cell>
        </navigator>
        <van-cell title="邀请好友" @click="friendBtn">
          <van-icon slot="right-icon" class="custom-icon" />
          <div slot="right-icon">
            <img class="cellImg1" src="../../static/images/invite.png" />
          </div>
        </van-cell>
        <navigator url="/pages/myIfoPages/addressList" hover-class="none">
          <van-cell title="收货地址管理">
            <van-icon slot="right-icon" class="custom-icon" />
            <div slot="right-icon">
              <img class="cellImg2" src="../../static/images/addressManage.png" />
            </div>
          </van-cell>
        </navigator>
      </div>
    </div>
    <div style="width: 100%; height: 98rpx;"></div>
    <!--邀请规则弹框-->
    <van-popup z-index="1000" :show="inviteShow" close-on-click-overlay="false" :close="onClose">
      <div class="delectPopup">
        <div class="delectTitle">
          <img src="../../static/images/smallWarn.png" />
          <span>邀请规则</span>
        </div>
        <div class="delectContent">通过你分享的小程序/二维码进入花样并注册开店的店铺，自动成为你的好友店铺。（每个店铺限制有10个好友店铺）好友店铺销售额的5%，将作为你的提成。好友店铺每销售100元，奖励一级店铺5元。</div>
        <div class="delectBtn">
          <img src="../../static/images/invitefriend.png" />
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
    <myTabbar :tabbar='tabbar'></myTabbar>
  </div>
</template>

<script>
import myTabbar from '../components/myTabbar'
import { getQuery } from '../utils/CurrentPage'
export default {
  config: {
    navigationBarTitleText: '我的'
    // navigationBarBackgroundColor: '#F8F8F9',
    // navigationBarTextStyle: 'black'
  },
  data () {
    return {
      tabbar: {},
      userInfo: '', // 本地存储的头像 名字
      userMsg: '', // 接口返回数据
      newsNum: 9, // 未读消息数
      inviteShow: false, // 邀请规则弹框
      friendShow: false
    }
  },
  components: {
    myTabbar
  },
  onLoad () {
    console.log('page counter onLoad')
    wx.hideTabBar()
    var that = this
    that.tabbar = getQuery()
    console.log(that.tabbar)
    that.userInfo = that.globalData.userInfo // 全局变量
    console.log('that.userInfo' + that.userInfo)
    // 获取用户信息
    that.getMyifoMsg()
    that.getNewsNum()
  },
  methods: {
    // 明细
    accountDetail () {
      this.$router.push({ path: '/pages/myIfoPages/accountDetail' })
    },
    // 提现
    moneyCash () {
      this.$router.push({ path: '/pages/myIfoPages/moneyCash' })
    },
    inviteBtn () {
      console.log(this.inviteShow)
      this.inviteShow = true
    },
    friendBtn () {
      console.log(this.friendShow)
      this.friendShow = true
    },
    onClose () {
      this.inviteShow = false
    },
    friendClose () {
      this.friendShow = false
    },
    // 获取用户信息
    getMyifoMsg () {
      var that = this
      that.$httpWX.post({
        url: '/user/my',
        header: that.globalData.Token
        // header: ''
      }).then(res => {
        console.log(res)
        that.userMsg = res.data
        console.log(that.userMsg)
      })
    },
    getNewsNum () {
      var that = this
      that.$httpWX.post({
        url: '/message/unread/num',
        header: that.globalData.Token
      }).then(res => {
        console.log(res)
        that.newsNum = res.data.unreadNum
        console.log(that.newsNum)
      })
    }
  }
}
</script>

<style scoped lang="less">
.myifoMsg {
  background: #F4F4F4;
  /*margin-bottom: 98rpx;*/
  .myifoAvatar {
    position: relative;
    width: 750rpx;
    height: 264rpx;
    background: url("../../static/images/myifoAuatarBg.png");
    background-size: 100% 100%;
    padding:24rpx 0;
    box-sizing: border-box;
    text-align:center;
    .myifoAvatarMsg {
      font-size: 32rpx;
      color: #333333;
      img {
        width: 124rpx;
        height: 124rpx;
        border-radius: 50%;
      }
    }
    .myifoNews {
      position: absolute;
      top: 20rpx;
      right: 36rpx;
    }
  }
  .myifoAccount {
    position: relative;
    width: 750rpx;
    height: 544rpx;
    background: #fff;
    .myifoAccountDiv {
      position: absolute;
      top: -40rpx;
      width: 702rpx;
      height: 544rpx;
      margin: 0 24rpx;
      -webkit-border-radius: 24rpx;
      -moz-border-radius: 24rpx;
      border-radius: 24rpx;
      box-shadow: 0 2px 12px 0 rgba(224,210,196,1);
      .myifoAccountTitle {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 78rpx;
        padding: 0 28rpx 0 24rpx;
        box-sizing: border-box;
        border-top-left-radius: 24rpx;
        border-top-right-radius: 24rpx;
        background: #FDEAD7;
        font-size: 28rpx;
        color: #333;
        .accountMoneyNum {
          font-size: 26rpx;
          padding-right: 16rpx;
        }
        .accountMoneyDetail{
          font-size: 26rpx;
          color: #4C7FFF;
        }
        .accountMoneyTixian {
          font-size: 26rpx;
          color: #F49E2A;
        }
      }
      .shopAccount, .friendShopAccount {
        width: 100%;
        height: 182rpx;
        border-bottom: 2rpx solid #f2f2f2;
        font-size: 26rpx;
        color: #333;
        padding: 24rpx 28rpx 24rpx 24rpx;
        box-sizing: border-box;
        div {
          line-height: 64rpx;
        }
        .accountImg1 {
          width: 38rpx;
          height: 38rpx;
          padding-right: 14rpx;
          vertical-align: middle;
        }
        .accountImg2 {
          width: 42rpx;
          height: 42rpx;
          padding-right: 14rpx;
          vertical-align: middle;
        }
      }
      .inviteReward {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 30rpx;
        color: #333;
        padding: 0 28rpx 0 24rpx;
        box-sizing: border-box;
        height:102rpx;
        .rewardNum {
          color: #F49E2A;
        }
        .rewardRule {
          width: 150rpx;
          height: 56rpx;
          line-height: 56rpx;
          text-align: center;
          border: 2rpx solid #87967C;
          border-radius: 8rpx;
          color: #87967C;
        }
      }
    }
  }
  .Orders {
    width: 750rpx;
    height: 254rpx;
    background: #fff;
    .shopOrdersTitle {
      height: 92rpx;
      background: #F4F4F4;
    }
    .shopOrdersClassify {
      background: #fff;
      height: 162rpx;
      text-align: center;
      font-size: 24rpx;
      img {
        width: 56rpx;
        height: 56rpx;
        display: inline-block;
      }
    }
  }
  .myifoSet {
    width: 750rpx;
    /*height: 224rpx;*/
    background: #fff;
    border-top: 14rpx solid #f3f3f3;
    .cellImg0 {
      width: 46rpx;
      height: 34rpx;
      vertical-align:middle;
    }
    .cellImg1 {
      width: 38rpx;
      height: 40rpx;
      vertical-align:middle;
    }
    .cellImg2 {
      width: 32rpx;
      height: 44rpx;
      vertical-align:middle;
    }
  }
}
/*弹框样式开始*/
.delectPopup {
  position: relative;
  width: 578rpx;
  height: 466rpx;
  background: url("../../static/images/bluePopup.png");
  background-size: 100% 100%;
  text-align: center;
  .closeDelect {
    position: absolute;
    top: -14rpx;
    right: 18rpx;
    width: 38rpx;
    height: 38rpx;
  }
  .delectTitle {
    margin: 28rpx 0;
    img {
      width: .4rem;
      height: .4rem;
      padding-right: 20rpx;
      vertical-align: middle;
    }
    span {
      color: #333;
      font-size: 32rpx;
    }
  }
  .delectContent {
    border-top: 2rpx solid #EFEFEF;
    padding: .22rem .46rem;
    box-sizing: border-box;
    color: #333;
    font-size: 26rpx;
    text-align: left;
    letter-spacing:2rpx;
  }
  .delectBtn {
    display: flex;
    justify-content: center;
    img {
      width: 2.2rem;
      height: .68rem;
    }

  }
}
/*弹框样式结束*/
.friendPopup {
  height: 276rpx;
  background: url("../../static/images/redPopup.png");
  background-size: 100% 100%;
  .delectContent {
    border-top: none;
    font-size: .28rem;
    color: #333;
    padding: 0 .46rem .38rem;
    box-sizing: border-box;
  }
}
</style>
