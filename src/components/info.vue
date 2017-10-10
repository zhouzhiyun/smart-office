<template>
  <div>
      <my-twoheader :text="text"></my-twoheader>
  </div>
</template>
<script>
import myTwoheader from './public/twoheader.vue'
export default {
    data(){
      return {
          text:'消息提醒'
      }
    },
    components:{
      myTwoheader
    }
}
</script>
<style>

</style>


