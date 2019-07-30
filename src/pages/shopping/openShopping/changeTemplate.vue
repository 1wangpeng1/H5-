<template>
    <div>
      <div class="changeTips">为花店选一个装饰风格吧~</div>
      <div class="templateImg">
        <div class="templateImgLi" v-for="(item, index) in templateImg" :key="index" @click="changeImg(index)">
          <img :src="item.small_url" />
          <div :class="templateIndex === index? 'templateImgYes' : 'templateImgNo'"></div>
        </div>
      </div>
      <div class="openShopBtn">
        <div v-if="editTemplate === 'true'" @click="openShopBtn" class="editBtn">确认</div>
        <img v-else @click="openShopBtn" src="../../../../static/images/openShopBtn.png" />
      </div>
    </div>
</template>

<script>
  export default {
    name: 'changeTemplate',
    data () {
      return {
        editTemplate: false, // 是否是第一次
        templateIndex: 0, // 选中哪一个模板
        openShoppingMsg: {}, // 开花店的信息（名字、宣传语）
        templateImg: []
        // templateImg: [require('../../../../static/images/peoShopHome.png'), require('../../../../static/images/peoShopHome.png'), require('../../../../static/images/peoShopHome.png'), require('../../../../static/images/peoShopHome.png')]
      }
    },
    onLoad () {
      var that = this
      console.log(that.$route.query.editTemplate)
      // 获取背景图
      that.getShopBackground()
      // 是否是第一次来选模板 true第二次 即修改
      that.editTemplate = that.$route.query.editTemplate
      that.openShoppingMsg = JSON.parse(that.$route.query.openShoppingMsg)
    },
    methods: {
      changeImg (index) {
        console.log(index)
        this.templateIndex = index
        // 传给后台大图
        console.log(this.templateImg)
        console.log(this.templateImg[index].big_url)
        this.openShoppingMsg.sureTemplateImg = this.templateImg[index].big_url
        console.log(this.openShoppingMsg)
      },
      openShopBtn () {
        console.log(this.openShoppingMsg)
        var that = this
        that.$httpWX.post({
          url: '/store/save/info',
          data: {
            background: that.openShoppingMsg.sureTemplateImg,
            detail: that.openShoppingMsg.detail,
            headPic: that.openShoppingMsg.pic,
            id: that.openShoppingMsg.id, // 店铺ID  新添ID为空 修改ID需有值
            pid: '', // 上级店铺ID
            storeName: that.openShoppingMsg.storeName
          },
          header: that.globalData.Token
        }).then(res => {
          console.log(res)
          this.$router.replace({ path: '/pages/shopping/shopHome', query: {shopHomeId: res.data.id} })
        })
      },
      getShopBackground () {
        var that = this
        that.$httpWX.get({
          url: '/store/get/background',
          header: that.globalData.Token
        }).then(res => {
          console.log(res)
          that.templateImg = res.data
          console.log(that.templateImg)
          this.openShoppingMsg.sureTemplateImg = this.templateImg[0].big_url
          console.log(that.openShoppingMsg)
          if (that.editTemplate === true || that.editTemplate === 'true') {
            console.log(that.$route.query.templateClassify)
            for (var i = 0; i < that.templateImg.length; i++) {
              if (that.templateImg[i].big_url === that.$route.query.templateClassify) {
                that.templateIndex = i
                console.log(that.templateIndex)
              }
            }
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .changeTips {
    width: 100%;
    margin: 40rpx auto 18rpx;
    text-align: center;
    font-size: 30rpx;
    color: #333;
  }
  .templateImg {
    width: 100%;
    padding: 0 24rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    box-sizing: border-box;
    .templateImgLi {
      position: relative;
      z-index: 9;
      /*background: #000;*/
      width: 340rpx;
      height: 340rpx;
      margin-top: 18rpx;
      overflow: hidden;
      border-radius: 8rpx;
      img {
        width: 100%;
        height: 100%;
        border-radius: 8rpx;
        /*<!--margin:0rpx 0 0 -40rpx;-->*/
      }
      .templateImgNo {
        position: absolute;
        top: 0;
        z-index: 5;
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0.4;
      }
      .templateImgYes {
        position: absolute;
        top: 0;
        z-index: 5;
        width: 100%;
        height: 100%;
        background: url("../../../../static/images/templateImgYes.png");
        background-size: 100% 100%;
        /*opacity: 0.4;*/
      }
    }
  }
  .openShopBtn {
    margin: 72rpx auto 0;
    width: 302rpx;
    height: 68rpx;
    img {
      width: 100%;
      height: 100%;
    }
    .editBtn {
      width: 100%;
      height: 68rpx;
      line-height: 68rpx;
      background: #87967C;
      color: #fff;
      text-align: center;
      font-size: 32rpx;
      -webkit-border-radius: 8rpx;
      -moz-border-radius: 8rpx;
      border-radius: 8rpx;
    }
  }
</style>
