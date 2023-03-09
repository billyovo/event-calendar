<template>
    <div>
        <Html>
          <Head>
            <Title>{{"活動介紹 - 忘掉那 無形鎖"}}</Title>
            <Meta property="og:description" content="以弓或弩射出炸彈箭, 箭矢會定時增加, 最多8根 
                金色箭矢會隨機從天而降, 射出的炸彈威力更強
                把所有人炸下暗海磷石平台, 最後一人為勝者
                苦力怕掉下來會炸掉地板喔(☉д⊙)
            "/>
            <Meta property="twitter:description" content="以弓或弩射出炸彈箭, 箭矢會定時增加, 最多8根 
                金色箭矢會隨機從天而降, 射出的炸彈威力更強
                把所有人炸下暗海磷石平台, 最後一人為勝者
                苦力怕掉下來會炸掉地板喔(☉д⊙)
            "/>
            <Meta name="description" content="弓或弩射出炸彈箭, 箭矢會定時增加, 最多8根 
                金色箭矢會隨機從天而降, 射出的炸彈威力更強
                把所有人炸下暗海磷石平台, 最後一人為勝者
                苦力怕掉下來會炸掉地板喔(☉д⊙)"/>
            <Meta property="og:image" content="https://minigame.letsdream.today/images/lock.png"/>
            <Meta property="twitter:image" content="https://minigame.letsdream.today/images/lock.png"/>
          </Head>
        </Html>

        <NuxtLayout name="intro">
            <template #event>
                <img src="~/assets/images/banner/cannon_arena.png" alt="忘掉那 無形鎖遊戲場地">
                <div>
                    <h2>遊戲規則:</h2>
                    <p>以弓或弩射出炸彈箭, 箭矢會定時增加, 最多8根</p>
                    <p>金色箭矢會隨機從天而降, 射出的炸彈威力更強</p>
                    <p>把所有人炸下暗海磷石平台, 最後一人為勝者</p>
                    <p>苦力怕掉下來會炸掉地板喔(☉д⊙)</p>
                </div>
            </template>
            <template #reward>
                <h2>勝利獎勵</h2>
                <img src="~/assets/images/items/cannon-winner.png" alt="勝利獎勵圖示" class="winner-image"> 
            </template>
        </NuxtLayout>
    </div>
</template>

