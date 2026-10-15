describe("Test Scenario: Credit Settlement Summary", () => {
  beforeEach(() => {
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME"),
      Cypress.env("KBANK_PASSWORD")
    );

    cy.wait(1000);
    cy.get(":nth-child(8) > a > span").click();
  });

  context("1_Search Batch No", () => {
    it("M33-01", () => {
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M33-02", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("THATSHOULDNOTFOUND");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist.");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M33-03", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > .filter").type("sadsdasfsaf");
      cy.get(":nth-child(9) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(":nth-child(9) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M33-04", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > .filter").type("ogiogkeopgk");
      cy.get(":nth-child(9) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(":nth-child(9) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M33-05", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".styled").select("Successful");
      cy.get(":nth-child(9) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(":nth-child(9) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M33-06", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(9) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(":nth-child(9) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M33-07", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("000030");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("does not exist.").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M33-08", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > .filter").type("10001300");
      cy.get(":nth-child(9) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2023");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(":nth-child(9) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2024");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M33-09", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > .filter").type("milktest11");
      cy.get(":nth-child(9) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2023");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(":nth-child(9) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2024");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M33-10", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".styled").select("Successful");
      cy.get(":nth-child(9) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2023");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(":nth-child(9) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2024");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M33-11", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(9) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2023");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(":nth-child(9) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2024");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M33-12", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(9) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2023");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(":nth-child(9) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2024");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      /* ==== Generated with Cypress Studio ==== */
      cy.get("#next > span").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M33-13", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(9) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2023");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(":nth-child(9) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2024");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      let searchLastPageUrl =
        "/creditSettlement/list?tid=&muid=&status=&from=04+Oct+2023&to=02+Oct+2024&page=";
      let pageInfoElement = "#pageInfo";
      let totalRecordElement = ".total_font";
      cy.goLastPage(pageInfoElement, totalRecordElement, searchLastPageUrl);

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("2_Settlement", () => {
    beforeEach(() => {
      cy.get(".styled").select("Pending");
      const today = new Date();
      const currentYear = today.getFullYear();
      const previousYear = currentYear - 1;
      const month = today.getMonth();
      const day = today.getDate();

      cy.get(":nth-child(9) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select(previousYear.toString());
      cy.get(".ui-datepicker-month").select(month.toString());
      cy.get(".ui-datepicker-calendar td").contains(day).click();
      cy.get(".formButton > .button").click();
      cy.wait(1000);
    });

    it("M33-14", () => {
      // select first topmost item
      cy.get("td#end .button").contains("View Details").first().click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M33-15", () => {
      // select first topmost item
      cy.get("td#end .button").contains("View Details").first().click();
      cy.wait(1000);
      cy.get("#btnSettle").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it("M33-16", () => {
      cy.get("td#end .button").contains("View Details").first().click();
      cy.wait(1000);
      cy.get("#btnSettle").click();

      cy.get(".fancybox-iframe", { timeout: 10000 })
        .should("be.visible")
        .then(($iframe) => {
          // Access the iframe's body
          const iframeBody = $iframe.contents().find("body");

          // Wrap the iframe's body to allow Cypress chaining
          cy.wrap(iframeBody).find("a.button.btnL.nextPopup").click();

          cy.wait(1000);

          cy.takeScreenshotSimplify(
            "1",
            Cypress.ScreenshotCaptureEnum.VIEWPORT
          );
        });
    });
  });
});
