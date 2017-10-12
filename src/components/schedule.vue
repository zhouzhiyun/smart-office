<template>
 <div>
    <v-tabs dark v-model="active" id="schduieTop">
      <v-tabs-bar class="cyan">
        <v-tabs-item
          v-for="tab in tabs"
          :key="tab"
          :href="'#' + tab"
          ripple
          class="item"
        >
        {{ tab }}
        </v-tabs-item>
        <v-tabs-slider color="yellow"></v-tabs-slider>
      </v-tabs-bar>
      <v-tabs-items>
        <v-tabs-content
          v-for="tab in tabs"
          :key="tab"
          :id="tab"
        >
          <v-card flat>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tabs-content>
      </v-tabs-items>
    </v-tabs>
  </div>
</template>
<script>
import Attend  from './attend.vue';
import Over from './over.vue';
export default {
  data () {
      return {
        tabs: ['待参加', '已结束'],
        active: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    }
}
</script>

<style>
  #schduieTop{
    margin-top: -2px;
    font-size: 16px;
  }
 .item{
   width: 50%;
   font-size: 16px !important;
 }
 a:hover{
   color: white;
   font-size: 16px;
 }
</style>

