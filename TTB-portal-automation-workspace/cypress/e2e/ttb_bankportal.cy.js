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

// require("./ttb_login_logout"); //Pass
// require("./ttb_company");
// require("./ttb_transaction"); //Pass
// require("./ttb_manageuser"); //Pass
// require("./ttb_requestqr"); //Pass
// require("./ttb_report"); //Pass
// require("./ttb_Audit"); //Pass
// require("./ttb_Setting");
require("./ttb_bulkUpload");
