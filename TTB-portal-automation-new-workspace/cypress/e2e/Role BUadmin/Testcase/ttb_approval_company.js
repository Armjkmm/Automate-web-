function goToSubMenuApprovalCompany() {
  cy.get(
    ".css-1mvsuhg > .MuiDrawer-root > .MuiPaper-root > .css-1jd25az > .MuiList-root > :nth-child(2) > #MAINMENU_6 > .MuiListItemText-root > .MuiTypography-root",
  ).click();
  cy.wait(3000);
  let approvalCompanyBtn = cy.get(
    ":nth-child(3) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiList-root > #SUB_MENU_6_1_2",
    { timeout: 20000 },
  );
  approvalCompanyBtn.should("be.visible");
  approvalCompanyBtn.click();
}

let companyName = "play 48";
let taxIDCompany = "5213021036049";
let MID = "862843968581868";
let accountNo = "1111088126";

let companyNameApprovalInviteOwner = "Play 37"; //ห้ามเปลี่ยน
let companyNamePendingAndApprovalCompany = "Play210";
let companyNameRejectReapprove = "	Pentest06";

describe("Test Scenario: 02-1 Company (Approval Company)", () => {
  beforeEach(() => {
    //auto login to enter portal page
    cy.loginBankPortalPageUAT(
      Cypress.env("ADMIN_USERNAME"),
      Cypress.env("ADMIN_PASSWORD"),
    );
    //   Startเปลี่ยนภาษา Web ให้เป็นภาษา English
    //  cy.get("#BT_CHANGE_LANG").click();
    //  cy.get("#MENU_LANG_EN > .MuiTypography-root").click();
    //   End เปลี่ยนภาษา Web ให้เป็นภาษา English
  });

  context("1 Search Approval Company", () => {
    it("TS02-1_TC01-TC02_Approval Company page", () => {
      goToSubMenuApprovalCompany();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02-1_TC03_Search by Company Name data not found", () => {
      goToSubMenuApprovalCompany();
      cy.get("#TF_COMPANY").type("HAX").should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02-1_TC04_Search by Tax ID data not found", () => {
      goToSubMenuApprovalCompany();
      cy.get("#TF_TAX_ID").type("1211212112112").should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02-1_TC05_Search by MID data not found", () => {
      goToSubMenuApprovalCompany();
      cy.get("#TF_MID").type("1819111110923").should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02-1_TC06_Search by Account Number data not found", () => {
      goToSubMenuApprovalCompany();
      cy.get("#DD_ACCOUNT_NUMBER").type("0111111111").should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02-1_TC07_Search by Request Type and Status not found", () => {
      goToSubMenuApprovalCompany();
      cy.get("#DD_REQUEST_TYPE").click();
      cy.wait(1000);
      cy.get("#DD_TYPE_1").click();
      cy.wait(1000);
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_4").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02-1_TC08_Search by Company Name", () => {
      goToSubMenuApprovalCompany();
      cy.get("#TF_COMPANY").type(companyName).should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(companyName).should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02-1_TC09_Search by Tax ID", () => {
      goToSubMenuApprovalCompany();
      cy.get("#TF_TAX_ID").type(taxIDCompany).should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiPaper-root > .MuiList-root").click();
      cy.contains(taxIDCompany).should("be.visible");
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02-1_TC10_Search by MID", () => {
      goToSubMenuApprovalCompany();
      cy.get("#TF_MID").type(MID).should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiPaper-root > .MuiList-root").click();
      cy.contains(MID).should("be.visible");
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02-1_TC11_Search by Account Number ", () => {
      goToSubMenuApprovalCompany();
      cy.get("#DD_ACCOUNT_NUMBER").type(accountNo).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiPaper-root > .MuiList-root").click();
      cy.contains(accountNo).should("be.visible");
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02-1_TC12_Search by Request Type", () => {
      goToSubMenuApprovalCompany();
      cy.get("#DD_REQUEST_TYPE").click();
      cy.wait(1000);
      cy.get("#DD_TYPE_1").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Create Merchant").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02-1_TC13_Search by Request Type and Status", () => {
      goToSubMenuApprovalCompany();
      cy.get("#DD_REQUEST_TYPE").click();
      cy.wait(1000);
      cy.get("#DD_TYPE_1").click();
      cy.wait(1000);
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_2").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Create Merchant").should("be.visible");
      cy.contains("Approved").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("2 Approve Company รอยืนยันการเข้าร่วมร้านค้าของ Owner อยู่", () => {
    it("TS02-1_TC14-TC18_Approve Company รอยืนยันการเข้าร่วมร้านค้าของ Owner อยู่", () => {
      goToSubMenuApprovalCompany();
      cy.get("#TF_COMPANY").type(companyNameApprovalInviteOwner);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiPaper-root > .MuiList-root").click();
      cy.get(".MuiFormControl-root > .MuiInputBase-root")
        .type("Approve Company")
        .should("be.visible");
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        '[style="min-width: 100px; font-size: 12px; height: 40px; background-color: rgb(136, 191, 94); margin-right: 15px; text-transform: none;"]',
      ).click();
      cy.contains("Confirm Approve?").should("be.visible");
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_RIGHT").click();
      cy.get(
        '[style="min-width: 100px; font-size: 12px; height: 40px; background-color: rgb(136, 191, 94); margin-right: 15px; text-transform: none;"]',
      ).click();
      cy.get("#BT_LEFT").click();
      cy.contains("Have pending Company user owner").should("be.visible");
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
  });

  context("3 View Approval Company Detail and Approval Company", () => {
    it("TS02-1_TC19-TC25_View Approval Company Detail and Approval Company", () => {
      goToSubMenuApprovalCompany();
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_1").click();
      cy.wait(1000);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/company/api/company/review/detail").as(
        "waitDetailApprovalPage",
      );
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiPaper-root > .MuiList-root").click();
      cy.wait("@waitDetailApprovalPage");
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#DD_NOTE").type("Approval Company").should("be.visible");
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        '[style="min-width: 100px; font-size: 12px; height: 40px; background-color: rgb(136, 191, 94); margin-right: 15px; text-transform: none;"]',
      ).click();
      cy.contains("Confirm Approve?").should("be.visible");
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_RIGHT").click();
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        '[style="min-width: 100px; font-size: 12px; height: 40px; background-color: rgb(136, 191, 94); margin-right: 15px; text-transform: none;"]',
      ).click();
      cy.contains("Confirm Approve?").should("be.visible");
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_LEFT").click();
      cy.contains("Success").should("be.visible");
      cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.takeScreenshotSimple(9, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("4 Reject Company", () => {
    it("TS02-1_TC26-TC32_Reject Company", () => {
      goToSubMenuApprovalCompany();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.intercept("POST", "/company/api/company/review/detail").as(
        "waitDetailApprovalPage",
      );
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiPaper-root > .MuiList-root").click();
      cy.wait("@waitDetailApprovalPage");
      cy.get("#DD_NOTE").clear();
      cy.wait(1000);
      cy.get("#BT_REJECT").click();
      cy.contains("Incorrect information");
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#DD_NOTE").type("Reject Company");
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_REJECT").click();
      cy.contains("Confirm Reject?");
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_LEFT").click();
      cy.wait(2000);
      cy.contains("Success");
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("5 Re-approve Company", () => {
    it("TS02-1_TC33-TC39_Reapprove Company", () => {
      goToSubMenuApprovalCompany();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.intercept("POST", "/company/api/company/review/detail").as(
        "waitDetailApprovalPage",
      );
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiPaper-root > .MuiList-root").click();
      cy.wait("@waitDetailApprovalPage");
      cy.get("#DD_NOTE").clear();
      cy.wait(1000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#DD_NOTE").type("Reapprove Company");
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
