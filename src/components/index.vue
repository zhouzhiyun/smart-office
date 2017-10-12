<template>
  <div>
    <div class="meetings">
      <router-link to="/makeappointment" tag="div" class="meetings-list">
        <i class="iconfont">&#xe618;</i>
        预约会议
      </router-link>
      <router-link to="/instantconference" tag="div" class="meetings-list">
        <i class="iconfont">&#xe60b;</i>
        即时会议
      </router-link>
      <router-link to="/meeting" tag="div" class="meetings-list">
        <i class="iconfont">&#xe65c;</i>
        开始开会
      </router-link>
    </div>
    <div class="messages">
      <div class="messages-title">会议中心</div>
      <div class="messages-list" v-for="meetingMessage in meetingMessages">
        <div>
          <span class="message-name">yanglei</span>
          <span class="message-title">会议中心...</span>
        </div>
        <img src="../image/galaxy.jpg">
        <div>
          <span class="date">2017/10/11 <i class="message-title">星期二</i></span>
          <span class="time-limit">30分钟</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import img from '../image/galaxy.jpg';
export default {
  data(){
    return{
      meetingMessages:[
        {
          name:"",
          title:"",
          date:"",
          timeLimit:"",
          success:false
        }
      ],
       url:require('../image/galaxy.jpg')
    }
  }

}
</script>
<style scoped>
.meetings {
  padding: 40px 0 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(255, 255, 255);
  text-align: center;
  font-size: 14px;
}
.meetings .meetings-list i {
  display: block;
  border: 1px solid rgb(244, 244, 244);
  padding: 20px;
  text-align: center;
  margin-bottom: 10px;
  font-size: 40px;
}

.messages .messages-title {
  width: 100%;
  background-color: #eee;
  border-top: #ddd;
  padding: 6px 15px 6px;
  font-size: 16px;
  
}

.messages-list {
  padding: 8px 15px;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
}
.messages-list .message-title{
  margin-left: 10px;
}
.messages-list img {
  width: 100%;
  height: 80px;
  margin: 5px 0 5px;
}
.messages-list .time-limit{
  float: right;
  display:inline-block;
}
</style>


