<template>
  <div>
      <my-twohead :text="text"></my-twohead>
      <div class="content">
        <my-show></my-show>
        <!-- 会议主题 -->
        <div class="theme">

          <form>
            <div class="form-input">
              <label for="">会议主题</label>
              <input type="text" placeholder="会议主题" v-model="theme.title">
            </div>
            <div class="form-input">
              <label for="">会议时间</label>
              <input type="date" placeholder="会议日期" v-model="theme.date">
              <input type="time" placeholder="会议时间" v-model="theme.time">
            </div>
            <div class="form-input">
              <label for="">预估时间</label>
              <input type="text" placeholder="会议预估时间" v-model="theme.aboutTime">
            </div>
            <div class="form-input">
              <label for="">会议地点</label>
              <input type="text" placeholder="会议地点" v-model="theme.address">
            </div>
          </form>
          <div class="btns">
            <v-btn
              color="error"
              :loading="loading4"
              @click.native="cancel"
              :disabled="loading4"
              >
              取消会议
              <span slot="loader" class="custom-loader">
                  <v-icon light>cached</v-icon>
              </span>
            </v-btn>
            <v-btn
              color="info"
              :loading="loading4"
              @click.native="order"
              :disabled="loading4"
              class="btn"
              >
              预约会议
              <span slot="loader" class="custom-loader">
                  <v-icon light>cached</v-icon>
              </span>
            </v-btn>
          </div>
         
        </div>
      </div>
  </div>
</template>
<script>
import myTwohead from './public/twoheader.vue';
import myShow from './public/show.vue';
export default {
 
  data () {
    return {
      text:'预约会议',      
      loading4:false,
      theme:{
        title:'',
        date:'',
        time:'',
        aboutTime:'30',
        address:''
      }
    }
  },
  methods: {
   order:function(){
     if(this.theme.title=="" || this.theme.date=="" ||
     this.theme.time=="" ||  this.theme.aboutTime=="" || 
     this.theme.address==""){
       alert('所有会议的内容不能为空！');
       return;
     }
     this.$router.push('/home');
   },
   cancel:function(){
     this.$router.push('/home');
   }
  },
  created:function(){
     var _body=document.getElementsByTagName('body')[0];
    _body.style.height=_body.clientHeight+"px";
  },
  components:{
    myTwohead,
    myShow
  }
}
</script>

<style scoped>
.content{
  /* background-color: #fff; */
}
.content-people{
  padding:15px 10px 0;
  font-size:16px;
  overflow:hidden;
  border-bottom:1px solid #ccc;
  background-color: #fff;
}
.lists{
  padding:10px 0;
  overflow-x:auto;
  white-space: nowrap;
  overflow-y:hidden;
}
.lists .list{
  display:inline-block;
  width:52px;
  height:60px;
  margin-right:10px;
  text-align:center;
}
.lists .list .img{
  width:50px;
  height:50px;
  border:1px solid #3367d6;
  margin-bottom:5px;
  border-radius:50%;
}
.lists .list .name{
  font-size: 12px;
}
.theme form{
   margin:20px 10px;
   font-size: 16px;
}
.theme form .form-input{
  display:flex;
  margin:20px 0;
}
.theme form label{
  margin-right:15px;
}
.theme form input{
  border-bottom:1px solid #ccc;
  flex:1;
  margin-right:2px;
  padding-left:10px;
}
/* .theme .theme-cont{
  border-bottom:1px solid #ccc;
  margin:15px 10px;
}
.menu .menu__content{
    top: 42px;
    left: 10%;
} */

.btns{
    position: absolute;
    bottom:15px;
    margin:0 2%;
    width:96%;
}
.btn{
  width:45%;
  display:inline-block;
}
</style>

