import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    viewportHeight: 1080,
    viewportWidth: 1920,
    baseUrl: 'http://localhost:3000',
  },
})
