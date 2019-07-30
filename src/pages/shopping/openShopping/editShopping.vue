<template>
  <div class="pageBg">
    <div class="shoppingAvatar">
      <div class="shoppingAvatarTitle">花店头像</div>
      <div class="shoppingAvatarUrl" @click="changeAvatar">
        <img :src="openShoppingMsg.pic" />
        <span>></span>
      </div>
    </div>
    <div class="shoppingMsg">
      <van-cell-group>
        <van-field class="shoppingName" @change="changeShoppingName" :value="openShoppingMsg.storeName" placeholder="花店名称" />
        <van-field class="shoppingDetail" @change="changeShoppingDetail" :value="openShoppingMsg.detail" type="textarea" placeholder="给你的花店写一小段宣传语吧～" />
      </van-cell-group>
    </div>
    <div v-if="openShopping === 'true'" class="selectTemplate"><img @click="changeTemplate" src="../../../../static/images/templateBtn.png" /></div>
    <!--修改模板-->
    <div v-else class="shoppingTemplate">
      <div class="shoppingTemplateTitle">选择模板</div>
      <div class="shoppingTemplateUrl" @click="modifyTemplate">
        <img :src="openShoppingMsg.background" />
        <span>></span>
      </div>
    </div>
    <!--这种特殊占位符是必须有的！-->
    <van-toast id="van-toast"/>
  </div>
</template>

<script>
  import Toast from 'vant-weapp/dist/toast/toast'
  export default {
    name: 'editShopping',
    config: {
      // navigationBarTitleText: '花店'
      // navigationBarBackgroundColor: '#F8F8F9',
      // navigationBarTextStyle: 'black'
    },
    data () {
      return {
        userInfo: '',
        openShopping: false, // 是否是首次进来填写 true首次  false修改
        // openShoppingMsg: {}
        // openShoppingMsg: {shoppingName: '', shoppingDetail: '', shoperAvatar: '', shoperTemplate: ''}
        openShoppingMsg: {storeName: '', detail: '', pic: '', background: ''}
      }
    },
    onLoad () {
      this.userInfo = this.globalData.userInfo // 全局变量
      console.log('that.userInfo' + this.userInfo)
      this.openShoppingMsg.pic = this.userInfo.avatarUrl
      this.openShopping = this.$route.query.openShopping
      console.log(this.openShopping)
      // 修改店铺信息数据
      if (this.openShopping === false || this.openShopping === 'false') {
        console.log('修改店铺信息')
        this.openShoppingMsg = JSON.parse(this.$route.query.changeShoppingMsg)
        this.openShoppingMsg.background = this.openShoppingMsg.background
        this.openShoppingMsg.pic = this.openShoppingMsg.pic
      }
      console.log(this.openShoppingMsg)
    },
    methods: {
      changeShoppingName (event) {
        this.openShoppingMsg.storeName = event.mp.detail
      },
      changeShoppingDetail (event) {
        this.openShoppingMsg.detail = event.mp.detail
      },
      changeTemplate () {
        var that = this
        console.log(that.openShoppingMsg.storeName)
        if (that.openShoppingMsg.storeName === '') {
          Toast.fail('请先填写花店名字')
        } else if (that.openShoppingMsg.storeName.length > 6) {
          Toast.fail('花店名字个数需少于7个字')
        } else if (that.openShoppingMsg.detail.length > 18) {
          Toast.fail('宣传语字数需少于18个字')
        } else {
          console.log(that.openShoppingMsg)
          var openShoppingMsg = JSON.stringify(that.openShoppingMsg)
          this.$router.replace({ path: '/pages/shopping/openShopping/changeTemplate', query: {openShoppingMsg: openShoppingMsg} })
        }
      },
      changeAvatar () {
        console.log('修改头像')
        var that = this
        wx.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success (res) {
            // tempFilePath可以作为img标签的src属性显示图片
            const tempFilePaths = res.tempFilePaths
            console.log(tempFilePaths)
            that.openShoppingMsg.pic = tempFilePaths[0]
          },
          fail (res) {
            console.log(res)
          }
        })
      },
      modifyTemplate () {
        var that = this
        console.log(that.openShoppingMsg.storeName)
        if (that.openShoppingMsg.storeName === '') {
          Toast.fail('请先填写花店名字')
        } else if (that.openShoppingMsg.storeName.length > 6) {
          Toast.fail('花店名字个数需少于7个字')
        } else if (that.openShoppingMsg.detail.length > 18) {
          Toast.fail('宣传语字数需少于18个字')
        } else {
          var openShoppingMsg = JSON.stringify(this.openShoppingMsg)
          this.$router.replace({path: '/pages/shopping/openShopping/changeTemplate',
            query: {
              templateClassify: this.openShoppingMsg.background,
              openShoppingMsg: openShoppingMsg,
              editTemplate: 'true'
            }
          })
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .pageBg {
    width: 750rpx;
    height: 100vh;
    background: #F8F8F9;
    .shoppingAvatar {
      display: flex;
      justify-content: left;
      align-items: center;
      width: 750rpx;
      height: 162rpx;
      padding: 0 30rpx 0  24rpx;
      box-sizing: border-box;
      border-bottom: 14rpx solid #F8F8F9;
      background: #fff;
      .shoppingAvatarTitle {
        font-size: 30rpx;
        color: #333;
      }
      .shoppingAvatarUrl {
        flex: 1;
        text-align: right;
        color: #999;
        img {
          width: 100rpx;
          height: 100rpx;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          vertical-align: middle;
          margin-right: 16rpx;
        }
      }
    }
    .shoppingMsg {
      width: 750rpx;
      height: 320rpx;
      background: #fff;
    }
    .selectTemplate {
      margin: 216rpx auto 0;
      text-align: center;
      img {
        width: 302rpx;
        height: 68rpx;
      }
    }
    .shoppingTemplate {
      display: flex;
      justify-content: left;
      align-items: center;
      width: 750rpx;
      height: 124rpx;
      padding: 0 30rpx 0  24rpx;
      box-sizing: border-box;
      border-top: 14rpx solid #F8F8F9;
      background: #fff;
      .shoppingTemplateTitle {
        font-size: 30rpx;
        color: #333;
      }
      .shoppingTemplateUrl {
        flex: 1;
        text-align: right;
        color: #999;
        img {
          width: 120rpx;
          height: 60rpx;
          vertical-align: middle;
          margin-right: 16rpx;
        }
      }
    }
  }
</style>
