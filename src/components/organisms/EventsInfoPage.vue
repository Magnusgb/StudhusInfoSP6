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
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
}
</style>