// pages/scriptSel/scriptSel.js
const app = getApp();
const host = app.globalData.host;
Page({
  /**
   * Page initial data
   */
  data: {
    scripts: []
  },
  query(e) {
    var that = this;
    var str = e.detail.value;

    wx.request({
      url: host + '/getScripts.do',
      method: 'get',
      data: {
        title: str
      },
      header: {
        'content-type': 'application/json' //默认值
      },
      success(res) {
        // console.log(str);
        // var list = JSON.parse(res.data);
        // console.log(res.data);
        that.setData({
          scripts: res.data
        })
      },
      fail(res) {
        console.log(res)
      }
    });
  },
  go(e) {
    // console.log(e.currentTarget.dataset.index);
    var idx = e.currentTarget.dataset.index;
    var id = this.data.scripts[idx].id;
    wx.navigateTo({
      url: '/pages/roleSel/roleSel?id=' + id,
    })
  },
  onLoad(options) {
    this.setData({
      id: options.id
    });
    // console.log(this.data.id)
    var that = this;
    wx.request({
      url: host + '/getScripts.do',
      method: 'get',
      header: {
        'content-type': 'application/json' //默认值
      },
      success(res) {
        // console.log(res.data);
        // var list = JSON.parse(res.data);
        // console.log(res.data);
        that.setData({
          scripts: res.data
        })
      },
      fail(res) {
        console.log(res)
      }
    });
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})