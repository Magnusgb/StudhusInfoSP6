<template>
    <div class="EventImage"></div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
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
