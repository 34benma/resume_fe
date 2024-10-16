<script setup lang="ts">
const props = defineProps({
  schoolName: String,
  majorName: String,
  majorType: String,
  startYear: String,
  endYear: String,
})
</script>

<template>
  <v-sheet class="d-flex ps-4 py-4">
    <v-sheet class="pe-2">{{ startYear }}-{{ endYear }}</v-sheet>
    <v-sheet class="pe-2">{{ schoolName }}</v-sheet>
    <v-sheet class="pe-2">{{ majorName }}</v-sheet>
    <v-sheet class="pe-2">{{ majorType }}</v-sheet>
  </v-sheet>
</template>

<style scoped></style>
