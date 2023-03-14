<template> 
    <div class="loader"> 
        <div class="bar"/>
    </div>  
</template>
<style>
    @keyframes loader-animation {
        0% {
           left: -100%;
        }
        49% {
           left: 100%;
        }
        50% {
           left: 100%;
        }
        100% {
           left: -100%;
        }
     }
     .loader {
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        overflow: hidden;
        background: transparent;
        z-index: 10000000;
     }
     .loader .bar {
        position: relative;
        height: 7px;
        width: 100%;
        background-color: var(--color-main-sub);
        animation: loader-animation 3s infinite ease-in-out;
     }
 
 </style> 

