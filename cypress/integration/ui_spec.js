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
        cy.get("td.id").should("not.be", "visible");
        cy.get("td.product");
        cy.get("td.product > .description");
        cy.get("input.quantity");
        cy.get("td.price");
        cy.get("td.total");
      });
    });
  });
});
