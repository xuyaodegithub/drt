// views/index/index.js
var common = require("../../fetch/request.js")
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password:'',
    swoperList:[
      'http://img4.imgtn.bdimg.com/it/u=1674366350,957705626&fm=26&gp=0.jpg',
      'http://img4.imgtn.bdimg.com/it/u=1489716743,622640117&fm=26&gp=0.jpg',
      'http://img1.imgtn.bdimg.com/it/u=3807391914,3714439733&fm=26&gp=0.jpg',
      'http://img1.imgtn.bdimg.com/it/u=642232076,471704669&fm=26&gp=0.jpg',
      'http://img5.imgtn.bdimg.com/it/u=2366575006,2320261301&fm=26&gp=0.jpg'
    ]
  },
  toseach(){
    wx.navigateTo({
      url: '../seachPage/index',
    })
  },
  openScale(){
    wx.scanCode({
      onlyFromCamera: false,//是否只能从相机扫码，不允许从相册选择图片
      scanType: ['qrCode'],
      success:(res)=>{
          console.log(res.result)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    wx.showNavigationBarLoading()
    setTimeout(()=>{
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
    },2000)
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