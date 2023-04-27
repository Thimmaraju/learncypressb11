describe("visiting webpage using cypress", () => {

    after(function () {
      cy.log( "after All" );
    });


    beforeEach(function () {
      cy.log("before each" );
    });


    afterEach(function () {
      cy.log("after each" );
    });

    before(function () {
        cy.log("before All");
    });
  

    it("should visit the page", () => {
      cy.log("1st IT block");
      cy.visit("https://www.google.com/");
    });

    it("dummy block 2", () => {
      cy.log("2nd IT block");
    });

    it("dummy block 3", () => {
        cy.log("3rd IT block");
      });
  });