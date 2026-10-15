describe("Test Scenario: Manage Company Add a User", () => {
  beforeEach(() => {
    // auto login to enter portal page
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME"),
      Cypress.env("KBANK_PASSWORD")
    );

    // wait for 1 second
    cy.wait(1000);
    cy.get(":nth-child(5) > a > span").click();
  });

  context("1_Add a Company User", () => {
    it("M22-01", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M22-02", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      cy.get("#search").type("THATSHOULDNOTFIND");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("not exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M22-03", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      cy.get("#search").type("Digio");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("not exist").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M22-04", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      cy.get("#search").type("Cte2");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("not exist").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M22-05", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      cy.get("#search").type("111111111111111");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("not exist").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M22-06", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      cy.get("#search").type("Digio");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("not exist").should("not.exist");

      /* ==== Generated with Cypress Studio ==== */
      cy.get("#end > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M22-07", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      cy.get("#search").type("Digio");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("not exist").should("not.exist");

      /* ==== Generated with Cypress Studio ==== */
      cy.get("#end > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.get("#\\31").click();

      cy.contains("Please enter valid");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M22-08", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      cy.get("#search").type("Digio");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("not exist").should("not.exist");

      /* ==== Generated with Cypress Studio ==== */
      cy.get("#end > .button").click();
      /* ==== End Cypress Studio ==== */

      let searchUrl = "/companyUser/registerSearch?search=";
      let prefix = "AutomatedTester";

      cy.getNextIdFollowingPrefix(prefix, searchUrl).then(($generateName) => {
        cy.get("#name").type(prefix);
        cy.get("#contact").type("0804440000");

        let mockEmail = `${$generateName}@mail.com`;
        cy.get("#email").type(mockEmail);
      });

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#\\31").click();
      cy.contains("Please enter valid").should("not.exist");

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M22-09", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      cy.get("#search").type("Digio");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("not exist").should("not.exist");

      /* ==== Generated with Cypress Studio ==== */
      cy.get("#end > .button").click();
      /* ==== End Cypress Studio ==== */

      let searchUrl = "/companyUser/registerSearch?search=";
      let prefix = "AutomatedTester";

      cy.getNextIdFollowingPrefix(prefix, searchUrl).then(($generateName) => {
        cy.get("#name").type(prefix);
        cy.get("#contact").type("0804440000");

        let mockEmail = `${$generateName}@mail.com`;
        cy.get("#email").type(mockEmail);
      });

      cy.get("#\\31").click();
      cy.contains("Please enter valid").should("not.exist");

      cy.wait(1000);
      cy.get("#submitThis").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M22-10", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      cy.get("#search").type("test");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("not exist").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      let nextPageBtn = "#next > span";
      let totalRecords = ".total_font";
      cy.goNextPage(nextPageBtn, totalRecords);

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M22-11", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      cy.get("#search").type("test");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      let searchLastPageUrl =
        "/companyUser/registerSearch?search=test&action=search&page=";
      let pageInfoElement = "#pageInfo";
      let totalRecordElement = ".total_font";
      cy.goLastPage(pageInfoElement, totalRecordElement, searchLastPageUrl);

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });
});
