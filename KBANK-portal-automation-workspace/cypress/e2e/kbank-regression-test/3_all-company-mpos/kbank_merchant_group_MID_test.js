describe("Test Scenario: Merchant Group - MID", () => {
  beforeEach(() => {
    // auto login to enter portal page
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME"),
      Cypress.env("KBANK_PASSWORD")
    );

    // wait for 1 seconds
    cy.wait(1000);

    // click company tab
    cy.get(":nth-child(2) > a > span").click();
  });

  context("1_Add MID", () => {
    beforeEach(() => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go90103 > .selectBoxInTable > .selectInTable").select(
        "viewDetails"
      );
      cy.get("#go90103 > :nth-child(2) > #buttonGo").click();
      /* ==== End Cypress Studio ==== */
    });

    it('M08-01: Click "Add MID" button on Company Details page', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get('[style="padding-right: 20px;"] > a').click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it('M08-02: Not input MID and Click "Add Merchant ID"', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get('[style="padding-right: 20px;"] > a').click();
      cy.get("#addMid").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Please enter valid MID");
      cy.contains("Please enter valid Merchant Name");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it('M08-03: Not input MID and Click "Submit"', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get('[style="padding-right: 20px;"] > a').click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Please add Merchant ID");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M08-04", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get('[style="padding-right: 20px;"] > a').click();
      cy.get("#mid").type("000000000000002");
      cy.get("#midName").type("test");
      cy.get("#addMid").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Duplicate MID");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M08-05", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get('[style="padding-right: 20px;"] > a').click();
      cy.getUsableMID().then(($usableMID) => {
        cy.get("#mid").type($usableMID);
      });
      cy.get("#midName").type("test");
      cy.get("#addMid").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M08-06", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get('[style="padding-right: 20px;"] > a').click();
      cy.getUsableMID().then(($usableMID) => {
        cy.get("#mid").type($usableMID);
      });
      cy.get("#midName").type("test");
      cy.get("#addMid").click();
      cy.get("#\\31 ").click();
      cy.get("#submitThis").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("2_Edit Merchant Group", () => {
    beforeEach(() => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go90103 > .selectBoxInTable > .selectInTable").select(
        "viewDetails"
      );
      cy.get("#go90103 > :nth-child(2) > #buttonGo").click();
      /* ==== End Cypress Studio ==== */
    });

    it("M08-07", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#detailBoxWhite > :nth-child(1) > a").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it('M08-08: Click "Edit Group Details" button', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#detailBoxWhite > :nth-child(1) > a").click();
      cy.get(":nth-child(2) > form > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it('M08-09: Edit group details and Click "Submit"', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#detailBoxWhite > :nth-child(1) > a").click();
      cy.get(":nth-child(2) > form > .button").click();
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M08-10", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#detailBoxWhite > :nth-child(1) > a").click();
      cy.get(":nth-child(2) > form > .button").click();
      cy.get("#\\31 ").click();
      cy.get("#submitThis").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("successful");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("3_Edit Profile", () => {
    beforeEach(() => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go90103 > .selectBoxInTable > .selectInTable").select(
        "viewDetails"
      );
      cy.get("#go90103 > :nth-child(2) > #buttonGo").click();
      /* ==== End Cypress Studio ==== */
    });

    it("M08-11", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#detailBoxWhite > :nth-child(1) > a").click();
      cy.get("#go175209 > .selectBoxInTable > .selectInTable").select(
        "/company/editMid"
      );

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#go175209 > :nth-child(2) > #buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M08-12", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#detailBoxWhite > :nth-child(1) > a").click();
      cy.get("#go175209 > .selectBoxInTable > .selectInTable").select(
        "/company/editMid"
      );
      cy.get("#go175209 > :nth-child(2) > #buttonGo").click();
      cy.get("#remark").type("test");
      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M08-13", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#detailBoxWhite > :nth-child(1) > a").click();
      cy.get("#go175209 > .selectBoxInTable > .selectInTable").select(
        "/company/editMid"
      );
      cy.get("#go175209 > :nth-child(2) > #buttonGo").click();
      cy.get("#remark").type("test");
      cy.get("#\\31 ").click();
      cy.wait(1000);
      cy.get("#submitThis").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("4_Suspend MID", () => {
    beforeEach(() => {
      cy.get("#go90103 > .selectBoxInTable > .selectInTable").select(
        "viewDetails"
      );
      cy.get("#go90103 > :nth-child(2) > #buttonGo").click();
      cy.get("#detailBoxWhite > :nth-child(1) > a").click();
    });

    it("M08-14", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go175209 > .selectBoxInTable > .selectInTable").select(
        "suspendMid"
      );

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#go175209 > :nth-child(2) > #buttonGo").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M08-15", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go175209 > .selectBoxInTable > .selectInTable").select(
        "suspendMid"
      );
      cy.get("#go175209 > :nth-child(2) > #buttonGo").click();
      cy.get("#submitForm").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Please enter a short description");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M08-16", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go175209 > .selectBoxInTable > .selectInTable").select(
        "suspendMid"
      );
      cy.get("#go175209 > :nth-child(2) > #buttonGo").click();
      cy.get("#remarks").type("test");
      cy.get("#submitForm").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("success");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("5_Reinstate MID", () => {
    beforeEach(() => {
      cy.get("#go90103 > .selectBoxInTable > .selectInTable").select(
        "viewDetails"
      );
      cy.get("#go90103 > :nth-child(2) > #buttonGo").click();
      cy.get("#detailBoxWhite > :nth-child(1) > a").click();
    });

    it("M08-17", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go175209 > .selectBoxInTable > .selectInTable").select(
        "activateMid"
      );

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#go175209 > :nth-child(2) > #buttonGo").click();

      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M08-18", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go175209 > .selectBoxInTable > .selectInTable").select(
        "activateMid"
      );
      cy.get("#go175209 > :nth-child(2) > #buttonGo").click();
      cy.get("#ctaMid > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Please enter a short description");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M08-19", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#go175209 > .selectBoxInTable > .selectInTable").select(
        "activateMid"
      );
      cy.get("#go175209 > :nth-child(2) > #buttonGo").click();
      cy.get("#remarks").type("test");
      cy.get("#ctaMid > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("success");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });
});
