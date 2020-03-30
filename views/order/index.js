// pages/orders/index.js
var app = getApp();
var url = app.globalData.url;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isChange:0,
    title: '订单',
    barBg: '#292f41',//#ff6600
    fixed: true,
    color: '#fff',//#ffffff
    touchStartY: 0,//触摸开始的Y坐标
    toggleBarShow: false,
    backStyle: 'normal',
    backEvent: false,
    ty: 0,
    currtab: 0,
    swipertab: [{ name: '全部', index: 0 }, { name: '待付款', index: 1 }, { name: '待收货', index: 2 }, { name: '已完成', index: 3 }, { name: '已取消', index: 4 }],
    userOrders:[],
    allUserOrders:{},
    appInfo: {},
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // wx.getStorage({
    //   key: 'userInfo',
    //   success: function (res) {
    //     console.log(res.data, '获取用户id')
    //     that.setData({
    //       appInfo: res.data
    //     }, function () {
    //       that.getUserOrders(0, -2);
    //     })
    //   }
    // })
    // this.setData({
    //   userId: userId
    // })
    // 页面渲染完成
    // this.getDeviceInfo()
    //that.getUserOrders(0, -2)
    
  },

  stopTouchMove: function () {
    return false;
  },
  getDeviceInfo: function () {
    let that = this
    wx.getSystemInfo({
      success: function (res) {
        console.log(res,'页面加载')
        that.setData({
          deviceW: res.windowWidth,
          deviceH: res.windowHeight
        })
      }
    })
  },
  something(e) {
    let  index = e.currentTarget.dataset.index;
    if (index == 0) {
      this.setData({
        isChange: index
      })
      this.getUserOrders(index, this.data.ty)
    } else {
      this.setData({
        isChange: index
      })
      this.getUserOrders(index, this.data.ty)
    }
    // 我来给你输出一下
    console.log(this.data.currtab, 123456)
  },
  /**
  * @Explain：选项卡点击切换
  */
  tabSwitch: function (e) {
    var that = this
    if (this.data.currtab === e.target.dataset.current) {
      return false
    } else {
      that.setData({
        currtab: e.target.dataset.current
      })
    }
  },
  tabChange: function () {
    let currentIndex = this.data.isChange;  // 代表是已购还是已销售 0 或 1
    let currentTab = 0; // 代表tab项目 默认为全部0
    let orderStatus = -2;
    currtab: 0,
      currentTab = this.data.currtab;

    // if (currentTab == 1) {
    //   this.setData({ ty: -1 })
    //   orderStatus = -1
    //   this.getUserOrders(currentIndex, orderStatus)
    // }
    // else if (currentTab == 2) {
    //   this.setData({ ty: 0 })
    //   orderStatus = 0
    //   this.getUserOrders(currentIndex, orderStatus)
    // }
    // else if (currentTab == 3) {
    //   this.setData({ ty: 1 })
    //   orderStatus = 1
    //   this.getUserOrders(currentIndex, orderStatus)
    // }
    // else if (currentTab == 4) {
    //   this.setData({ ty: 2 })
    //   orderStatus = 2
    //   this.getUserOrders(currentIndex, orderStatus)
    // } 
    // else {
    //   this.setData({ ty: -2 })
    //   orderStatus = -2
    //   this.getUserOrders(currentIndex, orderStatus)
    // }
    // console.log(currentIndex, orderStatus, 123456)
  },

  getUserOrders: function (type, orderStatus){
    console.log(this.data.appInfo, 11111111111)
    wx.request({
      url: 'http://47.96.252.71/ph/order.action?client=3&method=queryOrderByUserId',
      method: 'POST',
      data:{
        userId:2,
        //userId: this.data.appInfo.userId,
        type,
        orderStatus
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success:(res) => {
        console.log(this.data.appInfo.userId, 'userId')
        //console.log(userId,'方法用户id')
        //console.log(res.data)
        var allordersInfo = res.data
        var ordersArr = res.data.list
        console.log(ordersArr,'ayayaya');
        for(let i = 0;i<ordersArr.length;i++){
          if (ordersArr[i].orderStatus == '-1'){
            ordersArr[i].orderStatus = '待付款';
          } else if (ordersArr[i].orderStatus == '0'){
            ordersArr[i].orderStatus = '待收货';
          } else if (ordersArr[i].orderStatus == '1') {
            ordersArr[i].orderStatus = '已完成';
          } else if (ordersArr[i].orderStatus == '2') {
            ordersArr[i].orderStatus = '已取消';
          } 

          ordersArr[i].product = JSON.parse(ordersArr[i].product)
         // console.log(JSON.parse(ordersArr[i].product))
        }
        this.setData({
          userOrders: ordersArr,
          allUserOrders: allordersInfo
        })
      }
      
    })
  },
  

  getOrdersId:(e) => {
    let index = e.currentTarget.dataset.productid;//获取订单Id
    //console.log(index)
    wx.navigateTo({
      url: '../ordersDetail/index?id=' + index 
    })
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
    // console.log(this.data.isChange, this.data.currtab, 11111)
    this.getDeviceInfo()
    // this.getUserOrders(this.data.isChange, this.data.currtab)
    // this.getUserOrders(0, -2);
    this.tabChange();
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