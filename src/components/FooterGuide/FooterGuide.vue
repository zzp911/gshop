<template>
  <div class="footer_guide">
    <a href="javascript:;" class="guide_item" :class="{on: $route.path === '/home'}" @click="goTo('/home')">
      <span class="item_icon">
        <i class="iconfont iconicon-waimai"></i>
      </span>
      <span>外卖</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path === '/search'}" @click="goTo('/search')">
      <span class="item_icon">
        <i class="iconfont iconicon_sousuo"></i>
      </span>
      <span>搜索</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path === '/order'}" @click="goTo('/order')">
      <span class="item_icon">
        <i class="iconfont iconicon-dingdan"></i>
      </span>
      <span>订单</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path === '/personal'}" @click="goTo('/personal')">
      <span class="item_icon">
        <i class="iconfont iconicon-geren"></i>
      </span>
      <span>我的</span>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    goTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl'
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    left 0
    right 0
    bottom 0
    z-index 100
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
