<script setup>
import AtomLogo from '@/components/atoms/Logo/Logo/AtomLogo.vue';
import Flag from '@/components/atoms/Logo/Flags/Flag.vue';
</script>

<template>
<header>
  <AtomLogo />
    <div class="flags">
      <Flag src="/src/assets/images/content/dkflag.svg" alt="Danish Flag" />
      <Flag src="/src/assets/images/content/en.svg" alt="English Flag" />
    </div>
</header>
</template>


<style scoped>
@import '@/assets/style/organisms.css';
@import '@/assets/style/molecules.css';
</style>