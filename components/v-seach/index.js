// components/v-seach/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placehold:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  // 以下是旧式的定义方式，可以保持对 <2.2.3 版本基础库的兼容
  attached: function () {
    // 在组件实例进入页面节点树时执行
  },
  detached: function () {
    // 在组件实例被从页面节点树移除时执行
  },
  /**
   * 组件的方法列表
   */
  methods: {
    toseach() {
      wx.navigateTo({
        url: '/views/seachPage/index',
      })
    },
  }
})
