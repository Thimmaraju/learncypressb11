describe('Verify Google search', () => {

  it('Verify saerching "DBS QA Technologies"', () => {
    cy.visit('http://google.com/')

    cy.get('input[aria-label="Search"]').type("DBS QA Technologies{enter}", {force:true})
  })

})