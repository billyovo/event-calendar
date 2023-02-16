<template>
    <div>
        <NuxtLayout name="intro">
            <template #event>
                <img src="~/assets/images/banner/drop_arena.png">
                <div>
                    <h2>遊戲規則:</h2>
                    <p>每回合有10秒時間尋找合適的位置往下跳</p>
                    <p>倒數結束後平台的地板會消失</p>
                    <p>只能降落在白色混凝土上, 否則會被淘汰</p>
                    <p>成功降落時會將附近地板填色</p>
                    <p>所有人都墜落完成會開始新一回合, 最後一人為勝者</p>
                </div>
            </template>
            <template #reward>
                <h2>勝利獎勵</h2>
                <img src="~/assets/images/items/drop-winner.png" alt="勝利獎勵圖示" class="winner-image"> 
            </template>
        </NuxtLayout>
    </div>
</template>
