<template>
    <div class="addressBg">
      <div class="shoppingMsg">
        <van-cell-group>
          <van-field class="shoppingName" :value="addressMsg.name" placeholder="收货人" />
          <van-field class="shoppingName" type="number" :value="addressMsg.tel" placeholder="联系电话" />
          <div class="addressMsgCity" @click="cityChangeBtn">
            <van-field class="shoppingName" disabled :value="addressMsg.city" placeholder="所在地区" />
            <div class="cityChangeBtn">请选择 ></div>
          </div>
          <van-field class="shoppingDetail" :value="addressMsg.detail" type="textarea" placeholder="请填写详细地址" />
        </van-cell-group>
      </div>
      <div class="addressTips">
        <div class="addressDefault">
          <van-checkbox :value="addressMsg.default" @change="onChange">设为默认地址</van-checkbox>
        </div>
        <div class="saveBtn" @click="saveBtn">保存</div>
        <van-popup
          :show="areaCity"
          position="bottom"
          @close="onClose"
        >
          <van-area :area-list="areaList" value="110101" @confirm="confirm" @cancel="cancel" />
        </van-popup>
      </div>
    </div>
</template>

<script>
  import Global from '../../components/global'
  export default {
    name: 'editAddress',
    config: {
      navigationBarTitleText: '编辑收货地址',
      navigationBarBackgroundColor: '#F8F8F9',
      navigationBarTextStyle: 'black'
    },
    data () {
      return {
        areaCity: false, // 城市区是否弹出框
        areaList: Global.AreaList,
        addressMsg: {name: '', tel: '', city: '', detail: '', default: true}
      }
    },
    // onLoad () {
    //   this.areaList = this.globalData.areaList
    //   // console.log(this.globalData.areaList)
    // },
    methods: {
      cityChangeBtn () {
        console.log(this.areaCity)
        this.areaCity = true
      },
      confirm (value) {
        console.log(value)
        this.areaCity = false
        this.addressMsg.city = value.mp.detail.values[0].name + ' ' + value.mp.detail.values[1].name + ' ' + value.mp.detail.values[2].name
      },
      cancel () {
        this.areaCity = false
      },
      onChange (event) {
        // console.log(event)
        this.addressMsg.default = event.mp.detail
      },
      saveBtn () {
        console.log('保存')
      }
    }
  }
</script>

<style scoped lang="less">
  .addressMsgCity {
    position: relative;
    .cityChangeBtn {
      height: 120rpx;
      line-height: 120rpx;
      font-size: 30rpx;
      position: absolute;
      top: 0;
      right: 24rpx;
      z-index: 9;
      color: #333;
    }
  }
    .addressDefault {
      margin: 32rpx auto;
      font-size: 26rpx;
    }
    .saveBtn {
      width: 630rpx;
      height: 72rpx;
      line-height: 72rpx;
      text-align: center;
      margin: 0 auto;
      background: #87967C;
      -webkit-border-radius: 8rpx;
      -moz-border-radius: 8rpx;
      border-radius: 8rpx;
      color: #fff;
      font-size: 26rpx;
    }
</style>
