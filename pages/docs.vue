<template>
    <main v-html="content">

    </main>
</template>

<script>
    import content from '~/assets/docs.html?raw'
    export default{
        data(){
            return{
                content: content
            }
        },
    }
</script>

<script setup>
    definePageMeta({
      layout: false,
    });
</script>

<style>
    #redoc{
        background-color: rgb(240,240,240) !important;
    }
</style>