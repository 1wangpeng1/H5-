<template>
    <div class="pagesBg">
      <div class="addAddress" v-if="inexistAddress">
        <img src="../../../static/images/addAddress.png" />
        <span>请选择收货地址</span>
      </div>
      <!--已有地址-->
      <div class="addressList" v-else>
        <img src="../../../static/images/addressTips.png" />
        <div class="addressListRight">
          <div class="addressMsg">
            <div>
              <span class="addressName">宋立夏</span>
              <span class="addressTel">1761510082</span>
            </div>
            <div class="addressDetail">北京市昌平区龙泽苑街道首开智慧社东区育知东路30号院1号楼1单元6层610室</div>
          </div>
          <span class="arrow">></span>
        </div>
      </div>
      <div class="ordersList">
        <div class="orderLiTitle">
          <div>{{sureOrderShopName}}</div>
          <div class="orderStatus">待付款</div>
        </div>
        <div class="orderLiGoods" v-for="(i,index) in sureOrderList" :key="index">
        <!--<div class="orderLiGoods">-->
          <img class="orderLiGoodsImg" :src="i.listImg" />
          <div class="orderLiGoodsMsg">
            <div class="goodsMsgTop">
              <div class="goodsName">{{i.name}}</div>
              <div class="goodsPrice">¥{{i.price}}</div>
            </div>
            <div class="goodsMsgBottom">
              <div class="goodsDetail">{{i.brief}}</div>
              <div class="goodsNum">*{{i.num}}</div>
            </div>
          </div>
        </div>
        <div class="sureOrderTips">
          <van-cell-group>
            <van-field :border="false" placeholder="快递 免邮" placeholder-style="color:#999999;" label="配送方式" disabled />
            <van-field border="false" @change="changeRemarks" :value="remarks" placeholder="选填" placeholder-style="color:#D3D3D3;" label="订单备注" />
          </van-cell-group>
        </div>
        <div class="orderLiNum">共{{totleNum}}件商品 合计：<span>￥{{totlePrice}}</span></div>
      </div>
      <div class="submitDiv">
        <div class="allMoney">合计：<span>￥{{totlePrice}}</span></div>
        <div class="submitBtn" @click="submitBtn">提交订单</div>
      </div>
      <!--这种特殊占位符是必须有的！-->
      <van-toast id="van-toast"/>
    </div>
</template>

