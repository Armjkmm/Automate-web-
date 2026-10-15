describe("Test Scenario: Reader Summary", () => {
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
    it("M24-01", () => {
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M24-02", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("SN02789123");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist.");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M24-03", () => {
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

    it("M24-04", () => {
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

    it("M24-05", () => {
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

    it("M24-06", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("SN00111130");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist.").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M24-07", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".filter").type("401000780309001");
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

    it("M24-08", () => {
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

    it("M24-09", () => {
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

    it("M24-10", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("PWC2024005");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist.").should("not.exist");
      cy.get(".selectInTable").select("details");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#buttonGo").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M24-11", () => {
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

    it("M24-12", () => {
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
        "/reader/list?mid=&status=&from=01+Oct+2014&to=02+Oct+2024&page=";
      let pageInfoElement = "#pageInfo";
      let totalRecordElement = ".total_font";
      cy.goLastPage(pageInfoElement, totalRecordElement, searchLastPageUrl);

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("2_Re-injection HSM key", () => {
    it("M24-13", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("PWC2024005");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist.").should("not.exist");
      cy.get(".selectInTable").select("details");

      cy.get("#buttonGo").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".viewDetailsBtnEnd > :nth-child(1) > .button").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it.skip("M24-14: Click 'Continue' button", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("PWC2024005");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist.").should("not.exist");
      cy.get(".selectInTable").select("details");

      cy.get("#buttonGo").click();
      cy.get(".viewDetailsBtnEnd > :nth-child(1) > .button").click();

      cy.wait(1000);
      //TODO: access iframe to click button inside it

      //   cy.takeScreenshotSimplify(
      //"1",
      //     Cypress.ScreenshotCaptureEnum.FULLPAGE
      //   );
    });
  });

  context("3_Delink Reader", () => {
    it("M24-15", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("1234000004");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist.").should("not.exist");
      cy.get(".selectInTable").select("details");

      cy.get("#buttonGo").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(3) > .button").click();
      /* ==== End Cypress Studio ==== */
      cy.wait(1000);

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it.skip("M24-16: Click 'Continue' button", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("1234000004");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist.").should("not.exist");
      cy.get(".selectInTable").select("details");

      cy.get("#buttonGo").click();

      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(3) > .button").click();
      /* ==== End Cypress Studio ==== */
      cy.wait(1000);
      //TODO: access iframe to click button inside it

      //   cy.takeScreenshotSimplify(
      //"1",
      //     Cypress.ScreenshotCaptureEnum.FULLPAGE
      //   );
    });
  });

  context("4_Suspend Reader", () => {
    beforeEach(() => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("PWC2024005");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist.").should("not.exist");
    });

    it("M24-17", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".selectInTable").select("suspend");
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#buttonGo").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M24-18", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".selectInTable").select("suspend");
      /* ==== End Cypress Studio ==== */
      cy.get("#buttonGo").click();
      cy.get("#ctaMid > .button").click();

      cy.contains("Please enter a short description");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M24-19", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".selectInTable").select("suspend");
      /* ==== End Cypress Studio ==== */
      cy.get("#buttonGo").click();
      cy.get("#description").type("test m24-18");
      cy.get("#ctaMid > .button").click();

      cy.contains("success");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("5_Reinstate Reader", () => {
    beforeEach(() => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("PWC2024005");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist.").should("not.exist");
    });

    it("M24-20", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".selectInTable").select("unsuspend");
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#buttonGo").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M24-21", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".selectInTable").select("unsuspend");
      /* ==== End Cypress Studio ==== */
      cy.get("#buttonGo").click();
      cy.get("#ctaMid > .button").click();

      cy.contains("Please enter a short description");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M24-22", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".selectInTable").select("unsuspend");
      /* ==== End Cypress Studio ==== */
      cy.get("#buttonGo").click();
      cy.get("#description").type("test m24-22");
      cy.get("#ctaMid > .button").click();

      cy.contains("success");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });
});
