<template>
  <div id="app">
    <router-view/>
    <NavBar v-if="show_nav"></NavBar>
    <div class="go_login" v-if="is_token">
      <div @click="goLoginHeandel">
        <span>请登录</span>
      </div>
    </div>
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
      show_nav: true,
      is_token: false
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
    // if (localStorage.getItem('token')) {
    //   this.is_token = false
    // } else {
    //   this.is_token = true
    // }
  },
  watch: {
    $route: 'fetchDate'
  },
  methods: {
    goLoginHeandel () {
      this.is_token = false
      this.$router.push('/')
    },
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
@import './assets/less/common.less';
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
  .go_login{
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.5);
    div{
      width: 50%;
      height: 100px;
      line-height: 100px;
      text-align: center;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin: auto;
      background: #f56500;
      color: #fff;
      border-radius: 7px;
      font-size: 35px;
    }
  }
}
@media screen and(min-width: 414px) {
  h1::after{
    width: 300%!important;
    height: 300%!important;
  }
}
</style>
