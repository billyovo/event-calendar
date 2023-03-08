<template>
    <nav class="nav-container" :class="takeSpace ? 'query-hidden' : 'query-none'">
        <NuxtLink to="/" class="brand">
            <img src="~/assets/icons/brand.svg" alt="伺服器圖示" class="brand" height="50" width="300">
        </NuxtLink>
        <div class="nav-links">
            <NuxtLink to="/introduction" class="nav-link"><span>活動介紹</span></NuxtLink>
            <NuxtLink to="/news" class="nav-link"><span>通知</span></NuxtLink>
            <NuxtLink to="/calendar" class="nav-link"><span>時間表</span></NuxtLink>
            <NuxtLink to="/record" class="nav-link"><span>優勝記錄</span></NuxtLink>
            <NuxtLink @click="updateTheme" class="theme-button">
                <font-awesome-icon 
                    :icon="'fa-solid '+($colorMode?.value === 'dark' ? 'fa-moon' :'fa-sun')" 
                    size="lg" 
                    aria-label="網頁顏色"
                />
            </NuxtLink>
        </div>
    </nav>
</template>

<style>
.nav-container{
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
}

.nav-links{
    display: flex;
    gap: 15px;
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0px 20px;
}

.theme-button{
    cursor: pointer;
}




</style>
<script>
    import mediaQueryProps from '~~/mixins/mediaQueryProps.vue';
    export default{
        mixin: [mediaQueryProps],
        methods:{
            updateTheme(){
                this.$colorMode.preference = this.$colorMode?.value === 'dark' ? 'light' : 'dark';
            }
        },
    }
</script>