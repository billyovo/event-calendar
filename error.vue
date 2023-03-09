<template>
    <NuxtLayout name="default">
        <main class="container error-container">
            <h2>你好啊玩家們，沒想到你可以到這個什麼都沒有的地方來呢！不過就到這裡為止了。接下來就由我閃耀的小花來做你的對手！</h2>
            <div class="sleepyrose-container">
                <img src="~/assets/images/sleepyrose.png" height="500" width="500" class="sleepy">
            </div>
            
        </main>
    </NuxtLayout>
</template>
<style>
    .error-container{
        display: flex;
        flex-direction: column;
        align-items: center;
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
        max-width: 200px;
        height: auto;
        animation: rainbow 1.5s steps(36) infinite, shake 0.15s infinite;
    }


    @keyframes rainbow {
     from {
            filter:hue-rotate(10deg);
        }
      to {
            filter:hue-rotate(360deg);
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