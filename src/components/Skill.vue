<script setup lang="ts">
import ColumnTitle from './common_components/ColumnTitle.vue'
import { ref, reactive } from 'vue'

import { CHANGE_LOCALE } from '@/utils/Constants'
import emitter from '@/utils/emitter'

const columnTitle = ref("技能")

const skillZh = ['非常扎实的计算机领域知识和良好的软件编码规范，在软件开发方面，具备较强的综合素质和能力；', '在高并发，微服务等领域有较多的实践经验和架构经验，有比较丰富的项目规划和项目管理以及开发经验；', '对Java技术体系以及Web系统架构有深入的理解和经验；', '掌握了前端基本开发技能，对Vue3，vuetify等前端框架有较多的实践经验；', '掌握多门编程语言，熟悉常用的Linux命令，具备较强的学习能力；']

const skillEn = ['Solid foundational computer science knowledge and adherence to good software coding standards.']

const skillList = reactive(['扎实的计算机领域知识和良好的软件编码规范，在软件开发方面，具备较强的综合素质和能力；', '在高并发，微服务等领域有较多的实践经验和架构经验，有比较丰富的项目规划和项目管理以及开发经验；', '对Java技术体系以及Web系统架构有深入的理解和经验；', '掌握了前端基本开发技能，对Vue3，vuetify等前端框架有较多的实践经验；', '掌握多门编程语言，熟悉常用的Linux命令，具备较强的学习能力；'])



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
