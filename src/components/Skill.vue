<script setup lang="ts">
import ColumnTitle from './common_components/ColumnTitle.vue'
import { ref, reactive } from 'vue'

import { CHANGE_LOCALE } from '@/utils/Constants'
import emitter from '@/utils/emitter'

const columnTitle = ref("技能")

const skillZh = ['扎实的计算机基础知识和良好的软件编码规范', '对Java技术体系以及Web系统架构有深入的理解和经验', '熟悉Vue3,vuetify等前端框架', '熟悉python3编程', '熟悉常用的Linux命令']

const skillEn = ['Solid foundational computer science knowledge and adherence to good software coding standards.']

const skillList = reactive(['扎实的计算机基础知识和良好的软件编码规范', '对Java技术体系以及Web系统架构有深入的理解和经验', '熟悉Vue3,vuetify等前端框架', '熟悉python3编程', '熟悉常用的Linux命令'])



emitter.on(CHANGE_LOCALE, (value) => {
  if (value === 'en') {
    columnTitle.value = 'SKILL'
    Object.assign(skillList, skillEn)
  }

  if (value === 'zhHans') {
    columnTitle.value = '技能'
    Object.assign(skillList, skillZh)
  }
})

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
