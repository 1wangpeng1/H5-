<template>
  <div class="pageBg">
    <painter :customStyle="customStyle" @imgOK="onImgOk" :palette="template" :dirty="true"/>
    <!--<button style="margin-top:40rpx" @click="save">保存</button>-->
    <div class="functionBtn">
      <div class="shareBtn">微信好友</div>
      <div class="saveBtn" @click="save">保存图片</div>
    </div>
  </div>
</template>

<script>
  import Card from '../palette/card'
  const card = new Card()
  const userInfo = {
    avatar: 'https://qhyxpicoss.kujiale.com/r/2017/12/04/L3D123I45VHNYULVSAEYCV3P3X6888_3200x2400.jpg@!70q'
  }
  const template = card.do(userInfo)
  const customStyle = 'margin:0rpx 75rpx;'
  export default {
    config: {
      navigationBarTitleText: '生成图片'
    },
    data () {
      return {
        shareImg: '',
        customStyle: customStyle,
        template: template
      }
    },
    methods: {
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
  .pageBg {
    background: rgba(200,200,200,0.3);
    width: 100%;
    height: 100vh;
    padding-top: .4rem;
    box-sizing: border-box;
  }
  .functionBtn {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 2rem;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    .shareBtn {
      width: 50%;
      text-align: center;
    }
    .saveBtn {
      flex: 1;
      text-align: center;
    }
  }
</style>
