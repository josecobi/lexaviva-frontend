import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api':{
              target: 'http://localhost:5050',
              changeOrigin: true,
              secure: false
      },
      // '/freepik': {
      //   target: 'https://api.freepik.com/v1',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/freepik/, '')
      // }
    }
  },
  plugins: [react()],
})
