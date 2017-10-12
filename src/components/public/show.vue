<template>
  <div>
      <div class="content">
        <div class="content-people">          
          <span class="p-title">参会人员 1/16</span>
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
      </div>
  </div>
</template>
<script>
export default {
 
  data () {
    return {
     
    }
  },
  methods: {
   
  },
  components:{
   
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


</style>

