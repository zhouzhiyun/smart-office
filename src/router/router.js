import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/login.vue'
import Home from '../components/home.vue';
import Setting from '../components/setting.vue';
import Makeoffice from '../components/makeAppointment.vue';
import Instantconference from '../components/instantconference.vue';
import Meeting from '../components/meeting.vue';
import Choose from '../components/choose.vue';
import Info from '../components/info.vue';
import Start from '../components/start.vue'
import "hammerjs";


// 2017/10/16 （可以删除）
import Drawing from '../components/drawing.vue';

Vue.use(VueRouter)
export default new VueRouter({
    routes: [
        {path: '/', component: Login},
        {path: '/home', component: Home},
        {path: '/makeappointment', component: Makeoffice},//预约
        {path: '/instantconference', component: Instantconference},//即时
        {path: '/meeting', component: Meeting},//开始开会
        {path: '/choose', component: Choose},//选择参会人员
        {path: '/setting', component: Setting},
        {path: '/info', component: Info},
        {path: '/start', component: Start},

        {path: '/drawing', component: Drawing}
    ]
})