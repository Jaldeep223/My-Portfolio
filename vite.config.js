


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/My-Portfolio/',  // EXACT repo name with the same capitalization
  plugins: [react()],
})
