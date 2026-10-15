describe("Testcase C scan B", () => {
  context("Setup", () => {
    beforeEach(() => {
      cy.clearCookies();
      cy.clearLocalStorage();

      describeName = this.currentTest.parent.title;
      itName = this.currentTest.title;
    });
  });
});

require("./testcase/01_settlementType");
require("./testcase/02_statusPromtpay");
