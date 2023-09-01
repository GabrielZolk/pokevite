import { fileURLToPath, URL } from 'node:url'
import pluginRewriteAll from 'vite-plugin-rewrite-all';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    pluginRewriteAll(),
    VitePWA({ registerType: 'autoUpdate' })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // server: {
  //   port: 3000,
  // },
  // base: 'http://localhost:3000'
})
