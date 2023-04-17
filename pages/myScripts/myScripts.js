// pages/myScripts.js
Page({
	/**
	 * Page initial data
	 */
	data: {
		id: null,
		scripts: []
	},

	/**
	 * Lifecycle function--Called when page load
	 */
	onLoad(options) {
		this.setData({
			id: options.id
		});
		// console.log(this.data.id)
		wx.request({
			url: 'http://localhost:8080/scriptServer/getAuthorScripts.do',
			data: { //传递给后台的数据
				author: this.data.id,
			},
			method: 'get',
			header: {
				'content-type': 'application/json' //默认值
			},
			success(res) {
				console.log(res.data)
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