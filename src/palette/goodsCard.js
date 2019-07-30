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
        text: '识别小程序码，立即购买',
        css: {
          right: '20rpx',
          bottom: '40rpx',
          fontSize: '20rpx',
          color: '#999999'
        }
      },
      {
        type: 'text',
        text: this.cardInfo.detail,
        css: {
          left: '50rpx',
          top: '520rpx',
          fontSize: '32rpx',
          width: '300rpx',
          height: '120rpx',
          lineHeight: '44rpx',
          color: '#666'
        }
      },
      {
        type: 'text',
        text: '￥' + this.cardInfo.price,
        css: {
          left: '50rpx',
          bottom: '40rpx',
          fontSize: '32rpx',
          color: '#B97E72',
          align: 'left'
        }
      }
      ]
    })
  }
}
