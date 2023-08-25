import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: { outDir: "./build" },//with this line vite builds it as a build folder not as a dist folder. for easy deploy on netlify or github
})
