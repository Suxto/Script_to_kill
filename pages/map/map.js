// pages/map/map.js
var localData = require('../../resorces/texts/missions');
Page({

  data: {
    roleNum: 0,
    roleName: null,
    wid: 0,
    list: null,
    missionShown: null
  },
  onLoad() {
    var data = localData.missions[this.data.roleNum].missionList;
    var rn = localData.missions[this.data.roleNum].roleName;
    var ms = localData.missions[this.data.roleNum].missionShown;
    if (data == undefined) this.setData({ list: [] })
    else this.setData({ list: data });
    this.setData({
      roleName: rn,
      missionShown: ms
    })
    // console.log(rn);
    // console.log(this.data.missionShown);
  }
  ,
  openList: function () {
    this.setData({
      wid: 700,
      staus: "none"
    })
  },
  closeList: function () {
    this.setData({
      wid: 0,
      staus: "block"
    })
  },
  removeMission(e) {
    var that = this;
    wx.showModal({
      title: '注意',
      content: '你完成了这条任务吗？',
      success: function (res) {
        if (res.confirm) {
          var num = e.currentTarget.dataset.index;
          var str = "list[" + num + "].status";
          // console.log(typeof str);
          var after = that.data.missionShown - 1;
          that.setData({
            [str]: "none",
            missionShown: after
          })
        }
      }
    })
  }

})


