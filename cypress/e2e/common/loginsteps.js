import { Given, Then } from "cypress-cucumber-preprocessor/steps";

import login from "../../pageobjects/Login/loginpage.po";

import dashboard from "../../pageobjects/Dashboard/dashboeardpage.po";
import logindata  from '../../fixtures/logincreds.json'


Given('User launch the Application', () => {
  cy.visit("/")
})

When(`User Enter valid username {string} and Valid password {string}`, (username, password) => {
   
    //    cy.xpath(login.usernameInput()).type(username)
    //    cy.xpath(login.passwordInput()).type(password)

    cy.login(username, password)
  })

When('User clicks on login Button', () => {
   
    cy.get(login.loginButton()).click()
  })

Then('User should be navigated to Dashboard Page', () => {

    cy.url().should("eq", logindata.dashboardurl)

    cy.url().should("include", logindata.partialdashurl)

    //or
    cy.contains(dashboard.dashboardpageheader()).should("be.visible")
   
  })


  When(`User Enter Invalid username {string} and Invalid password {string}`, (wrongusername, wrongpassword) => {
   
    // cy.xpath(login.usernameInput()).type(wrongusername)
    // cy.xpath(login.passwordInput()).type(wrongpassword)

    cy.login(wrongusername, wrongpassword)
})


Then('User should get error Message', () => {

    cy.contains(login.loginerrorMessage()).should("be.visible")
   
  })