describe("Test Scenario: K+ Shop Transactions Summary", () => {
  beforeEach(() => {
    // Login and navigate to K+ Shop portal
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME"),
      Cypress.env("KBANK_PASSWORD")
    );
    cy.wait(1000);
    cy.get(":nth-child(7) > a > span").click();
  });

  context("1_Search K+ Shop Transaction Summary", () => {
    beforeEach(() => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(3) > a > div").click();
      /* ==== End Cypress Studio ==== */
    });

    it('M30-01: Click "Manage Transaction" menu', () => {
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M30-02", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > .filter").type("THATSHOULDNOT");
      cy.get(":nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(":nth-child(14) > :nth-child(4)").click();
      cy.get(".ui-datepicker-header").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M30-03", () => {
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

    it("M30-04", () => {
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

    it("M30-05", () => {
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

    it("M30-06", () => {
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

    it("M30-07", () => {
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

    it("M30-08", () => {
      /* ==== Generated with Cypress Studio ==== */

      cy.get(":nth-child(2) > .filter").type("401230021800001");
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

    it("M30-09", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > .filter").type("43003615");
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

    it("M30-10", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(6) > .filter").type("070253");
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

    it("M30-11", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(8) > .styled").select("Reversed");
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

    it("M30-12", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(11) > .styled").select("THB 0 - 999");
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

    it("M30-13", () => {
      /* ==== Generated with Cypress Studio ==== */
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

    it("M30-14", () => {
      /* ==== Generated with Cypress Studio ==== */
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

    it("M30-15", () => {
      /* ==== Generated with Cypress Studio ==== */
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
        "/spocTransaction/list?mid=&tid=&approvalCode=&status=&amount=&from=01+Sep+2024&to=01+Oct+2024&page=";
      let pageInfoElement = "#pageInfo";
      let totalRecordElement = ".total_font";
      cy.goLastPage(pageInfoElement, totalRecordElement, searchLastPageUrl);

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("2_Void K+ Shop Transaction", () => {
    beforeEach(() => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(3) > a > div").click();

      cy.wait(1000);
      cy.get(".selected > a > div").click();
      cy.get(":nth-child(8) > .styled").select("Approved");
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */
    });

    it("M30-16", () => {
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      // Click the topmost transaction
      cy.get("tr.dataListMid td#end .button").first().click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it('M30-17: Click "Void Payment Now" button', () => {
      // Click the topmost transaction
      cy.get("tr.dataListMid td#end .button").first().click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#btnVoid").should("exist").click();
      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it('M30-18: Click "Submit" button', () => {
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
