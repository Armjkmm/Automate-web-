describe("function 01", () => {
  beforeEach(() => {
    // auto login to enter portal page
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME"),
      Cypress.env("KBANK_PASSWORD")
    );

    // wait for 1 seconds
    cy.wait(1000);
  });

  let companyName = "AutomatedTestCompany1";

  let transStartDay;
  let transStartMonth;
  let transStartYear;
  let transEndDay;
  let transEndMonth;
  let transEndYear;

  let monthlyStartDay;
  let monthlyStartMonth;
  let monthlyStartYear;
  let monthlyEndDay;
  let monthlyEndMonth;
  let monthlyEndYear;

  it("TS01", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(2) > a > span").click();
    cy.get(".selected > a > div").click();
    cy.get("#search").clear();
    cy.get("#search").type(companyName);
    cy.get("form > :nth-child(1) > .button").click();
    cy.get(".selectInTable").select("viewDetails");
    /* ==== End Cypress Studio ==== */

    cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#buttonGo").click();

    /* ==== Generated with Cypress Studio ==== */
    // Monthly Usage
    cy.get(":nth-child(48)").should("have.text", "THB 0");
    // Balance
    cy.get(":nth-child(50)").should("have.text", "THB 100,000");
    // Current Transaction Type
    cy.get(":nth-child(52)").should("have.text", "Permanent Limit");
    // Current Month Type
    cy.get(":nth-child(54)").should("have.text", "Permanent Limit");
    // Permanent Transaction Limit
    cy.get(":nth-child(56)").should("have.text", "THB 10,000");
    // Permanent Month Limit
    cy.get(":nth-child(59)").should("have.text", "THB 100,000");
    /* ==== End Cypress Studio ==== */

    /* ==== End Cypress Studio ==== */
    cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  });

  it("TS02", () => {
    //TODO: Manual make 1 transaction with 1000 Baht with this company

    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(2) > a > span").click();
    cy.get(".selected > a > div").click();
    cy.get("#search").clear();
    cy.get("#search").type(companyName);
    cy.get("form > :nth-child(1) > .button").click();
    cy.get(".selectInTable").select("viewDetails");
    /* ==== End Cypress Studio ==== */

    cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#buttonGo").click();

    /* ==== Generated with Cypress Studio ==== */
    // Monthly Usage
    cy.get(":nth-child(48)").should("have.text", "THB 1,000");
    // Balance
    cy.get(":nth-child(50)").should("have.text", "THB 99,000");
    // Current Transaction Type
    cy.get(":nth-child(52)").should("have.text", "Permanent Limit");
    // Current Month Type
    cy.get(":nth-child(54)").should("have.text", "Permanent Limit");
    // Permanent Transaction Limit
    cy.get(":nth-child(56)").should("have.text", "THB 10,000");
    // Permanent Month Limit
    cy.get(":nth-child(59)").should("have.text", "THB 100,000");
    /* ==== End Cypress Studio ==== */

    cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  });

  it("TS03", () => {
    //TODO: Manual make 1 transaction with 1000 Baht with this company

    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(2) > a > span").click();
    cy.get(".selected > a > div").click();
    cy.get("#search").clear();
    cy.get("#search").type(companyName);
    cy.get("form > :nth-child(1) > .button").click();
    cy.get(".selectInTable").select("addTemporary");

    cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#buttonGo").click();

    cy.get("#tempPerTran").clear();
    cy.get("#tempPerTran").type("20000");

    transStartDay = 9;
    transStartMonth = 11;
    transStartYear = 2024;
    transEndDay = 10;
    transEndMonth = 11;
    transEndYear = 2024;

    cy.setFormattedDate(
      "#tempPerTranStartDate",
      transStartDay,
      transStartMonth,
      transStartYear
    );
    cy.setFormattedDate(
      "#tempPerTranEndDate",
      transEndDay,
      transEndMonth,
      transEndYear
    );

    cy.get("#tempPerMonth").clear();
    cy.get("#tempPerMonth").type("200000");

    monthlyStartDay = 9;
    monthlyStartMonth = 11;
    monthlyStartYear = 2024;
    monthlyEndDay = 10;
    monthlyEndMonth = 11;
    monthlyEndYear = 2024;

    cy.setFormattedDate(
      "#tempPerMonthStartDate",
      monthlyStartDay,
      monthlyStartMonth,
      monthlyStartYear
    );
    cy.setFormattedDate(
      "#tempPerMonthEndDate",
      monthlyEndDay,
      monthlyEndMonth,
      monthlyEndYear
    );

    cy.get("#remark").clear();
    cy.get("#remark").type("TS03: ui control limit | not active range");

    cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#\\31 ").click();

    cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#submitThis").click();

    cy.takeScreenshotSimplify("4", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    /* ==== End Cypress Studio ==== */

    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(2) > a > span").click();
    cy.get(".selected > a > div").click();
    cy.get("#search").clear();
    cy.get("#search").type(companyName);
    cy.get("form > :nth-child(1) > .button").click();
    cy.get(".selectInTable").select("viewDetails");
    /* ==== End Cypress Studio ==== */

    cy.takeScreenshotSimplify("5", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#buttonGo").click();

    /* ==== Generated with Cypress Studio ==== */
    // Monthly Usage
    cy.get(":nth-child(48)").should("have.text", "THB 2,000");
    // Balance
    cy.get(":nth-child(50)").should("have.text", "THB 98,000");
    // Current Transaction Type
    cy.get(":nth-child(52)").should("have.text", "Permanent Limit");
    // Current Month Type
    cy.get(":nth-child(54)").should("have.text", "Permanent Limit");
    // Permanent Transaction Limit
    cy.get(":nth-child(56)").should("have.text", "THB 10,000");
    // Permanent Month Limit
    cy.get(":nth-child(59)").should("have.text", "THB 100,000");
    /* ==== End Cypress Studio ==== */

    cy.takeScreenshotSimplify("6", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  });

  it("TS04", () => {
    //TODO: Manual make 1 transaction with 1000 Baht with this company

    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(2) > a > span").click();
    cy.get(".selected > a > div").click();
    cy.get("#search").clear();
    cy.get("#search").type(companyName);
    cy.get("form > :nth-child(1) > .button").click();
    cy.get(".selectInTable").select("addTemporary");

    cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#buttonGo").click();

    cy.get("#tempPerTran").clear();
    cy.get("#tempPerTran").type("20000");

    transStartDay = 8;
    transStartMonth = 11;
    transStartYear = 2024;
    transEndDay = 10;
    transEndMonth = 11;
    transEndYear = 2024;

    cy.setFormattedDate(
      "#tempPerTranStartDate",
      transStartDay,
      transStartMonth,
      transStartYear
    );
    cy.setFormattedDate(
      "#tempPerTranEndDate",
      transEndDay,
      transEndMonth,
      transEndYear
    );

    cy.get("#tempPerMonth").clear();
    cy.get("#tempPerMonth").type("200000");

    monthlyStartDay = 8;
    monthlyStartMonth = 11;
    monthlyStartYear = 2024;
    monthlyEndDay = 10;
    monthlyEndMonth = 11;
    monthlyEndYear = 2024;

    cy.setFormattedDate(
      "#tempPerMonthStartDate",
      monthlyStartDay,
      monthlyStartMonth,
      monthlyStartYear
    );
    cy.setFormattedDate(
      "#tempPerMonthEndDate",
      monthlyEndDay,
      monthlyEndMonth,
      monthlyEndYear
    );

    cy.get("#remark").clear();
    cy.get("#remark").type("TS03: ui control limit | not active range");

    cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#\\31 ").click();

    cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#submitThis").click();

    cy.takeScreenshotSimplify("4", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    /* ==== End Cypress Studio ==== */

    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(2) > a > span").click();
    cy.get(".selected > a > div").click();
    cy.get("#search").clear();
    cy.get("#search").type(companyName);
    cy.get("form > :nth-child(1) > .button").click();
    cy.get(".selectInTable").select("viewDetails");
    /* ==== End Cypress Studio ==== */

    cy.takeScreenshotSimplify("5", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#buttonGo").click();

    /* ==== Generated with Cypress Studio ==== */
    // Monthly Usage
    cy.get(":nth-child(48)").should("have.text", "THB 2,000");
    // Balance
    cy.get(":nth-child(50)").should("have.text", "THB 98,000");
    // Current Transaction Type
    cy.get(":nth-child(52)").should("have.text", "Permanent Limit");
    // Current Month Type
    cy.get(":nth-child(54)").should("have.text", "Permanent Limit");
    // Permanent Transaction Limit
    cy.get(":nth-child(56)").should("have.text", "THB 10,000");
    // Permanent Month Limit
    cy.get(":nth-child(59)").should("have.text", "THB 100,000");
    /* ==== End Cypress Studio ==== */

    cy.takeScreenshotSimplify("6", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  });

  it("TS05", () => {
    // TODO: test this case after entering new month and usage is reset

    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(2) > a > span").click();
    cy.get(".selected > a > div").click();
    cy.get("#search").clear();
    cy.get("#search").type(companyName);
    cy.get("form > :nth-child(1) > .button").click();
    cy.get(".selectInTable").select("viewDetails");
    /* ==== End Cypress Studio ==== */

    cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#buttonGo").click();

    /* ==== Generated with Cypress Studio ==== */
    // Monthly Usage
    cy.get(":nth-child(48)").should("have.text", "THB 0");
    // Balance
    cy.get(":nth-child(50)").should("have.text", "THB 100,000");
    // Current Transaction Type
    cy.get(":nth-child(52)").should("have.text", "Permanent Limit");
    // Current Month Type
    cy.get(":nth-child(54)").should("have.text", "Permanent Limit");
    // Permanent Transaction Limit
    cy.get(":nth-child(56)").should("have.text", "THB 10,000");
    // Permanent Month Limit
    cy.get(":nth-child(59)").should("have.text", "THB 100,000");
    /* ==== End Cypress Studio ==== */

    /* ==== End Cypress Studio ==== */
    cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  });

  it("TS06", () => {
    //TODO: reference test results from sheet "SIT Payment MPOS" in TC22
  });
});
