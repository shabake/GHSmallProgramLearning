// cmps/movie-item/movie-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // name: {
    //   type: String,
    //   value: ''
    // },
    // fontSize: {
    //   type: Number,
    //   value: 0
    // }
    movie: {
      type: Object,
      value: null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    detail: function() {
      // 序列化：将JSON对象转换为JSONString
      // 反序列化：将JSONString转换为JSON对象
      wx.navigateTo({
        url: `/pages/detail/detail?movie=${ JSON.stringify(this.data.movie) }`
      });
    }
  }
})
