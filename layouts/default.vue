<template>
    <NavBar class="nav-bg desktop"/>
    <slot/>
    <FooterBar/>
    <NavBarMobile class="nav-bg mobile"/>
    
</template>

<style>
    .nav-bg{
        background-color: var(--color-main);
        z-index: 100000;
    }

    .mobile{
        display: none;
    }
    
    .desktop{
        position: sticky;
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