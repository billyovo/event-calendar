<template>
    <nav class="nav-color-control query-none-mobile">
        <img src="~/assets/icons/brand.svg" alt="伺服器圖示" class="brand" height="50" width="250">
        <NuxtLink @click="updateTheme" class="theme-button">
            <font-awesome-icon 
                :icon="'fa-solid '+($colorMode?.value === 'dark' ? 'fa-moon' :'fa-sun')"
                style="color: var(--color-text)" 
                size="xl" 
                aria-label="網頁顏色"
            />
        </NuxtLink>
    </nav>
</template>

<style scoped>
    .nav-color-control{
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin: 0 auto;
        margin-bottom: 10px;
    }

</style>
<script>
    export default{
        methods:{
            updateTheme(){
                this.$colorMode.preference = this.$colorMode?.value === 'dark' ? 'light' : 'dark';
            }
        },
    }
</script>