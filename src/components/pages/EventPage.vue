<script setup>
import { ref } from 'vue';
import BackToFP from '@/components/molecules/BackToFP.vue';
import OrganismEventsPage from '@/components/organisms/OrganismEventsPage.vue';
import EventInfoPage from '@/components/organisms/EventsInfoPage.vue';
import AtomSquareButtonRight from '@/components/atoms/Buttons/SquareButton/AtomSquareButtonRight.vue';

const isEventInfoVisible = ref(false);

const toggleModal = () => {
  isEventInfoVisible.value = !isEventInfoVisible.value; 
};
</script>

<template>
  <main>
    <BackToFP />
    <OrganismEventsPage />
    <EventInfoPage v-show="isEventInfoVisible" />
    <AtomSquareButtonRight @click="toggleModal" />
  </main>
</template>

