// index.js
const app = getApp()
var roleinfo = require("../../resorces/roles/info");
Page({
  data: {
    roles: null
  },
  onLoad() {
    this.setData({
      roles: roleinfo.roles
    })
  },
  gotoMap(e) {
    var roleId = e.currentTarget.dataset.index;
    var roleName = this.data.roles[roleId].roleName;
    console.log(roleId + ' ' + roleName);
    wx.navigateTo({
      url: '/pages/map/map?roleId=' + roleId + '&roleName=' + roleName,
    })
  }
})
