<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
// import {mapActions} from 'vuex'
export default {
  mounted () {
    // this.getAddress()
    this.$store.dispatch('getAddress')
    this.$store.dispatch('getUserInfo')
  },
  methods: {
    // ...mapActions(['getAddress'])
  },
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
 #app
  width 100%
  height 100%
  background #f5f5f5
</style>
