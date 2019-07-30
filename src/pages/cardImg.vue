<template>
  <div class="popupBg">
    <painter :customStyle="customStyle" @imgOK="onImgOk" :palette="template" :dirty="true"/>
    <div class="functionBtn">
      <div class="shareBtn"><img src="../../static/images/shareWx.png" /> 微信好友</div>
      <div class="saveBtn" @click="save"><img src="../../static/images/shareDown.png" /> 保存图片</div>
    </div>
  </div>
</template>

<script>
  import Card from '../palette/card'
  const card = new Card()
  // const userInfo = {}
  // const userInfo = {
  //   avatar: 'https://qhyxpicoss.kujiale.com/r/2017/12/04/L3D123I45VHNYULVSAEYCV3P3X6888_3200x2400.jpg@!70q'
  //   // avatar: this.name
  // }
  // const template = card.do(userInfo)
  const customStyle = 'margin:0rpx 75rpx;background: #fff;'
  export default {
    config: {
      navigationBarTitleText: '生成图片'
    },
    data () {
      return {
        shareImg: '',
        customStyle: customStyle,
        // template: template,
        template: '',
        name: '',
        shoppingMsg: {}
      }
    },
    onLoad () {
      var that = this
      that.$httpWX.post({
        url: '/store/info',
        data: {
          // storeId: that.shopHomeId
          storeId: 18
        },
        header: 'r05dGm7Y84Kpl6kxX7Hrj0hbACrLnvcL'
      }).then(res => {
        console.log(res)
        that.shoppingMsg = res.data
        that.getMsg()
      })
    },
    methods: {
      getMsg () {
        // this.name = 'https://qhyxpicoss.kujiale.com/r/2017/12/04/L3D123I45VHNYULVSAEYCV3P3X6888_3200x2400.jpg@!70q'
        var userInfo = {
          avatar: this.shoppingMsg.pic,
          storeName: this.shoppingMsg.storeName,
          detail: this.shoppingMsg.detail,
          bg: this.shoppingMsg.background
        }
        this.template = card.do(userInfo)
      },
      save () {
        console.log('on save click')
        // shareImg 得到的图片
        var that = this
        // 获取相册授权
        wx.getSetting({
          success (res) {
            if (!res.authSetting['scope.writePhotosAlbum']) {
              wx.authorize({
                scope: 'scope.writePhotosAlbum',
                success () {
                  console.log('授权成功')
                  wx.saveImageToPhotosAlbum({
                    filePath: that.shareImg,
                    success (res) {
                      console.log('保存图片成功')
                      console.log(res)
                      wx.showToast({
                        title: '保存成功',
                        icon: 'success',
                        duration: 2000
                      })
                    }
                  })
                },
                fail () {
                  // 用户拒绝了授权
                  wx.showModal({
                    title: '保存图片',
                    content: '保存图片需要您授权',
                    showCancel: true,
                    confirmText: '确定',
                    success: function (res) {
                      if (res.confirm) {
                        // 打开设置页面
                        wx.openSetting({
                          success: function (data) {
                            if (data.authSetting['scope.writePhotosAlbum']) {
                              // 用户已经授权过了
                              wx.saveImageToPhotosAlbum({
                                filePath: that.shareImg,
                                success (res) {
                                  console.log('保存图片成功')
                                  console.log(res)
                                  wx.showToast({
                                    title: '保存成功',
                                    icon: 'success',
                                    duration: 2000
                                  })
                                }
                              })
                            } else {
                              console.log('授权失败')
                            }
                          },
                          fail: function (data) {
                            console.log('openSetting: fail')
                          }
                        })
                      } else if (res.cancel) {
                        console.log('用户点击取消')
                      }
                    }
                  })
                }
              })
            } else {
              // 用户已经授权过了
              wx.saveImageToPhotosAlbum({
                filePath: that.shareImg,
                success (res) {
                  console.log('保存图片成功')
                  console.log(res)
                  wx.showToast({
                    title: '保存成功',
                    icon: 'success',
                    duration: 2000
                  })
                }
              })
            }
          }
        })
      },
      onImgOk (e) {
        this.shareImg = e.mp.detail.path
        // 两种路径是一样的
        console.log(e.mp.detail.path)
        console.log(e.target.path)
      }
    }
  }
</script>
<style scoped lang="less">
  .popupBg {
    background: rgba(200,200,200,0.3);
    width: 100%;
    height: 100vh;
    padding-top: .4rem;
    box-sizing: border-box;
      .functionBtn {
      position: fixed;
      top: 7.4rem;
      width: 6rem;
      height: 1rem;
      margin: 0 .75rem;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      color: #666666;
      font-size: .28rem;
      .shareBtn {
        width: 50%;
        text-align: center;
        img {
          width: .38rem;
          height: .32rem;
          display: inline-block;
          vertical-align: middle;
        }
      }
      .saveBtn {
        flex: 1;
        text-align: center;
        img {
          width: .26rem;
          height: .26rem;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }
</style>
