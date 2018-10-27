//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World22',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    count : 1
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  turnwebview(){
    wx.navigateTo({
      url: '/pages/webviewtest/webviewtest'
    })
  },
  turncamera(){
    wx.navigateTo({
      url: '/pages/camera/camera'
    })
  },
  wifi(){
    wx.navigateTo({
      url: '/pages/wifi/wifi',
    })
  },
  turnfile(){
    wx.navigateTo({
      url: '/pages/file/file'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  add:function(){
    console.log('调用add方法');
    this.setData({
      count: this.data.count + 1
    })
  },
  goPageTest01:function(){
    wx.navigateTo({
      url: '../test01/test01?a=11'
    })
  },
  turnzujian(){
    wx.navigateTo({
      url: '../zujiantest/zujiantest?a=11'
    })
  },
  onTabItemTap(option){
    debugger
    
    console.log(JSON.stringify(option))
  }
})
