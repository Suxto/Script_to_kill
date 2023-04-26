// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    // host: 'http://localhost:8080/scriptServer',
    host: 'http://47.120.6.121:8080/scriptServer-1.1-SNAPSHOT',
    imghost: 'http://47.120.6.121/scripts/'
    // imghost: 'https://raw.githubusercontent.com/Suxto/script_to_kill_pic/master/resorces/roles/image/'
  }
})