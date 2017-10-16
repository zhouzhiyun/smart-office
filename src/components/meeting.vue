<template>
  <div>
      <my-twohead :text="text"></my-twohead>
      <div class="content">
      
        <!-- 会议主题 -->
        <div class="theme">
            <span>会议室编号</span> 
            <input type="text">    
            <v-btn
                color="info"
                :loading="loading4"
                @click.native="loader = 'loading4'"
                :disabled="loading4"
                @click="go"
                >
                开始开会
                <span slot="loader" class="custom-loader">
                    <v-icon light>cached</v-icon>
                </span>
            </v-btn>
        </div>
      </div>
  </div>
</template>
<script>
import myTwohead from './public/twoheader.vue';
export default {
 
  data () {
    return {
      text:'开始开会',
      loading4:false
    }
  },
  methods: {
   go:function(){
       this.$router.push('/drawing')
   }
  },
  components:{
    myTwohead
  }
}
</script>

<style scoped>
.theme{
    width:100%;
    text-align: center;
}
.theme span{
    font-size: 16px;
    margin-top: 30px;
    display:block;
}
.theme input{
    display: block;
    margin:20px auto 20px;
    border-bottom:1px solid #ccc;
    text-align: center;
    font-size: 16px;
}
</style>

