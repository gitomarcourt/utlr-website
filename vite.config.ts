import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/server/api': {
        target: 'http://localhost:5173',
        changeOrigin: true
      }
    }
  }
})
