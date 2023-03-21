import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  cacheDir: `./.cache/vite-app`,

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          recoil: ['recoil'],
          mui: ['@mui/material', '@emotion/react', '@emotion/styled']
        }
      }
    }
  },

  server: {
    proxy: {
      '/api': {
        target: 'localhost:5137/api',
        changeOrigin: true
      }
    }
  }
});
