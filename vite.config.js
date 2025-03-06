import { defineConfig } from 'vite';  // Mantém apenas uma importação do defineConfig
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio_victor_react/',  // Nome do repositório GitHub
  plugins: [react(), svgr()],
  server: {
    port: 3000,
  }
});
