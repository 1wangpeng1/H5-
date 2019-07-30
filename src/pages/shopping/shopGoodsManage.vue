<template>
    <div>
      <scroll-view
        scroll-y
        :scroll-top="scrollTop"
        style="height: 100vh;"
        @scrolltolower="downLoad"
        @scroll="scroll"
      >
        <div class="indexTab">
          <div class="tabOne" @click="tabOneClick">
            <img class="tabOneHot" src="../../../static/images/tabOne1.png" :style="{'margin-bottom':marginBottom?'10rpx':'0rpx'}" />
            <img :src="tabOne ? tabOneImg.active : tabOneImg.normal" :class="tabOne ? 'tabOn' : 'tabHeight'" />
          </div>
          <div class="tabTwo" @click="tabTwoClick">
            <img :src="tabTwo ? tabTwoImg.active : tabTwoImg.normal" :class="tabTwo ? 'tabOn' : 'tabHeight'" />
          </div>
          <div class="tabThree" @click="tabThreeClick">
            <img :src="tabThree ? tabThreeImg.active : tabThreeImg.normal" :class="tabThree ? 'tabOn' : 'tabHeight'" />
          </div>
        </div>
        <div class="goodsListDiv">
          <GoodsList v-for="(item,index) in goodsList" :key="index" :goodsList="item" list-type="goodsManage" @checkUp="upProduct" @checkDown="downProduct"></GoodsList>
          <div class="loadingFinish" v-if="loadingFinish">—— 数据已全部加载 ——</div>
        </div>
        <van-toast id="van-toast"/>
      </scroll-view>
    </div>
</template>

