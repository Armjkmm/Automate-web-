describe("Test Scenario: Add a company Control Limit", () => {
  beforeEach(() => {
    // auto login to enter portal page
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME"),
      Cypress.env("KBANK_PASSWORD")
    );

    // wait for 1 seconds
    cy.wait(1000);
    cy.get(":nth-child(3) > a > span").click();
  });

  context("1_Add_A_Company_Control_Limit", () => {
    let usableMID;

    it('M12-01: Click "Add a Company Control Limit" sub-menu', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M12-02", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Please enter valid ");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it('M12-03: Input company details and Click "Submit"', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      /* ==== End Cypress Studio ==== */

      let prefixName = "AutomatedTestEDCCompany";

      let searchUrl =
        "https://mpostest1.kasikornbank.com:7443/controlLimit/listEDC/search?search=";
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

          cy.getUsableMID().then(($usableMID) => {
            usableMID = $usableMID;
            cy.get("#mid").type($usableMID);
          });

          cy.get("#midName").type("test");
          cy.get("#maxAmountEDCPerTransac").type("1000");
          cy.get("#maxAmountEDCPerMonth").type("100000");
          cy.get("#addMidEDC").click();

          cy.contains("Duplicate MID").should("not.exist");
        }
      );

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#\\31 ").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M12-04", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      /* ==== End Cypress Studio ==== */

      let prefixName = "AutomatedTestEDCCompany";

      let searchUrl =
        "https://mpostest1.kasikornbank.com:7443/controlLimit/listEDC/search?search=";
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

          cy.get("#mid").type(usableMID);
          cy.get("#midName").type("test");
          cy.get("#maxAmountEDCPerTransac").type("1000");
          cy.get("#maxAmountEDCPerMonth").type("100000");
          cy.get("#addMidEDC").click();

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
