describe("Test_Scenario_01_Login and Logout", () => {
  context("1_Login_Logout", () => {
    it("TS01_TC01 Login with not input", () => {
      cy.enterTtbSmartshopLoginPage();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreemshot
      cy.origin("https://servicesdd.tmbbank.com", () => {
        // check submit button is exist
        cy.get('span[id="submitButton"]').should("exist");
        // Click to submit button
        cy.get("#submitButton").click();

        // cy.get('span[id="submitButton"]').click();

        // Assert for 5 seconds to check error text
        cy.get("#errorText", { timeout: 2000 }).should(
          "have.text",
          'Enter your user ID in the format "domain\\user" or "user@domain".'
        );
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreemshot
    });

    it("TS01_TC02 Login with valid User ID and invalid Password", () => {
      cy.enterTtbSmartshopLoginPage();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreemshot
      cy.origin("https://servicesdd.tmbbank.com", () => {
        cy.get('input[type="email"]#userNameInput').type(
          "TESTMERCDGOAD3@TMBTest.local"
        );
        cy.get('input[type="password"]#passwordInput').type("wdcdcss");
        cy.get("#submitButton").click();
        cy.get("#errorText", { timeout: 2000 }).should(
          "have.text",
          "Incorrect user ID or password. Type the correct user ID and password, and try again."
        );
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreemshot
    });

    it("TS01_TC03 Login with invalid User ID and valid Password", () => {
      cy.enterTtbSmartshopLoginPage();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreemshot
      cy.origin("https://servicesdd.tmbbank.com", () => {
        cy.get('input[type="email"]#userNameInput').type("sdccs@mail.com");
        cy.get('input[type="password"]#passwordInput').type("P@ss56789");
        cy.get("#submitButton").click();
        cy.get("#errorText", { timeout: 2000 }).should(
          "have.text",
          "Incorrect user ID or password. Type the correct user ID and password, and try again."
        );
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreemshot
    });

    it("TS01_TC04 Login with invalid User ID and Password", () => {
      cy.enterTtbSmartshopLoginPage();
      cy.takeScreenshotSimple(1); // taskScreemshot
      cy.origin("https://servicesdd.tmbbank.com", () => {
        cy.get('input[type="email"]#userNameInput').type("sdccs@mail.com");
        cy.get('input[type="password"]#passwordInput').type("wewecw");
        cy.get("#submitButton").click();
        cy.get("#errorText", { timeout: 2000 }).should(
          "have.text",
          "Incorrect user ID or password. Type the correct user ID and password, and try again."
        );
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreemshot
    });

    it("TS01_TC05 Login Bank portal", () => {
      cy.enterTtbSmartshopLoginPage();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreemshot
      cy.origin("https://servicesdd.tmbbank.com", () => {
        cy.get('input[type="email"]#userNameInput').type(
          "TESTMERCDGOAD3@TMBTest.local"
        );
        cy.get('input[type="password"]#passwordInput').type("P@ss56789");
        cy.get("#submitButton").click();
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreemshot
    });

    it("TS01_TC06 Logout DigiPay Bank portal", () => {
      cy.loginBankPortalPage();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreemshot
      let showdropdown =
        ".main-content > :nth-child(1) > .pace > .top-bar > .container-fluid > .row > .col > :nth-child(5) > .list-inline > :nth-child(2) > .dropdown-menu.top-dropdown";
      cy.get(showdropdown).invoke("show");
      let logoutBtn =
        ".main-content > :nth-child(1) > .pace > .top-bar > .container-fluid > .row > .col > :nth-child(5) > .list-inline > :nth-child(2) >.dropdown-menu > .nav > .nav-item";
      cy.get(logoutBtn).should("exist");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreemshot
      cy.get(logoutBtn).click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreemshot
    });
  });
});
