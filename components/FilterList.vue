<template>
    <aside class="list-wrapper">
        <h2 class="title">篩選</h2>
        <div class="divider"/>
        <h3>類別</h3>
        <ChipGroup v-model="type">
            <Chip outlined value="record">勝利紀錄</Chip>
            <Chip outlined value="count">勝利次數</Chip>
        </ChipGroup>
        <div class="divider"/>
        <h3>伺服器</h3>
        <ChipGroup v-model="server">
            <Chip outlined value="all">全部</Chip>
            <Chip outlined value="survival">生存</Chip>
            <Chip outlined value="skyblock">空島</Chip>
        </ChipGroup>
        <div class="divider"/>
        <h3>活動</h3>
        <ChipGroup v-model="eventSelection">
            <Chip outlined value="all">
                <span> 全部</span>
            </Chip>
            <Chip outlined v-for="event in events" :key="event.id" :value="event.id">
                <img :src="images[event.id]" height="20" width="20" style="margin-right: 5px">
                <span>{{ event.title }}</span>
            </Chip>
        </ChipGroup>
        <div class="divider"/>
        <h3>日期</h3>
        <Datepicker 
            v-model="date"
            :max-date="new Date()"
            :min-date="new Date(2020,7,12)"
            format="yyyy-MM-dd"
            model-type="yyyy-MM-dd"
            position="right"
            select-text="選取"
            cancel-text="取消"
            locale="zh-tw"
            :day-names="['日','一','二','三','四','五','六']"
            :show-now-button="true"
            now-button-label="今天"
            :hide-navigation="['time', 'calendar']"
            :clearable="false"
            :dark="$colorMode?.value === 'dark'"
        />

        <span>之前</span>
        <div class="divider"/>
        <h3>玩家名稱</h3>
        <input type="search" v-model="name" placeholder="輸入名稱..." class="text-input">
        <span style="margin-top: 30px">頭像提供: <a href="https://crafatar.com">Crafatar</a></span>
        <span style="margin-top: 20px"><a href="/docs">點我查看小遊戲紀錄API規格</a></span>
    </aside>
</template>
<script>
    import eventHandler from '~~/mixins/eventHandler.vue';
    import {debounce} from '../utils/debounce.js';

    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'

    export default{
        components:{ Datepicker},
        mixins:[eventHandler],
        data(){
            return{
                server: this.$route.query.server || "all",
                eventSelection: this.$route.query.event || "all",
                type: this.$route.query.type || "record",
                name: this.$route.query.name || "",
                date: this.$route.query.dateBefore || new Date().toISOString().substring(0,10),
            }
        },
        watch:{
            server: function(){
                this.$router.push({query: { ...this.$route.query, server: this.server}});
            },
            eventSelection: function(){
                this.$router.push({query:{...this.$route.query, event: this.eventSelection}});
            },
            type: function(){
                this.$router.push({query:{...this.$route.query, type: this.type}});
            },
            name: debounce(function () {
                    if(!this.name){
                        let query = {...this.$route.query};
                        delete query.name;
                        this.$router.push({query: query});
                    }
                    else{
                        this.name = this.name.trim();
                        this.$router.push({query:{...this.$route.query, name: this.name}});
                    }
                    
                           
            }, 1000),
            date: function(){
                this.$router.push({query:{...this.$route.query, dateBefore: this.date}});
            }

        }
    }
</script>
<style scoped>
    .list-wrapper{
        position: sticky;
        display: flex;
        flex-direction: column;
        top: 0px;
        height: 95vh;
        align-self: start;
        overflow: auto;
    }
    :host{
        display: block;
    }

    .divider{
        height: 2px;
        margin-top: 15px;
        border-top: 1px solid black;
    }
    .text-input{
        padding: 5px;
        font-size: 1.0rem;
        border-radius: 10px;
        background-color: var(--color-secondary);
        color: var(--color-text);
        border: none;
    }
</style>