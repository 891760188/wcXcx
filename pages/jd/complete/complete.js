const configPub = require('../../../config')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    opinion:'ooooooo01'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let data = options.item
    data = decodeURIComponent(data);
    data = JSON.parse(data);
    this.setData({
      data : data 
    });
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
  completeWork:function(event){
    debugger
    if (!this.data.opinion){
      wx.showToast({
        title: 'empty',
        // icon: 'loading',
        duration: 5000
      })
      return ;
    }

    var _this = this;
    let param = {};
    param.url = configPub.addr + '/act/jdqj/complete'
    param.data = {
      pass: event.currentTarget.dataset.index,
      opinion: this.data.opinion,
      taskId: this.data.data.taskId
    }
    param.method = 'post'
    param.result = res => {
      wx.showToast({
        title: 'sucess',
        // icon: 'loading',
        duration: 5000
      })
      
    }
    configPub.ajax(param);
  }

})