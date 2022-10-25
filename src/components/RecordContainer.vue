<script>
import FilterList from './FilterList.vue';
import SearchBar from './SearchBar.vue';
import PlayerRecordList from './PlayerRecordList.vue';

export default {
    props: {
        API_URL: String,
      },
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
                <div class="desktop">
                    <SearchBar @changed="notifyList"/>
                </div>
                <PlayerRecordList ref="list" :API_URL="API_URL"/>
            </div>     
        </div>

        <div class="mobile-modal" v-if="mobileFilter">
            <div class="mobile-modal-inner">
                <FilterList @changed="notifyList"/>
                <SearchBar @changed="notifyList"/>
            </div>
        </div>

        <div class="floating" :style="'top: 80vh;' +(mobileFilter ? 'background: red' : null)" @click="mobileFilter = !mobileFilter">
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
        position: fixed;
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
        top: -50px;
        width: 100vw; /* viewport width */
        height: 100vh; /* viewport height */
        overflow-y: scroll;
        overflow-x: hidden;
        background: white;
        z-index: 100000;
        margin: 50px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

        
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
        .desktop{
            display: none;
        }
    }
    .page-container{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 15px;
    }
</style>