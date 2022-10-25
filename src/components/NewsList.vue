<script>
    import NewsListItem from './NewsListItem.vue';

    export default {
      props: {
        limit: Number,
        showControl: Boolean,
        API_URL: String,
        editMode: Boolean
      },
      components:{
        NewsListItem
      },
      data(){
        return{
            news: [],
            total: 0,
            itemsPerPage: this.limit,
            currentPage: 1,
            lastPage: 0,
            from: 0,
            to: 0
            
        }
      },
      methods:{
        paginate(length, currentPage, itemsPerPage) {
            this.total = length,
            this.itemsPerpage = itemsPerPage,
            this.currentPage = currentPage,
            this.lastPage = Math.ceil(length / itemsPerPage),
            this.from = ((currentPage -1) * itemsPerPage) + 1,
            this.to = (currentPage * itemsPerPage) < length ? (currentPage * itemsPerPage) : length
        },
        async getNews(){
          const res = await fetch(this.API_URL+"/news?limit="+this.itemsPerPage+"&page="+(this.currentPage-1));
          if(res.status !== 200){
            return [];
          }
          const news = await res.json();
          this.paginate(news.total, this.currentPage, this.itemsPerPage);
          return news;
        },

        async changePage(page){

          this.currentPage += page;
          if(this.currentPage < 0){
            this.currentPage = 0;
          }
          this.syncQueryString();

          const data = await this.getNews();
          this.news = data.rows;
        },
        syncQueryString(){
          const newParams = new URLSearchParams(window.location.search);
          newParams.set('page', this.currentPage);
          window.history.replaceState({}, '', `${location.pathname}?${newParams.toString()}`);
        }
      },
      async mounted(){ 
        if(this.showControl){
          const newParams = new URLSearchParams(window.location.search);
          this.currentPage = parseInt(newParams.get("page")) || 1;
        }
          
          const data = await this.getNews();
          this.news = data.rows;

      },
      
    }
</script>
<template>
    <div>
      <div class="control" v-if="showControl">
            <button @click="changePage(-1)" class="button" :style="'visibility:'+((currentPage <= 1) ? 'hidden' : 'visible')">
              <i class="fa-solid fa-arrow-left"></i>上一頁
            </button>

            <div>
              <select v-model="currentPage" class="pageSelect" @change="changePage(0)">
                <option v-for="index in lastPage" :key="index" :value="parseInt(index)">{{index}}</option>
              </select>
              <span>/{{lastPage}}頁</span>
            </div>

            <button @click="changePage(1)" class="button" :style="'visibility:'+( (currentPage >= lastPage) ? 'hidden' : 'visible')">
              下一頁<i class="fa-solid fa-arrow-right"></i>
            </button>
      </div>
        <NewsListItem :data="newsItem" v-for="newsItem in news" :key="newsItem.ID" :editMode="editMode"/>
		<div class="separator"></div>
	</div>
</template>

<style scoped>
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
