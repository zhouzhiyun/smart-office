<template>
  <div>
      <search  @transfer="enter"></search>
      <div class="part">       
       <v-card class="contacts">
        <v-list>
          <v-list-group v-for="item in items" :value="item.active" v-bind:key="item.title">
            <v-list-tile slot="item" @click="">
              <!-- <v-list-tile-action>
                <v-icon>{{ item.action }}</v-icon>
              </v-list-tile-action> -->
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>keyboard_arrow_down</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile v-for="subItem in item.items" v-bind:key="subItem.title" @click="">
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>{{ subItem.action }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-card>       
      </div>
  </div>
</template>
<script>
import search from './public/search.vue';
export default {
  data(){
    return{
      items: [
       {
          action: 'local_activity',
          title: '部门1',
          active: true,
          items: [
            { title: '张三' }
          ]
        },
        {
          action: 'restaurant',
          title: '部门2',
          items: [
            { title: '李四' },
            { title: 'New American' },
            { title: 'Sushi' }
          ]
        },
        {
          action: 'school',
          title: '部门3',
          items: [
            { title: 'List Item' }
          ]
        },
        {
          action: 'directions_run',
          title: '部门4',
          items: [
            { title: 'List Item' }
          ]
        }
      ]
    }
  },
  created:function(){
   
  },
  methods:{
    enter:function(name){      
      for(var i=0;i<this.items.length;i++){       
        for(var j=0;j<this.items[i].items.length;j++){
          console.log(name==this.items[i].items[j].title);
          if(name==this.items[i].items[j].title){
            this.items[i].active=true;
            break;
          }else{
             this.items[i].active=false;
          }
        }
      }
      
    }
  },
  components:{
    search
  }
  
}
</script>

<style scoped>      
.part{
  overflow-y: auto;
  height: 100%;
}
.contacts{
  box-shadow: none;
}
.list__tile__title.tile{
  color:#f00;
}
</style>

