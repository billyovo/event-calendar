<template>
    <div>
        <Loader v-if="loading" :aria-busy="loading" :aria-hidden="!loading"/>
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
                                    :aria-hidden="total === record.length ? 'true' : false"
                                    ref="endList" 
                                />
                                
                        </div>
                        <button class="load-more" 
                            @click="async ()=> await fetchRecord()"
                            :style="total === record.length ? 'display: none' : null"
                            :aria-hidden="total === record.length ? 'true' : false"
                        >
                            你是不是滾動太快才看到我或是瀏覽器版本太舊? 點我載入更多
                        </button>
                        
                </main>
                <Modal v-model="isOpened" class="mobile"><FilterList style="height: 100vh"/></Modal>
                <FloatingButton @click="toggleModal" :style="`background-color: ${isOpened ? 'var(--color-danger)' : 'var(--color-main-sub)'}`" class="mobile">
                    <font-awesome-icon :icon="`fa-solid ${isOpened ? 'fa-xmark' : 'fa-filter'}`" size="xl"/>
                </FloatingButton>
        </div>
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
    .load-more{
        background-color: var(--color-secondary);
        color: var(--color-text);
        border-radius: 10px;
        padding: 30px 0px;
        width: 100%;
    }
</style>

<script>
    import eventHandler from '~~/mixins/eventHandler.vue';

    export default{
        mixins: [eventHandler],
        methods:{
            toggleModal(){
                this.isOpened = !this.isOpened;
            },           
            async fetchRecord(isFirstFetch = false){
                const query = new URLSearchParams();
                if(!isFirstFetch){
                    if((this.$route.query.type === "record" || !this.$route.query.type) && this.record[this.record.length-1]?._id){
                        query.append("before", this.record[this.record.length-1]?._id);
                    }
                    else{
                        query.append("page", this.page);
                    }   
                }
                if(this.$route.query.dateBefore){
                    query.append("dateBefore", this.$route.query.dateBefore);
                }
                try{
                    this.loading = true;
                    const res = await fetch(this.API_ENDPOINT+"?"+query.toString());
                    if(res.status === 429){
                        alert("你的請求是不是太快了？請暫時休息一下, 稍後再試。");
                        return;
                    }
                    if(res.status === 500){
                        alert("伺服器發生錯誤 :( 請稍後再試。");
                        return;
                    }
                    const data = await res.json();
                    if(isFirstFetch){
                        this.total = data.total ?? 0;
                     }
                    this.record = isFirstFetch ? [...data.rows] : [...this.record, ...data.rows];
                }
                catch(error){
                    alert("發生錯誤，請稍後再試。");
                }
                finally{
                    this.loading = false;
                }
                
            }
        },
        data(){
            return{
                total: 0,
                page: 1,
                record: [],
                isOpened: false,
                observer: null,
                loading: false
            }
        },
        watch:{
            async '$route.query'(){

                await this.fetchRecord(true);
                
                window.scrollTo(0,0);
                this.page = 1;
            }
        },
        async created(){
            await this.fetchRecord(true);
        },
        async mounted(){
            
            const endList = document.getElementsByClassName("skeleton-container")[0];
            const observer = new IntersectionObserver(async (entry)=>{
              if(entry[0].isIntersecting){
                await this.fetchRecord();
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
                let endpoint = this.$config.public.API_URL+"/";
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
