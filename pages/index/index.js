const app = getApp();
const host = app.globalData.host;
// pages/index/index.js
Page({

	/**
	 * Page initial data
	 */
	data: {
		id: null
	},
	goPlay(e) {
		wx.navigateTo({
			url: '/pages/scriptSel/scriptSel',
			// url: '/pages/map/map'
		})
	},
	goCreate(e) {
		wx.navigateTo({
			url: '/pages/myScripts/myScripts?id=' + this.data.id,
		});

	},
	/**
	 * Lifecycle function--Called when page load
	 */
	onLoad(options) {
		var that = this;
		wx.login({
			success(res) {
				wx.request({
					url: host + '/getId.do',
					data: { //传递给后台的数据
						code: res.code,
					},
					method: 'get',
					header: {
						'content-type': 'application/json' //默认值
					},
					success(rres) {
						that.setData({
							id: rres.data
						})
						console.log(rres.data)
					},
					fail(res) {
						console.log('failed')
					}
				})
			}
		})
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