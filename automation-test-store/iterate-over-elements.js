/// <reference types="Cypress" />

describe("Iterate over Elements", () => {
  it("Log information of all hair care products", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index: " + index + " : " +$el.text())
  });
});
})

describe("iterate over elements pt 2", () => {
  it("Log information of all hair care products and click on the third item", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        if($el.text().includes('Curls to straight Shampoo')) {
            cy.wrap($el).click()}
  });
});
});