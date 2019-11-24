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
            success(city);
          },
          fail: (erroe) => {
          },
          complete: () => { }
        });
      },

      fail: () => {
      },
      complete: () => {

      }
    });
  },

  data: {
    allMovies: [
      {
        title: '影院热映',
        url: 'v2/movie/in_theaters',
        movies: [],
      },
      {
        title: '新片榜',
        url: 'v2/movie/new_movies',
        movies: [],
      },
      {
        title: '口碑榜',
        url: 'v2/movie/weekly',
        movies: [],
      },
      {
        title: '北美票房榜',
        url: 'v2/movie/us_box',
        movies: [],
      },
      {
        title: 'Top250',
        url: 'v2/movie/top250',
        movies: [],
      },
    ],
  },
  onLoad: function () {
    this.loadAllData();
  },

  loadAllData: function () {
    this.loadCity((city) => {
      this.loadOtherData(0, { city: city });
    });
    this.loadOtherData(0);
    this.loadOtherData(1);
    this.loadOtherData(2);
    this.loadOtherData(3);
    this.loadOtherData(4);
  },

  loadOtherData: function (index, dict) {
    let object = this.data.allMovies[index];
    wx.request({
      url: wx.db.url(object.url),
      data: dict,
      header: { 'content-type': 'json' },
      success: (result) => {
        const movies = result.data.subjects;
        let obj = this.data.allMovies[index];
        for (let index = 0; index < movies.length; index++) {
          let movie = movies[index].subject || movies[index];
          obj.movies.push(movie);
        }
        this.setData(this.data);
      },
      fail: (err) => {
        console.log(err);
      },
      complete: () => { }
    });
  },
  updateMovies: function (movies) {
    // let stars = parseInt(movies.)
  },

})