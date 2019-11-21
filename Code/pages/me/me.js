// pages/me/me.js
Page({
  data: {
    items: [
      {
        icon: 'ic_cat_movie.png',
        title: '观影分析1',
        count: '0',
        has: '看过',
        mark: '标记10部影片\n开启影响分析'
      },

      {
        icon: 'ic_cat_book.png',
        title: '读书分析',
        count: '1',
        has: '读过',
        mark: '标记10部影片\n开启影响分析'
      },
      {
        icon: 'ic_cat_music.png',
        title: '音乐分析',
        count: '0',
        has: '听过',
        mark: '标记10部影片\n开启音乐分析'
      },
    ]
  },
  // 登录事件
  headerLogin: function () {
    wx.navigateTo({
      url: '/pages/login/login',
    });
  },
})