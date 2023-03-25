<template>
    <div>
        <Html>
          <Head>
            <Title>{{"活動介紹 - 赤翠迷蹤"}}</Title>
            <Meta property="og:description" content="進入迷宮前記得向入口處右邊的智慧樹莓拿裝備
                   迷宮共有五層, 給予飄浮效果前往下一層的東西有機會在牆壁上, 在地上找不到就要抬頭找找看了
                    到達迷宮終點能領取參加獎
            "/>
            <Meta property="og:description" content="進入迷宮前記得向入口處右邊的智慧樹莓拿裝備
                   迷宮共有五層, 給予飄浮效果前往下一層的東西有機會在牆壁上, 在地上找不到就要抬頭找找看了
                    到達迷宮終點能領取參加獎
            "/>
            <Meta name="description" content="進入迷宮前記得向入口處右邊的智慧樹莓拿裝備
                   迷宮共有五層, 給予飄浮效果前往下一層的東西有機會在牆壁上, 在地上找不到就要抬頭找找看了
                    到達迷宮終點能領取參加獎"/>
            <Meta property="og:image" content="https://minigame.letsdream.today/images/maze.png"/>
            <Meta property="twitter:image" content="https://minigame.letsdream.today/images/maze.png"/>
          </Head>
        </Html>

        <NuxtLayout name="intro">
            <template #event>
                <img src="~/assets/images/banner/maze_arena.png" alt="赤翠迷蹤遊戲場地">
                <div>
                    <h2>遊玩須知</h2>
                    <ul>
                        <li>進入迷宮前記得向入口處右邊的智慧樹莓拿裝備</li>
                        <li>迷宮共有五層, 給予飄浮效果前往下一層的東西有機會在牆壁上, 在地上找不到就要抬頭找找看了</li>
                        <li>到達迷宮終點能領取參加獎</li>
                    </ul>
                    <h2>迷宮記錄點須知</h2>
                    <ul>
                        <li>迷宮内設有6個記錄點, 可以在死亡或重返迷宮時找入口處右邊的智慧藍莓傳送至已解鎖的記錄點</li>
                        <li>記錄點會與迷宮同時重置</li>
                    </ul>
                    
                    <h2>莓果叢須知</h2>
                    <ul>
                        <li>每個玩家在一個周期内總共可以點擊 8 個莓果叢, 到達上限之後再點其他莓果叢也不會有反應</li>
                        <li>迷宮重置時只會重置每周期點8個莓果叢的限制, 不會清除沒有兌換完的莓果粒</li>
                    </ul>
                 
                </div>
            </template>
        </NuxtLayout>
    </div>
</template>
