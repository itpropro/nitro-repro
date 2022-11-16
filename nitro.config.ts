import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
  runtimeConfig: {
    cacheMaxAge: process.env.CACHE_MAX_AGE || 60,
  },
  noPublicDir: true,
})
