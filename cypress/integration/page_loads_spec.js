/* eslint-disable */

describe("Shopping Cart", () => {
  it("loads successfully", () => {
    cy.visit("/");
  });

  it("should have the correct <title>", () => {
    cy.visit("/");
    cy.title().should("include", "Cart");
  });

  context("Querying", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("has DOM elements of", () => {
      cy.get(".header__title").should("contain", "Shopping Cart");
      cy.get(".table-row").within(() => {
        cy.get("button:first").should("contain", "+");
        cy.get("button:last").should("contain", "-");
      });
      cy.get(".table-row__product");
      cy.get(".table-row__price");
      cy.get(".table-row__unit");
      cy.get(".table-row__quantity");
      cy.get(".table-row__quantity");
      cy.get(".table-row__subtotal");
    });
  });
});
