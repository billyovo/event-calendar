<script>
    import eventHandler from '~~/mixins/eventHandler.vue';


    export default{
        mixins: [eventHandler],
        data(){
            return{
                isOpened: false
            }
        }
    }
</script>
<template>
        <main class="container">
            <header class="intro-nav desktop-intro">
                <Chip to="/introduction">
                    <span>介紹</span>
                </Chip>
                <Chip
                    v-for="event in events" 
                    :key="event.id" 
                    :to="`/introduction/${event.id}`"
                >
                    <img :src="images[event.id]" height="20" width="20" style="margin-right: 5px" :alt="`${event.title}的活動圖示`">
                    <span>{{event.title}}</span>
                </Chip>
                <Chip to="/introduction/maze">
                    <img src="~/assets/images/maze.svg" height="20" width="20" style="margin-right: 5px" alt="赤翠迷蹤的活動圖示">
                    <span>赤翠迷蹤</span>
                </Chip>

            </header>
            <section class="event-img-container">
                <slot name="event"/>
            </section>
            <section style="margin: 30px 0px" class="event-img-container">
                <slot name="reward"/>
            </section>

            <FloatingButton class="mobile-intro" style="background-color: var(--color-main-sub);" @click="()=>isOpened = !isOpened">
                <font-awesome-icon icon="fa-solid fa-book" size="xl" v-if="$route.name === 'introduction'"/>
                <img v-else :src="images[$route.name]" height="30" width="30" :alt="`正在觀看${eventMapping.get($route.name)}的介紹`">
            </FloatingButton>
            <Modal v-model="isOpened" class="mobile-intro">
                <div class="modal-content">
                    <IconNav to="/introduction">
                        <font-awesome-icon icon="fa-solid fa-book" style="width: 45px; height: 45px; margin-bottom: 5px"></font-awesome-icon>
                        <span>介紹</span>
                    </IconNav>
                    <IconNav 
                        v-for="event in events" 
                        :key="event.id" 
                        :to="`/introduction/${event.id}`"
                    >
                        <img :src="images[event.id]" height="45" width="45" :alt="`${event.title}的活動圖示`">
                        <span>{{event.title}}</span>
                    </IconNav>
                    <IconNav to="/introduction/maze">
                        <img :src="images.maze" height="45" width="45" alt="赤翠迷蹤的活動圖示">
                        <span>赤翠迷蹤</span>
                    </IconNav>
                </div>
            </Modal>
        </main>
</template>

<style>
    .modal-content{
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
    }
    .intro-chip-base.router-link-exact-active {
        background-color: rgb(46,204,113);
    }
    .intro-nav{
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(220px, 1fr));
        gap: 15px;
        margin-bottom: 15px;
    }
    .intro-nav :first-child {
        grid-column: 1 / -1;
        margin: 0 auto;
    }  
    .intro-chip{
        text-decoration: none;
        color: white;
        background-color: var(--shade-darken3);
        padding: 5px 20px;
        border-radius: 15px;
        margin: 10px;
        text-align: center;
    }
    .event-img-container > img{
        height: 100%;
        width: 100%;
        display: block;
    }
    .event-img-container{
        width: 100%;
        height: auto;
        padding-top: 30px;
    }
    .mobile-intro{
        display: none;
    }
    @media  screen and (max-width: 1000px) {
        .desktop-intro{
            display: none;
        }
        .mobile-intro{
            display: flex;
        }
    }
</style>
