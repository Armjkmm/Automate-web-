describe("Test Scenario: Transactions Summary (EDC)", () => {
  beforeEach(() => {
    // Auto login to enter the portal page
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME"),
      Cypress.env("KBANK_PASSWORD")
    );
    // Wait for 1 second after login
    cy.wait(1000);
    cy.get(":nth-child(7) > a > span").click();
  });

  context("1_Search Transactions Summary (EDC)", () => {
    beforeEach(() => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      /* ==== End Cypress Studio ==== */
    });

    it("M29-01", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > .filter").type("47388993573793934");
      cy.get(".filterForm").click();
      cy.get(".filterForm > :nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".filterForm > :nth-child(14) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get("tbody > :nth-child(1) > :nth-child(4)").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M29-02", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > .filter").type("TD0023884937503208");
      cy.get(".filterForm").click();
      cy.get(".filterForm > :nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".filterForm > :nth-child(14) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get("tbody > :nth-child(1) > :nth-child(4)").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M29-03", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(6) > .filter").type("FFX000");
      cy.get(".filterForm").click();
      cy.get(".filterForm > :nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".filterForm > :nth-child(14) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get("tbody > :nth-child(1) > :nth-child(4)").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M29-04", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(8) > .styled").select("Voided");
      cy.get(".filterForm").click();
      cy.get(".filterForm > :nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".filterForm > :nth-child(14) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get("tbody > :nth-child(1) > :nth-child(4)").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M29-05", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(11) > .styled").select("THB 1,000 - 9,999");
      cy.get(".filterForm").click();
      cy.get(".filterForm > :nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".filterForm > :nth-child(14) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get("tbody > :nth-child(1) > :nth-child(4)").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M29-06", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".filterForm").click();
      cy.get(".filterForm > :nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".filterForm > :nth-child(14) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get("tbody > :nth-child(1) > :nth-child(4)").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M29-07", () => {
      /* ==== Generated with Cypress Studio ==== */

      cy.get(":nth-child(2) > .filter").type("401013922481001");
      cy.get(".filterForm").click();
      cy.get(".filterForm > :nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".filterForm > :nth-child(14) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2024");
      cy.get("tbody > :nth-child(1) > :nth-child(4)").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M29-08", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > .filter").type("22221180");
      cy.get(".filterForm").click();
      cy.get(".filterForm > :nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2023");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".filterForm > :nth-child(14) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2024");
      cy.get("tbody > :nth-child(1) > :nth-child(4)").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M29-09", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(6) > .filter").type("005093");
      cy.get(".filterForm").click();
      cy.get(".filterForm > :nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2023");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".filterForm > :nth-child(14) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2024");
      cy.get("tbody > :nth-child(1) > :nth-child(4)").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M29-10", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(8) > .styled").select("Voided");
      cy.get(".filterForm > :nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-month").select("8");
      cy.get(":nth-child(1) > :nth-child(1) > .ui-state-default").click();
      cy.get("#todate").click();
      cy.get(":nth-child(1) > :nth-child(3) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M29-11", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(11) > .styled").select("Below THB 999");
      cy.get(".filterForm > :nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-month").select("8");
      cy.get(":nth-child(1) > :nth-child(1) > .ui-state-default").click();
      cy.get("#todate").click();
      cy.get(":nth-child(1) > :nth-child(3) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M29-13", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(11) > .styled").select("Below THB 999");
      cy.get(".filterForm > :nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-month").select("8");
      cy.get(":nth-child(1) > :nth-child(1) > .ui-state-default").click();
      cy.get("#todate").click();
      cy.get(":nth-child(1) > :nth-child(3) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(5) > #end > .button > span").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M29-14", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(8) > .styled").select("Voided");
      cy.get(".filterForm > :nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-month").select("8");
      cy.get(":nth-child(1) > :nth-child(1) > .ui-state-default").click();
      cy.get("#todate").click();
      cy.get(":nth-child(1) > :nth-child(3) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      let nextPageBtn = "#next > span";
      let totalRecords = ".total_font";
      cy.goNextPage(nextPageBtn, totalRecords);

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M29-15", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(8) > .styled").select("Voided");
      cy.get(".filterForm > :nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-month").select("8");
      cy.get(":nth-child(1) > :nth-child(1) > .ui-state-default").click();
      cy.get("#todate").click();
      cy.get(":nth-child(1) > :nth-child(3) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      let searchLastPageUrl =
        "/edcTransaction/list?mid=&tid=&approvalCode=&status=Voided&amount=&from=01+Sep+2024&to=01+Oct+2024&page=";
      let pageInfoElement = "#pageInfo";
      let totalRecordElement = ".total_font";
      cy.goLastPage(pageInfoElement, totalRecordElement, searchLastPageUrl);

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });
});
