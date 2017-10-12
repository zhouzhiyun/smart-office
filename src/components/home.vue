<template>
  <div id="home">
    <my-head :title="title"></my-head>
    <component id="homeContent" :is="tableView"></component>
    <div id="footer">
      <div @click="goIndex" class="bottomBtn">
        <i class="iconfont">&#xe602;</i>
        <span class="bottomText">会议</span>
      </div>
      <div @click="goContacts" class="bottomBtn">
        <i class="iconfont">&#xe634;</i>
        <span class="bottomText">通讯录</span>
      </div>
      <div @click="goFiles" class="bottomBtn">
        <i class="iconfont">&#xe69c;</i>
        <span class="bottomText">文件夹</span>
      </div>
      <div @click="goSchedule" class="bottomBtn">
        <i class="iconfont">&#xe605;</i>
        <span class="bottomText">日程</span>
      </div>
    </div>
    <div id="cover" v-show="this.$store.state.isShowHeadMore" @click="show"></div>
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
      tableView: 'Index',
      title: '会议'
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
    },
    goIndex:function () {
      this.tableView = Index;
      this.title = '会议';
    },
    goContacts:function () {
      this.tableView = Contacts;
      this.title = '通讯录';
    },
    goFiles:function() {
      this.tableView = Files;
      this.title = '文件夹';
    },
    goSchedule:function(){
      this.tableView = Schedule;
      this.title = '日程';
    },
    show:function(){
      this.$store.commit('ShowHeadMore')
    }
  },
  updated: function () {
        var cover = document.getElementById('cover');
        cover.style.width = screen.width + 'px';
        cover.style.height = screen.height + 'px';
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
#cover{
  opacity: 0;
  /* background-color: rgba(0,0,0,.3); */
  position: absolute;
  top: 0;
}
</style>

