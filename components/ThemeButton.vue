<template>
    <button @click="updateTheme" class="theme-button" aria-label="改變網頁主題顏色" >
                <font-awesome-icon 
                    :icon="'fa-solid '+($colorMode?.value === 'dark' ? 'fa-moon' :'fa-sun')" 
                    size="lg" 
                />
            </button>
</template>


<style>

.theme-button{
    background: transparent;
    border: none;
    font-size: 1.2rem;
    color: white;
}

</style>
<script>
    export default{
        methods:{
            updateTheme(){
                this.$colorMode.preference = this.$colorMode?.value === 'dark' ? 'light' : 'dark';
            }
        },
    }
</script>