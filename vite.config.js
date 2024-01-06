// vite.config.js
import react from '@vitejs/plugin-react';
import path from 'path';

export default {
  plugins: [react()],

  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '@redux': path.resolve(__dirname, 'redux'),
      '@/': path.resolve(__dirname, 'src'),
      './': path.resolve(__dirname, 'src'),
    },
  },

  // Customize Babel options
  babel: {
    presets: ['@babel/preset-react'],
    plugins: ['@babel/plugin-transform-runtime'],
  },
};
