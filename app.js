//app.js
var tabbar = require('tabbar/tabbar.js');
var data = {
  color: 'darkgrey',
  selectedColor: 'white',
  list: [
    {
      tabName: 'Index',
      pagePath: ['pages/index/index', 'pages/products/products'],
      text: '首页',
      iconPath: 'images/logo.png',
      selectedIconPath: 'images/logo_active.png',
    },
    {
      tabName: 'About',
      pagePath: ['pages/about/about'],
      text: '关于',
      iconPath: 'images/about.png',
      selectedIconPath: 'images/about_active.png',
    }
  ]
};
App({
  onLaunch: function (options) {
    var that = this;
    tabbar.initComponent(this, data);
  },
  systemInfo: {
    windowHeight: null,
    windowWidth: null
  },
  userInfo: null
})
