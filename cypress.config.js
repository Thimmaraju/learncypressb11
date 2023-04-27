const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {

    "baseUrl":"https://opensource-demo.orangehrmlive.com", 
    "projectId": "xwu4ud",

    "defaultCommandTimeout":20000,
   "chromeWebSecurity":false,
   "video":true,
   //"retries": { "runMode": 2, "openMode": 2 },
    "pageLoadTimeout": 120000,
    // "viewportHeight":1920,
    // "viewportWidth":1080,
    env:{

         "username" : "Admin",
         "password": "admin123"
    },
    //"specPattern": "**/*.feature",

    setupNodeEvents(on, config) {

      on('task', {downloadFile})
      require('cypress-mochawesome-reporter/plugin')(on);
      return require('./cypress/plugins/index.js')(on, config)

      // implement node event listeners here
    },
  },
});
