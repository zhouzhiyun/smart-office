<template>
  <div>
      <div id="schduieTop">
        <div :class="{active: isAttendActive}" @click="addattendActive">待参加</div>
        <div :class="{active: isOverActive}" @click="addOverActive">已结束</div>
      </div>
      <component :is="schduie"></component>
  </div>
</template>
<script>
import Attend  from './attend.vue';
import Over from './over.vue';
export default {
  data(){
    return {
      schduie: 'Attend',
      isAttendActive: true,
      isOverActive: false
    }
  },
  components:{
    Attend,
    Over
  },
   methods:{
     addattendActive: function () {
       this.schduie = 'Attend'
       this.isAttendActive = true
       this.isOverActive = false
     },
     addOverActive: function () {
       this.schduie = 'Over'
        this.isAttendActive = false
       this.isOverActive = true
     }
   }
}
</script>

<style>
  #schduieTop{
    width: 100%;
    height: 35px;
    font-size: 16px;
    background-color: #9B34F2;
    display: flex;
    align-items: center;
    margin-top: -2px;
  }
  #schduieTop>div{
    width: 50%;
    height: 100%;
    text-align: center;
    line-height: 35px;
  }
  .active{
    color: white;
  }
</style>

