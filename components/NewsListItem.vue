<script>
    export default {
      props: {
        data: Object,
        editMode: Boolean
      },
    }
</script>

<template>
    <article>
        <NuxtLink class="line" :to="editMode ? `./edit/${data._id}` : `./news/${data._id}`">
            <span class="news-date">{{data.publish_date}}</span>
            <span>{{data.title}}</span>
        </NuxtLink>
    </article>
</template>

<style>
    .line{
        width: calc(100% - 20px);
        white-space:nowrap;
        overflow:hidden;
        text-overflow: ellipsis;
        display: grid;
        grid-template-columns: auto 1fr;
        padding: 30px 10px;
        text-decoration: none;
        color: var(--color-text);
        border-top: 1px dashed var(--color-text);
        
        background: linear-gradient(to left, var(--color-secondary) 50%, var(--shade-darken) 50%) right;
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
