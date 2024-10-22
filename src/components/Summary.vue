<script setup lang="ts">
import { reactive, ref } from 'vue'
import ColumnTitle from '@/components/common_components/ColumnTitle.vue'
import { computed } from 'vue'
import { CHANGE_LOCALE } from '@/utils/Constants'
import emitter from '@/utils/emitter'

const title = ref("介绍")

const workStartDate = new Date('2014-06-30')
const currentDate = new Date()
const timeDifference = currentDate.getTime() - workStartDate.getTime()
const yearDifference = timeDifference / (1000 * 60 * 60 * 24 * 365.25)

const workYearComputed = computed(() => { return yearDifference.toFixed(0) })

const descZh = ["2014年川大信息管理系本科毕业，拥有超过10年行业经验的软件工程师，在两家顶尖的科技公司和互联网公司积累了宝贵的专业经验；", "具备全面的前后端开发技能，并且对Java开发体系有扎实的理解和实践；", "对微服务架构有深刻的认识，曾深度参与处理高并发和高请求的项目，具备较强的系统设计和优化能力；", "为人正直，对技术充满热情，具备比较强的学习能力和行动力"]

const descEn = ["As a software engineer with over {workYear} years of industry experience, I have accumulated valuable professional expertise at two leading technology and internet companies. ", "I possess comprehensive front-end and back-end development skills and have a solid understanding and practice in the Java development ecosystem.", "In the realm of technology, I have a profound understanding of microservices architecture and have been deeply involved in projects that handle high concurrency and high volumes of requests, demonstrating strong system design and optimization capabilities.", "Guided by integrity and a passion for technology, I continuously strive for deeper knowledge and skill enhancement, boasting outstanding learning abilities."]

const descArray = reactive(["2014年川大信息管理系本科毕业，拥有超过10年行业经验的软件工程师，在两家顶尖的科技公司和互联网公司积累了宝贵的专业经验；", "具备全面的前后端开发技能，并且对Java开发体系有扎实的理解和实践；", "对微服务架构有深刻的认识，曾深度参与处理高并发和高请求的项目，具备较强的系统设计和优化能力；", "为人正直，对技术充满热情，具备比较强的学习能力和行动力"])

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
    title.value = '介绍'
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
