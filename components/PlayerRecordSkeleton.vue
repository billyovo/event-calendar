<template>
    <div class="skeleton-container">
        <PlayerRecordItemSkeleton 
            v-for="index in 15" :key="index"
        />
    </div>
</template>
<style scoped>
    .skeleton-container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>