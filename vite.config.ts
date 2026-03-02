import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/client/components'),
      '@hooks': path.resolve(__dirname, './src/client/hooks'),
      '@utils': path.resolve(__dirname, './src/shared/utils'),
    },
  },
  server: {
    port: 4200,
    proxy: {
      '/api': 'http://localhost:3001',
      '/ws': { target: 'ws://localhost:3001', ws: true },
    },
  },
});
