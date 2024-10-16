<script setup lang="ts">
import { reactive, ref } from 'vue'
import ColumnTitle from '@/components/common_components/ColumnTitle.vue'
import { computed } from 'vue'
import { CHANGE_LOCALE } from '@/utils/Constants'
import emitter from '@/utils/emitter'

const title = ref("概述")

const workStartDate = new Date('2014-06-30')
const currentDate = new Date()
const timeDifference = currentDate.getTime() - workStartDate.getTime()
const yearDifference = timeDifference / (1000 * 60 * 60 * 24 * 365.25)

const workYearComputed = computed(() => { return yearDifference.toFixed(0) })

const descZh = ["作为一名拥有超过{workYear}年行业经验的软件工程师，我在两家顶尖的科技公司和互联网公司积累了宝贵的专业经验。", "我具备全面的前后端开发技能，并且对Java开发体系有扎实的理解和实践。", "在技术领域，我对微服务架构有深刻的认识，曾深度参与处理高并发和高请求的项目，展现出强大的系统设计和优化能力。", "我以正直的人格和对技术的热情为指导，不断追求知识的深化和技能的提升，具备出色的学习能力。"]

const descEn = ["As a software engineer with over {workYear} years of industry experience, I have accumulated valuable professional expertise at two leading technology and internet companies. ", "I possess comprehensive front-end and back-end development skills and have a solid understanding and practice in the Java development ecosystem.", "In the realm of technology, I have a profound understanding of microservices architecture and have been deeply involved in projects that handle high concurrency and high volumes of requests, demonstrating strong system design and optimization capabilities.", "Guided by integrity and a passion for technology, I continuously strive for deeper knowledge and skill enhancement, boasting outstanding learning abilities."]

const descArray = reactive(["作为一名拥有超过{workYear}年行业经验的软件工程师，我在两家顶尖的科技公司和互联网公司积累了宝贵的专业经验。", "我具备全面的前后端开发技能，并且对Java开发体系有扎实的理解和实践。", "在技术领域，我对微服务架构有深刻的认识，曾深度参与处理高并发和高请求的项目，展现出强大的系统设计和优化能力。", "我以正直的人格和对技术的热情为指导，不断追求知识的深化和技能的提升，具备出色的学习能力。"])

function replaceWorkYear() {
  descArray[0] = descArray[0].replace("{workYear}", workYearComputed.value)
}

replaceWorkYear()

emitter.on(CHANGE_LOCALE, (value) => {
  if (value === 'en') {
    title.value = 'SUMMARY'
    Object.assign(descArray, descEn)
  }

  if (value === 'zhHans') {
    title.value = '概述'
    Object.assign(descArray, descZh)
  }
  replaceWorkYear()
})

</script>

<template>
  <ColumnTitle :title="title"></ColumnTitle>
  <v-sheet class="pa-4">
    <v-sheet v-for="(item, index) in descArray" :key="index">
      {{ item }}
    </v-sheet>
  </v-sheet>
</template>

<style scoped></style>
