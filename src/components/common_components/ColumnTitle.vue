<script setup lang="ts">

const props = defineProps({
  title: String,
})

</script>

<template>
  <v-sheet class="pt-2">
    <v-sheet class="text-h4 font-weight-bold ma-4">{{ title }}</v-sheet>
    <v-divider></v-divider>
  </v-sheet>
</template>

<style scoped></style>
