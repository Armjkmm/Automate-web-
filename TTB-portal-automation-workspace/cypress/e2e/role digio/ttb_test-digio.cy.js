describe("Testcase Digio", () => {
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
require("./testcase/02_requestQR");