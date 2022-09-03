<script>
    export default {
        props:{
            data: Object
        }
    }
</script>
<template>
    <div class="card">
        <div class="card-inner">
            <div class="label-line">
                <div class="name">
                    <img :src="`https://crafatar.com/avatars/${data.uuid}?size=30&overlay=true`" :alt="data.name+' 的遊戲頭像'" :title="data.name" style="margin-right: 10px" v-if="data.name!=='平手'">
                    <img src="../../public/images/draw.png" alt="平手圖示" title="平手" style="margin-right: 10px" v-else>
                    <span>{{data.name}}</span>
                </div>
                <span class="label" :style="'background: '+(data.server=='生存') ? 'red' : 'blue'">{{data.server}}</span>
            </div>
            <div>
                <span>{{data.date.substring(0,10)}}</span>
            </div>

            <span>{{data.event}}</span>
            <span>{{data.server}}</span>
        </div>
    </div>
</template>

<style scoped>
    .card{
        background: white;
        width: 250px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        margin: 15px 20px;
        border-radius: 10px;
    }
    .label-line{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .label{
        position: relative;
        left: 50px;
        width: 3rem;
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
