<template>
    <NuxtLayout name="default">
        <main class="container error-container">
            <h2 v-if="hp > 0">你好啊玩家們，沒想到你可以到這個什麼都沒有的地方來呢！不過就到這裡為止了。接下來就由我閃耀的小花來做你的對手！</h2>
            <h2 v-else>你竟然打敗了閃耀的小花，並找到了回去的路！</h2>
            <div class="hp-bar" ref="hp-bar" :style="`width: ${hpBarWidth}; ${hp===1000 ? 'visibility: hidden' : null}`" v-if="hp > 0">

                <div class="hp-bar-inner" id="hp-bar">
                                    {{ hp}}
                </div>
            </div>
            <div class="sleepyrose-container" ref="sleepy" v-if="hp > 0">
                <div class="sleepy-hit" @click="generateHit"></div>
                <img src="~/assets/images/sleepyrose.png" height="500" width="500" class="sleepy">
            </div>
            <div v-else>
                <NuxtLink to="/" class="home">回到主頁</NuxtLink>
            </div>
            
        </main>
        
    </NuxtLayout>
</template>
<style>
    .error-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
    }

    .sleepyrose-container{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 30px 0px;
    }
    .sleepy{
        width: 100%;
        position: absolute;
        max-width: 200px;
        height: auto;
        animation: rainbow 1.5s steps(36) infinite, shake 0.15s infinite;
        z-index: 100;
    }

    .sleepy-hit{
        position: absolute;
        width: 100%;
        max-width: 200px;
        height: 200px;
        z-index: 10000;
    }

    .hit{
        color: red;
        position: absolute;
        z-index: 1000;
        font-size: 1.5rem;
    }

    .hp-bar{
        width: 100%;
        border-radius: 20px;
    }
    .hp-bar-inner{
        width: 100%;
        padding: 5px;
        background-color: red;
        border-radius: 10px;
    }
    .home{
        padding: 30px;
    }
    @keyframes rainbow {
     from {
            filter: hue-rotate(10deg);
        }
      to {
            filter: hue-rotate(360deg);
        }
    }

    @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        10% { transform: translate(-1px, -2px) rotate(-1deg); }
        20% { transform: translate(-3px, 0px) rotate(1deg); }
        30% { transform: translate(3px, 2px) rotate(0deg); }
        40% { transform: translate(1px, -1px) rotate(1deg); }
        50% { transform: translate(-1px, 2px) rotate(-1deg); }
        60% { transform: translate(-3px, 1px) rotate(0deg); }
        70% { transform: translate(3px, 1px) rotate(-1deg); }
        80% { transform: translate(-1px, -1px) rotate(1deg); }
        90% { transform: translate(1px, 2px) rotate(0deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); }
    }
</style>

<script>
    export default{
        data(){
            return{
                hit: null,
                interval: null,
                hp: 1000,
                hpBar: null
            }
        },
        methods:{
            generateHit(event){
                this.hp--;
                const hit = document.createElement('span');
                hit.classList.add('hit');
                hit.innerText = '-1';
                hit.style.top = `${event.clientY}px`;
                hit.style.left = `${event.clientX}px`;
                
                this.$refs.sleepy.appendChild(hit);

                setTimeout(() => hit.remove(), 2000);

            },
            moveHits(){
                const hits = document.getElementsByClassName('hit');
                for(let i = 0; i < hits.length; i++){
                    hits[i].style.top = `${parseInt(hits[i].style.top) - 10}px`;
                }
            }
        },
        async mounted(){
            this.interval = setInterval(this.moveHits, 250);
        },
        beforeUnmount(){
            clearInterval(this.interval);
        },
        computed:{
            hpBarWidth(){
                return this.hp/1000*100 + '%';
            }
        }
    }
</script>
