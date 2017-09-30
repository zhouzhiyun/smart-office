import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/login.vue'
import Home from '../components/home.vue';
import Setting from '../components/setting.vue';
import Schedule from '../components/schedule.vue';
import Makeoffice from '../components/makeAppointment.vue';
import Files from '../components/file.vue';
import Contacts from '../components/contacts.vue';
import Choose from '../components/choose.vue';


Vue.use(VueRouter)
export default new VueRouter({
    // mode: 'history',
    routes: [
        {path: '/', component: Login},
        {path: '/home', component: Home,
         children:[
             {path: '/home', component: Home},
             {path: 'makeoffice', component: Makeoffice},
             {path: 'choose', component: Choose}
         ]},
        {path: '/contacts', component: Contacts},
        {path: '/file', component: Files},
        {path: '/schedule', component: Schedule},
        {path: 'setting', component: Setting}
    ]
})