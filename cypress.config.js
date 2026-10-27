const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: {
    openMode: 0, // interativo 
    runMode: 2, // headless
  },
  reporter: 'cypress-mochawesome-reporter',
  
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true
  },

  e2e: {
    baseUrl: `https://www.automationexercise.com`,

    //Colocar true para que o Cypress fique observando as alterações 
    // nos arquivos e atualizando automaticamente
    //a cada salvar o teste é executado com o "true" 
    // e com o "false" o teste é executado apenas uma vez
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      return config
    },
  },
});
