// cmps/nav-bar/nav-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String
    },
    titleColor: {
      type: String,
      value: '#000'
    },
    statusBarColor: {
      type: String,
      value: '#fff'
    },
    navBarColor: {
      type: String,
      value: '#fff'
    },
    back: {
      type: String,
      value: 'true'
    },
    home: {
      type: String,
      value: 'true'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarStyle: '', // 状态栏样式
    navBarStyle: '' // 导航栏样式
  },

  /**
   * 组件的方法列表
   */
  methods: {
    back: function() {
      this.triggerEvent('backTap', { name: 'mj' });
      wx.navigateBack();
    },
    home: function() {
      this.triggerEvent('homeTap', { age: 18 });
      wx.navigateBack({
        delta: 999
      });
    }
  },

  lifetimes: {
    attached: function() {
      const statusBarStyle = `
      height: ${ wx.db.statusBarHeight }px;
      background-color: ${ this.data.statusBarColor };
      `;
      const navBarStyle = `
      color: ${ this.data.titleColor };
      height: ${ wx.db.navBarHeight }px;
      background-color: ${ this.data.navBarColor };
      `;
      this.setData({ statusBarStyle, navBarStyle });
      // this.setData({
      //   statusBarStyle: statusBarStyle,
      //   navBarStyle: navBarStyle
      // });
    }
  }
})
