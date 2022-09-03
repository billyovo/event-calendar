<script>
export default {
    data(){
        return{
            searchPlayer: "",
            timeout: null,
        }
    },
    methods:{
        syncQueryString(){        
            const newParams = new URLSearchParams(window.location.search);
            newParams.set('player', this.searchPlayer);
            window.history.replaceState({}, '', `${location.pathname}?${newParams.toString()}`);
        },
        loadQueryString(){
            const params = new URLSearchParams(window.location.search);
            this.searchPlayer = params.get("player") || "";
        },
        debounceSearch(){
            if (this.timeout){
                clearTimeout(this.timeout); 
            } 
            
            this.timeout = setTimeout(() => {
                this.syncQueryString();
            }, 500);
        }
    },
    mounted(){
        this.loadQueryString();
    }
}
</script>


<template>
    <div class="container-search">
        <input type="search" id="query" name="q"
            v-model="searchPlayer"
            placeholder="搜尋玩家名稱"
            maxlength="48"
            aria-label="透過玩家名稱搜尋紀錄"
            class="search"
            @input="debounceSearch"
        >
    </div>
</template>

<style scoped>
    .container-search{
        display: flex;
        justify-content: right;
    }
    .search{
        padding: 5px;
        height: 2rem;
        font-size: 1rem;
        border-radius: 10px;
        width: 30%;
        margin: 0;
    }
</style>