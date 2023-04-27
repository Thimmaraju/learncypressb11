import login from "../../pageobjects/Login/loginpage.po"
import dashboard from "../../pageobjects/Dashboard/dashboeardpage.po"
import logindata from "../../fixtures/logincreds.json"
import jobtitledata from "../../fixtures/PIM/addjobtitle.json"

describe('Validate adding Job title', () => {

    it('Verify adding job title with Valid input', () => {      
    
      cy.visit('/')
      //actions
     cy.login(logindata.username, logindata.password)

      //Assertions

      cy.url().should("eq", logindata.dashboardurl)

      cy.contains(dashboard.adminmenu()).click()

      cy.get('span[class="oxd-topbar-body-nav-tab-item"]').eq(1).click()

      cy.AddJobTitle(jobtitledata.jobtitle,jobtitledata.jobdescription)
      
    })

  })