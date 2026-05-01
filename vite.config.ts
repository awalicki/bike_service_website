import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/bike_service_website/' : '/',
  build: {
    outDir: 'docs',
  },
}));
