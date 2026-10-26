const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    //Colocar true para que o Cypress fique observando as alterações 
    // nos arquivos e atualizando automaticamente
    //a cada salvar o teste é executado com o "true" 
    // e com o "false" o teste é executado apenas uma vez
    watchForFileChanges: false,
    
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      // implement node event listeners here


    },
  },
});
