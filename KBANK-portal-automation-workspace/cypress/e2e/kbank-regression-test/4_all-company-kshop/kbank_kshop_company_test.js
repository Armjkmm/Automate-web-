describe("Test Scenario: K shop Company", () => {
  beforeEach(() => {
    // auto login to enter portal page
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME"),
      Cypress.env("KBANK_PASSWORD")
    );

    // wait for 1 seconds
    cy.wait(1000);

    // click company tab
    cy.get(":nth-child(2) > a > span").click();
  });

  context("1_Search K SHOP Companies", () => {
    it('M09-01: Click "K SHOP Companies Summary" sub menu', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > div").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-02", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > div").click();
      cy.get(":nth-child(2) > #beigeMid").click();
      cy.get("#search").type("sampletestshouldnotfound");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains(
        "No record found. Please key in the correct Company Name / Group Name / MID"
      );

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-03", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > div").click();
      cy.get(":nth-child(2) > #beigeMid").click();
      cy.get(".styled").select("Terminated");
      cy.get(".filterForm > :nth-child(5) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(5) > .ui-state-default").click();
      cy.get(".filterForm > :nth-child(5) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(5) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-04", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > div").click();
      cy.get(".filterForm > :nth-child(5) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(5) > .ui-state-default").click();
      cy.get(".filterForm > :nth-child(5) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(5) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-05", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > div").click();
      cy.get(":nth-child(2) > #beigeMid").click();
      cy.get("#search").type("Automate");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-06", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > div").click();
      cy.get(":nth-child(2) > #beigeMid").click();
      cy.get("#search").type("pentests");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-07", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > div").click();
      cy.get(":nth-child(2) > #beigeMid").click();
      cy.get("#search").type("401230002034001");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-08", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".styled").select("Active");
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-09", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > div").click();
      cy.get(".filterForm > :nth-child(5) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2020");
      cy.get(":nth-child(1) > :nth-child(5) > .ui-state-default").click();
      cy.get(".filterForm > :nth-child(5) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2023");
      cy.get(":nth-child(1) > :nth-child(5) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it('M09-10: Change to next page - click on ">" to the next page', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > div").click();
      cy.get(".filterForm > :nth-child(5) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2020");
      cy.get(":nth-child(1) > :nth-child(5) > .ui-state-default").click();
      cy.get(".filterForm > :nth-child(5) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2023");
      cy.get(":nth-child(1) > :nth-child(5) > .ui-state-default").click();
      cy.get(".formButton > .button").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      let nextPageBtn = "#next > span";
      let totalRecords = ".total_font";
      cy.goNextPage(nextPageBtn, totalRecords);
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-11", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > div").click();
      cy.get(".filterForm > :nth-child(5) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2020");
      cy.get(":nth-child(1) > :nth-child(5) > .ui-state-default").click();
      cy.get(".filterForm > :nth-child(5) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2023");
      cy.get(":nth-child(1) > :nth-child(5) > .ui-state-default").click();
      cy.get(".formButton > .button").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      let searchLastPageUrl =
        "/spocCompany/list?status=&from=01+Oct+2020&to=05+Oct+2023&page=";
      let pageInfoElement = "#pageInfo";
      let totalRecordElement = ".total_font";
      cy.goLastPage(pageInfoElement, totalRecordElement, searchLastPageUrl);
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("2_Add Temporary Limit", () => {
    beforeEach(() => {
      // click on k-bank companies summary sub-tab
      cy.get(":nth-child(4) > a > div").click();
    });

    it("M09-12", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go358803 > .selectBoxInTable > .selectInTable").select(
        "addTemporary"
      );

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#go358803 > :nth-child(2) > #buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-13", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go358803 > .selectBoxInTable > .selectInTable").select(
        "addTemporary"
      );
      cy.get("#go358803 > :nth-child(2) > #buttonGo").click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("กรุณาใส่จำนวนเงินหรือย้อนกลับ");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-14", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go358803 > .selectBoxInTable > .selectInTable").select(
        "addTemporary"
      );
      cy.get("#go358803 > :nth-child(2) > #buttonGo").click();
      cy.get("#tempPerTran").type("assdad");
      cy.get("#step1 > #barPadding > #whiteMid").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Please enter valid Amount");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-15", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go358803 > .selectBoxInTable > .selectInTable").select(
        "addTemporary"
      );
      cy.get("#go358803 > :nth-child(2) > #buttonGo").click();
      cy.get("#tempPerTran").type("81000");
      cy.get("#step1 > #barPadding > #whiteMid").click();
      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(4)"
      ).click();
      cy.get(":nth-child(2) > :nth-child(4) > .ui-state-default").click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Please enter valid Temporary Start Date");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-16", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go358803 > .selectBoxInTable > .selectInTable").select(
        "addTemporary"
      );
      cy.get("#go358803 > :nth-child(2) > #buttonGo").click();
      cy.get("#tempPerTran").type("81000");
      cy.get("#step1 > #barPadding > #whiteMid").click();
      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(2)"
      ).click();
      cy.get(":nth-child(2) > :nth-child(4) > .ui-state-default").click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */
      cy.contains("Please enter valid Temporary End Date");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-17", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go358803 > .selectBoxInTable > .selectInTable").select(
        "addTemporary"
      );
      cy.get("#go358803 > :nth-child(2) > #buttonGo").click();
      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(2)"
      ).click();
      cy.get(":nth-child(2) > :nth-child(4) > .ui-state-default").click();
      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(4)"
      ).click();
      cy.get(":nth-child(2) > :nth-child(4) > .ui-state-default").click();
      cy.get("#step1 > #barPadding > #whiteMid").click();
      cy.get("#tempPerMonth").type("asdasd");
      cy.get("#step1 > #barPadding > #whiteMid").click();
      /* ==== End Cypress Studio ==== */
      cy.contains("Please enter valid Amount");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-18", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go358803 > .selectBoxInTable > .selectInTable").select(
        "addTemporary"
      );
      cy.get("#go358803 > :nth-child(2) > #buttonGo").click();
      cy.get("#tempPerTran").type("81000");
      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(2)"
      ).click();
      cy.get(":nth-child(2) > :nth-child(4) > .ui-state-default").click();
      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(4)"
      ).click();
      cy.get(":nth-child(2) > :nth-child(4) > .ui-state-default").click();
      cy.get("#step1 > #barPadding > #whiteMid").click();
      cy.get("#tempPerMonth").type("301000");
      cy.get("#step1 > #barPadding > #whiteMid").click();

      cy.get("#temporaryPerMonth > :nth-child(2) > :nth-child(4)").click();
      cy.get('[data-handler="selectDay"] > .ui-state-default').click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Please enter valid Temporary Start Date");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-19", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go358803 > .selectBoxInTable > .selectInTable").select(
        "addTemporary"
      );
      cy.get("#go358803 > :nth-child(2) > #buttonGo").click();
      cy.get("#tempPerTran").type("81000");
      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(2)"
      ).click();
      cy.get(":nth-child(2) > :nth-child(4) > .ui-state-default").click();
      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(4)"
      ).click();
      cy.get(":nth-child(2) > :nth-child(4) > .ui-state-default").click();
      cy.get("#step1 > #barPadding > #whiteMid").click();
      cy.get("#tempPerMonth").type("301000");
      cy.get("#step1 > #barPadding > #whiteMid").click();
      cy.get("#temporaryPerMonth > :nth-child(1)").click();
      cy.get("#temporaryPerMonth > :nth-child(2) > :nth-child(2)").click();
      cy.get(":nth-child(2) > :nth-child(4) > .ui-state-default").click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Please enter valid Temporary End Date");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-20", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go358803 > .selectBoxInTable > .selectInTable").select(
        "addTemporary"
      );
      cy.get("#go358803 > :nth-child(2) > #buttonGo").click();
      cy.get("#tempPerTran").type("500000");
      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(2)"
      ).click();
      cy.get(":nth-child(2) > :nth-child(4) > .ui-state-default").click();
      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(4)"
      ).click();
      cy.get(":nth-child(2) > :nth-child(4) > .ui-state-default").click();
      cy.get("#step1 > #barPadding > #whiteMid").click();
      cy.get("#tempPerMonth").type("301000");
      cy.get("#step1 > #barPadding > #whiteMid").click();
      cy.get("#temporaryPerMonth > :nth-child(1)").click();
      cy.get("#temporaryPerMonth > :nth-child(2) > :nth-child(2)").click();
      cy.get(":nth-child(2) > :nth-child(4) > .ui-state-default").click();
      cy.get("#temporaryPerMonth > :nth-child(2) > :nth-child(4)").click();
      cy.get('[data-handler="selectDay"] > .ui-state-default').click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Amount per Month must more than Amount per Transaction");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-21", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go358803 > .selectBoxInTable > .selectInTable").select(
        "addTemporary"
      );
      cy.get("#go358803 > :nth-child(2) > #buttonGo").click();
      cy.get("#tempPerTran").type("70000");
      cy.get("#tempPerMonth").type("301000");
      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(2)"
      ).click();
      cy.get(".ui-datepicker-days-cell-over > .ui-state-default").click();
      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(4)"
      ).click();
      cy.get(":nth-child(2) > :nth-child(4) > .ui-state-default").click();
      cy.get("#temporaryPerMonth > :nth-child(2) > :nth-child(2)").click();
      cy.get(":nth-child(2) > :nth-child(4) > .ui-state-default").click();
      cy.get("#temporaryPerMonth > :nth-child(2)").click();
      cy.get("#temporaryPerMonth > :nth-child(2) > :nth-child(4)").click();
      cy.get('[data-handler="selectDay"] > .ui-state-default').click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("วงเงินชั่วคราวต่อรายการต้องมากกว่าวงเงินถาวรต่อรายการ");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-22", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go358803 > .selectBoxInTable > .selectInTable").select(
        "addTemporary"
      );
      cy.get("#go358803 > :nth-child(2) > #buttonGo").click();
      cy.get("#tempPerTran").type("81000");
      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(2)"
      ).click();
      cy.get(":nth-child(2) > :nth-child(4) > .ui-state-default").click();
      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(4)"
      ).click();
      cy.get(":nth-child(2) > :nth-child(4) > .ui-state-default").click();
      cy.get("#step1 > #barPadding > #whiteMid").click();
      cy.get("#tempPerMonth").type("290000");
      cy.get("#step1 > #barPadding > #whiteMid").click();
      cy.get("#temporaryPerMonth > :nth-child(1)").click();
      cy.get("#temporaryPerMonth > :nth-child(2) > :nth-child(2)").click();
      cy.get(":nth-child(2) > :nth-child(4) > .ui-state-default").click();
      cy.get("#temporaryPerMonth > :nth-child(2) > :nth-child(4)").click();
      cy.get('[data-handler="selectDay"] > .ui-state-default').click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("วงเงินชั่วคราวต่อรายเดือนต้องมากกว่าวงเงินถาวรต่อรายเดือน");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it('M09-23: Input temporary limit details and Click "Submit"', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go358803 > .selectBoxInTable > .selectInTable").select(
        "addTemporary"
      );
      cy.get("#go358803 > :nth-child(2) > #buttonGo").click();
      cy.get("#tempPerTran").type("81000");
      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(2)"
      ).click();
      cy.get(":nth-child(2) > :nth-child(4) > .ui-state-default").click();
      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(4)"
      ).click();
      cy.get(":nth-child(2) > :nth-child(4) > .ui-state-default").click();
      cy.get("#step1 > #barPadding > #whiteMid").click();
      cy.get("#tempPerMonth").type("301000");
      cy.get("#step1 > #barPadding > #whiteMid").click();
      cy.get("#temporaryPerMonth > :nth-child(1)").click();
      cy.get("#temporaryPerMonth > :nth-child(2) > :nth-child(2)").click();
      cy.get(":nth-child(2) > :nth-child(4) > .ui-state-default").click();
      cy.get("#temporaryPerMonth > :nth-child(2) > :nth-child(4)").click();
      cy.get('[data-handler="selectDay"] > .ui-state-default').click();
      cy.get("#remark").type("test");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-24", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go358803 > .selectBoxInTable > .selectInTable").select(
        "addTemporary"
      );
      cy.get("#go358803 > :nth-child(2) > #buttonGo").click();
      cy.get("#tempPerTran").type("81000");
      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(2)"
      ).click();
      cy.get(":nth-child(2) > :nth-child(4) > .ui-state-default").click();
      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(4)"
      ).click();
      cy.get(":nth-child(2) > :nth-child(4) > .ui-state-default").click();
      cy.get("#step1 > #barPadding > #whiteMid").click();
      cy.get("#tempPerMonth").type("301000");
      cy.get("#step1 > #barPadding > #whiteMid").click();
      cy.get("#temporaryPerMonth > :nth-child(1)").click();
      cy.get("#temporaryPerMonth > :nth-child(2) > :nth-child(2)").click();
      cy.get(":nth-child(2) > :nth-child(4) > .ui-state-default").click();
      cy.get("#temporaryPerMonth > :nth-child(2) > :nth-child(4)").click();
      cy.get('[data-handler="selectDay"] > .ui-state-default').click();
      cy.get("#remark").type("test");
      cy.get("#\\31 ").click();
      cy.wait(1000);
      cy.get("#submitThis").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("3_Add Permanent Limit", () => {
    beforeEach(() => {
      // click on k-bank companies summary sub-tab
      cy.get(":nth-child(4) > a > div").click();
    });

    it("M09-25", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go358806 > .selectBoxInTable > .selectInTable").select(
        "updatePermanent"
      );

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#go358806 > :nth-child(2) > #buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-26", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go358806 > .selectBoxInTable > .selectInTable").select(
        "updatePermanent"
      );
      cy.get("#go358806 > :nth-child(2) > #buttonGo").click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Please enter valid Amount");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-27", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go358806 > .selectBoxInTable > .selectInTable").select(
        "updatePermanent"
      );
      cy.get("#go358806 > :nth-child(2) > #buttonGo").click();
      cy.get("#maxAmountPerMonth").type("301000");
      cy.get("#maxAmountPerTransaction").type("302000");
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Amount per Month must more than Amount per Transaction");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it('M09-28: Input Add Permanent Limit details and Click "Submit"', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go358806 > .selectBoxInTable > .selectInTable").select(
        "updatePermanent"
      );
      cy.get("#go358806 > :nth-child(2) > #buttonGo").click();
      cy.get("#maxAmountPerTransaction").type("81000");
      cy.get("#maxAmountPerMonth").type("301000");
      cy.get("#remark").type("test");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-29", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go358806 > .selectBoxInTable > .selectInTable").select(
        "updatePermanent"
      );
      cy.get("#go358806 > :nth-child(2) > #buttonGo").click();
      cy.get("#maxAmountPerTransaction").type("81000");
      cy.get("#maxAmountPerMonth").type("301000");
      cy.get("#remark").type("test");
      cy.get("#\\31 ").click();
      cy.get("#submitThis").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("success");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("4_Suspend K Shop Company", () => {
    beforeEach(() => {
      // click on k-bank companies summary sub-tab
      cy.get(":nth-child(4) > a > div").click();
    });

    it("M09-30", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("โซดาน้ำผึ้งมะนาวอร่อย");
      cy.get("form > :nth-child(1) > .button").click();
      cy.get("#go358806 > .selectBoxInTable > .selectInTable").select(
        "/spocCompany/suspend"
      );

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#go358806 > :nth-child(2) > #buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-31", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("โซดาน้ำผึ้งมะนาวอร่อย");
      cy.get("form > :nth-child(1) > .button").click();
      cy.get("#go358806 > .selectBoxInTable > .selectInTable").select(
        "/spocCompany/suspend"
      );
      cy.get("#go358806 > :nth-child(2) > #buttonGo").click();
      cy.get("#submitForm").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Please enter a short description");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-32", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("โซดาน้ำผึ้งมะนาวอร่อย");
      cy.get("form > :nth-child(1) > .button").click();
      cy.get("#go358806 > .selectBoxInTable > .selectInTable").select(
        "/spocCompany/suspend"
      );
      cy.get("#go358806 > :nth-child(2) > #buttonGo").click();
      cy.get("#remarks").type("test");
      cy.get("#submitForm").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("success");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("5_Reinstate K-Shop Company", () => {
    beforeEach(() => {
      // click on k-bank companies summary sub-tab
      cy.get(":nth-child(4) > a > div").click();
    });

    it("M09-33", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("โซดาน้ำผึ้งมะนาวอร่อย");
      cy.get("form > :nth-child(1) > .button").click();
      cy.get("#go358806 > .selectBoxInTable > .selectInTable").select(
        "activate"
      );

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#go358806 > :nth-child(2) > #buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-34", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("โซดาน้ำผึ้งมะนาวอร่อย");
      cy.get("form > :nth-child(1) > .button").click();
      cy.get("#go358806 > .selectBoxInTable > .selectInTable").select(
        "activate"
      );
      cy.get("#go358806 > :nth-child(2) > #buttonGo").click();
      cy.get("#ctaMid > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-35", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("โซดาน้ำผึ้งมะนาวอร่อย");
      cy.get("form > :nth-child(1) > .button").click();
      cy.get("#go358806 > .selectBoxInTable > .selectInTable").select(
        "activate"
      );
      cy.get("#go358806 > :nth-child(2) > #buttonGo").click();
      cy.get("#remarks").type("test");
      cy.get("#ctaMid > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("6_Link with mPOS Company", () => {
    beforeEach(() => {
      // click on k-bank companies summary sub-tab
      cy.get(":nth-child(4) > a > div").click();
    });

    it("M09-36", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("บังใบเจริญสาม ทดสอบเอ็มพอส");
      cy.get("form > :nth-child(1) > .button").click();
      cy.get("#go34 > .selectBoxInTable > .selectInTable").select(
        "linkWithMposCompany"
      );

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#go34 > :nth-child(2) > #buttonGo").click();
      cy.get("#companyNameModal").type("Digio");

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#searchParent").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-37", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("บังใบเจริญสาม ทดสอบเอ็มพอส");
      cy.get("form > :nth-child(1) > .button").click();
      cy.get("#go34 > .selectBoxInTable > .selectInTable").select(
        "linkWithMposCompany"
      );

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#go34 > :nth-child(2) > #buttonGo").click();
      cy.get("#midHqModal").type("401001231167001");

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#searchParent").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-38", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("บังใบเจริญสาม ทดสอบเอ็มพอส");
      cy.get("form > :nth-child(1) > .button").click();
      cy.get("#go34 > .selectBoxInTable > .selectInTable").select(
        "linkWithMposCompany"
      );
      cy.get("#go34 > :nth-child(2) > #buttonGo").click();
      cy.get("#companyNameModal").type("Digio");
      cy.get("#midHqModal").type("401001231167001");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#searchParent").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      /* ==== Generated with Cypress Studio ==== */
      cy.get("#modalClose").click();
      cy.get("#step1 > #barPadding > #whiteMid").click();
      /* ==== End Cypress Studio ==== */
      cy.get("#remark").type("test M09 38");

      cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.wait(1000);
      cy.get("#\\31").click();

      cy.takeScreenshotSimplify("4", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.wait(1000);
      cy.get("#submitThis").click();

      cy.contains("success");

      cy.takeScreenshotSimplify("5", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-39", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("แคสสิบเอ็ด");
      cy.get("form > :nth-child(1) > .button").click();
      cy.get("#go50762 > .selectBoxInTable > .selectInTable").select(
        "linkWithMposCompany"
      );
      cy.get("#go50762 > :nth-child(2) > #buttonGo").click();
      cy.get("#companyNameModal").type("Digio");
      cy.get("#midHqModal").type("401001231167001");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#searchParent").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      /* ==== Generated with Cypress Studio ==== */
      cy.get("#modalClose").click();
      cy.get("#step1 > #barPadding > #whiteMid").click();
      /* ==== End Cypress Studio ==== */
      cy.get("#remark").type("test M09 39");

      cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.wait(1000);
      cy.get("#\\31").click();

      cy.takeScreenshotSimplify("4", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.wait(1000);
      cy.get("#submitThis").click();

      cy.contains("unsuccess");

      cy.takeScreenshotSimplify("5", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("7_Delink with mPOS Company", () => {
    beforeEach(() => {
      // click on k-bank companies summary sub-tab
      cy.get(":nth-child(4) > a > div").click();
    });

    it("M09-40", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#search").type("บังใบเจริญสาม ทดสอบเอ็มพอส");
      cy.get("form > :nth-child(1) > .button").click();
      cy.get("#go34 > .selectBoxInTable > .selectInTable").select(
        "deLinkWithMposCompany"
      );
      cy.get("#go34 > :nth-child(2) > #buttonGo").click();
      cy.get("#remark").type("test M09 40");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.wait(1000);
      cy.get("#\\31").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.wait(1000);
      cy.get("#submitThis").click();

      cy.contains("success");

      cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("8_Quick Link", () => {
    beforeEach(() => {
      // click on k-bank companies summary sub-tab
      cy.get(":nth-child(4) > a > div").click();
      cy.get("#search").type("บังใบเจริญสาม ทดสอบเอ็มพอส");
      cy.get("form > :nth-child(1) > .button").click();
    });

    it("M09-41", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".selectInTable").select("viewDetails");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.wait(500);
      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-42", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".selectInTable").select("/spocCompanyUser/company");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.wait(500);
      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-43", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".selectInTable").select("/spocMobileUser/company");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.wait(500);
      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-44", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".selectInTable").select("/spocTerminal/company");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.wait(500);
      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-45", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".selectInTable").select("/spocReader/company");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.wait(500);
      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-46", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".selectInTable").select("/spocTransaction/company");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.wait(500);
      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M09-47", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".selectInTable").select("/spocCreditSettlement/company");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.wait(500);
      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });
});
