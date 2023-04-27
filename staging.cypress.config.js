const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    "baseUrl":"https://www.flipkart.com/", 

    "defaultCommandTimeout":30000,
    "pageLoadTimeout": 120000,
    "viewportHeight":1920,
    "viewportWidth":1080,
    env:{

         "username" : "StageAdmin",
         "password": "Stageadmin123"
    },


    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
