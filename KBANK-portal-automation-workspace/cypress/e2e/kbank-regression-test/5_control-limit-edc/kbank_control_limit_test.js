describe("Test Scenario: Control Limit", () => {
  beforeEach(() => {
    // auto login to enter portal page
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME"),
      Cypress.env("KBANK_PASSWORD")
    );
  });

  context("1_Search Company Summary (Control Limit)", () => {
    it('M10-01: Click "Control Limit" menu', () => {
      // click company tab
      cy.get(":nth-child(3) > a > span").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M10-02", () => {
      cy.get(":nth-child(3) > a > span").click();

      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("samplemustbenotfound");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M10-03", () => {
      cy.get(":nth-child(3) > a > span").click();
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

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M10-04", () => {
      cy.get(":nth-child(3) > a > span").click();
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

    it("M10-05", () => {
      cy.get(":nth-child(3) > a > span").click();

      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("regression testtest");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M10-06", () => {
      cy.get(":nth-child(3) > a > span").click();

      /* ==== Generated with Cypress Studio ==== */
      cy.get(".styled").select("ACTIVE");
      cy.get(".filterForm > :nth-child(5) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2021");
      cy.get(":nth-child(1) > :nth-child(6) > .ui-state-default").click();
      cy.get(".filterForm > :nth-child(5) > :nth-child(4)").click();
      cy.get(":nth-child(1) > :nth-child(3) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M10-07", () => {
      cy.get(":nth-child(3) > a > span").click();

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

    it('M10-08: Change to next page - click on ">" to the next page', () => {
      cy.get(":nth-child(3) > a > span").click();

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

    it("M10-09", () => {
      cy.get(":nth-child(3) > a > span").click();

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
        "/controlLimit/listEDC?status=&from=01+Oct+2021&to=01+Oct+2024&page=";
      let pageInfoElement = "#pageInfo";
      let totalRecordElement = ".total_font";
      cy.goLastPage(pageInfoElement, totalRecordElement, searchLastPageUrl);

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("2_Edit Company Details (Control Limit)", () => {
    beforeEach(() => {
      cy.get(":nth-child(3) > a > span").click();
    });

    it("M10-10", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go53505 > .selectBoxInTable > .selectInTable").select(
        "viewDetailsEDC"
      );

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#go53505 > :nth-child(2) > #buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it('M10-11: Click "Edit Company details"', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go53505 > .selectBoxInTable > .selectInTable").select(
        "viewDetailsEDC"
      );
      cy.get("#go53505 > :nth-child(2) > #buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.get("form > .button").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it('M10-12: Edit company details and Click "Submit"', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go53505 > .selectBoxInTable > .selectInTable").select(
        "viewDetailsEDC"
      );
      cy.get("#go53505 > :nth-child(2) > #buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.get("form > .button").click();
      cy.get("#remark").type("test m10 - 12");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.get("#\\31");
      /* ==== Generated with Cypress Studio ==== */

      /* ==== End Cypress Studio ==== */
      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M10-13", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go53505 > .selectBoxInTable > .selectInTable").select(
        "viewDetailsEDC"
      );
      cy.get("#go53505 > :nth-child(2) > #buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.get("form > .button").click();
      cy.get("#remark").type("test m10 - 13");

      cy.get("#\\31").click();
      cy.wait(1000);
      cy.get("#submitThis").click();

      cy.contains("success");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("3_Suspend Company (Control Limit)", () => {
    beforeEach(() => {
      cy.get(":nth-child(3) > a > span").click();
    });

    it("M10-14", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go53505 > .selectBoxInTable > .selectInTable").select(
        "/controlLimit/suspendEDC"
      );

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#go53505 > :nth-child(2) > #buttonGo").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M10-15", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go53505 > .selectBoxInTable > .selectInTable").select(
        "/controlLimit/suspendEDC"
      );
      cy.get("#go53505 > :nth-child(2) > #buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.get("#submitForm").click();
      cy.contains("Please enter a short description");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M10-16", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go53505 > .selectBoxInTable > .selectInTable").select(
        "/controlLimit/suspendEDC"
      );
      cy.get("#go53505 > :nth-child(2) > #buttonGo").click();
      /* ==== End Cypress Studio ==== */
      cy.get("#remarks").type("test m10 16");

      cy.get("#submitForm").click();
      cy.contains("success");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("4_Reinstate Company (Control Limit)", () => {
    beforeEach(() => {
      cy.get(":nth-child(3) > a > span").click();
    });

    it("M10-17", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go53505 > .selectBoxInTable > .selectInTable").select(
        "/controlLimit/activateEDC"
      );
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#go53505 > :nth-child(2) > #buttonGo").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M10-18", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go53505 > .selectBoxInTable > .selectInTable").select(
        "/controlLimit/activateEDC"
      );
      /* ==== End Cypress Studio ==== */

      cy.get("#go53505 > :nth-child(2) > #buttonGo").click();
      cy.get("#ctaMid > .button").click();

      cy.contains("Please enter a short description");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M10-19", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go53505 > .selectBoxInTable > .selectInTable").select(
        "/controlLimit/activateEDC"
      );
      /* ==== End Cypress Studio ==== */

      cy.get("#go53505 > :nth-child(2) > #buttonGo").click();
      cy.get("#remarks").type("test m10 19");
      cy.get("#ctaMid > .button").click();

      cy.contains("success");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });
});
