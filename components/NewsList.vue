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

        syncQueryString(){
          const newParams = new URLSearchParams(window.location.search);
          newParams.set('page', this.currentPage);
          window.history.replaceState({}, '', `${location.pathname}?${newParams.toString()}`);
        }
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
      <div class="container">
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
    .container{
        width: 100%;
    }
    .control{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      margin-top: -30px;
    }
    .pageSelect{
      width: 50px;
      height: 100%;
      font-size: 0.9rem;
      margin: 10px;
    }
    .separator{
		  border-top: 1px dashed black; 
		  margin-bottom: 30px;
		  width: 100%;
		  padding-right: 20px;
	  }
  .button{
    background: none;
    border: none;
    color: var(--shade-darken3);
    text-align: center;
    text-decoration: none;
    font-size: 1.1rem;
    cursor: pointer;
  }
  .button:hover{
    font-weight: bold;
  }
</style>
