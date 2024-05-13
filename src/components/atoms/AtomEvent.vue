<template>
  <div class="EventImage">
    <img :src="src" :alt="alt" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: 'Event billede',
  },
});
</script>

<style scoped>
@import '@/assets/style/atom.css';
</style>
