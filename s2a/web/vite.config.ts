import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

// GitHub Pages serves 404.html for unknown paths. Copying index.html there lets the
// single-page router handle direct visits to /privacy, /terms and /lab.
const spaFallback = () => ({
  name: 'spa-404-fallback',
  apply: 'build' as const,
  closeBundle() {
    copyFileSync(resolve('dist/index.html'), resolve('dist/404.html'))
  },
})

export default defineConfig({
  plugins: [react(), spaFallback()],
  define: {
    __BUILD_DATE__: JSON.stringify(new Date().toISOString().slice(0, 10)),
  },
  build: {
    outDir: 'dist',
  },
})
