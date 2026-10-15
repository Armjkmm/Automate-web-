describe("Function 02", () => {
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
    "เปลี่ยนชื่อปุ่ม Export file ที่หน้า Company Summary และเปลี่ยนชื่อไฟล์ (EDC)",
    () => {
      it("TS04", () => {
        cy.get('li a[href="/controlLimit').click();
        cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.get(":nth-child(3) > a > div").click();
        cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.changeStatus("ACTIVE");
        cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.get(".formButton > .button").click();
        cy.takeScreenshotSimplify("4", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
      });
      it("TS05", () => {
        cy.get('li a[href="/controlLimit').click();
        cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.get(":nth-child(3) > a > div").click();
        cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.changeStatus("ACTIVE");
        cy.selectDate("1/Sep/2022", "5/Nov/2024");
        cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        cy.get(".formButton > .button").click();
        cy.takeScreenshotSimplify("4", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        cy.get(".textCenter > .button").click();
        cy.takeScreenshotSimplify("5", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        cy.readFile(
          "/Users/digio/Documents/Automate All/KBANK-portal-automation-workspace/cypress/downloads/EDC_ControlLimit_20241111.csv"
        );
      });
    }
  );
});
