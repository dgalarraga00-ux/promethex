import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@promethex/core': path.resolve(__dirname, '../index.ts'),
    },
    dedupe: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
  },
  optimizeDeps: {
    include: ['framer-motion', 'lucide-react', 'react', 'react-dom'],
  },
})
