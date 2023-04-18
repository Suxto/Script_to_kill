// index.js
const app = getApp();
const host = app.globalData.host;
// var roleinfo = require("../../resorces/roles/info");
Page({
  data: {
    scrpitId: null,
    roles: []
  },
  onLoad(option) {
    var that = this;
    var sid = option.id;
    this.setData({
      scrpitId: sid
    });
    wx.request({
      url: host + '/getContents.do',
      method: 'get',
      data: {
        type: 'roles',
        id: sid
      },
      header: {
        'content-type': 'application/json' //默认值
      },
      success(res) {
        that.setData({
          roles: res.data
        })
      },
      fail(res) {
        console.log(res)
      }
    });
    // console.log(JSON.stringify(this.data.roles));
  },
  gotoMap(e) {
    var roleId = e.currentTarget.dataset.index;
    var roleName = this.data.roles[roleId].roleName;
    // console.log(roleId + ' ' + roleName);
    wx.navigateTo({
      url: '/pages/map/map?scriptId=' + this.data.scrpitId + '&roleId=' + roleId + '&roleName=' + roleName,
    })
  }
})