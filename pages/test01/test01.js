// pages/test01/test01.js

//获取应用实例 整个小程序只有一个 App 实例，是全部页面共享的
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '我是msg',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad页面加载==' + JSON.stringify(options))
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('this.route='+this.route)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function (option) {
    // debugger
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // debugger
  },
  ageScroll:function(arg){
    debugger
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (arg) {
    return {
      title: '小程序开发测试@hgy',
      path: '/page/user?id=123',
      imageUrl:'hehe.png'
      // imageUrl:'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eq7HG1icXhA3y1oC4EClxcKCpR943uKd4v3XDtAnw2JK0M8jdLCJE93TeLypVtiazK6xvAlDREFfiaDw/132'
    }
  },
  
  clickMe:function(){
    
    this.setData({ msg: "Hello World" })
    wx.login({
      success(res) {
        // debugger
        console.log(res.code)
      },
      fail: function (res){
        // debugger
        console.log(res.code)
      }
    })

    wx.getBatteryInfo({
      success(res) {
        console.log(res.code)
      }
    })


  },
  clickMe2(){
    wx.navigateTo({
      url: '../logs1/logs1'
    })
  },
  /**
   * 获取小程序实例 全局上下文
   */
  getAppInstance(){
    var appInstance = getApp()
    //获取当前用户信息
    console.log(appInstance.globalData)
    console.log(JSON.stringify(appInstance.globalData)) // I am global data
  },
  xiala:function(){
    wx.startPullDownRefresh({
      success:function(){
        //debugger
      },
      fail: function () {
        //debugger
      },
      complete: function () {
        //debugger
      } 
    })
  }
})