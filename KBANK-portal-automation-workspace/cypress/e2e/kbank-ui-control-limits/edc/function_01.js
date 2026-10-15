describe("Function 01", () => {
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
    "เปลี่ยนชื่อปุ่มฟังก์ชัน Export Control Limit และเปลี่ยนชื่อไฟล์",
    () => {
      it("TS01", () => {
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
      it("TS02", () => {
        cy.get('li a[href="/controlLimit').click();
        cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.get(":nth-child(3) > a > div").click();
        cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.get("#search").type("Kung Shop");
        cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        cy.get("form > :nth-child(1) > .button").click();
        cy.takeScreenshotSimplify("", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.get(".textCenter > .button").click();
        cy.takeScreenshotSimplify("4", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.readFile(
          "/Users/digio/Documents/Automate_All/KBANK-portal-automation-workspace/cypress/downloads/EDC_ControlLimit_20241111.csv"
        );
        //cy.wait(2000);
      });
      it("TS03", () => {
        cy.get('li a[href="/controlLimit').click();
        cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.get(":nth-child(3) > a > div").click();
        cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        //cy.wait(2000);
        cy.changeStatus("ACTIVE");
        cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        cy.selectDate("1/Sep/2019", "5/Nov/2024");
        cy.takeScreenshotSimplify("4", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        cy.get(".formButton > .button").click();
        cy.takeScreenshotSimplify("5", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        cy.get(".textCenter > .button").click();
        cy.takeScreenshotSimplify("6", Cypress.ScreenshotCaptureEnum.FULLPAGE);
        cy.readFile(
          "/Users/digio/Documents/Automate_All/KBANK-portal-automation-workspace/cypress/downloads/EDC_ControlLimit_20241111.csv"
        );
      });
    }
  );
});
