const host = '127.0.0.1'
const addr = `http://${host}`
const config = {
  addr: addr,
  loginUrl: `http://${host}/login`,
  statusCode:200,
  code:0,
  goPage:url => {
    wx.navigateTo({
      url: url
    })
  },
  ajax: param => {

    param.header = {
      'content-type': 'application/x-www-form-urlencoded' ,
      'cookie': wx.getStorageSync("cookie-info")
    }
    param.method = param.method || 'get'
    param.success = result => {
      console.log(result);
      param.result(result.data);
      // if (result.statusCode == configPub.statusCode) {
       
      //   if (result.data.code == configPub.code) {
          
      //   }
      // }

    }
    param.fail = res => {
      console.info('fail')
    }
    wx.request(param)
  }
}
module.exports = config