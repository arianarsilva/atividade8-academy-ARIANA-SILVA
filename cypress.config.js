const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");


module.exports = defineConfig({
  e2e: {
    env: {
      apiBaseUrl: "https://raromdb-3c39614e42d4.herokuapp.com/api",
      baseUrl: "https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/",
      TAGS: 'not @ignore'
    },
    specPattern: "**/*.feature",
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({ plugins: [createEsbuildPlugin(config)] })
      );
      return config;
    },
  },
});

