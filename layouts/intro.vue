<script>
    import eventHandler from '~~/mixins/eventHandler.vue';

    export default{
        mixins: [eventHandler],
    }
</script>
<template>
        <main class="container">
            <header class="intro-nav">
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
            <section style="margin-top: 50px">
                <slot name="reward"/>
            </section>
        </main>
</template>

<style>
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
    }
</style>