<script>
  import Toast from 'vant-weapp/dist/toast/toast'
  export default {
    name: 'sureOrder',
    config: {
      navigationBarTitleText: '确认订单'
    },
    data () {
      return {
        totlePrice: 0,
        totleNum: 0,
        remarks: '', // 订单备注
        inexistAddress: false, // 时候存在地址  false存在  true不存在
        sureOrderList: [], // 提交的订单数据
        sureOrderShopName: '', // 店铺name
        sureOrderShopId: '' // 店铺id
      }
    },
    onLoad () {
      this.sureOrderList = this.globalData.sureOrderList // 数据获取
      this.sureOrderShopName = this.globalData.sureOrderShopName // 数据获取
      this.sureOrderShopId = this.globalData.sureOrderShopId // 数据获取
      this.totlePrice = 0
      this.totleNum = 0
      console.log(this.sureOrderList)
      for (var i = 0; i < this.sureOrderList.length; i++) {
        this.totlePrice += this.sureOrderList[i].price * this.sureOrderList[i].num
        this.totleNum += this.sureOrderList[i].num
      }
    },
    methods: {
      changeRemarks (event) {
        this.remarks = event.mp.detail
      },
      submitBtn () {
        var orderDto = {}
        orderDto.items = this.sureOrderList
        orderDto.addressId = 1
        orderDto.goodsNum = this.totleNum
        orderDto.orderMoney = this.totlePrice
        orderDto.remark = this.remarks
        orderDto.storeId = this.sureOrderShopId
        orderDto.storeName = this.sureOrderShopName
        console.log(orderDto)
        var that = this
        wx.request({
          url: 'http://192.168.0.102:9990' + '/order/create',
          method: 'POST',
          data: {orderDto: orderDto},
          header: {'content-type': 'application/json', 'token': that.globalData.Token},
          success: function (res) {
            if (res.data.code === 200) {
              console.log(res.data)
            } else {
              console.log(res.data.msg)
              Toast.fail(res.data.msg)
            }
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .pagesBg {
    background: #F2F2F2;
    min-height: 100vh;
    padding: .24rem;
    box-sizing: border-box;
    .addAddress {
      width: 100%;
      height: 1.28rem;
      background: #fff;
      -webkit-border-radius: .24rem;
      -moz-border-radius: .24rem;
      border-radius: .24rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: .3rem;
      img {
        width: .56rem;
        height: .56rem;
        margin-right: .22rem;
        vertical-align: middle;
      }
    }
    .addressList {
      width: 100%;
      background: #fff;
      -webkit-border-radius: .24rem;
      -moz-border-radius: .24rem;
      border-radius: .24rem;
      padding: .3rem .24rem;
      box-sizing: border-box;
      display: flex;
      justify-content: left;
      align-items: center;
      img {
        width: .64rem;
        height: .64rem;
        margin-right: .24rem;
      }
      .addressListRight {
        flex: 1;
        display: flex;
        align-items: center;
        .addressMsg {
          flex: 1;
          .addressName {
            font-size: .3rem;
            color: #333333;
            padding-right: .12rem;
          }
          .addressTel {
            font-size: .26rem;
            color: #999;
          }
          .addressDetail {
            margin-top: .1rem;
            font-size: .24rem;
            color: #333;
          }
        }
        .arrow {
          padding-left: .20rem;
          width: .14rem;
          color: #999;
        }
      }
    }
    .ordersList {
      margin-top: .24rem;
      width: 100%;
      background: #fff;
      -webkit-border-radius: .24rem;
      -moz-border-radius: .24rem;
      border-radius: .24rem;
      padding: .2rem .24rem;
      box-sizing: border-box;
      font-size: .26rem;
      color: #333;
      .orderLiTitle {
        display: flex;
        justify-content: space-between;
        .orderStatus {
          color: #D20000;
        }
      }
      .orderLiGoods {
        height: 1.8rem;
        margin: 0.3rem 0 0.14rem 0;
        display: flex;
        justify-items: flex-start;
        align-items: flex-start;
        img {
          width: 1.8rem;
          height: 1.8rem;
          border: 1px solid #ccc;
          margin-right: .2rem;
        }
        .orderLiGoodsMsg {
          padding-top: 0.2rem;
          flex: 1;
          .goodsMsgTop {
            display: flex;
            justify-content: space-between;
            padding-bottom: .1rem;
            .goodsName {
              font-size: .28rem;
            }
            .goodsPrice {
              font-size: .22rem;
            }
          }
          .goodsMsgBottom {
            display: flex;
            justify-content: space-between;
            .goodsDetail {
              width: 3.6rem;
              color: #352D2D;
              font-size: .24rem;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
            .goodsNum {
              flex: 1;
              color: #999;
              text-align: right;
            }
          }
        }
      }
      .orderLiNum {
        width: 100%;
        text-align: right;
        margin-top: .16rem;
        span {
          font-size: .28rem;
          color: #B97E72;
        }
      }
    }
    .submitDiv {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 7.5rem;
      height: 1.24rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      background: #fff;
      font-size: .32rem;
      color: #333;
      .allMoney {
        span {
          font-size: .32rem;
          color: #B97E72;
        }
      }
      .submitBtn {
        width: 2.56rem;
        height: .8rem;
        line-height: .8rem;
        margin: 0 .28rem 0 .38rem;
        color: #fff;
        text-align: center;
        background: linear-gradient(to bottom, #E6B58B, #B97E72);
        -webkit-border-radius: 4rpx;
        -moz-border-radius: 4rpx;
        border-radius: 4rpx;
      }
    }
  }
</style>
