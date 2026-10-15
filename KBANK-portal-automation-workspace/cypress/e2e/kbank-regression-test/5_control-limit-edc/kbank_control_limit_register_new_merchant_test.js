describe("Test Scenario: Register New Merchant", () => {
  beforeEach(() => {
    // auto login to enter portal page
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME"),
      Cypress.env("KBANK_PASSWORD")
    );

    // wait for 1 second
    cy.wait(1000);
    cy.get(":nth-child(3) > a > span").click();
  });

  context("1_Register New Merchant", () => {
    it("M14-01", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > div").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M14-02", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > div").click();
      /* ==== End Cypress Studio ==== */

      const filePath =
        "register-new-merchant/invalid_type_register_new_merchant.xls";

      cy.fixture(filePath).then((fileContent) => {
        cy.get("#realupload").attachFile({
          fileContent,
          fileName: "invalid_type_register_new_merchant.xls",
          mimeType: "text/xls",
        });
      });

      cy.contains("Please upload a valid CSV");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M14-03", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > div").click();
      /* ==== End Cypress Studio ==== */

      const filePath =
        "register-new-merchant/invalid_register_new_merchant.csv";

      cy.fixture(filePath).then((fileContent) => {
        cy.get("#realupload").attachFile({
          fileContent,
          fileName: "invalid_register_new_merchant.csv",
          mimeType: "text/csv",
        });
      });

      cy.get("#ctaMid > .button").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M14-04", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > div").click();
      /* ==== End Cypress Studio ==== */

      const filePath = "register-new-merchant/valid_register_new_merchant.csv";

      cy.fixture(filePath).then((fileContent) => {
        cy.get("#realupload").attachFile({
          fileContent,
          fileName: "valid_register_new_merchant.csv",
          mimeType: "text/csv",
        });
      });

      cy.get("#ctaMid > .button").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M14-05", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(4) > a > div").click();
      /* ==== End Cypress Studio ==== */

      const filePath = "register-new-merchant/valid_register_new_merchant.csv";

      cy.fixture(filePath).then((fileContent) => {
        cy.get("#realupload").attachFile({
          fileContent,
          fileName: "valid_register_new_merchant.csv",
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
