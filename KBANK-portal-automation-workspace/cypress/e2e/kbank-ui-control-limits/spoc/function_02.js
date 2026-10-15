import { format, addDays, endOfMonth, startOfMonth, addMonths } from "date-fns";

function navigateAndSearchCompany(companyName) {
  cy.get(":nth-child(2) > a > span").click();
  cy.get(":nth-child(4) > a > div").click();
  cy.get("#search").clear();
  cy.get("#search").type(companyName);
  cy.get("form > :nth-child(1) > .button").click();
}

/**
 * function to set both permanent limit per transaction and permanent limit per month in the same time.
 * this function used in the step to add permanent limit for bank portal
 *
 * @param {string} companyName - the company name that we using to test
 * @param {number} maxTransAmount - permanent transaction amount (without commas like 1000 don't 1,000)
 * @param {number} maxMonthAmount - permanent month amount (without commas like 100000 don't 100,000)
 * @param {string} remarkComments - text for enter to remark comments field
 **/
function prepareSetPermanentLimit(
  companyName,
  maxTransAmount,
  maxMonthAmount,
  remarkComments
) {
  navigateAndSearchCompany(companyName);
  cy.get(".selectInTable").select("updatePermanent");
  cy.get("#buttonGo").click();

  cy.get("#maxAmountPerTransaction").clear();
  cy.get("#maxAmountPerTransaction").type(`${maxTransAmount}`);
  cy.get("#maxAmountPerMonth").clear();
  cy.get("#maxAmountPerMonth").type(`${maxMonthAmount}`);
  cy.get("#remark").clear();
  cy.get("#remark").type(remarkComments);

  cy.get("#\\31").click();
  cy.get("#submitThis").click();
}

/**
 * Prepare test case to set a temporary transaction and monthly limit for a specified company.
 *
 * @param {string} companyName - The name of the company for which to set the temporary limit.
 * @param {string} tempTransStartDate - The start date of the temporary transaction limit (format: YYYY-MM-DD).
 * @param {string} tempTransEndDate - The end date of the temporary transaction limit (format: YYYY-MM-DD).
 * @param {string} tempMonthStartDate - The start date of the temporary monthly limit (format: YYYY-MM-DD).
 * @param {string} tempMonthEndDate - The end date of the temporary monthly limit (format: YYYY-MM-DD).
 * @param {number} tempTransAmount - The per-transaction amount limit.
 * @param {number} tempMonthAmount - The monthly amount limit.
 * @param {string} remarkComments - Additional comments for the temporary limit.
 */
function prepareSetTemporaryLimit(
  companyName,
  tempTransStartDate,
  tempTransEndDate,
  tempMonthStartDate,
  tempMonthEndDate,
  tempTransAmount,
  tempMonthAmount,
  remarkComments
) {
  navigateAndSearchCompany(companyName);
  cy.get(".selectInTable").select("addTemporary");
  cy.get("#buttonGo").click();
  cy.get("#tempPerTran").clear();

  if (tempTransAmount != null && tempTransAmount > 0) {
    cy.get("#tempPerTran").type(`${tempTransAmount}`);
  }

  cy.get("#tempPerMonth").clear();

  if (tempMonthAmount != null && tempMonthAmount > 0) {
    cy.get("#tempPerMonth").type(`${tempMonthAmount}`);
  }
  cy.get("#remark").clear();
  cy.get("#remark").type(remarkComments);

  if (tempTransStartDate != null) {
    let tempTransStartDateData = tempTransStartDate.split("-");

    cy.setFormattedDate(
      "#tempPerTranStartDate",
      Number(tempTransStartDateData[0]),
      Number(tempTransStartDateData[1]),
      Number(tempTransStartDateData[2])
    );
  }

  if (tempTransEndDate != null) {
    let tempTransEndDateData = tempTransEndDate.split("-");

    cy.setFormattedDate(
      "#tempPerTranEndDate",
      Number(tempTransEndDateData[0]),
      Number(tempTransEndDateData[1]),
      Number(tempTransEndDateData[2])
    );
  }

  if (tempMonthStartDate != null) {
    let tempMonthStartDateData = tempMonthStartDate.split("-");

    cy.setFormattedDate(
      "#tempPerMonthStartDate",
      Number(tempMonthStartDateData[0]),
      Number(tempMonthStartDateData[1]),
      Number(tempMonthStartDateData[2])
    );
  }

  if (tempMonthEndDate != null) {
    let tempMonthEndDateData = tempMonthEndDate.split("-");

    cy.setFormattedDate(
      "#tempPerMonthEndDate",
      Number(tempMonthEndDateData[0]),
      Number(tempMonthEndDateData[1]),
      Number(tempMonthEndDateData[2])
    );
  }

  cy.get("#\\31").click();
  cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);
}

