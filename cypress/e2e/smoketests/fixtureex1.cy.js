
describe('Verify Register functionality', function () {

    
    before(function () {
      cy.fixture('registerdata').then(function (data) {
        this.data = data;
      })
    })
  
    it('Verify Registration flow for registred user', function () {
  
      
      cy.visit('https://shop.demoqa.com/my-account/');
      cy.wait(2000)

      cy.enterText("//*[@id='reg_username']", this.data.username)

      
      //cy.get('#reg_username').type(this.data.username);
      cy.wait(2000)

      cy.enterText("#reg_email", this.data.emailaddress)
     // cy.get('#reg_email').type(this.data.emailaddress);
      cy.wait(2000)

      cy.enterText('#reg_password',this.data.weakpassword)
      
      //cy.get('#reg_password').type(this.data.weakpassword)
     
     //Checking whether the Register button is disabled or not either by grabbing the property or by checking its UI behavior
      
       //cy.get('locatoer').should('have.attr', 'attrname', 'attvalue');
     cy.get('.woocommerce-Button').should('have.attr', 'disabled', 'disabled');
    
      //or

      cy.elementTodisabled('.woocommerce-Button')
     //cy.get('.woocommerce-Button').should('be.disabled');
      cy.wait(10000)
      // Clicking on to register on the Website by entering new password 
      //cy.get('#reg_password').clear()
      // cy.wait(5000)
       cy.get('#reg_password').clear().type(this.data.strongpassword);
      cy.wait(10000)
    //   cy.wait(15000)
      cy.clickonelement('.woocommerce-Button');
  
    //   //Checking whether the Registration is successful and whether UserName is populated under login section
       cy.get('#username').should('have.value', this.data.username);

       //or

       cy.get('#username').should('have.attr', 'value', this.data.username);
     })


  })

