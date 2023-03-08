<template>
    <NavBar class="nav-bg"/>
    <NavBarMobileControl/>
    <slot/>
    <FooterBar/>
    <NavBarMobile class="nav-bg"/>
    
</template>

<style>
    .nav-bg{
        background-color: var(--color-main);
        z-index: 1000;
    }

</style>