<script>
    import events from '~/assets/event.json';
    import brain from '~/assets/images/brain.svg';
    import drop from '~/assets/images/drop.svg';
    import pig from '~/assets/images/pig.svg';
    import lock from '~/assets/images/lock.svg';
    import llama from '~/assets/images/llama.svg';
    import snake from '~/assets/images/snake.svg';
    export default{
        data(){
            return{
                events: events,
                images: {
                    match: brain,
                    bumper: pig,
                    drop: drop,
                    boat: llama,
                    cannon: lock,
                    snake: snake
                    
                },
                eventMapping: new Map()
            }
        },
        created(){
            for(let i = 0; i<this.events.length;i++){
                this.eventMapping.set(events[i].title, events[i].id)
            }
        }
    }
</script>