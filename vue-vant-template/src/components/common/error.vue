<template>
  <div class="error-box">
    <span @click="$router.replace('/')">返回首页</span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.error-box{
  height: 50vh;
  width: 80%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background: url("/static/img/error.jpg") no-repeat;
  background-size: 100%;
  span{
    height: 30px;
    width: 80px;
    line-height: 30px;
    text-align: center;
    position: absolute;
    top: -30px;
    margin: auto;
    border: none;
    color: #fff;
    font-size: 13px;
    background: #2f8dc1;
    border-radius: 16px 0 16px 0;
  }
}
</style>
