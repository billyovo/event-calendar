<script>
import { Calendar } from "vue-calendar-3";
// If you using vite


export default {
  components: {
    Calendar,
  },
};
</script>
<script setup>
  import { ref } from "vue";
  import "vue-calendar-3/style";

  const checkIn = ref(null);
  const checkOut = ref(null);
</script>

<template>
  <Calendar v-model:checkIn="checkIn" v-model:checkOut="checkOut" />
</template>