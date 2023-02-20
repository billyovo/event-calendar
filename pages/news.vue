<template>
    <ClientOnly>
        <NewsList :limit="15"/>
    </ClientOnly>
</template>

<script setup>
  definePageMeta({
    layout: 'default'
  })
</script>