<template>
  <div id="login">
      <div id="logo">
          <img src="../image/timg.jpg" alt="">
          仁光科技
      </div>
     <div id="loginContent">
         <input type="text" placeholder="企业邮箱" class="username">
         <input type="text" placeholder="密码" class="password">
         <input type="button" value="登录" class="login" @click="Login">
     </div>
  </div>
</template>
<script>
export default {
  methods:{
      Login: function () {
          this.$router.push('/home')
      }
  }
}
</script>
<style>
    #login{
        width: 100%;
        height: 100%;
    }
    #logo{
        width: 100%;
        font-size: 20px;
        color: #8B008B;
        text-align: center;
        margin-top: 100px;
        font-weight: 600;
    }
    #logo>img{
        height: 30px;
    }
    #loginContent{
    width: 100%;
    margin-top: 70px;
    }
    #loginContent>input{
        display: block;
    }
    .username, .password{
        border-bottom: 1px solid #ccc;
        padding-left: 5px;
        margin-bottom: 15px;
        letter-spacing: 1px;
    }
    .username, .password, .login{
        width: calc(100% - 30px);
        height: 35px;
        font-size: 15px;
        margin-left: 15px;
    }
    .login{
        background-color: #0072E3;
        margin-top: 50px;
        color: white;
        border-radius: 4px;
        letter-spacing: 7px;
    }
</style>


