<template>
    <NavBar class="nav-bg"/>
    <slot/>
    <FooterBar/>
</template>

<style>
    .nav-bg{
        background-color: var(--color-main);
    }
</style>