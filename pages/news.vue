<template>
  <main>
    <Loader v-if="loading" :aria-busy="loading" :aria-hidden="!loading"/>
    <NewsList :limit="15"/>
  </main>
    
</template>

<script setup>
  definePageMeta({
    layout: 'default'
  })
</script>
<script>
  export default{
    data(){
      return{
        loading: false
      }
    } 
}
</script>
