import Vue from 'vue';
import app from './App.vue';
import router from './router/router';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import store from './store/store';
import jquery from 'jquery'
Vue.use(Vuetify);
Vue.use(Vuex);
Vue.use(Vuetify);

var vm = new Vue({
    el: '#app',
	render: function (h) {
		return h(app);
	},
	router,
	store
})