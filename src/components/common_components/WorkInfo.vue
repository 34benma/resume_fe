<script setup lang="ts">
const props = defineProps({
  companyName: String,
  title: String,
  startYear: String,
  endYear: String,
  desc: Array<string>
})
</script>

<template>
  <v-sheet>
    <v-sheet class="font-weight-bold pa-4 d-flex flex-row flex-wrap justify-start">
      <v-sheet class="pe-4">{{ startYear }} - {{ endYear }}</v-sheet>
      <v-sheet class="pe-4">{{ companyName }}</v-sheet>
      <v-sheet class="pe-4">{{ title }}</v-sheet>
    </v-sheet>
    <v-sheet class="ps-4">
      <v-sheet v-for="(item, index) in desc" :key="index">
        {{ item }}
      </v-sheet>
    </v-sheet>
  </v-sheet>

</template>

<style scoped></style>
