describe("Testcase Admin", () => {
  context("Setup", () => {
    beforeEach(() => {
      cy.clearCookies();
      cy.clearLocalStorage();

      describeName = this.currentTest.parent.title;
      itName = this.currentTest.title;
    });
  });
});

require("./VTestcase/ttb_company");
require("./VTestcase/ttb_transaction");
require("./VTestcase/ttb_manage_user");
require("./VTestcase/ttb_requestqr");
require("./VTestcase/ttb_report");
