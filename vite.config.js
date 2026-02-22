import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import {resolve, dirname} from 'path';
import { fileURLToPath } from 'url';

// https://vite.dev/config/
// Use relative base so assets work on GitHub Pages (e.g. https://user.github.io/repo-name/)
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
  resolve: {
    alias: {
      '#components': resolve(dirname(fileURLToPath(import.meta.url)), 'src/components'),
      '#constants': resolve(dirname(fileURLToPath(import.meta.url)), 'src/constants'),
      '#store': resolve(dirname(fileURLToPath(import.meta.url)), 'src/store'),
      '#hoc': resolve(dirname(fileURLToPath(import.meta.url)), 'src/hoc'),
      '#windows': resolve(dirname(fileURLToPath(import.meta.url)), 'src/windows'),
      '#hooks': resolve(dirname(fileURLToPath(import.meta.url)), 'src/hooks'),
      '#utils': resolve(dirname(fileURLToPath(import.meta.url)), 'src/utils'),
    },
  },
})
