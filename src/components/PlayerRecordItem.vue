<script>
    export default {
        props:{
            data: Object
        }
    }
</script>
<template>
    <div class="list">
        <div class="list-inner">
            <div class="name">
                <img :src="`https://crafatar.com/avatars/${data.uuid}?size=30&overlay=true`" :alt="data.name+' 的遊戲頭像'" :title="data.name" style="margin-right: 10px">
                <span>{{data.name}}</span>
            </div>
            <div><span>{{data.date.substring(0,10)}}</span></div>

            <span>{{data.event}}</span>
            <span>{{data.server}}</span>
        </div>
    </div>
</template>

<style scoped>
    .list{
        background: white;
        width: 250px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        margin: 20px;
        border-radius: 10px;
    }
    .list-inner{
        padding: 20px;
    }
    .name{
        display: flex;
        align-items: center;
        margin-bottom: 25px;
    }
</style>
