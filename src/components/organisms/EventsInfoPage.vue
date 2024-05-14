<template>
    <div class="modal-overlay">
<div class="modal-event">
<div class="event-section">
    <AtomEventsBanner id="event-section-img"/>
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
import AtomEventsBanner from '@/components/atoms/AtomEventsBanner.vue';
</script>
