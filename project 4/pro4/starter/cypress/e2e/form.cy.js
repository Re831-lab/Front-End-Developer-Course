describe("Forms", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
    // navigate to the Card Sets page before each test
    cy.get("#cardSetPage").click();
  });

  describe("Create Set Form", () => {
    beforeEach(() => {
      // open the Create Set form
      cy.get("[data-cy='toggle_form']").click();
    });

    it("happy path: should create a new set with a valid title", () => {
      cy.get("[data-cy='set_form']").should("be.visible");
      cy.get("#titleInput").type("My New Set");
      cy.get("[data-cy='set_form'] input[type='submit']").click();
      // new set should appear in the list
      cy.contains("My New Set").should("be.visible");
    });

    it("unhappy path: should show an error when submitting an empty title", () => {
      cy.get("[data-cy='set_form']").should("be.visible");
      // submit without typing anything
      cy.get("[data-cy='set_form'] input[type='submit']").click();
      // error message should appear
      cy.get(".error").should("be.visible");
      cy.get(".error").should("contain", "TITLE CANNOT BE EMPTY");
    });
  });


  describe("Add Card Form", () => {
    beforeEach(() => {
      // click on a card set to open it
      cy.get("[data-cy='1']").click();
      // Open the Add Card form
      cy.get("[data-cy='toggle_form']").click();
    });

    it("happy path: should add a new card with valid term and description", () => {
      cy.get("[data-cy='card_form']").should("be.visible");
      cy.get("#termInput").type("New Term");
      cy.get("#descriptionInput").type("New Description");
      cy.get("[data-cy='card_form'] input[type='submit']").click();
      //  new card's term should be displayed
      cy.contains("New Term").should("be.visible");
    });

    it("unhappy path: should show an error when both term and description are empty", () => {
      cy.get("[data-cy='card_form']").should("be.visible");
      cy.get("[data-cy='card_form'] input[type='submit']").click();
      cy.get(".error").should("contain", "TERM AND DESCRIPTION CANNOT BE EMPTY");
    });

    it("unhappy path: should show an error when term is empty", () => {
      cy.get("[data-cy='card_form']").should("be.visible");
      cy.get("#descriptionInput").type("Some Description");
      cy.get("[data-cy='card_form'] input[type='submit']").click();
      cy.get(".error").should("contain", "TERM CANNOT BE EMPTY");
    });

    it("unhappy path: should show an error when description is empty", () => {
      cy.get("[data-cy='card_form']").should("be.visible");
      cy.get("#termInput").type("Some Term");
      cy.get("[data-cy='card_form'] input[type='submit']").click();
      cy.get(".error").should("contain", "DESCRIPTION CANNOT BE EMPTY");
    });
  });
});