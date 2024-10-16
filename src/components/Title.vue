<script setup lang="ts">
import { reactive } from 'vue'
import louiswang from '@/assets/louiswang.jpeg'
import { CHANGE_LOCALE } from '@/utils/Constants'
import emitter from '@/utils/emitter'


const title = reactive({ "name": "王  诚", "jobTitle": "全栈工程师" })

emitter.on(CHANGE_LOCALE, (value) => {
  if (value === 'en') {
    Object.assign(title, { "name": "LouisWang", "jobTitle": "FullStack Engineer" })
  }
  if (value === 'zhHans') {
    Object.assign(title, { "name": "王 诚", "jobTitle": "全栈工程师" })
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
