<template>
    <div class="newsList myifoSet">
      <van-cell-group>
        <van-cell v-for="(item, index) in newsList" :key="index" :title="item.title" :value="item.time" :url="'/pages/myIfoPages/newsDetail?newsId=' + item.id">
          <van-icon slot="icon" class="custom-icon" />
          <div slot="icon">
            <img class="cellImg" src="../../../static/images/myifoNews.png" />
          </div>
        </van-cell>
      </van-cell-group>
    </div>
</template>

<script>
  export default {
    name: 'myifoNews',
    config: {
      navigationBarTitleText: '消息'
    },
    data () {
      return {
        newsList: [{title: '氧化大全1', time: '2019-12-28', id: 1}, {title: '氧化大全2', time: '2019-12-28', id: 2}, {title: '氧化大全3', time: '2019-12-28', id: 3}]
      }
    },
    onLoad () {
      this.getNewsList()
    },
    methods: {
      getNewsList () {
        var that = this
        that.$httpWX.post({
          url: '/message/list',
          data: {
            current: 1,
            size: 10
          },
          header: that.globalData.Token
        }).then(res => {
          console.log(res)
          // that.newsList = res.data.records
          // console.log(that.newsList)
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .newsList {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background: #F4F4F4;
    padding-top: .2rem;
    box-sizing: border-box;
    .cellImg {
      width: 34rpx;
      height: 42rpx;
      vertical-align:middle;
      padding-right: .22rem;
    }
  }
</style>
