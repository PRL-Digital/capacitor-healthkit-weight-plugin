import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    outDir: './dist',
    minify: false,
    emptyOutDir: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      'capacitor-healthkit-weight-plugin': path.resolve(__dirname, '..'),
    },
  },
});
