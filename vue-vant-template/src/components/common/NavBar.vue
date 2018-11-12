<template>
  <div class="nav-bar-template">
    <van-tabbar v-model="active">
      <van-tabbar-item v-for="item in tab_bar" :key="item.id" :to="item.link_to">
        <span>{{item.label_name}}</span>
        <img slot="icon" slot-scope="props" :src="props.active ? item.active : item.normal">
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0, // 默认选中选项
      tab_bar: [ // 选项列表
        {
          id: 0,
          link_to: '/',
          label_name: '首页',
          normal: '/static/img/nav-img/common-store-icon.png',
          active: '/static/img/nav-img/common-store-icon_selected.png'
        },
        {
          id: 1,
          link_to: '/store',
          label_name: '商城',
          normal: '/static/img/nav-img/postercenter-icon.png',
          active: '/static/img/nav-img/postercenter-icon-click.png'
        },
        {
          id: 2,
          link_to: '/my',
          label_name: '我的',
          normal: '/static/img/nav-img/common-person-icon.png',
          active: '/static/img/nav-img/common-person-icon_selected.png'
        }
      ]
    }
  },
  watch: {
    $route (to, from) {
      const objKeyArr = Object.keys(this.tab_bar)
      const pathValue = this.$route.path
      for (let i = 0, len = objKeyArr.length; i < len; i++) {
        if (this.tab_bar[objKeyArr[i]].link_to === pathValue) {
          this.active = this.tab_bar[objKeyArr[i]].id
        }
      }
    }
  }
}
</script>

<style lang="less">
  .van-tabbar-item {
    // 设置底部导航字体默认颜色
    color: #d3d3d3;
    &--active{
       // 设置底部导航选中字体颜色
      color: #f56500!important;
    }
  }
</style>
