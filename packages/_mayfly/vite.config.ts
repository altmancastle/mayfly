import {defineConfig} from 'vite';
import {resolve} from 'path';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  cacheDir: `./.cache/vite-mayfly-app`,

  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, './index.ts'),
      name: '@mf/layout',
      // the proper extensions will be added
      fileName: 'mf-layout'
    },
    rollupOptions: {
      output: {}
    }
  }
});
