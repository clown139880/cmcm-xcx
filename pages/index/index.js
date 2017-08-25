//index.js
//获取应用实例
var app = getApp()
Page({
  data: {

  },
  //事件处理函数
  onLoad: function () {
  },
  onShow: function(){
    app.tabbar.init();
    var that = this;
  },
  wechat: function(){

    wx.setClipboardData({
      data: 'uniclown',
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '微信号已复制到剪贴板',
              image: '/images/checked.png',
              duration: 3000
            })
          }
        })
      }
    })
  },
  tel: function () {

    wx.makePhoneCall({
      phoneNumber: '18767125789' //仅为示例，并非真实的电话号码
    })
  }
})
