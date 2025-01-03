import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/math-goes-here/',
  plugins: [react()],
  build: {
    outDir: './docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        notFound: './404.html',
      },
    },
  }
})
