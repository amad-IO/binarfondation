import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Pecah bundle besar menjadi chunks yang lebih kecil
    rollupOptions: {
      output: {
        // Vite 8 (rolldown) requires manualChunks as a function
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // React core — jarang berubah, browser bisa cache lama
            if (id.includes('react-dom') || id.includes('react/')) {
              return 'vendor-react';
            }
            // Framer Motion cukup berat (~100KB), pisahkan agar tidak memblokir render awal
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
            // Lucide icons
            if (id.includes('lucide-react')) {
              return 'vendor-lucide';
            }
          }
        },
      },
    },
    // Naikkan batas peringatan chunk size ke 600KB
    chunkSizeWarningLimit: 600,
  },
})


