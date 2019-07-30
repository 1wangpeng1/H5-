// 名片分享样式
export default class LastMayday {
  cardInfo = {}

  do (cardInfo) {
    console.log(JSON.parse(JSON.stringify(cardInfo)))
    this.cardInfo = JSON.parse(JSON.stringify(cardInfo))
    return this._template()
  }

  TEXT_SMALL = {
    fontSize: '24rpx'
  }

  _template () {
    return ({
      // background: 'https://qhyxpicoss.kujiale.com/2018/06/12/LMPUSDAKAEBKKOASAAAAAAY8_981x600.png',
      width: '600rpx',
      height: '700rpx',
      borderRadius: '10rpx',
      views: [{
        type: 'image',
        url: this.cardInfo.bg,
        css: {
          top: '12rpx',
          left: '12rpx',
          width: '576rpx',
          height: '470rpx',
          borderRadius: '4rpx'
        }
      },
      {
        type: 'qrcode',
        content: 'https://github.com/Kujiale-Mobile',
        css: {
          right: '70rpx',
          top: '500rpx',
          width: '120rpx',
          height: '120rpx',
          margin: '10rpx'
        }
      },
      {
        type: 'text',
        text: '识别小程序吗，进入花店',
        css: {
          right: '20rpx',
          bottom: '40rpx',
          fontSize: '20rpx',
          color: '#999999'
        }
      },
      {
        type: 'text',
        text: '距离我邀请你来我的花店已经超过两分钟了，无法撤回了的',
        css: {
          left: '50rpx',
          top: '520rpx',
          fontSize: '24rpx',
          width: '300rpx',
          height: '120rpx',
          lineHeight: '44rpx',
          color: '#666'
        }
      },
      {
        type: 'image',
        url: this.cardInfo.avatar,
        css: {
          left: '30rpx',
          top: '48rpx',
          width: '128rpx',
          height: '128rpx',
          borderRadius: '64rpx',
          align: 'left'
        }
      },
      {
        type: 'text',
        text: this.cardInfo.storeName,
        css: {
          left: '180rpx',
          top: '66rpx',
          fontSize: '40rpx',
          color: '#ffffff',
          align: 'left'
        }
      },
      {
        type: 'text',
        text: this.cardInfo.detail,
        css: {
          left: '180rpx',
          top: '140rpx',
          fontSize: '24rpx',
          color: '#FFFFB8',
          align: 'left'
        }
      }
      ]
    })
  }
}
