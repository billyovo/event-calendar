<template>
    <div class="background" v-if="modelValue" @click="(event) => checkModalClose(event)" role="dialog" aria-modal="true" :aria-hidden="modelValue">
        <div class="modal">
            <div class="modal-inner">

                <div class="modal-body">
                    <slot/>
                </div>
            </div>
            
        </div>
    </div>
</template>

<style scoped>
    .background{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        z-index: 10000;
    }
    .modal{
        position: fixed;
        top: 50%;
        width: 100%;
        height: 50%;
        overflow-y: scroll;
        background-color: var(--color-secondary);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        z-index: 100000;
    }
    .modal-inner{
        padding: 0px 30px;
        padding-bottom: 50%;
    }
    .modal-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0px;
        cursor: pointer;
    }
    .modal-body{
        margin-top: 20px;
    }

</style>

<script>
    export default{
        props: {
            modelValue: Boolean
        },
        methods: {
            close(){
                this.$emit('update:modelValue', false);
            },
            checkModalClose(event){
                if(!event.target.classList.contains('background')) return;
                this.close();         
            }
        },
        
    }
</script>