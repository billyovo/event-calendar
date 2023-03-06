<script>
    import eventHandler from '~~/mixins/eventHandler.vue';
    import { RRule } from 'rrule';
    
    export default {
      mixins: [eventHandler],
      data(){
        return{
            emptyPaddingCell: 0,
            dateCells: 0,
            RRule: RRule,
            eventTime: new Date(1678107600000),
            occurence: {},

            weekdays: ["日", "一", "二", "三","四","五","六"],
            today: new Date(),
            selectedMonth: new Date(),
        }
      },
      methods:{
        fillEmptyCells(){
            
            const firstDay = new Date(this.selectedMonth.getFullYear(), this.selectedMonth.getMonth(), 1);
            
            this.emptyPaddingCell = firstDay.getDay();
        },
        fillDateCells(){
          const lastDay = new Date(this.selectedMonth.getFullYear(), this.selectedMonth.getMonth()+1,0);
          this.dateCells = lastDay.getDate();
          
        },
        changeMonth(month){
          this.selectedMonth = new Date(this.selectedMonth.getFullYear(), this.selectedMonth.getMonth()+month, 1);
          this.fillEmptyCells();
          this.fillDateCells();
          this.getOccurence();
        },
        getOccurence(){
          this.occurence = {};
          for(let i = 0;i<this.events.length;i++){
            const rule = RRule.fromString(this.events[i].rrule);
            const occurence = rule.between(this.selectedMonth, new Date(this.selectedMonth.getFullYear(), this.selectedMonth.getMonth()+1, 0), true);

            for(let j = 0;j<occurence.length;j++){
              const date = occurence[j];
              this.occurence[date.getDate()] = {
                title: this.events[i].title,
                imageurl: this.images[this.events[i].id]
              }
            }
          }
        }
      },
      mounted(){
        //make sure it's first day of the month to prevent any bug 
        this.selectedMonth = new Date(this.selectedMonth.getFullYear(), this.selectedMonth.getMonth(), 1);

        this.fillEmptyCells();
        this.fillDateCells();
        this.getOccurence();
      },
    }
</script>

<template>
  <main>
  {{`${eventTime.getHours()}:${eventTime.getMinutes()}`}}
    <header class="tool-bar">
      <button @click="changeMonth(-1)" :style="(today-selectedMonth) < 0 ? null : 'visibility: hidden'" class="control-button"><i class="fa-solid fa-arrow-left"></i>上一頁</button>
      <h2 class="selected">{{selectedMonth.getFullYear()}} / {{selectedMonth.getMonth()+1}}</h2>
      <button @click="changeMonth(1)" :style="(selectedMonth-today) < 31556952000 ? null : 'visibility: hidden'" class="control-button">下一頁<i class="fa-solid fa-arrow-right"></i></button>
    </header>
    
      <section class="container">
          <div v-for="weekday in weekdays" :key="weekday" class="weekday wrapper">
              <h3 class="title">{{weekday}}</h3>
          </div>
          <div class="wrapper cell empty" v-for="index in emptyPaddingCell" :key="index"></div>
          <div class="wrapper cell" v-for="index in dateCells" :key="index">
            <div>
              <span :style="(today.getFullYear() === selectedMonth.getFullYear() && today.getMonth() === selectedMonth.getMonth()) && (today.getDate() === index)? 'color: red' : null">{{index}}</span>
              <div v-if="occurence[index]" class="wrapper-content">
                <span class="wrapper-content-title">{{occurence[index].title}}</span>
                <img 
                    :src="occurence[index].imageurl" 
                    :alt="occurence[index].title+' 活動圖示'" 
                    :title="occurence[index].title+' 活動圖示'" 
                    height="40" 
                    width="40">
              </div>
            </div>
          </div>
        </section>
      <section> 
        <div class="mobile-hints">
          <div v-for="event in events" :key="event.id" class="mobile-hints-line">
            <img :src="images[event.id]" :alt="event.title+ '活動圖示'" height="25" width="25"><span> = {{event.title}}</span>
          </div>
        </div>
    </section>
    </main>
</template>

<style scoped>
    .container{
        padding: 1px;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        background-color: var(--color-disabled);
        grid-gap: 1px;
    }
    .tool-bar{
      display: flex;
      justify-content: space-between;
      align-content: center;
      width: 100%;
      margin: 0 auto;
      max-width: 1050px
    }
    .control-button{
      background: none;
      border: none;
      color: var(--shade-darken3);
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      font-size: 1.1rem;
      cursor: pointer;
    }

    .weekday{
        text-align: center;
    }
    .wrapper{
      box-sizing: border-box;
      background-color: var(--color-secondary);
    }
    .wrapper-content{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 10px;
    }
    .wrapper-content-title{
      margin-bottom: 5px;
    }
    .mobile-hints{
      margin-top: 15px;
      margin-left: 15px;
      display: none;
      width: 100%;
    }
    .mobile-hints-line{
      margin-right: 15px;
      margin-bottom: 10px;
    }
    @media screen and (max-width: 550px){
      .wrapper-content-title{
        display: none;
      }
      .mobile-hints{
        display: flex;
        flex-wrap: wrap;
      }
    }
    .cell{
      min-height: 50px;
      min-width: 40px;
    }
    .empty{
      background-color: var(--color-disabled);
    }
    .title{
        font-size: 0.9rem;
        margin: 0px;
        padding: 10px;
    }
</style>
<script setup>
  definePageMeta({
    layout: 'default'
  })
</script>
