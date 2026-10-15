describe("Test Scenario: Transactions Summary", () => {
  beforeEach(() => {
    // auto login to enter portal page
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME"),
      Cypress.env("KBANK_PASSWORD")
    );
    // wait for 1 second
    cy.wait(1000);
    cy.get(":nth-child(7) > a > span").click();
  });

  context("1_Search Transaction Summary", () => {
    it("M28-01", () => {
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M28-02", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".filterForm > :nth-child(2)").click();
      cy.get(":nth-child(2) > .filter").type("47388993573793934");
      cy.get("#fromdate").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(":nth-child(14) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M28-03", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > .filter").type("TD0023884937503208");
      cy.get(":nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-header").click();
      cy.get(".ui-datepicker-header").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get("#todate").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M28-04", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(6) > .filter").clear("F");
      cy.get(":nth-child(6) > .filter").type("FFX000");
      cy.get(":nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(":nth-child(14) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M28-05", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(8) > .styled").select("Voided");
      cy.get(":nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get("#todate").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M28-06", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".filterForm > :nth-child(11)").click();
      cy.get(":nth-child(11) > .styled").select("THB 10,000 - 99,999");
      cy.get(":nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(":nth-child(14) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M28-07", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(":nth-child(14) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M28-08", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".filterForm > :nth-child(2)").click();
      cy.get(":nth-child(2) > .filter").type("401002839773001");
      cy.get(":nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-month").select("6");
      cy.get(":nth-child(1) > :nth-child(2) > .ui-state-default").click();
      cy.get(":nth-child(14) > :nth-child(4)").click();
      cy.get("thead > tr > :nth-child(3)").click();
      cy.get(":nth-child(1) > :nth-child(3) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M28-09", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > .filter").type("10001300");

      cy.get(":nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-month").select("6");
      cy.get(":nth-child(1) > :nth-child(2) > .ui-state-default").click();
      cy.get(":nth-child(14) > :nth-child(4)").click();
      cy.get("thead > tr > :nth-child(3)").click();
      cy.get(":nth-child(1) > :nth-child(3) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M28-10", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(6) > .filter").type("R30040");
      cy.get(":nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-month").select("6");
      cy.get(":nth-child(1) > :nth-child(2) > .ui-state-default").click();
      cy.get(":nth-child(14) > :nth-child(4)").click();
      cy.get("thead > tr > :nth-child(3)").click();
      cy.get(":nth-child(1) > :nth-child(3) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M28-11", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(8) > .styled").select("Voided");
      cy.get(":nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-month").select("6");
      cy.get(":nth-child(1) > :nth-child(2) > .ui-state-default").click();
      cy.get(":nth-child(14) > :nth-child(4)").click();
      cy.get("thead > tr > :nth-child(3)").click();
      cy.get(":nth-child(1) > :nth-child(3) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M28-12", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".filterForm > :nth-child(11)").click();
      cy.get(":nth-child(11) > .styled").select("THB 1,000 - 9,999");
      cy.get(":nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-month").select("6");
      cy.get(":nth-child(1) > :nth-child(2) > .ui-state-default").click();
      cy.get(":nth-child(14) > :nth-child(4)").click();
      cy.get("thead > tr > :nth-child(3)").click();
      cy.get(":nth-child(1) > :nth-child(3) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M28-13", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2023");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(":nth-child(14) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2024");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M28-14", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-month").select("6");
      cy.get(":nth-child(1) > :nth-child(2) > .ui-state-default").click();
      cy.get(":nth-child(14) > :nth-child(4)").click();
      cy.get("thead > tr > :nth-child(3)").click();
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

    it("M28-15", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-month").select("6");
      cy.get(":nth-child(1) > :nth-child(2) > .ui-state-default").click();
      cy.get(":nth-child(14) > :nth-child(4)").click();
      cy.get("thead > tr > :nth-child(3)").click();
      cy.get(":nth-child(1) > :nth-child(3) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      let searchLastPageUrl =
        "/transaction/list?mid=&tid=&approvalCode=&status=&amount=&from=01+Jul+2024&to=01+Oct+2024&page=";
      let pageInfoElement = "#pageInfo";
      let totalRecordElement = ".total_font";
      cy.goLastPage(pageInfoElement, totalRecordElement, searchLastPageUrl);

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("2_Void Transaction", () => {
    beforeEach(() => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".selected > a > div").click();
      cy.get(":nth-child(8) > .styled").select("Approved");
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */
    });

    it("M28-16", () => {
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      // Click the topmost transaction
      cy.get("tr.dataListMid td#end .button").first().click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M28-17", () => {
      // Click the topmost transaction
      cy.get("tr.dataListMid td#end .button").first().click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#btnVoid").should("exist").click();
      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it("M28-18", () => {
      // Click the topmost transaction
      cy.get("tr.dataListMid td#end .button").first().click();

      cy.get("#btnVoid").should("exist").click();

      cy.get(".fancybox-iframe", { timeout: 10000 })
        .should("be.visible")
        .then(($iframe) => {
          // Access the iframe's body
          const iframeBody = $iframe.contents().find("body");

          // Wrap the iframe's body to allow Cypress chaining
          cy.wrap(iframeBody).find("a.button.btnL.nextPopup").click();

          cy.wait(1000);
          cy.contains("success");

          cy.takeScreenshotSimplify(
            "1",
            Cypress.ScreenshotCaptureEnum.VIEWPORT
          );
        });
    });
  });
});
