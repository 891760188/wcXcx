// pages/jd/addApply/addApply.js
const configPub = require('../../../config')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    reason:'我要请假='+new Date().getTime()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  formSubmit(){
    debugger
    let param = {} ;
    var reason = this.data.reason ;
    param.url = configPub.addr + '/act/jdqj/save'
    param.data = {
      reason: reason
    }
    param.method = 'POST'
    param.result = res => {
      if (res.code == '0'){
        wx.showToast({
          title: '请假申请单号为：'+res.msg,
          // icon: 'loading',
          duration: 5000
        })
      }
      wx.navigateBack({
        delta: 1
      })
    }
    configPub.ajax(param);
  }
})