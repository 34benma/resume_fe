<script setup lang="ts">
import { reactive } from 'vue'

import { CHANGE_LOCALE } from '@/utils/Constants'
import emitter from '@/utils/emitter'
import useResumeData from '@/hooks/useResumeData'

const { getBaseInfo } = useResumeData()

const baseInfo = reactive({})
const baseInfoZh = getBaseInfo('zhHans')
Object.assign(baseInfo, baseInfoZh)

emitter.on(CHANGE_LOCALE, (value) => {
  if (value === 'en') {
    Object.assign(baseInfo, getBaseInfo('en'))
  }
  if (value === 'zhHans') {
    Object.assign(baseInfo, baseInfoZh)
  }
})

</script>

<template>
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
      <span v-html="baseInfo.address"></span>
    </v-sheet>
  </v-sheet>
</template>

<style scoped></style>
