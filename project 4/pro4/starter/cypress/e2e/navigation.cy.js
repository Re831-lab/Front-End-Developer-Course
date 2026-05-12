describe("Navigation", () => {
   beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("should navigate to the Card Sets page when clicking 'Card Sets'", () => {
    cy.get("#cardSetPage").click();
     cy.get("[data-cy='study-set-header']").should("be.visible");
  });

  it("should navigate to the About page when clicking 'About'", () => {
    cy.get("#aboutPage").click();
     cy.get("[data-cy='about_page']").should("be.visible");
  });

  it("should navigate to the Home page when clicking 'Home'", () => {
    // First go to another page
    cy.get("#aboutPage").click();
    // Then navigate back home
    cy.get("#homePage").click();
    // The home header should be visible
    cy.get("[data-cy='home_header']").should("be.visible");
  });
});