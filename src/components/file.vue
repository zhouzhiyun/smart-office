<template>
  <div id="file">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card class="cards" id="test">
          <v-list two-line subheader>
            <v-list-tile avatar v-for="item in items" v-bind:key="item.title" @click="" class="site">
              <v-checkbox v-show="isShowCheckbox"
                        v-model="item.ex"
                        color="secondary"
                        hide-details></v-checkbox>
              <v-list-tile-avatar :class="{ active:'isShowCheckbox' }">
                <v-icon v-bind:class="[item.iconClass]" >{{ item.icon }}</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon ripple>
                  <v-icon color="grey lighten-1">info</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  data () {
      return {
         items: [
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014', ex: true },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014' },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014' }
        ],
        isShowCheckbox: false
      }
    },
    mounted: function(){
      var hammertime = new Hammer(document.getElementById("test"));
      hammertime.on("press", function (ev) {
          //控制台输出
          ev.preventDefault();
         this.isShowCheckbox = true;
      });
    },
    

}
</script>

<style scoped>
  .cards{
    box-shadow: none ! important;
  }
  .site{
    border-bottom: 1px solid #ccc;
  }
  .input-group__details{
    display: none ! important;
  }
  .active{
    margin-left: -20px;
  }
</style>

