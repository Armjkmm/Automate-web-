describe("Test Scenario: K+ Shop Register New Readers", () => {
  beforeEach(() => {
    // auto login to enter portal page
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME"),
      Cypress.env("KBANK_PASSWORD")
    );
    // wait for 1 second
    cy.wait(1000);
    cy.get(":nth-child(6) > a > span").click();
  });

  context("1_Register New Readers", () => {
    it("M27-01", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M27-02", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      /* ==== End Cypress Studio ==== */

      const filePath = "kshop-register-new-reader/duplicate_reader.csv";

      cy.fixture(filePath).then((fileContent) => {
        cy.get("#realupload").attachFile({
          fileContent,
          fileName: "duplicate_reader.csv",
          mimeType: "text/csv",
        });
      });

      cy.get("#ctaMid > .button").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M27-03", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      /* ==== End Cypress Studio ==== */

      const filePath = "kshop-register-new-reader/valid_reader.csv";

      cy.fixture(filePath).then((fileContent) => {
        cy.get("#realupload").attachFile({
          fileContent,
          fileName: "valid_reader.csv",
          mimeType: "text/csv",
        });
      });

      cy.get("#ctaMid > .button").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M27-04", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      /* ==== End Cypress Studio ==== */

      const filePath = "kshop-register-new-reader/valid_reader.csv";

      cy.fixture(filePath).then((fileContent) => {
        cy.get("#realupload").attachFile({
          fileContent,
          fileName: "valid_reader.csv",
          mimeType: "text/csv",
        });
      });

      cy.get("#ctaMid > .button").click();

      cy.get("#beigeMid > .floatR > .button").click();

      cy.contains("success");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });
});
