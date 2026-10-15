describe("Test Scenario: Register a set of Terminals", () => {
  beforeEach(() => {
    // auto login to enter portal page
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME"),
      Cypress.env("KBANK_PASSWORD")
    );
    // wait for 1 second
    cy.wait(1000);
    cy.get(":nth-child(4) > a > span").click();
  });

  context("1_Register a set of Terminals", () => {
    it("M20-01", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > div").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M20-02", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > div").click();
      /* ==== End Cypress Studio ==== */

      const filePath = "register-set-terminal/invalid_format_terminal.xls";

      cy.fixture(filePath).then((fileContent) => {
        cy.get("#realupload").attachFile({
          fileContent,
          fileName: "invalid_format_terminal.xls",
          mimeType: "text/xls",
        });
      });

      cy.contains("Please upload a valid CSV");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M20-03", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > div").click();
      /* ==== End Cypress Studio ==== */

      const filePath = "register-set-terminal/invalid_TID_terminal.csv";

      cy.fixture(filePath).then((fileContent) => {
        cy.get("#realupload").attachFile({
          fileContent,
          fileName: "invalid_TID_terminal.csv",
          mimeType: "text/csv",
        });
      });

      cy.get("#ctaMid > .button").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M20-04", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > div").click();
      /* ==== End Cypress Studio ==== */

      const filePath = "register-set-terminal/duplicate_TID_terminal.csv";

      cy.fixture(filePath).then((fileContent) => {
        cy.get("#realupload").attachFile({
          fileContent,
          fileName: "duplicate_TID_terminal.csv",
          mimeType: "text/csv",
        });
      });

      cy.get("#ctaMid > .button").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M20-05", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > div").click();
      /* ==== End Cypress Studio ==== */

      const filePath = "register-set-terminal/invalid_MID_terminal.csv";

      cy.fixture(filePath).then((fileContent) => {
        cy.get("#realupload").attachFile({
          fileContent,
          fileName: "invalid_MID_terminal.csv",
          mimeType: "text/csv",
        });
      });

      cy.get("#ctaMid > .button").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M20-06", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > div").click();
      /* ==== End Cypress Studio ==== */

      const filePath = "register-set-terminal/valid_terminal.csv";

      cy.fixture(filePath).then((fileContent) => {
        cy.get("#realupload").attachFile({
          fileContent,
          fileName: "valid_terminal.csv",
          mimeType: "text/csv",
        });
      });

      cy.get("#ctaMid > .button").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M20-07", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > div").click();
      /* ==== End Cypress Studio ==== */

      const filePath = "register-set-terminal/valid_terminal.csv";

      cy.fixture(filePath).then((fileContent) => {
        cy.get("#realupload").attachFile({
          fileContent,
          fileName: "valid_terminal.csv",
          mimeType: "text/csv",
        });
      });

      cy.get("#ctaMid > .button").click();

      cy.wait(1000);
      cy.get("#beigeMid > .floatR > .button").click();

      cy.contains("Your registration is successful");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });
});
