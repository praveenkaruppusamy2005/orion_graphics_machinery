import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true, // allow external access
    port: 5173,
    // Allow the Cloudflare tunnel host
    allowedHosts: [
      'podcast-congress-develops-scores.trycloudflare.com'
    ]
    
  }
})
