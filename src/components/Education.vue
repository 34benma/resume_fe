<script setup lang="ts">
import ColumnTitle from './common_components/ColumnTitle.vue'
import EducationInfo from './common_components/EducationInfo.vue'
import { reactive, ref } from 'vue'

import { CHANGE_LOCALE } from '@/utils/Constants'
import emitter from '@/utils/emitter'

const columnTitle = ref('教育背景')

const educationZh = [{ "schoolName": "四川大学", "major": "信息管理与信息系统", "startYear": "2010.9", "endYear": "2014.6", "majorType": "全日制本科" }, { "schoolName": "四川大学", "major": "工商管理", "startYear": "2012.9", "endYear": "2014.6", "desc": "第二专业" }]

const educationEn = [{ "schoolName": "SiChuan University", "major": "Information Management&Information System", "startYear": "2010.9", "endYear": "2014.6", "majorType": "Bachelor" }, { "schoolName": "SiChuan University", "major": "Business Administration", "startYear": "2012.9", "endYear": "2014.6", "desc": "Second Bachelor" }]

const educationArray = reactive([{ "schoolName": "四川大学", "major": "信息管理与信息系统", "startYear": "2010.9", "endYear": "2014.6", "majorType": "全日制本科" }, { "schoolName": "四川大学", "major": "工商管理", "startYear": "2012.9", "endYear": "2014.6", "desc": "第二专业" }])

emitter.on(CHANGE_LOCALE, (value) => {
  if (value === 'en') {
    columnTitle.value = 'EDUCATION'
    Object.assign(educationArray, educationEn)
  }

  if (value === 'zhHans') {
    columnTitle.value = '教育背景'
    Object.assign(educationArray, educationZh)
  }
})

</script>

<template>
  <ColumnTitle :title=columnTitle></ColumnTitle>
  <v-sheet v-for="(item, index) in educationArray" :key="index">
    <EducationInfo :school-name=item.schoolName :major-name=item.major :major-type=item.majorType
      :start-year=item.startYear :end-year=item.endYear>
    </EducationInfo>
  </v-sheet>
</template>

<style scoped></style>
