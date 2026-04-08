import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/test-react-vite-app/',
  plugins: [react()],
  server: {
    port:3000
  },
  preview: {
    port:4000
  },
  build: {
    outDir: 'out'
  },
  envDir: './envdir',

})
