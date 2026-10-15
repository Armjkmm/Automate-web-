describe("Test Scenario: K+ Shop Reader Summary", () => {
  beforeEach(() => {
    // auto login to enter portal page
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME"),
      Cypress.env("KBANK_PASSWORD")
    );
    // wait for 1 second
    cy.wait(1000);
    cy.get(":nth-child(6) > a > span").click();
  });

  context("1_Search Readers Summary", () => {
    beforeEach(() => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(3) > a > div").click();
      /* ==== End Cypress Studio ==== */
    });

    it("M26-01", () => {
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M26-02", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("2724900002sadkl");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist.");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M26-03", () => {
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

    it("M26-04", () => {
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

    it("M26-05", () => {
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

    it("M26-06", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("2724900002");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist.").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M26-07", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".filter").type("401240009240001");
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

    it("M26-08", () => {
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

    it("M26-09", () => {
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

    it("M26-10", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("2724900002");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist.").should("not.exist");

      /* ==== Generated with Cypress Studio ==== */
      cy.get(".selectInTable").select("details");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M26-11", () => {
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

    it("M26-12", () => {
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
        "/spocReader/list?mid=&status=&from=01+Oct+2014&to=02+Oct+2024&page=";
      let pageInfoElement = "#pageInfo";
      let totalRecordElement = ".total_font";
      cy.goLastPage(pageInfoElement, totalRecordElement, searchLastPageUrl);

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("2_Delink Reader", () => {
    beforeEach(() => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(3) > a > div").click();
      /* ==== End Cypress Studio ==== */
    });

    it("M26-13", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("2724900002");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist.").should("not.exist");

      /* ==== Generated with Cypress Studio ==== */
      cy.get(".selectInTable").select("details");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      /* ==== Generated with Cypress Studio ==== */
      cy.get(".viewDetailsBtnEnd > :nth-child(2) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.wait(1000);
      cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it.skip("M26-14: Click 'Continue' button", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("2724900002");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist.").should("not.exist");

      /* ==== Generated with Cypress Studio ==== */
      cy.get(".selectInTable").select("details");
      cy.get("#buttonGo").click();
      /* ==== End Cypress Studio ==== */

      /* ==== Generated with Cypress Studio ==== */
      cy.get(".viewDetailsBtnEnd > :nth-child(2) > .button").click();
      /* ==== End Cypress Studio ==== */

      //TODO: click button confirm inside the iframe
      //   cy.takeScreenshotSimplify(
      //"1",
      //     Cypress.ScreenshotCaptureEnum.FULLPAGE
      //   );
    });
  });

  context("3_Suspend Reader", () => {
    beforeEach(() => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(3) > a > div").click();
      /* ==== End Cypress Studio ==== */
    });

    it("M26-15", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("2724900002");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist.").should("not.exist");

      /* ==== Generated with Cypress Studio ==== */
      cy.get(".selectInTable").select("details");

      cy.get("#buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("form > .button").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M26-16", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("2724900002");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist.").should("not.exist");

      /* ==== Generated with Cypress Studio ==== */
      cy.get(".selectInTable").select("details");
      cy.get("#buttonGo").click();
      /* ==== End Cypress Studio ==== */
      cy.get("form > .button").click();
      cy.wait(1000);
      cy.get("#ctaMid > .button").click();

      cy.contains("Please enter a short description");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M26-17", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("2724900002");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist.").should("not.exist");

      /* ==== Generated with Cypress Studio ==== */
      cy.get(".selectInTable").select("details");
      cy.get("#buttonGo").click();
      /* ==== End Cypress Studio ==== */
      cy.get("form > .button").click();
      cy.wait(1000);
      cy.get("#description").type("test m24-17");
      cy.get("#ctaMid > .button").click();

      cy.contains("success");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("4_Reinstate Reader", () => {
    beforeEach(() => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(3) > a > div").click();
      /* ==== End Cypress Studio ==== */
    });

    it("M26-18", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("2724900002");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist.").should("not.exist");

      /* ==== Generated with Cypress Studio ==== */
      cy.get(".selectInTable").select("details");

      cy.get("#buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("form > .button").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M26-19", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("2724900002");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist.").should("not.exist");

      /* ==== Generated with Cypress Studio ==== */
      cy.get(".selectInTable").select("details");
      cy.get("#buttonGo").click();
      /* ==== End Cypress Studio ==== */
      cy.get("form > .button").click();
      cy.wait(1000);
      cy.get("#ctaMid > .button").click();

      cy.contains("Please enter a short description");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M26-20", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("2724900002");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist.").should("not.exist");

      /* ==== Generated with Cypress Studio ==== */
      cy.get(".selectInTable").select("details");
      cy.get("#buttonGo").click();
      /* ==== End Cypress Studio ==== */
      cy.get("form > .button").click();
      cy.wait(1000);
      cy.get("#description").type("test m24-20");
      cy.get("#ctaMid > .button").click();

      cy.contains("success");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });
});