describe("function 02", () => {
  const today = new Date();
  const todayFormatted = format(today, "dd-MM-yyyy");

  // Get tomorrow
  const tomorrow = addDays(today, 1);
  const tomorrowFormatted = format(tomorrow, "dd-MM-yyyy");

  // Get the start of next month
  const startOfNextMonth = startOfMonth(addMonths(today, 1));
  const startOfNextMonthFormatted = format(startOfNextMonth, "dd-MM-yyyy");

  // Get the end of next month
  const endOfNextMonth = endOfMonth(addMonths(today, 1));
  const endOfNextMonthFormatted = format(endOfNextMonth, "dd-MM-yyyy");

  beforeEach(() => {
    // auto login to enter portal page
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME"),
      Cypress.env("KBANK_PASSWORD")
    );

    // wait for 1 seconds
    cy.wait(1000);
  });

  it("TS07", () => {
    let companyWithoutTempLimits = "บ.ปอนด์หมูกะทะ จก.";

    /* ==== Generated with Cypress Studio ==== */
    navigateAndSearchCompany(companyWithoutTempLimits);
    cy.get(".selectInTable").select("addTemporary");

    cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#buttonGo").click();

    cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    /* ==== End Cypress Studio ==== */
  });

  it("TS08", () => {
    let companyNotActiveTempPerMonth = "ร้านสบายเทส";
    let transPermAmount = 10000;
    let monthPermAmount = 100000;
    let permRemarkComments = "prepare for test TS08";
    let transTempAmount = 20000;
    let monthTempAmount = 200000;
    let tempRemarkComments = "prepare for test TS08";
    let tempTransStartDate = todayFormatted;
    let tempTransEndDate = endOfNextMonthFormatted;
    let tempMonthStartDate = startOfNextMonthFormatted;
    let tempMonthEndDate = endOfNextMonthFormatted;

    prepareSetPermanentLimit(
      companyNotActiveTempPerMonth,
      transPermAmount,
      monthPermAmount,
      permRemarkComments
    );

    prepareSetTemporaryLimit(
      companyNotActiveTempPerMonth,
      tempTransStartDate,
      tempTransEndDate,
      tempMonthStartDate,
      tempMonthEndDate,
      transTempAmount,
      monthTempAmount,
      tempRemarkComments
    );

    /* ==== Generated with Cypress Studio ==== */
    navigateAndSearchCompany(companyNotActiveTempPerMonth);
    cy.get(".selectInTable").select("viewDetails");

    cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#buttonGo").click();

    cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    /* ==== End Cypress Studio ==== */
  });

  it("TS09", () => {
    let companyNotActiveTempPerTrans = "ร้านขนมหว๊านวาน";
    let transPermAmount = 10000;
    let monthPermAmount = 100000;
    let permRemarkComments = "prepare for test TS09";
    let transTempAmount = 20000;
    let monthTempAmount = 200000;
    let tempRemarkComments = "prepare for test TS09";
    let tempTransStartDate = startOfNextMonthFormatted;
    let tempTransEndDate = endOfNextMonthFormatted;
    let tempMonthStartDate = todayFormatted;
    let tempMonthEndDate = endOfNextMonthFormatted;

    prepareSetPermanentLimit(
      companyNotActiveTempPerTrans,
      transPermAmount,
      monthPermAmount,
      permRemarkComments
    );

    prepareSetTemporaryLimit(
      companyNotActiveTempPerTrans,
      tempTransStartDate,
      tempTransEndDate,
      tempMonthStartDate,
      tempMonthEndDate,
      transTempAmount,
      monthTempAmount,
      tempRemarkComments
    );

    /* ==== Generated with Cypress Studio ==== */
    navigateAndSearchCompany(companyNotActiveTempPerTrans);
    cy.get(".selectInTable").select("viewDetails");

    cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#buttonGo").click();

    cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  });

  it("TS10", () => {
    let companyActiveTemp = "ร้านขนมหว๊านวาน";
    let transPermAmount = 10000;
    let monthPermAmount = 100000;
    let permRemarkComments = "prepare for test TS10";
    let transTempAmount = 20000;
    let monthTempAmount = 200000;
    let tempRemarkComments = "prepare for test TS10";
    let tempTransStartDate = todayFormatted;
    let tempTransEndDate = todayFormatted;
    let tempMonthStartDate = todayFormatted;
    let tempMonthEndDate = tomorrowFormatted;

    prepareSetPermanentLimit(
      companyActiveTemp,
      transPermAmount,
      monthPermAmount,
      permRemarkComments
    );

    prepareSetTemporaryLimit(
      companyNotActiveTempPerMonth,
      tempTransStartDate,
      tempTransEndDate,
      tempMonthStartDate,
      tempMonthEndDate,
      transTempAmount,
      monthTempAmount,
      tempRemarkComments
    );

    /* ==== Generated with Cypress Studio ==== */
    navigateAndSearchCompany(companyActiveTemp);
    cy.get(".selectInTable").select("viewDetails");

    cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#buttonGo").click();

    cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  });

  it("TS11", () => {
    //TODO: kept the test results before expired
    //TODO: test after TS10 temp transaction expired

    let companyTS10 = "ร้านขนมหว๊านวาน";
    /* ==== Generated with Cypress Studio ==== */
    navigateAndSearchCompany(companyTS10);
    cy.get(".selectInTable").select("viewDetails");
    /* ==== End Cypress Studio ==== */

    cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#buttonGo").click();

    /* ==== End Cypress Studio ==== */
    cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  });

  it("TS12", () => {
    //TODO: kept the test results before expired
    //TODO: test after TS11 temp month expired

    let companyTS11 = "ร้านขนมหว๊านวาน";
    /* ==== Generated with Cypress Studio ==== */
    navigateAndSearchCompany(companyTS11);
    cy.get(".selectInTable").select("viewDetails");
    /* ==== End Cypress Studio ==== */

    cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#buttonGo").click();

    /* ==== End Cypress Studio ==== */
    cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  });
});
