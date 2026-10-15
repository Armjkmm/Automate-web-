describe("Test Scenario: Check Export CSV & Download File", () => {
  beforeEach(() => {
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME"),
      Cypress.env("KBANK_PASSWORD")
    );

    cy.wait(1000);
  });

  context("1_Export CSV Download (Less than 2,000 records)", () => {
    it("M37-01", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > span").click();
      cy.get("#search").type("regressiontest");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("form > :nth-child(1) > .button").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".textCenter > .button").click();
    });

    it("M37-02", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(3) > a > span").click();
      cy.get("#search").type("regression testtest");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".textCenter > .button").click();
    });

    it("M37-03", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(3) > a > span").click();
      cy.get(":nth-child(3) > a > div").click();
      cy.get("#search").type("abc1234");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".textCenter > .button").click();
    });

    it("M37-04", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > span").click();
      cy.get("#search").type("test12123");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("form > :nth-child(1) > .button").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".textCenter > .button").click();
    });

    it("M37-05", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > span").click();
      cy.get(":nth-child(3) > a > div").click();
      cy.get("#search").type("78567489");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".textCenter > .button").click();
    });

    it("M37-06", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(5) > a > span").click();
      cy.get("#search").type("rgtest");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".textCenter > .button").click();
    });

    it("M37-07", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(6) > a > span").click();
      cy.get("#search").type("2720000003");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".textCenter > .button").click();
    });

    it("M37-08", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(7) > a > span").click();
      cy.get(":nth-child(6) > .filter").type("R70070");
      cy.get(".formButton > .button").click();
      cy.get(":nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-title").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".exportCsv").click();
    });

    it("M37-09", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(7) > a > span").click();
      cy.get(":nth-child(6) > .filter").clear("R");
      cy.get(":nth-child(6) > .filter").type("R70070");
      cy.get(".filterForm > :nth-child(6)").click();
      cy.get(".formButton > .button").click();
      cy.get(":nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".exportExcel").click();
    });

    it("M37-10", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(7) > a > span").click();
      cy.get(":nth-child(2) > a > div").click();
      cy.get(":nth-child(6) > .filter").clear("0");
      cy.get(":nth-child(6) > .filter").type("05114");
      cy.get(":nth-child(6) > .filter").clear("005114");
      cy.get(":nth-child(6) > .filter").type("005114");
      cy.get(".filterForm").click();
      cy.get(".formButton > .button").click();
      cy.get(".formButton > .button").click();
      cy.get(":nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(".ui-datepicker-month").select("0");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".exportCsv").click();
    });

    it("M37-11", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(7) > a > span").click();
      cy.get(":nth-child(2) > a > div").click();
      cy.get(":nth-child(6) > .filter").clear("0");
      cy.get(":nth-child(6) > .filter").type("05114");
      cy.get(":nth-child(6) > .filter").clear("005114");
      cy.get(":nth-child(6) > .filter").type("005114");
      cy.get(".filterForm").click();
      cy.get(".formButton > .button").click();
      cy.get(".formButton > .button").click();
      cy.get(":nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(".ui-datepicker-month").select("0");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".exportExcel").click();
    });

    it("M37-12", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(7) > a > span").click();
      cy.get(":nth-child(4) > a > div").click();
      cy.get(":nth-child(6) > :nth-child(2)").click();
      cy.get(".ui-datepicker-month").select("8");
      cy.get(":nth-child(3) > :nth-child(5) > .ui-state-default").click();
      cy.get(":nth-child(6) > :nth-child(4)").click();
      cy.get(".ui-datepicker-month").select("8");
      cy.get(":nth-child(3) > :nth-child(6) > .ui-state-default").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".formButton > .button").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".textCenter > .button").click();
      /* ==== End Cypress Studio ==== */
    });

    it("M37-13", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(7) > a > span").click();
      cy.get(":nth-child(5) > a > div").click();
      cy.get(".filterForm > :nth-child(8) > :nth-child(2)").click();
      cy.get(".ui-datepicker-month").select("8");
      cy.get(":nth-child(1) > :nth-child(1) > .ui-state-default").click();
      cy.get(":nth-child(8) > :nth-child(4)").click();
      cy.get(".ui-datepicker-month").select("8");
      cy.get(":nth-child(5) > :nth-child(2) > .ui-state-default").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".formButton > .button").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".textCenter > .button").click();
      /* ==== End Cypress Studio ==== */
    });

    it("M37-14", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(8) > a > span").click();
      cy.get(".styled").select("Successful");
      cy.get(":nth-child(9) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2020");
      cy.get(":nth-child(1) > :nth-child(5) > .ui-state-default").click();
      cy.get(":nth-child(9) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2021");
      cy.get(":nth-child(1) > :nth-child(6) > .ui-state-default").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".formButton > .button").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      // cy.get("td#end .button").contains("Export CSV files").first().click();
      /* ==== Generated with Cypress Studio ==== */
      cy.get('[href="batch?itemid=2975213&batchId=2975213"]').click();
      cy.get(":nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2020");
      cy.get(".ui-datepicker-month").select("8");
      cy.get(":nth-child(4) > :nth-child(1) > .ui-state-default").click();
      cy.get(":nth-child(14) > :nth-child(4)").click();
      cy.get(".ui-datepicker-month").select("8");
      cy.get(".ui-datepicker-header").click();
      cy.get(".ui-datepicker-header").click();
      cy.get(":nth-child(3) > :nth-child(6) > .ui-state-default").click();
      cy.get(":nth-child(14) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2021");
      cy.get(":nth-child(4) > :nth-child(2) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      /* ==== End Cypress Studio ==== */
    });

    it("M37-15", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(9) > a > span").click();
      cy.get("#search").type("NatchaTest");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("form > :nth-child(1) > .button").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".textCenter > .button").click();
      /* ==== End Cypress Studio ==== */
    });

    it("M37-16", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(9) > a > span").click();
      cy.get(":nth-child(2) > a > div").click();
      cy.get("#search").type("kd000023");
      cy.get("#rightMainContent > :nth-child(2)").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("form > :nth-child(1) > .button").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#beigeMid > .floatR > .button").click();
      /* ==== End Cypress Studio ==== */
    });

    it("M37-17", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(9) > a > span").click();
      cy.get(":nth-child(3) > a > div").click();
      cy.get("#search").type("kd000017");
      cy.get("#search").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("form > :nth-child(1) > .button").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.get("#beigeMid > .floatR > .button").click();
      /* ==== End Cypress Studio ==== */
    });

    it("M37-18", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(9) > a > span").click();
      cy.get("#topNavi > :nth-child(2) > a > span").click();
      cy.get(":nth-child(4) > a > div").click();
      cy.get("#search").type("อินนิส");
      cy.get("#rightMainContent > :nth-child(3)").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("form > :nth-child(1) > .button").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".textCenter > .button").click();
      /* ==== End Cypress Studio ==== */
    });

    it("M37-19", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > span").click();
      cy.get(":nth-child(5) > a > div").click();
      cy.get(":nth-child(2) > #beigeMid").click();
      cy.get("#search").type("43004046");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("form > :nth-child(1) > .button").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".textCenter > .button").click();
      /* ==== End Cypress Studio ==== */
    });

    it("M37-20", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(5) > a > span").click();
      cy.get(":nth-child(3) > a > div").click();
      cy.get("#search").type("โมเดิรน");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("form > :nth-child(1) > .button").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".textCenter > .button").click();
      /* ==== End Cypress Studio ==== */
    });

    it("M37-21", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(6) > a > span").click();
      cy.get("#search").click();
      cy.get(":nth-child(3) > a > div").click();
      cy.get("form > :nth-child(1) > .button").click();
      cy.get("#search").type("2723111215");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("form > :nth-child(1) > .button").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".textCenter > .button").click();
      /* ==== End Cypress Studio ==== */
    });

    it("M37-22", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(7) > a > span").click();
      cy.get(":nth-child(3) > a > div").click();
      cy.get(":nth-child(6) > .filter").type("R70067");
      cy.get(".formButton > .button").click();
      cy.get(":nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2022");
      cy.get(
        ':nth-child(1) > [data-handler="selectDay"] > .ui-state-default'
      ).click();
      cy.get(":nth-child(14) > :nth-child(4)").click();
      cy.get(".ui-datepicker-days-cell-over > .ui-state-default").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".formButton > .button").click();
      cy.get(".formButton > .button").click();
      cy.get(":nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2020");
      cy.get(".filterForm").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".exportCsv").click();
    });

    it("M37-23", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(7) > a > span").click();
      cy.get(":nth-child(3) > a > div").click();
      cy.get(":nth-child(6) > .filter").type("R70067");
      cy.get(".formButton > .button").click();
      cy.get(":nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2022");
      cy.get(
        ':nth-child(1) > [data-handler="selectDay"] > .ui-state-default'
      ).click();
      cy.get(":nth-child(14) > :nth-child(4)").click();
      cy.get(".ui-datepicker-days-cell-over > .ui-state-default").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".formButton > .button").click();
      cy.get(".formButton > .button").click();
      cy.get(":nth-child(14) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2020");
      cy.get(".filterForm").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".exportExcel").click();
    });

    it("M37-24", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(8) > a > span").click();
      cy.get(":nth-child(2) > a > div").click();
      cy.get(":nth-child(3) > a > div").click();
      cy.get(":nth-child(9) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2023");
      cy.get(":nth-child(1) > :nth-child(1) > .ui-state-default").click();
      cy.get(":nth-child(9) > :nth-child(4)").click();
      cy.get(":nth-child(1) > :nth-child(3) > .ui-state-default").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".formButton > .button").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("td#end .button").contains("Export CSV files").first().click();
      /* ==== End Cypress Studio ==== */
    });
  });

  context("2_Download", () => {
    it("M37-25", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(3) > a > span").click();
      cy.get(":nth-child(4) > a > div").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".dl").click();
      /* ==== End Cypress Studio ==== */
    });

    it("M37-26", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > span").click();
      cy.get(":nth-child(4) > a > div").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".dl").click();
      /* ==== End Cypress Studio ==== */
    });

    it("M37-27", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(6) > a > span").click();
      cy.get(":nth-child(2) > a > div").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".dl").click();
      /* ==== End Cypress Studio ==== */
    });

    it("M37-28", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(8) > a > span").click();
      cy.get(":nth-child(9) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2023");
      cy.get(":nth-child(1) > :nth-child(1) > .ui-state-default").click();
      cy.get(":nth-child(9) > :nth-child(4)").click();
      cy.get("tbody > :nth-child(1) > :nth-child(3)").click();
      cy.get(".formButton > .button").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get('[href="batch?itemid=3035743&batchId=3035743"]').click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get(".paddLR30 > .floatR > .button").click();
    });
  });
});
