<template>
    <router-view id="app"></router-view>
</template>
<script>
import '../src/style/common.css';
import '../node_modules/vuetify/dist/vuetify.min.css';
export default {
    mounted:function (){
        var _body = document.getElementsByTagName('body')[0];
        _body.style.height=_body.clientHeight + "px";

    }
}
</script>

<style>

/* @import '../node_modules/vuetify/src/stylus/main.styl'; */
#app{
    width: 100%;
    height: 100%;
}
</style>

