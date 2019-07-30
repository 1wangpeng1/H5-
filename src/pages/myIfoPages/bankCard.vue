<template>
    <div class="pageBg">
      <div class="topGap"></div>
      <!--未添加时-->
      <div v-if="isBankCard" class="addBankCard" @click="addBankCard">
        <span class="plus">+</span>
        <div class="addBankCardRight">
          <span>添加银行卡</span>
          <van-icon class="arrow" name="arrow" color="#8E8E8E" size="15px" />
        </div>
      </div>
      <!--添加银行卡时-->
      <div v-else class="bankCardMsg">
        <div class="bankMsg" :style="{backgroundImage:'url('+bankMsg.cardBg+')'}">
        <!--<div class="bankMsg">-->
          <div class="logoBg"><img :src="bankMsg.logo" /></div>
          <div>
            <div class="bankName">{{bankMsg.bankName}}</div>
            <div class="bankType">{{bankMsg.bankType}}</div>
            <div class="cardNo">**** **** **** {{bankMsg.afterCardNo}}</div>
          </div>
          <img class="delectBank" @click="delectShop" src="../../../static/images/delect.png" />
        </div>
        <div class="addBankCard" @click="addBankCard">
          <span class="plus"><img src="../../../static/images/changeBank.png"></span>
          <div class="addBankCardRight">
            <span>更换银行卡</span>
            <van-icon class="arrow" name="arrow" color="#8E8E8E" size="15px" />
          </div>
        </div>
      </div>
      <!--delectShow弹框-->
      <van-popup z-index="1000" :show="delectShow" close-on-click-overlay="false" :close="onClose">
        <div class="delectPopup">
          <div class="delectTitle">
            <img src="../../../static/images/warn.png" />
            <span>确定要删除银行卡？</span>
          </div>
          <div class="delectContent">删除银行卡后您将无法提现哦！</div>
          <div class="delectBtn">
            <div class="delectLeftBtn" @click="sureDelectBank">删除银行卡</div>
            <div class="delectRightBtn" @click="addBankCard">更换银行卡</div>
          </div>
          <img class="closeDelect" src="../../../static/images/wrong.png" @click="onClose" />
        </div>
      </van-popup>
      <!--这种特殊占位符是必须有的！-->
      <van-toast id="van-toast"/>
    </div>
</template>

<script>
  import Toast from 'vant-weapp/dist/toast/toast'
  export default {
    name: 'bankCard',
    config: {
      navigationBarTitleText: '银行卡',
      navigationBarBackgroundColor: '#333333',
      navigationBarTextStyle: 'white'
    },
    data () {
      return {
        delectShow: false,
        bankMsg: {},
        isBankCard: true // 是否已有银行卡 true没添加  false 已有银行卡
      }
    },
    onLoad () {
      this.getBank()
    },
    onShow () {
      this.delectShow = false
    },
    methods: {
      delectShop () {
        console.log(this.delectShow)
        this.delectShow = true
      },
      onClose () {
        this.delectShow = false
      },
      addBankCard () {
        this.$router.push({ path: '/pages/myIfoPages/editBankCard' })
      },
      sureDelectBank () {
        var that = this
        that.$httpWX.post({
          url: '/bank/del',
          data: {
            id: that.bankMsg.id
          },
          header: that.globalData.Token
        }).then(res => {
          console.log(res)
          Toast.success('删除成功')
          that.getBank()
        })
      },
      getBank () {
        var that = this
        that.$httpWX.post({
          url: '/bank/get',
          header: that.globalData.Token
        }).then(res => {
          console.log(res)
          that.bankMsg = res.data
          if (that.bankMsg !== null) {
            that.isBankCard = false
            that.bankMsg.afterCardNo = that.bankMsg.cardNo.substring(that.bankMsg.cardNo.length - 4)
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .pageBg {
    width: 100%;
    height: 100vh;
    background: #333;
    .topGap {
      width: 100%;
      height: 50rpx;
      background: #333;
    }
    .addBankCard {
      display: flex;
      justify-content: left;
      align-items: center;
      color: #8E8E8E;
      font-size: 32rpx;
      width: 100%;
      height: 100rpx;
      background: #353535;
      padding: 0 30rpx;
      box-sizing: border-box;
      border-top: 2rpx solid #424242;
      border-bottom: 2rpx solid #424242;
      .plus {
        /*width: 38rpx;*/
        /*height: 38rpx;*/
        color: #747474;
        font-size: 60rpx;
        font-weight: 400;
        margin-right: 28rpx;
        height:100rpx;
        line-height: 100rpx;
        img {
          width: .42rem;
          height: .42rem;
        }
      }
      .addBankCardRight {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        vertical-align: middle;
      }
    }
    .bankMsg {
      position: relative;
      width: 7.14rem;
      height: 2.26rem;
      margin: 0 .18rem .24rem;
      color: #fff;
      -webkit-border-radius: .08rem;
      -moz-border-radius: .08rem;
      border-radius: .08rem;
      background-size: 100% 100%;
      display: flex;
      padding: .26rem .3rem;
      box-sizing: border-box;
      .logoBg {
        width: .7rem;
        height: .7rem;
        padding: .1rem;
        box-sizing: border-box;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        background: #fff;
        text-align: center;
        margin-right: .12rem;
        img {
          width: .5rem;
          height: .5rem;
        }
      }
      .bankName {
        font-size: .3rem;
      }
      .bankType {
        font-size: .26rem;
        padding: .06rem 0 .2rem;
      }
      .cardNo {
        font-size: .46rem;
      }
      .delectBank {
        position: absolute;
        right: .2rem;
        top: .2rem;
        width: .38rem;
        height: .38rem;
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
  }
</style>
