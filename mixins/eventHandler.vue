<script>
    import events from '~/assets/event.json';
    import match from '~/assets/images/match.svg';
    import drop from '~/assets/images/drop.svg';
    import bumper from '~/assets/images/bumper.svg';
    import cannon from '~/assets/images/cannon.svg';
    import boat from '~/assets/images/boat.svg';
    import snake from '~/assets/images/snake.svg';
    import maze from "~/assets/images/maze.svg";
    export default{
        data(){
            return{
                events: events,
                images: {
                    match: match,
                    bumper: bumper,
                    drop: drop,
                    boat: boat,
                    cannon: cannon,
                    snake: snake,
                    maze: maze
                    
                },
                eventMapping: new Map()
            }
        },
        created(){
            for(let i = 0; i<this.events.length;i++){
                this.eventMapping.set(events[i].title, events[i].id)
            }
            this.eventMapping.set("maze", "赤翠迷蹤");
        }
    }
</script>