describe("Auto login K-BANK", () => {
  it("Auto Login", () => {
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME"),
      Cypress.env("KBANK_PASSWORD")
    );
  });
});
