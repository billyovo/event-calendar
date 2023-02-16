<script>
    export default {
        props:{
            data: Object,
            imageurl: String,
        }
    }
</script>
<template>
    <article class="card">
        <div class="card-inner">
            <div class="label-line">
                <div class="label-container" v-if="data.server">
                    <span class="label" :style="'background: '+(data.server==='生存' ? 'rgb(46,204,113)' : 'rgb(52,152,219)')">{{data.server}}</span>
                </div>
                <div class="name">
                    <div class="avatar-container">
                        <img :src="`https://crafatar.com/avatars/${data.UUID}?size=30&overlay=true`" height="30" width="30" :alt="data.name+' 的遊戲頭像'" :title="data.name" style="margin-right: 10px" v-if="data.name!=='平手'">
                        <img src="~/assets/images/draw.png" alt="平手圖示" title="平手" style="margin-right: 10px" height="30" width="30" v-else>
                    </div>
                    <span>{{data.name}}</span>
                </div>
            </div>
            <div class="card-content" v-if="data.event">
                <img :src="imageurl" :alt="data.title +'遊戲圖示'" height="24" width="24" style="margin-right: 10px">
                <span class="card-content">{{data.event}}</span>
            </div>
            <div class="card-content" v-if="data.date">
                <i class="fa fa-calendar fa-xl" style="margin-right: 10px;"></i><span>{{data.date.substring(0,10)}}</span>
            </div>
            <div class="card-content" v-if="data.total">
                <span>勝利次數: {{data.total}}次</span>
            </div>
            
        </div>
    </article>
</template>

<style scoped>
    .card{
        background: white;
        width: 230px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        margin: 15px 20px;
        border-radius: 10px;
        word-wrap: break-word;
    }
    .card-content{
        font-size: 0.9rem;
        margin-bottom: 10px;
    }
    .label-line{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .avatar-container{
        background-image: url("~/assets/images/steve.jpg");
        width: 30px;
        height: 30px;
        background-size: 30px;
        margin-right: 5px;
    }
    .label-container{
        position: absolute;
    }
    .label{
        position: relative;
        right: 53px;
        bottom: 10px;
        width: 3rem;
        color: white;
        font-size: 0.85rem;
        padding: 5px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .card-inner{
        padding: 20px;
    }
    .name{
        display: flex;
        align-items: center;
        margin-bottom: 25px;
    }
</style>
