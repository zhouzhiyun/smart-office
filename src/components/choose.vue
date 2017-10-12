<template>
  <div>
      <my-twohead :text="text"></my-twohead>
      <search></search>
      <div class="part">
        <div class="part-list">
          <div class="part-title">
            研发部
          </div>
          <div class="part-checkbox">           
              <v-checkbox v-bind:label="`Checkbox 2: ${ex3.toString()}`" v-model="ex3" color="indigo"></v-checkbox>
              <v-checkbox v-bind:label="`Checkbox 2: ${ex4.toString()}`" v-model="ex4" color="indigo"></v-checkbox>           
          </div>
        </div>
        <v-btn
          color="info"
          :loading="loading4"
          @click.native="loader = 'loading4'"
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
      ex3: true,
      ex4: false,
      loading4:false
    }
  },
  components:{
    myTwohead,
    search
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

