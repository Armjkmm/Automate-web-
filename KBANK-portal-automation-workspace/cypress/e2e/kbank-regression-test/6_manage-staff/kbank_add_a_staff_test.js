describe("Test Scenario: Add a Staff", () => {
  beforeEach(() => {
    // auto login to enter portal page
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME"),
      Cypress.env("KBANK_PASSWORD")
    );
    // wait for 1 second
    cy.wait(1000);
    cy.get(":nth-child(4) > a > span").click();
  });

  context("1_Add a Staff", () => {
    it("M17-01", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M17-02", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      cy.get("#search").type("SAMPLESHOULDNOTFOUND");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M17-03", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      cy.get("#search").type("Digio");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M17-04", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      cy.get("#search").type("testregression");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M17-05", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      cy.get("#search").type("000000000000001");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M17-06", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      cy.get("#search").type("Digio");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      /* ==== Generated with Cypress Studio ==== */
      cy.get("#end > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M17-07", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      cy.get("#search").type("Digio");
      cy.get("form > :nth-child(1) > .button").click();

      cy.contains("does not exist").should("not.exist");

      cy.get("#end > .button").click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Please enter valid");
      cy.contains("Please select Mid");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M17-08", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      cy.get("#search").type("Digio");
      cy.get("form > :nth-child(1) > .button").click();

      cy.contains("does not exist").should("not.exist");

      cy.get("#end > .button").click();
      cy.get("#mobileUserId").type("testnatalie");
      cy.get("#name").type("testnatalie");
      cy.get("#contact").type("0824440000");
      cy.get("#email").type("testnatalie@mail.com");
      cy.get(
        ":nth-child(4) > .checkBoxDiv > .width250FloatLeft > .MidDes > .checkbox"
      ).check();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#\\31 ").click();

      cy.contains("Duplicated. Not Available");

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M17-09", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      cy.get("#search").type("Digio");
      cy.get("form > :nth-child(1) > .button").click();

      cy.contains("does not exist").should("not.exist");

      cy.get("#end > .button").click();

      let searchUrl =
        "https://mpostest1.kasikornbank.com:7443/mobileUser/list?search=";
      let namePrefix = "AutomatedTestStaff";
      cy.getNextIdFollowingPrefix(namePrefix, searchUrl).then(
        ($generateName) => {
          cy.get("#mobileUserId").type($generateName);
          cy.get("#name").type(namePrefix);
          cy.get("#contact").type("0824440000");

          let mockEmail = `${$generateName}@mail.com`;
          cy.get("#email").type(mockEmail);
        }
      );

      cy.get(
        ":nth-child(4) > .checkBoxDiv > .width250FloatLeft > .MidDes > .checkbox"
      ).check();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#\\31 ").click();

      cy.contains("Duplicated. Not Available").should("not.exist");

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M17-10", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      cy.get("#search").type("Digio");
      cy.get("form > :nth-child(1) > .button").click();

      cy.contains("does not exist").should("not.exist");

      cy.get("#end > .button").click();

      let searchUrl =
        "https://mpostest1.kasikornbank.com:7443/mobileUser/list?search=";
      let namePrefix = "AutomatedTestStaff";
      cy.getNextIdFollowingPrefix(namePrefix, searchUrl).then(
        ($generateName) => {
          cy.get("#mobileUserId").type($generateName);
          cy.get("#name").type($generateName);
          cy.get("#contact").type("0824440000");

          let mockEmail = `${$generateName}@mail.com`;
          cy.get("#email").type(mockEmail);
        }
      );

      cy.get(
        ":nth-child(4) > .checkBoxDiv > .width250FloatLeft > .MidDes > .checkbox"
      ).check();
      /* ==== End Cypress Studio ==== */
      cy.get("#\\31 ").click();

      cy.contains("Duplicated. Not Available").should("not.exist");

      cy.wait(1000);
      cy.get("#submitThis").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M17-11", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      cy.get("#search").type("test");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      let nextPageBtn = "#next > span";
      let totalRecords = ".total_font";
      cy.goNextPage(nextPageBtn, totalRecords);

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M17-12", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      cy.get("#search").type("test");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      let searchLastPageUrl =
        "/mobileUser/registerSearch?search=test&action=search&page=";
      let pageInfoElement = "#pageInfo";
      let totalRecordElement = ".total_font";
      cy.goLastPage(pageInfoElement, totalRecordElement, searchLastPageUrl);

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });
});
