<template>
    <div>
      <div class="addressDetailLi" v-for="(item, index) in addressList" :key="index">
        <div class="addressDetailMsg">
          <div>
            <span class="addressName">{{item.name}}</span>
            <span class="addressTel">{{item.tel}}</span>
          </div>
          <div>
            <span class="addressDefault" v-if="item.type === 2">默认</span>
            <span class="addressDetail">{{item.addressDetail}}</span>
          </div>
        </div>
        <div class="editAddress">编辑</div>
      </div>
      <navigator url="/pages/myIfoPages/editAddress" hover-class="none" class="addAddress">
        <span class="plus">+</span> 添加地址
      </navigator>
    </div>
</template>

<script>
  export default {
    name: 'addressList',
    config: {
      navigationBarTitleText: '收货地址',
      navigationBarBackgroundColor: '#F8F8F9',
      navigationBarTextStyle: 'black'
    },
    data () {
      return {
        addressList: [{name: '张三', tel: '1761510082', addressDetail: '北京 北京市 昌平区 龙泽苑街道 首开智慧社 东区育知东路', type: 1},
          {name: '张三', tel: '1761510082', addressDetail: '北京 北京市 昌平区 龙泽苑街道 首开智慧社 东区育知东路', type: 2},
          {name: '张三', tel: '1761510082', addressDetail: '北京 北京市 昌平区 龙泽苑街道 首开智慧社 东区育知东路', type: 1},
          {name: '张三', tel: '1761510082', addressDetail: '北京 北京市 昌平区 龙泽苑街道 首开智慧社 东区育知东路', type: 1}]
      }
    }
  }
</script>

<style scoped lang="less">
  .addressDetailLi {
    display: flex;
    align-items: center;
    padding: 32rpx 0 0 24rpx;
    box-sizing: border-box;
    font-size: 26rpx;
    color: #333;
    .addressDetailMsg {
      flex: 1;
      padding-right: 54rpx;
      box-sizing: border-box;
      .addressName {
        font-size: 32rpx;
        padding-right: 24rpx;
        line-height: 53rpx;
      }
      .addressTel {
        color: #999;
      }
      .addressDefault {
        display: inline-block;
        width: 80rpx;
        height: 36rpx;
        line-height: 36rpx;
        text-align: center;
        background: rgb(195, 214, 223);
        color: #37788A;
        margin-right: 16rpx;
      }
      .addressDetail {
        font-size: 28rpx;
      }
    }
    .editAddress {
      width: 128rpx;
      height: 52rpx;
      line-height: 52rpx;
      text-align: center;
      border-left: 2rpx solid #D8D8D8;
      color: #999;
      font-size: 26rpx;
    }
  }
  .addAddress {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 630rpx;
    height: 72rpx;
    line-height: 72rpx;
    text-align: center;
    margin: 60rpx auto 30rpx;
    background: #87967C;
    -webkit-border-radius: 8rpx;
    -moz-border-radius: 8rpx;
    border-radius: 8rpx;
    color: #fff;
    font-size: 26rpx;
    .plus {
      font-size: 50rpx;
      margin: 0 6rpx 10rpx 0;
      font-weight: 100;
    }
  }
</style>
