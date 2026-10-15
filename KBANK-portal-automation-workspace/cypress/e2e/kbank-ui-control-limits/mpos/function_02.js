describe("function 02", () => {
  beforeEach(() => {
    // auto login to enter portal page
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME"),
      Cypress.env("KBANK_PASSWORD")
    );

    // wait for 1 seconds
    cy.wait(1000);
  });

  it("TS07", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(2) > a > span").click();
    cy.get("#search").clear();
    cy.get("#search").type("Pentest 02");
    cy.get("form > :nth-child(1) > .button").click();
    cy.get("#go90101 > .selectBoxInTable > .selectInTable").select(
      "viewDetails"
    );

    cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#go90101 > :nth-child(2) > #buttonGo").click();

    cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    /* ==== End Cypress Studio ==== */
  });

  it("TS08", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(2) > a > span").click();
    cy.get("#search").clear();
    cy.get("#search").type("TestAutomate123");
    cy.get("form > :nth-child(1) > .button").click();
    cy.get(".selectInTable").select("viewDetails");

    cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#buttonGo").click();

    cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    /* ==== End Cypress Studio ==== */
  });

  it("TS09", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(2) > a > span").click();
    cy.get("#search").clear();
    cy.get("#search").type("TestAutomate02");
    cy.get("form > :nth-child(1) > .button").click();
    cy.get(".selectInTable").select("viewDetails");

    cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#buttonGo").click();

    cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  });

  it("TS10", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(2) > a > span").click();
    cy.get(".selected > a > div").click();
    cy.get("#search").clear();
    cy.get("#search").type("AutomatedTestCompany1");
    cy.get("form > :nth-child(1) > .button").click();
    cy.get(".selectInTable").select("viewDetails");
    /* ==== End Cypress Studio ==== */

    cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#buttonGo").click();

    /* ==== End Cypress Studio ==== */
    cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  });

  it("TS11", () => {
    //TODO: test after temp per transaction is expired

    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(2) > a > span").click();
    cy.get(".selected > a > div").click();
    cy.get("#search").clear();
    cy.get("#search").type("AutomatedTestCompany1");
    cy.get("form > :nth-child(1) > .button").click();
    cy.get(".selectInTable").select("viewDetails");
    /* ==== End Cypress Studio ==== */

    cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#buttonGo").click();

    /* ==== End Cypress Studio ==== */
    cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  });

  it("TS12", () => {
    //TODO: test after temp per month is expired

    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(2) > a > span").click();
    cy.get(".selected > a > div").click();
    cy.get("#search").clear();
    cy.get("#search").type("AutomatedTestCompany1");
    cy.get("form > :nth-child(1) > .button").click();
    cy.get(".selectInTable").select("viewDetails");
    /* ==== End Cypress Studio ==== */

    cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#buttonGo").click();

    /* ==== End Cypress Studio ==== */
    cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  });
});
