describe("Test Scenario: Import a Company", () => {
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

  context("1_Import a Company", () => {
    it("M15-01", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(5) > a > div").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M15-02", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(5) > a > div").click();
      /* ==== End Cypress Studio ==== */

      const filePath = "import-company/invalid_type.csv";

      cy.fixture(filePath).then((fileContent) => {
        cy.get("#realupload").attachFile({
          fileContent,
          fileName: "invalid_type.csv",
          mimeType: "text/csv",
        });
      });

      cy.contains("Please upload a valid Xls");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M15-03", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(5) > a > div").click();
      /* ==== End Cypress Studio ==== */

      // TODO: Update to Automated later
      // cy.get(".browseBtn").click();

      // // Step 3: Upload the XLS file
      // const filePath = "import-company/invalid_report.xls";
      // cy.fixture(filePath).then((fileContent) => {
      //   cy.get("#realupload").attachFile({
      //     fileContent,
      //     fileName: "invalid_report.xls",
      //     mimeType: "application/vnd.ms-excel",
      //   });
      // });

      // // Step 4: Click the upload button to submit the form
      // cy.get("#ctaMid > .button").click();

      // cy.wait(3000);

      // cy.get(".xls-list").within(() => {
      //   cy.get(".company-count").should(($el) => {
      //     const count = parseInt($el.text(), 10);
      //     expect(count).to.be.greaterThan(0);
      //   });
      // });

      // cy.takeScreenshotSimplify(
      //"1",
      //   Cypress.ScreenshotCaptureEnum.FULLPAGE
      // );
    });

    it("M15-04", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(5) > a > div").click();
      cy.wait(2000);
      /* ==== End Cypress Studio ==== */

      // TODO: Update to Automated later
      // cy.get(".browseBtn").click();

      // // Step 3: Upload the XLS file
      // const filePath = "import-company/valid_report.xls";
      // cy.fixture(filePath).then((fileContent) => {
      //   cy.get("#realupload").attachFile({
      //     fileContent,
      //     fileName: "valid_report.xls",
      //     mimeType: "application/vnd.ms-excel",
      //   });
      // });

      // // Step 4: Click the upload button to submit the form
      // cy.get("#ctaMid > .button").click();

      // cy.wait(3000);

      // cy.get(".xls-list").within(() => {
      //   cy.get(".company-count").should(($el) => {
      //     const count = parseInt($el.text(), 10);
      //     expect(count).to.be.greaterThan(0);
      //   });
      // });

      // cy.takeScreenshotSimplify(
      //"1",
      //   Cypress.ScreenshotCaptureEnum.FULLPAGE
      // );
    });

    it("M15-05", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(5) > a > div").click();
      /* ==== End Cypress Studio ==== */

      // TODO: Update to Automated later
      // cy.get(".browseBtn").click();

      // // Step 3: Upload the XLS file
      // const filePath = "import-company/valid_report.xls";
      // cy.fixture(filePath).then((fileContent) => {
      //   cy.get("#realupload").attachFile({
      //     fileContent,
      //     fileName: "valid_report.xls",
      //     mimeType: "application/vnd.ms-excel",
      //   });
      // });

      // // Step 4: Click the upload button to submit the form
      // cy.get("#ctaMid > .button").click();

      // cy.wait(3000);

      // cy.get(".xls-list").within(() => {
      //   cy.get(".company-count").should(($el) => {
      //     const count = parseInt($el.text(), 10);
      //     expect(count).to.be.greaterThan(0);
      //   });
      // });

      // cy.wait(1000);
      // cy.get("#beigeMid > .floatR > .button").click();

      // cy.contains("Your registration is successful");

      // cy.takeScreenshotSimplify(
      //"1",
      //   Cypress.ScreenshotCaptureEnum.FULLPAGE
      // );
    });
  });
});
