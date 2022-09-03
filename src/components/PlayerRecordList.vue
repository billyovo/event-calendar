<script>
    import PlayerRecordItem from './PlayerRecordItem.vue';
    import event from '../assets/event.json'

    export default {
        data(){
            return{
                records: [],
                route: null,
                events: event,
                eventMap: new Map(),

                total: 0,
                itemsPerPage: 10,
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
                this.currentPage += page;
                if(this.currentPage < 0){
                  this.currentPage = 0;
                }
                
                await this.getRecord();
            },
            async getRecord(){
                const res = await fetch(this.constructURL());
                const data = await res.json();

                this.records = data?.rows || [];
                this.paginate(data?.total || 0, this.currentPage, this.itemsPerPage);
            },
            constructURL(){
                const params = new URLSearchParams(window.location.search);

                const type = params.get("type") || "record";
                const server = params.get("server") || "all";
                const event = params.get("event") || "all";
                const player = params.get("player") || "";
                const limit = params.get("itemsPerPage") || 10;
                return `https://minigame-api.letsdream.today/${type}/${server}/${event}${(player ? "/"+player : "")}?page=${this.currentPage}&limit=${this.itemsPerPage}`;
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
            console.log(window.location.search);
            await this.getRecord();
        },
        watch:{
            queryStrings(){
                console.log("test");
            }
        }

    }
</script>

<template>
    <div>
        <div class="control">
            <button @click="changePage(-1)" class="button" :style="'visibility:'+((currentPage <= 1) ? 'hidden' : 'visible')">
                <i class="fa-solid fa-arrow-left">上一頁</i>
                </button>

                <div>
                  <select v-model="currentPage" class="pageSelect" @change="changePage(0)">
                    <option v-for="index in lastPage" :key="index" :value="parseInt(index)">{{index}}</option>
                  </select>
                  <span>/{{lastPage}}頁</span>
                </div>

                <button @click="changePage(1)" class="button" :style="'visibility:'+((currentPage >= lastPage) ? 'hidden' : 'visible')">
                  下一頁<i class="fa-solid fa-arrow-right"></i>
                </button>
        </div>
        <div class="list">
            <PlayerRecordItem v-for="(record, index) in records" :key="index" :data="record" :imageurl="eventMap.get(record.event)"/>
            <span v-if="total===0">沒有任何紀錄 :( </span>
        </div>
    </div>
</template>
<style scoped>
    .list{
        display: flex;
        flex-direction: row;
        flex-wrap : wrap;
    }
    .control{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 5px;
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
  .button:hover{
    font-weight: bold;
  }
  
</style>