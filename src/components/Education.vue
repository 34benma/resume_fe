<script setup>
import ColumnTitle from './common_components/ColumnTitle.vue'
import EducationInfo from './common_components/EducationInfo.vue'
import { ref } from 'vue'

const columnTitle = ref('教育背景')
const eductionArray = ref([{ "schoolName": "四川大学", "major": "信息管理与信息系统", "startYear": "2010.9", "endYear": "2014.6", "majorType": "全日制本科" }, { "schoolName": "四川大学", "major": "工商管理", "startYear": "2012.9", "endYear": "2014.6", "desc": "第二专业" }])


</script>

<template>
  <ColumnTitle :title=columnTitle></ColumnTitle>
  <v-sheet v-for="(item, index) in eductionArray" :key="index">
    <EducationInfo :school-name=item.schoolName :major-name=item.major :major-type=item.majorType
      :start-year=item.startYear :end-year=item.endYear>
    </EducationInfo>
  </v-sheet>
</template>

<style scoped></style>
