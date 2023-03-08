<template>
    <div class="wrapper">
        
            <FilterList class="desktop-filter"/>
            <main>
                    <span>找到{{ total }}個紀錄</span>      
                        <div class="record-container">
                            <PlayerRecordItem
                                v-for="(item, index) in record"
                                :key="index"
                                :data="item"
                                :imageurl="images[eventMapping.get(item.event)]"
                        
                            />
                            <PlayerRecordSkeleton 
                                :style="total === record.length ? 'display: none' : null"
                            ref="endList" 
                        />
                    </div>
            </main>
            <Modal v-model="isOpened" class="mobile"><FilterList style="height: 100vh"/></Modal>
            <FloatingButton @click="toggleModal" :style="`background-color: ${isOpened ? 'var(--color-danger)' : 'var(--color-main-sub)'}`" class="mobile">
                <font-awesome-icon :icon="`fa-solid ${isOpened ? 'fa-xmark' : 'fa-filter'}`" size="xl"/>
            </FloatingButton>
    </div>
</template>
<style scoped>
    .wrapper{
        display: grid;
        grid-template-columns: 2fr 8fr;
        padding: 30px;
        column-gap: 50px;
    }
    .record-container{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        column-gap: 20px;
    }
    .mobile{
        display: none;
    }
    @media screen and (max-width: 1000px) {
        .desktop-filter{
            display: none;
        }
        .wrapper{
            grid-template-columns: 1fr;
        }
        .mobile{
            display: block;
        }
    }
</style>

<script>
    import configHandler from '~~/mixins/configHandler.vue';
    import eventHandler from '~~/mixins/eventHandler.vue';

    export default{
        mixins: [configHandler, eventHandler],
        methods:{
            toggleModal(){
                this.isOpened = !this.isOpened;
            },           
        },
        data(){
            return{
                total: 0,
                page: 1,
                record: [],
                isOpened: false,
                observer: null
            }
        },
        watch:{
            async '$route.query'(){
                const res = await fetch(this.API_ENDPOINT+ (this.$route.query.dateBefore ? `?dateBefore=${this.$route.query.dateBefore}` : ""));
                const data = await res.json();
                this.total = data.total ?? 0;
                this.record = [...data.rows];
                window.scrollTo(0,0);
                this.page = 1;
            }
        },
        async mounted(){
            const res = await fetch(this.API_ENDPOINT);
            const data = await res.json();
            this.total = data.total ?? 0;
            this.record = [...this.record, ...data.rows];

            const endList = document.getElementsByClassName("skeleton-container")[0];
            const observer = new IntersectionObserver(async (entry)=>{
              if(entry[0].isIntersecting){
                const res = await fetch(this.API_ENDPOINT+`/?before=${this.record[this.record.length-1]?._id}&page=${this.page}`+ (this.$route.query.dateBefore ? `&dateBefore=${this.$route.query.dateBefore}` : ""));
                const data = await res.json();
                this.record = [...this.record, ...data.rows];
                this.page++;
              }
            });
            this.observer = observer
            this.observer.observe(endList);
        },
        beforeUnmount(){
            this.observer.disconnect();
        },
        computed:{
            API_ENDPOINT(){
                let endpoint = this.API_URL+"/";
                endpoint += (this.$route.query.type || "record") + "/";
                endpoint += (this.$route.query.server || "all") + "/";
                endpoint += (this.$route.query.event || "all");
                if(this.$route.query.name){
                    endpoint += "/"+this.$route.query.name;
                }
                return endpoint;
            }
        }
    }
</script>

<script setup>
  definePageMeta({
    layout: 'default'
  })
</script>