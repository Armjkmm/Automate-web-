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

require("./Testcase/ttb_login");
require("./Testcase/ttb_company");
require("./Testcase/ttb_create_company");
require("./Testcase/ttb_approval_company");
require("./Testcase/ttb_merchant_management");
require("./Testcase/ttb_terminalManagement");
require("./Testcase/ttb_manegeuser");
require("./Testcase/ttb_transaction");
require("./Testcase/ttb_requestqr");
require("./Testcase/ttb_report");
require("./Testcase/ttb_manage_adminstrator");
require("./Testcase/ttb_audit_log");
