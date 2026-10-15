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

require("./OTestcase/ttb_company");
require("./OTestcase/ttb_create_company");
require("./OTestcase/ttb_approval_company");
require("./OTestcase/ttb_approval_company2");
require("./OTestcase/ttb_merchant_management");
require("./OTestcase/ttb_terminalManagement");
require("./OTestcase/ttb_manegeuser");
require("./OTestcase/ttb_report");
