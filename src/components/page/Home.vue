<template>
  <div class="home-template">
    <h1 class="border-1px">首页</h1>
    <van-button size="small" type="danger" @click="$router.push({path: '/detail'})">去详情页</van-button>
    <van-button size="small" type="danger" @click="aaa">mixins 获取data数据</van-button>
  </div>
</template>

<script>
import mixins from '../../utils/mixins'
import { getDoodsDetail } from '@/api/login/enter' // 引入接口方法
export default {
  data () {
    return {
      type: 1
    }
  },
  mixins: [mixins],
  mounted () {
    // 接口调用
    getDoodsDetail({type: 2, limit: 20}).then(res => {
      // console.log(11)
    })
  },
  methods: {
    aaa () {
      console.log(this.$data)
    }
  }
}
</script>

<style lang="less">
@import '../../assets/less/common.less';
.home-template{
  h1{
    height: 40px;
    width: 80%;
    margin: 20px auto;
    font-size: 20px;
    line-height: 40px;
    .border-1px(red);
  }
}
</style>
