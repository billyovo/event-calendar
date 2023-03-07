<template>
    <button class="floating-button">
        <slot/>
    </button>

</template>

<style scoped>
    .floating-button{
        position: fixed;
        bottom: 80px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        border: none;
        color: white;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        z-index: 100000;
    }
</style>

