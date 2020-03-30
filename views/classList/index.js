// views/classList/index.js
import area from '../../utils/area.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    btnInfo: wx.getMenuButtonBoundingClientRect(),
    region: ['广东省', '广州市'],
    customItem: '全部',
    show: false,
    areaList: area,
    datalist: [{
      "id": 8176459,
      "name": "实拍 新款豹纹拼接亮丝修身显瘦洋气网纱打底衫女T恤",
      "price": "43.00",
      "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i3\/2049126033\/O1CN01htVmYC1uRA3QgWprw_!!2049126033.jpg_250x250.jpg",
      "img": "58538976,58538998,58539022",
      "video": null,
      "marketname": "新金马",
      "sellername": "E037"
    }, {
      "id": 8176462,
      "name": "实拍 新款修身百搭烫钻大码网纱打底衫女",
      "price": "30.00",
      "headurl": "https:\/\/img.alicdn.com\/imgextra\/i2\/1619180048\/O1CN01WVGVG81CE1auEZYjb_!!1619180048.jpg_250x250.jpg",
      "img": "58538977,58538996,58539016,58539037",
      "video": "https:\/\/cloud.video.taobao.com\/play\/u\/1619180048\/p\/1\/e\/6\/t\/1\/251160908301.mp4",
      "marketname": "新金马",
      "sellername": "E037"
    }, {
      "id": 8176464,
      "name": "实拍 新款V领亮丝修身百搭网纱打底衫女T恤",
      "price": "29.00",
       "headurl": "https:\/\/img.alicdn.com\/imgextra\/i2\/1619180048\/O1CN01j41hEd1CE1ay3ikOK_!!1619180048.jpg_250x250.jpg",
      "img": "58538999,58539015,58539035",
      "video": null,
      "marketname": "新金马",
      "sellername": "E037"
    }, {
      "id": 8176468,
      "name": "实拍 新款圆领大码亮丝印花烫钻打底衫T恤女上衣",
      "price": "45.00",
      "headurl": "https:\/\/img.alicdn.com\/imgextra\/i2\/1619180048\/O1CN01UkvRo61CE1auRLXOZ_!!1619180048.jpg_250x250.jpg",
      "img": "58538972,58538986,58539006,58539024,58539043",
      "video": "https:\/\/cloud.video.taobao.com\/play\/u\/1619180048\/p\/1\/e\/6\/t\/1\/251322409648.mp4",
      "marketname": "新金马",
      "sellername": "E037"
    }, {
      "id": 8176471,
      "name": "实拍 新款半高领镂空修身显瘦黑色中袖珍珠网纱打底衫",
      "price": "20.00",
      "headurl": "https:\/\/img.alicdn.com\/imgextra\/i4\/1619180048\/O1CN01KhWiig1CE1axC0khG_!!1619180048.jpg_250x250.jpg",
      "img": "58538987,58539008,58539030,58539046",
      "video": "https:\/\/cloud.video.taobao.com\/play\/u\/1619180048\/p\/1\/e\/6\/t\/1\/251157280161.mp4",
      "marketname": "新金马",
      "sellername": "E037"
    }, {
      "id": 8176474,
      "name": "实拍 新款无袖半高领修身显瘦亮丝网纱打底衫背心女",
      "price": "18.00",
        "headurl": "https:\/\/img.alicdn.com\/imgextra\/i3\/1619180048\/O1CN01PCPnQH1CE1arq8Q1w_!!1619180048.jpg_250x250.jpg",
      "img": "58538982,58539002,58539021,58539038,58539050,58539060",
      "video": null,
      "marketname": "新金马",
      "sellername": "E037"
    }, {
      "id": 8176475,
      "name": "实拍 新款修身百搭圆领亮丝大码网纱打底衫女",
      "price": "25.00",
        "headurl": "https:\/\/img.alicdn.com\/imgextra\/i1\/1619180048\/O1CN01lQXZJK1CE1awTXFDx_!!1619180048.jpg_250x250.jpg",
      "img": "58538989,58539009,58539039,58539053,58539061",
      "video": null,
      "marketname": "新金马",
      "sellername": "E037"
    }, {
      "id": 8176476,
      "name": "实拍 新款圆领亮丝蝴蝶结七分袖百搭大码打底衫女T恤",
      "price": "35.00",
        "headurl": "https:\/\/img.alicdn.com\/imgextra\/i4\/1619180048\/O1CN01Fjb2eu1CE1asBeFVD_!!1619180048.jpg_250x250.jpg",
      "img": "58538992,58539012,58539033,58539049,58539059",
      "video": null,
      "marketname": "新金马",
      "sellername": "E037"
    }, {
      "id": 8176477,
      "name": "实拍 新款韩版立领丝绒烧花百搭打底衫女",
      "price": "55.00",
      "headurl": "https:\/\/img.alicdn.com\/imgextra\/i2\/1619180048\/O1CN014cA2c81CE1a4Xmp9B_!!1619180048.jpg_250x250.jpg",
      "img": "58538984,58539005,58539028,58539056,58539063",
      "video": "https:\/\/cloud.video.taobao.com\/play\/u\/1619180048\/p\/1\/e\/6\/t\/1\/241883762472.mp4",
      "marketname": "新金马",
      "sellername": "E037"
    }, {
      "id": 8176479,
      "name": "实拍 新款V领亮丝蕾丝拼接修身显瘦打底衫女T恤上衣",
      "price": "39.00",
        "headurl": "https:\/\/img.alicdn.com\/imgextra\/i4\/1619180048\/O1CN01A4ikNP1CE1b0ZjGqb_!!1619180048.jpg_250x250.jpg",
      "img": "58538997,58539023,58539041,58539054,58539062",
      "video": null,
      "marketname": "新金马",
      "sellername": "E037"
    }, {
      "id": 8176480,
      "name": "实拍 新款韩版假两件条纹立领网纱打底衫女",
      "price": "26.00",
      "headurl": "https:\/\/img.alicdn.com\/imgextra\/i2\/1619180048\/O1CN01uY8evg1CE1a7EvNVD_!!1619180048.jpg_250x250.jpg",
      "img": "58539064,58539065",
      "video": "https:\/\/cloud.video.taobao.com\/play\/u\/1619180048\/p\/1\/e\/6\/t\/1\/241581468422.mp4",
      "marketname": "新金马",
      "sellername": "E037"
    },],
    leftlist: [],
    rightlist: [],
    leftH: 0,
    rightH: 0,
    option1:[
      { text: '全部', value: 0 },
      { text: '特产', value: 1 },
      { text: '名吃', value: 2 },
      { text: '特色', value: 3 },
      { text: '礼盒', value: 4 },
      { text: '年货', value: 5 },
      { text: '干货', value: 6 },
      { text: '果蔬', value: 8 },
      { text: '其他', value: 11 },
    ],
    option2:[
      {text:'推荐',value:0},
      { text: '最新', value: 1 },
      { text: '口碑', value: 2 },
      {text:'销量',value:3},
      { text: '发货快', value: 4 },
      {text:'厂家直销',value:5},
    ],
    value1:0,
    value2:0
  },
  drawImg() {
    let canTxt = wx.createCanvasContext('can'),
      that = this;
    wx.getImageInfo({
      src: '../../images/fj.png',
      success(res) {
        that.setData({
          width: res.width,
          height: res.height
        })
        console.log(res, res.path)
        canTxt.drawImage('../../images/fj.png', 0, 0, res.width, res.height)
        canTxt.draw(true, () => {
          wx.canvasToTempFilePath({
            x: 0,
            y: 0,
            width: res.width,
            height: res.height,
            destWidth: 100,
            destHeight: 100 * res.height / res.width,
            canvasId: 'can',
            success(ress) {
              console.log(ress)
              that.setData({
                imgs: ress.tempFilePath
              })
              // wx.uploadFile({
              //   url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
              //   filePath: ress.tempFilePath,
              //   name: 'file',
              //   success(res) {
              //     const data = res.data
              //     //do something

              //   }
              // })
            }
          })
        })
      }
    })

  },
  initDatalist() {
    wx.showLoading({ title: '加载中', mask:true})
    let datalist = this.data.datalist,
      ll = this.data.leftlist,
      rl = this.data.rightlist,
      lh = this.data.leftH,
      rh = this.data.rightH;
    datalist.map((item, idx) => {
      wx.getImageInfo({
        src: item.headurl,
        success: (res) => {
          if (lh < rh || lh===rh) {
            lh = lh + (345 * res.height/res.width)
            ll.push(item)
          }else{
            rh = rh + (345 * res.height / res.width)
            rl.push(item)
          }
          if (idx === datalist.length - 1) {
            this.setData({ leftlist: ll, rightlist: rl, leftH: lh, rightH: rh })
            wx.hideLoading()
          }
        }
      })
    })
  },
  showPopup() {
    this.setData({
      show: true
    });
  },
  confirm(e) {
    const detial = e.detail.values
    this.setData({
      region: [detial[0].code ? detial[0].name : '全国', detial[1].code ? detial[1].name : '全部'],
      show: false
    })
  },
  cancel() {
    this.setData({
      show: false
    });
  },
  change(e) { 
    const [idx, valIdx] = [e.currentTarget.dataset.idx, e.detail]
  },
  prevaitD(){
    return false
  },
  toDetial(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/views/detial/index?id=${id}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.initDatalist()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this.setData({ datalist: [...this.data.datalist] }, this.initDatalist())
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})