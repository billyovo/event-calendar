<template>
    <nav class="nav-container" :class="takeSpace ? 'query-hidden-mobile' : 'query-none-mobile'">
        <NuxtLink class="nav-icon" to="/introduction">
            <font-awesome-icon icon="fa-solid fa-book" size="xl" />
            <span>活動介紹</span>
        </NuxtLink>

        <NuxtLink class="nav-icon" to="/news">
            <font-awesome-icon icon="fa-solid fa-newspaper" size="xl" />
            <span>通知</span>
        </NuxtLink>

        <NuxtLink class="nav-icon nav-home" to="/">
            <img src="~/assets/images/brand-icon.webp" width="50" height="50" alt="伺服器圖示" class="nav-brand">
        </NuxtLink>

        <NuxtLink class="nav-icon" to="/calendar">
            <font-awesome-icon icon="fa-solid fa-clock" size="xl" />
            <span>時間表</span>
        </NuxtLink>

        <NuxtLink class="nav-icon" to="/record">
            <font-awesome-icon icon="fa-solid fa-trophy" size="xl" />
            <span>優勝記錄</span>
        </NuxtLink>
        
    </nav>
</template>

<style scoped>
.nav-container{
    width: 100%;
    position: fixed;
    grid-template-columns: repeat(5,1fr);
    bottom: 0;
}

.nav-icon{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 5px;
    opacity: 0.6;
    padding: 5px 0px;
}

.nav-brand{
    border-radius: 5px;
}
.nav-home{
    opacity: 1;
}

.router-link-active{
    border-bottom: 2px solid rgb(46,204,113);
    opacity: 1;
}

</style>

<script>
    import mediaQueryProps from '~~/mixins/mediaQueryProps.vue';

    export default{
        mixins:[mediaQueryProps],
        props:{
            takeSpace:{
                type: Boolean,
                default: false
            }
        }
    }
</script>