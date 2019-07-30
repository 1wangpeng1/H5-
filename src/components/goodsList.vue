<template>
    <div class="goodsList" @click="jumpGoodsDetail(goodsList.id)" v-if="listType === 'index'">
      <div class="goodsImg"><img :src="goodsList.listImg" /></div>
      <div class="goodsMsg">
        <div class="goodsTitle">{{goodsList.name}}</div>
        <div class="goodsDetail">{{goodsList.brief}}</div>
        <div class="goodsdPrice">
          <div class="price">
            <span class="nowPrice">￥{{goodsList.price}}</span>
            <span class="beforePrice">原价:￥{{goodsList.retailPrice}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="goodsList" @click="jumpGoodsDetail(goodsList.id)" v-else-if="listType === 'shopHomeOther'">
      <div class="goodsImg"><img :src="goodsList.listImg" /></div>
      <div class="goodsMsg">
        <div class="goodsTitle">{{goodsList.name}}</div>
        <div class="goodsDetail">{{goodsList.brief}}</div>
        <div class="goodsdPrice">
          <div class="price">
            <span class="nowPrice">￥{{goodsList.price}}</span>
            <span class="beforePrice">原价:￥{{goodsList.retailPrice}}</span>
          </div>
          <div class="buyBtn" @click.stop="buyDialog($event)">购买</div>
        </div>
      </div>
    </div>
    <div class="goodsList" @click="jumpGoodsDetail(goodsList.id)" v-else-if="listType === 'shopHomeMy'">
      <div class="goodsImg"><img :src="goodsList.listImg" /></div>
      <div class="goodsMsg">
        <div class="goodsTitle">{{goodsList.name}}</div>
        <div class="goodsDetail">{{goodsList.brief}}</div>
        <div class="goodsdPrice">
          <div class="price">
            <span class="nowPrice">￥{{goodsList.price}}</span>
            <span class="beforePrice">/赚{{goodsList.retailPrice}}</span>
          </div>
          <div class="buyBtn" @click.stop="buyDialog($event)">购买</div>
        </div>
      </div>
    </div>
    <div class="goodsList" v-else-if="listType === 'goodsManage'">
      <div class="goodsImg"><img :src="goodsList.listImg" /></div>
      <div class="goodsMsg">
        <div class="goodsTitle">{{goodsList.name}}</div>
        <div class="goodsDetail">{{goodsList.brief}}</div>
        <div class="goodsdPrice">
          <div class="price">
            <span class="nowPrice">￥{{goodsList.price}}</span>
            <span class="beforePrice">/赚{{goodsList.profit}}</span>
          </div>
          <div class="upOrDownBtn">
            <img v-if="goodsList.status === 1" @click.stop="upProduct($event)" src="../../static/images/goodsUp.png" />
            <img v-else @click.stop="downProduct($event)" src="../../static/images/goodsDown.png" />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'goodsList',
    // config: {
    //   navigationBarTitleText: '花店'
    // },
    props: {
      goodsList: {
        type: Object,
        default: null
      },
      listType: {
        type: String,
        default: 'index'
      }
    },
    data () {
      return {
      }
    },
    onLoad () {
      // console.log(this.goodsList.status)
      // console.log(typeof (this.goodsList.status))
      // console.log(this.goodsList.status === 1)
    },
    methods: {
      jumpGoodsDetail (id) {
        console.log('跳转')
        this.$router.push({ path: '/pages/goods/goodsMsgDetail?pid=' + id })
      },
      buyDialog (event) {
        console.log('购买弹框')
        this.$emit('check', this.goodsList)
        event.stopPropagation()
      },
      upProduct (event) {
        this.$emit('checkUp', this.goodsList)
        event.stopPropagation()
      },
      downProduct (event) {
        this.$emit('checkDown', this.goodsList)
        event.stopPropagation()
      }
    }
  }
</script>

<style scoped lang="less">
  .goodsList {
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 48rpx 44rpx 48rpx 18rpx;
    width: 750rpx;
    height: 296rpx;
    border-top: 2rpx solid #EDEDED;
    box-sizing: border-box;
    .goodsImg {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 196rpx;
      height: 196rpx;
      /*border: 1px solid #ccc;*/
      img {
        width: 75%;
        height: 75%;
        max-width: 100%;
        max-height: 100%;
      }
    }
    .goodsMsg {
      flex: 1;
      margin: 40rpx 0 34rpx 18rpx;
      .goodsTitle {
        font-size: 36rpx;
        color: #333;
      }
      .goodsDetail {
        display: flex;
        justify-content: space-between;
        font-size: 26rpx;
        color: #999;
        margin: 8rpx 0 48rpx;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .goodsdPrice {
        display: flex;
        justify-content: space-between;
        .price {
          flex: 1;
        }
        .nowPrice {
          font-size: 34rpx;
          color: #B97E72;
          padding-right: 18rpx;
        }
        .beforePrice {
          font-size: 24rpx;
          color: #999;
        }
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
        .upOrDownBtn {
          width: 150rpx;
          height: 56rpx;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>
