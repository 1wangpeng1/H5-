<template>
    <div class="shopOrdersBg">
      <van-tabs :active="tabActive" :swipe-threshold="5" color="#7C8B71" sticky="true" :border="false" @change="tabActiveChange">
        <van-tab v-for="(item, index) in tabTitle" :key="index" :title="item">
          <OrderList :item="item" v-for="(item,index1) in allOrders" :key="index1" list-type="shopOrders"></OrderList>
        </van-tab>
      </van-tabs>
      <div class="contact">
        <button open-type="contact" @contact="handleContact"></button>
      </div>
    </div>
</template>

<script>
  import OrderList from '../../components/orderList'
  export default {
    name: 'shopOrders',
    config: {
      navigationBarTitleText: '店铺的订单',
      navigationBarBackgroundColor: '#F8F8F9',
      navigationBarTextStyle: 'black'
    },
    data () {
      return {
        /* eslint-disable */
        tabActive: '', // tab标签显示位置
        status: '', // 返回值 订单状态，0已取消，1待付款，2待发货，3待收货，4已完成，5全部
        pageIndex: 1,
        tabTitle: ['全部', '待付款', '待发货', '待收货', '已完成'],
        allOrders: [
          {
            "id": 14,
            "orderNo": "20190530376738",
            "storeId": 4,
            "orderMoney": 1500,
            "status": 4,
            "payMoney": 1500,
            "storeName": "海角弯",
            "goodsNum": 0,
            "items": [
              {
                "pid": 1,
                "pname": "小盆绿萝",
                "pic": "http://flower.zghuahui.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190416091828.png",
                "num": 100,
                "sumMoney": 1500,
                "retailPrice": 15,
                'brief':'沙发上的股份属于麒麟叶属植物，其缠绕性强， 气根发达，可以水培种可以水培种可以水培种就流口水放假啊',
                "price": 10
              },
              {
                "pid": 2,
                "pname": "小盆绿萝3",
                "pic": "http://flower.zghuahui.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190416091828.png",
                "num": 10,
                "sumMoney": 150,
                "retailPrice": 15,
                'brief':'沙发上的股份属于麒麟叶属植物，其缠绕性强， 气根发达，可以水培种可以水培种可以水培种就流口水放假啊',
                "price": 10
              }
            ]
          },
          {
            "id": 13,
            "orderNo": "20190530415665",
            "storeId": 4,
            "orderMoney": 1500,
            "status": 4,
            "payMoney": 1500,
            "storeName": "海角弯",
            "goodsNum": 0,
            "items": [
              {
                "pid": 1,
                "pname": "小盆绿萝",
                "pic": "http://flower.zghuahui.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190416091828.png",
                "num": 100,
                "sumMoney": 1500,
                "retailPrice": 15,
                'brief':'沙发上的股份属于麒麟叶属植物，其缠绕性强， 气根发达，可以水培种可以水培种可以水培种就流口水放假啊',
                "price": 10
              }
            ]
          }
        ]
      }
    },
    onLoad () {
      var that = this
      console.log(that.$route.query.status)
      this.status = that.$route.query.status
      switch(that.status) {
        case '5': that.tabActive = 0; break;
        case '4': that.tabActive = 4; break;
        case '3': that.tabActive = 3; break;
        case '2': that.tabActive = 2; break;
        case '1': that.tabActive = 1; break;
      }
      console.log(that.tabActive)
      that.getOrderList()
    },
    components: {
      OrderList
    },
    methods: {
      tabActiveChange (e) {
        console.log(e.mp.detail.index)
        this.status = e.mp.detail.index
        this.getOrderList()
      },
      handleContact (e) {
        console.log(e.path)
        console.log(e.query)
      },
      getOrderList () {
        var that = this
        that.$httpWX.post({
          url: '/order/store/list',
          data: {
            status: that.status,
            current: that.pageIndex, // 当前页
            size: 10
          },
          header: that.globalData.Token
        }).then(res => {
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .shopOrdersBg {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background: #F8F8F9;
    padding: 0 16rpx 16rpx;
    box-sizing: border-box;
    .tab-active-class {
      color: #ff0;
    }
  }
</style>
