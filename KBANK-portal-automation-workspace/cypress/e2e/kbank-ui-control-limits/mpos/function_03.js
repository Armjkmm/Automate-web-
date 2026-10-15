describe("function 03", () => {
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

  let transStartDay = 11;
  let transStartMonth = 11;
  let transStartYear = 2024;
  let transEndDay;
  let transEndMonth;
  let transEndYear;

  let monthlyStartDay = 11;
  let monthlyStartMonth = 11;
  let monthlyStartYear = 2024;
  let monthlyEndDay;
  let monthlyEndMonth;
  let monthlyEndYear;

  it("TS13", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(2) > a > span").click();
    cy.get(".selected > a > div").click();
    cy.get("#search").clear();
    cy.get("#search").type(companyName);
    cy.get("form > :nth-child(1) > .button").click();
    cy.get(".selectInTable").select("addTemporary");
    /* ==== End Cypress Studio ==== */

    cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#buttonGo").click();

    cy.setFormattedDate(
      "#tempPerTranStartDate",
      transStartDay,
      transStartMonth,
      transStartYear
    );

    transEndDay = 31;
    transEndMonth = 12;
    transEndYear = 2024;

    cy.setFormattedDate(
      "#tempPerTranEndDate",
      transEndDay,
      transEndMonth,
      transEndYear
    );

    cy.get("#tempPerTran").clear();
    cy.get("#tempPerTran").type("11000");

    cy.get("#remark").clear();
    cy.get("#remark").type("test TS13");

    cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  });

  it("TS14", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(2) > a > span").click();
    cy.get(".selected > a > div").click();
    cy.get("#search").clear();
    cy.get("#search").type(companyName);
    cy.get("form > :nth-child(1) > .button").click();
    cy.get(".selectInTable").select("addTemporary");
    /* ==== End Cypress Studio ==== */

    cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#buttonGo").click();

    cy.setFormattedDate(
      "#tempPerMonthStartDate",
      monthlyStartDay,
      monthlyStartMonth,
      monthlyStartYear
    );

    monthlyEndDay = 31;
    monthlyEndMonth = 12;
    monthlyEndYear = 2024;

    cy.setFormattedDate(
      "#tempPerMonthEndDate",
      monthlyEndDay,
      monthlyEndMonth,
      monthlyEndYear
    );

    cy.get("#tempPerMonth").clear();
    cy.get("#tempPerMonth").type("101000");

    cy.get("#remark").clear();
    cy.get("#remark").type("test TS14");

    cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  });

  it("TS15", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(2) > a > span").click();
    cy.get(".selected > a > div").click();
    cy.get("#search").clear();
    cy.get("#search").type(companyName);
    cy.get("form > :nth-child(1) > .button").click();
    cy.get(".selectInTable").select("addTemporary");
    /* ==== End Cypress Studio ==== */

    cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#buttonGo").click();

    cy.setFormattedDate(
      "#tempPerTranStartDate",
      transStartDay,
      transStartMonth,
      transStartYear
    );

    transEndDay = 30;
    transEndMonth = 4;
    transEndYear = 2025;

    cy.setFormattedDate(
      "#tempPerTranEndDate",
      transEndDay,
      transEndMonth,
      transEndYear
    );

    cy.get("#tempPerTran").clear();
    cy.get("#tempPerTran").type("11000");

    cy.get("#remark").clear();
    cy.get("#remark").type("test TS15");

    cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  });

  it("TS16", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(2) > a > span").click();
    cy.get(".selected > a > div").click();
    cy.get("#search").clear();
    cy.get("#search").type(companyName);
    cy.get("form > :nth-child(1) > .button").click();
    cy.get(".selectInTable").select("addTemporary");
    /* ==== End Cypress Studio ==== */

    cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#buttonGo").click();

    cy.setFormattedDate(
      "#tempPerMonthStartDate",
      monthlyStartDay,
      monthlyStartMonth,
      monthlyStartYear
    );

    monthlyEndDay = 30;
    monthlyEndMonth = 4;
    monthlyEndYear = 2025;

    cy.setFormattedDate(
      "#tempPerMonthEndDate",
      monthlyEndDay,
      monthlyEndMonth,
      monthlyEndYear
    );

    cy.get("#tempPerMonth").clear();
    cy.get("#tempPerMonth").type("101000");

    cy.get("#remark").clear();
    cy.get("#remark").type("test TS16");

    cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  });

  it("TS17", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(2) > a > span").click();
    cy.get(".selected > a > div").click();
    cy.get("#search").clear();
    cy.get("#search").type(companyName);
    cy.get("form > :nth-child(1) > .button").click();
    cy.get(".selectInTable").select("addTemporary");
    /* ==== End Cypress Studio ==== */

    cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#buttonGo").click();

    cy.get("#tempPerTran").clear();
    cy.get("#tempPerTran").type("11000");

    cy.get("#remark").clear();
    cy.get("#remark").type("test TS17");

    cy.setFormattedDate(
      "#tempPerTranStartDate",
      transStartDay,
      transStartMonth,
      transStartYear
    );

    transEndDay = 1;
    transEndMonth = 5;
    transEndYear = 2025;

    cy.setFormattedDate(
      "#tempPerTranEndDate",
      transEndDay,
      transEndMonth,
      transEndYear
    );

    cy.get("#tempPerTranEndDate").clear();

    cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  });

  it("TS18", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(2) > a > span").click();
    cy.get(".selected > a > div").click();
    cy.get("#search").clear();
    cy.get("#search").type(companyName);
    cy.get("form > :nth-child(1) > .button").click();
    cy.get(".selectInTable").select("addTemporary");
    /* ==== End Cypress Studio ==== */

    cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#buttonGo").click();

    cy.get("#tempPerMonth").clear();
    cy.get("#tempPerMonth").type("101000");

    cy.get("#remark").clear();
    cy.get("#remark").type("test TS18");

    cy.setFormattedDate(
      "#tempPerMonthStartDate",
      monthlyStartDay,
      monthlyStartMonth,
      monthlyStartYear
    );

    monthlyEndDay = 1;
    monthlyEndMonth = 5;
    monthlyEndYear = 2025;

    cy.setFormattedDate(
      "#tempPerMonthEndDate",
      monthlyEndDay,
      monthlyEndMonth,
      monthlyEndYear
    );

    cy.get("#tempPerMonthEndDate").clear();

    cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  });

  it("TS19", () => {
    //TODO: got results from SIT Result_MPOS Payment Control Limit TC17 - TC20
  });
});
