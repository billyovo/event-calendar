<template>
    <div>
        <NavBar class="nav-bg"/>
        <NavBarMobileControl/>
        <slot/>
        <NavBarMobile class="nav-bg"/>
        <FooterBar/>
    </div>
    
</template>

<style>
    .nav-bg{
        background-color: var(--color-main);
        z-index: 1000;
    }

</style>

<script>
    export default{
        mounted(){
            //why am i even doing this
            const footers = document.getElementsByTagName("footer");
            if(footers.length !== 1){
                while(footers[0].nextElementSibling){
                    footers[0].nextElementSibling.remove();
                }
            }
        }
    }
</script>