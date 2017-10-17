import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        isShowHeadMore: false,
        chooseUsers:[]
    },
    getter:{

    },
    mutations:{
        ShowHeadMore: function (state){
            if(state.isShowHeadMore === true){
                state.isShowHeadMore = false;
            }else{
                state.isShowHeadMore = true;
            } 
        },
        ChooseUsers:function(state,chooseusers){
            state.chooseUsers=chooseusers;
        }
    },
    actions:{
        
    }
})