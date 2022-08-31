<template>
    <a class="line" :href="'./news/'+data.ID">
        <span class="news_date">{{data.publish_date.substring(0,10)}}</span>
        <span>{{data.title}}</span>
    </a>
</template>

<style>
    .line{
        width: 100%;
        display: grid;
        grid-template-columns: 150px 1fr;

        padding: 30px 20px;
        text-decoration: none;
        color: initial;
        border-top: 1px dashed black;
        
        background: linear-gradient(to left, white 50%, var(--shade-darken) 50%) right;
        background-size: 300% 100%;
        transition: 1.5s ease-out;
    }
    .line:hover {
        background-position: left;
    }
    .news_date{
        color: var(--shade-darken3);
        font-weight: bold;
        font-size: 1.2rem;
    }
</style>

<script>
    export default {
      props: {
        data: Object
      },
    }
</script>