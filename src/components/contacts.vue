<template>
  <div>
      <div class="search">
        <span class="city" @click="show">{{city}}</span>  
        
        <ul class="citys" v-if="isShow">
          <li @click="cut($event)">北京</li>
          <li @click="cut($event)">重庆</li>
        </ul>
        
        
        <div class="search-cont">
          <input type="text" placeholder="輸入用戶名">
          <!-- <i class="iconfont">&#xe69b;</i>-->
        </div>    
      </div>
      <div class="part"></div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      isShow:false,
      city:"北京"
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
    }
  }
  
}
</script>

<style scoped>      
.search{
  border:1px solid #666;
  border-radius:4px;
  height:44px;
  margin:20px 15px;
  line-height:44px;
  position:relative;
}
.search .city{
  width: 60px;
  height: 44px;
  display: inline-block;
  border-right: 1px solid #666;
  font-size: 16px;
  text-align: center;
  overflow:auto;
}
.search .citys{
  position:absolute;
  top:48px;
  background-color:#FAEBD7;
  color:#555;
  width:100px;
  padding:10px;
  text-align:center;

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
  height:44px;
  padding-left:10px;
  font-size:16px;
}
.search .search-cont .icon-font{

}
</style>

