describe("Test Scenario: All Company", () => {
  beforeEach(() => {
    // auto login to enter portal page
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME"),
      Cypress.env("KBANK_PASSWORD")
    );

    // wait for 1 seconds
    cy.wait(1000);
  });

  context("1_search_company", () => {
    it('M06-01: Click "All Companies" menu', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > span").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it("M06-02", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > span").click();
      cy.get(":nth-child(2) > #beigeMid").click();
      cy.get("#search").clear("ASK");
      cy.get("#search").type("ASKFSAFPGPSGA");
      cy.get("form > :nth-child(1) > .button").click();
      cy.get(".headerInfo").click();
      /* ==== End Cypress Studio ==== */

      cy.contains(
        "No record found. Please key in the correct Company Name / Group Name / MID"
      );

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it("M06-03", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > span").click();
      cy.get(".styled").select("Suspended");
      cy.get(".filterForm > :nth-child(5) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".filterForm > :nth-child(5) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again");
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it("M06-04", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > span").click();
      cy.get(".filterForm > :nth-child(5) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(".ui-datepicker-year").select("2010");
      cy.get(":nth-child(1) > :nth-child(6) > .ui-state-default").click();
      cy.get(".filterForm > :nth-child(5) > :nth-child(4)").click();
      cy.get(".ui-datepicker-title").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(".ui-datepicker-year").select("2010");
      cy.get(":nth-child(1) > :nth-child(6) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("No record found. Please try again");
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it("M06-05", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > span").click();
      cy.get("#search").clear("re");
      cy.get("#search").type("regressiontest");
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains(
        "You are currently viewing Company Name / Group Name / MID regressiontest"
      );
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M06-06", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > span").click();
      cy.get("#search").clear("Happy");
      cy.get("#search").type("Happy");
      cy.get(":nth-child(2) > #beigeTop").click();
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains(
        "You are currently viewing Company Name / Group Name / MID Happy"
      );
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it("M06-07", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > span").click();
      cy.get("#search").type("112233456789000");
      cy.get(":nth-child(2) > #beigeBottom").click();
      cy.get("form > :nth-child(1) > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains(
        "You are currently viewing Company Name / Group Name / MID 112233456789000"
      );
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it("M06-08", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > span").click();
      cy.get(".styled").select("Suspended");
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it("M06-09", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > span").click();
      cy.get(".filterForm > :nth-child(5) > :nth-child(2)").click();
      cy.get(":nth-child(1) > :nth-child(3) > .ui-state-default").click();
      cy.get(".filterForm > :nth-child(5) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2020");
      cy.get(":nth-child(1) > :nth-child(5) > .ui-state-default").click();
      cy.get(".filterForm > :nth-child(5) > :nth-child(4)").click();
      cy.get(":nth-child(1) > :nth-child(3) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it("M06-10", () => {
      cy.get(":nth-child(2) > a > span").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      let nextPageBtn = "#next > span";
      let totalRecords = ".total_font";
      cy.goNextPage(nextPageBtn, totalRecords);

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M06-11", () => {
      cy.get(":nth-child(2) > a > span").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      let searchLastPageUrl = "/company/list?page=";
      let pageInfoElement = "#pageInfo";
      let totalRecordElement = ".total_font";
      cy.goLastPage(pageInfoElement, totalRecordElement, searchLastPageUrl);

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("2_add_temporary_limit", () => {
    beforeEach(() => {
      //enter all companies tab
      cy.get(":nth-child(2) > a > span").click();
    });

    it("M06-12 - Select company to Add Temporary Limit", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go90102 > .selectBoxInTable > .selectInTable").select(
        "addTemporary"
      );

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#go90102 > :nth-child(2) > #buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M06-13", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go90102 > .selectBoxInTable > .selectInTable").select(
        "addTemporary"
      );
      cy.get("#go90102 > :nth-child(2) > #buttonGo").click();
      cy.get("#remark").click();
      cy.get("#barPadding > #ctaMid").click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("กรุณาใส่จำนวนเงินหรือย้อนกลับ");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M06-14", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go90102 > .selectBoxInTable > .selectInTable").select(
        "addTemporary"
      );
      cy.get("#go90102 > :nth-child(2) > #buttonGo").click();
      cy.get("#tempPerTran").type("sdag");
      /* ==== Generated with Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(2)"
      ).click();
      cy.get(":nth-child(3) > :nth-child(5) > .ui-state-default").click();
      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(4)"
      ).click();
      cy.get(":nth-child(5) > :nth-child(5) > .ui-state-default").click();
      cy.get("#step1 > #barPadding > #whiteMid").click();
      /* ==== End Cypress Studio ==== */

      // cy.get("#temp > :nth-child(5)").click();
      // /* ==== End Cypress Studio ==== */
      // cy.get("#group > :nth-child(9)").click();
      // cy.get("#\\31 ").click();
      // /* ==== End Cypress Studio ==== */

      cy.contains("Please enter valid Amount");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M06-15", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go90102 > .selectBoxInTable > .selectInTable").select(
        "addTemporary"
      );
      cy.get("#go90102 > :nth-child(2) > #buttonGo").click();
      cy.get("#tempPerTran").type("15000");
      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(4)"
      ).click();
      cy.get(":nth-child(2) > :nth-child(3) > .ui-state-default").click();
      cy.get(":nth-child(9) > .confirmValueControlLimit").click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Please enter valid Temporary Start Date");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M06-16", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(5) > #end").click();
      cy.get("#go90102 > .selectBoxInTable > .selectInTable").select(
        "addTemporary"
      );
      cy.get("#go90102 > :nth-child(2) > #buttonGo").click();
      cy.get("#tempPerTran").type("15000");
      cy.get("#temporaryPerTransaction > :nth-child(2)").click();
      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(2)"
      ).click();
      cy.get(":nth-child(2) > :nth-child(3) > .ui-state-default").click();
      cy.get(":nth-child(6) > .confirmValueControlLimit").click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */
      cy.contains("Please enter valid Temporary End Date");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M06-17", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go90102 > .selectBoxInTable > .selectInTable").select(
        "addTemporary"
      );
      cy.get("#go90102 > :nth-child(2) > #buttonGo").click();
      cy.get("#tempPerMonth").type("safkf");
      cy.get("#group > :nth-child(9)").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Please enter valid Amount");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M06-18", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go90102 > .selectBoxInTable > .selectInTable").select(
        "addTemporary"
      );
      cy.get("#go90102 > :nth-child(2) > #buttonGo").click();
      cy.get("#tempPerMonth").clear("90");
      cy.get("#tempPerMonth").type("902000");
      cy.get("#tempPerMonthEndDate").click();
      cy.get('[data-handler="selectDay"] > .ui-state-default').click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Please enter valid Temporary Start Date");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M06-19", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go90102 > .selectBoxInTable > .selectInTable").select(
        "addTemporary"
      );
      cy.get("#go90102 > :nth-child(2) > #buttonGo").click();
      cy.get("#tempPerMonth").type("902000");
      cy.get("#temporaryPerMonth > :nth-child(2)").click();
      cy.get("#temporaryPerMonth > :nth-child(2) > :nth-child(2)").click();
      cy.get("tbody > :nth-child(2) > :nth-child(4)").click();
      cy.get("#step1 > #barPadding > #whiteMid").click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Please enter valid Temporary End Date");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M06-20", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go90102 > .selectBoxInTable > .selectInTable").select(
        "addTemporary"
      );
      cy.get("#go90102 > :nth-child(2) > #buttonGo").click();
      cy.get("#tempPerTran").click();
      cy.get("#tempPerMonth").type("10000");
      cy.get("#tempPerMonthStartDate").click();
      cy.get(":nth-child(2) > :nth-child(3) > .ui-state-default").click();
      cy.get("#temporaryPerMonth > :nth-child(2) > :nth-child(4)").click();
      cy.get('[data-handler="selectDay"] > .ui-state-default').click();
      cy.get("#step1 > #barPadding > #whiteMid > .paddFormTitle").click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("วงเงินชั่วคราวต่อรายเดือนต้องมากกว่าวงเงินถาวรต่อรายเดือน");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M06-21", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go90102 > .selectBoxInTable > .selectInTable").select(
        "addTemporary"
      );
      cy.get("#go90102 > :nth-child(2) > #buttonGo").click();
      cy.get("#tempPerTran").clear("1");
      cy.get("#tempPerTran").type("10000");
      cy.get("#temporaryPerTransaction > :nth-child(2)").click();
      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(2)"
      ).click();
      cy.get(":nth-child(2) > :nth-child(3) > .ui-state-default").click();
      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(4)"
      ).click();
      cy.get(":nth-child(2) > :nth-child(4) > .ui-state-default").click();
      cy.get("#step1 > #barPadding > #whiteMid > .paddFormTitle").click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("วงเงินชั่วคราวต่อรายการต้องมากกว่าวงเงินถาวรต่อรายการ");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M06-22", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go90102 > .selectBoxInTable > .selectInTable").select(
        "addTemporary"
      );
      cy.get("#go90102 > :nth-child(2) > #buttonGo").click();
      cy.get("#tempPerMonth").type("900000");
      cy.get("#temporaryPerMonth > :nth-child(2) > :nth-child(2)").click();
      cy.get("tbody > :nth-child(2) > :nth-child(3)").click();
      cy.get("#tempPerMonthEndDate").click();
      cy.get('[data-handler="selectDay"] > .ui-state-default').click();
      cy.get("#temporaryPerMonth > :nth-child(4)").click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("วงเงินชั่วคราวต่อรายเดือนต้องมากกว่าวงเงินถาวรต่อรายเดือน");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it('M06-23: Input temporary limit details and click "Submit"', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(5) > #end").click();
      cy.get("#go90102 > .selectBoxInTable > .selectInTable").select(
        "addTemporary"
      );
      cy.get("#go90102 > :nth-child(2) > #buttonGo").click();
      cy.get("#temp > :nth-child(2)").click();
      cy.get("#tempPerTran").type("13000");
      cy.get("#tempPerTranStartDate").click();
      cy.get(":nth-child(2) > :nth-child(3) > .ui-state-default").click();
      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(4)"
      ).click();
      cy.get(":nth-child(2) > :nth-child(4) > .ui-state-default").click();
      cy.get("#temp > :nth-child(5)").click();
      cy.get("#tempPerMonth").type("902000");
      cy.get("#tempPerMonthStartDate").click();
      cy.get("tbody > :nth-child(2) > :nth-child(4)").click();
      cy.get("#temporaryPerMonth > :nth-child(2) > :nth-child(4)").click();
      cy.get('[data-handler="selectDay"] > .ui-state-default').click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M06-24", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(5) > #end").click();
      cy.get("#go90102 > .selectBoxInTable > .selectInTable").select(
        "addTemporary"
      );
      cy.get("#go90102 > :nth-child(2) > #buttonGo").click();
      cy.get("#temp > :nth-child(2)").click();
      cy.get("#tempPerTran").type("13000");
      cy.get("#tempPerTranStartDate").click();
      cy.get(":nth-child(2) > :nth-child(3) > .ui-state-default").click();
      cy.get(
        "#temporaryPerTransaction > :nth-child(2) > :nth-child(4)"
      ).click();
      cy.get(":nth-child(2) > :nth-child(4) > .ui-state-default").click();
      cy.get("#temp > :nth-child(5)").click();
      cy.get("#tempPerMonth").type("902000");
      cy.get("#tempPerMonthStartDate").click();
      cy.get("tbody > :nth-child(2) > :nth-child(4)").click();
      cy.get("#temporaryPerMonth > :nth-child(2) > :nth-child(4)").click();
      cy.get('[data-handler="selectDay"] > .ui-state-default').click();
      cy.get("#\\31 ").click();
      cy.get("#step2 > #barPadding > #whiteMid > :nth-child(5)").click();
      cy.get("#submitThis").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Your request is successful");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("3_add_permanent_limit", () => {
    beforeEach(() => {
      cy.get(":nth-child(2) > a > span").click();
    });

    it("M06-25", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go90101 > .selectBoxInTable > .selectInTable").select(
        "updatePermanent"
      );
      cy.get("#go90101 > :nth-child(2) > #buttonGo").click();
      cy.get("#maxAmountPerTransaction").click();
      cy.get("#step1 > #barPadding > #whiteMid").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M06-26", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go90101 > .selectBoxInTable > .selectInTable").select(
        "updatePermanent"
      );
      cy.get("#go90101 > :nth-child(2) > #buttonGo").click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Please enter valid Amount");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M06-27", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go90101 > .selectBoxInTable > .selectInTable").select(
        "updatePermanent"
      );
      cy.get("#go90101 > :nth-child(2) > #buttonGo").click();
      cy.get("#\\31 ").click();
      cy.get("#maxAmountPerTransactionError").click();
      cy.get("#mainContainer > .center960").click();
      cy.get("#maxAmountPerTransaction").type("200");
      cy.get("#step1 > #barPadding > #whiteMid").click();
      cy.get("#maxAmountPerMonth").clear();
      cy.get("#maxAmountPerMonth").type("10");
      cy.get("#step1 > #barPadding > #whiteMid").click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Amount per Month must more than Amount per Transaction");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it('M06-28: Input Add Permanent Limit details and click "Submit"', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(7) > td").click();
      cy.get("#go90101 > .selectBoxInTable > .selectInTable").select(
        "updatePermanent"
      );
      cy.get("#go90101 > :nth-child(2) > #buttonGo").click();
      cy.get("#step1 > #barPadding > #whiteMid > :nth-child(15)").click();
      cy.get("#maxAmountPerTransaction").type("200");
      cy.get("#maxAmountPerMonth").clear();
      cy.get("#maxAmountPerMonth").type("2000000");
      cy.get("#remark").click();
      cy.get("#remark").type("test");
      cy.get("#step1 > #barPadding > #whiteMid > :nth-child(21)").click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M06-29", () => {
      /* ==== Generated with Cypress Studio ==== */

      cy.get(":nth-child(7) > td").click();
      cy.get("#go90101 > .selectBoxInTable > .selectInTable").select(
        "updatePermanent"
      );
      cy.get("#go90101 > :nth-child(2) > #buttonGo").click();
      cy.get("#step1 > #barPadding > #whiteMid > :nth-child(15)").click();
      cy.get("#maxAmountPerTransaction").type("200");
      cy.get("#maxAmountPerMonth").clear();
      cy.get("#maxAmountPerMonth").type("2000000");
      cy.get("#remark").click();
      cy.get("#remark").type("test");
      cy.get("#step1 > #barPadding > #whiteMid > :nth-child(21)").click();
      cy.get("#\\31 ").click();
      cy.get("#submitThis").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Your request is successful");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("4_edit_company_details", () => {
    beforeEach(() => {
      cy.get(":nth-child(2) > a > span").click();
    });

    it("M06-30", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go90102 > .selectBoxInTable > .selectInTable").select(
        "viewDetails"
      );
      cy.get("#go90102 > :nth-child(2) > #buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it('M06-31: Click "Edit Company details"', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go90102 > .selectBoxInTable > .selectInTable").select(
        "viewDetails"
      );
      cy.get("#go90102 > :nth-child(2) > #buttonGo").click();
      cy.get(".currentViewCompany").click();
      cy.get(".paddLR10 > form > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it('M06-32: Edit company details and click "Submit"', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go90102 > .selectBoxInTable > .selectInTable").select(
        "viewDetails"
      );
      cy.get("#go90102 > :nth-child(2) > #buttonGo").click();
      cy.get(".currentViewCompany").click();
      cy.get(".paddLR10 > form > .button").click();
      cy.get("#remark").click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M06-33", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go90102 > .selectBoxInTable > .selectInTable").select(
        "viewDetails"
      );
      cy.get("#go90102 > :nth-child(2) > #buttonGo").click();
      cy.get(".currentViewCompany").click();
      cy.get(".paddLR10 > form > .button").click();
      cy.get("#remark").click();
      cy.get("#\\31 ").click();
      cy.get("#submitThis").click();
      cy.get(".successDone").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Your request is successful");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("5_suspend_company", () => {
    beforeEach(() => {
      cy.get(":nth-child(2) > a > span").click();
    });

    it("M06-34", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go90102 > .selectBoxInTable > .selectInTable").select(
        "/company/suspend"
      );
      cy.get("#go90102 > :nth-child(2) > #buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M06-35", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go90102 > .selectBoxInTable > .selectInTable").select(
        "/company/suspend"
      );
      cy.get("#go90102 > :nth-child(2) > #buttonGo").click();
      cy.get("#submitForm").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Please enter a short description");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M06-36", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go90102 > .selectBoxInTable > .selectInTable").select(
        "/company/suspend"
      );
      cy.get("#go90102 > :nth-child(2) > #buttonGo").click();
      cy.get("#submitForm").click();
      cy.get("#remarks").type("test suspend");
      cy.get("#submitForm").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Your request is successful");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("6_reinstate_company", () => {
    beforeEach(() => {
      cy.get(":nth-child(2) > a > span").click();
    });

    it("M06-37", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go90102 > .selectBoxInTable > .selectInTable").select(
        "activate"
      );
      cy.get("#go90102 > :nth-child(2) > #buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M06-38", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go90102 > .selectBoxInTable > .selectInTable").select(
        "activate"
      );
      cy.get("#go90102 > :nth-child(2) > #buttonGo").click();
      cy.get("#ctaMid > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Please enter a short description");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M06-39", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go90102 > .selectBoxInTable > .selectInTable").select(
        "activate"
      );
      cy.get("#go90102 > :nth-child(2) > #buttonGo").click();
      cy.get("#ctaMid > .button").click();
      cy.get("#remarks").type("test reinstate");
      cy.get("#ctaMid > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Your request is successful");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });
});
