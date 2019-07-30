<template>
  <div class="tabbar_box" :style="{backgroundColor: tabbar.backgroundColor}">
    <block v-for="(item, index) in tabbar.list" :key="index">
      <!--<navigator :url="item.pagePath" open-type="navigate" v-if="item.isSpecial" class="tabbar_nav" :style="{color: tabbar.selectedColor}" hover-class="none">-->
      <navigator :url="item.pagePath" open-type="switchTab" v-if="item.isSpecial" class="tabbar_nav" :style="{color: item.selected ? tabbar.selectedColor : tabbar.color}" hover-class="none">
        <div class='special-wrapper'>
          <img class="tabbar_icon" :src="item.iconPath" />
        </div>
        <img class='special-text-wrapper' />
        <span>{{item.text}}</span>
      </navigator>
      <navigator :url="item.pagePath" open-type="switchTab" v-else class="tabbar_nav" :style="{color: item.selected ? tabbar.selectedColor : tabbar.color}" hover-class="none">
        <img class="tabbar_icon" :src="item.selected ? item.selectedIconPath : item.iconPath" />
        <span>{{item.text}}</span>
      </navigator>
    </block>
  </div>
</template>

<script>
  export default {
    name: 'tabber',
    created () {
      console.log(this.tabbar)
    },
    props: {
      tabbar: {
        type: Object
      }
    }
  }
</script>

<style scoped>
  .tabbar_box{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 98rpx;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  }
  .tabbar_box.iphoneX-height{
    padding-bottom: 66rpx;
  }
  .middle-wrapper{
    position: absolute;
    right: 310rpx;
    bottom: 0;
    background-color: #fff;
    width: 120rpx;
    height: 120rpx;
    border-radius: 50%;
    border-top: 2rpx solid #f2f2f3;
  }
  .middle-wrapper.iphoneX-height{
    bottom: 66rpx;
  }
  .tabbar_nav{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 22rpx;
    height: 100%;
    position: relative;
  }
  .tabbar_icon{
    width: 44rpx;
    height: 44rpx;
    margin-bottom: 5rpx;

  }
  .special-wrapper{
    position: absolute;
    left: 71rpx;
    top: -48rpx;
    width: 112rpx;
    height: 112rpx;
    border-radius: 50%;
    border-top: 2rpx solid #f2f2f3;
    background-color: #fff;
    text-align: center;
    box-sizing: border-box;
    padding: 6rpx;
  }
  .special-wrapper .tabbar_icon{
    width: 94rpx;
    height: 94rpx;
  }
  .special-text-wrapper{
    width: 56rpx;
    height: 56rpx;
  }
</style>
