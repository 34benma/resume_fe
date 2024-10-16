import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { resolve } from 'path'

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [vue(), vuetify()],
    define: {
      __APP_VERSION__: JSON.stringify('v1.0.0'),
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
    },
  }),
)
