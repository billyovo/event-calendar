<script>
    export default {
      props: {
        data: Object,
        editMode: Boolean
      },
    }
</script>

<template>
    <a class="line" :href="editMode ? `./edit/${data.ID}` : `./news/${data.ID}`">
        <span class="news-date">{{data.publish_date.substring(0,10)}}</span>
        <span>{{data.title}}</span>
    </a>
</template>

<style>
    .line{
        width: calc(100% - 20px);
        white-space:nowrap;
        overflow:hidden;
        text-overflow: ellipsis;
        display: grid;
        grid-template-columns: auto 1fr;
        padding: 30px 20px;
        text-decoration: none;
        color: initial;
        border-top: 1px dashed black;
        
        background: linear-gradient(to left, white 50%, var(--shade-darken) 50%) right;
        background-size: 300% 100%;
        transition: 1.5s ease-out;
    }
    .line > span{
        overflow: hidden; 
        word-wrap: break-word; 
        text-overflow: ellipsis;
    }
    .line:hover {
        background-position: left;
    }
    .news-date{
        color: var(--shade-darken3);
        font-weight: bold;
        font-size: clamp(1rem, 5vw, 1rem);
        padding-right: 15px;
    }
</style>
