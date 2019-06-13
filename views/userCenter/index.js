// views/userCenter/index.js
var common = require("../../fetch/request.js")
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo:'',
    selfmsg:[
      { title: '已陪伴(天)', num: '365' },
      { title: '已查询(次)', num: '9822' },
      { title: '已采纳(次)', num: '136' },
      { title: '已消费(次)', num: '36500' },
      ],
      gnList:[
        { title: '我的足迹', img: '../../images/zj.png' },
        { title: '我的收藏', img: '../../images/sc.png' },
        { title: '我的发现', img: '../../images/fx.png' },
        { title: '我的吃货队友', img: '../../images/xd.png' },
        { title: '我的玩乐', img: '../../images/wl.png' },
        {title:'我的客服',img:'../../images/kf.png'},
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _self=this
    app.getUserInfo(()=>{
      _self.setData({ userInfo: app.globalData.userInfo })
    })
    

  },
  bindGetUserInfo(e){
      console.log(e)
      if(e.detail.userInfo){
        this.setData({ userInfo: e.detail.userInfo})
      }
  },
  handleContact(e) {
    console.log(e.path)
    console.log(e.query)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})