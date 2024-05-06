<template>
    <div class="hero-image" :style="backgroundImageStyle"></div>
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
      default: 'Hero Banner Image',
    },
  });
  
  const backgroundImageStyle = computed(() => ({
    backgroundImage: `url(${props.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }));
  </script>
  
  <style scoped>
  .hero-image {
    position: relative;
    width: 100%;
    height: 500px; /* Adjust the height as needed */
  }
  </style>