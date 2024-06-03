import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:8080",
    specPattern: './test/cypress/integration/*.spec.ts',
    fixturesFolder: "test/cypress/fixtures",
    screenshotsFolder: "test/cypress/screenshots",
    videosFolder: "test/cypress/videos",
    downloadsFolder: "test/cypress/downloads",
    supportFile: "test/cypress/support/e2e.ts",
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
