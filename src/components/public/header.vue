<template>
    <div id="head">
        <div class="img" @click="setting"><img src="../../image/cat.jpg"></div>
        <div class="title"><b>会议</b></div>
        <div class="plus">
            <span class="iconfont" @click="show">&#xe601;</span>
            <div class="more" v-if="isShow">
                <p><span class="iconfont icon-saoyisao"></span> 扫一扫</p>
                <p @click="info"><span class="iconfont">&#xe66f;</span>消息</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            isShow:false
        }
    },
    methods: {
        show: function () {
           if(this.isShow === true){
               this.isShow = false;
           }else{
               this.isShow = true;
           }
        },
        setting: function () {
            this.$router.push('/setting')
        },
        info: function () {
            this.isShow = false;
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
        background-color: lime;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .img>img{
        width: 35px;
        border-radius: 50%;
        margin-left: 10px;
    }
    .title{
        font-size: 22px;
        letter-spacing: 1px;
    }
    .plus>.iconfont{
        font-size: 25px;
        margin-right: 10px;
    }
    .plus{
        position: relative;
    }
    .more{
        width: 7rem;
        height: 5rem;
        position: absolute;
        right: 10px;
        top: 40px;
        background-color: #FAEBD7;
        color: #555555;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        font-size: 15px;
    }
</style>

