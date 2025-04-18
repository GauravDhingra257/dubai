import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import viteImagemin from 'vite-plugin-imagemin';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),viteImagemin({
    gifsicle: { optimizationLevel: 7 },
    optipng: { optimizationLevel: 7 },
    mozjpeg: { quality: 20 }, // Lower = smaller file, adjust as needed
    pngquant: { quality: [0.6, 0.8], speed: 4 },
    svgo: { plugins: [{ name: 'removeViewBox' }] },
    webp: { quality: 20 }
  })],
  base: '',
})
