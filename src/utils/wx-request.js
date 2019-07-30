const host = 'http://192.168.0.102:9990'

function request (url, method, data, header) {
  wx.showLoading({
    title: '加载中' // 数据请求前loading
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + url, // 仅为示例，并非真实的接口地址
      method: method,
      data: data,
      header: header === '' ? {'Content-Type': 'application/x-www-form-urlencoded'} : {'Content-Type': 'application/x-www-form-urlencoded', 'token': header},
      // headers: {
      //   'content-type': 'application/json' // 默认值
      // },
      success: function (res) {
        // wx.hideLoading()
        if (res.data.code === 200) {
          resolve(res.data)
        } else if (res.data.code === -200) {
          console.log(res.data)
          wx.showToast({
            title: res.data.msg,
            icon: 'fail',
            duration: 2000 // 持续的时间
          })
        } else if (res.data.code === 40000) {
        //  重新登陆 token过期
        }
      },
      fail: function (res) {
        // wx.hideLoading()
        // reject(false)
      },
      complete: function () {
        wx.hideLoading()
      }
    })
  })
}

function get (obj) {
  return request(obj.url, 'GET', obj.data, obj.header)
}

function post (obj) {
  return request(obj.url, 'POST', obj.data, obj.header)
}

export default {
  request,
  get,
  post,
  host
}
