<script setup>
import AtomLogo from '@/components/atoms/Logo/Logo/AtomLogo.vue';
import Flag from '@/components/atoms/Logo/Flags/Flag.vue';
</script>

<template>
<header>
  <AtomLogo />
    <div class="flags">
      <Flag src="/src/assets/images/icons/dk.svg" alt="Danish Flag" />
      <Flag src="/src/assets/images/icons/en.svg" alt="English Flag" />
    </div>
</header>
</template>
