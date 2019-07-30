import Vue from 'vue'
import MpvueRouterPatch from 'mpvue-router-patch'
import App from '@/App'
import store from '@/store'
import WXrequest from './utils/wx-request'
Vue.prototype.$httpWX = WXrequest
Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false
const app = new Vue({
  mpType: 'app',
  store,
  ...App
})
app.$mount()
Vue.prototype.globalData = getApp().globalData // 设置全局变量
getApp().globalData.Token = 'znPa4Vi2jBFPMWWqPt6d2hXDtH9alSGh'
// getApp().globalData.Token = ''
