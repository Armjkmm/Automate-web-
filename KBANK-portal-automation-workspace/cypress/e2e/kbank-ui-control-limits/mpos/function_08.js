import { format, endOfMonth, startOfMonth, addMonths } from "date-fns";

function navigateAndSearchCompany(companyName) {
  cy.get(":nth-child(2) > a > span").click();
  cy.get(".selected > a > div").click();
  cy.get("#search").clear();
  cy.get("#search").type(companyName);
  cy.get("form > :nth-child(1) > .button").click();
}

/**
 * Sets a temporary transaction and monthly limit for a specified company.
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
function setTemporaryLimit(
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
  cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  cy.get("#buttonGo").click();
  cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

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

describe("function 08", () => {
  let companyName = "AutomatedTestCompany1";

  const today = new Date();
  const todayFormatted = format(today, "dd-MM-yyyy");

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

  it("TS54", () => {
    // Set temporary limit
    let tempTransStartDate = todayFormatted;
    let tempTransEndDate = endOfNextMonthFormatted;
    let tempMonthStartDate = todayFormatted;
    let tempMonthEndDate = endOfNextMonthFormatted;
    let tempTransAmount = 43999;
    let tempMonthAmount = 350000;
    let tempRemarkComments = "test TS54";

    setTemporaryLimit(
      companyName,
      tempTransStartDate,
      tempTransEndDate,
      tempMonthStartDate,
      tempMonthEndDate,
      tempTransAmount,
      tempMonthAmount,
      tempRemarkComments
    );

    cy.get("#tempPerTranError > span").should(
      "include.text",
      "วงเงินชั่วคราวต่อรายการต้องมากกว่าวงเงินถาวรต่อรายการ"
    );
  });

  it("TS55", () => {
    // Set temporary limit
    let tempTransStartDate = todayFormatted;
    let tempTransEndDate = endOfNextMonthFormatted;
    let tempMonthStartDate = todayFormatted;
    let tempMonthEndDate = endOfNextMonthFormatted;
    let tempTransAmount = 45000;
    let tempMonthAmount = 339999;
    let tempRemarkComments = "test TS55";

    setTemporaryLimit(
      companyName,
      tempTransStartDate,
      tempTransEndDate,
      tempMonthStartDate,
      tempMonthEndDate,
      tempTransAmount,
      tempMonthAmount,
      tempRemarkComments
    );

    cy.get("#tempPerMonthError > span").should(
      "include.text",
      "วงเงินชั่วคราวต่อรายเดือนต้องมากกว่าวงเงินถาวรต่อรายเดือน"
    );
  });
});
