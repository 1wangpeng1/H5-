<template>
    <div class="cashBg">
      <div style="height: 38rpx;width: 100%;background: #F8F8F9;"></div>
      <div class="moneyCash">
        <div class="bankType">
          <span>到账银行卡</span><span>中国银行（5566）</span>
        </div>
        <div class="moneyCashInputDiv">
          <label>￥</label>
          <input class="moneyCashInput" :value="moneyNum" v-model="moneyNum" type="digit" />
          <div class="realMoney" v-if="moneyNum !== ''">实时到账 ￥{{(moneyNum - 2) < 0 ? 0 : moneyNum - 2}}</div>
        </div>
        <div class="moneyCashNum">
          <div><span>可提现￥{{allMoneyNum}}，</span><span class="allMoneyCash" @click="allMoneyCash">全部提现</span></div>
          <div class="moneyRule" @click="moneyRuleBtn">提现规则</div>
        </div>
        <div class="moneyCashBtn" @click="moneyCashBtn">提现</div>
      </div>
      <!--邀请规则弹框-->
      <van-popup z-index="1000" :show="ruleShow" close-on-click-overlay="false" :close="onClose">
        <div class="delectPopup">
          <div class="delectTitle">
            <img src="../../../static/images/smallWarn.png" />
            <span>邀请规则</span>
          </div>
          <div class="delectContent">店铺销售额满100元即可提现，提现需收取手续费每笔2元，提现成功后到达绑定银行卡，到账会有延迟请耐心等待，有问题请联系客服</div>
          <div class="delectBtn" @click="onClose">
            我知道了
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
    name: 'moneyCash',
    config: {
      navigationBarTitleText: '提现'
    },
    data () {
      return {
        moneyNum: '',
        allMoneyNum: '',
        ruleShow: false
      }
    },
    onLoad () {
      this.getMyifoMsg()
    },
    methods: {
      allMoneyCash () {
        this.moneyNum = this.allMoneyNum
      },
      moneyRuleBtn () {
        console.log(this.ruleShow)
        this.ruleShow = true
      },
      onClose () {
        this.ruleShow = false
      },
      // 提现按钮
      moneyCashBtn () {
        console.log(this.moneyNum)
        if (this.moneyNum === '') {
          Toast.fail('请先输入金额')
        } else if (this.moneyNum === 0) {
          Toast.fail('输入金额应大于零')
        } else if (this.moneyNum > this.allMoneyNum) {
          Toast.fail('输入金额超出全部金额，请重新输入')
        } else {
          var that = this
          that.$httpWX.post({
            url: '/pay/bank',
            data: {
              amount: that.moneyNum
            },
            header: that.globalData.Token
            // header: ''
          }).then(res => {
            console.log(res)
            Toast.success('提现成功')
            // 再次请求我的接口  刷新全部提现的余额
            that.getMyifoMsg()
          })
        }
      },
      // 总金额获取
      getMyifoMsg () {
        var that = this
        that.$httpWX.post({
          url: '/user/my',
          header: that.globalData.Token
          // header: ''
        }).then(res => {
          console.log(res)
          that.allMoneyNum = res.data.money
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .cashBg {
    width: 100%;
    height: 100vh;
    background: #F8F8F9;
    margin: 0 auto;
    .moneyCash {
      width: 686rpx;
      height: 533rpx;
      background: #fff;
      -webkit-border-radius: 8rpx;
      -moz-border-radius: 8rpx;
      border-radius: 8rpx;
      padding: 36rpx 44rpx 48rpx;
      color: #333;
      font-size: 28rpx;
      margin:0 32rpx;
      box-sizing: border-box;
      .bankType {
        margin-bottom: 50rpx;
        span {
          padding-right: 32rpx;
        }
      }
      .moneyCashInputDiv {
        width: 100%;
        height: 100rpx;
        line-height: 100rpx;
        font-size: 70rpx;
        color: #333;
        display: flex;
        position: relative;
        label {
          padding-right: 20rpx;
        }
        .moneyCashInput {
          flex: 1;
          height: 100rpx;
          line-height: 100rpx;
        }
        .realMoney {
          position: absolute;
          right: 0;
          color: #f33;
          font-size: .24rem;
        }
      }
      .moneyCashNum {
        display: flex;
        justify-content: space-between;
        color: #999;
        font-size: 24rpx;
        padding: 28rpx 0 80rpx;
        margin-top: 30rpx;
        border-top: 2rpx solid #F0F0F0;
        .allMoneyCash {
          color: #09e;
        }
        .moneyRule {
          width: 122rpx;
          height: 44rpx;
          line-height: 44rpx;
          text-align: center;
          color: #87967C;
          border: 2rpx solid #87967C;
          -webkit-border-radius: 8rpx;
          -moz-border-radius: 8rpx;
          border-radius: 8rpx;
        }
      }
      .moneyCashBtn {
        width: 598rpx;
        height: 82rpx;
        line-height: 82rpx;
        border-radius: 6rpx;
        background: #87967C;
        color: #fff;
        font-size: 38rpx;
        text-align: center;
      }
    }
  }
  /*弹框样式开始*/
  .delectPopup {
    position: relative;
    width: 578rpx;
    height: 384rpx;
    background: url("../../../static/images/bluePopup.png");
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
      padding: 0 .46rem .32rem;
      box-sizing: border-box;
      color: #333;
      font-size: 26rpx;
      text-align: left;
      letter-spacing:2rpx;
    }
    .delectBtn {
      border-top: 2rpx solid #EFEFEF;
      padding-top: .16rem;
      text-align: center;
      color: #1790FF;
      font-size: .32rem;
    }
  }
  /*弹框样式结束*/
</style>
