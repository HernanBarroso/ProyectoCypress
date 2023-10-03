import { defineConfig } from 'cypress'

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: { 
        setupNodeEvents(on, config) {
          require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
      on('task', {
        logMessage(message) {
          console.log(message);
          return null;
        },
      });
    },
  },
});
