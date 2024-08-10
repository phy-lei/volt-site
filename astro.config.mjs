import { defineConfig } from 'astro/config'
import solidJs from '@astrojs/solid-js'
import UnoCSS from 'unocss/astro'
import netlify from '@astrojs/netlify/functions'
import node from '@astrojs/node'
import partytown from '@astrojs/partytown'

function envAdapter() {
  switch (process.env.OUTPUT) {
    case 'netlify':
      return netlify({
        edgeMiddleware: true,
      })
    default:
      return node({ mode: 'standalone' })
  }
}

// https://astro.build/config
export default defineConfig({
  output: 'server',
  image: {
    // 示例：允许来自单个域名的远程图像优化。
    domains: ['images.voltjia.com'],
  },
  integrations: [
    UnoCSS({ injectReset: true }),
    solidJs(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  prefetch: {
    defaultStrategy: 'viewport',
  },
  adapter: envAdapter(),
  server: { port: 4321, host: true },
})
