describe("Test Scenario: Multi Merchant", () => {
  beforeEach(() => {
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME"),
      Cypress.env("KBANK_PASSWORD")
    );

    cy.wait(1000);
  });

  context("1_Change Multi Merchant Without Transaction", () => {
    it("M39-01", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > span").click();
      cy.get("#search").clear("na");
      cy.get("#search").type("natchatest11");
      cy.get("form > :nth-child(1) > .button").click();
      cy.get(".selectInTable").select("details");
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#buttonGo").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("form > .button").click();

      cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      /* ==== Generated with Cypress Studio ==== */
      cy.get(
        ":nth-child(4) > .checkBoxDiv > .width250FloatLeft > .MidDes > .checkbox"
      ).check();
      /* ==== End Cypress Studio ==== */
      cy.takeScreenshotSimplify("4", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#\\31").click();
      cy.wait(1000);

      cy.takeScreenshotSimplify("5", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.wait(1000);
      cy.get("#submitThis").click();
      cy.takeScreenshotSimplify("6", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M39-02", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > span").click();
      cy.get("#search").type("natchatest11");
      cy.get("form > :nth-child(1) > .button").click();
      cy.get(".selectInTable").select("details");
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#buttonGo").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("form > .button").click();

      cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      /* ==== Generated with Cypress Studio ==== */
      cy.get(
        ":nth-child(4) > :nth-child(3) > .checkBoxDiv > .width250FloatLeft > .MidDes > .checkbox"
      ).uncheck();
      cy.get(
        ":nth-child(4) > .checkBoxDiv > .width250FloatLeft > .MidDes > .checkbox"
      ).uncheck();

      cy.takeScreenshotSimplify("4", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      /* ==== End Cypress Studio ==== */

      cy.get("#\\31").click();
      cy.wait(1000);

      cy.takeScreenshotSimplify("5", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.wait(1000);
      cy.get("#submitThis").click();
      cy.takeScreenshotSimplify("6", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#popUpSubmit").click();
      cy.takeScreenshotSimplify("7", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M39-03", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > span").click();
      cy.get("#search").type("natchatest11");
      cy.get("form > :nth-child(1) > .button").click();
      cy.get(".selectInTable").select("details");
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#buttonGo").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("form > .button").click();

      cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      /* ==== Generated with Cypress Studio ==== */
      cy.get(
        ":nth-child(4) > :nth-child(3) > .checkBoxDiv > .width250FloatLeft > .MidDes > .checkbox"
      ).check();

      cy.takeScreenshotSimplify("4", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#\\31 ").click();
      cy.wait(1000);

      cy.takeScreenshotSimplify("5", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.wait(1000);
      cy.get("#submitThis").click();
      cy.takeScreenshotSimplify("6", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      /* ==== End Cypress Studio ==== */
    });
  });

  context("2_Change Multi Merchant With Transaction", () => {
    it("M39-04", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > span").click();
      cy.get("#search").type("29722981");
      cy.get("form > :nth-child(1) > .button").click();
      cy.get(".selectInTable").select("details");

      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#buttonGo").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("form > .button").click();

      cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      /* ==== Generated with Cypress Studio ==== */
      cy.get(
        ":nth-child(4) > .checkBoxDiv > .width250FloatLeft > .MidDes > .checkbox"
      ).check();
      /* ==== End Cypress Studio ==== */
      cy.takeScreenshotSimplify("4", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#\\31").click();
      cy.wait(1000);

      cy.takeScreenshotSimplify("5", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.wait(1000);
      cy.get("#submitThis").click();
      cy.takeScreenshotSimplify("6", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M39-05", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(7) > a > span").click();
      /* ==== End Cypress Studio ==== */
      //TODO: Manual Testing
    });

    it("M39-06", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > span").click();
      cy.get("#search").type("29722981");
      cy.get("form > :nth-child(1) > .button").click();
      cy.get(".selectInTable").select("details");

      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#buttonGo").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("form > .button").click();

      cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      /* ==== Generated with Cypress Studio ==== */
      cy.get(
        ":nth-child(4) > .checkBoxDiv > .width250FloatLeft > .MidDes > .checkbox"
      ).uncheck();
      /* ==== End Cypress Studio ==== */
      cy.takeScreenshotSimplify("4", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      /* ==== Generated with Cypress Studio ==== */
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */
      cy.wait(2000);
      cy.takeScreenshotSimplify("5", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#submitThis").click();
      cy.wait(2000);

      cy.takeScreenshotSimplify("6", Cypress.ScreenshotCaptureEnum.VIEWPORT);

      cy.get("#popUpSubmit").click();
      cy.wait(2000);
      cy.takeScreenshotSimplify("7", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M39-07", () => {
      //TODO: settlement

      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > span").click();
      cy.get("#search").type("29722981");
      cy.get("form > :nth-child(1) > .button").click();
      cy.get(".selectInTable").select("details");

      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#buttonGo").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("form > .button").click();

      cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      /* ==== Generated with Cypress Studio ==== */
      cy.get(
        ":nth-child(4) > .checkBoxDiv > .width250FloatLeft > .MidDes > .checkbox"
      ).uncheck();
      /* ==== End Cypress Studio ==== */
      cy.takeScreenshotSimplify("4", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      /* ==== Generated with Cypress Studio ==== */
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */
      cy.wait(2000);
      cy.takeScreenshotSimplify("5", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#submitThis").click();
      cy.wait(2000);

      cy.takeScreenshotSimplify("6", Cypress.ScreenshotCaptureEnum.VIEWPORT);

      cy.get("#popUpSubmit").click();
      cy.wait(2000);
      cy.takeScreenshotSimplify("7", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });
});
