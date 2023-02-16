<template>
    <div>
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
