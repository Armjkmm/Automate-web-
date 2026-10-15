describe("Test Scenario: Resent Receipt", () => {
  beforeEach(() => {
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME"),
      Cypress.env("KBANK_PASSWORD")
    );

    cy.wait(1000);
  });

  context("1-Resent Receipt", () => {
    it("M38-01", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(7) > a > span").click();
      cy.get(":nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-month").select("8");
      cy.get("tbody > :nth-child(1) > :nth-child(1)").click();
      cy.get("#todate").click();
      cy.get("#todate").click();
      cy.get(":nth-child(1) > :nth-child(3) > .ui-state-default").click();
      cy.get(".formButton > .button").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(":nth-child(5) > #end > .button").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      /* ==== End Cypress Studio ==== */

      cy.get('[href="getItemReceipt?itemid=4884066&type=merchant"]').click();
    });

    it("M38-02", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(7) > a > span").click();
      cy.get(":nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-month").select("8");
      cy.get(":nth-child(1) > :nth-child(2) > .ui-state-default").click();
      cy.get(":nth-child(14) > :nth-child(4)").click();
      cy.get(".ui-datepicker-header").click();
      cy.get(":nth-child(1) > :nth-child(3) > .ui-state-default").click();
      cy.get(".formButton > .button").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(":nth-child(8) > #end > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get('[href="getItemReceipt?itemid=4884065&type=customer"]').click();
    });

    it("M38-03", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(7) > a > span").click();
      cy.get(":nth-child(8) > .styled").select("Voided");
      cy.get(".formButton > .button").click();
      cy.get(":nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-month").select("8");
      cy.get(":nth-child(1) > :nth-child(1) > .ui-state-default").click();
      cy.get(".formButton > .button").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(":nth-child(5) > #end > .button").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      /* ==== End Cypress Studio ==== */

      cy.get('[href="getItemReceipt?itemid=4884068&type=void"]').click();
    });
  });
});
