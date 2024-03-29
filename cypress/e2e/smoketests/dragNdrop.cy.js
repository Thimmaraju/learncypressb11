///<reference types="cypress"/>

describe('Automation - Working With Drag and Drop', function () {

    it('Cypress Test Case - Understanding Drag and Drop', function () {

      Cypress.on("uncaught:exception", () => {
  
        return false;
      });
      
  
      cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop');

      cy.wait(5000)


      //first Approach

     // cy.get(sourceitems).drag(targetelement)

      cy.get('#menu-fried-chicken').drag('#plate-items');

      //cy.get('#menu-hamburger').drag('#plate-items');

     //Second Approach
       const dataTransfer = new DataTransfer();

       
      cy.get('#menu-hamburger').trigger('dragstart',{
    
        dataTransfer
      })

      cy.get('#plate-items').trigger('drop',{

        dataTransfer
      })
      
      cy.get('#menu-ice-cream').trigger('dragstart',{
    
        dataTransfer
      })

      cy.get('#plate-items').trigger('drop',{

        dataTransfer
      })



      
    })

  })
