// views/index/index.js
var common = require("../../fetch/request.js")
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    notice:'区域特产开售啦！广搜全国各地独有特色，没有找不到，只有你想不到，只为满足嘴馋的你！',
    username: '',
    password:'',
    swoperList:[
      '/images/s4.jpg',
      '/images/s1.jpg',
      '/images/s2.jpg',
      '/images/s3.jpg',
      '/images/s5.jpg'
    ],
    systemInfo:{},
    btnInfo: wx.getMenuButtonBoundingClientRect(),
    classList:[
      { title: '最新', img: '/images/new.png', type: 1 },
      { title: '热销', img: '/images/hot.png', type: 2 },
      { title: '折扣', img: '/images/zhe.png', type: 3 },
      { title: '特产', img: '/images/techan.png', type: 4 },
      { title: '农家乐', img: '/images/nong.png', type: 5 },
      { title: '名味榜', img: '/images/gao2.png', type: 6 },
      { title: '名店', img: '/images/store2.png', type: 7 },
      { title: '保障', img: '/images/beijing.png', type: 8 }
      ],
      navList:[
        { title: '全部', name: 0 },
        { title: '水果', name: 1 },
        { title: '糕点', name: 2 },
        { title: '家禽', name: 3 },
        { title: '水产', name: 4 },
        { title: '农副产品', name: 5 },
        { title: '绿色', name: 6 },
        { title: '特产', name: 7 },
        { title: '推荐', name: 8 },
        { title: '其他', name: 9 },
      ],
    active:0,
    proList: [{ "id": 5838844, "name": "X09P115 韩版休闲加厚小西裤男九分潮流修身加绒休闲裤男冬季", "price": "115.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i4\/361648055\/O1CN0129NEmAk7pGdpy9e_!!361648055.jpg_250x250.jpg", "img": "36481950,36481951,36481952,36481953,36481954", "video": null, "marketname": "四季星座", "sellername": "106-1（原5022A）" }, { "id": 5838880, "name": "钱塘5022A-K11P60暗黑港风春秋男装薄款休闲西裤九分裤小脚男裤", "price": "60.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i1\/361648055\/TB2_40lcwZC2uNjSZFnXXaxZpXa_!!361648055.jpg_250x250.jpg", "img": "36482148,36482149,36482150,36482151,36482152,36482153", "video": null, "marketname": "四季星座", "sellername": "106-1（原5022A）" }, { "id": 6385678, "name": "DEVILRAY山一2018新款户外轻薄90绒连帽羽绒服MY011\/P250 控价318", "price": "250.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i1\/1643202683\/O1CN011Vgr71BtOtDEqNd_!!0-item_pic.jpg_250x250.jpg", "img": "38924719,38924720,38924721,38924722,38924723", "video": null, "marketname": "新杭派", "sellername": "B429" }, { "id": 6388871, "name": "DEVILRAY 山一新款日系3色防水绗缝中长款棉衣MY046\/P200 控价298", "price": "200.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i4\/1643202683\/O1CN011Vgr71LTtbQBaPg_!!0-item_pic.jpg_250x250.jpg", "img": "38943214,38943215,38943216,38943217,38943218", "video": null, "marketname": "新杭派", "sellername": "B429" }, { "id": 6458050, "name": "DEVILRAY山一18冬款4色肺系列户外情侣羽绒服-MY006\/P240 控价318", "price": "240.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i4\/1643202683\/O1CN011Vgr6sNR7opy2Ou_!!0-item_pic.jpg_250x250.jpg", "img": "39419850,39419851,39419852,39419853,39419854", "video": null, "marketname": "新杭派", "sellername": "B429" }, { "id": 6474283, "name": "DEVILRAY山一-冬装新款男女情侣宽松拼色棉衣-MY060\/P175 控价258", "price": "175.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i2\/1643202683\/O1CN011Vgr70fy41gFJaK_!!0-item_pic.jpg_250x250.jpg", "img": "39516747,39516748,39516749,39516750,39516751", "video": null, "marketname": "新杭派", "sellername": "B429" }, { "id": 6648314, "name": "山一商店B429-夏装新款日系原创潮男方兜机能束脚裤-CK114\/P90", "price": "90.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i4\/1643202683\/O1CN01MXK1nB1Vgr9U8rOAi_!!0-item_pic.jpg_250x250.jpg", "img": "40534094,40534095,40534096,40534097,40534098", "video": null, "marketname": "新杭派", "sellername": "B429" }, { "id": 6679639, "name": "山一商店B429-夏季新款日系原创潮男小字印花休闲短裤-DK013\/P85", "price": "85.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i3\/1643202683\/O1CN019bwYAm1Vgr9fufzL0_!!0-item_pic.jpg_250x250.jpg", "img": "40722357,40722358,40722359,40722360,40722361", "video": null, "marketname": "新杭派", "sellername": "B429" }, { "id": 7046136, "name": "山一商店B429-秋季新款日系潮流方兜立体教练夹克外套-JK054\/P105", "price": "105.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i3\/1643202683\/O1CN017IS9r91VgrB5lc54f_!!0-item_pic.jpg_250x250.jpg", "img": "42655402,42655403,42655404,42655405,42655406", "video": null, "marketname": "新杭派", "sellername": "B429" }, { "id": 7046193, "name": "山一DEVILRAY 2019秋装新款日系潮男立体印花拼袖卫衣--WY025\/P85", "price": "85.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i2\/1643202683\/O1CN015q3X8t1VgrB8QbAQD_!!0-item_pic.jpg_250x250.jpg", "img": "42655887,42655888,42655889,42655890,42655891", "video": null, "marketname": "新杭派", "sellername": "B429" }, { "id": 7291954, "name": "2020春装新品韩版情侣夹克外套港风潮流校园风学生班服女类C25P85", "price": "85.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i2\/552178530\/O1CN01JFzgck2CsmzOqeXoK_!!552178530.jpg_250x250.jpg", "img": "44740756,44740757,44740758,44740759,44740760,45017361", "video": null, "marketname": "电商基地", "sellername": "C401（原B316-1）" }, { "id": 7291961, "name": "2020春装新品韩版情侣夹克外套百搭休闲学生班服棒球服女类C25P85", "price": "85.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i3\/552178530\/O1CN01RsdB172CsmzQn2ua8_!!552178530.jpg_250x250.jpg", "img": "44740791,44740792,44740793,44740794,44740795,45017368", "video": null, "marketname": "电商基地", "sellername": "C401（原B316-1）" }, { "id": 7291962, "name": "2020春装热卖情侣夹克外套韩版短款学生班服百搭棒球服男类C25P85", "price": "85.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i4\/552178530\/O1CN01xjs9Tt2Csn1xOMu1P_!!552178530.jpg_250x250.jpg", "img": "44740796,44740797,44740798,44740799,44740800,45017369", "video": null, "marketname": "电商基地", "sellername": "C401（原B316-1）" }, { "id": 7416514, "name": "M9602P55 外套男青少年韩版休闲男款针织开衫秋季男士短款毛衫外", "price": "55.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i1\/1910579732\/O1CN01ahi5O32LlJ4AKIaco_!!1910579732.jpg_250x250.jpg", "img": "45704343,45704344,45704345,45704346,45704347,45704348", "video": null, "marketname": "四季星座", "sellername": "1217-1" }, { "id": 7418214, "name": "M8608P75 秋季男毛衣开衫针织衫外套韩版帅气休闲潮流秋装春秋款", "price": "75.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i2\/1910579732\/O1CN01RvtU9l2LlJ4FikA9F_!!1910579732.jpg_250x250.jpg", "img": "45714064,45714069,45714074,45714077,45714081,45714085", "video": null, "marketname": "四季星座", "sellername": "1217-1" }, { "id": 7566037, "name": "W9818P35 卫衣男秋季宽松加肥加大码韩版潮流帅气休闲打底衫潮", "price": "35.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i4\/1910579732\/O1CN01zA1YDZ2LlJ4Sys3iZ_!!1910579732.jpg_250x250.jpg", "img": "46961804,46961805,46961806,46961807,46961809", "video": null, "marketname": "四季星座", "sellername": "1217-1" }, { "id": 7589440, "name": "DEVILRAY山一2019新款迷彩拼接棉马甲棉服-MY108\/P120 控价188", "price": "120.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i2\/1643202683\/O1CN01Taa1MX1VgrCdKZr7O_!!0-item_pic.jpg_250x250.jpg", "img": "47229837,47229838,47229839,47229840,47229841", "video": null, "marketname": "新杭派", "sellername": "B429" }, { "id": 7596293, "name": "2020春装新品圆领情侣假两件卫衣百搭休闲校园学生班服女类C27P58", "price": "58.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i1\/552178530\/O1CN01T3TmdY2Csn078tANm_!!552178530.jpg_250x250.jpg", "img": "47284373,47284374,47284375,47284376,47284377,47284378", "video": null, "marketname": "电商基地", "sellername": "C401（原B316-1）" }, { "id": 7667318, "name": "实拍 新款高领木耳边时尚百搭亮丝大码打底衫女T恤", "price": "33.00", "headurl": "\/\/img.alicdn.com\/imgextra\/i1\/1619180048\/O1CN01Q4FsCY1CE1Yqu8AVy_!!1619180048.jpg_250x250.jpg", "img": "57888563,57888568,57888572,57888575,57888579,57888582", "video": null, "marketname": "新金马", "sellername": "E037" }, { "id": 7667326, "name": "实拍 新款亮丝交叉V领长袖修身显瘦大码打底衫女上衣", "price": "28.00", "headurl": "\/\/img.alicdn.com\/imgextra\/i4\/1619180048\/O1CN01QYHxlr1CE1YsJwdui_!!1619180048.jpg_250x250.jpg", "img": "57888596,57888608,57888617,57888629,57888639,57888646", "video": null, "marketname": "新金马", "sellername": "E037" }]
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
  userRun(){
    wx.getSetting({
        success: res => {
          if (!res.authSetting['scope.werun']) {
            wx.authorize({//询问用户授权
              scope: 'scope.werun',
              success() {//用户授权成功后回调
                wx.getWeRunData({
                  success(res) {
                    console.log(res,5555555)
                    // 拿 encryptedData 到开发者后台解密开放数据
                    const encryptedData = res.encryptedData
                    // 或拿 cloudID 通过云调用直接获取开放数据
                    const cloudID = res.cloudID
                  }
                })
              },
            })
          }else{
            console.log(222)
          }
    },
    fail:err=>{
      console.log('000')
    }
    })
  },
  selectType(e){
    const idx = e.currentTarget.dataset.idx;
    this.setData({ active:idx})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.userRun()
    wx.getSystemInfo({
      success:(res)=>{
        const sh = res.statusBarHeight
        this.setData({ systemInfo: res})
      }
    })
  },
  toDetial(e){
    const id=e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/views/detial/index?id=${id}`,
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