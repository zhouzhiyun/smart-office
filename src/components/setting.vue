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

      <div class="department">
        <v-card color="grey lighten-4" flat>
          <v-card-text>
            <v-container fluid>
              <v-layout row wrap>
                <v-flex xs6>
                  <v-subheader>我的部门</v-subheader>
                </v-flex>
                <v-flex xs6>
                  <v-select v-bind:items="items"  v-model="e1" label="Select" single-line bottom></v-select>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </div>

     
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
        e1: null,
        items:[
          {text:'人事部'},
          {text:'财务部'},
          {text:'研发部'},
          {text:'设计部'},
          {text:'销售部'},
        ],
        states: [
          'Alabama','Alaska','American Samoa','Arizona',
          'Arkansas','California','Colorado','Connecticut',
          'Delaware','District of Columbia','Federated States of Micronesia',
          'Florida','Georgia','Guam','Hawaii','Idaho',
          'Illinois','Indiana','Iowa','Kansas','Kentucky',
          'Louisiana','Maine','Marshall Islands','Maryland',
          'Massachusetts','Michigan','Minnesota','Mississippi',
          'Missouri','Montana','Nebraska','Nevada',
          'New Hampshire','New Jersey','New Mexico','New York',
          'North Carolina','North Dakota','Northern Mariana Islands','Ohio',
          'Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico',
          'Rhode Island','South Carolina','South Dakota','Tennessee',
          'Texas','Utah','Vermont','Virgin Island','Virginia',
          'Washington','West Virginia','Wisconsin','Wyoming'
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
  .department{
    height: 50px;
    line-height: 50px;
     border-bottom: 1px solid #ccc;
     position: relative;
  }
  .deText{
    float: left;
    margin-left: 15px;
  }
  .deBtn{
    float: right;
    margin-right: 65px;
  }
  #deLists{
    width: 80px;
    letter-spacing: 1px;
    position: absolute;
    top: 50px;
    right: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #888;
  }
  #deLists>span{
    display: inline-block;
    height: 25px;
    line-height: 25px;
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

