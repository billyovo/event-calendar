<script>

    export default{
        props: {
            limit: {
                type: Number,
                default: 20
            },
            hideControl: Boolean,
            editMode: Boolean,
            canSeeFuture: {
              type: Boolean,
              default: false
            }
        },
        data(){
            return{
              news: [],
              total: Infinity,

              observer: null
            }
        },
        computed:{
          currentAPIURL(){
            return `${this.$config.public.API_URL}/news`+ (this.canSeeFuture ? "-edit" : "");
          },
        },
      methods:{
        async getNews(after){
          const query = `?limit=${this.limit}` + (after ? `&after=${after}` : "");
          const res = await fetch( `${this.currentAPIURL}${query}`,  
            {
              headers: {
                Authorization: `Bearer ${window?.localStorage?.getItem('access-token')}`
              }
            }
          );
          if(res.status !== 200){
            if(res.status === 401){
              window.localStorage.removeItem('access-token');
              this.$router.push({path: "/edit"});
            }
            return {rows: [], total: 0};
          }
          const news = await res.json();
          return news;
        },
      },
      async beforeMount(){
        const data = await this.getNews();
        this.news = data.rows;
        this.total = data.total;
      },

      mounted(){
        if(this.hideControl) return;
        const bottom = this.$refs.bottom.$el;
        
        const observer = new IntersectionObserver(async (entry)=>{
          if(entry[0].isIntersecting){
            if(!this.news[this.news?.length-1]?._id) return;
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
      }
    }
</script>
<template>
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
</template>

<style scoped>
    .list-container{
        width: 90%;
        padding-bottom: 50px;
        margin: 0 auto;
        margin-top: 20px;
    }
    .separator{
		  border-top: 1px dashed black; 
		  margin-bottom: 30px;
		  width: 100%;
		  padding-right: 20px;
	  }
</style>
