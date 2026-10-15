describe("Function 07", () => {
  beforeEach(() => {
    // auto login to enter portal page
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME_2"),
      Cypress.env("KBANK_PASSWORD_2")
    );

    // wait for 1 seconds
    cy.wait(2000);
  });

  context("ตรวจสอบ Monthly Usage และ Balance ก่อนและหลังเข้าเดือนใหม่", () => {
    it("TS40", () => {
      // cy.cleartemp();
      cy.get('li a[href="/controlLimit').click();
      cy.wait(2000);
      cy.get(":nth-child(3) > a > div").click();
      cy.wait(2000);
      cy.searchMid("401014525290001");
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.wait(2000);
      cy.get("form > :nth-child(1) > .button").click();

      cy.wait(2000);
      cy.get("select.selectInTable").eq(0).select("View Details");
      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.wait(2000);
      cy.get("#buttonGo").eq(0).click();
      cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.wait(3000);
    });

    it("TS41", () => {
      // cy.cleartemp();
      cy.get('li a[href="/controlLimit').click();
      cy.wait(2000);
      cy.get(":nth-child(3) > a > div").click();
      cy.wait(2000);
      cy.searchMid("401014525290001");
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.wait(2000);
      cy.get("form > :nth-child(1) > .button").click();

      cy.wait(2000);
      cy.get("select.selectInTable").eq(0).select("View Details");
      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.wait(2000);
      cy.get("#buttonGo").eq(0).click();
      cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.wait(3000);
    });

    it("TS42", () => {
      // cy.cleartemp();
      cy.get('li a[href="/controlLimit').click();
      cy.wait(2000);
      cy.get(":nth-child(3) > a > div").click();
      cy.wait(2000);
      cy.searchMid("401014525290001");
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.wait(2000);
      cy.get("form > :nth-child(1) > .button").click();
      cy.wait(2000);
      cy.get("select.selectInTable").eq(0).select("View Details");
      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.wait(2000);
      cy.get("#buttonGo").eq(0).click();
      cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.wait(3000);
    });
  });
});
