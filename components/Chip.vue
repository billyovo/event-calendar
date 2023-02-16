<template>
    <NuxtLink class="intro-chip-base" 
        @click="handleInput"
        :to="to" 
        :class="outlined ? 'chip-outlined' : 'chip-default'"
        :style="($parent.value === value) && value ? 
            'background-color: var(--shade-darken3); color: white'  : 
            null
        "
    >   
        <slot/>
    </NuxtLink>
</template>

<style>
    .intro-chip-base{
        text-decoration: none;
        padding: 5px 10px;
        border-radius: 15px;
        text-align: center;
        cursor: pointer;
    }
    .chip-outlined{
        color: var(--shade-darken3);
        border: 1px solid var(--shade-darken3)
    }
    .chip-default{
        color: white;
        background-color: var(--shade-darken3);
    }
</style>
<script>
    export default{
        props:{
            outlined: {
                type: Boolean,
                default: false
            },
            to: String,
            value: String,
        },
        methods:{
            handleInput(){
                if(!this.value) return;
                this.$parent.updateValue(this.value);
            }
        }
    }
</script>