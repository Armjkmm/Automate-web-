describe("Test Scenario: All Company", () => {
  beforeEach(() => {
    // auto login to enter portal page
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME"),
      Cypress.env("KBANK_PASSWORD")
    );

    // wait for 1 seconds
    cy.wait(1000);

    // select the tab all companies
    cy.get(":nth-child(2) > a > span").click();
  });

  context("7_add_company", () => {
    let usableMID;

    it('M07-01: Click "Add a Company" sub-menu', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      /* ==== End Cypress Studio ==== */

      cy.get(".barPaddTitle").should("contain.text", "Add a Company");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M07-02", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Please enter valid ");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it('M07-03: Input company details and Click "Submit"', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      /* ==== End Cypress Studio ==== */

      let prefixName = "AutomatedTestCompany";
      let searchUrl =
        "https://mpostest1.kasikornbank.com:7443/company/search?search=";
      cy.getNextIdFollowingPrefix(prefixName, searchUrl).then(
        ($generateName) => {
          cy.get("#businessName").type($generateName);

          let prefix = $generateName.substring(0, 3);
          let number = $generateName.match(/\d+/)[0];
          let shortName = `${prefix}${number}`;
          cy.get("#businessShortName").type(shortName);

          cy.get("#businessType").type("0000");

          cy.get("#address1").type("SAMPLE TEST Rd.");
          cy.get("#city").type("TEST");
          cy.get("#postcode").type("10001");

          cy.get("#businessRegistrationNo").type("0000000");

          cy.randomHash(1e7, 7).then((hash) => {
            cy.log(hash);
            let bussinessTel = `02${hash}`;
            cy.get("#businessContact").type(bussinessTel);
          });

          cy.get("#fullName").type("mr.automated");
          cy.get("#contact").type("0800000000");

          let mockTestEmail = `${shortName}@example.com`;
          cy.get("#email").type(mockTestEmail);
          cy.get("#step1 > #barPadding > :nth-child(2)").click();

          cy.get("#maxAmountPerTransac").type("1000");
          cy.get("#maxAmountPerMonth").type("100000");

          cy.get("#groupName").type("TEST");

          cy.getUsableMID().then(($usableMID) => {
            usableMID = $usableMID;
            cy.get("#mid").type($usableMID);
          });

          cy.get("#midName").type("test");
          cy.get("#addMid").click();

          cy.contains("Duplicate MID").should("not.exist");
        }
      );

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#\\31 ").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M07-04", () => {
      cy.get(":nth-child(2) > a > div").click();

      let prefixName = "AutomatedTestCompany";
      let searchUrl =
        "https://mpostest1.kasikornbank.com:7443/company/search?search=";
      cy.getNextIdFollowingPrefix(prefixName, searchUrl).then(
        ($generateName) => {
          cy.get("#businessName").type($generateName);

          let prefix = $generateName.substring(0, 3);
          let number = $generateName.match(/\d+/)[0];
          let shortName = `${prefix}${number}`;
          cy.get("#businessShortName").type(shortName);

          cy.get("#businessType").type("0000");

          cy.get("#address1").type("SAMPLE TEST Rd.");
          cy.get("#city").type("TEST");
          cy.get("#postcode").type("10001");

          cy.get("#businessRegistrationNo").type("0000000");

          cy.randomHash(1e7, 7).then((hash) => {
            cy.log(hash);
            let bussinessTel = `02${hash}`;
            cy.get("#businessContact").type(bussinessTel);
          });

          cy.get("#fullName").type("mr.automated");
          cy.get("#contact").type("0800000000");

          let mockTestEmail = `${shortName}@example.com`;
          cy.get("#email").type(mockTestEmail);
          cy.get("#step1 > #barPadding > :nth-child(2)").click();

          cy.get("#maxAmountPerTransac").type("1000");
          cy.get("#maxAmountPerMonth").type("100000");

          cy.get("#groupName").type("TEST");

          cy.get("#mid").type(usableMID);
          cy.get("#midName").type("test");
          cy.get("#addMid").click();

          cy.contains("Duplicate MID").should("not.exist");
        }
      );
      cy.get("#\\31 ").click();

      cy.wait(2000);
      cy.get("#submitThis").click();

      cy.contains("successfully added");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });
});
