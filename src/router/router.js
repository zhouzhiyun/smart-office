import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/login.vue'
import Home from '../components/home.vue';
import Setting from '../components/setting.vue';
import Makeoffice from '../components/makeAppointment.vue';
import Choose from '../components/choose.vue';
import Info from '../components/info.vue'


Vue.use(VueRouter)
export default new VueRouter({
    routes: [
        {path: '/', component: Login},
        {path: '/home', component: Home},
        {path: '/makeoffice', component: Makeoffice},
        {path: '/choose', component: Choose},
        {path: '/setting', component: Setting},
        {path: '/info', component: Info}
    ]
})