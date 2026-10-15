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
  cy.get("#maxAmountPerTransaction").type(`${maxTransAmount}`);
  cy.get("#maxAmountPerMonth").clear();
  cy.get("#maxAmountPerMonth").type(`${maxMonthAmount}`);
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

describe("function 05", () => {
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

  // TS22 - TS25: both permanent exceed temp
  it("TS22", () => {
    // Set permanent limit
    let permTransAmount = 20000;
    let permMonthAmount = 100000;
    let permRemarkComments = "test TS22";

    // Set temporary limit
    let tempTransStartDate = todayFormatted;
    let tempTransEndDate = endOfNextMonthFormatted;
    let tempMonthStartDate = todayFormatted;
    let tempMonthEndDate = endOfNextMonthFormatted;
    let tempTransAmount = 21000;
    let tempMonthAmount = 110000;
    let tempRemarkComments = "test TS22";

    // (Update) Set permanent limit
    let updatedPermTransAmount = 21000;
    let updatedPermMonthAmount = 110000;
    let updatedPermRemarkComments = "test TS22 update permanent limit";
    let updatedPopupErrorMessage =
      "Permanent limit per transaction & month exceed temporary limit";

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

  it("TS23", () => {
    // Set permanent limit
    let permTransAmount = 21000;
    let permMonthAmount = 110000;
    let permRemarkComments = "test TS23";

    // Set temporary limit

    let tempTransStartDate = startOfNextMonthFormatted;
    let tempTransEndDate = endOfNextMonthFormatted;
    let tempMonthStartDate = todayFormatted;
    let tempMonthEndDate = endOfNextMonthFormatted;
    let tempTransAmount = 22000;
    let tempMonthAmount = 120000;
    let tempRemarkComments = "test TS23";

    // (Update) Set permanent limit
    let updatedPermTransAmount = 22000;
    let updatedPermMonthAmount = 120000;
    let updatedPermRemarkComments = "test TS23 update permanent limit";
    let updatedPopupErrorMessage =
      "Permanent limit per transaction & month exceed temporary limit";

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

  it("TS24", () => {
    // Set permanent limit
    let permTransAmount = 22000;
    let permMonthAmount = 120000;
    let permRemarkComments = "test TS24";

    // Set temporary limit

    let tempTransStartDate = todayFormatted;
    let tempTransEndDate = endOfNextMonthFormatted;
    let tempMonthStartDate = startOfNextMonthFormatted;
    let tempMonthEndDate = endOfNextMonthFormatted;
    let tempTransAmount = 23000;
    let tempMonthAmount = 130000;
    let tempRemarkComments = "test TS24";

    // (Update) Set permanent limit
    let updatedPermTransAmount = 23000;
    let updatedPermMonthAmount = 130000;
    let updatedPermRemarkComments = "test TS24 update permanent limit";
    let updatedPopupErrorMessage =
      "Permanent limit per transaction & month exceed temporary limit";

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

  it("TS25", () => {
    // Set permanent limit
    let permTransAmount = 23000;
    let permMonthAmount = 130000;
    let permRemarkComments = "test TS25";

    // Set temporary limit

    let tempTransStartDate = startOfNextMonthFormatted;
    let tempTransEndDate = endOfNextMonthFormatted;
    let tempMonthStartDate = startOfNextMonthFormatted;
    let tempMonthEndDate = endOfNextMonthFormatted;
    let tempTransAmount = 24000;
    let tempMonthAmount = 140000;
    let tempRemarkComments = "test TS25";

    // (Update) Set permanent limit
    let updatedPermTransAmount = 24000;
    let updatedPermMonthAmount = 140000;
    let updatedPermRemarkComments = "test TS25 update permanent limit";
    let updatedPopupErrorMessage =
      "Permanent limit per transaction & month exceed temporary limit";

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

  // TS26 - TS29: permenant trans exceed temp trans
  it("TS26", () => {
    // Set permanent limit
    let permTransAmount = 24000;
    let permMonthAmount = 140000;
    let permRemarkComments = "test TS26";

    // Set temporary limit

    let tempTransStartDate = todayFormatted;
    let tempTransEndDate = endOfNextMonthFormatted;
    let tempMonthStartDate = todayFormatted;
    let tempMonthEndDate = endOfNextMonthFormatted;
    let tempTransAmount = 25000;
    let tempMonthAmount = 200000;
    let tempRemarkComments = "test TS26";

    // (Update) Set permanent limit
    let updatedPermTransAmount = 25000;
    let updatedPermMonthAmount = 150000;
    let updatedPermRemarkComments = "test TS26 update permanent limit";
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

  it("TS27", () => {
    // Set permanent limit
    let permTransAmount = 25000;
    let permMonthAmount = 150000;
    let permRemarkComments = "test TS27";

    // Set temporary limit

    let tempTransStartDate = startOfNextMonthFormatted;
    let tempTransEndDate = endOfNextMonthFormatted;
    let tempMonthStartDate = todayFormatted;
    let tempMonthEndDate = endOfNextMonthFormatted;
    let tempTransAmount = 26000;
    let tempMonthAmount = 200000;
    let tempRemarkComments = "test TS27";

    // (Update) Set permanent limit
    let updatedPermTransAmount = 26000;
    let updatedPermMonthAmount = 160000;
    let updatedPermRemarkComments = "test TS27 update permanent limit";
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

  it("TS28", () => {
    // Set permanent limit
    let permTransAmount = 26000;
    let permMonthAmount = 160000;
    let permRemarkComments = "test TS28";

    // Set temporary limit

    let tempTransStartDate = todayFormatted;
    let tempTransEndDate = endOfNextMonthFormatted;
    let tempMonthStartDate = startOfNextMonthFormatted;
    let tempMonthEndDate = endOfNextMonthFormatted;
    let tempTransAmount = 27000;
    let tempMonthAmount = 200000;
    let tempRemarkComments = "test TS28";

    // (Update) Set permanent limit
    let updatedPermTransAmount = 27000;
    let updatedPermMonthAmount = 170000;
    let updatedPermRemarkComments = "test TS28 update permanent limit";
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

  it("TS29", () => {
    // Set permanent limit
    let permTransAmount = 27000;
    let permMonthAmount = 170000;
    let permRemarkComments = "test TS29";

    // Set temporary limit

    let tempTransStartDate = startOfNextMonthFormatted;
    let tempTransEndDate = endOfNextMonthFormatted;
    let tempMonthStartDate = startOfNextMonthFormatted;
    let tempMonthEndDate = endOfNextMonthFormatted;
    let tempTransAmount = 28000;
    let tempMonthAmount = 200000;
    let tempRemarkComments = "test TS29";

    // (Update) Set permanent limit
    let updatedPermTransAmount = 28000;
    let updatedPermMonthAmount = 180000;
    let updatedPermRemarkComments = "test TS29 update permanent limit";
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

  // TS30 - TS33: permenant month exceed temp
  it("TS30", () => {
    // Set permanent limit
    let permTransAmount = 28000;
    let permMonthAmount = 180000;
    let permRemarkComments = "test TS30";

    // Set temporary limit

    let tempTransStartDate = todayFormatted;
    let tempTransEndDate = endOfNextMonthFormatted;
    let tempMonthStartDate = todayFormatted;
    let tempMonthEndDate = endOfNextMonthFormatted;
    let tempTransAmount = 40000;
    let tempMonthAmount = 185000;
    let tempRemarkComments = "test TS30";

    // (Update) Set permanent limit
    let updatedPermTransAmount = 29000;
    let updatedPermMonthAmount = 190000;
    let updatedPermRemarkComments = "test TS30 update permanent limit";
    let updatedPopupErrorMessage =
      "Permanent limit per month exceeds temporary limit";

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

  it("TS31", () => {
    // Set permanent limit
    let permTransAmount = 29000;
    let permMonthAmount = 190000;
    let permRemarkComments = "test TS31";

    // Set temporary limit

    let tempTransStartDate = startOfNextMonthFormatted;
    let tempTransEndDate = endOfNextMonthFormatted;
    let tempMonthStartDate = todayFormatted;
    let tempMonthEndDate = endOfNextMonthFormatted;
    let tempTransAmount = 40000;
    let tempMonthAmount = 195000;
    let tempRemarkComments = "test TS31";

    // (Update) Set permanent limit
    let updatedPermTransAmount = 30000;
    let updatedPermMonthAmount = 200000;
    let updatedPermRemarkComments = "test TS31 update permanent limit";
    let updatedPopupErrorMessage =
      "Permanent limit per month exceeds temporary limit";

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

  it("TS32", () => {
    // Set permanent limit
    let permTransAmount = 30000;
    let permMonthAmount = 200000;
    let permRemarkComments = "test TS32";

    // Set temporary limit

    let tempTransStartDate = todayFormatted;
    let tempTransEndDate = endOfNextMonthFormatted;
    let tempMonthStartDate = startOfNextMonthFormatted;
    let tempMonthEndDate = endOfNextMonthFormatted;
    let tempTransAmount = 40000;
    let tempMonthAmount = 205000;
    let tempRemarkComments = "test TS32";

    // (Update) Set permanent limit
    let updatedPermTransAmount = 31000;
    let updatedPermMonthAmount = 210000;
    let updatedPermRemarkComments = "test TS32 update permanent limit";
    let updatedPopupErrorMessage =
      "Permanent limit per month exceeds temporary limit";

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

  it("TS33", () => {
    // Set permanent limit
    let permTransAmount = 31000;
    let permMonthAmount = 210000;
    let permRemarkComments = "test TS33";

    // Set temporary limit

    let tempTransStartDate = startOfNextMonthFormatted;
    let tempTransEndDate = endOfNextMonthFormatted;
    let tempMonthStartDate = startOfNextMonthFormatted;
    let tempMonthEndDate = endOfNextMonthFormatted;
    let tempTransAmount = 40000;
    let tempMonthAmount = 215000;
    let tempRemarkComments = "test TS33";

    // (Update) Set permanent limit
    let updatedPermTransAmount = 32000;
    let updatedPermMonthAmount = 220000;
    let updatedPermRemarkComments = "test TS33 update permanent limit";
    let updatedPopupErrorMessage =
      "Permanent limit per month exceeds temporary limit";

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

  // TS34 - TS37: (-) not exceed temp
  it("TS34", () => {
    // Set permanent limit
    let permTransAmount = 32000;
    let permMonthAmount = 220000;
    let permRemarkComments = "test TS34";

    // Set temporary limit

    let tempTransStartDate = todayFormatted;
    let tempTransEndDate = endOfNextMonthFormatted;
    let tempMonthStartDate = todayFormatted;
    let tempMonthEndDate = endOfNextMonthFormatted;
    let tempTransAmount = 50000;
    let tempMonthAmount = 500000;
    let tempRemarkComments = "test TS34";

    // (Update) Set permanent limit
    let updatedPermTransAmount = 33000;
    let updatedPermMonthAmount = 230000;
    let updatedPermRemarkComments = "test TS34 update permanent limit";

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

    cy.takeScreenshotSimplify("11", Cypress.ScreenshotCaptureEnum.VIEWPORT);

    cy.get("#\\32").click();
    cy.takeScreenshotSimplify("12", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.wait(1000);
    cy.get("#\\31").click();
    cy.takeScreenshotSimplify("13", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#submitThis").click();
    cy.takeScreenshotSimplify("14", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    navigateAndSearchCompany(companyName);
    cy.get(".selectInTable").select("viewDetails");
    cy.takeScreenshotSimplify("15", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    cy.get("#buttonGo").click();
    cy.takeScreenshotSimplify("16", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    //#endregion
  });

  it("TS35", () => {
    // Set permanent limit
    let permTransAmount = 33000;
    let permMonthAmount = 230000;
    let permRemarkComments = "test TS35";

    // Set temporary limit
    let tempTransStartDate = startOfNextMonthFormatted;
    let tempTransEndDate = endOfNextMonthFormatted;
    let tempMonthStartDate = todayFormatted;
    let tempMonthEndDate = endOfNextMonthFormatted;
    let tempTransAmount = 50000;
    let tempMonthAmount = 500000;
    let tempRemarkComments = "test TS35";

    // (Update) Set permanent limit
    let updatedPermTransAmount = 34000;
    let updatedPermMonthAmount = 240000;
    let updatedPermRemarkComments = "test TS35 update permanent limit";

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

    cy.takeScreenshotSimplify("11", Cypress.ScreenshotCaptureEnum.VIEWPORT);

    cy.get("#\\32").click();
    cy.takeScreenshotSimplify("12", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.wait(1000);
    cy.get("#\\31").click();
    cy.takeScreenshotSimplify("13", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#submitThis").click();
    cy.takeScreenshotSimplify("14", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    navigateAndSearchCompany(companyName);
    cy.get(".selectInTable").select("viewDetails");
    cy.takeScreenshotSimplify("15", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    cy.get("#buttonGo").click();
    cy.takeScreenshotSimplify("16", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    //#endregion
  });

  it("TS36", () => {
    // Set permanent limit
    let permTransAmount = 34000;
    let permMonthAmount = 240000;
    let permRemarkComments = "test TS36";

    // Set temporary limit
    let tempTransStartDate = todayFormatted;
    let tempTransEndDate = endOfNextMonthFormatted;
    let tempMonthStartDate = startOfNextMonthFormatted;
    let tempMonthEndDate = endOfNextMonthFormatted;
    let tempTransAmount = 50000;
    let tempMonthAmount = 500000;
    let tempRemarkComments = "test TS36";

    // (Update) Set permanent limit
    let updatedPermTransAmount = 35000;
    let updatedPermMonthAmount = 250000;
    let updatedPermRemarkComments = "test TS36 update permanent limit";

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

    cy.takeScreenshotSimplify("11", Cypress.ScreenshotCaptureEnum.VIEWPORT);

    cy.get("#\\32").click();
    cy.takeScreenshotSimplify("12", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.wait(1000);
    cy.get("#\\31").click();
    cy.takeScreenshotSimplify("13", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#submitThis").click();
    cy.takeScreenshotSimplify("14", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    navigateAndSearchCompany(companyName);
    cy.get(".selectInTable").select("viewDetails");
    cy.takeScreenshotSimplify("15", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    cy.get("#buttonGo").click();
    cy.takeScreenshotSimplify("16", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    //#endregion
  });

  it("TS37", () => {
    // Set permanent limit
    let permTransAmount = 35000;
    let permMonthAmount = 250000;
    let permRemarkComments = "test TS36";

    // Set temporary limit
    let tempTransStartDate = startOfNextMonthFormatted;
    let tempTransEndDate = endOfNextMonthFormatted;
    let tempMonthStartDate = startOfNextMonthFormatted;
    let tempMonthEndDate = endOfNextMonthFormatted;
    let tempTransAmount = 50000;
    let tempMonthAmount = 500000;
    let tempRemarkComments = "test TS36";

    // (Update) Set permanent limit
    let updatedPermTransAmount = 36000;
    let updatedPermMonthAmount = 260000;
    let updatedPermRemarkComments = "test TS36 update permanent limit";

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

    cy.takeScreenshotSimplify("11", Cypress.ScreenshotCaptureEnum.VIEWPORT);

    cy.get("#\\32").click();
    cy.takeScreenshotSimplify("12", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.wait(1000);
    cy.get("#\\31").click();
    cy.takeScreenshotSimplify("13", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    cy.get("#submitThis").click();
    cy.takeScreenshotSimplify("14", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    navigateAndSearchCompany(companyName);
    cy.get(".selectInTable").select("viewDetails");
    cy.takeScreenshotSimplify("15", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    cy.get("#buttonGo").click();
    cy.takeScreenshotSimplify("16", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    //#endregion
  });
});
