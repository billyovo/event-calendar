<template>
    <NuxtLink :to="to" class="icon-base">
        <slot/>
    </NuxtLink>
</template>

<style scoped>
    .icon-base{
        height: 90px;
        width: 80px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: var(--shade-darken3);
    }
    .icon-base.router-link-exact-active{
        background-color: rgb(46,204,113) !important;
    }
    

</style>

<script>
    export default{
        props: ["to"]
    }
</script>