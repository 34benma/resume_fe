<script setup lang="ts">
import louiswang from '@/assets/louiswang.jpeg'
import { CHANGE_LOCALE } from '@/utils/Constants'
import emitter from '@/utils/emitter'
import useResumeData from '@/hooks/useResumeData'
import { reactive } from 'vue'


const { getTitle } = useResumeData()

const title = reactive({})

const titleZh = getTitle('zh')
Object.assign(title, titleZh)

emitter.on(CHANGE_LOCALE, (value) => {
  if (value === 'en') {
    Object.assign(title, getTitle('en'))
  }
  if (value === 'zhHans') {
    Object.assign(title, titleZh)
  }
})

</script>

<template>
  <v-sheet class="d-flex justify-center pa-10 pb-10">
    <v-avatar class="mr-10" color="surface-variant" size="118">
      <v-img :src="louiswang"></v-img>
    </v-avatar>
    <v-sheet>
      <v-sheet class="text-h2 mb-4">{{ title.name }}</v-sheet>
      <v-sheet class="text-h4">{{ title.jobTitle }}</v-sheet>
    </v-sheet>
  </v-sheet>
</template>

<style scoped></style>
