describe("Function 03", () => {
  beforeEach(() => {
    // auto login to enter portal page
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME_2"),
      Cypress.env("KBANK_PASSWORD_2")
    );

    // wait for 1 seconds
    //cy.wait(2000);
  });

  context(
    "Add New Permanent Limit Per Transaction and New Permanent Limit Per Month ",
    () => {
      it("TS06", () => {
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
        //cy.wait(2000);
        const tempEndDateSelector =
          "#datepickerAddTemporaryPerTransactionExpireDate";
        cy.setFormattedDate(tempEndDateSelector, 26, 11, 2024);
        //cy.wait(2000);
        //endTempTran

        //addTempMonth
        cy.get("#tempEDCPerMonth").type("1500");
        const tempStartMonthSelector =
          "#datepickerAddTemporaryPerMonthStartDate";
        cy.setFormattedDate(tempStartMonthSelector, 25, 11, 2024);
        const tempEndMonthSelector =
          "#datepickerAddTemporaryPerMonthExpireDate";
        cy.setFormattedDate(tempEndMonthSelector, 30, 11, 2024);
        //cy.wait(2000);
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
        cy.get("#maxAmountEDCPerTransac").type("1000");
        cy.get("#maxAmountEDCPerMonth").type("1700");
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

      it("TS07", () => {
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
        //cy.wait(2000);
        const tempEndDateSelector =
          "#datepickerAddTemporaryPerTransactionExpireDate";
        cy.setFormattedDate(tempEndDateSelector, 1, 12, 2024);
        //cy.wait(2000);
        //endTempTran

        //addTempMonth
        cy.get("#tempEDCPerMonth").type("1500");
        const tempStartMonthSelector =
          "#datepickerAddTemporaryPerMonthStartDate";
        cy.setFormattedDate(tempStartMonthSelector, 25, 11, 2024);
        const tempEndMonthSelector =
          "#datepickerAddTemporaryPerMonthExpireDate";
        cy.setFormattedDate(tempEndMonthSelector, 30, 11, 2024);
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
        cy.get("#maxAmountEDCPerTransac").type("900");
        cy.get("#maxAmountEDCPerMonth").type("1600");
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

      it("TS08", () => {
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
        //cy.wait(2000);
        const tempEndDateSelector =
          "#datepickerAddTemporaryPerTransactionExpireDate";
        cy.setFormattedDate(tempEndDateSelector, 26, 11, 2024);
        //cy.wait(2000);
        //endTempTran

        //addTempMonth
        cy.get("#tempEDCPerMonth").type("1500");
        const tempStartMonthSelector =
          "#datepickerAddTemporaryPerMonthStartDate";
        cy.setFormattedDate(tempStartMonthSelector, 30, 11, 2024);
        const tempEndMonthSelector =
          "#datepickerAddTemporaryPerMonthExpireDate";
        cy.setFormattedDate(tempEndMonthSelector, 1, 12, 2024);
        //cy.wait(2000);
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
        cy.get("#maxAmountEDCPerMonth").type("1600");
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

      it("TS09", () => {
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
        //cy.wait(2000);
        const tempEndDateSelector =
          "#datepickerAddTemporaryPerTransactionExpireDate";
        cy.setFormattedDate(tempEndDateSelector, 1, 12, 2024);
        //cy.wait(2000);
        //endTempTran

        //addTempMonth
        cy.get("#tempEDCPerMonth").type("1500");
        const tempStartMonthSelector =
          "#datepickerAddTemporaryPerMonthStartDate";
        cy.setFormattedDate(tempStartMonthSelector, 30, 11, 2024);
        const tempEndMonthSelector =
          "#datepickerAddTemporaryPerMonthExpireDate";
        cy.setFormattedDate(tempEndMonthSelector, 1, 12, 2024);
        //cy.wait(2000);
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
        cy.get("#maxAmountEDCPerMonth").type("1700");
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

      it("TS10", () => {
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
        //cy.wait(2000);
        const tempEndDateSelector =
          "#datepickerAddTemporaryPerTransactionExpireDate";
        cy.setFormattedDate(tempEndDateSelector, 26, 11, 2024);
        //cy.wait(2000);
        //endTempTran

        //addTempMonth
        cy.get("#tempEDCPerMonth").type("1500");
        const tempStartMonthSelector =
          "#datepickerAddTemporaryPerMonthStartDate";
        cy.setFormattedDate(tempStartMonthSelector, 25, 11, 2024);
        const tempEndMonthSelector =
          "#datepickerAddTemporaryPerMonthExpireDate";
        cy.setFormattedDate(tempEndMonthSelector, 30, 11, 2024);
        //cy.wait(2000);
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
        cy.get("#maxAmountEDCPerMonth").type("700");
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

      it("TS11", () => {
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
        //cy.wait(2000);
        cy.takeScreenshotSimplify("8", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.get("#buttonGo").eq(0).click();
        //cy.wait(2000);

        //AddTempTran
        cy.get("#tempEDCPerTransac").type("500");
        const tempStartDateSelector =
          "#datepickerAddTemporaryPerTransactionStartDate";
        cy.setFormattedDate(tempStartDateSelector, 30, 11, 2024);
        //cy.wait(2000);
        const tempEndDateSelector =
          "#datepickerAddTemporaryPerTransactionExpireDate";
        cy.setFormattedDate(tempEndDateSelector, 1, 12, 2024);
        //cy.wait(2000);
        //endTempTran

        //addTempMonth
        cy.get("#tempEDCPerMonth").type("1500");
        const tempStartMonthSelector =
          "#datepickerAddTemporaryPerMonthStartDate";
        cy.setFormattedDate(tempStartMonthSelector, 25, 11, 2024);
        const tempEndMonthSelector =
          "#datepickerAddTemporaryPerMonthExpireDate";
        cy.setFormattedDate(tempEndMonthSelector, 30, 11, 2024);
        //cy.wait(2000);
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
        cy.get("#maxAmountEDCPerTransac").type("600");
        cy.get("#maxAmountEDCPerMonth").type("600");
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

      it("TS12", () => {
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
        //cy.wait(2000);
        const tempEndDateSelector =
          "#datepickerAddTemporaryPerTransactionExpireDate";
        cy.setFormattedDate(tempEndDateSelector, 26, 11, 2024);
        //cy.wait(2000);
        //endTempTran

        //addTempMonth
        cy.get("#tempEDCPerMonth").type("1500");
        const tempStartMonthSelector =
          "#datepickerAddTemporaryPerMonthStartDate";
        cy.setFormattedDate(tempStartMonthSelector, 30, 11, 2024);
        const tempEndMonthSelector =
          "#datepickerAddTemporaryPerMonthExpireDate";
        cy.setFormattedDate(tempEndMonthSelector, 1, 12, 2024);
        //cy.wait(2000);
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
        cy.get("#maxAmountEDCPerMonth").type("800");
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

      it("TS13", () => {
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
        //cy.wait(2000);
        const tempEndDateSelector =
          "#datepickerAddTemporaryPerTransactionExpireDate";
        cy.setFormattedDate(tempEndDateSelector, 1, 12, 2024);
        //cy.wait(2000);
        //endTempTran

        //addTempMonth
        cy.get("#tempEDCPerMonth").type("1500");
        const tempStartMonthSelector =
          "#datepickerAddTemporaryPerMonthStartDate";
        cy.setFormattedDate(tempStartMonthSelector, 30, 11, 2024);
        const tempEndMonthSelector =
          "#datepickerAddTemporaryPerMonthExpireDate";
        cy.setFormattedDate(tempEndMonthSelector, 1, 12, 2024);
        //cy.wait(2000);
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
        //cy.wait(2000);
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
        cy.get("#maxAmountEDCPerMonth").type("900");
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

      it("TS14", () => {
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
        //cy.wait(2000);
        const tempEndDateSelector =
          "#datepickerAddTemporaryPerTransactionExpireDate";
        cy.setFormattedDate(tempEndDateSelector, 26, 11, 2024);
        //cy.wait(2000);
        //endTempTran

        //addTempMonth
        cy.get("#tempEDCPerMonth").type("1500");
        const tempStartMonthSelector =
          "#datepickerAddTemporaryPerMonthStartDate";
        cy.setFormattedDate(tempStartMonthSelector, 25, 11, 2024);
        const tempEndMonthSelector =
          "#datepickerAddTemporaryPerMonthExpireDate";
        cy.setFormattedDate(tempEndMonthSelector, 30, 11, 2024);
        //cy.wait(2000);
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
        cy.get("#maxAmountEDCPerTransac").type("300");
        cy.get("#maxAmountEDCPerMonth").type("1700");
        cy.wait(3000);
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
      it("TS15", () => {
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
        //cy.wait(2000);
        const tempEndDateSelector =
          "#datepickerAddTemporaryPerTransactionExpireDate";
        cy.setFormattedDate(tempEndDateSelector, 1, 12, 2024);
        //cy.wait(2000);
        //endTempTran

        //addTempMonth
        cy.get("#tempEDCPerMonth").type("1500");
        const tempStartMonthSelector =
          "#datepickerAddTemporaryPerMonthStartDate";
        cy.setFormattedDate(tempStartMonthSelector, 25, 11, 2024);
        const tempEndMonthSelector =
          "#datepickerAddTemporaryPerMonthExpireDate";
        cy.setFormattedDate(tempEndMonthSelector, 30, 11, 2024);
        //cy.wait(2000);
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
        cy.get("#maxAmountEDCPerTransac").type("300");
        cy.get("#maxAmountEDCPerMonth").type("1500");
        //cy.wait(2000);
        cy.takeScreenshotSimplify("14", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.get("#\\31").click();
        cy.takeScreenshotSimplify("15", Cypress.ScreenshotCaptureEnum.VIEWPORT);
        //cy.wait(2000);
        cy.get("#popUpBack").click();
        cy.takeScreenshotSimplify("16", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.get("#\\31 ").click();
        cy.takeScreenshotSimplify("17", Cypress.ScreenshotCaptureEnum.VIEWPORT);
        //cy.wait(2000);
        cy.get("#popUpLimitSubmit").click();
        cy.takeScreenshotSimplify("18", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.get("#\\32 ").click();
        cy.takeScreenshotSimplify("19", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.get("#\\31 ").click();
        cy.takeScreenshotSimplify("20", Cypress.ScreenshotCaptureEnum.VIEWPORT);
        //cy.wait(2000);
        cy.get("#popUpLimitSubmit").click();
        cy.takeScreenshotSimplify("21", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.get("#submitThis").click();
        cy.takeScreenshotSimplify("22", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.get("form > .button").click();
        cy.takeScreenshotSimplify("23", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        cy.wait(3000);
        //End new per
      });
      it("TS16", () => {
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
        //cy.wait(2000);
        const tempEndDateSelector =
          "#datepickerAddTemporaryPerTransactionExpireDate";
        cy.setFormattedDate(tempEndDateSelector, 26, 11, 2024);
        //cy.wait(2000);
        //endTempTran

        //addTempMonth
        cy.get("#tempEDCPerMonth").type("1500");
        const tempStartMonthSelector =
          "#datepickerAddTemporaryPerMonthStartDate";
        cy.setFormattedDate(tempStartMonthSelector, 30, 11, 2024);
        const tempEndMonthSelector =
          "#datepickerAddTemporaryPerMonthExpireDate";
        cy.setFormattedDate(tempEndMonthSelector, 1, 12, 2024);
        //cy.wait(2000);
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
        cy.get("#maxAmountEDCPerTransac").type("200");
        cy.get("#maxAmountEDCPerMonth").type("1600");
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

      it("TS17", () => {
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
        //cy.wait(2000);
        const tempEndDateSelector =
          "#datepickerAddTemporaryPerTransactionExpireDate";
        cy.setFormattedDate(tempEndDateSelector, 1, 12, 2024);
        //cy.wait(2000);
        //endTempTran

        //addTempMonth
        cy.get("#tempEDCPerMonth").type("1500");
        const tempStartMonthSelector =
          "#datepickerAddTemporaryPerMonthStartDate";
        cy.setFormattedDate(tempStartMonthSelector, 30, 11, 2024);
        const tempEndMonthSelector =
          "#datepickerAddTemporaryPerMonthExpireDate";
        cy.setFormattedDate(tempEndMonthSelector, 1, 12, 2024);
        //cy.wait(2000);
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
        cy.get("#maxAmountEDCPerTransac").type("250");
        cy.get("#maxAmountEDCPerMonth").type("1500");
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

      it("TS18", () => {
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
        //cy.wait(2000);
        const tempEndDateSelector =
          "#datepickerAddTemporaryPerTransactionExpireDate";
        cy.setFormattedDate(tempEndDateSelector, 26, 11, 2024);
        //cy.wait(2000);
        //endTempTran

        //addTempMonth
        cy.get("#tempEDCPerMonth").type("1500");
        const tempStartMonthSelector =
          "#datepickerAddTemporaryPerMonthStartDate";
        cy.setFormattedDate(tempStartMonthSelector, 25, 11, 2024);
        const tempEndMonthSelector =
          "#datepickerAddTemporaryPerMonthExpireDate";
        cy.setFormattedDate(tempEndMonthSelector, 30, 11, 2024);
        //cy.wait(2000);
        cy.takeScreenshotSimplify("9", Cypress.ScreenshotCaptureEnum.FULLPAGE);
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
        cy.get("#maxAmountEDCPerTransac").type("200");
        cy.get("#maxAmountEDCPerMonth").type("900");
        //cy.wait(2000);
        cy.takeScreenshotSimplify("15", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        cy.get("#\\31 ").click();
        cy.takeScreenshotSimplify("16", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.get("#\\32 ").click();
        cy.takeScreenshotSimplify("17", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.get("#\\31 ").click();
        cy.takeScreenshotSimplify("18", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.get("#submitThis").click();
        cy.takeScreenshotSimplify("19", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.get("form > .button").click();
        cy.takeScreenshotSimplify("20", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(3000);
        //End new per
      });

      it("TS19", () => {
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
        //cy.wait(2000);
        const tempEndDateSelector =
          "#datepickerAddTemporaryPerTransactionExpireDate";
        cy.setFormattedDate(tempEndDateSelector, 1, 12, 2024);
        //cy.wait(2000);
        //endTempTran

        //addTempMonth
        cy.get("#tempEDCPerMonth").type("1500");
        const tempStartMonthSelector =
          "#datepickerAddTemporaryPerMonthStartDate";
        cy.setFormattedDate(tempStartMonthSelector, 25, 11, 2024);
        const tempEndMonthSelector =
          "#datepickerAddTemporaryPerMonthExpireDate";
        cy.setFormattedDate(tempEndMonthSelector, 30, 11, 2024);
        //cy.wait(2000);
        //endTempMonth
        cy.takeScreenshotSimplify("9", Cypress.ScreenshotCaptureEnum.FULLPAGE);
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
        cy.get("#maxAmountEDCPerTransac").type("300");
        cy.get("#maxAmountEDCPerMonth").type("900");
        //cy.wait(2000);
        cy.takeScreenshotSimplify("15", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        cy.get("#\\31 ").click();
        cy.takeScreenshotSimplify("16", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.get("#\\32 ").click();
        cy.takeScreenshotSimplify("17", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.get("#\\31 ").click();
        cy.takeScreenshotSimplify("18", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.get("#submitThis").click();
        cy.takeScreenshotSimplify("19", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);

        cy.get("form > .button").click();
        cy.takeScreenshotSimplify("20", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(3000);
        //End new per
      });

      it("TS20", () => {
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
        //cy.wait(2000);
        const tempEndDateSelector =
          "#datepickerAddTemporaryPerTransactionExpireDate";
        cy.setFormattedDate(tempEndDateSelector, 26, 11, 2024);
        //cy.wait(2000);
        //endTempTran

        //addTempMonth
        cy.get("#tempEDCPerMonth").type("1500");
        const tempStartMonthSelector =
          "#datepickerAddTemporaryPerMonthStartDate";
        cy.setFormattedDate(tempStartMonthSelector, 30, 11, 2024);
        const tempEndMonthSelector =
          "#datepickerAddTemporaryPerMonthExpireDate";
        cy.setFormattedDate(tempEndMonthSelector, 1, 12, 2024);
        //cy.wait(2000);
        cy.takeScreenshotSimplify("9", Cypress.ScreenshotCaptureEnum.FULLPAGE);
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
        //cy.wait(2000);
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
        cy.get("#maxAmountEDCPerTransac").type("200");
        cy.get("#maxAmountEDCPerMonth").type("800");
        //cy.wait(2000);
        cy.takeScreenshotSimplify("15", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        cy.get("#\\31 ").click();
        cy.takeScreenshotSimplify("16", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.get("#\\32 ").click();
        cy.takeScreenshotSimplify("17", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.get("#\\31 ").click();
        cy.takeScreenshotSimplify("18", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.get("#submitThis").click();
        cy.takeScreenshotSimplify("19", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.get("form > .button").click();
        cy.takeScreenshotSimplify("20", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(3000);
        //End new per
      });

      it("TS21", () => {
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
        //cy.wait(2000);
        const tempEndDateSelector =
          "#datepickerAddTemporaryPerTransactionExpireDate";
        cy.setFormattedDate(tempEndDateSelector, 1, 12, 2024);
        //cy.wait(2000);
        //endTempTran

        //addTempMonth
        cy.get("#tempEDCPerMonth").type("1500");
        const tempStartMonthSelector =
          "#datepickerAddTemporaryPerMonthStartDate";
        cy.setFormattedDate(tempStartMonthSelector, 30, 11, 2024);
        const tempEndMonthSelector =
          "#datepickerAddTemporaryPerMonthExpireDate";
        cy.setFormattedDate(tempEndMonthSelector, 1, 12, 2024);
        //cy.wait(2000);
        cy.takeScreenshotSimplify("9", Cypress.ScreenshotCaptureEnum.FULLPAGE);
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
        cy.get("#maxAmountEDCPerTransac").type("250");
        cy.get("#maxAmountEDCPerMonth").type("700");
        //cy.wait(2000);
        cy.takeScreenshotSimplify("15", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        cy.get("#\\31 ").click();
        cy.takeScreenshotSimplify("16", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.get("#\\32 ").click();
        cy.takeScreenshotSimplify("17", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.get("#\\31 ").click();
        cy.takeScreenshotSimplify("18", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.get("#submitThis").click();
        cy.takeScreenshotSimplify("19", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.get("form > .button").click();
        cy.takeScreenshotSimplify("20", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //End new per
      });
    }
  );
});
