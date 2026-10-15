function goToSubMenuApprovalCompany() {
  cy.get(
    ".css-1mvsuhg > .MuiDrawer-root > .MuiPaper-root > .css-1jd25az > .MuiList-root > :nth-child(2) > #MAINMENU_6 > .MuiListItemText-root > .MuiTypography-root",
  ).click();
  cy.wait(3000);

  cy.intercept("POST", "/company/api/company/review/list").as(
    "approvalCompany",
  );
  cy.get(
    ":nth-child(3) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiList-root > #SUB_MENU_6_1_2",
  ).click();
  cy.wait("@approvalCompany");
}

let companyName = "play 48";
let taxIDCompany = "5213021036049";
let MID = "862843932032552";
let accountNo = "1111088126";

let companyNameApprovalInviteOwner = "Play 37"; //ห้ามเปลี่ยน
let companyNamePendingAndApprovalCompany = "Pentest06";
let companyNameRejectReapprove = "avocado10";

describe("Test Scenario: 02-1 Company (Approval Company)2", () => {
  beforeEach(() => {
    //auto login to enter portal page
    cy.loginBankPortalPageUAT(
      Cypress.env("OPERATOR_USERNAME"),
      Cypress.env("OPERATOR_PASSWORD"),
    );
    //   Startเปลี่ยนภาษา Web ให้เป็นภาษา English
    //  cy.get("#BT_CHANGE_LANG").click();
    //  cy.get("#MENU_LANG_EN > .MuiTypography-root").click();
    //   End เปลี่ยนภาษา Web ให้เป็นภาษา English
  });
  context("5 Re-approve Company", () => {
    it("TS02-1_TC33-TC39_Reapprove Company", () => {
      goToSubMenuApprovalCompany();
      cy.get("#TF_COMPANY").type(companyNameRejectReapprove);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiPaper-root > .MuiList-root").click();
      cy.get("#DD_NOTE").clear();
      cy.wait(1000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiFormControl-root > .MuiInputBase-root").type(
        "Reapprove Company",
      );
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_APPROVE").click();
      cy.contains("Confirm Approve?");
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_LEFT").click();
      cy.wait(2000);
      cy.contains("Success");
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });
});
