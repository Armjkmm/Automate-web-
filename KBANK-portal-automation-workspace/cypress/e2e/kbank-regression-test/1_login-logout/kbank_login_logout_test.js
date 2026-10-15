describe("Test Scenario: Login: Logout", () => {
  context("1_Login: Logout", () => {
    it("MS01-01", () => {
      cy.visit("https://mpostest1.kasikornbank.com:7443/auth/login");

      // take screenshot of manage staffs page
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);

      // check the username input field is exist
      cy.get('input[id="j_username"]').should("exist");
      // Type username into username input field
      cy.get('input[id="j_username"]').type(Cypress.env("KBANK_USERNAME"));

      // check the password input field is exist
      cy.get('input[id="j_password"]').should("exist");
      // Type password into password input field
      cy.get('input[id="j_password"]').type("SAMPLE");

      // take screenshot of manage staffs page
      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);

      // check submit button is exist
      cy.get('a[id="btn-login"]').should("exist");
      // Click to submit button
      cy.get('a[id="btn-login"]').click();

      // find error message should show message as we expected
      let errorMsg = ".errorMsg > span";
      cy.get(errorMsg, { timeout: 2000 }).should(
        "have.text",
        "Invalid Username or Password"
      );

      // take screenshot error message
      cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it("MS01-02", () => {
      cy.visit("https://mpostest1.kasikornbank.com:7443/auth/login");

      // take screenshot of manage staffs page
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);

      // check the username input field is exist
      cy.get('input[id="j_username"]').should("exist");
      // Type username into username input field
      cy.get('input[id="j_username"]').type("SAMPLE");

      // check the password input field is exist
      cy.get('input[id="j_password"]').should("exist");
      // Type password into password input field
      cy.get('input[id="j_password"]').type(Cypress.env("KBANK_PASSWORD"));

      // take screenshot of manage staffs page
      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);

      // check submit button is exist
      cy.get('a[id="btn-login"]').should("exist");
      // Click to submit button
      cy.get('a[id="btn-login"]').click();

      // find error message should show message as we expected
      let errorMsg = ".errorMsg > span";
      cy.get(errorMsg, { timeout: 2000 }).should(
        "have.text",
        "Invalid Username or Password"
      );

      // take screenshot error message
      cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it("MS01-03", () => {
      cy.visit("https://mpostest1.kasikornbank.com:7443/auth/login");

      // take screenshot of manage staffs page
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);

      // check the username input field is exist
      cy.get('input[id="j_username"]').should("exist");
      // Type username into username input field
      cy.get('input[id="j_username"]').type("SAMPLE");

      // check the password input field is exist
      cy.get('input[id="j_password"]').should("exist");
      // Type password into password input field
      cy.get('input[id="j_password"]').type("SAMPLE");

      // take screenshot of manage staffs page
      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);

      // check submit button is exist
      cy.get('a[id="btn-login"]').should("exist");
      // Click to submit button
      cy.get('a[id="btn-login"]').click();

      // find error message should show message as we expected
      let errorMsg = ".errorMsg > span";
      cy.get(errorMsg, { timeout: 2000 }).should(
        "have.text",
        "Invalid Username or Password"
      );

      // take screenshot error message
      cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it("MS01-04", () => {
      cy.visit("https://mpostest1.kasikornbank.com:7443/auth/login");

      // take screenshot of manage staffs page
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);

      // check the username input field is exist
      cy.get('input[id="j_username"]').should("exist");
      // Type username into username input field
      cy.get('input[id="j_username"]').type(Cypress.env("KBANK_USERNAME"));

      // check the password input field is exist
      cy.get('input[id="j_password"]').should("exist");
      // Type password into password input field
      cy.get('input[id="j_password"]').type(Cypress.env("KBANK_PASSWORD"));

      // take screenshot of manage staffs page
      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);

      // check submit button is exist
      cy.get('a[id="btn-login"]').should("exist");
      // Click to submit button
      cy.get('a[id="btn-login"]').click();

      // Check it can login to console page
      cy.url()
        .should("include", "/console")
        .then(() => {
          return new Cypress.Promise((resolve) => {
            const checkReadyState = () => {
              if (document.readyState === "complete") {
                resolve();
              } else {
                setTimeout(checkReadyState, 100);
              }
            };
            checkReadyState();
          });
        });

      // take screenshot error message
      cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it("MS01-05", () => {
      // auto login to enter portal page
      cy.enterKasikornBankPortalPage(
        Cypress.env("KBANK_USERNAME"),
        Cypress.env("KBANK_PASSWORD")
      );

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);

      // find logout button then click to logout
      let logoutBtn = ".logoutBtn > .button";
      cy.get(logoutBtn).should("exist").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });
});
