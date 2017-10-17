<template>
  <div>
    <my-twoheader :text="text"></my-twoheader>
    <div id="setting">

      <div class="headImage">
        <span>头像</span>
        <span class="image" @click="openFileIIs" v-model="userinfo.photo"></span>
      </div>
      <div id="uname">
        <span>姓名</span>
        <input type="text" class="name" placeholder="请输入您的姓名" v-model="userinfo.name">
      </div>
      <div id="branch">
        <span>部门</span>
        <select id="select">
          <option v-for="path in branch" class="option" value="path">{{path}}</option>
        </select>
      </div>

      <div id="button" v-show="btnsHide">
        <input type="button" value="保存" class="save btns">
        <input type="button" value="退出" class="singOut btns">
      </div>
    </div>
  </div>
</template>
<script>
import myTwoheader from './public/twoheader.vue'
export default {
  data(){
    return {
      text: '个人信息',
      btnsHide: '1',
      branch:['我的部门','财务部','人事部','行政部','销售部','设计部','策划部','研发部'],
      userinfo:{ 
        photo:''
      }
    }
  },
  components:{
    myTwoheader
  },
  methods:{
    openFileIIs:function(filename){
     console.log(123)
    }
  }
}
</script>

<style scoped>
  #setting{
    width: 100%;
    height: 100%;
    font-size: 18px;
  }
  .headImage{
    width: 100%;
    height: 70px;
    line-height: 65px;
    margin-top: 20px;
    padding: 0 0 0 15px;
    background-color: white;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .image{
    display: block;
    width: 50px;
    height: 50px;
    float: right;
    border: 1px dashed red;
    border-radius: 50%;
    margin-right: 20px;
  }
  #branch,#uname{
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #ccc;
    padding: 0 15px;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .name{
    height: 30px;
    border-bottom: 1px solid #ccc;
  }
  .name:focus{
    border-bottom: 1px solid blue;
  }
  
  .btns{
    width:calc(100% - 30px);
    height: 35px;
    margin-left: 15px;
    background-color: #0000CD;
    border-radius: 4px;
    font-size: 15px;
    color: white;
  }
  .save{
    margin-bottom: 20px;
  }
  #button{
    width: 100%;
    position: absolute;
    bottom: 15px;
  }

  #select{
    font-size: 16px;
    border-bottom: 1px solid #ccc;
    display: inline-block;
    width: 240px;
  }
  .option{
    font-size: 12px;
  }
</style>

