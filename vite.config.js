import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api':{
              target: 'http://localhost:5050',
              changeOrigin: true,
              secure: true
      },
      '/demo': {
        target: 'http://localhost:5050',
        changeOrigin: true,
        secure: true,
      },
    }
  },
  plugins: [react()],
})
