import { defineConfig } from 'cypress'

export default defineConfig({
  
  e2e: { 
        setupNodeEvents(on, config) {
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
