<template>
  <div>
    <my-head></my-head>
    <component id="content" :is="tableView"></component>
    <div id="footer">
      <div @click="tableView='Index'">
        <i class="iconfont">&#xe602;</i>
        会议
      </div>
      <div @click="tableView='Schedule'">
        <i class="iconfont">&#xe634;</i>
        通讯录
      </div>
      <div @click="tableView='Files'">
        <i class="iconfont">&#xe630;</i>
        文件夹
      </div>
      <div @click="tableView='Contacts'">
        <i class="iconfont">&#xe603;</i>
        日程
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
    Contacts,
  }
}
</script>

<style scoped>
#footer{
  width: 100%;
  height: 44px;
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
</style>

