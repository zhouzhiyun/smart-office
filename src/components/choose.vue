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
      ex4: false
    }
  },
  components:{
    myTwohead,
    search
  }
}
</script>

<style>
.part{
  
}
.part .part-list{

}
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
</style>