<script>
  import Toast from 'vant-weapp/dist/toast/toast'
  import GoodsList from '../../components/goodsList'
  export default {
    name: 'shopGoodsManage',
    config: {
      navigationBarTitleText: '商品管理'
    },
    data () {
      return {
        tabOne: true,
        tabTwo: false,
        tabThree: false,
        marginBottom: true,
        scrollTop: 0,
        shopHomeId: '', // 店铺ID
        cateId: 1, // 分类ID
        pageIndex: 1, // 当前页数
        loadingNow: 1, // 自定义变量，防止多次滑动加载
        loadingFinish: false, // 数据加载完全
        tabOneImg: {normal: require('../../../static/images/tabOne2.png'),
          active: require('../../../static/images/tabOne_on.png')},
        tabTwoImg: {normal: require('../../../static/images/tabTwo.png'),
          active: require('../../../static/images/tabTwo_on.png')},
        tabThreeImg: {normal: require('../../../static/images/tabThree.png'),
          active: require('../../../static/images/tabThree_on.png')},
        goodsList: []
        // goodsList: [{goodsName: '小盆绿萝1', upOrDown: true, goodsDetail: '属于麒麟叶属植物，其缠绕性强，气根发达，可以水培种植。', nowPrice: '217', beforePrice: '40', img: require('../../../static/test/goodsImg.png')}, {goodsName: '小盆绿萝2', upOrDown: false, goodsDetail: '属于麒麟叶属植物，其缠绕性强，属于麒麟叶属植物，其缠绕性强，气根发可以水培种植。', nowPrice: '21', beforePrice: '40', img: '/../../static/test/goodsImg.png'}, {goodsName: '小盆绿萝', goodsDetail: '属于麒麟叶属植物，其缠绕性强，气根发 达，可以水培种植。', nowPrice: '2', beforePrice: '40', img: '/../../static/test/goodsImg.png'},
        //   {goodsName: '小盆绿萝1', upOrDown: true, goodsDetail: '属于麒麟叶属植物，其缠绕性强，气根发达，可以水培种植。', nowPrice: '10', beforePrice: '40', img: require('../../../static/test/goodsImg.png')}, {goodsName: '小盆绿萝2', upOrDown: false, goodsDetail: '属于麒麟叶属植物，其缠绕性强，属于麒麟叶属植物，其缠绕性强，气根发可以水培种植。', nowPrice: '21', beforePrice: '40', img: '/../../static/test/goodsImg.png'}, {goodsName: '小盆绿萝', goodsDetail: '属于麒麟叶属植物，其缠绕性强，气根发 达，可以水培种植。', nowPrice: '2', beforePrice: '40', img: '/../../static/test/goodsImg.png'}]
      }
    },
    components: {
      GoodsList
    },
    onLoad () {
      console.log(this.$route.query.shopHomeId)
      this.shopHomeId = this.$route.query.shopHomeId
      this.goodsList = []
      this.getManageGoodsList()
    },
    methods: {
      tabOneClick () {
        if (this.tabOne === false) {
          this.tabOne = !this.tabOne
          this.tabTwo = false
          this.tabThree = false
          this.marginBottom = true
        }
        this.cateId = 1
        this.pageIndex = 1
        this.loadingFinish = false
        this.goodsList = []
        // 请求数据
        this.getManageGoodsList()
        // 回到顶部
        this.goTop()
      },
      tabTwoClick () {
        if (this.tabTwo === false) {
          this.tabTwo = !this.tabTwo
          this.tabOne = false
          this.tabThree = false
          this.marginBottom = false
        }
        this.cateId = 2
        this.pageIndex = 1
        this.loadingFinish = false
        this.goodsList = []
        // 请求数据
        this.getManageGoodsList()
        // 回到顶部
        this.goTop()
      },
      tabThreeClick () {
        if (this.tabThree === false) {
          this.tabThree = !this.tabThree
          this.tabTwo = false
          this.tabOne = false
          this.marginBottom = false
        }
        this.cateId = 3
        this.pageIndex = 1
        this.loadingFinish = false
        this.goodsList = []
        // 请求数据
        this.getManageGoodsList()
        // 回到顶部
        this.goTop()
      },
      upProduct (item) {
        console.log('上架')
        console.log(item)
        var that = this
        that.$httpWX.post({
          url: '/store/upper/shelf/product',
          data: {
            productId: item.id,
            storeId: that.shopHomeId
          },
          header: that.globalData.Token
        }).then(res => {
          console.log(res)
          Toast.success('上架成功')
          this.pageIndex = 1
          this.loadingFinish = false
          this.goodsList = []
          // 刷新一下数据
          that.getManageGoodsList()
        })
      },
      downProduct (item) {
        console.log('下架')
        console.log(item)
        var that = this
        that.$httpWX.post({
          url: '/store/lower/shelf/product',
          data: {
            productId: item.id,
            storeId: that.shopHomeId
          },
          header: that.globalData.Token
        }).then(res => {
          console.log(res)
          Toast.success('下架成功')
          this.pageIndex = 1
          this.loadingFinish = false
          this.goodsList = []
          // 刷新一下数据
          that.getManageGoodsList()
        })
      },
      getManageGoodsList () {
        var that = this
        that.$httpWX.post({
          url: '/store/manager/product/list',
          data: {
            storeId: that.shopHomeId, // 店铺ID
            cateId: that.cateId, // 分类ID（1-2-3）
            current: that.pageIndex, // 当前页
            size: 10
          },
          header: that.globalData.Token
          // header: ''
        }).then(res => {
          console.log(res)
          that.loadingNow = 1 // 赋值
          that.goodsList = that.goodsList.concat(res.data.records)
          console.log(that.goodsList)
          if (res.data.records.length < 10) {
            that.loadingFinish = true
          }
        })
      },
      downLoad () {
        var that = this
        console.log('sssssssssss')
        if (that.loadingNow === 0) { // 判断是否加载完，如若加载完值变为1，未加载完时还是0，return出去不执行bindDownLoad整个函数
          return
        }
        that.pageIndex = that.pageIndex + 1 // 当前页+1
        console.log('===========上拉刷新pageNo' + that.pageIndex)
        // 请求后台
        that.loadingNow = 0 // 赋值
        that.getManageGoodsList()
      },
      scroll (e) {
        var that = this
        that.scrollTop = e.mp.detail.scrollTop
        if (e.mp.detail.scrollTop >= that.top) {
          that.fixtop = true
        } else {
          that.fixtop = false
        }
      },
      goTop () {
        this.scrollTop = 0
      }
    }
  }
</script>

<style scoped lang="less">
  .indexTab {
    position: fixed;
    top: 0;
    width: 100%;
    height: 102rpx;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    img {
      width: 120rpx;
      height: 42rpx;
    }
    .tabOn {
      margin-top: 20rpx;
    }
    .tabHeight {
      width: 120rpx;
      height: 28rpx;
    }
    .tabOneHot {
      width: 34rpx;
      height: 38rpx;
      padding-right: 8rpx;
    }
  }
  .goodsListDiv {
    margin-top: 102rpx;
    .loadingFinish {
      width: 100%;
      height: .9rem;
      line-height: .9rem;
      text-align: center;
      color: #999;
      font-size: .26rem;
    }
  }
</style>
