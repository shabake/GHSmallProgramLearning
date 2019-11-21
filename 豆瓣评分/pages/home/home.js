// pages/home/home.js
Page({
  data: {
    movies: []
  },
  onLoad: function() {
    this.loadCity(this.loadData);
  },
  loadData: function(city) {
    wx.request({
      url: 'https://douban-api.uieee.com/v2/movie/in_theaters',
      data: { city: city },
      header: {'content-type':'json'},
      success: (res) => {
        let movies = res.data.subjects;
        for (let index = 0; index < movies.length; index++) {
          this.updateMovie(movies[index]);
        }
        this.setData({  movies: movies });
        console.log(this.data);
      },
      fail: () => {
        wx.db.toastError('获取热映失败');
      }
    });
  },
  loadCity: function(success) {
    // 获取经纬度
    wx.getLocation({
      success: (res) => {
        // 逆地理编码
        wx.request({
          url: 'https://api.map.baidu.com/reverse_geocoding/v3',
          data: {
            output: 'json',
            coordtype: 'wgs84ll',
            ak: '9zTl9xXSCCA8FTnsqQA9Ro8B1mO85v4W',
            location: `${res.latitude},${res.longitude}`
            // location: res.latitude + ',' + res.longitude
          },
          success: (res) => {
            let city = res.data.result.addressComponent.city;
            city = city.substring(0, city.length - 1);
            success && success(city);
          },
          fail: () => {
            wx.db.toastError('获取城市失败');
          }
        });
      },
      fail: () => {
        wx.db.toastError('获取位置失败');
      }
    });
  },
  updateMovie: function(movie) {
    let stars = parseInt(movie.rating.stars);
    if (stars == 0) return;
    movie.stars = {};
    movie.stars.on = parseInt(stars / 10);
    movie.stars.half = (stars - (movie.stars.on) * 10) > 0;
    movie.stars.off = parseInt((50 - stars) / 10);
  }
})