<template>
    <div class="pagesBg">
      <div class="bankCardCell">
        <van-cell-group>
          <van-field
            :value="bankCardMsg.name"
            label="持卡人："
            title-width="65px"
            @change="changeName"
          />
          <van-field
            :value="bankCardMsg.cardId"
            label="身份证号："
            type="idcard"
            title-width="80px"
            @change="changeCardId"
          />
          <van-field
            :value="bankCardMsg.bankId"
            type="number"
            label="银行卡号："
            title-width="80px"
            @change="changeBankId"
          />
          <van-field
            :value="bankCardMsg.tel"
            label="手机号："
            title-width="65px"
            type="number"
            placeholder="（预留银行的手机号码）"
            placeholder-style="color: #999;font-size=16px;height: 50px;line-height: 50px;"
            @change="changeTel"
          />
        </van-cell-group>
        <div class="addBankTips">提示：该银行卡将用于您的账户提现，请填写正确信息</div>
      </div>
      <div class="addBankCardBtn" @click="addBankCardBtn">确认添加</div>
      <!--这种特殊占位符是必须有的！-->
      <van-toast id="van-toast"/>
    </div>
</template>

<script>
  import Toast from 'vant-weapp/dist/toast/toast'
  export default {
    name: 'editBankCard',
    config: {
      navigationBarTitleText: '银行卡'
    },
    data () {
      return {
        bankCardMsg: {name: '', cardId: '', bankId: '', tel: ''}
      }
    },
    onShow () {
      this.bankCardMsg = {name: '', cardId: '', bankId: '', tel: ''}
    },
    methods: {
      changeName (event) {
        this.bankCardMsg.name = event.mp.detail
      },
      changeCardId (event) {
        this.bankCardMsg.cardId = event.mp.detail
      },
      changeBankId (event) {
        this.bankCardMsg.bankId = event.mp.detail
      },
      changeTel (event) {
        this.bankCardMsg.tel = event.mp.detail
      },
      addBankCardBtn () {
        console.log(this.bankCardMsg)
        if (this.bankCardMsg.name === '') {
          Toast.fail('请正确输入名字')
        } else if (this.bankCardMsg.cardId === '') {
          Toast.fail('请输入身份证号')
        } else if (this.bankCardMsg.bankId === '') {
          Toast.fail('请输入银行卡号')
        } else if (this.bankCardMsg.tel === '' || this.bankCardMsg.tel.length < 11) {
          Toast.fail('请正确输入手机号')
        } else {
          var that = this
          that.$httpWX.post({
            url: '/bank/save',
            data: {
              cartNo: that.bankCardMsg.bankId,
              idNo: that.bankCardMsg.cardId,
              name: that.bankCardMsg.name,
              phone: that.bankCardMsg.tel
            },
            header: that.globalData.Token
          }).then(res => {
            console.log(res)
            if (res.code === 200) {
              Toast.success('添加成功')
              this.$router.replace({path: '/pages/myIfoPages/bankCard'})
            } else {
              Toast.fail('输入信息不正确，请确认后添加！')
            }
          })
        }
        // this.$router.replace({ path: '/pages/myIfoPages/bankCard' })
        // this.$router.back()返回界面不会加载
      }
    }
  }
</script>

<style scoped lang="less">
  .pagesBg {
    width: 100%;
    height: 100vh;
    background: #F8F8F9;
    .bankCardCell {
      width: 750rpx;
      height: 612rpx;
      background: #fff;
    }
    .addBankTips {
      color: #FF3333;
      font-size: 28rpx;
      padding: 24rpx 30rpx;
    }
    .addBankCardBtn {
      width: 678rpx;
      height: 84rpx;
      line-height: 84rpx;
      text-align: center;
      margin: 44rpx 36rpx;
      background: #87967C;
      -webkit-border-radius: 6rpx;
      -moz-border-radius: 6rpx;
      border-radius: 6rpx;
      color: #fff;
      font-size: 38rpx;
    }
  }
</style>
