<script setup>
import { ref,inject } from 'vue'

const { theme, updateTheme } = inject('theme')
const headerBar = ref({
  "headerBarTitle": "我的个人简历",
  "shareBtnText": "分享",
  "downloadBtnText": "下载"
})
</script>

<template>
  <v-app-bar class="px-10" :elevation="12" rounded :title=headerBar.headerBarTitle>
    <v-btn class="mx-2" :text=headerBar.shareBtnText variant="outlined" size="large"></v-btn>
    <v-btn class="mx-2" :text=headerBar.downloadBtnText variant="outlined" size="large"></v-btn>
    <v-divider class="ms-4 mt-4" inset length="32" vertical></v-divider>
    <v-btn class="mx-2" icon="mdi-translate" @click="" size="large"></v-btn>
    <v-btn class="mx-2" :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="updateTheme"
      size="large"></v-btn>
  </v-app-bar>
</template>

<style scoped></style>
