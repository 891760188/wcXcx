const configPub = require('../../../config')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailData:{
      id:'loading..',
      crdt: 'loading..',
      reason: 'loading..'
    },
    aduitView:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let detailObj = JSON.parse(decodeURIComponent(options.item)) ;
    this.setData({
      detailData: detailObj
    });
    this.getProgress();
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
  getProgress(){
    var _this = this;
    let param = {};
    param.url = configPub.addr + '/act/av/viewList'
    param.method = 'GET'
    param.result = res => {
      res.forEach(item => {
        _this.data.aduitView.push(item);
      });
      _this.setData({
        aduitView: _this.data.aduitView
      });
    }
    configPub.ajax(param);
  }
})