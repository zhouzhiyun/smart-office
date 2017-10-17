<template>
  <div>
      <my-twohead :text="text"></my-twohead>
      <search @transfer="enter"></search>
      <div class="part">
        <div class="part-list">
          <div class="part-title">
            研发部
          </div>
          <div class="part-checkbox">
            <div class="checkbox-list" v-for="user in users">
              <v-checkbox v-bind:label="user.name" v-model="user.flag" :value="user.name" color="indigo"></v-checkbox>              
            </div>         
          </div>
        </div>
        <v-btn
          color="info"
          :loading="loading4"
          @click.native="sure"
          :disabled="loading4"
          class="btn"
          >
          确认
          <span slot="loader" class="custom-loader">
            <v-icon light>cached</v-icon>
          </span>
        </v-btn>
      </div>
  </div>
</template>
<script>
import myTwohead from "./public/twoheader.vue";
import search from "./public/search.vue";
export default {
  data(){
    return{
      text:'选择参会人员',
      users:[
        {name:'张三',flag:false},
        {name:'李四',flag:false}
      ],
      loading4:false
    }
  },
  created:function(){
    console.log('sss');
    for(var i in this.chooseUsers){
      for(var j in this.users){
        console.log(this.users[j]);
        if(this.chooseUsers[i].name==this.users[j].name){
          this.users[j].flag=true;
        }
      }
    }
  },
  methods:{
    //搜索数据
    enter:function(name){

    },
    sure:function(){
      var us=[];
      for( var i=0;i<this.users.length;i++){
        if(this.users[i].flag){
          us.push(this.users[i]);
        }
      }
      this.$store.commit('ChooseUsers',us);
      this.$router.go(-1);
    }
  },
  components:{
    myTwohead,
    search
  },
   computed:{
    chooseUsers:function(){
      return this.$store.state.chooseUsers;
    }
  }
}
</script>

<style scoped>

.part .part-list .part-title{
  padding: 15px 10px;
  background-color: #fff;
  font-size: 14px;
}
.part .part-list .part-checkbox{
  padding:10px 10px 0;
  font-size: 14px;
}
/* .input-group__details{
  display:none;
} */
.btn{
    position: absolute;
    bottom:15px;
    margin:0 2%;
    width:96%;

}
</style>

