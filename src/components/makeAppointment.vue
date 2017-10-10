<template>
  <div>
      <my-head></my-head>
      <div class="content">
        <div class="content-people">          
          <span class="title">参会人员 1/16</span>
          <div class="lists">
            <div class="list">
              <!--<img src="../image/cat.jpg" alt="">-->
              <div class="img"></div>
              <span class="name">发起者</span>
            </div>
            <div class="list">
              <!--<img src="../image/cat.jpg" alt="">-->              
              <router-link to="/choose" tag="div" class="img"></router-link>
              <span class="name">添加</span>
            </div>
          </div>
        </div>
        <div class="theme">
          <v-text-field label="会议主题" :rules="[(v) => v.length <= 25 || 'Max 25 characters']" :counter="25" v-model="title"></v-text-field>
          <v-menu
            lazy
            :close-on-content-click="false"
            v-model="menu"
            transition="scale-transition"
            offset-y
            full-width
            :nudge-right="40"
            max-width="290px"
            min-width="290px"
          >
            <v-text-field
              slot="activator"
              label="Picker in menu"
              v-model="date"
              readonly
            ></v-text-field>
            <v-date-picker v-model="date" no-title scrollable actions>
              <template scope="{ save, cancel }">
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                  <v-btn flat color="primary" @click="save">OK</v-btn>
                </v-card-actions>
              </template>
            </v-date-picker>
          </v-menu>
        </div>
      </div>
  </div>
</template>
<script>
import myHead from './public/header.vue';
export default {
  data(){
    return{
      title:'会议主题',
      date: null,
      menu:false,
      modal: false
    }
  },
  components:{
    myHead
  }
}
</script>

<style scoped>
.content-people{
  padding:15px 10px 0;
  font-size:16px;
  overflow:hidden;
  border-bottom:1px solid #444;
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
.theme{
  margin:15px 10px;
}
.menu .menu__content{
    top: 42px;
    left: 10%;
}
</style>

