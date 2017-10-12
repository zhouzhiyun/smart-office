<template>
  <div>
      <search></search>
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
            { title: 'List Item' }
          ]
        },
        {
          action: 'restaurant',
          title: '部门2',
          items: [
            { title: 'Breakfast & brunch' },
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
        },
        {
          action: 'healing',
          title: '部门5',
          items: [
            { title: 'List Item' }
          ]
        },
        {
          action: 'content_cut',
          title: '部门6',
          items: [
            { title: 'List Item' }
          ]
        },
        {
          action: 'local_offer',
          title: '部门7',
          items: [
            { title: 'List Item' }
          ]
        }
      ]
    }
  },
  methods:{
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
</style>

