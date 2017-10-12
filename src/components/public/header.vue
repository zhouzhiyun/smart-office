<template>
    <div id="head">
        <div id="cover" v-show="isShowHeadMore" @click="show"></div>
        <div class="img" @click="setting"><img src="../../image/cat.jpg"></div>
        <div class="headTitle"><b>会议</b></div>
        <div class="plus">
            <span class="iconfont" @click="show">&#xe601;</span>
        </div>
        
        <div class="more" v-show="isShowHeadMore">
            <p class="iconfont icon-saoyisao">&nbsp;&nbsp;扫一扫</p>
            <p @click="info" class="iconfont icon-xiaoxi">&nbsp;&nbsp;消&nbsp;&nbsp;&nbsp;息</p>
        </div>
        
        
    </div>
</template>
<script>
export default {
    data () {
        return {
            isShowHeadMore: false
        }
    },
    methods: {
        show: function () {
           if(this.isShowHeadMore === true){
                this.isShowHeadMore = false;
            }else{
                this.isShowHeadMore = true;
            } 
        },
        setting: function () {
            this.$router.push('/setting')
        },
        info: function () {
            this.$router.push('/info')
        }
    },
    updated: function () {
        var cover = document.getElementById('cover');
        // console.log(cover);
        cover.style.width = screen.width + 'px';
        cover.style.height = screen.height + 'px';
        
    }
}
</script>

<style scoped>
    #head{
        width: 100%;
        height: 44px;
        border-bottom: 1px solid #ccc;
        background-color: #9B34F2;
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

    #cover{
       opacity: 0;
        position: absolute;
        top: 0;
    }
    
</style>

