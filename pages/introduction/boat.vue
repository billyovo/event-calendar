<template>
    <div>
        <Html>
            <Head>
              <Title>{{"活動介紹 - 七彩羊駝保衛戰"}}</Title>
                <Meta property="og:description" content="
                    右鍵魔法棒向草泥馬發射魔咒, 每10秒可以發射8次魔咒
                    ☆不能同時移動和發射魔咒, 請慎重決定每一步行動☆
                    保護自己的草泥馬, 把別人的全部殺死, 最後一人為勝者
                    ⟁ 建議遊玩時全程拿著魔法棒, 以免坐上草泥馬 ⟁"/>
                <Meta property="twitter:description" content="
                    右鍵魔法棒向草泥馬發射魔咒, 每10秒可以發射8次魔咒
                    ☆不能同時移動和發射魔咒, 請慎重決定每一步行動☆
                    保護自己的草泥馬, 把別人的全部殺死, 最後一人為勝者
                    ⟁ 建議遊玩時全程拿著魔法棒, 以免坐上草泥馬 ⟁"/>
                <Meta property="og:image" content="https://minigame.letsdream.today/images/llama.png"/>
                <Meta property="twitter:image" content="https://minigame.letsdream.today/images/llama.png"/>
            </Head>
        </Html>

        <NuxtLayout name="intro">
            <template #event>
                <img src="~/assets/images/banner/boat_arena.png">
                <div>
                    <h2>遊戲規則:</h2>
                    <p>右鍵魔法棒向草泥馬發射魔咒, 每10秒可以發射8次魔咒</p>
                    <p>☆不能同時移動和發射魔咒, 請慎重決定每一步行動☆</p>
                    <p>保護自己的草泥馬, 把別人的全部殺死, 最後一人為勝者</p>
                    <p>⟁ 建議遊玩時全程拿著魔法棒, 以免坐上草泥馬 ⟁</p>
                </div>
            </template>
            <template #reward>
                <h2>勝利獎勵</h2>
                <img src="~/assets/images/items/boat-winner.png" alt="勝利獎勵圖示" class="winner-image"> 
            </template>
        </NuxtLayout>
    </div>
</template>
