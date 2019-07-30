<template>
    <div>
      <div class="accountDetailLi" v-for="(item, index) in accountDetailMsg" :key="index">
        <div class="accountDetailMsg">
          <div>{{item.name}}</div>
          <div :class="item.type === 1 ? 'addMoney' : 'reduceMoney'">{{item.money}}</div>
        </div>
        <div class="accountDetailTime">今天 16：54</div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'accountDetail',
    config: {
      navigationBarTitleText: '账单'
    },
    data () {
      return {
        accountDetailMsg: [] // 数据
      }
    },
    onLoad () {
      this.accountDetailMsg = [{name: '小店销售利润', type: 1, money: '14.00'}, {name: '小店销售利润', type: 2, money: '4.00'}, {name: '小店销售利润', type: 2, money: '14.00'}, {name: '小店销售利润', type: 1, money: '100.00'}]
      for (var i = 0; i < this.accountDetailMsg.length; i++) {
        if (this.accountDetailMsg[i].type === 1) {
          this.accountDetailMsg[i].money = '+' + this.accountDetailMsg[i].money
        } else {
          this.accountDetailMsg[i].money = '-' + this.accountDetailMsg[i].money
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .accountDetailLi {
    width: 100%;
    height: 148rpx;
    border-bottom: 2rpx solid #E6E6E6;
    padding: 30rpx 44rpx;
    box-sizing: border-box;
    font-size: 32rpx;
    color: #333;
    .accountDetailMsg {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .addMoney {
        font-size: 36rpx;
        color: #E3B22F;
      }
      .reduceMoney {
        font-size: 36rpx;
      }
    }
    .accountDetailTime {
      color: #999;
      font-size: 26rpx;
      padding-top: 6rpx;
    }
  }
</style>
