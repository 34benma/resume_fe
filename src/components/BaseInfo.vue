<script setup>
import ColumnTitle from './common_components/ColumnTitle.vue'
import { ref } from 'vue'

const baseInfo = ref({ "tel": "176****6508", "sex": "男", "email": "wantedonline@outlook.com", "address": "中国.长沙" })


</script>

<template>
  <!--基本信息-->
  <v-sheet class="d-flex flex-row flex-wrap justify-space-evenly align-space-around pb-4">
    <v-sheet class="flex-1-1-50">
      <v-icon icon="mdi-email" class="pa-2 ma-2"></v-icon>
      {{ baseInfo.email }}
    </v-sheet>
    <v-sheet class="flex-1-1-50">
      <v-icon icon="mdi-phone" class="pa-2 ma-2"></v-icon>
      {{ baseInfo.tel }}
    </v-sheet>
    <v-sheet class="flex-1-1-50">
      <v-icon icon="mdi-map-marker" class="pa-2 ma-2"></v-icon>
      {{ baseInfo.address }}
    </v-sheet>
  </v-sheet>
</template>

<style scoped></style>
