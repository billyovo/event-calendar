<template>
    <div class="group-wrapper">
        <slot/>
    </div>
</template>
<script>
    export default{
        props:{
            modelValue: {
                default: null
            },
        },

        data(){
            return{
                value: this.modelValue
            }
        },
        emits: ['update:modelValue'],
        methods:{
            updateValue(value){
                this.value = value;
                this.$emit('update:modelValue', value);
            }
        },
        mounted(){
            this.updateValue(this.modelValue);
           this.$forceUpdate();
        }
    }
</script>

<style>
    .group-wrapper{
        display: flex;
        flex-wrap: wrap;
        gap: 10px 5px;
    }
</style>