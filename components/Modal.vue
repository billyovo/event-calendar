<template>
    <div class="background" @mousemove="modalHold">
        <div class="modal" :style="modalStyle">
            <div class="modal-inner">
                <div class="modal-header" @mousedown="modalStart" @mouseup="modalEnd">
                <div/>
                handle
                <button @click="closeModal">X</button>
                </div>
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
        z-index: 100000;
    }
    .modal{
        width: 100%;
        background-color: var(--color-secondary);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        z-index: 1000000;
    }
    .modal-inner{
        padding: 0px 30px;
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
        data(){
            return{
                modalTransition: '45%',
                viewHeight: 0,
                isDragging: false,
                thresholdTop: Infinity,
                thresholdBottom: -Infinity
            }
        },
        methods:{
            closeModal(){
                this.$emit('close');
            },
            modalStart(){
                this.isDragging = true;
            },
            modalHold(event){
                if(!this.isDragging) return;
                this.modalTransition = event.clientY + "px";
            },
            modalEnd(event){
                this.isDragging = false;
                if(event.clientY < this.thresholdTop) this.modalTransition = '0px';
                if(event.clientY > this.thresholdBottom) this.closeModal();
            }
        },
        computed:{
            modalStyle(){
                return{
                    transform: `translateY(${this.modalTransition})`
                }
            }
        },
        mounted(){
            this.viewHeight = window.innerHeight;
            this.thresholdTop = (this.viewHeight - (this.viewHeight/1.7))/0.9;
            this.thresholdBottom = (this.viewHeight/1.7)/0.9;
            this.modalTransition = (this.viewHeight/1.7) +"px";
        }
    }
</script>