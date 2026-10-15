describe("Testcase Operator", () => {
  context("Setup", () => {
    beforeEach(() => {
      cy.clearCookies();
      cy.clearLocalStorage();

      describeName = this.currentTest.parent.title;
      itName = this.currentTest.title;
    });
  });
});

// require("./testcase/01_login-logout");
// require("./testcase/02_company");
// // require("./testcase/03_manage-user");
require("./testcase/04_report");
