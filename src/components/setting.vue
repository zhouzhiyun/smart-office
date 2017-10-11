<template>
  <div>
    <my-twoheader :text="text"></my-twoheader>
    <div id="setting">
      <div class="headImage">
        <span>头像</span>
      </div>
      <!-- <div class="name">
        <label>名字</label>
        <input type="text" class="enters">
      </div>
      <div class="department">
        <label>部门</label>
        <input type="text" class="enters">
      </div>
      <div class="address">
        <label>城市</label>
        <input type="text" class="enters">
      </div> -->

      <v-form v-model="valid" class="name">
        <v-text-field label="名字" v-model="name" :rules="nameRules" :counter="10" required></v-text-field>
      </v-form>

     
  <v-app id="inspire">
    <v-card color="grey lighten-4" flat>
      <v-card-text>
        <v-container fluid>
          <v-layout row wrap>
            <v-flex xs12 sm6>
              <v-subheader v-text="'Autocomplete'"></v-subheader>
            </v-flex>
            <v-flex xs12 sm6>
              <v-select
                v-bind:items="states"
                v-model="a1"
                label="Select"
                autocomplete
              ></v-select>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </v-app>

     
    </div>
    <div id="button">
        <input type="button" value="保存" class="save btns">
        <input type="button" value="退出" class="singOut btns">
     </div>
  </div>
</template>
<script>
import myTwoheader from './public/twoheader.vue'
export default {
  data(){
    return {
      text: '个人信息',
      valid: false,
      name: '',
      nameRules: [
          (v) => !!v || '名字不能为空',
          (v) => v.length <= 10 || 'Name must be less than 10 characters'
        ],
        select: { state: 'Florida', abbr: 'FL' },
        items: [
          { state: 'Florida', abbr: 'FL' },
          { state: 'Georgia', abbr: 'GA' },
          { state: 'Nebraska', abbr: 'NE' },
          { state: 'California', abbr: 'CA' },
          { state: 'New York', abbr: 'NY' }
        ]
    }
  },
  components:{
    myTwoheader
  }
}
</script>

<style scoped>
  #setting{
    width: 100%;
    height: 100%;
    font-size: 16px;
  }
  .headImage{
    width: 100%;
    height: 65px;
    line-height: 65px;
    margin-top: 20px;
    padding: 0 0 0 15px;
    background-color: white;
    border-bottom: 1px solid #ccc;
  }
  .name{
    height: 100px;
    border-bottom: 1px solid #ccc;
    padding: 0 15px;

  }
  .depart{
    height: 100px;
  }
  .btns{
    width:calc(100% - 30px);
    height: 35px;
    margin-left: 15px;
    background-color: #D15FEE;
    border-radius: 4px;
    font-size: 15px;
  }
  .save{
    margin-bottom: 20px;
  }
  #button{
    width: 100%;
    position: absolute;
    bottom: 15px;
  }
</style>

