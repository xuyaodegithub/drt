// views/near/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: '', latitude: '',
    markers: [
      {
        id: 1,
        latitude: '30.2084',
        longitude: '120.21201',
        title: '当前位置',
        zIndex: '1',
        iconPath: '../../images/hot1.png',
        width: '50rpx',
        height: '50rpx',
        label: '当前位置',
        callout: {
          content: '当前位置',
          color: '#ffffff',
          fontSize: '28rpx',
          display: 'ALWAYS',
          textAlign: 'center',
          padding: 5,
          bgColor: '#5DA5EF',
          borderRadius: 10
        }
      }
    ],//标记点polyline
    polyline: [],//路线
    circles: [
      { latitude: '30.2084', longitude: '120.21201', color: '#0DDDF4', fillColor: '#B4EBF1', radius: 100, strokeWidth: 6 }
    ],//圆
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getselfLocal()
  },
  //获取位置授权
  getselfLocal() {
    let _self = this
    wx.getSetting({
      success(res) {
        // 如果没有则获取授权
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success() {
              _self.getNow()
            },
            fail() {
              wx.showModal({
                title: '提示',
                content: '您还未授权访问位置信息权限',
                confirmText: '去授权',
                success(res) {
                  if (res.confirm) {
                    // console.log('用户点击确定')
                    wx.openSetting({
                      success(res) {
                        console.log(res.authSetting)
                        // res.authSetting = {
                        //   "scope.userInfo": true,
                        //   "scope.userLocation": true
                        // }
                      }
                    })
                  } else if (res.cancel) {
                    console.log('用户点击取消')
                  }
                }
              })
            }
          })
        } else {
          // 有则直接保存
          _self.getNow()
        }
      }
    })
  },
  getNow() {
    let _self = this
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
        console.log(longitude, latitude)
        _self.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      }
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