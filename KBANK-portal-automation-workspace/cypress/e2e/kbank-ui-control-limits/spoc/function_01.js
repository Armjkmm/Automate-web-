/**
 * Configures permanent transaction limits for a company.
 *
 * @param {string} companyName - Name of the target company.
 * @param {number|null} transAmountLimit - Max amount per transaction (null or <=0 to skip).
 * @param {number|null} monthAmountLimit - Max amount per month (null or <=0 to skip).
 * @param {string} remarkComments - Remarks to include with the configuration.
 *
 * Steps:
 * 1. Search for the company and select "updatePermanent".
 * 2. Clear and optionally set transaction and monthly limits.
 * 3. Add remarks, confirm changes, and submit.
 */
function navigateAndSearchCompany(companyName) {
  cy.get(":nth-child(2) > a > span").click();
  cy.get(":nth-child(4) > a > div").click();
  cy.get("#search").clear();
  cy.get("#search").type(companyName);
  cy.get("form > :nth-child(1) > .button").click();
}

/**
 * Validates transaction limit details displayed on the UI.
 *
 * @param {number} monthlyUsage - Monthly usage amount (THB).
 * @param {number} balance - Remaining balance (THB).
 * @param {string} transTypes - Current transaction type.
 * @param {string} monthTypes - Current month type.
 * @param {number|null} permTransLimit - Permanent transaction limit (null or <=0 to skip).
 * @param {number|null} permMonthLimit - Permanent monthly limit (null or <=0 to skip).
 * @param {number|null} tempTransLimit - Temporary transaction limit (null or <=0 to skip).
 * @param {number|null} tempMonthLimit - Temporary monthly limit (null or <=0 to skip).
 *
 * Steps:
 * 1. Validate monthly usage, balance, transaction type, and month type.
 * 2. Optionally validate permanent and temporary limits if provided.
 */
function checkTransactionLimitValues(
  monthlyUsage,
  balance,
  transTypes,
  monthTypes,
  permTransLimit,
  permMonthLimit,
  tempTransLimit,
  tempMonthLimit
) {
  // Monthly Usage
  cy.get(":nth-child(6) > :nth-child(2) > :nth-child(52)").should(
    "include.text",
    `THB ${monthlyUsage}`
  );
  // Balance
  cy.get(":nth-child(6) > :nth-child(2) > :nth-child(54)").should(
    "include.text",
    `THB ${balance}`
  );
  // Current Transaction Type
  cy.get(":nth-child(6) > :nth-child(2) > :nth-child(56)").should(
    "include.text",
    `${transTypes}`
  );
  // Current Month Type
  cy.get(":nth-child(6) > :nth-child(2) > :nth-child(58)").should(
    "include.text",
    `${monthTypes}`
  );

  if (permTransLimit != null && permTransLimit > 0) {
    // Permanent Transaction Limit
    cy.get(":nth-child(6) > :nth-child(2) > :nth-child(60)").should(
      "include.text",
      `THB ${permTransLimit}`
    );
  }

  if (permMonthLimit != null && permMonthLimit > 0) {
    // Permanent Month Limit
    cy.get(":nth-child(6) > :nth-child(2) > :nth-child(63)").should(
      "include.text",
      `THB ${permMonthLimit}`
    );
  }

  if (tempTransLimit != null && tempTransLimit > 0) {
    // Temp Transaction Limit
    cy.get(":nth-child(6) > :nth-child(2) > :nth-child(65)").should(
      "include.text",
      `THB ${tempTransLimit}`
    );
  }

  if (tempMonthLimit != null && tempMonthLimit > 0) {
    // Temp Transaction Limit
    cy.get(":nth-child(6) > :nth-child(2) > :nth-child(67)").should(
      "include.text",
      `THB ${tempMonthLimit}`
    );
  }
}

