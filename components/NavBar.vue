<template>
    <nav class="nav-container">
        <a href="/" class="brand">
            <img src="~/assets/icons/brand.svg" alt="伺服器圖示" class="brand" height="50" width="300">
        </a>
        <div class="nav-links">
            <NuxtLink to="/introduction" class="nav-link"><span>活動介紹</span></NuxtLink>
            <NuxtLink to="/news" class="nav-link"><span>通知</span></NuxtLink>
            <NuxtLink to="/calendar" class="nav-link"><span>時間表</span></NuxtLink>
            <NuxtLink to="/record" class="nav-link"><span>優勝記錄</span></NuxtLink>
        </div>
    </nav>
</template>
<style>

.nav-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
}

.nav-links{
    display: flex;
    gap: 15px;
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0px 50px;
}


@media screen and (max-width: 850px){
    .nav-container{
        justify-content: center;
    }
}
</style>
