<script setup>
import ColumnTitle from './common_components/ColumnTitle.vue'
import { ref } from 'vue'

const columnTitle = ref("技能")

const skillList = ref(['扎实的计算机基础知识和良好的软件编码规范', '对Java技术体系以及Web系统架构有深入的理解和经验', '熟悉Vue3,vuetify等前端框架', '熟悉python3编程', '熟悉常用的Linux命令'])

</script>

<template>
  <ColumnTitle :title=columnTitle></ColumnTitle>
  <v-sheet class="pa-4">
    <v-sheet v-for="(item, index) in skillList" :key="index">
      {{ item }}
    </v-sheet>
  </v-sheet>
</template>

<style scoped></style>
