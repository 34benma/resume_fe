<script setup lang="ts">
import { inject, reactive, shallowRef } from 'vue'

import emitter from '@/utils/emitter'
import { useLocale } from 'vuetify'
import { CHANGE_LOCALE } from '@/utils/Constants'

import downloadPDF from '@/hooks/CreatePDF'

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

const docDefinition = {
  content: [
    'First paragraph',
    'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines',
  ],
  defaultStyle: {
    font: 'Roboto'
  },
}


function downloadResume() {
  console.log("download pdf resume")
  downloadPDF(docDefinition)
}

const dialog = shallowRef(false)

</script>

<template>
  <v-app-bar class="px-10" :elevation="12" rounded :title=headerBar.headerBarTitle>
    <v-btn class="mx-2" :text=headerBar.shareBtnText variant="outlined" size="large" @click="dialog = !dialog"></v-btn>
    <v-btn class="mx-2" :text=headerBar.downloadBtnText variant="outlined" size="large" @click="downloadResume"></v-btn>
    <v-divider class="ms-4 mt-4" inset length="32" vertical></v-divider>
    <v-btn class="mx-2" icon="mdi-translate" @click="changeLocale" size="large"></v-btn>
    <v-btn class="mx-2" :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="updateTheme"
      size="large"></v-btn>

    <v-dialog v-model="dialog" max-width="500">
      <template v-slot:default="{ isActive }">
        <v-card :itle="headerBar.shareBtnText">
          <v-card-text>
            <span>微信</span>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>

  </v-app-bar>
</template>

<style scoped></style>
