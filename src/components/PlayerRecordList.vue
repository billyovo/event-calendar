<script>
    import PlayerRecordItem from './PlayerRecordItem.vue';
    import event from '../assets/event.json'

    export default {
        data(){
            return{
                records: [],
                type: "record",
                route: null,
                events: event,
                eventMap: new Map(),
                loading: false,

                total: 0,
                itemsPerPage: 15,
                currentPage: 1,
                lastPage: 0,
                from: 0,
                to: 0,
            }
        },
        components:{
            PlayerRecordItem
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
            async changePage(page){
                this.currentPage += parseInt(page);
                if(this.currentPage < 0){
                  this.currentPage = 0;
                }
                this.syncQueryString();
                if(document.documentElement.clientWidth <= 800){
                    window.scrollTo({ top: 50 });
                }
                await this.getRecord();
            },
            resetPage(){
                const newParams = new URLSearchParams(window.location.search);
                newParams.set('page', 1);
                window.history.replaceState({}, '', `${location.pathname}?${newParams.toString()}`);
                this.currentPage = 1;
            },
            syncQueryString(){        
                const newParams = new URLSearchParams(window.location.search);
                newParams.set('page', this.currentPage);

                window.history.replaceState({}, '', `${location.pathname}?${newParams.toString()}`);
            },
            loadQueryString(){
                const params = new URLSearchParams(window.location.search);
                this.currentPage = parseInt(params.get("page")) || 1;
            },
            async getRecord(){
                this.loading = true;
                try{
                    const res = await fetch(this.constructURL());

                    if(res.status===204){
                        this.records = [];
                        this.paginate(0, 1, this.itemsPerPage);
                        return;
                    }

                    const data = await res.json();
                    this.records = data?.rows || [];
                    this.paginate(data?.total || 0, this.currentPage, this.itemsPerPage);
                }
                catch(error){
                    alert("一個錯誤發生了 D:");
                }
                finally{
                    this.loading = false;
                }
                
                
            },
            constructURL(){
                const params = new URLSearchParams(window.location.search);

                const type = params.get("type") || "record";
                this.type = type;
                const server = params.get("server") || "all";
                const event = params.get("event") || "all";
                const player = params.get("player") || "";
                const limit = params.get("itemsPerPage") || 15;
                this.itemsPerPage = limit;
                return `https://minigame-api.letsdream.today/${type}/${server}/${event}${(player ? "/"+player : "")}?page=${this.currentPage-1}&limit=${this.itemsPerPage}`;
            }   
        },
        computed:{
            queryStrings(){
                return window.location.search;
            }
        },
        async mounted(){
            for(let i = 0;i<this.events.length;i++){
                this.eventMap.set(this.events[i].title, this.events[i].imageurl);
            }
            this.loadQueryString();
            await this.getRecord();
            
        },


    }
</script>

<template>
    <div>
        <div class="list">
            <PlayerRecordItem v-for="(record, index) in records" :key="index" :data="record" :imageurl="eventMap.get(record.event)"/>
            <span v-if="total===0">沒有任何紀錄 :( </span>
        </div>

        <div class="control">
            <button @click="changePage(-1)" class="button" :style="'visibility:'+((currentPage <= 1) ? 'hidden' : 'visible')">
                <span><i class="fa-solid fa-arrow-left">上一頁</i></span>
                </button>

                <div class="pageSelect-container">
                  <select v-model="currentPage" class="pageSelect" @change="changePage(0)">
                    <option v-for="index in lastPage" :key="index" :value="parseInt(index)">{{index}}</option>
                  </select>
                  <span>/{{lastPage}}頁</span>
                </div>

                <button @click="changePage(1)" class="button" :style="'visibility:'+((currentPage >= lastPage) ? 'hidden' : 'visible')">
                  <span>下一頁<i class="fa-solid fa-arrow-right"></i></span>
                </button>
        </div>
         <div class="loading" v-if="loading">
            <div class="loader-line"></div>
        </div>
    </div>
</template>
<style scoped>
    .list{
        display: flex;
        flex-direction: row;
        flex-wrap : wrap;
    }
    @media screen and (max-width: 620px){
        .list{
            justify-content: center;
        }
    }
    .loader-line {
            width: 200%;
            height: 5px;
            position: relative;
            overflow: hidden;
            background-color: #ddd;
        }

        .loader-line:before {
            content: "";
            position: absolute;
            left: -50%;
            height: 3px;
            width: 40%;
            background-color: blue;
            -webkit-animation: lineAnim 1s linear infinite;
            -moz-animation: lineAnim 1s linear infinite;
            animation: lineAnim 1s linear infinite;
            -webkit-border-radius: 20px;
            -moz-border-radius: 20px;
            border-radius: 20px;
        }

        @keyframes lineAnim {
            0% {
                left: -40%;
            }
            50% {
                left: 20%;
                width: 80%;
            }
            100% {
                left: 100%;
                width: 100%;
            }
        }
    .loading{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: transparent;
        z-index: 10000000;
    }
    .control{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 5px;
    }
    
    .pageSelect-container{
        min-width: 7rem;
    }
    .pageSelect{
      width: 50px;
      height: 100%;
      font-size: 0.9rem;
      margin: 10px;
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
    .button{
        min-width: 6rem;
    }
  .button:hover{
    font-weight: bold;
  }
  
</style>