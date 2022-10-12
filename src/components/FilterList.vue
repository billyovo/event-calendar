<script>
import event from '../assets/event.json';

export default {
    data(){
        return{
            events: event,

            server: "all",
            selectedEvent: "all",
            selectedType: "record",
        }
    },
    methods:{
        syncQueryString(){        
            const newParams = new URLSearchParams(window.location.search);
            newParams.set('server', this.server);
            newParams.set('event', this.selectedEvent);
            newParams.set('type', this.selectedType);

            //we reset the page number when filter changes
            newParams.set('page', 1);
            window.history.replaceState({}, '', `${location.pathname}?${newParams.toString()}`);
            this.$emit('changed', 'someValue');
        },
        loadQueryString(){
            const params = new URLSearchParams(window.location.search);
            this.server = params.get("server") || "all";
            this.selectedEvent = params.get("event") || "all";
            this.selectedType = params.get("type") || "record";
        }
    },
    mounted(){
        this.loadQueryString();
    }
}
</script>

<template>
    
<div>
    <h2 class="title">篩選</h2>
    
    <div class="separator-line"/>
    <h3>伺服器</h3>

    <div class="radio-line">
        <input type="radio" name="server" value="all" id="all" v-model="server" @change="syncQueryString"/>
        <label for="all">全部</label>
    </div>
    <div class="radio-line">
        <input type="radio" name="server" value="survival" id="survival" v-model="server" @change="syncQueryString"/>
        <label for="survival"><img src="../../public/images/survival.svg/" alt="生存伺服器圖示" width="30" height="30" class="radio-icon">生存</label>
    </div>
    <div class="radio-line">
        <input type="radio" name="server" value="skyblock" id="skyblock" v-model="server" @change="syncQueryString"/>
         <label for="skyblock"><img src="../../public/images/skyblock.svg/" alt="空島伺服器圖示" width="30" height="30" class="radio-icon">空島</label>
    </div>

    <div class="separator-line"/>
    <h3 class="title">活動</h3>
    <div class="radio-line">
        <input type="radio" name="event" value="all" id="all-event" checked v-model="selectedEvent" @change="syncQueryString">
        <label for="all-event">全部</label>
    </div>
    
    <div class="radio-line" v-for="event in events" :key="event">
        <input type="radio" name="event" :value="event.id" :id="event.id" v-model="selectedEvent" @change="syncQueryString">
                       <label :for="event.id"><img :src="event.imageurl" :alt="event.title+'活動圖示'" width="30" height="30" class="radio-icon">{{event.title}}</label>
    </div>
        
    <div class="separator-line"/>
    <h3 class="title">類型</h3>
    <div class="radio-line">
        <input type="radio" name="type" value="record" id="record" checked v-model="selectedType" @change="syncQueryString">
        <label for="record">勝利紀錄</label>
    </div>
    <div class="radio-line" style="padding-bottom: 30px">
        <input type="radio" name="type" value="count" id="count" v-model="selectedType" @change="syncQueryString">
         <label for="count">勝利次數</label>
    </div>
    
</div>
</template>

<style scoped>
    
    .title{
        margin: 0;
    }
    .radio-line{
        margin-top: 15px;
        display: flex;
        flex-direction: row;
        align-content: center;

        text-align: center;
        
    }
    .radio-icon{
        margin-right: 10px;
    }
 
    .separator-line{
        height: 1px;
        width: 100%;
        background-color: gray;
        margin: 10px 0px;
    }
</style>
