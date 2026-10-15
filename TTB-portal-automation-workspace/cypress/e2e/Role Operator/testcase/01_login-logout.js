describe("Test Scenario: 01 Login Logout", () => {
  beforeEach(() => {
    // auto login to enter portal page
    cy.smartShopWebPortal(
      Cypress.env("OPERATOR_USERNAME"),
      Cypress.env("OPERATOR_PASSWORD")
    );
  });

  context("1_Login_Logout", () => {
    it("TS01_TC05 Login", () => {
      //check url must have epayment-tmb
      cy.url().should("include", "epayment-tmb");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.RUNNER);

      // cy.takeScreenshotSimple();
    });

    it("TS01_TC06 Logout", () => {
      cy.contains(/TESTMERC/i).click({ force: true });
      cy.contains(/Logout/i)
        .should("exist")
        .click({ force: true });
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.RUNNER);

      //check message must signed out
      cy.contains(/signed out/i);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);

      // cy.takeScreenshotSimple();
    });
  });
});
