import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.VITE_DSBC || '/DSBC',
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:4001',
    },
  },
})