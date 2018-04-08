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
      cy.get(".food-item-row").within(() => {
        cy.get("button:first").should("contain", "+");
        cy.get("button:last").should("contain", "-");
      });
      cy.get(".food-item-row__item");
      cy.get(".food-item-row__price");
      cy.get(".food-item-row__quantity");
      cy.get(".food-item-row__subtotal");
    });
  });
});
