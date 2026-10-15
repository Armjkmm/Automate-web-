describe("Testcase Viewer", () => {
    context("Setup", () => {
      beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        
        describeName = this.currentTest.parent.title;
        itName = this.currentTest.title;
      });
    });
  });
  
  require("./testcase/01_loginLogout");
  require("./testcase/02_company");
  require("./testcase/03_transaction");
  require("./testcase/04_manageUser");
  require("./testcase/05_requestQR");
  require("./testcase/06_report");