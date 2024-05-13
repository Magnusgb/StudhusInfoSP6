<template>
  <div class="Events">
    <AtomEvent
      v-for="(event, index) in events"
      :key="index"
      :src="event.image"
      :alt="`Image for ${event.name}`"
    />
  </div>
</template>

<script setup>
import AtomEvent from '@/components/atoms/AtomEvent.vue';
import { ref, onMounted } from 'vue';

const events = ref([]);

const getEvents = () => {
  fetch(`https://studhus-c0295-default-rtdb.europe-west1.firebasedatabase.app/events.json`, {
    method: 'GET',
  })
  .then((rawData) => rawData.json())
  .then((data) => {
    const fetchedEvents = [];
    Object.keys(data).forEach(key => {
      fetchedEvents.push(data[key]);
    });
    events.value = fetchedEvents.slice(0, 3);
  })
  .catch((error) => {
    console.error('Error fetching or processing data:', error);
  });
};

onMounted(() => {
  getEvents();
});
</script>
