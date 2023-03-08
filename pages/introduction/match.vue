<template>
    <div>
        <Html>
          <Head>
            <Title>{{"活動介紹 - 記憶極限"}}</Title>
            <Meta property="og:description" content="每回合開始時把地板的顔色記起來
                    牆上顯示顔色後地板將不會有顔色
                    憑記憶站到正確的顔色上, 最後一人為勝者
                    畫面上方的BOSS血條代表各階段的時間
            "/>
            <Meta property="og:description" content="每回合開始時把地板的顔色記起來
                    牆上顯示顔色後地板將不會有顔色
                    憑記憶站到正確的顔色上, 最後一人為勝者
                    畫面上方的BOSS血條代表各階段的時間
            "/>
            <Meta name="description" content="每回合開始時把地板的顔色記起來
                    牆上顯示顔色後地板將不會有顔色
                    憑記憶站到正確的顔色上, 最後一人為勝者
                    畫面上方的BOSS血條代表各階段的時間"/>
            <Meta property="og:image" content="https://minigame.letsdream.today/images/brain.png"/>
            <Meta property="twitter:image" content="https://minigame.letsdream.today/images/brain.png"/>
          </Head>
        </Html>

        <NuxtLayout name="intro">
            <template #event>
                <img src="~/assets/images/banner/match_arena.png">
                <div>
                    <h2>遊戲規則:</h2>
                    <p>每回合開始時把地板的顔色記起來</p>
                    <p>牆上顯示顔色後地板將不會有顔色</p>
                    <p>憑記憶站到正確的顔色上, 最後一人為勝者</p>
                    <p>畫面上方的BOSS血條代表各階段的時間</p>
                </div>
            </template>
            <template #reward>
                <h2>勝利獎勵</h2>
                <img src="~/assets/images/items/match-winner.png" alt="勝利獎勵圖示" class="winner-image"> 
            </template>
        </NuxtLayout>
    </div>
</template>
