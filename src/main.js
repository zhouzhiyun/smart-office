import Vue from 'vue';
import app from './App.vue';


var vm=new Vue({
    el: '#app',
	render: function (h) {
		return h(app);
	}
})