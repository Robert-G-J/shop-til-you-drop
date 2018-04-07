describe("Shopping Cart", () => {
  it("should have the correct <title>", () => {
    cy.visit("/");
    cy.title().should("include", "Cart");
  });
});
