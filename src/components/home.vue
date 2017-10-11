<template>
  <div id="home">
    <my-head></my-head>
    <component id="homeContent" :is="tableView"></component>
    <div id="footer">
      <div @click="tableView='Index'" class="bottomBtn">
        <i class="iconfont">&#xe602;</i>
        <span class="bottomText">会议</span>
      </div>
      <div @click="tableView='Contacts'" class="bottomBtn">
        <i class="iconfont">&#xe634;</i>
        <span class="bottomText">通讯录</span>
      </div>
      <div @click="tableView='Files'" class="bottomBtn">
        <i class="iconfont">&#xe69c;</i>
        <span class="bottomText">文件夹</span>
      </div>
      <div @click="tableView='Schedule'" class="bottomBtn">
        <i class="iconfont">&#xe605;</i>
        <span class="bottomText">日程</span>
      </div>
    </div>
  </div>
</template>
<script>
import myHead from './public/header.vue';
import Index from './index.vue';
import Schedule from './schedule.vue';
import Files from './file.vue';
import Contacts from './contacts.vue';
export default {
  data(){
    return {
      tableView: 'Index'
    }
  },
  components:{
    myHead,
    Index,
    Schedule,
    Files,
    Contacts
  },
  methods:{
    hide: function () {
      this.$store.commit('increment')
    }
  }
}
</script>

<style scoped>
#footer{
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-top: 1px solid rgb(244,244,244);
}
#footer i{
  display: block;
  text-align: center;
}
.iconfont{
  font-size: 20px;
}
.bottomBtn{
  height: 100%;
}
#homeContent{
  width: 100%;
  height: calc(100% - 88px);
}
</style>

