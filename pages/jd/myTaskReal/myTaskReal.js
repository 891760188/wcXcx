const configPub = require('../../../config')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[]
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
    this.getMyTask();
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
  getMyTask() {
    var _this = this;
    let param = {};
    param.url = configPub.addr + '/act/jdqj/myTask'
    param.data = {
      offset: 0,
      limit: 10
    }
    param.method = 'GET'
    param.result = res => {

      res.forEach(item => {
        _this.data.dataList.push(item);
      });
      _this.setData({
        dataList: _this.data.dataList
      });
    }
    configPub.ajax(param);
  },
  intoDetail(item) {
    let data = item.currentTarget.dataset.item;
    data = JSON.stringify(data);
    data = encodeURIComponent(data);
    configPub.goPage('../complete/complete?item=' + data);
  }
})