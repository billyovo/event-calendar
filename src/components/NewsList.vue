<script>
    import NewsListItem from './NewsListItem.vue';

    export default {
      props: {
        limit: Number,
        showControl: Boolean
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
        const res = await fetch("http://ddns.bcreative.icu:28001/news?limit="+this.limit);
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
    .separator{
		border-top: 1px dashed black; 
		margin-bottom: 30px;
		width: 100%;
		padding: 0px 20px;
	}
</style>
