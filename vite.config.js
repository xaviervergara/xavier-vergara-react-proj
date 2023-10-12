import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Configura Vite para servir archivos estáticos desde la carpeta "public"
    serveStatic: {
      directory: 'public',
    },
  },
});
