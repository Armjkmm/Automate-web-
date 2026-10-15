describe("Function 06", () => {
  beforeEach(() => {
    // auto login to enter portal page
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME_2"),
      Cypress.env("KBANK_PASSWORD_2")
    );

    // wait for 1 seconds
    //cy.wait(2000);
  });

  context("Add temporary limits that less than permanent limits ", () => {
    it("TS38", () => {
      // cy.cleartemp();
      // Star per
      cy.get('li a[href="/controlLimit').click();
      //cy.wait(2000);
      cy.get(":nth-child(3) > a > div").click();
      //cy.wait(2000);
      cy.searchMid("401014525290001");
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("form > :nth-child(1) > .button").click();
      //cy.wait(2000);
      cy.get("select.selectInTable").eq(0).select("Add Permanent Limit");
      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#buttonGo").eq(0).click();
      //cy.wait(2000);
      cy.get("#maxAmountEDCPerTransac").type("100");
      cy.get("#maxAmountEDCPerMonth").type("500");
      cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\31").click();
      cy.takeScreenshotSimplify("4", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#submitThis").click();
      cy.takeScreenshotSimplify("5", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("form > .button").click();
      cy.wait(2000);
      cy.takeScreenshotSimplify("6", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.wait(3000);
      // End per

      //Start Temp
      cy.get(":nth-child(3) > a > div").click();
      //cy.wait(2000);
      cy.searchMid("401014525290001");
      //cy.wait(2000);
      cy.get("form > :nth-child(1) > .button").click();
      //cy.wait(2000);
      cy.get("select.selectInTable").eq(0).select("Add Temporary Limit");
      cy.takeScreenshotSimplify("7", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#buttonGo").eq(0).click();
      //cy.wait(2000);
      //AddTempTran
      cy.get("#tempEDCPerTransac").type("500");
      const tempStartDateSelector =
        "#datepickerAddTemporaryPerTransactionStartDate";
      cy.setFormattedDate(tempStartDateSelector, 25, 11, 2024);
      cy.wait(2000);
      const tempEndDateSelector =
        "#datepickerAddTemporaryPerTransactionExpireDate";
      cy.setFormattedDate(tempEndDateSelector, 26, 11, 2024);
      cy.wait(2000);
      //endTempTran

      //addTempMonth
      cy.get("#tempEDCPerMonth").type("1500");
      const tempStartMonthSelector = "#datepickerAddTemporaryPerMonthStartDate";
      cy.setFormattedDate(tempStartMonthSelector, 25, 11, 2024);
      const tempEndMonthSelector = "#datepickerAddTemporaryPerMonthExpireDate";
      cy.setFormattedDate(tempEndMonthSelector, 30, 11, 2024);
      cy.wait(2000);
      cy.takeScreenshotSimplify("8", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //endTempMonth

      cy.get("#\\31").click();
      cy.takeScreenshotSimplify("9", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#submitThis").click();
      cy.takeScreenshotSimplify("10", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("form > .button").click();
      cy.takeScreenshotSimplify("11", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.wait(3000);
      //End Temp

      //#region StartNewTemptran
      cy.get(":nth-child(3) > a > div").click();
      //cy.wait(2000);

      cy.searchMid("401014525290001");
      cy.takeScreenshotSimplify("12", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);

      cy.get("form > :nth-child(1) > .button").click();
      //cy.wait(2000);

      cy.get("select.selectInTable").eq(0).select("Add Temporary Limit");
      cy.takeScreenshotSimplify("13", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);

      cy.get("#buttonGo").eq(0).click();
      cy.takeScreenshotSimplify("14", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);

      cy.get("#tempEDCPerTransac").type("100");

      const addTempStartDateSelector =
        "#datepickerAddTemporaryPerTransactionStartDate";
      cy.setFormattedDate(addTempStartDateSelector, 25, 11, 2024);
      cy.wait(2000);
      const addTempTranEndDateSelector =
        "#datepickerAddTemporaryPerTransactionExpireDate";
      cy.setFormattedDate(addTempTranEndDateSelector, 26, 11, 2024);
      cy.wait(2000);
      cy.get("#\\31 ").click();
      cy.contains("วงเงินชั่วคราวต่อรายการต้องมากกว่าวงเงินถาวรต่อรายการ");
      cy.takeScreenshotSimplify("15", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //#endregion
    });

    it("TS39", () => {
      // cy.cleartemp();
      // Star per
      cy.get('li a[href="/controlLimit').click();
      //cy.wait(2000);
      cy.get(":nth-child(3) > a > div").click();
      //cy.wait(2000);
      cy.searchMid("401014525290001");
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("form > :nth-child(1) > .button").click();
      //cy.wait(2000);
      cy.get("select.selectInTable").eq(0).select("Add Permanent Limit");
      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#buttonGo").eq(0).click();
      //cy.wait(2000);
      cy.get("#maxAmountEDCPerTransac").type("100");
      cy.get("#maxAmountEDCPerMonth").type("500");
      cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\31").click();
      cy.takeScreenshotSimplify("4", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#submitThis").click();
      cy.takeScreenshotSimplify("5", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("form > .button").click();
      cy.takeScreenshotSimplify("6", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.wait(3000);
      // End per

      //Start Temp
      cy.get(":nth-child(3) > a > div").click();
      //cy.wait(2000);
      cy.searchMid("401014525290001");
      //cy.wait(2000);
      cy.get("form > :nth-child(1) > .button").click();
      //cy.wait(2000);
      cy.get("select.selectInTable").eq(0).select("Add Temporary Limit");
      cy.takeScreenshotSimplify("7", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#buttonGo").eq(0).click();
      //cy.wait(2000);
      //AddTempTran
      cy.get("#tempEDCPerTransac").type("500");
      const tempStartDateSelector =
        "#datepickerAddTemporaryPerTransactionStartDate";
      cy.setFormattedDate(tempStartDateSelector, 25, 11, 2024);
      cy.wait(2000);
      const tempEndDateSelector =
        "#datepickerAddTemporaryPerTransactionExpireDate";
      cy.setFormattedDate(tempEndDateSelector, 26, 11, 2024);
      cy.wait(2000);
      //endTempTran

      //addTempMonth
      cy.get("#tempEDCPerMonth").type("1500");
      const tempStartMonthSelector = "#datepickerAddTemporaryPerMonthStartDate";
      cy.setFormattedDate(tempStartMonthSelector, 25, 11, 2024);
      const tempEndMonthSelector = "#datepickerAddTemporaryPerMonthExpireDate";
      cy.setFormattedDate(tempEndMonthSelector, 30, 11, 2024);
      cy.wait(2000);
      cy.takeScreenshotSimplify("8", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //endTempMonth

      cy.get("#\\31").click();
      cy.takeScreenshotSimplify("9", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#submitThis").click();
      cy.takeScreenshotSimplify("10", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("form > .button").click();
      cy.takeScreenshotSimplify("11", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.wait(3000);
      //End Temp

      //#region StartNewTemptran
      cy.get(":nth-child(3) > a > div").click();
      //cy.wait(2000);

      cy.searchMid("401014525290001");
      cy.takeScreenshotSimplify("12", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);

      cy.get("form > :nth-child(1) > .button").click();
      //cy.wait(2000);

      cy.get("select.selectInTable").eq(0).select("Add Temporary Limit");
      cy.takeScreenshotSimplify("13", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);

      cy.get("#buttonGo").eq(0).click();
      cy.takeScreenshotSimplify("14", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);

      cy.get("#tempEDCPerMonth").type("300");

      const addTempStartDateSelector =
        "#datepickerAddTemporaryPerMonthStartDate";
      cy.setFormattedDate(addTempStartDateSelector, 25, 11, 2024);
      cy.wait(2000);
      const addTempTranEndDateSelector =
        "#datepickerAddTemporaryPerMonthExpireDate";
      cy.setFormattedDate(addTempTranEndDateSelector, 26, 11, 2024);
      cy.wait(2000);
      cy.get("#\\31 ").click();
      cy.contains("วงเงินชั่วคราวต่อรายเดือนต้องมากกว่าวงเงินถาวรต่อรายเดือน");
      cy.takeScreenshotSimplify("15", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //#endregion
    });
  });
});
