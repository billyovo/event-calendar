<template>
    <div>
        <Html>
          <Head>
            <Title>{{"活動介紹 - 碰碰豬"}}</Title>
            <Meta property="og:description" content="把所有人撞下平台, 最後一人為勝者 ⟁ 活動期間離開碰碰豬將自動敗北 ⟁"/>
            <Meta property="twitter:description" content="把所有人撞下平台, 最後一人為勝者 ⟁ 活動期間離開碰碰豬將自動敗北 ⟁"/>
            <Meta name="description" content="把所有人撞下平台, 最後一人為勝者 ⟁ 活動期間離開碰碰豬將自動敗北 ⟁"/>
            <Meta property="og:image" content="https://minigame.letsdream.today/images/pig.png"/>
            <Meta property="twitter:image" content="https://minigame.letsdream.today/images/pig.png"/>
          </Head>
        </Html>
        <NuxtLayout name="intro">
            <template #event>
                <img src="~/assets/images/banner/bumper_arena.png">
                <div>
                    <h2>遊戲規則:</h2>
                    <p>把所有人撞下平台, 最後一人為勝者</p>
                    <p>⟁ 活動期間離開碰碰豬將自動敗北 ⟁</p>
                </div>
            </template>
            <template #reward>
                <h2>勝利獎勵</h2>
                <img src="~/assets/images/items/bumper-winner.png" alt="勝利獎勵圖示" class="winner-image"> 
            </template>
        </NuxtLayout>
    </div>
</template>
