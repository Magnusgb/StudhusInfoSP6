<template>
    <AtomSectionTitle title='KOMMENDE EVENTS'/>
    <MoleculeEvents />
    <AtomSquareButton buttonTitle='SE FLERE' @click="navigateToEvents"/>
</template>

<script setup>
import AtomSectionTitle from '@/components/atoms/AtomSectionTitle.vue';
import MoleculeEvents from '@/components/molecules/MoleculeEvents.vue';
import AtomSquareButton from '@/components/atoms/Buttons/SquareButton/AtomSquareButton.vue';

import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToEvents = () => {
  // Use the router instance to navigate to the "/events" route
  router.push('/events');
};

// Expose the navigateToEvents function to the template
defineExpose({
  navigateToEvents
});
</script>