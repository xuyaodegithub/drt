// views/detial/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    proMsg:{
      name:'枫叶休闲裤套装',
      price:'125.00'
    },
    skuList:[],
    buyNum:1,
    swoperList: [
      'http://imagecdn0.17huo.com/5030afff843e1166e47df0ceb5ce749e.jpg',
      'http://imagecdn0.17huo.com/df76dd5ab01685c3437fb4ac8a2426de.jpg',
      'http://imagecdn0.17huo.com/c8428303f105195882789c92034460f0.jpg',
      'http://imagecdn0.17huo.com/82c3dc31ed1a30b5b88651aa08298d7f.jpg',
      'http://imagecdn0.17huo.com/f6b3320fd79764c96ae168bf16d1a7e3.jpg',
      'http://imagecdn0.17huo.com/397d07e0a75e224ee569d7ca29c3af16.jpg',
    ],
    userCom:[
      {
        name: '飞奔的蚂蚁', headerImg:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2222832720,1658029360&fm=11&gp=0.jpg',
        imgs: ['http://imagecdn0.17huo.com/5030afff843e1166e47df0ceb5ce749e.jpg', 'http://imagecdn0.17huo.com/df76dd5ab01685c3437fb4ac8a2426de.jpg','http://imagecdn0.17huo.com/82c3dc31ed1a30b5b88651aa08298d7f.jpg'],
        infoMsg:'2020年3月19日 - 千库网为设计者提供用户头像素材大',
        sku:'礼盒-10斤装',
        time:'2020-03-28'
      },
      {
        name: '飞奔的蚂蚁', headerImg: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2222832720,1658029360&fm=11&gp=0.jpg',
        imgs: ['http://imagecdn0.17huo.com/5030afff843e1166e47df0ceb5ce749e.jpg', 'http://imagecdn0.17huo.com/df76dd5ab01685c3437fb4ac8a2426de.jpg', 'http://imagecdn0.17huo.com/82c3dc31ed1a30b5b88651aa08298d7f.jpg'],
        infoMsg: '2020年3月19日 - 千库网为设计者提供用户头像素材大全,为您省却用户头像图片素材搜索时间,这里有海量用',
        sku: '礼盒-10斤装',
        time: '2020-03-28'
      },
      {
        name: '飞奔的蚂蚁', headerImg: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2222832720,1658029360&fm=11&gp=0.jpg',
        imgs: ['http://imagecdn0.17huo.com/5030afff843e1166e47df0ceb5ce749e.jpg', 'http://imagecdn0.17huo.com/df76dd5ab01685c3437fb4ac8a2426de.jpg', 'http://imagecdn0.17huo.com/82c3dc31ed1a30b5b88651aa08298d7f.jpg'],
        infoMsg: '2020年3月19日 - 千库网为设计者提供用户头像素材大全,为您省却用户头像图片素材搜索时间,这里有海量用户头像素',
        sku: '礼盒-10斤装',
        time: '2020-03-28'
      },
      ],
    html:`<div class="d_html">
        <div align="center"><img style="display:block;width:100%;" src="http://kan.027cgb.com/550929/2095/2095_01.jpg"></div>
<div align="center"><img style="display:block;width:100%;" src="http://kan.027cgb.com/550929/2095/2095_02.jpg"></div>
<div align="center"><img style="display:block;width:100%;" src="http://kan.027cgb.com/550929/2095/2095_03.jpg"></div>
<div align="center"><img style="display:block;width:100%;" src="http://kan.027cgb.com/550929/2095/2095_04.jpg"></div>
<div align="center"><img style="display:block;width:100%;" src="http://kan.027cgb.com/550929/2095/2095_05.jpg"></div>
<div align="center"><img style="display:block;width:100%;" src="http://kan.027cgb.com/550929/2095/2095_06.jpg"></div>
<div align="center"><img style="display:block;width:100%;" src="http://kan.027cgb.com/550929/2095/2095_07.jpg"></div>
<div align="center"><img style="display:block;width:100%;" src="http://kan.027cgb.com/550929/2095/2095_08.jpg"></div>
<div align="center"><img style="display:block;width:100%;" src="http://kan.027cgb.com/550929/2095/2095_09.jpg"></div>
<div align="center"><img style="display:block;width:100%;" src="http://kan.027cgb.com/550929/2095/2095_10.jpg"></div>
<div align="center"><img style="display:block;width:100%;" src="http://kan.027cgb.com/550929/2095/2095_11.jpg"></div>
<div align="center"><img style="display:block;width:100%;" src="http://kan.027cgb.com/550929/2095/2095_12.jpg"></div>
<div align="center"><img style="display:block;width:100%;" src="http://kan.027cgb.com/550929/2095/2095_13.jpg"></div>
<div align="center"><img style="display:block;width:100%;" src="http://kan.027cgb.com/550929/2095/2095_14.jpg"></div>
<div align="center"><img style="display:block;width:100%;" src="http://kan.027cgb.com/550929/2095/2095_15.jpg"></div>
<div align="center"><img style="display:block;width:100%;" src="http://kan.027cgb.com/550929/2095/2095_16.jpg"></div>
<div align="center"><img style="display:block;width:100%;" src="http://kan.027cgb.com/550929/2095/2095_17.jpg"></div>
<div align="center"><img style="display:block;width:100%;" src="http://kan.027cgb.com/550929/2095/2095_18.jpg"></div>
<div align="center"><img style="display:block;width:100%;" src="http://kan.027cgb.com/550929/2095/2095_19.jpg"></div>
<div align="center"><img style="display:block;width:100%;" src="http://kan.027cgb.com/550929/2095/2095_20.jpg"></div>    </div>`,
    show:false,
    buyOrAdd:true,
    skuselect:'请选择：规格'
  },
  watchImgs(e){
    const [item, idx] = [e.currentTarget.dataset.item, e.currentTarget.dataset.idx]
    wx.previewImage({
      current: item.imgs[idx], // 当前显示图片的http链接
      urls: item.imgs // 需要预览的图片http链接列表
    })
  },
  navTocomList(){
    wx.navigateTo({
      url: './comment/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    this.initProData()
  },
  initProData(){
    let skuList = [{
      name: '颜色',
      list: [{ name: '红色', id: 1 }, { name: '黄色', id: 2 }, { name: '蓝色', id: 3 }, { name: '绿色', id: 4 }, { name: '青色', id: 5 }, { name: '紫色', id: 6 }, { name: '橙色', id: 11 }, { name: '天蓝色', id: 12 },],
    }, {
        name: '尺寸',
        list: [{ name: 'X', id: 7 }, { name: 'XL', id: 8 }, { name: 'XXL', id: 9 }, { name: 'M', id: 10 },]
      }, {
        name: '款式',
        list: [{ name: '潮流', id: 20 },]
      }]
    skuList.map(item => { item.list.length === 1 ? item.selectIdx = 0 : item.selectIdx=-1})
    this.setData({ skuList: skuList})
  },
  changNum(e){
    console.log(e.detail,this.data.buyNum)
  },
  onClose(){
    this.setData({ show: false })
  },
  buyAdd(e){
    const idx=e.currentTarget.dataset.idx;
    this.setData({ show: true, buyOrAdd: idx==1 ? false : true })
  },
  seletItem(e){
    let skulist = this.data.skuList
    const idx = e.currentTarget.dataset.idx, idxson = e.currentTarget.dataset.idxson;
    if (idxson == skulist[idx].selectIdx)return;
    skulist[idx].selectIdx = idxson
    this.setData({ skuList: skulist }, this.setSkuTitle)

  },
  buyItem(){
    const allS = this.data.skuList.every(item=>item.selectIdx>-1)
    if (!allS){
      wx.showToast({
        title: '请先选择规格',
        icon:'none'
      })
      return;
    }
  },
  setSkuTitle(){
    let all = this.data.skuList.every(item => item.selectIdx > -1), str = '已选择：'
    if (all) {
      this.data.skuList.map((item, idx) => {
        str += !idx ? `${item.list[item.selectIdx].name}` : `、${item.list[item.selectIdx].name}`
      })
      this.setData({
        skuselect: str
      })
    } else this.setData({ skuselect: '请选择：规格' })
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