import { format, endOfMonth, startOfMonth, addMonths } from "date-fns";

function navigateAndSearchCompany(companyName) {
  cy.get(":nth-child(2) > a > span").click();
  cy.get(".selected > a > div").click();
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
function setPermanentLimit(
  companyName,
  maxTransAmount,
  maxMonthAmount,
  remarkComments
) {
  navigateAndSearchCompany(companyName);
  cy.get(".selectInTable").select("updatePermanent");
  cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  cy.get("#buttonGo").click();

  cy.get("#maxAmountPerTransaction").clear();
  cy.get("#maxAmountPerTransaction").type(`${maxTransAmount}`);
  cy.get("#maxAmountPerMonth").clear();
  cy.get("#maxAmountPerMonth").type(`${maxMonthAmount}`);
  cy.get("#remark").clear();
  cy.get("#remark").type(remarkComments);
  cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

  cy.get("#\\31").click();
  cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  cy.get("#submitThis").click();
  cy.takeScreenshotSimplify("4", Cypress.ScreenshotCaptureEnum.FULLPAGE);
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
  cy.takeScreenshotSimplify("5", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  cy.get("#buttonGo").click();

  let tempTransStartDateData = tempTransStartDate.split("-");
  let tempTransEndDateData = tempTransEndDate.split("-");
  let tempMonthStartDateData = tempMonthStartDate.split("-");
  let tempMonthEndDateData = tempMonthEndDate.split("-");

  cy.get("#tempPerTran").clear();
  cy.get("#tempPerTran").type(`${tempTransAmount}`);
  cy.get("#tempPerMonth").clear();
  cy.get("#tempPerMonth").type(`${tempMonthAmount}`);
  cy.get("#remark").clear();
  cy.get("#remark").type(remarkComments);

  cy.setFormattedDate(
    "#tempPerTranStartDate",
    Number(tempTransStartDateData[0]),
    Number(tempTransStartDateData[1]),
    Number(tempTransStartDateData[2])
  );

  cy.setFormattedDate(
    "#tempPerTranEndDate",
    Number(tempTransEndDateData[0]),
    Number(tempTransEndDateData[1]),
    Number(tempTransEndDateData[2])
  );

  cy.setFormattedDate(
    "#tempPerMonthStartDate",
    Number(tempMonthStartDateData[0]),
    Number(tempMonthStartDateData[1]),
    Number(tempMonthStartDateData[2])
  );
  cy.setFormattedDate(
    "#tempPerMonthEndDate",
    Number(tempMonthEndDateData[0]),
    Number(tempMonthEndDateData[1]),
    Number(tempMonthEndDateData[2])
  );
  cy.takeScreenshotSimplify("6", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  cy.get("#\\31").click();
  cy.takeScreenshotSimplify("7", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  cy.get("#submitThis").click();
  cy.takeScreenshotSimplify("8", Cypress.ScreenshotCaptureEnum.FULLPAGE);
}

/**
 * Updates the permanent transaction and monthly limit for a specified company.
 *
 * @param {string} companyName - The name of the company for which to update the permanent limit.
 * @param {number} maxTransAmount - The maximum amount allowed per transaction.
 * @param {number} maxMonthAmount - The maximum amount allowed per month.
 * @param {string} remarkComments - Additional comments for the permanent limit update.
 */
function updatePermanentLimit(
  companyName,
  maxTransAmount,
  maxMonthAmount,
  remarkComments
) {
  // Update permanent limit
  navigateAndSearchCompany(companyName);
  cy.get(".selectInTable").select("updatePermanent");
  cy.takeScreenshotSimplify("9", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  cy.get("#buttonGo").click();

  cy.get("#maxAmountPerTransaction").clear();

  if (maxTransAmount != null && maxTransAmount > 0) {
    cy.get("#maxAmountPerTransaction").type(`${maxTransAmount}`);
  }

  cy.get("#maxAmountPerMonth").clear();

  if (maxMonthAmount != null && maxMonthAmount > 0) {
    cy.get("#maxAmountPerMonth").type(`${maxMonthAmount}`);
  }

  cy.get("#remark").clear();
  cy.get("#remark").type(remarkComments);
  cy.takeScreenshotSimplify("10", Cypress.ScreenshotCaptureEnum.FULLPAGE);

  cy.get("#\\31").click();
}

/**
 * Reset the company's temporary limit (both per month and per transaction) by add the higher transaction and month
 *
 * @param {string} companyName - the company name you want to reset temporary limit
 **/
function resetTemporaryLimit(companyName) {
  let maximumTransAmount = 1000000;
  let maximumMonthAmount = 10000000;
  let remarkComments = "Resetting temporary limit";

  navigateAndSearchCompany(companyName);
  cy.get(".selectInTable").select("updatePermanent");
  cy.get("#buttonGo").click();

  cy.get("#maxAmountPerTransaction").clear();
  cy.get("#maxAmountPerTransaction").type(`${maximumTransAmount}`);
  cy.get("#maxAmountPerMonth").clear();
  cy.get("#maxAmountPerMonth").type(`${maximumMonthAmount}`);
  cy.get("#remark").clear();
  cy.get("#remark").type(remarkComments);

  cy.get("#\\31").click();

  cy.wait(3000);

  // Check if the error message includes "exceed temporary limit"
  cy.get("#errorMassage")
    .should("include.text", "exceed temporary limit")
    .then((errorMessage) => {
      if (errorMessage.text().includes("exceed temporary limit")) {
        cy.get("#popUpLimitSubmit").click();
      }
    });

  cy.wait(1000);
  cy.get("#submitThis").click();
}

describe("function 06", () => {
  let companyName = "AutomatedTestCompany1";

  const today = new Date();
  const todayFormatted = format(today, "dd-MM-yyyy");

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
    resetTemporaryLimit(companyName);
  });

  // TS38 - TS41: (only permanent trans) trans permanent exceed temp trans limit
  it("TS38", () => {
    // Set permanent limit
    let permTransAmount = 36000;
    let permMonthAmount = 260000;
    let permRemarkComments = "test TS38";

    // Set temporary limit

    let tempTransStartDate = todayFormatted;
    let tempTransEndDate = endOfNextMonthFormatted;
    let tempMonthStartDate = todayFormatted;
    let tempMonthEndDate = endOfNextMonthFormatted;
    let tempTransAmount = 37000;
    let tempMonthAmount = 500000;
    let tempRemarkComments = "test TS38";

    // (Update) Set permanent limit
    let updatedPermTransAmount = 37000;
    let updatedPermMonthAmount = null;
    let updatedPermRemarkComments = "test TS38 update permanent limit";
    let updatedPopupErrorMessage =
      "Permanent limit per transaction exceeds temporary limit";

    //#region Same template
    setPermanentLimit(
      companyName,
      permTransAmount,
      permMonthAmount,
      permRemarkComments
    );

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

    updatePermanentLimit(
      companyName,
      updatedPermTransAmount,
      updatedPermMonthAmount,
      updatedPermRemarkComments
    );

    cy.get("#errorMassage").should("include.text", updatedPopupErrorMessage);

    cy.takeScreenshotSimplify("11", Cypress.ScreenshotCaptureEnum.VIEWPORT);

    cy.get("#popUpBack").click();
    cy.takeScreenshotSimplify("12", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.wait(1000);
    cy.get("#\\31").click();
    cy.takeScreenshotSimplify("13", Cypress.ScreenshotCaptureEnum.VIEWPORT);

    cy.get("#popUpLimitSubmit").click();
    cy.takeScreenshotSimplify("14", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#\\32").click();
    cy.takeScreenshotSimplify("15", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.wait(1000);
    cy.get("#\\31").click();
    cy.wait(1000);
    cy.get("#popUpLimitSubmit").click();
    cy.takeScreenshotSimplify("16", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#submitThis").click();
    cy.takeScreenshotSimplify("17", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    navigateAndSearchCompany(companyName);
    cy.get(".selectInTable").select("viewDetails");
    cy.takeScreenshotSimplify("18", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    cy.get("#buttonGo").click();
    cy.takeScreenshotSimplify("19", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    //#endregion
  });

  it("TS39", () => {
    // Set permanent limit
    let permTransAmount = 37000;
    let permMonthAmount = 260000;
    let permRemarkComments = "test TS39";

    // Set temporary limit

    let tempTransStartDate = startOfNextMonthFormatted;
    let tempTransEndDate = endOfNextMonthFormatted;
    let tempMonthStartDate = todayFormatted;
    let tempMonthEndDate = endOfNextMonthFormatted;
    let tempTransAmount = 38000;
    let tempMonthAmount = 500000;
    let tempRemarkComments = "test TS39";

    // (Update) Set permanent limit
    let updatedPermTransAmount = 38000;
    let updatedPermMonthAmount = null;
    let updatedPermRemarkComments = "test TS39 update permanent limit";
    let updatedPopupErrorMessage =
      "Permanent limit per transaction exceeds temporary limit";

    //#region Same template
    setPermanentLimit(
      companyName,
      permTransAmount,
      permMonthAmount,
      permRemarkComments
    );

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

    updatePermanentLimit(
      companyName,
      updatedPermTransAmount,
      updatedPermMonthAmount,
      updatedPermRemarkComments
    );

    cy.get("#errorMassage").should("include.text", updatedPopupErrorMessage);

    cy.takeScreenshotSimplify("11", Cypress.ScreenshotCaptureEnum.VIEWPORT);

    cy.get("#popUpBack").click();
    cy.takeScreenshotSimplify("12", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.wait(1000);
    cy.get("#\\31").click();
    cy.takeScreenshotSimplify("13", Cypress.ScreenshotCaptureEnum.VIEWPORT);

    cy.get("#popUpLimitSubmit").click();
    cy.takeScreenshotSimplify("14", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#\\32").click();
    cy.takeScreenshotSimplify("15", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.wait(1000);
    cy.get("#\\31").click();
    cy.wait(1000);
    cy.get("#popUpLimitSubmit").click();
    cy.takeScreenshotSimplify("16", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#submitThis").click();
    cy.takeScreenshotSimplify("17", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    navigateAndSearchCompany(companyName);
    cy.get(".selectInTable").select("viewDetails");
    cy.takeScreenshotSimplify("18", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    cy.get("#buttonGo").click();
    cy.takeScreenshotSimplify("19", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    //#endregion
  });

  it("TS40", () => {
    // Set permanent limit
    let permTransAmount = 38000;
    let permMonthAmount = 260000;
    let permRemarkComments = "test TS40";

    // Set temporary limit

    let tempTransStartDate = todayFormatted;
    let tempTransEndDate = endOfNextMonthFormatted;
    let tempMonthStartDate = startOfNextMonthFormatted;
    let tempMonthEndDate = endOfNextMonthFormatted;
    let tempTransAmount = 39000;
    let tempMonthAmount = 500000;
    let tempRemarkComments = "test TS40";

    // (Update) Set permanent limit
    let updatedPermTransAmount = 39000;
    let updatedPermMonthAmount = null;
    let updatedPermRemarkComments = "test TS40 update permanent limit";
    let updatedPopupErrorMessage =
      "Permanent limit per transaction exceeds temporary limit";

    //#region Same template
    setPermanentLimit(
      companyName,
      permTransAmount,
      permMonthAmount,
      permRemarkComments
    );

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

    updatePermanentLimit(
      companyName,
      updatedPermTransAmount,
      updatedPermMonthAmount,
      updatedPermRemarkComments
    );

    cy.get("#errorMassage").should("include.text", updatedPopupErrorMessage);

    cy.takeScreenshotSimplify("11", Cypress.ScreenshotCaptureEnum.VIEWPORT);

    cy.get("#popUpBack").click();
    cy.takeScreenshotSimplify("12", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.wait(1000);
    cy.get("#\\31").click();
    cy.takeScreenshotSimplify("13", Cypress.ScreenshotCaptureEnum.VIEWPORT);

    cy.get("#popUpLimitSubmit").click();
    cy.takeScreenshotSimplify("14", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#\\32").click();
    cy.takeScreenshotSimplify("15", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.wait(1000);
    cy.get("#\\31").click();
    cy.wait(1000);
    cy.get("#popUpLimitSubmit").click();
    cy.takeScreenshotSimplify("16", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#submitThis").click();
    cy.takeScreenshotSimplify("17", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    navigateAndSearchCompany(companyName);
    cy.get(".selectInTable").select("viewDetails");
    cy.takeScreenshotSimplify("18", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    cy.get("#buttonGo").click();
    cy.takeScreenshotSimplify("19", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    //#endregion
  });

  it("TS41", () => {
    // Set permanent limit
    let permTransAmount = 39000;
    let permMonthAmount = 260000;
    let permRemarkComments = "test TS41";

    // Set temporary limit

    let tempTransStartDate = startOfNextMonthFormatted;
    let tempTransEndDate = endOfNextMonthFormatted;
    let tempMonthStartDate = startOfNextMonthFormatted;
    let tempMonthEndDate = endOfNextMonthFormatted;
    let tempTransAmount = 40000;
    let tempMonthAmount = 500000;
    let tempRemarkComments = "test TS40";

    // (Update) Set permanent limit
    let updatedPermTransAmount = 40000;
    let updatedPermMonthAmount = null;
    let updatedPermRemarkComments = "test TS40 update permanent limit";
    let updatedPopupErrorMessage =
      "Permanent limit per transaction exceeds temporary limit";

    //#region Same template
    setPermanentLimit(
      companyName,
      permTransAmount,
      permMonthAmount,
      permRemarkComments
    );

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

    updatePermanentLimit(
      companyName,
      updatedPermTransAmount,
      updatedPermMonthAmount,
      updatedPermRemarkComments
    );

    cy.get("#errorMassage").should("include.text", updatedPopupErrorMessage);

    cy.takeScreenshotSimplify("11", Cypress.ScreenshotCaptureEnum.VIEWPORT);

    cy.get("#popUpBack").click();
    cy.takeScreenshotSimplify("12", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.wait(1000);
    cy.get("#\\31").click();
    cy.takeScreenshotSimplify("13", Cypress.ScreenshotCaptureEnum.VIEWPORT);

    cy.get("#popUpLimitSubmit").click();
    cy.takeScreenshotSimplify("14", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#\\32").click();
    cy.takeScreenshotSimplify("15", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.wait(1000);
    cy.get("#\\31").click();
    cy.wait(1000);
    cy.get("#popUpLimitSubmit").click();
    cy.takeScreenshotSimplify("16", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#submitThis").click();
    cy.takeScreenshotSimplify("17", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    navigateAndSearchCompany(companyName);
    cy.get(".selectInTable").select("viewDetails");
    cy.takeScreenshotSimplify("18", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    cy.get("#buttonGo").click();
    cy.takeScreenshotSimplify("19", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    //#endregion
  });

  // TS42 - TS45: (only permanent trans) not over limit
  it("TS42", () => {
    // Set permanent limit
    let permTransAmount = 40000;
    let permMonthAmount = 260000;
    let permRemarkComments = "test TS42";

    // Set temporary limit

    let tempTransStartDate = todayFormatted;
    let tempTransEndDate = endOfNextMonthFormatted;
    let tempMonthStartDate = todayFormatted;
    let tempMonthEndDate = endOfNextMonthFormatted;
    let tempTransAmount = 50000;
    let tempMonthAmount = 500000;
    let tempRemarkComments = "test TS42";

    // (Update) Set permanent limit
    let updatedPermTransAmount = 41000;
    let updatedPermMonthAmount = null;
    let updatedPermRemarkComments = "test TS42 update permanent limit";
    let updatedPopupErrorMessage = "Do you want to add Permanent Limit";

    //#region Same template
    setPermanentLimit(
      companyName,
      permTransAmount,
      permMonthAmount,
      permRemarkComments
    );

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

    updatePermanentLimit(
      companyName,
      updatedPermTransAmount,
      updatedPermMonthAmount,
      updatedPermRemarkComments
    );

    cy.get("#errorMassage").should("include.text", updatedPopupErrorMessage);

    cy.takeScreenshotSimplify("11", Cypress.ScreenshotCaptureEnum.VIEWPORT);

    cy.get("#popUpBack").click();
    cy.takeScreenshotSimplify("12", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.wait(1000);
    cy.get("#\\31").click();
    cy.takeScreenshotSimplify("13", Cypress.ScreenshotCaptureEnum.VIEWPORT);

    cy.get("#popUpLimitSubmit").click();
    cy.takeScreenshotSimplify("14", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#\\32").click();
    cy.takeScreenshotSimplify("15", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.wait(1000);
    cy.get("#\\31").click();
    cy.wait(1000);
    cy.get("#popUpLimitSubmit").click();
    cy.takeScreenshotSimplify("16", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#submitThis").click();
    cy.takeScreenshotSimplify("17", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    navigateAndSearchCompany(companyName);
    cy.get(".selectInTable").select("viewDetails");
    cy.takeScreenshotSimplify("18", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    cy.get("#buttonGo").click();
    cy.takeScreenshotSimplify("19", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    //#endregion
  });

  it("TS43", () => {
    // Set permanent limit
    let permTransAmount = 41000;
    let permMonthAmount = 260000;
    let permRemarkComments = "test TS43";

    // Set temporary limit

    let tempTransStartDate = startOfNextMonthFormatted;
    let tempTransEndDate = endOfNextMonthFormatted;
    let tempMonthStartDate = todayFormatted;
    let tempMonthEndDate = endOfNextMonthFormatted;
    let tempTransAmount = 50000;
    let tempMonthAmount = 500000;
    let tempRemarkComments = "test TS43";

    // (Update) Set permanent limit
    let updatedPermTransAmount = 42000;
    let updatedPermMonthAmount = null;
    let updatedPermRemarkComments = "test TS43 update permanent limit";
    let updatedPopupErrorMessage = "Do you want to add Permanent Limit";

    //#region Same template
    setPermanentLimit(
      companyName,
      permTransAmount,
      permMonthAmount,
      permRemarkComments
    );

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

    updatePermanentLimit(
      companyName,
      updatedPermTransAmount,
      updatedPermMonthAmount,
      updatedPermRemarkComments
    );

    cy.get("#errorMassage").should("include.text", updatedPopupErrorMessage);

    cy.takeScreenshotSimplify("11", Cypress.ScreenshotCaptureEnum.VIEWPORT);

    cy.get("#popUpBack").click();
    cy.takeScreenshotSimplify("12", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.wait(1000);
    cy.get("#\\31").click();
    cy.takeScreenshotSimplify("13", Cypress.ScreenshotCaptureEnum.VIEWPORT);

    cy.get("#popUpLimitSubmit").click();
    cy.takeScreenshotSimplify("14", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#\\32").click();
    cy.takeScreenshotSimplify("15", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.wait(1000);
    cy.get("#\\31").click();
    cy.wait(1000);
    cy.get("#popUpLimitSubmit").click();
    cy.takeScreenshotSimplify("16", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#submitThis").click();
    cy.takeScreenshotSimplify("17", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    navigateAndSearchCompany(companyName);
    cy.get(".selectInTable").select("viewDetails");
    cy.takeScreenshotSimplify("18", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    cy.get("#buttonGo").click();
    cy.takeScreenshotSimplify("19", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    //#endregion
  });

  it("TS44", () => {
    // Set permanent limit
    let permTransAmount = 42000;
    let permMonthAmount = 260000;
    let permRemarkComments = "test TS44";

    // Set temporary limit

    let tempTransStartDate = todayFormatted;
    let tempTransEndDate = endOfNextMonthFormatted;
    let tempMonthStartDate = startOfNextMonthFormatted;
    let tempMonthEndDate = endOfNextMonthFormatted;
    let tempTransAmount = 50000;
    let tempMonthAmount = 500000;
    let tempRemarkComments = "test TS44";

    // (Update) Set permanent limit
    let updatedPermTransAmount = 43000;
    let updatedPermMonthAmount = null;
    let updatedPermRemarkComments = "test TS44 update permanent limit";
    let updatedPopupErrorMessage = "Do you want to add Permanent Limit";

    //#region Same template
    setPermanentLimit(
      companyName,
      permTransAmount,
      permMonthAmount,
      permRemarkComments
    );

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

    updatePermanentLimit(
      companyName,
      updatedPermTransAmount,
      updatedPermMonthAmount,
      updatedPermRemarkComments
    );

    cy.get("#errorMassage").should("include.text", updatedPopupErrorMessage);

    cy.takeScreenshotSimplify("11", Cypress.ScreenshotCaptureEnum.VIEWPORT);

    cy.get("#popUpBack").click();
    cy.takeScreenshotSimplify("12", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.wait(1000);
    cy.get("#\\31").click();
    cy.takeScreenshotSimplify("13", Cypress.ScreenshotCaptureEnum.VIEWPORT);

    cy.get("#popUpLimitSubmit").click();
    cy.takeScreenshotSimplify("14", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#\\32").click();
    cy.takeScreenshotSimplify("15", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.wait(1000);
    cy.get("#\\31").click();
    cy.wait(1000);
    cy.get("#popUpLimitSubmit").click();
    cy.takeScreenshotSimplify("16", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#submitThis").click();
    cy.takeScreenshotSimplify("17", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    navigateAndSearchCompany(companyName);
    cy.get(".selectInTable").select("viewDetails");
    cy.takeScreenshotSimplify("18", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    cy.get("#buttonGo").click();
    cy.takeScreenshotSimplify("19", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    //#endregion
  });

  it("TS45", () => {
    // Set permanent limit
    let permTransAmount = 43000;
    let permMonthAmount = 260000;
    let permRemarkComments = "test TS45";

    // Set temporary limit

    let tempTransStartDate = startOfNextMonthFormatted;
    let tempTransEndDate = endOfNextMonthFormatted;
    let tempMonthStartDate = startOfNextMonthFormatted;
    let tempMonthEndDate = endOfNextMonthFormatted;
    let tempTransAmount = 50000;
    let tempMonthAmount = 500000;
    let tempRemarkComments = "test TS45";

    // (Update) Set permanent limit
    let updatedPermTransAmount = 44000;
    let updatedPermMonthAmount = null;
    let updatedPermRemarkComments = "test TS45 update permanent limit";
    let updatedPopupErrorMessage = "Do you want to add Permanent Limit";

    //#region Same template
    setPermanentLimit(
      companyName,
      permTransAmount,
      permMonthAmount,
      permRemarkComments
    );

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

    updatePermanentLimit(
      companyName,
      updatedPermTransAmount,
      updatedPermMonthAmount,
      updatedPermRemarkComments
    );

    cy.get("#errorMassage").should("include.text", updatedPopupErrorMessage);

    cy.takeScreenshotSimplify("11", Cypress.ScreenshotCaptureEnum.VIEWPORT);

    cy.get("#popUpBack").click();
    cy.takeScreenshotSimplify("12", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.wait(1000);
    cy.get("#\\31").click();
    cy.takeScreenshotSimplify("13", Cypress.ScreenshotCaptureEnum.VIEWPORT);

    cy.get("#popUpLimitSubmit").click();
    cy.takeScreenshotSimplify("14", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#\\32").click();
    cy.takeScreenshotSimplify("15", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.wait(1000);
    cy.get("#\\31").click();
    cy.wait(1000);
    cy.get("#popUpLimitSubmit").click();
    cy.takeScreenshotSimplify("16", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#submitThis").click();
    cy.takeScreenshotSimplify("17", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    navigateAndSearchCompany(companyName);
    cy.get(".selectInTable").select("viewDetails");
    cy.takeScreenshotSimplify("18", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    cy.get("#buttonGo").click();
    cy.takeScreenshotSimplify("19", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    //#endregion
  });
});
