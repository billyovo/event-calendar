<script>
import FilterList from './FilterList.vue';
import SearchBar from './SearchBar.vue';
import PlayerRecordList from './PlayerRecordList.vue';

export default {
    data(){
        return{
            mobileFilter: false,
        }
    },
    components:{
        FilterList, SearchBar, PlayerRecordList
    },
    methods:{
        notifyList(){
            this.$refs.list.resetPage();
            this.$refs.list.getRecord();
        }
    }
}
</script>


<template>
    <main class="page-container">
        <div class="container">
            
            <div class="filter">
                <FilterList @changed="notifyList"/>
            </div>
            
            <div>
                <SearchBar @changed="notifyList"/>
                <PlayerRecordList ref="list"/>
            </div>     
        </div>

        <div class="mobile-modal" v-if="mobileFilter">
            <div class="mobile-modal-inner">
                <FilterList @changed="notifyList"/>
            </div>
        </div>

        <div class="floating" :style="'top: 90vh;' +(mobileFilter ? 'background: red' : null)" @click="mobileFilter = !mobileFilter">
            <i :class="'fa-solid fa-xl '+(mobileFilter ? 'fa-xmark' : 'fa-filter')"></i>
        </div>   
    </main>
</template>

<style scoped>
    
    .filter{
        margin-right: 10%;
    }
    .container{
        display: grid;
        grid-template-columns: 20% 80%;
        width: 90%;
        padding: 50px;
    }
    .floating{
        background: green;
        width: 70px;
        height: 70px;
        color: white;
        position: absolute;
        right: 20px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100000;
        display: none;
        
    }
    .mobile-modal{
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        background: white;
        z-index: 100000;
        margin: 50px;
        overflow-y: scroll;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        transform: scale(1.2);
        
    }
    .mobile-modal-inner{
        margin: 50px;
        overflow-y: scroll;
    }
    @media screen and (max-width: 800px){
        .filter{
            display: none;
        }
        .container{
            display: block;
            width: 100%;
        }
        .floating{
            display: flex;
        }
    }
    .page-container{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 15px;
    }
</style>