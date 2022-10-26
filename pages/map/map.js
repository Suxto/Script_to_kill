// pages/map/map.js
var interval = null;
const app = getApp();
var localData = require('../../resorces/texts/missions');
Page({
  data: {
    roleNum: 0,
    roleName: null,
    wid: 0,
    list: null,
    missionShown: null,
    places: null,
    quiz: false,
    pop: -1,
    code_isFocus: false,
    code: [],
    focus_status: [],
    length: 0,
    keyboardHeight: 0,
    scrollPos: "tx"
  },
  onLoad(options) {
    // var rNum = options.roleId;
    var rNum = 0;
    // console.log(options);
    var data = localData.missions[rNum].missionList;
    var ms = localData.missions[rNum].missionShown;
    var pla = localData.places;
    if (data == undefined) this.setData({
      list: []
    })
    else this.setData({
      list: data
    });
    this.setData({
      // roleName: options.roleName,
      missionShown: ms,
      places: pla,
      roleNum: rNum,
      pop: -1
    })

  },
  openList: function () {
    this.setData({
      wid: 700,
    })
  },
  closeList: function () {
    this.setData({
      wid: 0,
    })
  },
  openQuiz() {
    this.setData({
      quiz: true
    });
  },
  closeQuiz() {
    this.setData({
      quiz: false
    });
  },
  pop(e) {
    var that = this;
    var num = e.currentTarget.dataset.index;
    console.log(num);
    // console.log(e);
    that.setData({
      pop: num,
    })
  },
  closePop() {
    this.setData({
      pop: -1,
      code: [],
      code_isFocus: false,
      length: 0
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
  },
  //得到密码
  get_code(e) {
    var that = this;
    that.setData({
      code: e.detail.value
    });
    if (that.data.code.length == 0) {
      that.setData({
        focus_status: "1000"
      });
    }
    if (that.data.code.length == 1) {
      that.setData({
        length: e.detail.value.length,
        focus_status: "0100"
      });
    }
    if (that.data.code.length == 2) {
      that.setData({
        length: e.detail.value.length,
        focus_status: "0010"
      });
    }
    if (that.data.code.length == 3) {
      that.setData({
        length: e.detail.value.length,
        focus_status: "0001"
      });
    }
    if (that.data.code.length == 4) {
      that.setData({
        length: e.detail.value.length
      });
      console.log(that.data.code);
      that.setData({
        keyboardHeight: 0,
        scrollPos: "tx"
      });
      if (that.data.code == that.data.places[that.data.pop].passwd) {
        wx.showToast({
          title: '已完成当前任务点',
          icon: 'succes',
          duration: 1000,
          mask: true
        });
        var nxt = that.data.places[that.data.pop].next;
        if (nxt == -1) {
          var str = "places[" + that.data.pop + "].status";
          // console.log("val " + that.data.places[that.data.pop].status);
          that.setData({
            [str]: true
          });
        } else {
          var now = "places[" + that.data.pop + "].show";
          var next = "places[" + nxt + "].show";
          console.log("val " + that.data.places[that.data.pop].status);
          that.setData({
            [now]: false,
            [next]: true
          });
        }

      } else {
        wx.showToast({
          title: '密码错误',
          icon: 'error',
          duration: 1000,
          mask: true
        });
      }
      this.closePop();
    }
  },
  set_Focus() { //聚焦密码框
    this.setData({
      code_isFocus: true,
      code: []
    })
  },
  focu(e) {
    var num = e.detail.height;
    console.log(num);
    this.setData({
      keyboardHeight: num
    });
    this.setData({
      scrollPos: "kb"
    });
  }

})