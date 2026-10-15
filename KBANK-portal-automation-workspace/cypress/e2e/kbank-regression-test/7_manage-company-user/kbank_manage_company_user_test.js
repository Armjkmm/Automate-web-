describe("Test Scenario: Manage Company Users", () => {
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

  context("1_Search Company User", () => {
    it("M21-01", () => {
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M21-02", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("SAMPLETHATSHOULDFOUND");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist.");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M21-03", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".filter").type("sdaasdsffs");
      cy.get(":nth-child(7) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(":nth-child(7) > :nth-child(4)").click();
      cy.get(".ui-datepicker-title").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M21-04", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".styled").select("Terminated");
      cy.get(":nth-child(7) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(":nth-child(7) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M21-05", () => {
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

    it("M21-06", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("mr.automated");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist.").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M21-07", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("aut1@example.com");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist.").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M21-08", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("0800000000");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist.").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M21-09", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".filter").type("401000782660001");
      cy.get(":nth-child(7) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(":nth-child(7) > :nth-child(4)").click();
      cy.get(".ui-datepicker-title").click();
      cy.get(".ui-datepicker-year").select("2024");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M21-10", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".styled").select("Active");
      cy.get(":nth-child(7) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(":nth-child(7) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2024");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M21-11", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(7) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(":nth-child(7) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2024");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M21-12", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(7) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(":nth-child(7) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2024");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      let nextPageBtn = "#next > span";
      let totalRecords = ".total_font";
      cy.goNextPage(nextPageBtn, totalRecords);

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M21-13", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(7) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(":nth-child(7) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2024");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      let searchLastPageUrl =
        "/companyUser/list?mid=&status=&from=01+Oct+2014&to=02+Oct+2024&page=";
      let pageInfoElement = "#pageInfo";
      let totalRecordElement = ".total_font";
      cy.goLastPage(pageInfoElement, totalRecordElement, searchLastPageUrl);

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("2_Edit Company User", () => {
    it("M21-14", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go90919 > .selectBoxInTable > .selectInTable").select("details");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#go90919 > :nth-child(2) > #buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M21-15", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go90919 > .selectBoxInTable > .selectInTable").select("details");
      cy.get("#go90919 > :nth-child(2) > #buttonGo").click();
      cy.get("form > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M21-16", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go90919 > .selectBoxInTable > .selectInTable").select("details");
      cy.get("#go90919 > :nth-child(2) > #buttonGo").click();
      cy.get("form > .button").click();
      cy.get("#email").clear();
      cy.get("#email").type("rgtest@test.rg");
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#\\31").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M21-17", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go90919 > .selectBoxInTable > .selectInTable").select("details");
      cy.get("#go90919 > :nth-child(2) > #buttonGo").click();
      cy.get("form > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#\\31").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M21-18", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go90919 > .selectBoxInTable > .selectInTable").select("details");
      cy.get("#go90919 > :nth-child(2) > #buttonGo").click();
      cy.get("form > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.get("#\\31").click();

      cy.wait(1000);
      cy.get("#submitThis").click();

      cy.contains("successful");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("3_Suspend Company User", () => {
    it("M21-19", () => {
      cy.get("#go90919 > .selectBoxInTable > .selectInTable").select("suspend");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#go90919 > :nth-child(2) > #buttonGo").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M21-20", () => {
      cy.get("#go90919 > .selectBoxInTable > .selectInTable").select("suspend");
      cy.get("#go90919 > :nth-child(2) > #buttonGo").click();
      cy.get("#ctaMid > .button").click();

      cy.contains("Please enter a short description");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M21-21", () => {
      cy.get("#go90919 > .selectBoxInTable > .selectInTable").select("suspend");
      cy.get("#go90919 > :nth-child(2) > #buttonGo").click();
      cy.get("#description").type("test m21-21");
      cy.get("#ctaMid > .button").click();

      cy.contains("success");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("4_Reinstate Company User", () => {
    it("M21-22", () => {
      cy.get("#go90919 > .selectBoxInTable > .selectInTable").select(
        "unsuspend"
      );

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#go90919 > :nth-child(2) > #buttonGo").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M21-23", () => {
      cy.get("#go90919 > .selectBoxInTable > .selectInTable").select(
        "unsuspend"
      );
      cy.get("#go90919 > :nth-child(2) > #buttonGo").click();
      cy.get("#ctaMid > .button").click();

      cy.contains("Please enter a short description");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M21-24", () => {
      cy.get("#go90919 > .selectBoxInTable > .selectInTable").select(
        "unsuspend"
      );
      cy.get("#go90919 > :nth-child(2) > #buttonGo").click();
      cy.get("#description").type("test m21-24");
      cy.get("#ctaMid > .button").click();

      cy.contains("success");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });
});
