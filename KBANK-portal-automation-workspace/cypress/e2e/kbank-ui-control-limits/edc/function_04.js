describe("Function 04", () => {
  beforeEach(() => {
    // auto login to enter portal page
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME_2"),
      Cypress.env("KBANK_PASSWORD_2")
    );

    // wait for 1 seconds
    //cy.wait(2000);
  });

  context(" Add New Permanent Limit Per Transaction only ", () => {
    it("TS22", () => {
      cy.cleartemp();
      // Star per
      cy.get('li a[href="/controlLimit').click();
      //cy.wait(2000);
      cy.get(":nth-child(3) > a > div").click();
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.searchMid("401014525290001");
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
      cy.takeScreenshotSimplify("7", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.searchMid("401014525290001");
      //cy.wait(2000);
      cy.get("form > :nth-child(1) > .button").click();
      //cy.wait(2000);
      cy.get("select.selectInTable").eq(0).select("Add Temporary Limit");
      cy.takeScreenshotSimplify("8", Cypress.ScreenshotCaptureEnum.FULLPAGE);
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
      cy.takeScreenshotSimplify("9", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //endTempMonth

      cy.get("#\\31").click();
      cy.takeScreenshotSimplify("10", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#submitThis").click();
      cy.takeScreenshotSimplify("11", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("form > .button").click();
      cy.takeScreenshotSimplify("12", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.wait(3000);
      //End Temp

      //Start new per
      cy.get(":nth-child(3) > a > div").click();
      cy.takeScreenshotSimplify("13", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.searchMid("401014525290001");
      //cy.wait(2000);
      cy.get("form > :nth-child(1) > .button").click();
      //cy.wait(2000);
      cy.get("select.selectInTable").eq(0).select("Add Permanent Limit");
      //cy.wait(2000);
      cy.takeScreenshotSimplify("14", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.get("#buttonGo").eq(0).click();
      //cy.wait(2000);
      cy.get("#maxAmountEDCPerTransac").type("500");
      //cy.wait(2000);
      cy.takeScreenshotSimplify("15", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\31").click();
      cy.takeScreenshotSimplify("16", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //cy.wait(2000);
      cy.get("#popUpBack").click();
      cy.takeScreenshotSimplify("17", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\31 ").click();
      cy.takeScreenshotSimplify("18", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //cy.wait(2000);
      cy.get("#popUpLimitSubmit").click();
      cy.takeScreenshotSimplify("19", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\32 ").click();
      cy.takeScreenshotSimplify("20", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\31 ").click();
      cy.takeScreenshotSimplify("21", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //cy.wait(2000);
      cy.get("#popUpLimitSubmit").click();
      cy.takeScreenshotSimplify("22", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#submitThis").click();
      cy.takeScreenshotSimplify("23", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("form > .button").click();
      cy.takeScreenshotSimplify("24", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.wait(3000);
      //End new per
    });

    it("TS23", () => {
      cy.cleartemp();
      // Star per
      cy.get('li a[href="/controlLimit').click();
      //cy.wait(2000);
      cy.get(":nth-child(3) > a > div").click();
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.searchMid("401014525290001");
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
      cy.takeScreenshotSimplify("7", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.searchMid("401014525290001");
      //cy.wait(2000);
      cy.get("form > :nth-child(1) > .button").click();
      //cy.wait(2000);
      cy.get("select.selectInTable").eq(0).select("Add Temporary Limit");
      cy.takeScreenshotSimplify("8", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#buttonGo").eq(0).click();
      //cy.wait(2000);

      //AddTempTran
      cy.get("#tempEDCPerTransac").type("500");
      const tempStartDateSelector =
        "#datepickerAddTemporaryPerTransactionStartDate";
      cy.setFormattedDate(tempStartDateSelector, 28, 11, 2024);
      cy.wait(2000);
      const tempEndDateSelector =
        "#datepickerAddTemporaryPerTransactionExpireDate";
      cy.setFormattedDate(tempEndDateSelector, 30, 11, 2024);
      cy.wait(2000);
      //endTempTran

      //addTempMonth
      cy.get("#tempEDCPerMonth").type("1500");
      const tempStartMonthSelector = "#datepickerAddTemporaryPerMonthStartDate";
      cy.setFormattedDate(tempStartMonthSelector, 25, 11, 2024);
      const tempEndMonthSelector = "#datepickerAddTemporaryPerMonthExpireDate";
      cy.setFormattedDate(tempEndMonthSelector, 26, 11, 2024);
      cy.wait(2000);
      cy.takeScreenshotSimplify("9", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //endTempMonth

      cy.get("#\\31").click();
      cy.takeScreenshotSimplify("10", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#submitThis").click();
      cy.takeScreenshotSimplify("11", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("form > .button").click();
      cy.takeScreenshotSimplify("12", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.wait(3000);
      //End Temp

      //Start new per
      cy.get(":nth-child(3) > a > div").click();
      cy.takeScreenshotSimplify("13", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.searchMid("401014525290001");
      //cy.wait(2000);
      cy.get("form > :nth-child(1) > .button").click();
      //cy.wait(2000);
      cy.get("select.selectInTable").eq(0).select("Add Permanent Limit");
      //cy.wait(2000);
      cy.takeScreenshotSimplify("14", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.get("#buttonGo").eq(0).click();
      //cy.wait(2000);
      cy.get("#maxAmountEDCPerTransac").type("600");
      //cy.wait(2000);
      cy.takeScreenshotSimplify("15", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\31").click();
      cy.takeScreenshotSimplify("16", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //cy.wait(2000);
      cy.get("#popUpBack").click();
      cy.takeScreenshotSimplify("17", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\31 ").click();
      cy.takeScreenshotSimplify("18", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //cy.wait(2000);
      cy.get("#popUpLimitSubmit").click();
      cy.takeScreenshotSimplify("19", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\32 ").click();
      cy.takeScreenshotSimplify("20", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\31 ").click();
      cy.takeScreenshotSimplify("21", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //cy.wait(2000);
      cy.get("#popUpLimitSubmit").click();
      cy.takeScreenshotSimplify("22", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#submitThis").click();
      cy.takeScreenshotSimplify("23", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("form > .button").click();
      cy.takeScreenshotSimplify("24", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.wait(3000);
      //End new per
    });

    it("TS24", () => {
      cy.cleartemp();
      // Star per
      cy.get('li a[href="/controlLimit').click();
      //cy.wait(2000);
      cy.get(":nth-child(3) > a > div").click();
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.searchMid("401014525290001");
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
      cy.takeScreenshotSimplify("7", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.searchMid("401014525290001");
      //cy.wait(2000);
      cy.get("form > :nth-child(1) > .button").click();
      //cy.wait(2000);
      cy.get("select.selectInTable").eq(0).select("Add Temporary Limit");
      cy.takeScreenshotSimplify("8", Cypress.ScreenshotCaptureEnum.FULLPAGE);
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
      cy.setFormattedDate(tempStartMonthSelector, 29, 11, 2024);
      const tempEndMonthSelector = "#datepickerAddTemporaryPerMonthExpireDate";
      cy.setFormattedDate(tempEndMonthSelector, 30, 11, 2024);
      cy.wait(2000);
      cy.takeScreenshotSimplify("9", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //endTempMonth

      cy.get("#\\31").click();
      cy.takeScreenshotSimplify("10", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#submitThis").click();
      cy.takeScreenshotSimplify("11", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("form > .button").click();
      cy.takeScreenshotSimplify("12", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.wait(3000);
      //End Temp

      //Start new per
      cy.get(":nth-child(3) > a > div").click();
      cy.takeScreenshotSimplify("13", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.searchMid("401014525290001");
      //cy.wait(2000);
      cy.get("form > :nth-child(1) > .button").click();
      //cy.wait(2000);
      cy.get("select.selectInTable").eq(0).select("Add Permanent Limit");
      //cy.wait(2000);
      cy.takeScreenshotSimplify("14", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.get("#buttonGo").eq(0).click();
      //cy.wait(2000);
      cy.get("#maxAmountEDCPerTransac").type("700");
      cy.takeScreenshotSimplify("15", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\31").click();
      cy.takeScreenshotSimplify("16", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //cy.wait(2000);
      cy.get("#popUpBack").click();
      cy.takeScreenshotSimplify("17", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\31 ").click();
      cy.takeScreenshotSimplify("18", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //cy.wait(2000);
      cy.get("#popUpLimitSubmit").click();
      cy.takeScreenshotSimplify("19", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\32 ").click();
      cy.takeScreenshotSimplify("20", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\31 ").click();
      cy.takeScreenshotSimplify("21", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //cy.wait(2000);
      cy.get("#popUpLimitSubmit").click();
      cy.takeScreenshotSimplify("22", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#submitThis").click();
      cy.takeScreenshotSimplify("23", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("form > .button").click();
      cy.takeScreenshotSimplify("24", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.wait(3000);
      //End new per
    });

    it("TS25", () => {
      cy.cleartemp();
      // Star per
      cy.get('li a[href="/controlLimit').click();
      //cy.wait(2000);
      cy.get(":nth-child(3) > a > div").click();
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.searchMid("401014525290001");
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
      cy.takeScreenshotSimplify("7", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.searchMid("401014525290001");
      //cy.wait(2000);
      cy.get("form > :nth-child(1) > .button").click();
      //cy.wait(2000);
      cy.get("select.selectInTable").eq(0).select("Add Temporary Limit");
      cy.takeScreenshotSimplify("8", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#buttonGo").eq(0).click();
      //cy.wait(2000);

      //AddTempTran
      cy.get("#tempEDCPerTransac").type("500");
      const tempStartDateSelector =
        "#datepickerAddTemporaryPerTransactionStartDate";
      cy.setFormattedDate(tempStartDateSelector, 30, 11, 2024);
      cy.wait(2000);
      const tempEndDateSelector =
        "#datepickerAddTemporaryPerTransactionExpireDate";
      cy.setFormattedDate(tempEndDateSelector, 1, 12, 2024);
      cy.wait(2000);
      //endTempTran

      //addTempMonth
      cy.get("#tempEDCPerMonth").type("1500");
      const tempStartMonthSelector = "#datepickerAddTemporaryPerMonthStartDate";
      cy.setFormattedDate(tempStartMonthSelector, 30, 11, 2024);
      const tempEndMonthSelector = "#datepickerAddTemporaryPerMonthExpireDate";
      cy.setFormattedDate(tempEndMonthSelector, 1, 12, 2024);
      cy.wait(2000);
      cy.takeScreenshotSimplify("9", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //endTempMonth

      cy.get("#\\31").click();
      cy.takeScreenshotSimplify("10", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#submitThis").click();
      cy.takeScreenshotSimplify("11", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("form > .button").click();
      cy.takeScreenshotSimplify("12", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.wait(3000);
      //End Temp

      //Start new per
      cy.get(":nth-child(3) > a > div").click();
      cy.takeScreenshotSimplify("13", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.searchMid("401014525290001");
      //cy.wait(2000);
      cy.get("form > :nth-child(1) > .button").click();
      //cy.wait(2000);
      cy.get("select.selectInTable").eq(0).select("Add Permanent Limit");
      //cy.wait(2000);
      cy.takeScreenshotSimplify("14", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.get("#buttonGo").eq(0).click();
      //cy.wait(2000);
      cy.get("#maxAmountEDCPerTransac").type("800");
      //cy.wait(2000);
      cy.takeScreenshotSimplify("15", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\31").click();
      cy.takeScreenshotSimplify("16", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //cy.wait(2000);
      cy.get("#popUpBack").click();
      cy.takeScreenshotSimplify("17", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\31 ").click();
      cy.takeScreenshotSimplify("18", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //cy.wait(2000);
      cy.get("#popUpLimitSubmit").click();
      cy.takeScreenshotSimplify("19", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\32 ").click();
      cy.takeScreenshotSimplify("20", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\31 ").click();
      cy.takeScreenshotSimplify("21", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //cy.wait(2000);
      cy.get("#popUpLimitSubmit").click();
      cy.takeScreenshotSimplify("22", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#submitThis").click();
      cy.takeScreenshotSimplify("23", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("form > .button").click();
      cy.takeScreenshotSimplify("24", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.wait(3000);
    });

    it("TS26", () => {
      cy.cleartemp();
      // Star per
      cy.get('li a[href="/controlLimit').click();
      //cy.wait(2000);
      cy.get(":nth-child(3) > a > div").click();
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.searchMid("401014525290001");
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
      cy.takeScreenshotSimplify("7", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.searchMid("401014525290001");
      //cy.wait(2000);
      cy.get("form > :nth-child(1) > .button").click();
      //cy.wait(2000);
      cy.get("select.selectInTable").eq(0).select("Add Temporary Limit");
      cy.takeScreenshotSimplify("8", Cypress.ScreenshotCaptureEnum.FULLPAGE);
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

      //addTempMonth
      cy.get("#tempEDCPerMonth").type("1500");
      const tempStartMonthSelector = "#datepickerAddTemporaryPerMonthStartDate";
      cy.setFormattedDate(tempStartMonthSelector, 25, 11, 2024);
      const tempEndMonthSelector = "#datepickerAddTemporaryPerMonthExpireDate";
      cy.setFormattedDate(tempEndMonthSelector, 30, 11, 2024);
      cy.wait(2000);
      cy.takeScreenshotSimplify("9", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //endTempMonth

      cy.get("#\\31").click();
      cy.takeScreenshotSimplify("10", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#submitThis").click();
      cy.takeScreenshotSimplify("11", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("form > .button").click();
      cy.takeScreenshotSimplify("12", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.wait(3000);
      //End Temp

      //Start new per
      cy.get(":nth-child(3) > a > div").click();
      cy.takeScreenshotSimplify("13", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.searchMid("401014525290001");
      //cy.wait(2000);
      cy.get("form > :nth-child(1) > .button").click();
      //cy.wait(2000);
      cy.get("select.selectInTable").eq(0).select("Add Permanent Limit");
      //cy.wait(2000);
      cy.takeScreenshotSimplify("14", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.get("#buttonGo").eq(0).click();
      //cy.wait(2000);
      cy.get("#maxAmountEDCPerTransac").type("400");
      //cy.wait(2000);
      cy.takeScreenshotSimplify("15", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\31").click();
      cy.takeScreenshotSimplify("16", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //cy.wait(2000);
      cy.get("#popUpBack").click();
      cy.takeScreenshotSimplify("17", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\31 ").click();
      cy.takeScreenshotSimplify("18", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //cy.wait(2000);
      cy.get("#popUpLimitSubmit").click();
      cy.takeScreenshotSimplify("19", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\32 ").click();
      cy.takeScreenshotSimplify("20", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\31 ").click();
      cy.takeScreenshotSimplify("21", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //cy.wait(2000);
      cy.get("#popUpLimitSubmit").click();
      cy.takeScreenshotSimplify("22", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#submitThis").click();
      cy.takeScreenshotSimplify("23", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("form > .button").click();
      cy.takeScreenshotSimplify("24", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.wait(3000);
      //End new per
    });

    it("TS27", () => {
      // cy.cleartemp();
      // Star per
      cy.get('li a[href="/controlLimit').click();
      //cy.wait(2000);
      cy.get(":nth-child(3) > a > div").click();
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.searchMid("401014525290001");
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
      cy.takeScreenshotSimplify("7", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.searchMid("401014525290001");
      //cy.wait(2000);
      cy.get("form > :nth-child(1) > .button").click();
      //cy.wait(2000);
      cy.get("select.selectInTable").eq(0).select("Add Temporary Limit");
      cy.takeScreenshotSimplify("8", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#buttonGo").eq(0).click();
      //cy.wait(2000);

      //AddTempTran
      cy.get("#tempEDCPerTransac").type("500");
      const tempStartDateSelector =
        "#datepickerAddTemporaryPerTransactionStartDate";
      cy.setFormattedDate(tempStartDateSelector, 28, 11, 2024);
      cy.wait(2000);
      const tempEndDateSelector =
        "#datepickerAddTemporaryPerTransactionExpireDate";
      cy.setFormattedDate(tempEndDateSelector, 30, 11, 2024);
      cy.wait(2000);
      //endTempTran

      //addTempMonth
      cy.get("#tempEDCPerMonth").type("1500");
      const tempStartMonthSelector = "#datepickerAddTemporaryPerMonthStartDate";
      cy.setFormattedDate(tempStartMonthSelector, 25, 11, 2024);
      const tempEndMonthSelector = "#datepickerAddTemporaryPerMonthExpireDate";
      cy.setFormattedDate(tempEndMonthSelector, 30, 11, 2024);
      cy.wait(2000);
      //endTempMonth
      cy.takeScreenshotSimplify("9", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //endTempMonth

      cy.get("#\\31").click();
      cy.takeScreenshotSimplify("10", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#submitThis").click();
      cy.takeScreenshotSimplify("11", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("form > .button").click();
      cy.takeScreenshotSimplify("12", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.wait(3000);
      //End Temp

      //Start new per
      cy.get(":nth-child(3) > a > div").click();
      cy.takeScreenshotSimplify("13", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.searchMid("401014525290001");
      //cy.wait(2000);
      cy.get("form > :nth-child(1) > .button").click();
      //cy.wait(2000);
      cy.get("select.selectInTable").eq(0).select("Add Permanent Limit");
      //cy.wait(2000);
      cy.takeScreenshotSimplify("14", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.get("#buttonGo").eq(0).click();

      cy.get("#maxAmountEDCPerTransac").type("300");
      //cy.wait(2000);
      cy.takeScreenshotSimplify("15", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\31").click();
      cy.takeScreenshotSimplify("16", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //cy.wait(2000);
      cy.get("#popUpBack").click();
      cy.takeScreenshotSimplify("17", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\31 ").click();
      cy.takeScreenshotSimplify("18", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //cy.wait(2000);
      cy.get("#popUpLimitSubmit").click();
      cy.takeScreenshotSimplify("19", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\32 ").click();
      cy.takeScreenshotSimplify("20", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\31 ").click();
      cy.takeScreenshotSimplify("21", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //cy.wait(2000);
      cy.get("#popUpLimitSubmit").click();
      cy.takeScreenshotSimplify("22", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#submitThis").click();
      cy.takeScreenshotSimplify("23", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("form > .button").click();
      cy.takeScreenshotSimplify("24", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.wait(3000);
      //End new per
    });

    it("TS28", () => {
      // cy.cleartemp();
      // Star per
      cy.get('li a[href="/controlLimit').click();
      //cy.wait(2000);
      cy.get(":nth-child(3) > a > div").click();
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.searchMid("401014525290001");
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
      cy.takeScreenshotSimplify("7", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.searchMid("401014525290001");
      //cy.wait(2000);
      cy.get("form > :nth-child(1) > .button").click();
      //cy.wait(2000);
      cy.get("select.selectInTable").eq(0).select("Add Temporary Limit");
      cy.takeScreenshotSimplify("8", Cypress.ScreenshotCaptureEnum.FULLPAGE);
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
      cy.setFormattedDate(tempStartMonthSelector, 29, 11, 2024);
      const tempEndMonthSelector = "#datepickerAddTemporaryPerMonthExpireDate";
      cy.setFormattedDate(tempEndMonthSelector, 30, 11, 2024);
      cy.wait(2000);
      cy.takeScreenshotSimplify("9", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //endTempMonth

      cy.get("#\\31").click();
      cy.takeScreenshotSimplify("10", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#submitThis").click();
      cy.takeScreenshotSimplify("11", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("form > .button").click();
      cy.takeScreenshotSimplify("12", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.wait(3000);
      //End Temp

      //Start new per
      cy.get(":nth-child(3) > a > div").click();
      cy.takeScreenshotSimplify("13", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.searchMid("401014525290001");
      //cy.wait(2000);
      cy.get("form > :nth-child(1) > .button").click();
      //cy.wait(2000);
      cy.get("select.selectInTable").eq(0).select("Add Permanent Limit");
      //cy.wait(2000);
      cy.takeScreenshotSimplify("14", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.get("#buttonGo").eq(0).click();
      cy.get("#maxAmountEDCPerTransac").type("120");
      //cy.wait(2000);

      cy.takeScreenshotSimplify("15", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\31").click();
      cy.takeScreenshotSimplify("16", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //cy.wait(2000);
      cy.get("#popUpBack").click();
      cy.takeScreenshotSimplify("17", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\31 ").click();
      cy.takeScreenshotSimplify("18", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //cy.wait(2000);
      cy.get("#popUpLimitSubmit").click();
      cy.takeScreenshotSimplify("19", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\32 ").click();
      cy.takeScreenshotSimplify("20", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\31 ").click();
      cy.takeScreenshotSimplify("21", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //cy.wait(2000);
      cy.get("#popUpLimitSubmit").click();
      cy.takeScreenshotSimplify("22", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#submitThis").click();
      cy.takeScreenshotSimplify("23", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("form > .button").click();
      cy.takeScreenshotSimplify("24", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.wait(3000);
      //End new per
    });

    it("TS29", () => {
      // cy.cleartemp();
      // Star per
      cy.get('li a[href="/controlLimit').click();
      //cy.wait(2000);
      cy.get(":nth-child(3) > a > div").click();
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.searchMid("401014525290001");
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
      cy.takeScreenshotSimplify("7", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.searchMid("401014525290001");
      //cy.wait(2000);
      cy.get("form > :nth-child(1) > .button").click();
      //cy.wait(2000);
      cy.get("select.selectInTable").eq(0).select("Add Temporary Limit");
      cy.takeScreenshotSimplify("8", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#buttonGo").eq(0).click();
      //cy.wait(2000);

      //AddTempTran
      cy.get("#tempEDCPerTransac").type("500");
      const tempStartDateSelector =
        "#datepickerAddTemporaryPerTransactionStartDate";
      cy.setFormattedDate(tempStartDateSelector, 30, 11, 2024);
      cy.wait(2000);
      const tempEndDateSelector =
        "#datepickerAddTemporaryPerTransactionExpireDate";
      cy.setFormattedDate(tempEndDateSelector, 1, 12, 2024);
      cy.wait(2000);
      //endTempTran

      //addTempMonth
      cy.get("#tempEDCPerMonth").type("1500");
      const tempStartMonthSelector = "#datepickerAddTemporaryPerMonthStartDate";
      cy.setFormattedDate(tempStartMonthSelector, 30, 11, 2024);
      const tempEndMonthSelector = "#datepickerAddTemporaryPerMonthExpireDate";
      cy.setFormattedDate(tempEndMonthSelector, 1, 12, 2024);
      cy.wait(2000);
      cy.takeScreenshotSimplify("9", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //endTempMonth

      cy.get("#\\31").click();
      cy.takeScreenshotSimplify("10", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#submitThis").click();
      cy.takeScreenshotSimplify("11", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("form > .button").click();
      cy.takeScreenshotSimplify("12", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.wait(3000);
      //End Temp

      //Start new per
      cy.get(":nth-child(3) > a > div").click();
      cy.takeScreenshotSimplify("13", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.searchMid("401014525290001");
      //cy.wait(2000);
      cy.get("form > :nth-child(1) > .button").click();
      //cy.wait(2000);
      cy.get("select.selectInTable").eq(0).select("Add Permanent Limit");
      //cy.wait(2000);
      cy.takeScreenshotSimplify("14", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.get("#buttonGo").eq(0).click();
      cy.get("#maxAmountEDCPerTransac").type("150");
      //cy.wait(2000);
      cy.takeScreenshotSimplify("15", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\31").click();
      cy.takeScreenshotSimplify("16", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //cy.wait(2000);
      cy.get("#popUpBack").click();
      cy.takeScreenshotSimplify("17", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\31 ").click();
      cy.takeScreenshotSimplify("18", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //cy.wait(2000);
      cy.get("#popUpLimitSubmit").click();
      cy.takeScreenshotSimplify("19", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\32 ").click();
      cy.takeScreenshotSimplify("20", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#\\31 ").click();
      cy.takeScreenshotSimplify("21", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //cy.wait(2000);
      cy.get("#popUpLimitSubmit").click();
      cy.takeScreenshotSimplify("22", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("#submitThis").click();
      cy.takeScreenshotSimplify("23", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      //cy.wait(2000);
      cy.get("form > .button").click();
      cy.takeScreenshotSimplify("24", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.wait(3000);
    });
  });
});
