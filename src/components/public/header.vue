<template>
    <div id="head">
        <div class="img" @click="setting"><img src="../../image/cat.jpg" alt=""></div>
        <div class="headTitle"><b>{{ title }}</b></div>
        <div class="plus">
            <span class="iconfont" @click="show">&#xe601;</span>
        </div>
        
        <div class="more" v-show="this.$store.state.isShowHeadMore">
            <p class="iconfont icon-saoyisao">&nbsp;&nbsp;扫一扫</p>
            <p @click="info" class="iconfont icon-xiaoxi">&nbsp;&nbsp;消&nbsp;&nbsp;&nbsp;息</p>
        </div>
        
        
    </div>
</template>
<script>
export default {
    data () {
        return {
            
        }
    },
    props:['title'],
    methods: {
        show: function () {
           this.$store.commit('ShowHeadMore')
        },
        setting: function () {
            this.$router.push('/setting')
        },
        info: function () {
            this.$router.push('/info')
        }
    }
}
</script>

<style scoped>
    #head{
        width: 100%;
        height: 44px;
        border-bottom: 1px solid #ccc;
        background-color: #00bcd4;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }
    .img>img{
        width: 35px;
        border-radius: 50%;
        margin-left: 10px;
    }
    .headTitle{
        font-size: 22px;
        letter-spacing: 1px;
    }
    .plus>.iconfont{
        font-size: 25px;
        margin-right: 10px;
    }
    .more{
        width: 7rem;
        height: 6rem;
        position: absolute;
        right: 10px;
        top: 44px;
        background-color: #FAEBD7;
        color: #555555;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        font-size: 15px;
        z-index: 1;
    }
    .more>p:first-child{
        margin-top: 10px;
    }
    .more>.iconfont{
        width: 100%;
        text-align: center;
        font-size: 18px;
    }

    
    
</style>

