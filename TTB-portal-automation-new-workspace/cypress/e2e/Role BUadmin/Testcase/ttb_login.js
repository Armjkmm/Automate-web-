describe("Test Scenario: 01 Login Logout", () => {
  context("1_Login_Logout", () => {
    it("TS01_TC01 Login with not input", () => {
      cy.enterTtbSmartshopLoginPage();
      cy.origin("https://servicesdd.tmbbank.com", () => {
        cy.get("#submitButton").click();
        cy.contains("Enter your user ID in the format");
      });
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(5000);
    });

    it("TS01_TC02 Login with valid User ID and invalid Password", () => {
      cy.enterTtbSmartshopLoginPage();
      cy.origin("https://servicesdd.tmbbank.com", () => {
        cy.get("#submitButton").click();
        cy.get("#userNameInput").type("ruttagorn");
        cy.get("#passwordInput").type("Thanongsa@@@");
        cy.contains("Enter your user ID in the format");
      });
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(5000);
    });

    it("TS01_TC03 Login with invalid User ID and valid Password", () => {
      cy.enterTtbSmartshopLoginPage();
      cy.origin("https://servicesdd.tmbbank.com", () => {
        cy.get("#submitButton").click();
        cy.get("#userNameInput").type("Thanongsa");
        cy.get("#passwordInput").type("P@ss1604");
        cy.contains("Enter your user ID in the format");
      });
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(5000);
    });

    it("TS01_TC04 Login with invalid User ID and invalid Password", () => {
      cy.enterTtbSmartshopLoginPage();
      cy.origin("https://servicesdd.tmbbank.com", () => {
        cy.get("#submitButton").click();
        cy.get("#userNameInput").type("Thanongsa");
        cy.get("#passwordInput").type("P@ss16asa04");
        cy.contains("Enter your user ID in the format");
      });
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it("TS01_TC05 Login Bank portal", () => {
      cy.enterTtbSmartshopLoginPage();
      cy.origin("https://servicesdd.tmbbank.com", () => {
        cy.get("#userNameInput").type("DGO_Bua1@TMBTest.local");
        cy.get("#passwordInput").type("P@ss1604");
      });
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/company/api/dashboard/summary").as(
        "dashboardSummary",
      );
      cy.get("#submitButton").click();
      cy.wait("@dashboardSummary");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it("TS01_TC06 Logout Bank portal", () => {
      cy.enterTtbSmartshopLoginPage();
      cy.intercept("POST", "/company/api/dashboard/summary").as(
        "dashboardSummary",
      );
      cy.origin("https://servicesdd.tmbbank.com", () => {
        cy.get("#userNameInput").type("DGO_Bua1@TMBTest.local");
        cy.get("#passwordInput").type("P@ss1604");
      });
      cy.get("#submitButton").click();
      cy.wait(3000);
      cy.url().should("include", "epayment-tmb");
      cy.wait("@dashboardSummary");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_LOGOUT").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });
});
