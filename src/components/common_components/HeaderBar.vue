<script setup lang="ts">
import { inject, reactive } from 'vue'

import emitter from '@/utils/emitter'
import { useLocale } from 'vuetify'
import { CHANGE_LOCALE } from '@/utils/Constants'

const { theme, updateTheme } = inject('theme') as { theme: string; updateTheme: () => void }

const { current } = useLocale()

const headerBar = reactive({
  "headerBarTitle": "我的个人简历",
  "shareBtnText": "分享",
  "downloadBtnText": "下载"
})


emitter.on(CHANGE_LOCALE, (value) => {
  if (value === 'en') {
    Object.assign(headerBar, {
      "headerBarTitle": "LouisWang's Resume",
      "shareBtnText": "Share",
      "downloadBtnText": "Download"
    })
  }
  if (value === 'zhHans') {
    Object.assign(headerBar, {
      "headerBarTitle": "我的个人简历",
      "shareBtnText": "分享",
      "downloadBtnText": "下载"
    })
  }
})

function changeLocale() {
  current.value = current.value === 'en' ? 'zhHans' : 'en'
  emitter.emit(CHANGE_LOCALE, current.value)
}

</script>

<template>
  <v-app-bar class="px-10" :elevation="12" rounded :title=headerBar.headerBarTitle>
    <v-btn class="mx-2" :text=headerBar.shareBtnText variant="outlined" size="large"></v-btn>
    <v-btn class="mx-2" :text=headerBar.downloadBtnText variant="outlined" size="large"></v-btn>
    <v-divider class="ms-4 mt-4" inset length="32" vertical></v-divider>
    <v-btn class="mx-2" icon="mdi-translate" @click="changeLocale" size="large"></v-btn>
    <v-btn class="mx-2" :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="updateTheme"
      size="large"></v-btn>
  </v-app-bar>
</template>

<style scoped></style>
