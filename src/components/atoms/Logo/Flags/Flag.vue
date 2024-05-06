<script setup>
import { defineProps } from 'vue';

defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: 'Flag',
  },
});
</script>

<template>
  <img :src="src" :alt="alt" />
</template>