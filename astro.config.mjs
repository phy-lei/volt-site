import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import UnoCSS from 'unocss/astro';
import netlify from '@astrojs/netlify/functions';
import node from '@astrojs/node';
const envAdapter = () => {
  switch (process.env.OUTPUT) {
    case 'netlify':
      return netlify({
        edgeMiddleware: true,
      });
    default:
      return node({ mode: 'standalone' });
  }
};

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [
    UnoCSS({ injectReset: true }),
    solidJs(),
  ],
  prefetch: {
    defaultStrategy: 'viewport',
  },
  adapter: envAdapter(),
  server: { port: 4321, host: true },
});
