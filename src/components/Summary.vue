<script setup>
import { ref } from 'vue'
import ColumnTitle from './common_components/ColumnTitle.vue'
import { computed } from 'vue'

const title = ref("概述")

const workStartDate = new Date('2014-06-30')
const currentDate = new Date()
const timeDifference = currentDate.getTime() - workStartDate.getTime()
const yearDifference = timeDifference / (1000 * 60 * 60 * 24 * 365.25)


const workYearComputed = computed(() => { return yearDifference.toFixed(0) })


</script>

<template>
  <ColumnTitle :title="title"></ColumnTitle>
  <v-sheet class="pa-4">
    作为一名拥有超过<span v-once>{{ workYearComputed
      }}</span>年行业经验的软件工程师，我在两家顶尖的科技公司和互联网公司积累了宝贵的专业经验。<br>我具备全面的前后端开发技能，并且对Java开发体系有扎实的理解和实践。<br>在技术领域，我对微服务架构有深刻的认识，曾深度参与处理高并发和高请求的项目，展现出强大的系统设计和优化能力。<br>我以正直的人格和对技术的热情为指导，不断追求知识的深化和技能的提升，具备出色的学习能力。
  </v-sheet>
</template>

<style scoped></style>
