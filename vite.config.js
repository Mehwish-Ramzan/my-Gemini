import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://generative-ai.googleapis.com', // Original API URL
        changeOrigin: true, // Ensure the origin header matches the target
        rewrite: (path) => path.replace(/^\/api/, '') // Remove '/api' prefix from the URL
      }
    }
  }
})
