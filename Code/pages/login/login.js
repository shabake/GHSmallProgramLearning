// pages/login/login.js
Page({
    wechatLogin: function(){
        console.log('2');
    },
    dobanLogin: function(){
        console.log('3');
    },
    clickPrivacy: function() {
        wx.navigateTo({
            url: '/pages/protocol/protocol',
        });
    }
})