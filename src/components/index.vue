<template>
  <div>
    <div class="meetings">
      <router-link to="/makeoffice" class="meetings-list">
        <i class="iconfont">&#xe618;</i>
        预约会议
      </router-link>
      <router-link to="/" class="meetings-list">
        <i class="iconfont">&#xe618;</i>
        即时会议
      </router-link>
      <router-link to="/" class="meetings-list">
        <i class="iconfont">&#xe618;</i>
        开始开会
      </router-link>
    </div>
    <div class="messages">
      <div class="title">会议中心</div>
      <div class="messages-list">
        <div>
          <span>yanglei</span>
          <span class="message-title">会议中心...</span>
        </div>
        <img src="../image/galaxy.jpg" alt="">
        <div>
          <span class="date">2017/10/11 星期二</span>
          <span class="time-limit">30分钟</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

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
}

.meetings .meetings-list i {
  display: block;
  border: 1px solid rgb(244, 244, 244);
  padding: 20px;
  text-align: center;
  margin-bottom: 10px;
  font-size: 40px;
}

.messages .title {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.01);
  border-top: #ddd;
  padding: 6px 15px 6px;
}

.messages-list {
  padding: 8px 15px;
}

.messages-list img {
  width: 100%;
  height: 80px;
}
</style>


