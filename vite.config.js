import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Plugin custom untuk inline CSS ke dalam index.html
function inlineCssPlugin() {
  return {
    name: 'inline-css',
    enforce: 'post',
    generateBundle(options, bundle) {
      let cssCode = '';
      let cssKey = '';
      
      // Temukan file CSS di dalam bundle
      for (const key in bundle) {
        if (key.endsWith('.css')) {
          cssCode = bundle[key].source;
          cssKey = key;
          break;
        }
      }

      // Temukan index.html dan inject CSS
      const htmlKey = Object.keys(bundle).find(key => key.endsWith('.html'));
      if (htmlKey && cssCode) {
        let htmlCode = bundle[htmlKey].source;
        // Hapus tag <link rel="stylesheet"> yang digenerate oleh Vite
        const linkRegex = new RegExp(`<link[^>]*href="[^"]*${cssKey}"[^>]*>`, 'i');
        htmlCode = htmlCode.replace(linkRegex, '');
        // Inject <style> ke dalam <head>
        htmlCode = htmlCode.replace('</head>', `<style>${cssCode}</style>\n</head>`);
        bundle[htmlKey].source = htmlCode;
        
        // Hapus file CSS terpisah dari hasil build
        delete bundle[cssKey];
      }
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), inlineCssPlugin()],
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


