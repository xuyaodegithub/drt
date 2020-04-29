// views/shopcar/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    storeList: [],
    selectedAll: false,
    allPrice: 0
  },
  initShopcar() {
    let data = [{
      title: '老凤祥', list: [
        { name: '老凤祥新品吊坠', img: 'http://www.laofengxiang.com/ResourceFolder/Images/2019-11-11/ACA8087968644BB3B70861C74AEB0F10.jpg', num: 1, price: '2180.00', sku: '新品' },
        { name: '老凤祥精品翡翠', img: 'http://www.laofengxiang.com/ResourceFolder/LfxZhubao/Uploads/image/20170122/5884940dd9c8e.jpg', num: 2, price: '6888.00', sku: '新品' },
        { name: '老凤祥迪士尼闪耀萌', img: 'http://www.laofengxiang.com/ResourceFolder/LfxZhubao/Uploads/image/20180227/5a94bad09f1eb.JPG', num: 2, price: '12890.00', sku: '迪士尼主题' },
      ]
    },
    {
      title: '周大福', list: [
        { name: '周大福Y时代 梦幻星球18K金钻石项链', img: 'https://cdn.ctfmall.com/thumb2/u172468.jpg', num: 1, price: '2180.00', sku: '18K金钻' },
        {
          name: '周大福 T-MARK 守护一生 铂金镶钻石戒指', img: 'https://cdn.ctfmall.com/thumb2/A180158.jpg', num: 2, price: '15200.00', sku: '铂金'
        },
        { name: '周大福TMARK 挚爱18K金镶钻石戒指/钻戒', img: 'https://cdn.ctfmall.com/thumb2/U140143.jpg', num: 2, price: '7380.00', sku: '钻戒' },
      ]
    }]
    data.map(item => {
      item.selected = 0;
      item.list.map(item => { item.selected = 0 })
    })
    this.setData({ storeList: data })
    console.log(data, this.data.storeList)
  },
  selectStore(e) {//选择店铺
    const idx = e.currentTarget.dataset.idx;
    let list = this.data.storeList
    list[idx].selected = list[idx].selected ? 0 : 1
    list[idx].list.map(item => { item.selected = list[idx].selected })
    this.setData({ storeList: list }, this.calculation)
  },
  selectItem(e) {//选择单个商品
    const idx = e.currentTarget.dataset.idx, idxson = e.currentTarget.dataset.idxson;
    let list = this.data.storeList;
    list[idx].list[idxson].selected = list[idx].list[idxson].selected ? 0 : 1;
    this.setData({ storeList: list }, this.calculation)
  },
  selectAlls(e) {//选择全部
    let list = this.data.storeList, stutas = this.data.selectedAll;
    list.map(item=>{
      item.selected = stutas ? 0 : 1;
      item.list.map(it=>{
        it.selected = item.selected
      })
    })
    this.setData({ storeList: list }, this.calculation)
  },
  calculation() {//更具数据计算总价和全选择
    let data = this.data.storeList,sall=false,allmoney=0;
    data.map(item=>{
      const s = item.list.every(it=>it.selected)
      if (s) item.selected=1
      else item.selected = 0
      item.list.map(itson=>{
        if (itson.selected) allmoney += (parseFloat(itson.price) * parseFloat(itson.num))
      })
    })
    const all = data.every(iv => iv.selected)
    if (all) sall=true;
    else sall=false;
    this.setData({ storeList: data, selectedAll: sall, allPrice: allmoney*100})
  },
  changNum(e){//改变数量
    let idx = e.currentTarget.dataset.idx, idxson = e.currentTarget.dataset.idxson, nownun = e.detail,list=this.data.storeList;
    list[idx].list[idxson].num = nownun
    this.setData({ storeList: list }, this.calculation)
  },
  deleteItem(e){//删除产品
    wx.showModal({
      title: '确认信息',
      content: '确认要删除此产品么？',
      confirmColor: "#8734cc",
      success:(res)=>{
        if (res.confirm) {
          let idx = e.currentTarget.dataset.idx, idxson = e.currentTarget.dataset.idxson, list = this.data.storeList;
          list[idx].list.splice(idxson, 1)
          if (list[idx].list.length < 1) list.splice(idx, 1)
          this.setData({ storeList: list }, this.calculation)
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  onClickButton(){//去结算
    let s = this.data.storeList.some(item=> item.list.some(it=>it.selected))
    if (!s) {
      wx.showToast({ title: '请先选择商品', icon: 'none' })
      return
    }
    console.log(this.data.storeList)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initShopcar()
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