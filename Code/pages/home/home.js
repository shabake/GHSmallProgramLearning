// pages/home/home.js
Page({

  loadCity: function (success) {
    wx.getLocation({
      success: (res) => {
        wx.request({
          url: 'https://api.map.baidu.com/reverse_geocoding/v3',
          data: {
            output: 'json',
            coordtype: 'wgs84ll',
            ak: 'LhikkZ78GVuG8wFijkN0dhvVUfeYYv02',
            location: res.latitude + ',' + res.longitude
          },
          success: (res) => {
            let city = res.data.result.addressComponent.city;
            city = city.substring(0, city.length - 1);
            console.log('获取位置');
            success(city);
          },
          fail: (erroe) => {
            console.log(erroe);
          },
          complete: () => { }
        });
      },

      fail: () => {
        console.log('获取位置失败');
      },
      complete: () => {

      }
    });
  },

  /**加载数据 */
  loadData: function (city) {
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
      data: { city: city },
      header: { 'content-type': 'json' },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        console.log(result);
        this.setData({
          movies : result.data.subjects /**取出数据 告诉页面重新加载数据 */
        })
      },
      fail: () => { },
      complete: () => { }
    });
  },

  data:{
    movies:[]
  },

  onLoad: function () {
    this.loadCity(this.loadData);
  },
})