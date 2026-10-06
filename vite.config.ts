import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { siteUrl, writeSitemap } from './scripts/sitemap'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  define: {
    'import.meta.env.VITE_SITE_URL': JSON.stringify(siteUrl),
  },
  ssgOptions: {
    // /about -> about/index.html so URLs work without .html on Netlify
    dirStyle: 'nested',
    formatting: 'none',
    includedRoutes: (paths) => [...paths.filter((p) => !p.includes(':')), '/404'],
    onFinished: () => writeSitemap('dist'),
  },
})
