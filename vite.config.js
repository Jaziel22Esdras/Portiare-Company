import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        sobre: resolve(__dirname, 'sobre.html'),
        servicos: resolve(__dirname, 'servicos.html'),
        cases: resolve(__dirname, 'cases.html'),
        contato: resolve(__dirname, 'contato.html'),
      },
    },
  },
});

