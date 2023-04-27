import login from '../../pageobjects/Login/loginpage.po'
import dashboard from '../../pageobjects/Dashboard/dashboeardpage.po'

import logindata from '../../fixtures/logincreds.json'



describe('Validate Login functionality', () => {

  beforeEach(function () {

    cy.visit("/")

  });



  afterEach(function () {

    cy.log("Test execution is completed ")

  });

  before(function () {

    cy.log("Before all")

  });


  after(function () {

    cy.log("All Test execution completed ")

  });

  it('Verify login with Valid credentials', () => {



    cy.xpath(login.Orangehrmlogo).should("be.visible")
    //actions
    cy.login(logindata.username, logindata.password)

    //Assertions

    cy.url().should("eq", logindata.dashboardurl)

    cy.url().should("include", logindata.partialdashurl)

    //or
    cy.contains(dashboard.dashboardpageheader()).should("be.visible")

  })

  specify('Verify login with invalid username and valid password', () => {

    //actions
    cy.login(logindata.invalidusername, logindata.password)

    //Assertions

    cy.contains(login.loginerrorMessage()).should("be.visible")


  })

  it('Verify login with valid username and invalid password', () => {


    //actions
    cy.login(logindata.username, logindata.invalidpassword)

    //Assertions

    cy.contains(login.loginerrorMessage()).should("be.visible")



  })


  it('Verify login with invalid username and invalid password', () => {



    //actions
    cy.login(logindata.invalidusername, logindata.invalidpassword)

    //Assertions

    cy.contains(login.loginerrorMessage()).should("be.visible")



  })



})