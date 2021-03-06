// pages/file/file.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  /**
   * 保存文件到本地
   */
  saveFile(){
    var _that = this ;
    wx.chooseImage({
      success: function (res) {
        const tempFilePaths = res.tempFilePaths
        wx.saveFile({
          tempFilePath: tempFilePaths[0],
          success(res) {
            debugger
            const savedFilePath = res.savedFilePath
            _that.setData({
              src: savedFilePath
            })
          }
        })
      }
    })
  },
  openFile(){
    wx.downloadFile({
      // 示例 url，并非真实存在
      url: 'https://github.com/891760188/pythonDemo/raw/master/pict.xlsx',
      success: function (res) {
        const filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
          }
        })
      }
    })
  },
  getFileList(){
    wx.getSavedFileList({
      success(res) {
        debugger
        console.log(res.fileList)
      }
    })
  }
})