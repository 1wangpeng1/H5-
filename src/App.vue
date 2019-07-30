<script>
export default {
  onLaunch: function () {
    // 隐藏系统tabbar
    wx.hideTabBar()
  },
  globalConfig: {
    /*eslint-disable*/
    usingComponents: {
      'painter': '/static/painter/painter',
      "van-popup": "vant-weapp/dist/popup/index",
      'van-tag': 'vant-weapp/dist/tag/index',
      "van-icon": 'vant-weapp/dist/icon/index',
      "van-toast": "vant-weapp/dist/toast/index",
      "van-cell": "vant-weapp/dist/cell/index",
      "van-cell-group": "vant-weapp/dist/cell-group/index",
      "van-row": "vant-weapp/dist/row/index",
      "van-col": "vant-weapp/dist/col/index",
      "van-stepper": "vant-weapp/dist/stepper/index",
      "van-field": "vant-weapp/dist/field/index",
      "van-checkbox": "vant-weapp/dist/checkbox/index",
      "van-area": "vant-weapp/dist/area/index",
      "van-tab": "vant-weapp/dist/tab/index",
      "van-tabs": "vant-weapp/dist/tabs/index"
    }
  },
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // eslint-disable-next-line
    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style lang="less">
  @import "../static/reset.less";
</style>
