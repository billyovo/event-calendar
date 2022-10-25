<script>
    export default {
        data(){
            return{
                name: null,
                avatarurl: null,
            }
        },
        beforeMount(){
            this.name = sessionStorage.getItem("name");
            this.avatarurl = sessionStorage.getItem("avatarurl");
        }
    }
</script>

<template>
    <nav class="nav-container">
       <a href="/" class="brand">
           <img src="/icons/brand.svg" alt="伺服器圖示" class="brand" height="50" width="400">
       </a>
       <div class="avatar">
            <img :src="avatarurl" height="50" width="50" class="avatar-icon">
           <span>{{name}}</span>
       </div>
    </nav>
</template>

<style scoped>
    .nav-container{
        height: 70px;
        padding: 10px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .avatar{
        margin-right: 10px;
        display: flex;
        align-items: center;
    }
    .avatar-icon{
        margin-right: 10px;
        border-radius: 50%;
    }
</style>