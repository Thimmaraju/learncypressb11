import { Given, Then } from "cypress-cucumber-preprocessor/steps";


Given('I open Google page', () => {
  cy.visit("https://google.com")
})

Then(`I see {string} in the title`, (title) => {
    cy.title().should('include', title)
  })

  Then(`I enter in {string} and {string} in search box`, (Locator, text) => {
     
       cy.get(Locator).type(text)
  })


  