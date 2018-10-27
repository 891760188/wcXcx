//app.js
/**
 * App() 函数用来注册一个小程序。
 * 接受一个 Object 参数，
 * 其指定小程序的生命周期回调等。
 */
App({
  //小程序启动之后 触发 全局只触发一次
  /**
   * options
   * path 打开小程序的路径
   * query 打开小程序的query
   * scene 打开小程序的场景值 
   */
  onLaunch: function (options) {
    console.log('onLaunch	小程序初始化完成时（全局只触发一次）==' + JSON.stringify(options))
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(JSON.stringify(res))
        wx.setStorageSync('loginInfo', res.code)

      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  /**
   * 前台、后台定义： 当用户点击左上角关闭，或者按了设备 Home 键离开微信，
   * 小程序并没有直接销毁，而是进入了后台；
   * 当再次进入微信或再次打开小程序，又会从后台进入前台。
   * 需要注意的是：只有当小程序进入后台一定时间，或者系统资源占用过高，才会被真正的销毁。
   */
  onShow: function (options){
    
    wx.setStorageSync('shareTickets', options.shareTickets)
    wx.getShareInfo({
      shareTicket: options.shareTickets,
      timeout: 6000,
      success: function (res) {
        console.log('2' + JSON.stringify(res))
       
      },
      fail(res) {
       
        console.log('3' + JSON.stringify(res))
      },
      complete() {

      }
    })
    console.log('onShow小程序启动，或者从后台进入前台显示' + JSON.stringify(options))
  },
  onHide: function (options){
    console.log('onHide小程序前台到后台' + JSON.stringify(options))
  },
  onError: function (options){
    console.log('onError脚本错误或者api调用失败触发，会带上错误信息' + JSON.stringify(options))
  },
  globalData: {
    userInfo: null
  }, 
  /**
   * 在 onPageNotFound 回调中进行重定向处理，
   * 但必须在回调中同步处理，异步处理（例如 setTimeout 异步执行）无效。
   */
  onPageNotFound: function (options){
    console.log('onPageNotFound业面找不到' + JSON.stringify(options))
    wx.redirectTo({
      url: 'pages/index/index'
    }) // 如果是 tabbar 页面，请使用 wx.switchTab
  }

})