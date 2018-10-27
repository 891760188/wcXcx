Page({
  onReady() {
    this.videoCtx = wx.createVideoContext('myVideo')
    this.shareTest()
  },
  play() {
    this.videoCtx.play()
  },
  pause() {
    this.videoCtx.pause()
  },
  onShareAppMessage: function (arg) {
    var that = this ;
    console.log('currentPage.route' + getCurrentPages()[0].route);
    return {
      title: '小程序开发测试@hgy',
      path: pages/zujiantest/zujiantest,
      imageUrl: 'hehe.png',
      success(e) {
        // shareAppMessage: ok,
        // shareTickets 数组，每一项是一个 shareTicket ，对应一个转发对象
        // 需要在页面onLoad()事件中实现接口
        wx.showShareMenu({
          // 要求小程序返回分享目标信息
          withShareTicket: true
        });
      },
      // imageUrl:'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eq7HG1icXhA3y1oC4EClxcKCpR943uKd4v3XDtAnw2JK0M8jdLCJE93TeLypVtiazK6xvAlDREFfiaDw/132'
    }
  },
  onLoad(e) {
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  onShow(res){
    wx.showShareMenu({
      withShareTicket: true
    })
    // console.log('6' + JSON.stringify(res))
    // this.shareTest(res.shareTickets)
  },
  shareTest(){
    debugger
    wx.getShareInfo({
      shareTicket: wx.getStorageSync('shareTickets'),
      timeout:6000,
      success: function (res){
        console.log('2' +JSON.stringify(res))
        debugger
      },
      fail(res){
        debugger
        console.log('3'+JSON.stringify(res))
      },
      complete(){

      }
    })
  }
})