<script>
    import NewsListItem from './NewsListItem.vue';

    export default {
      props: {
        data: Object
      },
      components:{
        NewsListItem
      },
      data(){
        return{
            news: []
        }
      },
      async created(){
        const res = await fetch("http://ddns.bcreative.icu:28001/news?limit=3");
        const news = await res.json();
        this.news = news.rows;
      }
    }
</script>
<template>
    <div>
        <NewsListItem :data="newsItem" v-for="newsItem in news" :key="newsItem.ID"/>
		<div class="separator"></div>
	</div>
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
    .separator{
		border-top: 1px dashed black; 
		margin-bottom: 30px;
		width: 100%;
		padding: 0px 20px;
	}
</style>
