//app.js
App({

  onLaunch: function () {
    wx.db = {};
    wx.db.url = (url) => {
      return `https://douban.uieee.com/${url}`;
    }
  },
})