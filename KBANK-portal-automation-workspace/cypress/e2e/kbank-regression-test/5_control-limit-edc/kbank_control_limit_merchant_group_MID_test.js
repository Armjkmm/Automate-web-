describe("Test Scenario: Merchant Group - MID (Control Limit)", () => {
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

  context("1_Add MID", () => {
    beforeEach(() => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go53505 > .selectBoxInTable > .selectInTable").select(
        "viewDetailsEDC"
      );
      cy.get("#go53505 > :nth-child(2) > #buttonGo").click();
      /* ==== End Cypress Studio ==== */

      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      /* ==== End Cypress Studio ==== */
    });

    it('M11-01: Click "Add MID" button on Company Details page', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get('[style="padding-right: 20px;"] > a').click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it('M11-02: Not input MID and Click "Add Merchant ID"', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get('[style="padding-right: 20px;"] > a').click();
      cy.get("#addMidEDC").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Please enter valid MID");
      cy.contains("Please enter valid Merchant Name");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it('M11-03: Not input MID and Click "Submit"', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get('[style="padding-right: 20px;"] > a').click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Please add Merchant ID");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M11-04", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get('[style="padding-right: 20px;"] > a').click();
      cy.get("#mid").type("401013922423001");
      cy.get("#midName").type("m11-04");
      cy.get("#maxAmountEDCPerTransac").type(5000);
      cy.get("#maxAmountEDCPerMonth").type(50000);
      cy.get("#addMidEDC").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Duplicate MID");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M11-05", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get('[style="padding-right: 20px;"] > a').click();

      cy.getUsableMID().then(($usableMID) => {
        cy.get("#mid").type($usableMID);
      });

      cy.get("#midName").type("m11-04");
      cy.get("#maxAmountEDCPerTransac").type(5000);
      cy.get("#maxAmountEDCPerMonth").type(50000);
      cy.get("#addMidEDC").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M11-06", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get('[style="padding-right: 20px;"] > a').click();

      cy.getUsableMID().then(($usableMID) => {
        cy.get("#mid").type($usableMID);
      });

      cy.get("#midName").type("m11-04");
      cy.get("#maxAmountEDCPerTransac").type(5000);
      cy.get("#maxAmountEDCPerMonth").type(50000);
      cy.get("#addMidEDC").click();
      cy.get("#\\31 ").click();
      cy.get("#submitThis").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("success");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("2_Edit Profile", () => {
    beforeEach(() => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go53505 > .selectBoxInTable > .selectInTable").select(
        "viewDetailsEDC"
      );
      cy.get("#go53505 > :nth-child(2) > #buttonGo").click();
      /* ==== End Cypress Studio ==== */
    });

    it("M11-07", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#detailBoxWhite > :nth-child(1) > a").click();
      cy.get("#go71127 > .selectBoxInTable > .selectInTable").select(
        "/controlLimit/editMidEDC"
      );

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#go71127 > :nth-child(2) > #buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M11-08", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#detailBoxWhite > :nth-child(1) > a").click();
      cy.get("#go71127 > .selectBoxInTable > .selectInTable").select(
        "/controlLimit/editMidEDC"
      );
      cy.get("#go71127 > :nth-child(2) > #buttonGo").click();
      cy.get("#remark").type("test m11 08");
      /* ==== End Cypress Studio ==== */
      cy.get("#\\31").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M11-09", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#detailBoxWhite > :nth-child(1) > a").click();
      cy.get("#go71127 > .selectBoxInTable > .selectInTable").select(
        "/controlLimit/editMidEDC"
      );
      cy.get("#go71127 > :nth-child(2) > #buttonGo").click();
      cy.get("#remark").type("test m11 08");
      /* ==== End Cypress Studio ==== */
      cy.get("#\\31").click();
      cy.get("#submitThis").click();

      cy.contains("success");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("3_Suspend MID", () => {
    beforeEach(() => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go53505 > .selectBoxInTable > .selectInTable").select(
        "viewDetailsEDC"
      );
      cy.get("#go53505 > :nth-child(2) > #buttonGo").click();
      /* ==== End Cypress Studio ==== */
    });

    it("M11-10", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#detailBoxWhite > :nth-child(1) > a").click();
      cy.get("#go71127 > .selectBoxInTable > .selectInTable").select(
        "suspendMid"
      );

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#go71127 > :nth-child(2) > #buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M11-11", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#detailBoxWhite > :nth-child(1) > a").click();
      cy.get("#go71127 > .selectBoxInTable > .selectInTable").select(
        "suspendMid"
      );

      cy.get("#go71127 > :nth-child(2) > #buttonGo").click();
      cy.get("#submitForm").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Please enter a short description");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M11-12", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#detailBoxWhite > :nth-child(1) > a").click();
      cy.get("#go71127 > .selectBoxInTable > .selectInTable").select(
        "suspendMid"
      );

      cy.get("#go71127 > :nth-child(2) > #buttonGo").click();
      cy.get("#remarks").type("test m11-12");
      cy.get("#submitForm").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("success");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("4_Reinstate MID", () => {
    beforeEach(() => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go53505 > .selectBoxInTable > .selectInTable").select(
        "viewDetailsEDC"
      );
      cy.get("#go53505 > :nth-child(2) > #buttonGo").click();
      /* ==== End Cypress Studio ==== */
    });

    it("M11-13", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#detailBoxWhite > :nth-child(1) > a").click();
      cy.get("#go71127 > .selectBoxInTable > .selectInTable").select(
        "activateMid"
      );

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#go71127 > :nth-child(2) > #buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M11-14", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#detailBoxWhite > :nth-child(1) > a").click();
      cy.get("#go71127 > .selectBoxInTable > .selectInTable").select(
        "activateMid"
      );

      cy.get("#go71127 > :nth-child(2) > #buttonGo").click();
      cy.get("#ctaMid > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Please enter a short description");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M11-15", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#detailBoxWhite > :nth-child(1) > a").click();
      cy.get("#go71127 > .selectBoxInTable > .selectInTable").select(
        "activateMid"
      );

      cy.get("#go71127 > :nth-child(2) > #buttonGo").click();
      cy.get("#remarks").type("test m11-15");
      cy.get("#ctaMid > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("success");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });
});
