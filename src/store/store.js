import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        isShowHeadMore: false,
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
        }
    },
    actions:{
        
    }
})