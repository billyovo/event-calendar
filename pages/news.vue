<template>
  <h1 class="header">資訊</h1>
    <ClientOnly>
        <NewsList :limit="15"/>
    </ClientOnly>
</template>

<script setup>
  definePageMeta({
    layout: 'default'
  })
</script>

<style>
  .header{
    margin: 0; 
    padding: 0; 
    margin-left: 20px; 
    margin-bottom: 20px
  }
</style>