<script>
export default {
    data(){
        return{
            searchPlayer: "",
            timeout: null,
            itemsPerPage: 15
        }
    },
    methods:{
        syncQueryString(){        
            const newParams = new URLSearchParams(window.location.search);
            newParams.set('player', this.searchPlayer);
            newParams.set('itemsPerPage', this.itemsPerPage);
            newParams.set('page', 1);
            
            window.history.replaceState({}, '', `${location.pathname}?${newParams.toString()}`);
            this.$emit('changed', 'someValue')
        },
        loadQueryString(){
            const params = new URLSearchParams(window.location.search);
            this.searchPlayer = params.get("player") || "";
            this.itemsPerPage = params.get("itemsPerPage") || 15;
        },
        debounceSearch(){
            if (this.timeout){
                clearTimeout(this.timeout); 
            } 
            
            this.timeout = setTimeout(() => {
                if(this.searchPlayer && !/^[a-zA-Z0-9_]{2,16}$/.test(this.searchPlayer)){
                    return;
                }
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
        <div>
            <span>每頁顯示</span>
            <select name="itemsPerPage" v-model="itemsPerPage" class="itemsPerPage" @change="syncQueryString()">
              <option>5</option>
              <option>10</option>
              <option>15</option>
              <option>25</option>
            </select>
            <span>個</span>
        </div>
        <input type="search" id="query" name="q"
            v-model="searchPlayer"
            placeholder="搜尋玩家名稱"
            maxlength="48"
            aria-label="透過玩家名稱搜尋紀錄"
            class="search"
            pattern="^[a-zA-Z0-9_]{2,16}$"
            @input="debounceSearch"
        >
    </div>
</template>

<style scoped>
    .itemsPerPage{
        padding: 3px;
        font-size: 0.85rem;
        margin-left: 10px;
    }
    .container-search{
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }
    .search{
        padding: 5px;
        height: 2rem;
        font-size: 1rem;
        border-radius: 10px;
        width: 30%;
        margin: 0;
    }

    input:invalid {
        border: red solid 2px;
        outline-color: red;
        box-shadow: 0 0 0.6rem #ff0000;
    }

</style>
