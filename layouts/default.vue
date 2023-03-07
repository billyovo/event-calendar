<template>
    <NavBar class="nav-bg desktop"/>
    <NavBarMobileControl class="mobile"/>
    <slot/>
    <FooterBar/>
    <NavBarMobile class="nav-bg mobile"/>
    
</template>

<style>
    .nav-bg{
        background-color: var(--color-main);
        z-index: 1000;
    }

    .mobile{
        display: none;
    }
    
    .desktop{
        position: sticky;
        display: flex;
        top: 0;
    }
    
    @media screen and (max-width: 1000px) {
        .desktop{
            display: none;
        }

        .mobile{
            display: grid;
        }
    }
</style>