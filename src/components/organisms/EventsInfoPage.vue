<template>
    <div class="modal-overlay">
<div class="modal-event">
<div class="event-section">
<img id="event-section-img" src="@/assets/images/content/event1.jpg" alt="Event" />
    <div class="date-event">
        <DateEvent/>
    </div>
    <div class="info-section">
        <InfoEvent />
        <qrcode/>
    </div>
    <div class="about-event">
        <AboutEvent/>
    </div>
</div>
</div>
</div>
</template>
<script setup>
import AboutEvent from '@/components/molecules/AboutEvent.vue';
import DateEvent from '@/components/molecules/DateEvent.vue';
import InfoEvent from '@/components/molecules/InfoEvent.vue';
import qrcode from '@/components/molecules/qrcode.vue';
import AtomRoundButtonX from '@/components/atoms/buttons/RoundButton/AtomRoundButtonX.vue';
</script>
