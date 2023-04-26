// index.js
const app = getApp();
const host = app.globalData.host;
const imghost = app.globalData.imghost;
// var roleinfo = require("../../resorces/roles/info");
Page({
  data: {
    scrpitId: null,
    roles: [],
    fileList: [],
    imghost: app.globalData.imghost
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
      url: '/pages/mapEdit/mapEdit?scriptId=' + this.data.scrpitId + '&roleId=' + roleId + '&roleName=' + roleName,
    })
  },
  addRole(e) {
    var that = this;
    var filePath;
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      success(res) {
        // console.log(res);
        filePath = res.tempFiles[0].tempFilePath;
        // console.log(res.tempFiles[0].tempFilePath);
        wx.showModal({
          title: '输入角色名字',
          editable: true,
          placeholderText: '角色名字',
          complete: (res) => {
            if (res.cancel) {}
            if (res.confirm) {
              // console.log(res.content) //用户输入的值
              var newRole = {
                roleName: res.content,
                id: that.data.roles.length + 1
              };
              wx.uploadFile({
                url: host + '/go.up',
                name: 'file',
                formData: {
                  sid: that.data.scrpitId,
                  id: that.data.roles.length
                },
                filePath: filePath,
                success: function (result) {
                  console.log("返回路径：" + result.data)
                }
              })
              that.setData({
                roles: that.data.roles.concat(newRole)
              })

            }
            // console.log(that.data.roles.length)
          }
        })
      },
      fail(res) {
        console.log(res);
      }
    });
  }
})