<template>
  <div id="app">
    <router-view/>
    <NavBar v-if="show_nav"></NavBar>
  </div>
</template>

<script>
import NavBar from '../src/components/common/NavBar'
import pages from './pages'// 获取路由列表
export default {
  name: 'App',
  components: {
    NavBar
  },
  data () {
    return {
      show_nav: true
    }
  },
  mounted () {
    /**
     * 检测路由是否是需要存在导航组件
     */
    if (this.$route.path === '/' || this.$route.path === '/my' || this.$route.path === '/store') {
      this.show_nav = true
    } else {
      this.show_nav = false
    }
  },
  watch: {
    $route: 'fetchDate'
  },
  methods: {
    IsInArray (arr, val) {
      let testStr = ',' + arr.join(',') + ','
      return testStr.indexOf(',' + val + ',') !== -1
    },
    fetchDate (to, from) {
      // ↓↓↓↓↓ 与 mounted 方法里面检测路由是否是需要在导航组件 保持一致
      if (to.path === '/' || to.path === '/my' || to.path === '/store') {
        this.show_nav = true
      } else {
        this.show_nav = false
      }
      let page = Object.keys(pages)
      if (to.path === '/') {
        return
      }
      // 检测是否存在当前路由
      if (!this.IsInArray(page, to.name)) {
        this.$router.push({path: '/error'})
      }
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  a {
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }
  img {
    -webkit-tap-highlight-color: transparent;
  }
}
@media screen and(min-width: 414px) {
  h1::after{
    width: 300%!important;
    height: 300%!important;
  }
}
</style>
