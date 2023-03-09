<template>
    <div>
        <Html>
          <Head>
            <Title>{{"活動介紹 - 繽紛飛天蛇"}}</Title>
            <Meta property="og:description" content="遊戲開始前跳到飛天蛇上
                遊戲開始後飛天蛇會開始移動
                想辦法繼續留在蛇上, 最後一人為勝者
            "/>
            <Meta property="twitter:description" content="遊戲開始前跳到飛天蛇上
                遊戲開始後飛天蛇會開始移動
                想辦法繼續留在蛇上, 最後一人為勝者"
            />
            <Meta name="description" content="遊戲開始前跳到飛天蛇上
                遊戲開始後飛天蛇會開始移動
                想辦法繼續留在蛇上, 最後一人為勝者"
            />
            <Meta property="og:image" content="https://minigame.letsdream.today/images/snake.png"/>
            <Meta property="twitter:image" content="https://minigame.letsdream.today/images/snakee.png"/>
          </Head>
        </Html>

        <NuxtLayout name="intro">
            <template #event>
                <img src="~/assets/images/banner/snake_arena.png" alt="繽紛飛天蛇遊戲場地">
                <div>
                    <h2>遊戲規則:</h2>
                    <p>遊戲開始前跳到飛天蛇上</p>
                    <p>遊戲開始後飛天蛇會開始移動</p>
                    <p>想辦法繼續留在蛇上, 最後一人為勝者</p>
                </div>
            </template>
            <template #reward>
                <h2>勝利獎勵</h2>
                <img src="~/assets/images/items/snake-winner.png" alt="勝利獎勵圖示" class="winner-image"> 
            </template>
        </NuxtLayout>
    </div>
</template>