describe('Checkboxes', () => {
    beforeEach(() => {
      cy.visit('https://bit.ly/3vswFBe')
    })
  
    it('checks all checkboxes with one command', () => {

      cy.xpath("//input[@type='checkbox']").should("have.length", 7)

      cy.get('input[type="checkbox"]').check()
      
      cy.get('input[type="checkbox"]').uncheck()

     // cy.get('#tecnologia6').check()
      
       cy.get('input[type="checkbox"]').check(["HTML","Javascript","C#"])

       cy.wait(5000)

       cy.get('#check input[type="checkbox"]').uncheck(["HTML","Javascript"])
        
    })
  })