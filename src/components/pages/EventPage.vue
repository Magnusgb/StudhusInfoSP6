<script setup>
import { ref } from 'vue';
import BackToFP from '@/components/molecules/BackToFP.vue';
import OrganismEventsPage from '@/components/organisms/OrganismEventsPage.vue';
import EventInfoPage from '@/components/organisms/EventsInfoPage.vue';
import AtomRoundButtonX from '@/components/atoms/buttons/RoundButton/AtomRoundButtonX.vue';

const isEventInfoVisible = ref(false);

const toggleModal = () => {
  isEventInfoVisible.value = !isEventInfoVisible.value; 
};
</script>

<template>
  <main>
    <BackToFP />
    <EventInfoPage v-show="isEventInfoVisible" />
    <AtomRoundButtonX @click="toggleModal" /> 
  </main>
</template>

