<script setup lang="ts">
import HeaderBar from '@/components/common_components/HeaderBar.vue'
import FooterBar from '@/components/common_components/FooterBar.vue'
import ResumeLayout from '@/layout/ResumeLayout.vue'
import { ref, provide } from 'vue'


const theme = ref('dark')

function updateTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}

provide('theme', { theme, updateTheme })

</script>

<template>
  <v-app :theme="theme">
    <HeaderBar></HeaderBar>
    <v-responsive>
      <v-main>
        <v-container>
          <ResumeLayout></ResumeLayout>
        </v-container>
      </v-main>
    </v-responsive>
    <FooterBar></FooterBar>
  </v-app>
</template>

<style scoped></style>
