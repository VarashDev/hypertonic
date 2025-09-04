import { defineConfig } from 'astro/config'
import netlify from '@astrojs/netlify'
import clerk from '@clerk/astro'

export default defineConfig({
  output: 'server',
  integrations: [clerk()],
  adapter: netlify({
    // Important for Clerk on Netlify: leave edgeMiddleware OFF
    // edgeMiddleware: false // (default)
  }),
})