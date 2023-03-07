<script>
    import configHandler from '~~/mixins/configHandler.vue';

    export default{
        props: {
            limit: {
                type: Number,
                default: 20
            },
            hideControl: Boolean,
            editMode: Boolean
        },
        data(){
            return{
              news: [],
              total: Infinity,

              observer: null
          }
      },
      methods:{
        async getNews(after){
          const res = await fetch(`${this.API_URL}/news?limit=${this.limit}`+ (after ? `&after=${after}` : ""));
          if(res.status !== 200){
            return [];
          }
          const news = await res.json();
          return news;
        },
      },

      async mounted(){ 
        const data = await this.getNews();
        this.news = data.rows;
        this.total = data.total;

        if(this.hideControl) return;
        const bottom = this.$refs.bottom.$el;
        const observer = new IntersectionObserver(async (entry)=>{
          if(entry[0].isIntersecting){
            const data = await this.getNews(this.news[this.news?.length-1]._id);
            this.news = [...this.news, ...data.rows];
          }
        });
        
        this.observer = observer;
        this.observer.observe(bottom);
        
      },
      beforeUnmount(){
        if(this.hideControl) return;
        this.observer.disconnect();
      }, 
      mixins: [configHandler],
    }
</script>
<template>
    <ClientOnly>
      <div class="list-container">
          <NewsListItem :data="newsItem" v-for="newsItem in news" :key="newsItem.ID" :editMode="editMode"/>
          <NewsItemSkeleton
            ref="bottom" 
            class="bottom"
            v-if="(total !== news.length) && !hideControl"
            :aria-hidden="(total !== news.length) && !hideControl"
          />
          <div class="separator"/>
	    </div>
  </ClientOnly>
</template>

<style scoped>
    .list-container{
        width: 90%;
        margin: 0 auto;
    }
    .separator{
		  border-top: 1px dashed black; 
		  margin-bottom: 30px;
		  width: 100%;
		  padding-right: 20px;
	  }
</style>
