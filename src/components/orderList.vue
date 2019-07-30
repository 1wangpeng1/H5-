<template>
    <div class="orderLi" v-if="listType === 'shopOrders'">
      <div class="orderLiTitle">
        <div>
          <span class="name">{{item.storeName}}</span>
          <span class="orderNo">订单号：{{item.orderNo}}</span>
          <span class="copyBtn" @click="copyBtn">复制</span>
        </div>
        <div class="orderStatus">{{item.status}}</div>
      </div>
      <div class="orderLiGoods" v-for="(i,index) in item.items" :key="index">
        <img class="orderLiGoodsImg" src="../../static/test/goodsImg.png" />
        <div class="orderLiGoodsMsg">
          <div class="goodsMsgTop">
            <div class="goodsName">{{i.pname}}</div>
            <div class="goodsPrice">¥{{i.retailPrice}}</div>
          </div>
          <div class="goodsMsgBottom">
            <div class="goodsDetail">{{i.brief}}</div>
            <div class="goodsNum">x{{i.num}}</div>
          </div>
        </div>
      </div>
      <div class="orderLiNum">共{{item.goodsNum}}件商品 合计：￥{{item.payMoney}}</div>
    </div>
    <div class="orderLi" v-else-if="listType === 'myOrders'">
      <div class="orderLiTitle">
        <div>
          <span class="name">{{item.storeName}}</span>
          <span class="orderNo">订单号：{{item.orderNo}}</span>
          <span class="copyBtn" @click="copyBtn">复制</span>
        </div>
        <div class="orderStatus">{{item.status}}</div>
      </div>
      <div class="orderLiGoods" v-for="(i,index) in item.items" :key="index">
        <img class="orderLiGoodsImg" src="../../static/test/goodsImg.png" />
        <div class="orderLiGoodsMsg">
          <div class="goodsMsgTop">
            <div class="goodsName">{{i.pname}}</div>
            <div class="goodsPrice">¥{{i.retailPrice}}</div>
          </div>
          <div class="goodsMsgBottom">
            <div class="goodsDetail">{{i.brief}}</div>
            <div class="goodsNum">x{{i.num}}</div>
          </div>
        </div>
      </div>
      <div class="orderLiNum">共{{item.goodsNum}}件商品 合计：￥{{item.payMoney}}</div>
      <!--功能按钮-->
      <div class="functionBtn">
        <div class="btn blackBtn">取消订单</div>
        <div class="btn colorBtn">付款</div>
        <!--<div class="btn blackBtn">查看物流</div>-->
        <!--<div class="btn colorBtn">确认发货</div>-->
        <div class="btn colorBtn">提醒发货</div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'orderList',
    props: {
      item: {
        type: Object,
        default: null
      },
      listType: {
        type: String,
        default: 'shopOrders'
      }
    },
    onLoad () {
      // console.log(this.item)
    },
    methods: {
      copyBtn () {
        // var that = this;
        wx.setClipboardData({
          // 准备复制的数据
          data: '1234567890',
          success: function (res) {
            wx.showToast({
              title: '复制成功'
            })
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .orderLi {
    margin-top: 16rpx;
    background: #fff;
    -webkit-border-radius: 24rpx;
    -moz-border-radius: 24rpx;
    border-radius: 24rpx;
    font-size: 26rpx;
    color: #333;
    padding: 32rpx 20rpx;
    box-sizing: border-box;
    .orderLiTitle {
      display: flex;
      justify-content: space-between;
      .orderNo {
        color: #666;
        padding: 0 0.16rem 0 0.2rem;
      }
      .copyBtn {
        color: #37788A;
      }
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
    }
    .functionBtn {
      width: 7.16rem;
      border-top: 2rpx solid #F2F2F2;
      padding-top: .24rem;
      display: flex;
      margin-top: .18rem;
      margin-left: -.18rem;
      justify-content: flex-end;
      .btn {
        width: 1.50rem;
        height: .56rem;
        line-height: .56rem;
        margin-right: .24rem;
        -webkit-border-radius: .08rem;
        -moz-border-radius: .08rem;
        border-radius: .08rem;
        text-align: center;
      }
      .colorBtn {
        color: #87967C;
        border: .02rem solid #87967C;
      }
      .blackBtn {
        color: #333;
        border: .02rem solid #999;
      }
    }
  }
</style>
