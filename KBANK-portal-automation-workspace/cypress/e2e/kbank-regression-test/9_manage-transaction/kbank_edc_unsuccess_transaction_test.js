describe("Test Scenario: Unsuccessful Transactions EDC", () => {
  beforeEach(() => {
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME"),
      Cypress.env("KBANK_PASSWORD")
    );

    cy.wait(1000);
    cy.get(":nth-child(7) > a > span").click();
  });

  context("1_Unsuccessful Transactions (EDC)", () => {
    beforeEach(() => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > div").click();
      /* ==== End Cypress Studio ==== */
    });

    it('M31-01: Click "Unsuccessful Transaction (EDC)" sub-menu', () => {
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M31-02", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > .filter").type("askdjalsd");
      cy.get(".filterForm > :nth-child(6)").click();
      cy.get(".filterForm > :nth-child(6) > :nth-child(2)").click();
      cy.get(".ui-datepicker-title").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(":nth-child(6) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M31-03", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > .filter").type("SADKFJSAF");
      cy.get(".filterForm > :nth-child(6) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get("tbody > :nth-child(1) > :nth-child(4)").click();
      cy.get(":nth-child(6) > :nth-child(4)").click();
      cy.get(".ui-datepicker-current-day > .ui-state-default").click();
      cy.get(":nth-child(6) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M31-04", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".filterForm > :nth-child(6) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get("tbody > :nth-child(1) > :nth-child(4)").click();
      cy.get(":nth-child(6) > :nth-child(4)").click();
      cy.get(".ui-datepicker-current-day > .ui-state-default").click();
      cy.get(":nth-child(6) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M31-05", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > .filter").type("401000005018001");
      cy.get(".filterForm > :nth-child(6) > :nth-child(2)").click();
      cy.get(".ui-datepicker-month").select("5");
      cy.get(
        ':nth-child(1) > [data-handler="selectDay"] > .ui-state-default'
      ).click();
      cy.get(":nth-child(6) > :nth-child(4)").click();
      cy.get(":nth-child(1) > :nth-child(3) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M31-06", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > .filter").type("11500292");
      cy.get(".filterForm > :nth-child(6) > :nth-child(2)").click();
      cy.get(".ui-datepicker-month").select("8");
      cy.get(":nth-child(1) > :nth-child(1) > .ui-state-default").click();
      cy.get("#todate").click();
      cy.get(":nth-child(1) > :nth-child(3) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M31-07", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".filterForm > :nth-child(6) > :nth-child(2)").click();
      cy.get(".ui-datepicker-month").select("8");
      cy.get(":nth-child(1) > :nth-child(1) > .ui-state-default").click();
      cy.get("#todate").click();
      cy.get(":nth-child(1) > :nth-child(3) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M31-08", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".filterForm > :nth-child(6) > :nth-child(2)").click();
      cy.get(".ui-datepicker-month").select("8");
      cy.get(":nth-child(1) > :nth-child(1) > .ui-state-default").click();
      cy.get("#todate").click();
      cy.get(":nth-child(1) > :nth-child(3) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(5) > #end > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M31-09", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".filterForm > :nth-child(6) > :nth-child(2)").click();
      cy.get(".ui-datepicker-month").select("8");
      cy.get(":nth-child(1) > :nth-child(1) > .ui-state-default").click();
      cy.get("#todate").click();
      cy.get(":nth-child(1) > :nth-child(3) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      /* ==== Generated with Cypress Studio ==== */
      cy.get("#next > span").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M31-10", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".filterForm > :nth-child(6) > :nth-child(2)").click();
      cy.get(".ui-datepicker-month").select("8");
      cy.get(":nth-child(1) > :nth-child(1) > .ui-state-default").click();
      cy.get("#todate").click();
      cy.get(":nth-child(1) > :nth-child(3) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      let searchLastPageUrl =
        "/edcFailtransaction/list?mid=&tid=&from=01+Sep+2024&to=01+Oct+2024&page=";
      let pageInfoElement = "#pageInfo";
      let totalRecordElement = ".total_font";
      cy.goLastPage(pageInfoElement, totalRecordElement, searchLastPageUrl);

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });
});
