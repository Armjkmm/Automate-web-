describe("Test Scenario: K+ Shop Staff Summary", () => {
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

  context("1_Search K+ Shop Staff Summary", () => {
    it("M18-01", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(5) > a > div").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M18-02", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(5) > a > div").click();
      cy.get("#search").type("SAMPLETHATSHOULDFOUND");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist.");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M18-03", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(5) > a > div").click();
      cy.get(".filter").type("173678887993847");
      cy.get(".formButton > .button").click();

      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M18-04", () => {
      cy.get(":nth-child(5) > a > div").click();
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".styled").select("Suspended");
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

    it("M18-05", () => {
      cy.get(":nth-child(5) > a > div").click();
      /* ==== Generated with Cypress Studio ==== */
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

    it("M18-06", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(5) > a > div").click();
      cy.get("#search").type("KB000000517062");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist.").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M18-07", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(5) > a > div").click();
      cy.get("#search").type("43004037");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist.").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M18-08", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(5) > a > div").click();
      cy.get("#search").type("atmplkae3344@sit.com");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist.").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M18-09", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(5) > a > div").click();
      cy.get("#search").type("0939742833");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist.").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M18-10", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(5) > a > div").click();
      cy.get(".filter").type("401230026224001");
      cy.get(".formButton > .button").click();

      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M18-11", () => {
      cy.get(":nth-child(5) > a > div").click();
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".styled").select("Suspended");
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M18-12", () => {
      cy.get(":nth-child(5) > a > div").click();
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

    it("M18-13", () => {
      cy.get(":nth-child(5) > a > div").click();
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

    it("M18-14", () => {
      cy.get(":nth-child(5) > a > div").click();
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
        "/spocMobileUser/list?mid=&status=&from=01+Oct+2014&to=02+Oct+2024&page=";
      let pageInfoElement = "#pageInfo";
      let totalRecordElement = ".total_font";
      cy.goLastPage(pageInfoElement, totalRecordElement, searchLastPageUrl);

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("2_Suspend K+ Shop Staff", () => {
    beforeEach(() => {
      cy.get(":nth-child(5) > a > div").click();
    });

    it("M18-15", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".selected > a > div").click();
      cy.get("#search").type("KB000000517062");
      cy.get("form > :nth-child(1) > .button").click();
      cy.get(".selectInTable").select("suspend");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M18-16", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".selected > a > div").click();
      cy.get("#search").type("KB000000517062");
      cy.get("form > :nth-child(1) > .button").click();
      cy.get(".selectInTable").select("suspend");
      cy.get("#buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.get("#ctaMid > .button").click();

      cy.contains("Please enter a short description");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M18-17", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".selected > a > div").click();
      cy.get("#search").type("KB000000517062");
      cy.get("form > :nth-child(1) > .button").click();
      cy.get(".selectInTable").select("suspend");
      cy.get("#buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.get("#description").type("test m18-17");
      cy.get("#ctaMid > .button").click();

      cy.contains("Please enter a short description").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("3_Reinstate K+ Shop Staff", () => {
    beforeEach(() => {
      cy.get(":nth-child(5) > a > div").click();
    });

    it("M18-18", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".selected > a > div").click();
      cy.get("#search").type("KB000000517062");
      cy.get("form > :nth-child(1) > .button").click();
      cy.get(".selectInTable").select("unsuspend");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M18-19", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".selected > a > div").click();
      cy.get("#search").type("KB000000517062");
      cy.get("form > :nth-child(1) > .button").click();
      cy.get(".selectInTable").select("unsuspend");
      cy.get("#buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.get("#ctaMid > .button").click();

      cy.contains("Please enter a short description");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M18-20", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".selected > a > div").click();
      cy.get("#search").type("KB000000517062");
      cy.get("form > :nth-child(1) > .button").click();
      cy.get(".selectInTable").select("unsuspend");
      cy.get("#buttonGo").click();
      /* ==== End Cypress Studio ==== */
      cy.get("#description").type("test m18-20");
      cy.get("#ctaMid > .button").click();

      cy.contains("Please enter a short description").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });
});
