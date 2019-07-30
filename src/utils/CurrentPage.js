export function getQuery () {
  /* eslint-disable */
  let tabbar = {
    'backgroundColor': '#ffffff',
    'color': '#979795',
    'selectedColor': '#7A8C71',
    'list': [
      {
        'pagePath': '/pages/index',
        'iconPath': '../static/icon/icon_home.png',
        'selectedIconPath': '../static/icon/icon_home_HL.png',
        'text': '首页'
      },
      {
        'pagePath': '/pages/setShop',
        'iconPath': '../static/icon/icon_release.png',
        'isSpecial': true,
        'text': '花店'
      },
      {
        'pagePath': '/pages/myIfo',
        'iconPath': '../static/icon/icon_mine.png',
        'selectedIconPath': '../static/icon/icon_mine_HL.png',
        'text': '我的'
      }
    ]
  }
  let currentPages = getCurrentPages()
  let _this = currentPages[currentPages.length - 1]
  let pagePath = _this.route;
  (pagePath.indexOf('/') !== 0) && (pagePath = '/' + pagePath)

  for (let i in tabbar.list) {
    tabbar.list[i].selected = false;
    (tabbar.list[i].pagePath === pagePath) && (tabbar.list[i].selected = true)
  }
  _this.tabbar = tabbar
  return tabbar
}
