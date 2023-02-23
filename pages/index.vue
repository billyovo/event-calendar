<script setup>
    definePageMeta({
        layout: false
    })
</script>
<template>
    <div>
        <main class="landing">
            <div class="appear nav-bar"><NavBar/></div>

            <div class="slogan">
                <div/>
                <h1 class="appear slogan-title">
                    小遊戲
                </h1>   
                <h2 class="appear tips">
                    星期一、三、五、六晚上舉行
                </h2>
                <div class="slide avatar">
	    		    <div class="bubble-container">
	    		        <div class="bubble bubble-bottom-left">你好嗎</div>
	    		    </div>						
	    		    <img src="~/assets/images/avatar.png" alt="小妹的半身像" class="slide avatar"/>
                
	    	    </div>
            </div>

        </main>
        <section class="container">
            <h1 class="header">通知</h1>
            <div class="center-container">
                <NewsList hide-control :limit="3"/>
            </div>
        </section>
    </div>
</template>

<style scoped>
.landing{
    background: url("~/assets/images/background.webp");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    display: grid;
    grid-template-rows: 100px 100fr;
    opacity: 0.85;
    overflow: hidden;
}
.slogan{
    display: grid;
    height: 100%;
    grid-template-rows: repeat(3, 1fr);
    justify-content: center;
    text-align: center;
}

.avatar{
    width: clamp(100px, 100%, 100%);
    display: flex;
    align-items: flex-end;
}
.bubble {
    position: absolute;
    top: -50px;
    right: 50px;
    font-size: 1.5rem;
    background: #fff;
    border-radius: 40px;
    padding: 25px;
    text-align: center;
    z-index: 10000;
    
    animation: speech-appear 0.2s ease-in-out;
    display: none;
}

.bubble-bottom-left:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 24px solid #fff;
    border-right: 12px solid transparent;
    border-top: 12px solid #fff;
    border-bottom: 20px solid transparent;
    left: 32px;
    bottom: -24px;
}   
.slide{
    position: relative;
    animation: slide 0.75s ease-in-out, appear 0.5s ease-in-out;
}
.avatar:hover .bubble{
	display: block;
}
.avatar:active .bubble{
	display: block;
}
.tips{
    color: var(--highlight);
}
.slogan-title{
    color: hsl(10, 21%, 95%);
}
.appear{
    opacity: 0;
    animation: appear 1s ease-in-out forwards;
    animation-delay: 0.5s;
}
.slide{
    position: relative;
    animation: slide 0.75s ease-in-out, appear 0.5s ease-in-out;
}
.avatar:hover .bubble{
    display: block;
}
.avatar:active .bubble{
    display: block;
}
.header{
    color: var(--shade-darken3);
    font-weight: bold;
    display: block;
}
.header-container{
    display: flex;
    justify-content: space-between;
}

.mobile{
    display: none;
    margin: 50px 0px;
}
@media screen and (max-width: 1000px){
    .desktop{
        display: none;
    }
    .mobile{
        display: flex;
    }
}
.main{
    color: black;
}
.header{
	color: var(--shade-darken3);
	font-weight: bold;
}

@keyframes speech-appear{
    from{
        top: 200px;
    }
    to{
        top: -50px;
    }
}

@keyframes slide{
    from{
        top: 100px;
    }
    to{
        top: 0px;
    }
}
@keyframes appear {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}
</style>


<script>

</script>