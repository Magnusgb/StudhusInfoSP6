<template>
    <div class="backtofp-section ">
            <AtomSquareButton />
            <AtomH3Title>Hej</AtomH3Title>
            <AtomParagraph>Med dig</AtomParagraph>
    </div>
</template>

<script setup>
import AtomH3Title from '@/components/atoms/AtomH3Title.vue';
import AtomParagraph from '@/components/atoms/AtomParagraph.vue';
import AtomSquareButton from '@/components/atoms/Buttons/SquareButton/AtomSquareButton.vue';
</script>

<style scoped>
    .backtofp-section {
    background: rgb(220,81,188);
    background: linear-gradient(152deg, rgba(220,81,188,1) 20%, rgba(254,145,87,1) 40%, rgba(200,93,164,1) 60%, rgba(108,103,228,1) 80%, rgba(200,93,164,1) 100%);
}
</style>
  