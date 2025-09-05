import { defineConfig } from 'astro/config'
import netlify from '@astrojs/netlify'
import clerk from '@clerk/astro'
import { ukUA } from '@clerk/localizations'

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server',

  integrations: [clerk({
    localization: ukUA,
  })],

  adapter: netlify({
    // Important for Clerk on Netlify: leave edgeMiddleware OFF
    // edgeMiddleware: false // (default)
  }),

  vite: {
    plugins: [tailwindcss()],
  },
})