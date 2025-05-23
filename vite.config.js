import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/NokariSarkari/', // 👈 this is important
  plugins: [react()],
})
