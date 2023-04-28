import { Given, Then, When} from "cypress-cucumber-preprocessor/steps";

import herokulogin from '../../pageobjects/Login/loginherokuapp.po'

Given('User Launch the Heroku Application', () => {
    cy.visit("https://the-internet.herokuapp.com/login")
  })


  
When(`User Enter inValid creds linke Username {string} and password {string}`, (username, password) => {
   
   herokulogin.entercreds(username, password)
  })
  
  When('User click on LoginButton in LoginPage', () => {
     
    cy.get(herokulogin.Loginbutton()).click()
  })


    
  Then('User should see error message', () => {
     
    cy.get(herokulogin.errormessage()).should("be.visible")
  })
