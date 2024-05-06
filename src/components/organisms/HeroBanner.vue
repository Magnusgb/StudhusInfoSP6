<template>
  <div class="hero-banner">
    <HeroImage :src="currentImage" :alt="imageAlt" />
  </div>
</template>

<script setup>
import HeroImage from '@/components/atoms/Hero/HeroImage.vue';
import { ref, computed, onMounted } from 'vue';

const images = [
  'src/assets/images/content/hero.png',
  'src/assets/images/content/hero2.png',
  // Add more images here as needed
];

const currentImageIndex = ref(0);

const changeImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
};

onMounted(() => {
  setInterval(changeImage, 5000); // Change image every 5 seconds
});

const currentImage = computed(() => images[currentImageIndex.value]);

defineProps({
  imageAlt: {
    type: String,
    default: 'Hero Banner Image',
  },
});
</script>

<style scoped>
.hero-banner {
  position: relative;
  width: 100%;
  height: 500px; /* Adjust the height as needed */
  overflow: hidden;
}
</style>