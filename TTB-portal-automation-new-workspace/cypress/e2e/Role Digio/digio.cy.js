describe("Testcase Admin", () => {
  context("Setup", () => {
    beforeEach(() => {
      // cy.clearCookies();
      cy.clearLocalStorage();

      describeName = this.currentTest.parent.title;
      itName = this.currentTest.title;
    });
  });
});

require("./DTestcase/ttb_requestqr");
