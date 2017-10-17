<template>
  <div class="bottom">
      <div class="search">
        <span class="city" @click="show">{{city}}</span>          
        <ul class="citys" v-if="isShow">
          <li @click="cut($event)">北京</li>
          <li @click="cut($event)">重庆</li>
        </ul>        
        <div class="search-cont">
          <input type="text" placeholder="输入用户名" v-model.trim="username" v-on:blur="blur()" v-on:keyup.enter="blur()">
          <i class="iconfont sr" @click="blur">&#xe69b;</i>
        </div>    
      </div>
      
  </div>
</template>
<script>
export default {
  data(){
    return{
      isShow:false,
      city:"北京",
      username:'' 
    }
  },
  
  methods:{
    show: function () {
      if(this.isShow === true){
          this.isShow = false;
      }else{
          this.isShow = true;
      }
    },
    cut:function(e){
      var target=e.target;      
      if(target.nodeName.toLowerCase()=='li'){
        this.city=target.innerHTML;
        this.isShow = false;
      }
    },
    blur:function(){
      console.log(this.username);
      this.$emit('transfer',this.username);
    }
  }
  
}
</script>

<style scoped>     
.bottom{
  border-bottom: 1px solid #ccc;
} 
.search{
  border:1px solid #ccc;
  border-radius:4px;
  height:38px;
  margin:20px 15px ;
  line-height:38px;
  position:relative;
  background-color: #fff;
}
.search .city{
  width: 60px;
  height: 37px;
  display: inline-block;
  border-right: 1px solid #ccc;
  font-size: 16px;
  text-align: center;
  overflow:auto;
}
.search .citys{
  position:absolute;
  top:38px;
  background-color:#FAEBD7;
  color:#555;
  width:100px;
  padding:10px;
  text-align:center;
  font-size: 14px;
  z-index: 1;

}
.search .citys li{
  white-space:nowrap; 
  overflow:hidden; 
  text-overflow:ellipsis;
}
.search .search-cont{
  position:absolute;
  left:61px;
  top:0;
  right:0;
  
}
.search .search-cont input{
  height:38px;
  padding-left:10px;
  font-size:16px;
}
.search .search-cont .sr{
  display:inline-block;
  width:20px;
  position: absolute;
  top:-2px;
  right:10px;
}

</style>

