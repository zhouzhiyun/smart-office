<template>
  <div id="twoHeader">
      <div class="iconfont icon-fanhui1" @click="goBack"></div>
      <div>{{ text }}</div>
  </div>
</template>
<script>
export default {
  methods:{
      goBack: function () {
          this.$router.go(-1)
      }
  },
  props:['text']
}
</script>
<style>
    #twoHeader{
        width: 100%;
        height: 44px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background-color: lime;
        font-size: 18px;
    }
    #twoHeader>div{
        margin-left: 10px;
    }
    #twoHeader>.iconfont{
        font-size: 20px;
    }
</style>

