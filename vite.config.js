import { defineConfig } from 'vite'
export default defineConfig({
  root: './',
  server: {
    port: parseInt(process.env.PORT, 10),
    proxy: {
      // Proxy API calls only
      '/api': {
        target: 'http://localhost:5002', // Backend server
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'dist',
  },
})
