describe("Test Scenario: Staff Summary", () => {
  beforeEach(() => {
    // auto login to enter portal page
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME"),
      Cypress.env("KBANK_PASSWORD")
    );

    // wait for 1 second
    cy.wait(1000);
  });

  context("1_Search Staff Summary", () => {
    it("M16-01", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > span").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M16-02", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > span").click();
      cy.get("#search").type("SAMPLESHOULDNOTFIND");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("not exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M16-03", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > span").click();
      cy.get("#search").type("445040540504504");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("not exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M16-04", () => {
      cy.get(":nth-child(4) > a > span").click();
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".styled").select("Suspended");
      cy.get(":nth-child(7) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(".ui-datepicker-year").select("2010");
      cy.get(":nth-child(1) > :nth-child(6) > .ui-state-default").click();
      cy.get(":nth-child(7) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(".ui-datepicker-year").select("2010");
      cy.get(":nth-child(1) > :nth-child(6) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M16-05", () => {
      cy.get(":nth-child(4) > a > span").click();
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(7) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(".ui-datepicker-year").select("2010");
      cy.get(":nth-child(1) > :nth-child(6) > .ui-state-default").click();
      cy.get(":nth-child(7) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(".ui-datepicker-year").select("2010");
      cy.get(":nth-child(1) > :nth-child(6) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M16-06", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > span").click();
      cy.get("#search").type("test12123");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M16-07", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > span").click();
      cy.get("#search").type("12458548");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M16-08", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > span").click();
      cy.get("#search").type("testnatalie@mail.com");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M16-09", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > span").click();
      cy.get("#search").type("099 - 9999999");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M16-10", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > span").click();
      cy.get("#search").type("111111111111199");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M16-11", () => {
      cy.get(":nth-child(4) > a > span").click();

      /* ==== Generated with Cypress Studio ==== */
      cy.get(".styled").select("Active");
      cy.get(":nth-child(7) > :nth-child(2)").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M16-12", () => {
      cy.get(":nth-child(4) > a > span").click();
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(7) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(6) > .ui-state-default").click();
      cy.get(":nth-child(7) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2023");
      cy.get(":nth-child(1) > :nth-child(6) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M16-13", () => {
      cy.get(":nth-child(4) > a > span").click();
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(7) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(6) > .ui-state-default").click();
      cy.get(":nth-child(7) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2023");
      cy.get(":nth-child(1) > :nth-child(6) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      let nextPageBtn = "#next > span";
      let totalRecords = ".total_font";
      cy.goNextPage(nextPageBtn, totalRecords);

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M16-14", () => {
      cy.get(":nth-child(4) > a > span").click();
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(7) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(6) > .ui-state-default").click();
      cy.get(":nth-child(7) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2023");
      cy.get(":nth-child(1) > :nth-child(6) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      let searchLastPageUrl =
        "/mobileUser/list?mid=&status=&from=03+Oct+2014&to=06+Oct+2023&page=";
      let pageInfoElement = "#pageInfo";
      let totalRecordElement = ".total_font";
      cy.goLastPage(pageInfoElement, totalRecordElement, searchLastPageUrl);

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("2_Edit Staff Details", () => {
    beforeEach(() => {
      cy.get(":nth-child(4) > a > span").click();
    });

    it("M16-15", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go149534 > .selectBoxInTable > .selectInTable").select(
        "details"
      );

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#go149534 > :nth-child(2) > #buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M16-16", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go149534 > .selectBoxInTable > .selectInTable").select(
        "details"
      );

      cy.get("#go149534 > :nth-child(2) > #buttonGo").click();
      cy.get("form > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M16-17", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go149534 > .selectBoxInTable > .selectInTable").select(
        "details"
      );

      cy.get("#go149534 > :nth-child(2) > #buttonGo").click();
      cy.get("form > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#\\31").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M16-18", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go149534 > .selectBoxInTable > .selectInTable").select(
        "details"
      );

      cy.get("#go149534 > :nth-child(2) > #buttonGo").click();
      cy.get("form > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.get("#\\31").click();

      cy.wait(1000);
      cy.get("#submitThis").click();

      cy.contains("successful");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("3_Suspend Staff", () => {
    beforeEach(() => {
      cy.get(":nth-child(4) > a > span").click();
    });

    it("M16-19", () => {
      cy.get("#go149534 > .selectBoxInTable > .selectInTable").select(
        "suspend"
      );

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#go149534 > :nth-child(2) > #buttonGo").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M16-20", () => {
      cy.get("#go149534 > .selectBoxInTable > .selectInTable").select(
        "suspend"
      );

      cy.get("#go149534 > :nth-child(2) > #buttonGo").click();
      cy.get("#ctaMid > .button").click();

      cy.contains("Please enter a short description");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M16-21", () => {
      cy.get("#go149534 > .selectBoxInTable > .selectInTable").select(
        "suspend"
      );

      cy.get("#go149534 > :nth-child(2) > #buttonGo").click();
      cy.get("#description").type("test m16-21");
      cy.get("#ctaMid > .button").click();

      cy.contains("success");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("4_Reinstate Staff", () => {
    beforeEach(() => {
      cy.get(":nth-child(4) > a > span").click();
    });

    it("M16-22", () => {
      cy.get("#go149534 > .selectBoxInTable > .selectInTable").select(
        "unsuspend"
      );

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#go149534 > :nth-child(2) > #buttonGo").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M16-23", () => {
      cy.get("#go149534 > .selectBoxInTable > .selectInTable").select(
        "unsuspend"
      );

      cy.get("#go149534 > :nth-child(2) > #buttonGo").click();
      cy.get("#ctaMid > .button").click();

      cy.contains("Please enter a short description");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M16-24", () => {
      cy.get("#go149534 > .selectBoxInTable > .selectInTable").select(
        "unsuspend"
      );

      cy.get("#go149534 > :nth-child(2) > #buttonGo").click();
      cy.get("#description").type("test m16-24");
      cy.get("#ctaMid > .button").click();

      cy.contains("success");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });
});
