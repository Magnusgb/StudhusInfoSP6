<script setup>
import AtomBackground from '@/components/atoms/AtomBackground.vue';
import TopBar from '@/components/organisms/TopBar/TopBar.vue';
import HeroBanner from '@/components/organisms/HeroBanner.vue';
import BookRoomSection from '@/components/organisms/BookRoomSection.vue';
import EventsToday from '@/components/organisms/EventsToday.vue';
import OrganismEvents from '@/components/organisms/OrganismEvents.vue';
</script>

<template>
  <main>
    <AtomBackground />
    <TopBar />
    <HeroBanner />
    <BookRoomSection />
    <EventsToday />
    <OrganismEvents />
  </main>
</template>
