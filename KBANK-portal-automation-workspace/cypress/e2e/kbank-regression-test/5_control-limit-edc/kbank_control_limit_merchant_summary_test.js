describe("Test Scenario: Merchant Summary", () => {
  beforeEach(() => {
    // auto login to enter portal page
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME"),
      Cypress.env("KBANK_PASSWORD")
    );

    // wait for 1 second
    cy.wait(1000);
    cy.get(":nth-child(3) > a > span").click();
  });

  context("1_Search and export in Merchant Summary", () => {
    it('M13-01: Click "Merchant Summary" sub-menu', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(3) > a > div").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M13-02", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(3) > a > div").click();
      cy.get("#search").type("samplemustbenotfound");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M13-03", () => {
      cy.get(":nth-child(3) > a > div").click();
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".styled").select("SUSPENDED");
      cy.get(".filterForm > :nth-child(5) > :nth-child(2)").click();
      cy.get(".ui-datepicker-header").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".filterForm > :nth-child(5) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M13-04", () => {
      cy.get(":nth-child(3) > a > div").click();
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".filterForm > :nth-child(5) > :nth-child(2)").click();
      cy.get(".ui-datepicker-header").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".filterForm > :nth-child(5) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M13-05", () => {
      cy.get(":nth-child(3) > a > div").click();

      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("regression testtest");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M13-06", () => {
      cy.get(":nth-child(3) > a > div").click();

      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("401013922423001");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M13-07", () => {
      cy.get(":nth-child(3) > a > div").click();

      /* ==== Generated with Cypress Studio ==== */
      cy.get(".styled").select("ACTIVE");
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M13-08", () => {
      cy.get(":nth-child(3) > a > div").click();

      /* ==== Generated with Cypress Studio ==== */
      cy.get(".filterForm > :nth-child(5) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2021");
      cy.get(":nth-child(1) > :nth-child(6) > .ui-state-default").click();
      cy.get(".filterForm > :nth-child(5) > :nth-child(4)").click();
      cy.get(":nth-child(1) > :nth-child(3) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M13-09", () => {
      cy.get(":nth-child(3) > a > div").click();

      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go71127 > .selectBoxInTable > .selectInTable").select(
        "/controlLimit/viewInquiryDetail"
      );

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#go71127 > :nth-child(2) > #buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M13-10", () => {
      cy.get(":nth-child(3) > a > div").click();

      /* ==== Generated with Cypress Studio ==== */
      cy.get(".filterForm > :nth-child(5) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2021");
      cy.get(":nth-child(1) > :nth-child(6) > .ui-state-default").click();
      cy.get(".filterForm > :nth-child(5) > :nth-child(4)").click();
      cy.get(":nth-child(1) > :nth-child(3) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      let nextPageBtn = "#next > span";
      let totalRecords = ".total_font";
      cy.goNextPage(nextPageBtn, totalRecords);

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M13-11", () => {
      cy.get(":nth-child(3) > a > div").click();

      /* ==== Generated with Cypress Studio ==== */
      cy.get(".filterForm > :nth-child(5) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2021");
      cy.get(":nth-child(1) > :nth-child(6) > .ui-state-default").click();
      cy.get(".filterForm > :nth-child(5) > :nth-child(4)").click();
      cy.get(":nth-child(1) > :nth-child(3) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      let searchLastPageUrl =
        "/controlLimit/merchantList?status=&from=01+Oct+2021&to=01+Oct+2024&page=";
      let pageInfoElement = "#pageInfo";
      let totalRecordElement = ".total_font";
      cy.goLastPage(pageInfoElement, totalRecordElement, searchLastPageUrl);

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("2_Add Temporary Limit", () => {
    beforeEach(() => {
      cy.get(":nth-child(3) > a > div").click();
    });

    it("M13-12", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go71127 > .selectBoxInTable > .selectInTable").select(
        "/controlLimit/addTemporary"
      );

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#go71127 > :nth-child(2) > #buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M13-13", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go71127 > .selectBoxInTable > .selectInTable").select(
        "/controlLimit/addTemporary"
      );
      cy.get("#go71127 > :nth-child(2) > #buttonGo").click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Please enter valid Amount");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M13-14", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go71127 > .selectBoxInTable > .selectInTable").select(
        "/controlLimit/addTemporary"
      );
      cy.get("#go71127 > :nth-child(2) > #buttonGo").click();
      cy.get("#tempEDCPerTransac").type("81000");

      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(4)"
      ).click();
      cy.get(":nth-child(2) > :nth-child(6) > .ui-state-default").click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Please enter valid Temporary Start Date");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M13-15", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go71127 > .selectBoxInTable > .selectInTable").select(
        "/controlLimit/addTemporary"
      );
      cy.get("#go71127 > :nth-child(2) > #buttonGo").click();
      cy.get("#tempEDCPerTransac").type("81000");
      cy.get("#mainContainer").click();
      cy.get("#datepickerAddTemporaryPerTransactionStartDate").click();
      cy.get(":nth-child(2) > :nth-child(6) > .ui-state-default").click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Please enter valid Temporary End Date");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M13-16", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go71127 > .selectBoxInTable > .selectInTable").select(
        "/controlLimit/addTemporary"
      );
      cy.get("#go71127 > :nth-child(2) > #buttonGo").click();
      cy.get("#tempEDCPerTransac").type("81000");

      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(4)"
      ).click();
      cy.get(":nth-child(2) > :nth-child(6) > .ui-state-default").click();
      cy.get("#datepickerAddTemporaryPerTransactionStartDate").click();
      cy.get(":nth-child(2) > :nth-child(6) > .ui-state-default").click();
      cy.get("#tempEDCPerMonth").type("101000");
      cy.get("#temporaryPerMonth > :nth-child(2) > :nth-child(4)").click();
      cy.get('[data-handler="selectDay"] > .ui-state-default').click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Please enter valid Temporary Start Date");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M13-17", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go71127 > .selectBoxInTable > .selectInTable").select(
        "/controlLimit/addTemporary"
      );
      cy.get("#go71127 > :nth-child(2) > #buttonGo").click();
      cy.get("#tempEDCPerTransac").type("81000");

      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(4)"
      ).click();
      cy.get(":nth-child(2) > :nth-child(6) > .ui-state-default").click();
      cy.get("#datepickerAddTemporaryPerTransactionStartDate").click();
      cy.get(":nth-child(2) > :nth-child(6) > .ui-state-default").click();
      cy.get("#tempEDCPerMonth").type("101000");
      cy.get("#temporaryPerMonth > :nth-child(2) > :nth-child(2)").click();
      cy.get(":nth-child(2) > :nth-child(6) > .ui-state-default").click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Please enter valid Temporary End Date");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M13-18", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go71127 > .selectBoxInTable > .selectInTable").select(
        "/controlLimit/addTemporary"
      );
      cy.get("#go71127 > :nth-child(2) > #buttonGo").click();
      cy.get("#tempEDCPerTransac").type("52000");

      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(4)"
      ).click();
      cy.get(":nth-child(2) > :nth-child(6) > .ui-state-default").click();
      cy.get("#datepickerAddTemporaryPerTransactionStartDate").click();
      cy.get(":nth-child(2) > :nth-child(6) > .ui-state-default").click();
      cy.get("#tempEDCPerMonth").type("51000");
      cy.get("#temporaryPerMonth > :nth-child(2) > :nth-child(4)").click();
      cy.get('[data-handler="selectDay"] > .ui-state-default').click();
      cy.get("#temporaryPerMonth > :nth-child(2) > :nth-child(2)").click();
      cy.get(":nth-child(2) > :nth-child(6) > .ui-state-default").click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Amount per Month must more than Amount per Transaction");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it('M13-19: Input Add Temporary Limit details and Click "Submit"', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go71127 > .selectBoxInTable > .selectInTable").select(
        "/controlLimit/addTemporary"
      );
      cy.get("#go71127 > :nth-child(2) > #buttonGo").click();
      cy.get("#tempEDCPerTransac").type("6000");

      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(4)"
      ).click();
      cy.get(":nth-child(2) > :nth-child(6) > .ui-state-default").click();
      cy.get("#datepickerAddTemporaryPerTransactionStartDate").click();
      cy.get(":nth-child(2) > :nth-child(6) > .ui-state-default").click();
      cy.get("#tempEDCPerMonth").type("60000");
      cy.get("#temporaryPerMonth > :nth-child(2) > :nth-child(4)").click();
      cy.get('[data-handler="selectDay"] > .ui-state-default').click();
      cy.get("#temporaryPerMonth > :nth-child(2) > :nth-child(2)").click();
      cy.get(":nth-child(2) > :nth-child(6) > .ui-state-default").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M13-20", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go71127 > .selectBoxInTable > .selectInTable").select(
        "/controlLimit/addTemporary"
      );
      cy.get("#go71127 > :nth-child(2) > #buttonGo").click();
      cy.get("#tempEDCPerTransac").type("6000");

      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(4)"
      ).click();
      cy.get(":nth-child(2) > :nth-child(6) > .ui-state-default").click();
      cy.get("#datepickerAddTemporaryPerTransactionStartDate").click();
      cy.get(":nth-child(2) > :nth-child(6) > .ui-state-default").click();
      cy.get("#tempEDCPerMonth").type("60000");
      cy.get("#temporaryPerMonth > :nth-child(2) > :nth-child(4)").click();
      cy.get('[data-handler="selectDay"] > .ui-state-default').click();
      cy.get("#temporaryPerMonth > :nth-child(2) > :nth-child(2)").click();
      cy.get(":nth-child(2) > :nth-child(6) > .ui-state-default").click();
      cy.get("#\\31 ").click();
      cy.wait(1000);
      cy.get("#submitThis").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("3_Add Permanent Limit", () => {
    beforeEach(() => {
      cy.get(":nth-child(3) > a > div").click();
    });

    it("M13-21", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go71127 > .selectBoxInTable > .selectInTable").select(
        "/controlLimit/updatePermanent"
      );

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#go71127 > :nth-child(2) > #buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M13-22", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go71127 > .selectBoxInTable > .selectInTable").select(
        "/controlLimit/updatePermanent"
      );

      cy.get("#go71127 > :nth-child(2) > #buttonGo").click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Please enter valid Amount");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M13-23", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go71127 > .selectBoxInTable > .selectInTable").select(
        "/controlLimit/updatePermanent"
      );

      cy.get("#go71127 > :nth-child(2) > #buttonGo").click();
      cy.get("#maxAmountEDCPerTransac").type("70000");
      cy.get("#maxAmountEDCPerMonth").type("60000");
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Amount per Month must more than Amount per Transaction");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it('M13-24: Input Add Permanent Limit details and Click "Submit"', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go71127 > .selectBoxInTable > .selectInTable").select(
        "/controlLimit/updatePermanent"
      );

      cy.get("#go71127 > :nth-child(2) > #buttonGo").click();
      cy.get("#maxAmountEDCPerTransac").type("7000");
      cy.get("#maxAmountEDCPerMonth").type("70000");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M13-25", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go71127 > .selectBoxInTable > .selectInTable").select(
        "/controlLimit/updatePermanent"
      );

      cy.get("#go71127 > :nth-child(2) > #buttonGo").click();
      cy.get("#maxAmountEDCPerTransac").type("7000");
      cy.get("#maxAmountEDCPerMonth").type("70000");
      cy.get("#\\31 ").click();
      cy.get("#submitThis").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });
});