function setupPermanentLimit(
  companyName,
  transAmountLimit,
  monthAmountLimit,
  remarkComments
) {
  navigateAndSearchCompany(companyName);
  cy.get(".selectInTable").select("updatePermanent");
  cy.get("#buttonGo").click();

  cy.get("#maxAmountPerTransaction").clear();

  if (transAmountLimit != null && transAmountLimit > 0) {
    cy.get("#maxAmountPerTransaction").type(transAmountLimit);
  }

  cy.get("#maxAmountPerMonth").clear();

  if (monthAmountLimit != null && monthAmountLimit > 0) {
    cy.get("#maxAmountPerMonth").type(monthAmountLimit);
  }

  cy.get("#remark").clear();
  cy.get("#remark").type(remarkComments);

  cy.get("#\\31").click();

  cy.wait(1000);
  cy.get("#submitThis").click();
}

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

  let companyName = "Test Automate";

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
    let setupTransPermAmount = 10000;
    let setupMonthPermAmount = 100000;
    let setupRemarkComments = "Setup permanent before test TS01";

    let monthlyUsage = "0";
    let balance = "100,000";
    let transTypes = "Permanent Limit";
    let monthTypes = "Permanent Limit";
    let permTransLimit = "10,000";
    let permMonthLimit = "100,000";
    let tempTransLimit = null;
    let tempMonthLimit = null;

    setupPermanentLimit(
      companyName,
      setupTransPermAmount,
      setupMonthPermAmount,
      setupRemarkComments,
      setupRemarkComments
    );

    navigateAndSearchCompany(companyName);
    cy.get(".selectInTable").select("viewDetails");

    cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#buttonGo").click();

    /* ==== Generated with Cypress Studio ==== */
    checkTransactionLimitValues(
      monthlyUsage,
      balance,
      transTypes,
      monthTypes,
      permTransLimit,
      permMonthLimit,
      tempTransLimit,
      tempMonthLimit
    );

    /* ==== End Cypress Studio ==== */
    cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  });

  it("TS02", () => {
    let monthlyUsage = "1,000";
    let balance = "99,000";
    let transTypes = "Permanent Limit";
    let monthTypes = "Permanent Limit";
    let permTransLimit = "10,000";
    let permMonthLimit = "100,000";
    let tempTransLimit = null;
    let tempMonthLimit = null;

    //TODO: Manual make 1 transaction with 1000 Baht with this company

    navigateAndSearchCompany(companyName);
    cy.get(".selectInTable").select("viewDetails");

    cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#buttonGo").click();

    checkTransactionLimitValues(
      monthlyUsage,
      balance,
      transTypes,
      monthTypes,
      permTransLimit,
      permMonthLimit,
      tempTransLimit,
      tempMonthLimit
    );

    cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  });

  it("TS03", () => {
    //TODO: Manual make 1 transaction with 1000 Baht with this company

    /* ==== Generated with Cypress Studio ==== */

    let monthlyUsage = "2,000";
    let balance = "98,000";
    let transTypes = "Permanent Limit";
    let monthTypes = "Permanent Limit";
    let permTransLimit = "10,000";
    let permMonthLimit = "100,000";
    let tempTransLimit = "20,000";
    let tempMonthLimit = "200,000";

    let tempTransLimitInt = parseInt(tempTransLimit.replace(/,/g, ""), 10);
    let tempMonthLimitInt = parseInt(tempMonthLimit.replace(/,/g, ""), 10);
    let tempRemarkComments = "TS03: ui control limit | not active range";

    transStartDay = 29;
    transStartMonth = 11;
    transStartYear = 2024;
    transEndDay = 30;
    transEndMonth = 11;
    transEndYear = 2024;

    monthlyStartDay = 29;
    monthlyStartMonth = 11;
    monthlyStartYear = 2024;
    monthlyEndDay = 30;
    monthlyEndMonth = 11;
    monthlyEndYear = 2024;

    navigateAndSearchCompany(companyName);
    cy.get(".selectInTable").select("addTemporary");

    cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#buttonGo").click();

    cy.get("#tempPerTran").clear();
    cy.get("#tempPerTran").type(`${tempTransLimitInt}`);

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
    cy.get("#tempPerMonth").type(`${tempMonthLimitInt}`);

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
    cy.get("#remark").type(`${tempRemarkComments}`);

    cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#\\31 ").click();

    cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#submitThis").click();

    cy.takeScreenshotSimplify("4", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    /* ==== End Cypress Studio ==== */

    /* ==== Generated with Cypress Studio ==== */
    navigateAndSearchCompany(companyName);
    cy.get(".selectInTable").select("viewDetails");
    /* ==== End Cypress Studio ==== */

    cy.takeScreenshotSimplify("5", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#buttonGo").click();

    checkTransactionLimitValues(
      monthlyUsage,
      balance,
      transTypes,
      monthTypes,
      permTransLimit,
      permMonthLimit,
      null,
      null
    );

    cy.takeScreenshotSimplify("6", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  });

  it("TS04", () => {
    //TODO: Manual make 1 transaction with 1000 Baht with this company

    /* ==== Generated with Cypress Studio ==== */

    let monthlyUsage = "3,000";
    let balance = "197,000";
    let transTypes = "Temporary Limit";
    let monthTypes = "Temporary Limit";
    let permTransLimit = "10,000";
    let permMonthLimit = "100,000";
    let tempTransLimit = "20,000";
    let tempMonthLimit = "200,000";

    let tempTransLimitInt = parseInt(tempTransLimit.replace(/,/g, ""), 10);
    let tempMonthLimitInt = parseInt(tempMonthLimit.replace(/,/g, ""), 10);
    let tempRemarkComments = "TS04: ui control limit | active range";

    transStartDay = 18;
    transStartMonth = 11;
    transStartYear = 2024;
    transEndDay = 30;
    transEndMonth = 11;
    transEndYear = 2024;

    monthlyStartDay = 18;
    monthlyStartMonth = 11;
    monthlyStartYear = 2024;
    monthlyEndDay = 30;
    monthlyEndMonth = 11;
    monthlyEndYear = 2024;

    navigateAndSearchCompany(companyName);
    cy.get(".selectInTable").select("addTemporary");

    cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#buttonGo").click();

    cy.get("#tempPerTran").clear();
    cy.get("#tempPerTran").type(`${tempTransLimitInt}`);

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
    cy.get("#tempPerMonth").type(`${tempMonthLimitInt}`);

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
    cy.get("#remark").type(`${tempRemarkComments}`);

    cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#\\31 ").click();

    cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#submitThis").click();

    cy.takeScreenshotSimplify("4", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    /* ==== End Cypress Studio ==== */

    /* ==== Generated with Cypress Studio ==== */
    navigateAndSearchCompany(companyName);
    cy.get(".selectInTable").select("viewDetails");
    /* ==== End Cypress Studio ==== */

    cy.takeScreenshotSimplify("5", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#buttonGo").click();

    checkTransactionLimitValues(
      monthlyUsage,
      balance,
      transTypes,
      monthTypes,
      permTransLimit,
      permMonthLimit,
      tempTransLimit,
      tempMonthLimit
    );

    cy.takeScreenshotSimplify("6", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  });

  //FIXME: continue update this function
  it("TS05", () => {
    // TODO: test this case after entering new month and usage is reset
    // TODO: kept the view details results before entering new month

    let monthlyUsage = "0";
    let balance = "100,000";
    let transTypes = "Permanent Limit";
    let monthTypes = "Permanent Limit";
    let permTransLimit = "10,000";
    let permMonthLimit = "100,000";
    let tempTransLimit = null;
    let tempMonthLimit = null;

    navigateAndSearchCompany(companyName);
    cy.get(".selectInTable").select("viewDetails");

    cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#buttonGo").click();

    checkTransactionLimitValues(
      monthlyUsage,
      balance,
      transTypes,
      monthTypes,
      permTransLimit,
      permMonthLimit,
      tempTransLimit,
      tempMonthLimit
    );

    cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  });

  it("TS06", () => {
    //TODO: reference test results from sheet "SIT Payment MPOS" in TC22
  });
});
